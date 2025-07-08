import {useNavigate} from "react-router-dom";

interface NewsCardProps {
    id: number;
    title: string;
    date: string;
    first?: boolean; // Optional prop to indicate if it's the first card
}

export function NewsCard({ id, title, date, first }: NewsCardProps) {

    const navigate = useNavigate();

    const handleNavigate = (id: number | undefined) => {
        if (id) {
            const element = document.getElementById(`news-${id}`);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" }); // Ensure the correct element is scrolled into view
            }
            navigate(`/stiri#news-${id}`);
        } else {
            console.error("News ID is undefined");
        }
    };

    return (
        <div
            id={`news-${id}`} // Ensure unique id for each card
            className={`news-card relative bg-cover bg-center text-white p-4 lg:rounded-lg w-full h-[500px] mb-6 md:w-[320px] md:h-[420px] lg:h-[420px] shadow-2xl ${
                first ? "lg:w-auto" : "lg:w-[330px]"
            }`}
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url('/stiri-bg.webp')`,
            }}
        >
            <div className="flex flex-col p-1 justify-end items-baseline h-full">
                <h2
                    className={`text-2xl font-bold md:text-lg lg:text-lg leading-tight ${
                        first ? "lg:text-[25px] md:text-xl" : ""
                    }`}
                >
                    {title}
                </h2>
                <p
                    className={`text-[14px] opacity-75 font-light md:text-[12px] lg:text-[13px] ${
                        first ? "lg:text-[16px] md:text-[14px]" : ""
                    }`}
                >
                    {date}
                </p>
                <a
                    href={`#news-${id}`} // Dynamic link to the specific news item
                    onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        handleNavigate(id);
                    }}
                    className={`mt-4 inline-block px-5 py-2 text-md border border-green-500 text-white rounded-md transition-colors hover:bg-green-500 hover:text-white md:px-4 md:py-2 md:text-sm lg:px-3 lg:py-2 lg:text-sm ${
                        first ? "lg:px-5 lg:py-2 lg:text-md md:px-5 md:py-3" : ""
                    }`}
                >
                    CITESTE TOT
                </a>
            </div>
        </div>
    );
}