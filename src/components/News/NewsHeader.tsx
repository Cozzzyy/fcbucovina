import { ClockIcon } from "lucide-react";
import type { News } from "../../types/News.ts";

interface NewsHeaderProps {
    news: News
}

export function NewsHeader({ news }: NewsHeaderProps) {
    return (
        <>
            <h2 className="lg:text-5xl text-2xl italic font-bold text-gray-800">{news.title}
            </h2>
            <p className="text-sm flex gap-2 text-gray-700 mt-2 mb-10 lg:mb-15">
                <ClockIcon className="inline mr-2" width={20} height={20} />
                {news.date}
            </p>
        </>
    )
}