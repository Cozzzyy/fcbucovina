import newsData from '../../data/data.json';
import type { News } from '../types/News.ts';

export function NewsPage() {
    const hash = window.location.hash;
    const id = hash.startsWith("#news-") ? Number(hash.replace("#news-", "")) : null;

    const filteredNewsData: News[] = id
        ? newsData.filter((news) => news.id === id)
        : [...newsData].reverse();

    return (
        <div className="w-full lg:w-1/2 mx-auto mt-25">
            <div className="space-y-12">
                {filteredNewsData.map((news: News) => (
                    <div
                        key={news.id}
                        id={`news-${news.id}`}
                        className="p-2"
                    >
                        <h2 className="lg:text-5xl text-4xl italic font-bold text-gray-800">{news.title}</h2>
                        <p className="text-md text-gray-700 mt-4 mb-10 lg:mb-15">{news.date}</p>
                        {news.image && (
                            <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-auto rounded mb-6 "
                            />
                        )}
                        <div className="text-gray-900 mt-4 space-y-2">
                            {news.text
                                .split('\n')
                                .map((line, index) => (
                                    <p key={index} className="text-justify">{line.trim()}</p>
                                ))}
                        </div>
                        <hr className="mt-15 border-gray-300" />
                    </div>
                ))}
            </div>
        </div>
    );
}