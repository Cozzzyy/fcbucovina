import type { Game } from "../types/Game.ts";

export function GameCard({ game }: { game: Game }) {
    return (
        <div className="flex flex-col justify-center items-center rounded-md w-full px-4">
            <h3 className="text-[14px] font-semibold opacity-75 mt-5 mb-2 select-none pointer-events-none">
                {game.matchType}
            </h3>

            <div className="flex flex-wrap justify-center items-center w-full gap-2 text-center">
                {/* Home Team */}
                <div className="flex flex-row justify-end items-center gap-2 flex-1 min-w-0">
                    <h3 className="text-[13px] ml-2 text-left font-light whitespace-normal break-words select-none pointer-events-none">
                        {game.homeTeam}
                    </h3>
                    <img className="w-10 h-auto flex-shrink-0" src={game.homeTeamLogo} alt={game.homeTeam} />
                </div>

                {/* Score */}
                <div className="flex flex-col justify-center items-center px-2">
                    <h3 className="text-xl font-semibold select-none pointer-events-none">
                        {game.score}
                    </h3>
                </div>

                {/* Away Team */}
                <div className="flex flex-row justify-start items-center gap-2 flex-1 min-w-0">
                    <img className="w-10 h-auto flex-shrink-0" src={game.awayTeamLogo} alt={game.awayTeam} />
                    <h3 className="text-[13px] mr-2 font-light text-left whitespace-normal break-words select-none pointer-events-none">
                        {game.awayTeam}
                    </h3>
                </div>
            </div>

            <h3 className="text-[12px] font-light opacity-50 mt-4 select-none pointer-events-none">
                {`${game.date} - ${game.location}`}
            </h3>
            <div className="w-full h-[1px] bg-black opacity-50 mt-2"></div>
        </div>
    );
}
