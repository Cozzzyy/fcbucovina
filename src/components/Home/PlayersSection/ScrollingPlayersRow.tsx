import { useEffect, useRef, useState } from "react";
import players from "../../../../data/players.json";
import staff from "../../../../data/staff.json";
import { PlayerCard } from "../../Club/PlayerCard.tsx";

export function ScrollingPlayersRow() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const firstCardRef = useRef<HTMLDivElement>(null);
    const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
    const [sidePadding, setSidePadding] = useState<number>(0);

    const members = [
        ...staff.map((s) => ({ ...s, type: "staff" })),
        ...players.map((p) => ({ ...p, type: "player" })),
    ];

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 768;
            setIsDesktop(!isMobile);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Calculate padding dynamically to center first card on mobile
    useEffect(() => {
        if (!isDesktop && firstCardRef.current) {
            const cardWidth = firstCardRef.current.offsetWidth;
            const viewportWidth = window.innerWidth;
            const padding = (viewportWidth - cardWidth) / 2;
            setSidePadding(padding);
        } else {
            setSidePadding(0);
        }
    }, [isDesktop]);

    return (
        <div className="w-full overflow-hidden py-10">
            <h2 className="text-[45px] sm:text-6xl text-center text-green-700 font-bold italic uppercase">
                STAFF & JUCĂTORI
            </h2>

            <div
                ref={scrollRef}
                className={`relative w-full overflow-x-scroll px-4 scrollbar-hide ${
                    isDesktop ? "" : "snap-x snap-mandatory"
                }`}
                style={{
                    paddingLeft: !isDesktop ? sidePadding : undefined,
                    paddingRight: !isDesktop ? sidePadding : undefined,
                }}
            >
                <div
                    className={`flex ${
                        isDesktop ? "animate-scroll whitespace-nowrap items-center" : "justify-start"
                    }`}
                >
                    {(isDesktop ? [...members, ...members] : members).map((member, index) => (
                        <div
                            key={index}
                            ref={index === 0 ? firstCardRef : null}
                            className={`${
                                isDesktop
                                    ? "min-w-[450px] flex-shrink-0"
                                    : "snap-center min-w-[100%] max-w-[95%] mx-auto"
                            }`}
                        >
                            <PlayerCard player={member} hideDetails scrolling={true} />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
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
