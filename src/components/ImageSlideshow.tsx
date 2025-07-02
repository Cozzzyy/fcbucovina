import {useState, useEffect} from "react";

export function ImageSlideshow() {
    const images = ["/wilders-3.jpg", "/wilders-2.jpg", "/wilders-1.jpg"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
    }, [images.length]);

    return (
        <div className="flex flex-col items-center justify-center w-full lg:px-4 mt-10 sm:mt-20">
            <div className="relative w-full sm:w-4/5 lg:w-2/3 h-60 sm:h-96 lg:h-150 overflow-hidden">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <img
                            src={image}
                            alt={`Slideshow Image ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />

                        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-90"></div>
                        <div className="absolute top-7 left-7 text-white text-3xl font-light">
                            K.S.V Wildert - FC Bucovina
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}