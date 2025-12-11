import type { Player } from "../../types/Player.ts";
import { useTranslation } from "react-i18next";

interface PlayerCardProps {
    player: Player;
    hideDetails?: boolean;
    scrolling?: boolean;
}

export function PlayerCard({ player, hideDetails, scrolling }: PlayerCardProps) {
    const { t } = useTranslation();
    
    return (
        <article className="flex flex-col w-full justify-center items-center min-h-[400px]">
            <section className="relative flex flex-col justify-center items-center bg-transparent pt-6 w-[90%] md:w-[300px] lg:w-[300px] overflow-hidden">

                {/* Player Number */}
                <header className="absolute top-2 left-2 w-12 h-12 sm:w-14 sm:h-14 flex justify-center items-center z-20">
                    <span
                        className="text-4xl sm:text-5xl italic font-bold"
                        style={{
                            color: "#edd11a",
                            WebkitTextStroke: "1px green",
                        }}
                    >
                        {player.number}
                    </span>
                </header>

                {/* Player Image */}
                <figure
                    className={`relative w-full ${
                        scrolling ? "h-[350px]" : "h-[250px]"
                    } lg:h-[370px] rounded-t-lg`}
                >
                    <img
                        className="w-full h-full object-cover object-top rounded-t-lg"
                        src={`/jucatori/${player.name.replace(/\s+/g, "-")}.webp`}
                        alt={`Image of ${player.name}`}
                        loading="lazy"
                        onError={(e) => {
                            try {
                                (e.target as HTMLImageElement).src = '/jucatori/placeholder.webp';
                            } catch (error) {
                                console.warn("Failed to load player image or fallback image:", error);
                            }
                        }}
                    />
                    <div className="absolute -bottom-2 left-0 w-full h-1/2"></div>
                </figure>

                {/* Player Name */}
                <header className="w-full z-10">
                    <h2 className="text-xl text-black font-bold border-b-yellow-300 w-full text-center p-1">
                        {player.name.toUpperCase()}
                    </h2>
                </header>

                {/* Player Position */}
                <p
                    className="text-xs text-white lg:w-6/7 w-full font-bold text-center mb-1 rounded-xl py-2"
                    style={{
                        backgroundImage: "linear-gradient(135deg, #28B063 15%, #2F855A 15%)", // green-500 → green-900
                        backgroundSize: "220% 200%",
                    }}
                >
                    {t(`club.positions.${player.position}`) || player.position.toUpperCase()}
                </p>



                {/* Optional Details */}
                {!hideDetails && (
                    <section className="flex flex-col justify-center items-center">
                        <p className="text-xs sm:text-sm text-gray-500 mb-2">{player.dateOfBirth}</p>
                        <p className={'text-sm italic font-bold mb-1'}>{t('club.experience')}</p>
                        <p className="text-xs sm:text-sm text-gray-900 text-center mb-2 w-full h-[80px] sm:h-[100px] overflow-hidden">
                            {player.description}
                        </p>
                    </section>
                )}
            </section>
        </article>
    );
}