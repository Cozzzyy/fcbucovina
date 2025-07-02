export function Sponsors() {
    const sponsors = [
        { src: "/Pravalia-lui-David.png", alt: "Pravalia lui David" },
        { src: "/Pravalia-mariei.png", alt: "Pravalia Mariei" },
        { src: "/Anditrans.png", alt: "Anditrans" },
        { src: "/NED.png", alt: "NED" },
        { src: "/NICO-GARAGE.png", alt: "NICO GARAGE" },
        { src: "/Gustul-Romanesc.png", alt: "Gustul Romanesc" },
        { src: "/Afine.png", alt: "Afine" },
        { src: "/AcasaInBucovina.png", alt: "Acasa in Bucovina" },
        { src: "/fun-tour.png", alt: "Fun Tour" },
    ];

    return (
        <div className="flex flex-col justify-center items-center w-full px-4 mt-10 overflow-hidden">
            <div className="flex flex-col w-full lg:w-2/3 items-center mt-8 sm:mt-12">
                <h1 className="text-2xl mb-2 font-bold leading-tight uppercase stroke-2 stroke-black">
                    Multumiri sponsorilor
                </h1>
                <div className="relative w-full mt-10 mb-10">
                    <div
                        className="flex gap-5 animate-scroll"
                        style={{
                            animation: "scroll 15s linear infinite",
                            display: "flex",
                        }}
                    >
                        {[...sponsors, ...sponsors].map((sponsor, index) => (
                            <img
                                key={index}
                                className="w-50 h-auto"
                                src={sponsor.src}
                                alt={sponsor.alt}
                                loading="lazy"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <style>
                {`
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-100%);
                        }
                    }
                `}
            </style>
        </div>
    );
}