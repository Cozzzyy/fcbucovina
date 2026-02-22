import { useLocation } from "react-router-dom";
import { useState } from "react";

const EXCLUDED_PATHS = ["/club", "/clasament", "/meciuri", "/stiri"];

export function Background() {
    const location = useLocation();
    const [loaded, setLoaded] = useState(false);

    if (EXCLUDED_PATHS.includes(location.pathname)) return null;

    return (
        <div className="absolute inset-0 -z-10 h-screen bg-green-600">
            <img
                className={`w-full h-full object-cover transition-all duration-1000 ${loaded ? "opacity-100 blur-0" : "opacity-0 blur-md"}`}
                src="/team-photo.avif"
                alt=""
                aria-hidden="true"
                loading="lazy"
                onLoad={() => setLoaded(true)}
            />
            <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-black/90 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 pointer-events-none" />
        </div>
    );
}
