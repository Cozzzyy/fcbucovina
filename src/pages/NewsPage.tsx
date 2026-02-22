import type { News } from '../types/News.ts';
import { NewsArticle } from "../components/News/NewsArticle.tsx";
import { useNews } from "../components/News/api/hooks/useNews";
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export function NewsPage() {
    const { data: news = [] } = useNews();
    const { hash } = useLocation();

    const filteredNewsData = useMemo(() => {
        const id = hash.startsWith("#news-") ? Number(hash.replace("#news-", "")) : null;
        return id ? news.filter(item => item.id === id) : [...news].reverse();
    }, [news, hash]);

    return (
        <div className="w-full lg:w-1/2 mx-auto mt-6 lg:mt-10">
            <div className="space-y-12">
                {filteredNewsData.map((news: News) => {
                    return (
                        <NewsArticle key={news.id} news={news} />
                    );
                })}
            </div>
        </div>
    );
}
