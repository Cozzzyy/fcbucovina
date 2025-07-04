import { useLocation } from "react-router-dom";

export function Background() {
    const location = useLocation();

    // Do not render the background on the /club route
    if (location.pathname === "/club") {
        return null;
    }

    return (
        <div className="absolute inset-0 mt-15 -z-2">
            {/* Gradient fading from black to transparent at the top */}
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
            <img
                className="w-full h-full object-cover"
                src="/team-photo.jpg"
                alt="Background"
                aria-hidden="true"
                loading="eager"
            />
            {/* Gradient fading from black to transparent at the bottom */}
            <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </div>
    );
}