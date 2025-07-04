import { useEffect, useRef } from "react";
import players from "../../data/players.json";
import { PlayerCard } from "./Club/PlayerCard.tsx";

export function ScrollingPlayersRow() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let frameId: number;

        const autoScroll = () => {
            const scrollContainer = scrollRef.current;
            if (!scrollContainer) return;

            const scrollSpeed = 0.5;
            scrollContainer.scrollLeft += scrollSpeed;

            // Reset when reaching the end
            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                scrollContainer.scrollLeft = 0;
            }

            frameId = requestAnimationFrame(autoScroll);
        };

        frameId = requestAnimationFrame(autoScroll);

        return () => {
            cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <div className="w-full overflow-hidden py-10 mb-35">
            <h2 className="text-4xl sm:text-6xl text-center text-green-700 font-bold mb-10 italic uppercase">Jucători</h2>
            <div
                ref={scrollRef}
                className="flex gap-20 overflow-x-auto whitespace-nowrap px-4 scroll-smooth touch-auto"
            >
                {players.map((player) => (
                    <div key={player.number} className="min-w-[250px] flex-shrink-0">
                        <PlayerCard
                            player={player}
                            hideDetails={true}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
