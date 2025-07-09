interface MonthTitleProps {
    date: string;
}

export function MonthTitle({ date }: MonthTitleProps) {
    const getMonthData = (dateString: string) => {
        const date = new Date(dateString);
        const month = date.getMonth();

        const monthAbbreviations = [
            "IAN", "FEB", "MAR", "APR", "MAI", "IUN",
            "IUL", "AUG", "SEP", "OCT", "NOI", "DEC"
        ];

        const monthAbbr = monthAbbreviations[month];
        const fullDate = date.toLocaleString('ro-RO', { month: 'long', year: 'numeric' });
        return { monthAbbr, fullDate };
    };

    const { monthAbbr, fullDate } = getMonthData(date);

    return (
        <h1 id={monthAbbr} className={"w-11/12 md:w-2/3 text-black text-xl font-bold"}>
            {fullDate.charAt(0).toUpperCase() + fullDate.slice(1)}
        </h1>
    );
}