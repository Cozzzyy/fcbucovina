export type Team  = {
    pos: number;
    team: string;
    pts: number;
    matches: number;
    wins: number;
    draws: number;
    losses: number;
    image?: string; // Optional since not all teams have this property
}