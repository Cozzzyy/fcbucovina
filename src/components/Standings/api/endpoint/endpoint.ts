import type { GraphQLResponse, SeriesRankingsData } from '../model/model';

const GRAPHQL_ENDPOINT = 'https://datalake-prod2018.rbfa.be/graphql';

const STANDINGS_QUERY = `
  query GetSeriesRankings {
    seriesRankings(id: "CHP_125628") {
      id
      name
      rankings {
        type
        teams {
          position
          name
          points
          matchesPlayed
          matchesWon
          matchesLost
          matchesDrawn
          logo
        }
      }
    }
  }
`;

/**
 * Fetch standings data from the RBFA GraphQL API
 */
export async function fetchSeriesRankings(): Promise<SeriesRankingsData> {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: STANDINGS_QUERY,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: GraphQLResponse<SeriesRankingsData> = await response.json();

  if (!data.data?.seriesRankings) {
    throw new Error('Invalid response structure from API');
  }

  return data.data.seriesRankings;
}
