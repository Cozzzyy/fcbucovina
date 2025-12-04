import { useEffect } from "react";
import { TitleSection } from "../components/Games/TitleSection.tsx";
import { MonthFilter } from "../components/Games/MonthFilter.tsx";
import { MonthTitle } from "../components/Games/GamesSection/MonthTitle.tsx";
import { GameCard } from "../components/Games/GamesSection/GameCard.tsx";
import type { Game } from "../types/Game.ts";
import { useGames } from "../components/Games/api/hooks/useGames.ts";

export function GamesPage() {
    const { data: games = [] } = useGames();

    const groupGamesByMonth = (games: Game[]) => {
        const grouped: { [key: string]: Game[] } = {};

        games.forEach((game) => {
            const monthYear = game.date.substring(0, 7); // Gets YYYY-MM
            if (!grouped[monthYear]) {
                grouped[monthYear] = [];
            }
            grouped[monthYear].push(game);
        });

        return Object.entries(grouped).sort();
    };

    const groupedGames = groupGamesByMonth(games);

    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={"flex flex-col items-center justify-center w-full  gap-5"}>
            <TitleSection />
            <MonthFilter />
            {groupedGames.map(([monthYear, monthGames]) => (
                <div key={monthYear} className="w-full flex flex-col items-center gap-3">
                    <MonthTitle date={monthYear + "-01"} />
                    {monthGames.map((game) => (
                        <GameCard key={game.date} game={game} />
                    ))}
                </div>
            ))}
        </section>
    );
}