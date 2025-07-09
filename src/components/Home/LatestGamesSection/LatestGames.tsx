import { GameCard } from "./GameCard.tsx";
import type { Game } from "../../../types/Game.ts";

const games: Game[] = [
    {
        homeTeam: "FC PORTO BRUXELLES",
        homeTeamLogo: "/teams/porto-bruxelles.png",
        awayTeam: "FC BUCOVINA LOENHOUT",
        awayTeamLogo: "/teams/logo.png",
        matchType: "Amical",
        score: "2-0",
        date: "25/06/2025 19:00",
        location: "Avenue Jean Joseph Crocq 54 Jette",
    },
    {
        homeTeam: "FC BUCOVINA LOENHOUT",
        homeTeamLogo: "/teams/logo.png",
        awayTeam: "K.S.V Wildert",
        awayTeamLogo: "/teams/ksv-widert.png",
        matchType: "Voetbal Vlaanderen 4P",
        score: "2-3",
        date: "24/05/2025 18:00",
        location: "Bredabaan 280 2990 Wuustwezel",
    }
];

export function LatestGames() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col w-full lg:w-2/3 mt-4 px-4 sm:px-6 mb-15">
                <h1 className="text-lg lg:text-sm font-bold text-white text-center lg:text-left p-2 bg-[#008229]">
                    ULTIMELE MECIURI
                </h1>
                {games.map((game, index) => (
                    <GameCard key={index} game={game} />
                ))}
            </div>
        </div>
    );
}