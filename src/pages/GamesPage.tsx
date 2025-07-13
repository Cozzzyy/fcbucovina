import { useEffect } from "react";
import { TitleSection } from "../components/Games/TitleSection.tsx";
import { MonthFilter } from "../components/Games/MonthFilter.tsx";
import { MonthTitle } from "../components/Games/GamesSection/MonthTitle.tsx";
import { GameCard } from "../components/Games/GamesSection/GameCard.tsx";
import gamesData from "../../data/games.json";
import type { Game } from "../types/Game.ts";

export function GamesPage() {
    const games: Game[] = gamesData;

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
        <section className={"flex flex-col items-center justify-center w-full bg-[#f1f1f1] gap-5"}>
            <TitleSection />
            <MonthFilter />
            {groupedGames.map(([monthYear, monthGames]) => (
                <div key={monthYear} className="w-full flex flex-col items-center gap-5">
                    <MonthTitle date={monthYear + "-01"} />
                    {monthGames.map((game) => (
                        <GameCard key={game.date} game={game} />
                    ))}
                </div>
            ))}
        </section>
    );
}