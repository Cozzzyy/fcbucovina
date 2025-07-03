import newsData from '../../data/data.json';
import type { News } from '../types/News.ts';

export function NewsPage() {

    const reversedNewsData: News[] = [...newsData].reverse();

    return (
        <div className="w-full lg:w-1/2 mx-auto mt-10 p-6 px-4">
            <div className="space-y-12">
                {reversedNewsData.map((news: News) => (
                    <div
                        key={news.id}
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