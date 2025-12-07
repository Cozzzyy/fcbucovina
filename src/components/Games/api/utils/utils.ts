import type { Game } from "../../../../types/Game";
import gamesData from "../../../../../data/games.json";

function findGameInStaticData(homeTeam: string, awayTeam: string): Game | undefined {
  return (gamesData as Game[]).find(
    (game) =>
      game.homeTeam.toLowerCase() === homeTeam.toLowerCase() &&
      game.awayTeam.toLowerCase() === awayTeam.toLowerCase()
  );
}

export function enrichGameWithLocation(game: Game): Game {
  const staticGame = findGameInStaticData(game.homeTeam, game.awayTeam);

  return {
    ...game,
    location: staticGame?.location || game.location || "Unknown Location",
  };
}

export function enrichGamesWithLocations(games: Game[]): Game[] {
  return games.map((game) => enrichGameWithLocation(game));
}
