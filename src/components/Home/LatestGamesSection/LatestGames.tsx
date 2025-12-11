import { GameCard } from "./GameCard.tsx";
import type { Game } from "../../../types/Game.ts";
import { useTranslation } from "react-i18next";

const games: Game[] = [
  {
    homeTeam: "FC Bucovina Loenhout",
    homeTeamLogo: "/teams/FC Bucovina Loenhout.png",
    awayTeam: "KSV Wildert",
    awayTeamLogo: "/teams/KSV Wildert.png",
    matchType: "Voetbal Vlaanderen 4P",
    score: "1-2",
    date: "2025-10-05",
    location: "Bredabaan, 280 , 2990 Wuustwezel",
    time: "15:00",
  },
  {
    homeTeam: "Putte SK",
    homeTeamLogo: "/teams/Putte SK.png",
    awayTeam: "FC Bucovina Loenhout",
    awayTeamLogo: "/teams/FC Bucovina Loenhout.png",
    matchType: "Voetbal Vlaanderen 4P",
    score: "1-4",
    date: "2025-09-28",
    location: "Grensstraat 141 , 2950 Kapellen",
    time: "15:00",
  },
  {
    homeTeam: "FC Bucovina Loenhout",
    homeTeamLogo: "/teams/FC Bucovina Loenhout.png",
    awayTeam: "KSOC Maria Ter Heide",
    awayTeamLogo: "/teams/KSOC Maria Ter Heide.png",
    matchType: "Voetbal Vlaanderen 4P",
    score: "3-2",
    date: "2025-09-21",
    location: "Bredabaan, 280 , 2990 Wuustwezel",
    time: "15:00",
  },
];

export function LatestGames() {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col w-full lg:w-2/3 mt-4 px-4 sm:px-6 mb-7">
        <h2 className="text-4xl sm:text-6xl text-center text-green-700 font-bold italic uppercase">
          {t('games.latestGames')}
        </h2>
        {games.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
}
