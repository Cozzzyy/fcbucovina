import { useState } from "react";

export function MonthFilter() {
    const [selectedMonth, setSelectedMonth] = useState<string>("AUG");

    const months = [
        "AUG", "SEP", "OCT", "NOI", "DEC",
        "IAN", "FEB", "MAR", "APR"
    ];

    const handleMonthClick = (month: string) => {
        setSelectedMonth(month);
        const element = document.getElementById(month);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: "center" });
        }
    };

    return (
        <div className={
            "sticky top-25 z-10 w-11/12 md:w-2/6 backdrop-blur-lg bg-white/90 " +
            "rounded-3xl mb-8 mt-8 overflow-hidden shadow-xl border border-gray-100"
        }>
            <div className={
                "flex flex-row items-center justify-between px-4 py-4 overflow-x-auto " +
                "scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
            }>
                {months.map((month) => (
                    <p
                        key={month}
                        onClick={() => handleMonthClick(month)}
                        className={`text-sm md:text-md cursor-pointer font-bold transition-all duration-200
                            ${selectedMonth === month
                            ? "text-green-700 scale-110"
                            : "opacity-50 hover:text-green-700 hover:scale-105"
                        } px-2`}
                    >
                        {month}
                    </p>
                ))}
            </div>
        </div>
    );
}