import type { Player } from "../../types/Player.ts";

interface PlayerCardProps {
    player: Player;
    hideDetails?: boolean; // Optional prop to hide details
}

export function PlayerCard({ player, hideDetails }: PlayerCardProps) {
    return (
        <article className="flex flex-col w-full justify-center items-center min-h-[400px]">
            <section className="relative flex flex-col justify-center items-center bg-transparent pt-10 w-[320px] md:w-[300px] lg:w-[300px] overflow-hidden">

                {/* Player Number */}
                <header className="absolute top-2 left-2 w-14 h-14 flex justify-center items-center z-20">
                    <span
                        className="text-5xl italic font-bold"
                        style={{
                            color: "#edd11a",
                            WebkitTextStroke: "1px green",
                        }}
                    >
                        {player.number}
                    </span>
                </header>

                {/* Player Image */}
                <figure className="relative w-full h-[420px] lg:h-[370px] rounded-t-lg">
                    <img
                        className="w-full h-full object-cover object-top rounded-t-lg"
                        src={`/jucatori/${player.name.replace(/\s+/g, "-")}.webp`}
                        alt={`Image of ${player.name}`}
                        onError={(e) => {
                            try {
                                (e.target as HTMLImageElement).src = '/jucatori/placeholder.webp';
                            } catch (error) {
                                console.warn("Failed to load player image or fallback image:", error);
                            }
                        }}
                    />
                    <div className="absolute -bottom-2 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-white"></div>
                </figure>

                {/* Player Name */}
                <header className="w-full z-10">
                    <h2 className="text-md text-black font-bold border-b-yellow-300 border-4 border-white w-full text-center p-1">
                        {player.name.toUpperCase()}
                    </h2>
                </header>

                {/* Player Position */}
                <p className="text-md text-white w-full text-center mb-1 bg-green-700 py-1">
                    {player.position.toUpperCase()}
                </p>

                {/* Optional Details */}
                {!hideDetails && (
                    <section className="flex flex-col justify-center items-center p-4">
                        <p className="text-sm text-gray-500 mb-2">{player.dateOfBirth}</p>
                        <p className="text-sm text-gray-900 text-center mb-2 w-full h-[100px] overflow-hidden">
                            {player.description}
                        </p>
                    </section>
                )}
            </section>
        </article>
    );
}