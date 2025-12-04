export interface MatchDetailTeam {
  name: string;
  clubId: string;
  id: string;
  logo: string;
}

export interface MatchLocation {
  city: string;
  address: string;
}

export interface MatchDetailOutcome {
  status: string;
  homeTeamGoals: number | null;
  awayTeamGoals: number | null;
}

export interface MatchSeries {
  id: string;
}

export interface MatchDetail {
  id: string;
  state: string;
  title: string;
  series: MatchSeries;
  startTime: string;
  homeTeam: MatchDetailTeam;
  awayTeam: MatchDetailTeam;
  outcome: MatchDetailOutcome;
  location: MatchLocation | null;
  eventType: string;
  province: string;
  ageGroup: string;
  showScore: boolean;
}

export interface ClubMatchesData {
  clubMatchesAssignations: MatchDetail[];
}

export interface GraphQLResponse {
  data?: ClubMatchesData;
  errors?: Array<{ message: string }>;
}
