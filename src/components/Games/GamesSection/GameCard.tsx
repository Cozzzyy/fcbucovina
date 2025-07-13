import { motion } from "framer-motion";
import type { Game } from "../../../types/Game.ts";

interface GameCardProps {
    game: Game;
}

export function GameCard({ game }: GameCardProps) {

    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const dayName = date.toLocaleDateString('ro-RO', { weekday: 'long' }).toUpperCase();

        return `${dayName}, ${day}/${month}`;
    }

    return (
        <motion.section
            className="flex flex-row w-11/12 md:w-2/3 mb-5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="w-[8px] md:w-[12px] bg-green-700 rounded-4xl" />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full bg-white shadow-lg p-4 md:px-8">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-base md:text-lg font-medium">{formatDate(game.date)}</h3>
                    <p className="text-base md:text-lg">{game.time}</p>
                    <p className="text-xs md:text-sm opacity-50">{game.location}</p>
                </div>
                <div className="flex flex-row items-center justify-between md:justify-center w-full md:w-auto gap-4 md:gap-10">
                    <div className="flex flex-col items-center w-[120px] md:w-[150px]">
                        <div className="h-[60px] md:h-[85px] flex items-center justify-center">
                            <img
                                className="w-[60px] md:w-[85px] h-[60px] md:h-[85px] object-contain"
                                alt={`${game.homeTeam} Logo`}
                                src={`/teams/${game.homeTeamLogo}`}
                                loading="lazy"
                                width={85}
                                height={85}
                            />

                        </div>
                        <p className="text-sm md:text-base text-center break-words mt-2">{game.homeTeam}</p>
                    </div>
                    <p className="text-sm md:text-base font-medium">VS</p>
                    <div className="flex flex-col items-center w-[120px] md:w-[150px]">
                        <div className="h-[60px] md:h-[85px] flex items-center justify-center">
                            <img
                                className="w-[60px] md:w-[85px] h-[60px] md:h-[85px] object-contain"
                                alt={`${game.awayTeam} Logo`}
                                src={`/teams/${game.awayTeamLogo}`}
                                loading="lazy"
                                width={85}
                                height={85}
                            />

                        </div>
                        <p className="text-sm md:text-base text-center break-words mt-2">{game.awayTeam}</p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
