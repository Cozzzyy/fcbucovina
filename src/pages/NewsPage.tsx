import newsData from '../../data/data.json';
import type { News } from '../types/News.ts';
import {NewsArticle} from "../components/News/NewsArticle.tsx";

export function NewsPage() {
    const hash = window.location.hash;
    const id = hash.startsWith("#news-") ? Number(hash.replace("#news-", "")) : null;

    const filteredNewsData: News[] = id
        ? newsData.filter((news) => news.id === id)
        : [...newsData].reverse();

    return (
        <div className="w-full lg:w-1/2 mx-auto mt-25">
            <div className="space-y-12">
                {filteredNewsData.map((news: News) => {
                    return (
                        <NewsArticle news={news}/>
                    );
                })}
            </div>
        </div>
    );
}
