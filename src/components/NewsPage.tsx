import newsData from '../../data/data.json';
import type { News } from '../types/News.ts';

export function NewsPage() {
    // Extract the id from the URL hash
    const hash = window.location.hash; // e.g., "#news-6"
    const id = hash.startsWith("#news-") ? Number(hash.replace("#news-", "")) : null;

    // If no id is present, show all news items; otherwise, filter by id
    const filteredNewsData: News[] = id ? newsData.filter((news) => news.id === id) : newsData;

    return (
        <div className="w-full lg:w-1/2 mx-auto mt-25">
            <div className="space-y-12">
                {filteredNewsData.map((news: News) => (
                    <div
                        key={news.id}
                        id={`news-${news.id}`} // Assign a unique id to the news item
                        className="bg-white shadow-lg border-t-12 border-t-green-700 border-l-white border-r-white border-b-white p-6"
                    >
                        <h2 className="text-2xl font-bold text-gray-800">{news.title}</h2>
                        <p className="text-sm text-gray-500 mt-2">{news.date}</p>
                        <div className="text-gray-700 mt-4 space-y-4">
                            {news.text
                                .split('\n')
                                .map((line, index) => (
                                    <p key={index} className="text-justify">{line.trim()}</p>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}