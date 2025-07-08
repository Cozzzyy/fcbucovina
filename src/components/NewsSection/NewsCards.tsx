import { NewsCard } from "./NewsCard.tsx";
import type { News } from "../../types/News.ts";
import newsData from '../../../data/data.json';
import "./newsCards.css";

export function NewsCards() {
    const latestNews: News[] = [...newsData]
        .sort((a: News, b: News): number => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <>
            <h1 className="lg:mt-15 mt-15 w-full text-center text-5xl font-bold mb-8 text-transparent text-outline">
                Ultimele știri
            </h1>

            {/* Scrollable container */}
            <div className="w-full overflow-x-auto">
                <div className="flex snap-x snap-mandatory gap-4 px-4 pb-4 w-full overflow-x-auto">
                    {latestNews.map((newsItem: News, index: number) => (
                        <div
                            key={newsItem.id}
                            className={`flex-shrink-0 snap-center w-full sm:w-[90%] md:w-[45%] lg:w-[22%] ${
                                index === 0 ? "lg:w-[44%]" : ""
                            }`}
                        >
                            <NewsCard
                                title={newsItem.title}
                                id={newsItem.id}
                                date={newsItem.date}
                                first={index === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}