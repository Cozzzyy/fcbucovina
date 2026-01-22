import { useEffect, useRef, useState, useSyncExternalStore, useCallback } from "react";
import { PlayerCard } from "../../Club/PlayerCard.tsx";
import { useTranslation } from "react-i18next";
import type { Player } from "../../../types/Player";

interface ScrollingPlayersRowProps {
    players?: Player[];
    staff?: Player[];
}

// Custom hook for media query - subscribes to derived boolean state instead of continuous width
// Per rerender-derived-state rule: reduces re-renders from continuous values to boolean transitions
function useMediaQuery(query: string): boolean {
    const subscribe = useCallback((callback: () => void) => {
        const mediaQuery = window.matchMedia(query);
        mediaQuery.addEventListener('change', callback);
        return () => mediaQuery.removeEventListener('change', callback);
    }, [query]);

    const getSnapshot = () => window.matchMedia(query).matches;
    const getServerSnapshot = () => false;

    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function ScrollingPlayersRow({ players = [], staff = [] }: ScrollingPlayersRowProps) {
    const { t } = useTranslation();
    const scrollRef = useRef<HTMLDivElement>(null);
    const firstCardRef = useRef<HTMLDivElement>(null);
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const [sidePadding, setSidePadding] = useState<number>(0);

    const members = [
        ...staff.map((s) => ({ ...s, type: "staff" })),
        ...players.map((p) => ({ ...p, type: "player" })),
    ];

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
            <h2 className="text-[40px] sm:text-6xl text-center text-green-700 font-bold italic uppercase">
                {t('club.staffAndPlayers')}
            </h2>

            <div
                ref={scrollRef}
                className={`relative w-full overflow-x-scroll px-4 scrollbar-hide ${isDesktop ? "" : "snap-x snap-mandatory"
                    }`}
                style={{
                    paddingLeft: !isDesktop ? sidePadding : undefined,
                    paddingRight: !isDesktop ? sidePadding : undefined,
                }}
            >
                <div
                    className={`flex ${isDesktop ? "animate-scroll whitespace-nowrap items-center" : "justify-start"
                        }`}
                >
                    {(isDesktop ? [...members, ...members] : members).map((member, index) => (
                        <div
                            key={index}
                            ref={index === 0 ? firstCardRef : null}
                            className={`${isDesktop
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
