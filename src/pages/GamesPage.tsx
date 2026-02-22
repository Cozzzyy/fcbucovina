import { useEffect, useMemo, useRef, useState } from "react";
import { TitleSection } from "../components/Games/TitleSection.tsx";
import { MonthFilter } from "../components/Games/MonthFilter.tsx";
import { MonthTitle } from "../components/Games/GamesSection/MonthTitle.tsx";
import { GameCard } from "../components/Games/GamesSection/GameCard.tsx";
import type { Game } from "../types/Game.ts";
import { useGames } from "../components/Games/api/hooks/useGames.ts";

export function GamesPage() {
    const { data: games = [] } = useGames();
    const [selectedMonth, setSelectedMonth] = useState<string>("aug");

    const groupedGames = useMemo(() => {
        const grouped: { [key: string]: Game[] } = {};

        games.forEach((game) => {
            const monthYear = game.date.substring(0, 7); // Gets YYYY-MM
            if (!grouped[monthYear]) {
                grouped[monthYear] = [];
            }
            grouped[monthYear].push(game);
        });

        return Object.entries(grouped).sort();
    }, [games]);

    const targetGameDate = useMemo(() => {
        if (!games.length) return null;

        const now = new Date();
        now.setHours(0, 0, 0, 0);

        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();

        let bestUpcomingDate: Date | null = null;
        let bestUpcomingStr: string | null = null;
        let bestPlayedDate: Date | null = null;
        let bestPlayedStr: string | null = null;

        for (const game of games) {
            const gameDate = new Date(game.date);

            if (gameDate >= now) {
                if (!bestUpcomingDate || gameDate < bestUpcomingDate) {
                    bestUpcomingDate = gameDate;
                    bestUpcomingStr = game.date;
                }
            } else if (gameDate.getMonth() === currentMonth && gameDate.getFullYear() === currentYear) {
                if (!bestPlayedDate || gameDate > bestPlayedDate) {
                    bestPlayedDate = gameDate;
                    bestPlayedStr = game.date;
                }
            }
        }
        // Prioritize upcoming game which will be centered on screen
        return bestUpcomingStr || bestPlayedStr;
    }, [games]);

    const hasScrolledRef = useRef(false);

    useEffect(() => {
        if (targetGameDate) {
            const date = new Date(targetGameDate);
            const monthAbbreviations = [
                "jan", "feb", "mar", "apr", "may", "jun",
                "jul", "aug", "sep", "oct", "nov", "dec"
            ];
            setSelectedMonth(monthAbbreviations[date.getMonth()]);
        }
    }, [targetGameDate]);

    useEffect(() => {
        // Find the target element and scroll to it after games are loaded and rendered
        if (games.length > 0 && !hasScrolledRef.current) {
            if (targetGameDate) {
                // A small timeout ensures the mapped elements are in the DOM before scrolling
                setTimeout(() => {
                    const element = document.getElementById(`game-${targetGameDate}`);
                    if (element) {
                        // Use block: 'center' so the user can see games above and below (like upcoming)
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        hasScrolledRef.current = true;
                    }
                }, 100);
            } else {
                window.scrollTo(0, 0);
                hasScrolledRef.current = true;
            }
        }
    }, [games, targetGameDate]);

    return (
        <section className={"flex flex-col items-center justify-center w-full  gap-5"}>
            <TitleSection />
            <MonthFilter selectedMonth={selectedMonth} onMonthChange={setSelectedMonth} />
            {groupedGames.map(([monthYear, monthGames]) => (
                <div key={monthYear} className="w-full flex flex-col items-center gap-3">
                    <MonthTitle date={monthYear + "-01"} />
                    {monthGames.map((game) => (
                        <GameCard key={`${game.date}-${game.homeTeam}-${game.awayTeam}`} game={game} />
                    ))}
                </div>
            ))}
        </section>
    );
}