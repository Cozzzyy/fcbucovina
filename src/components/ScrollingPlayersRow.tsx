import players from "../../data/players.json";
import staff from "../../data/staff.json";
import { PlayerCard } from "./Club/PlayerCard";

export function ScrollingPlayersRow() {
    const members = [...staff, ...players];

    return (
        <div className="w-full overflow-hidden py-10 mb-35">
            <h2 className="text-4xl sm:text-6xl text-center text-green-700 font-bold mb-10 italic uppercase">
                STAFF & JUCĂTORI
            </h2>

            {/* Outer scrollable container */}
            <div className="relative w-full overflow-x-scroll px-4 scrollbar-hide">
                {/* Scrolling content */}
                <div className="flex items-center gap-20 whitespace-nowrap animate-scroll">
                    {[...members, ...members].map((member, index) => (
                        <div key={index} className="min-w-[250px] flex-shrink-0">
                            <PlayerCard player={member} hideDetails={true} />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
                .animate-scroll {
                    animation: scroll 8s linear infinite;
                }
                /* Optional: hide native scrollbars */
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;     /* Firefox */
                }
            `}</style>
        </div>
    );
}
