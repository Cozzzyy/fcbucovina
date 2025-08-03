import { GameCard } from "./GameCard.tsx";
import type { Game } from "../../../types/Game.ts";

const games: Game[] = [
    {
        homeTeam: "KFC Turnhout B",
        homeTeamLogo: "/teams/KFC Turnhout B.png",
        awayTeam: "FC Bucovina Loenhout",
        awayTeamLogo: "/teams/FC Bucovina Loenhout.png",
        matchType: "BvA Heren Groep 4 P3/P4",
        score: "0-1",
        date: "02-08-2025 18:00",
        location: "De Leemshoeve / Terrein 4, Stwg. Op Merksplas 80 , 2300 Turnhout",
    },
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