import { useEffect, useRef } from "react";
import players from "../../data/players.json";
import { PlayerCard } from "./Club/PlayerCard.tsx";

export function ScrollingPlayersRow() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const animationFrameId = useRef<number | null>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const autoScroll = () => {
            if (scrollContainer) {
                const scrollSpeed = 0.5; // Adjust as needed
                scrollContainer.scrollLeft += scrollSpeed;

                // When the scroll position exceeds the width of the first set of items,
                // silently reset to the beginning for a seamless loop.
                // We divide by 2 because we duplicated the players array.
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                }
            }
            // Continue the animation loop
            animationFrameId.current = requestAnimationFrame(autoScroll);
        };

        // Start the animation
        animationFrameId.current = requestAnimationFrame(autoScroll);

        // Cleanup function to cancel the animation when the component unmounts
        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div className="w-full overflow-hidden py-10 mb-35">
            <h2 className="text-4xl sm:text-6xl text-center text-green-700 font-bold mb-10 italic uppercase">
                Jucători
            </h2>
            <div
                ref={scrollRef}
                // Change: Use overflow-x-scroll to allow programmatic scrolling
                // Add a custom class to hide the scrollbar
                className="flex gap-20 overflow-x-scroll whitespace-nowrap px-4 scrollbar-hide"
            >
                {/* Duplicate the players array for a seamless loop */}
                {[...players, ...players].map((player, index) => (
                    <div
                        // Use the index for the key since player numbers are now duplicated
                        key={index}
                        className="min-w-[250px] flex-shrink-0"
                    >
                        <PlayerCard player={player} hideDetails={true} />
                    </div>
                ))}
            </div>
        </div>
    );
}