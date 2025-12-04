import type { Team } from "../../../types/Team";
import type { fetchSeriesRankings } from "../api/endpoint/endpoint";

export default function transformToTeamFormat(
  apiData: Awaited<ReturnType<typeof fetchSeriesRankings>>
): Team[] {
  const generalRanking = apiData.rankings.find((r) => r.type === 'generalRanking');

  if (!generalRanking) {
    throw new Error('General ranking not found in response');
  }

  return generalRanking.teams.map((team) => ({
    pos: team.position,
    team: team.name,
    pts: team.points,
    matches: team.matchesPlayed,
    wins: team.matchesWon,
    draws: team.matchesDrawn,
    losses: team.matchesLost,
    image: team.logo,
  }));
}