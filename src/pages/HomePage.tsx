import {NameSection} from "../components/Home/TopSection/NameSection.tsx";
import {NewsCards} from "../components/Home/NewsSection/NewsCards.tsx";
import {ImageSlideshow} from "../components/Home/GameImagesSection/ImageSlideshow.tsx";
import {ScrollingPlayersRow} from "../components/Home/PlayersSection/ScrollingPlayersRow.tsx";
import {LatestGames} from "../components/Home/LatestGamesSection/LatestGames.tsx";
import {Sponsors} from "../components/Sponsors.tsx";
import {useRef} from "react";

export function HomePage() {

    const newsSeparatorRef = useRef<HTMLDivElement>(null);

    const scrollToNewsSeparator = () => {
        if (newsSeparatorRef.current) {
            const offset = -100; // Adjust this value based on your navbar height
            const topPosition = newsSeparatorRef.current.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
    };

  return (
    <>
        <NameSection scrollToNewsSeparator={scrollToNewsSeparator} />
        <div ref={newsSeparatorRef}>
            <NewsCards />
        </div>
        <ImageSlideshow />
        <ScrollingPlayersRow />
        <LatestGames />
        <Sponsors />
    </>
  );
}