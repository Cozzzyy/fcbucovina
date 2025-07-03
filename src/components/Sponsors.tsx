export function Sponsors() {
    const sponsors = [
        {src: "/Rino-Dental-Center.jpg", alt: "Rino Dental Center"},
        {src: "/Pravalia-lui-David.png", alt: "Pravalia lui David"},
        {src: "/Pravalia-mariei.png", alt: "Pravalia Mariei"},
        {src: "/Anditrans.png", alt: "Anditrans"},
        {src: "/NED.png", alt: "NED"},
        {src: "/NICO-GARAGE.png", alt: "NICO GARAGE"},
        {src: "/Gustul-Romanesc.png", alt: "Gustul Romanesc"},
        {src: "/Afine.png", alt: "Afine"},
        {src: "/AcasaInBucovina.png", alt: "Acasa in Bucovina"},
        {src: "/fun-tour.png", alt: "Fun Tour"},
    ];

    return (
        <div className="flex flex-col justify-center items-center w-full px-4 mt-10 overflow-hidden">
            <div className="flex flex-col w-full lg:w-2/3 items-center mt-8 sm:mt-12">
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
