import { NewsCards } from "./NewsCard.tsx";

export function NewsSeparator() {
    return (
        <div className="flex flex-col items-center justify-center w-full mt-15">
            <div className="flex flex-col w-full lg:w-2/3 px-4">
                <h1 className="text-sm font-bold w-1/2 sm:w-1/3 lg:w-1/7 text-center text-white bg-[#008229] p-2">
                    ULTIMELE ȘTIRI
                </h1>
                <NewsCards />
            </div>
        </div>
    );
}
