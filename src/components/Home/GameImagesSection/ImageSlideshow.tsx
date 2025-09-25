import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ImageSlideshow() {
    const images = [
        "/games-images/game2/1.jpg",
        "/games-images/game2/2.jpg",
        "/games-images/game2/3.jpg",
        "/games-images/game2/4.jpg"
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);


    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="relative w-full h-[550px] lg:h-[750px] overflow-hidden shadow-xl">
                <AnimatePresence mode="wait">
                    {images.map((image, index) =>
                        index === currentIndex ? (
                            <motion.div
                                key={index}
                                className="absolute inset-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.1}
                                style={{ cursor: 'grab' }}
                                whileDrag={{ cursor: 'grabbing' }}
                            >
                                <img
                                    src={image}
                                    alt={`Slideshow ${index + 1}`}
                                    className="w-full h-full object-cover pointer-events-none"
                                    loading="lazy"
                                    decoding='async'
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>
                                <div className="absolute left-5 top-10 sm:left-10 lg:left-20 text-white text-2xl lg:text-5xl font-bold drop-shadow-md before:content-[''] before:absolute before:left-[-10px] sm:before:left-[-15px] before:top-1 before:bottom-2 before:w-1 sm:before:w-2 ">
                                    Fc Bucovina - Maria Ter Heide
                                </div>
                            </motion.div>
                        ) : null
                    )}
                </AnimatePresence>

                {/* Dot navigation */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            aria-label={`Du-te la ${i + 1}`}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                i === currentIndex ? "bg-white" : "bg-gray-400"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}