export interface RankingTeam {
  position: number;
  name: string;
  points: number;
  matchesPlayed: number;
  matchesWon: number;
  matchesLost: number;
  matchesDrawn: number;
  logo?: string;
}

export interface Ranking {
  type: string;
  teams: RankingTeam[];
}

export interface SeriesRankingsData {
  id: string;
  name: string;
  rankings: Ranking[];
}

export interface GraphQLResponse<T> {
  data: {
    seriesRankings: T;
  };
}
