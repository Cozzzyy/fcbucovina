import NewsHeader from "./NewsHeader.tsx";
import NewsImages from "./NewsImages.tsx";
import {NewsContent} from "./NewsContent.tsx";
import type { News } from "../../types/News.ts";

interface NewsArticleProps {
    news : News;
}

export function NewsArticle({ news }: NewsArticleProps) {
    return (
        <>
            <div
                key={news.id}
                id={`news-${news.id}`}
                className="p-4"
            >
                <NewsHeader news={news}/>
                {news.images && news.images.length > 0 && (
                    <NewsImages images={news.images} />
                )}
                <NewsContent news={news} />
            </div>
        </>
    )
}