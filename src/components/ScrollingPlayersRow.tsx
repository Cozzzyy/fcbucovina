import { useEffect, useRef } from "react";
import players from "../../data/players.json";
import { PlayerCard } from "./Club/PlayerCard.tsx";

export function ScrollingPlayersRow() {
    const scrollRef = useRef<HTMLDivElement>(null);
    // Use a ref to control the animation loop without causing re-renders
    const animationFrameId = useRef<number | null>(null);
    const isPaused = useRef(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const autoScroll = () => {
            if (!isPaused.current && scrollContainer) {
                const scrollSpeed = 2;
                scrollContainer.scrollLeft += scrollSpeed;

                // When the scroll position exceeds the width of the first set of items,
                // silently reset to the beginning.
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                }
            }
            // Continue the loop
            animationFrameId.current = requestAnimationFrame(autoScroll);
        };

        // --- Event handlers to pause/resume scrolling ---
        const pauseScroll = () => (isPaused.current = true);
        const resumeScroll = () => (isPaused.current = false);

        scrollContainer.addEventListener("mouseenter", pauseScroll);
        scrollContainer.addEventListener("mouseleave", resumeScroll);
        scrollContainer.addEventListener("touchstart", pauseScroll, {
            passive: true,
        });
        scrollContainer.addEventListener("touchend", resumeScroll);

        // Start the animation
        animationFrameId.current = requestAnimationFrame(autoScroll);

        // Cleanup function
        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            // Remove event listeners on cleanup
            scrollContainer.removeEventListener("mouseenter", pauseScroll);
            scrollContainer.removeEventListener("mouseleave", resumeScroll);
            scrollContainer.removeEventListener("touchstart", pauseScroll);
            scrollContainer.removeEventListener("touchend", resumeScroll);
        };
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div className="w-full overflow-hidden py-10 mb-35">
            <h2 className="text-4xl sm:text-6xl text-center text-green-700 font-bold mb-10 italic uppercase">
                Jucători
            </h2>
            <div
                ref={scrollRef}
                className="flex gap-20 overflow-x-auto whitespace-nowrap px-4 scroll-smooth touch-auto scrollbar-hide"
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