import { useEffect, useRef } from "react";
import players from "../../data/players.json";
import { PlayerCard } from "./Club/PlayerCard.tsx";


export function ScrollingPlayersRow() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scrollSpeed = 0.5; // pixels per frame
        let frameId: number;

        const autoScroll = () => {
            if (!scrollContainer) return;

            scrollContainer.scrollLeft += scrollSpeed;
            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                scrollContainer.scrollLeft = 0; // Reset to the start
            }
            frameId = requestAnimationFrame(autoScroll);
        };

        frameId = requestAnimationFrame(autoScroll);
        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <div className="w-full overflow-hidden py-10 mb-35">
            <h2 className="text-6xl text-center text-green-700 font-bold mb-16 italic uppercase">Jucători</h2>
            <div
                ref={scrollRef}
                className="flex gap-45 overflow-hidden whitespace-nowrap"
            >
                {players.map((player) => (
                    <div key={player.number} className="min-w-[250px]">
                        <PlayerCard
                            player={{
                                ...player,
                            }}
                            hideDetails={true} // Hide details for the scrolling row
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}