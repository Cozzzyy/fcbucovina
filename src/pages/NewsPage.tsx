import type { News } from '../types/News.ts';
import {NewsArticle} from "../components/News/NewsArticle.tsx";
import { useNews } from "../components/News/api/hooks/useNews";
import { useMemo } from 'react';

export function NewsPage() {
    const { data: news = [] } = useNews();
    
    const filteredNewsData = useMemo(() => {
        const hash = window.location.hash;
        const id = hash.startsWith("#news-") ? Number(hash.replace("#news-", "")) : null;
        
        return id ? news.filter(item => item.id === id) : [...news].reverse();
    }, [news]);

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
