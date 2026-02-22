import { GameCard } from "./GameCard.tsx";
import { useGames } from "../../Games/api/hooks/useGames.ts";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

export function LatestGames() {
  const { t } = useTranslation();
  const { data: games } = useGames();

  const filteredGames = useMemo(() => {
    if (!games) return [];
    return games
      .filter(g => g.score && g.score !== 'vs' && !g.score.includes('?'))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }, [games]);

  if (!filteredGames || filteredGames.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col w-full lg:w-2/3 mt-4 px-4 sm:px-6 mb-7">
          <h2 className="text-4xl sm:text-6xl text-center text-green-700 font-bold italic uppercase">
            {t('games.latestGames')}
          </h2>
          <p className="text-gray-600 text-center mt-4">{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col w-full lg:w-2/3 mt-4 px-4 sm:px-6 mb-7">
        <h2 className="text-4xl sm:text-6xl text-center text-green-700 font-bold italic uppercase">
          {t('games.latestGames')}
        </h2>
        {filteredGames.map((game) => (
          <GameCard key={game.date} game={game} />
        ))}
      </div>
    </div>
  );
}
