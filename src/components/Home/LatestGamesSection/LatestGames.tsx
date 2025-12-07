import { GameCard } from "./GameCard.tsx";
import { useGames } from "../../Games/api/hooks/useGames.ts";

export function LatestGames() {

  const gameData = useGames();

  const filteredGames = gameData.data?.filter(g => g.score && g.score !== 'vs' && !g.score.includes('?'))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

  if(!filteredGames || filteredGames.length === 0) {
    return <div>Se incarca meciurile...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col w-full lg:w-2/3 mt-4 px-4 sm:px-6 mb-7">
        <h2 className="text-4xl sm:text-6xl text-center text-green-700 font-bold italic uppercase">
          ULTIMELE MECIURI
        </h2>
        {filteredGames?.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
}
