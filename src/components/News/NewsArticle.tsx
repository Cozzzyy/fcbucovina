import { NewsHeader } from "./NewsHeader.tsx";
import { NewsContent } from "./NewsContent.tsx";
import type { News } from "../../types/News.ts";

interface NewsArticleProps {
    news: News;
}

export function NewsArticle({ news }: NewsArticleProps) {
    return (
        <>
            <div
                key={news.id}
                id={`news-${news.id}`}
                className="p-4"
            >
                <NewsHeader news={news} />
                <NewsContent news={news} />
            </div>
        </>
    )
}