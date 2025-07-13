import {useLocation} from "react-router-dom";

export function Background() {
    const location = useLocation();

    // Do not render the background on the /club route
    if (location.pathname === "/club" || location.pathname === "/clasament" || location.pathname === "/meciuri") {
        return null;
    }

    return (
        <div className="absolute inset-0 -z-10 h-full ">
            {/* Gradient fading from semi-transparent black to transparent on the sides with blur */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-transparent to-black/85">
                <div className="absolute inset-0 backdrop-blur-[1px]"></div>
            </div>
            {/* Gradient fading from semi-transparent black to transparent at the top */}
            <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-black/95 to-transparent pointer-events-none"></div>
            {/* Background image */}
            <img
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/bucovina-images/team-photo%20(1).webp"
                alt="Background"
                aria-hidden="true"
                loading="eager"
            />
            {/* Gradient fading from semi-transparent black to transparent at the bottom */}
            <div
                className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-black/85 to-transparent pointer-events-none"></div>
        </div>
    );
}