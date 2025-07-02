import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ImageSlideshow() {
    const images = ["/wilders-3.jpg", "/wilders-2.jpg", "/wilders-1.jpg"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000); // Change every 4s
        return () => clearInterval(interval); // Clean up on unmount
    }, [images.length]);

    return (
        <div className="flex flex-col items-center justify-center w-full mt-10 sm:mt-20">
            <div className="relative w-full aspect-video overflow-hiddenshadow-xl">
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
                                <div className="absolute top-7 left-7 text-white text-xl lg:text-5xl font-light drop-shadow-md">
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
