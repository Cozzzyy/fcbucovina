export function Background() {
    return (
        <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
            <img
                className="w-full h-full object-cover"
                src="/team-photo.jpg"
                alt="Background"
                aria-hidden="true"
                loading="eager"
            />
            {/* Gradient fading from transparent to white at the bottom */}
            <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
        </div>
    );
}