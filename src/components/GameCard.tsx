import type {Game} from "../types/Game.ts";

export function GameCard({ game }: { game: Game }) {
    return (
        <div className="flex flex-col justify-center items-center rounded-md">
            <h3 className="text-[14px] font-semibold opacity-75 mt-5 mb-2">{game.matchType}</h3>
            <div className="flex flex-row w-full justify-center items-center gap-3">
                <div className="flex flex-row w-full justify-end items-center gap-3">
                    <h3 className="text-sm  text-right font-light">{game.homeTeam}</h3>
                    <img className="w-10 h-auto" src={game.homeTeamLogo} alt={game.homeTeam} />
                </div>
                <div className="flex flex-col w-full justify-center items-center">
                    <h3 className="text-xl font-semibold">{game.score}</h3>
                </div>
                <div className="flex flex-row w-full justify-start items-center gap-3">
                    <img className="w-10 h-auto" src={game.awayTeamLogo} alt={game.awayTeam} />
                    <h3 className="text-sm sm:text-base font-light">{game.awayTeam}</h3>
                </div>
            </div>
            <h3 className="text-sm font-light opacity-50 mt-4">{`${game.date} - ${game.location}`}</h3>
            <div className="w-full h-[1px] bg-black opacity-50 mt-2"></div>
        </div>
    );
}