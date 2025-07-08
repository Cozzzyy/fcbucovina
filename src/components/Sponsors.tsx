export function Sponsors() {
    const sponsors = [
        {src: "/sponsors/Pravalia-lui-David.webp", alt: "Pravalia lui David"},
        {src: "/sponsors/Pravalia-mariei.webp", alt: "Pravalia Mariei"},
        {src: "/sponsors/Anditrans.webp", alt: "Anditrans"},
        {src: "/sponsors/Rino-Dental-Center.webp", alt: "Rino Dental Center"},
        {src: "/sponsors/NED.webp", alt: "NED"},
        {src: "/sponsors/NICO-GARAGE.webp", alt: "NICO GARAGE"},
        {src: "/sponsors/Frtieje-meer.webp", alt: "Frietje Meer"},
        {src: "/sponsors/Gustul-Romanesc.webp", alt: "Gustul Romanesc"},
        {src: "/sponsors/Afine.webp", alt: "Afine"},
        {src: "/sponsors/AcasaInBucovina.webp", alt: "Acasa in Bucovina"},
        {src: "/sponsors/fun-tour.webp", alt: "Fun Tour"},
    ];

    return (
        <div className="flex flex-col justify-center items-center w-full px-4 mt-10 overflow-hidden">
            <div className="flex flex-col w-full items-center mt-8 sm:mt-12">
                <h1 className="text-2xl mb-2 font-bold leading-tight uppercase">
                    Multumiri sponsorilor
                </h1>
                <div className="relative w-full overflow-hidden mt-10">
                    <div className="flex w-max animate-scroll whitespace-nowrap">
                        {[...sponsors, ...sponsors].map((sponsor, index) => (
                            <img
                                key={index}
                                className="w-25 lg:w-40 h-auto mx-4"
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
                            transform: translateX(-50%);
                        }
                    }
                    .animate-scroll {
                        animation: scroll 20s linear infinite;
                    }
                `}
            </style>
        </div>
    );
}
