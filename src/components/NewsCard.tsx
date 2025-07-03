import newsData from '../../data/data.json';
import type { News } from '../types/News.ts';
import { useNavigate } from "react-router-dom";

export function NewsCards() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
        navigate("/stiri");
    };

    // Sort newsData by date in descending order and take the first 3 items
    const latestNews : News[] = [...newsData]
        .sort((a : News, b : News): number => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-3 mb-30">
            {latestNews.map((news: News) => (
                <div
                    key={news.id}
                    className="bg-white shadow-xl p-4 hover:shadow-xl transition-shadow opacity-85 rounded-lg"
                >
                    <h2 className="text-xl font-bold">{news.title}</h2>
                    <p className="text-sm text-gray-500 mt-1">{news.date}</p>
                    <p className="text-gray-700 mt-4">
                        {news.text.length > 150 ? news.text.slice(0, 150) + "..." : news.text}
                    </p>
                    <button
                        className="mt-4 px-2 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                        onClick={handleNavigate}
                    >
                        Citește tot
                    </button>
                </div>
            ))}
        </div>
    );
}