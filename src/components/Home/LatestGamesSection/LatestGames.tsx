import { GameCard } from "./GameCard.tsx";
import type { Game } from "../../../types/Game.ts";

const games: Game[] = [
    {
        homeTeam: "FC BUCOVINA LOENHOUT",
        homeTeamLogo: "/teams/FC Bucovina Loenhout.png",
        awayTeam: "K.S.V Wildert",
        awayTeamLogo: "/teams/KSV Wildert.png",
        matchType: "Voetbal Vlaanderen 4P",
        score: "2-3",
        date: "24/05/2025 18:00",
        location: "Bredabaan 280 2990 Wuustwezel",
    }
];

export function LatestGames() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col w-full lg:w-2/3 mt-4 px-4 sm:px-6 mb-7">
                <h2 className="text-4xl sm:text-6xl text-center text-green-700 font-bold italic uppercase">
                    ULTIMELE MECIURI
                </h2>
                {games.map((game, index) => (
                    <GameCard key={index} game={game} />
                ))}
            </div>
        </div>
    );
}