import { useTranslation } from "react-i18next";

interface MonthTitleProps {
    date: string;
}

export function MonthTitle({ date }: MonthTitleProps) {
    const { t } = useTranslation();
    
    const getMonthData = (dateString: string) => {
        const date = new Date(dateString);
        const month = date.getMonth();
        const year = date.getFullYear();

        const monthAbbreviations = [
            "jan", "feb", "mar", "apr", "may", "jun",
            "jul", "aug", "sep", "oct", "nov", "dec"
        ];

        const monthNames = [
            "january", "february", "march", "april", "may", "june",
            "july", "august", "september", "october", "november", "december"
        ];

        const monthAbbr = monthAbbreviations[month];
        const monthName = t(`monthsFull.${monthNames[month]}`);
        const fullDate = `${monthName} ${year}`;
        
        return { monthAbbr, fullDate };
    };

    const { monthAbbr, fullDate } = getMonthData(date);

    return (
        <h1 id={monthAbbr} className={"w-11/12 md:w-2/3 text-black text-xl font-bold mb-4"}>
            {fullDate.charAt(0).toUpperCase() + fullDate.slice(1)}
        </h1>
    );
}