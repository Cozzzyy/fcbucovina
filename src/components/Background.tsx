import { useLocation } from "react-router-dom";

export function Background() {
    const location = useLocation();

    const excludedPaths = ["/club", "/clasament", "/meciuri"];
    if (excludedPaths.includes(location.pathname)) return null;

    return (
        <div className="absolute inset-0 -z-10 h-full">
            {/* Background image */}
            <img
                className="w-full h-full object-cover"
                src="/team-photo.avif"
                alt=""
                aria-hidden="true"
                loading="eager"
                decoding="async"
            />

            {/* Top gradient */}
            <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-black/90 to-transparent pointer-events-none" />

            {/* Bottom gradient */}
            <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

            {/* Side gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 pointer-events-none" />
        </div>
    );
}
