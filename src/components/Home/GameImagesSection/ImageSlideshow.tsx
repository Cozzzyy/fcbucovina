import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ImageSlideshow() {
    const images = [
        "https://storage.googleapis.com/bucovina-images/Game-images/Game-images_wilders-1.webp",
        "https://storage.googleapis.com/bucovina-images/Game-images/Game-images_wilders-2.webp",
        "https://storage.googleapis.com/bucovina-images/Game-images/Game-images_wilders-3.webp"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000); // Change every 4s
        return () => clearInterval(interval); // Clean up on unmount
    }, [images.length]);

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="relative w-full h-[550px] lg:h-[650px] overflow-hidden shadow-xl">
                <AnimatePresence>
                    {images.map((image, index) =>
                        index === currentIndex ? (
                            <motion.div
                                key={index}
                                className="absolute inset-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <img
                                    src={image}
                                    alt={`Slideshow ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>
                                <div className="absolute left-5 top-8 sm:left-10 lg:left-20 text-white text-2xl lg:text-5xl font-bold drop-shadow-md before:content-[''] before:absolute before:left-[-10px] sm:before:left-[-15px] before:top-1 before:bottom-2 before:w-1 sm:before:w-2 before:bg-green-500">
                                    K.S.V Wildert - FC Bucovina
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