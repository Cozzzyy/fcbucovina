import { NewsCards } from "./NewsCard.tsx";

export function NewsSeparator() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col w-full sm:w-4/5 lg:w-2/3 px-4 mb-10">
                <h1 className="text-sm font-bold w-1/2 sm:w-1/3 lg:w-1/7 text-center text-white bg-[#008229] p-2">
                    ULTIMELE ȘTIRI
                </h1>
                <NewsCards />
            </div>
        </div>
    );
}