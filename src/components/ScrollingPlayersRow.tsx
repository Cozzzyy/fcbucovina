import { useEffect, useRef, useState } from "react";
import players from "../../data/players.json";
import staff from "../../data/staff.json";
import { PlayerCard } from "./Club/PlayerCard";

export function ScrollingPlayersRow() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const firstCardRef = useRef<HTMLDivElement>(null);
    const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
    const members = [...staff, ...players];

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 768;
            setIsDesktop(!isMobile);
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);



    return (
        <div className="w-full overflow-hidden py-10 mb-35">
            <h2 className="text-4xl sm:text-6xl text-center text-green-700 font-bold mb-10 italic uppercase">
                STAFF & JUCĂTORI
            </h2>

            <div
                ref={scrollRef}
                className="relative w-full overflow-x-scroll px-4 scrollbar-hide"
            >
                <div
                    className={`flex items-center gap-20 whitespace-nowrap ${
                        isDesktop ? "animate-scroll" : ""
                    }`}
                >
                    {[...members, ...members].map((member, index) => (
                        <div
                            key={index}
                            ref={index === 0 ? firstCardRef : null}
                            className="min-w-[250px] flex-shrink-0"
                        >
                            <PlayerCard player={member} hideDetails={true} />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                .animate-scroll {
                    animation: scroll 8s linear infinite;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
