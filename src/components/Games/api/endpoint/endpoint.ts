import type { MatchDetail, ClubMatchesData, GraphQLResponse } from "../model/model";
import type { Game } from "../../../../types/Game";

const GRAPHQL_ENDPOINT = "https://datalake-prod2018.rbfa.be/graphql";
const CLUB_ID = "9585"; // FC Bucovina

const getDateRange = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  
  const startDate = new Date(currentYear, 6, 7); // July 7
  const endDate = new Date(currentYear + 1, 6, 7); // July 7 next year
  
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };
  
  return {
    startDate: formatDate(startDate),
    endDate: formatDate(endDate),
  };
};

export async function fetchClubMatches(): Promise<ClubMatchesData> {
  const { startDate, endDate } = getDateRange();
  
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      operationName: "clubMatchesAssignations",
      variables: {
        clubId: CLUB_ID,
        language: "nl",
        startDate,
        endDate,
        hasLocation: false,
      },
      extensions: {
        persistedQuery: {
          version: 1,
          sha256Hash: "eeeb92967d0b593c29f321f717ab2d81179bad5e1efce80a963a7d1ef4fabb41",
        },
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: GraphQLResponse = await response.json();

  if (!data.data?.clubMatchesAssignations) {
    if (data.errors) {
      console.error("GraphQL Errors:", data.errors);
    }
    throw new Error("Invalid response structure from API");
  }

  return data.data;
}

export function transformToGameFormat(matches: MatchDetail[]): Game[] {
  return matches.map((match) => {
    const homeTeam = match.homeTeam.name;
    const awayTeam = match.awayTeam.name;
    const homeTeamLogo = match.homeTeam.logo;
    const awayTeamLogo = match.awayTeam.logo;

    let score = "vs";
    if (match.showScore && match.outcome) {
      const homeGoals =
        match.outcome.homeTeamGoals !== null ? match.outcome.homeTeamGoals : "?";
      const awayGoals =
        match.outcome.awayTeamGoals !== null ? match.outcome.awayTeamGoals : "?";
      score = `${homeGoals}-${awayGoals}`;
    }

    const startDateTime = new Date(match.startTime);
    const date = startDateTime.toISOString().split("T")[0];
    const time = startDateTime.toLocaleTimeString("nl-BE", {
      hour: "2-digit",
      minute: "2-digit",
    });

    let location = "Unknown Location";
    if (match.location) {
      location = `${match.location.address}, ${match.location.city}`;
    }

    return {
      homeTeam,
      homeTeamLogo,
      awayTeam,
      awayTeamLogo,
      matchType: match.title || "Match",
      score,
      date,
      location,
      time,
    };
  });
}
