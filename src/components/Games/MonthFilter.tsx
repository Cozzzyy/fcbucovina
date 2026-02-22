import { useTranslation } from "react-i18next";

const MONTHS = [
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
  "jan",
  "feb",
  "mar",
  "apr",
];

interface MonthFilterProps {
  selectedMonth: string;
  onMonthChange: (month: string) => void;
}

export function MonthFilter({ selectedMonth, onMonthChange }: MonthFilterProps) {
  const { t } = useTranslation();

  const handleMonthClick = (month: string) => {
    onMonthChange(month);
    const element = document.getElementById(month);
    const filter = document.getElementById("month-filter");

    if (element && filter) {
      const filterHeight = filter.offsetHeight;
      const stickyTopOffset = 100;
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.scrollY;
      const targetY = absoluteElementTop - filterHeight - stickyTopOffset;

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      id="month-filter"
      className={
        "sticky top-25 z-10 w-11/12 md:w-2/6 backdrop-blur-lg bg-white/90 " +
        "rounded-3xl mb-8 mt-8 overflow-hidden shadow-xl border border-gray-100"
      }
    >
      <div
        className={
          "flex flex-row items-center justify-between px-4 py-4 overflow-x-auto " +
          "scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
        }
      >
        {MONTHS.map((month) => (
          <p
            key={month}
            onClick={() => handleMonthClick(month)}
            className={`text-sm md:text-md cursor-pointer font-bold transition-all duration-200
                            ${selectedMonth === month
                ? "text-green-700 scale-110"
                : "opacity-50 hover:text-green-700 hover:scale-105"
              } px-2`}
          >
            {t(`months.${month}`)}
          </p>
        ))}
      </div>
    </div>
  );
}
