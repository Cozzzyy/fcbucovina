import type { Player } from "../../types/Player.ts";

interface PlayerCardProps {
    player: Player;
    hideDetails?: boolean; // Optional prop to hide details
}

export function PlayerCard({ player, hideDetails }: PlayerCardProps) {
    return (
        <div className="flex flex-col w-full justify-center items-center">
            <div
                className="relative flex flex-col justify-center items-center bg-transparent w-[300px] md:w-[320px] lg:w-[315px] overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-13 h-13 flex justify-center items-center">
                    <span
                        className="text-6xl font italic"
                        style={{
                            color: "#edd11a",
                            WebkitTextStroke: "1px green",
                        }}
                    >
                        {player.number}
                    </span>
                </div>
                <div className="relative w-75 md:w-45 lg:w-65 h-auto lg:h-[330px] rounded-t-lg">
                    <img
                        className="w-full h-full rounded-t-lg"
                        src={`/jucatori/${player.name.replace(/\s+/g, "-")}.png`}
                        alt={`Image of ${player.name}`}
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = '/jucatori/Marius-Aanitei.png';
                        }}
                    />
                    <div className="absolute -bottom-2 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-white"></div>
                </div>
                <div className="relative w-full z-10">
                    <h2 className="text-xl md:text-xl lg:text-xl border-b-yellow-300 border-4 border-white w-full text-center font-bold p-1 text-black relative z-10">
                        {player.name.toUpperCase()}
                    </h2>
                </div>
                <p className="text-md md:text-md text-white w-full text-center mb-1 bg-green-700 py-1">
                    {player.position.toUpperCase()}
                </p>
                {!hideDetails && (
                    <div className="flex flex-col justify-center items-center p-4">
                        <p className="text-sm md:text-base text-gray-500 mb-2">{player.dateOfBirth}</p>
                        <p className="text-sm md:text-base text-gray-900 text-center mb-2 w-3/3 h-[100px] overflow-hidden">
                            {player.description}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}