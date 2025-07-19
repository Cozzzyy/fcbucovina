import DOMPurify from "dompurify";
import type {News} from "../../types/News.ts";

interface NewsContentProps {
    news: News;
}

export function NewsContent({ news } : NewsContentProps) {
    const sanitizedHTML = DOMPurify.sanitize(news.text);

    return (
        <>
            <div
                className="text-gray-700 mt-8 space-y-4"
                dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
            ></div>
            <hr className="mt-15 border-gray-300" />
        </>
    );
}