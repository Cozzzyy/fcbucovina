import { GameCard } from "./GameCard.tsx";
import type { Game } from "../../../types/Game.ts";

const games: Game[] = [
    {
        homeTeam: "K.F.C. ST-MARTINUS HALLE",
        homeTeamLogo: "https://belgianfootball.s3.eu-central-1.amazonaws.com/s3fs-public/rbfa/img/logos/clubs/02500.jpg",
        awayTeam: "FC Bucovina Loenhout",
        awayTeamLogo: "/teams/FC Bucovina Loenhout.png",
        matchType: "BvA Heren Groep 4 P3/P4",
        score: "3-1",
        date: "16/08/2025 18:30",
        location: "Lotelinglaan 1 , 2980 Halle",
    },
    {
        homeTeam: "FC Bucovina Loenhout",
        homeTeamLogo: "/teams/FC Bucovina Loenhout.png",
        awayTeam: "K. Gooreind VV",
        awayTeamLogo: "/teams/K. Gooreind VV.png",
        matchType: "BvA Heren Groep 4 P3/P4",
        score: "3-2",
        date: "2025-08-09",
        location: "Bredabaan, 280 , 2990 Wuustwezel",
        time: "18:30"
    },
    {
        homeTeam: "KFC Turnhout B",
        homeTeamLogo: "/teams/KFC Turnhout B.png",
        awayTeam: "FC Bucovina Loenhout",
        awayTeamLogo: "/teams/FC Bucovina Loenhout.png",
        matchType: "BvA Heren Groep 4 P3/P4",
        score: "0-1",
        date: "02-08-2025 18:00",
        location: "De Leemshoeve / Terrein 4, Stwg. Op Merksplas 80 , 2300 Turnhout",
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