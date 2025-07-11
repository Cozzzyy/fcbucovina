import { NameSection } from "../components/Home/TopSection/NameSection.tsx";
import { NewsCards } from "../components/Home/NewsSection/NewsCards.tsx";
import { ImageSlideshow } from "../components/Home/GameImagesSection/ImageSlideshow.tsx";
import { ScrollingPlayersRow } from "../components/Home/PlayersSection/ScrollingPlayersRow.tsx";
import { LatestGames } from "../components/Home/LatestGamesSection/LatestGames.tsx";
import { Sponsors } from "../components/Sponsors.tsx";
import { useRef } from "react";
import { motion } from "framer-motion";

export function HomePage() {
    const newsSeparatorRef = useRef<HTMLDivElement>(null);

    const scrollToNewsSeparator = () => {
        if (newsSeparatorRef.current) {
            const offset = -100; // Adjust this value based on your navbar height
            const topPosition = newsSeparatorRef.current.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                variants={sectionVariants}
            >
                <NameSection scrollToNewsSeparator={scrollToNewsSeparator} />
            </motion.div>

            <motion.div
                ref={newsSeparatorRef}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                variants={sectionVariants}
            >
                <NewsCards />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                variants={sectionVariants}
            >
                <ImageSlideshow />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                variants={sectionVariants}
            >
                <ScrollingPlayersRow />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                variants={sectionVariants}
            >
                <LatestGames />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                variants={sectionVariants}
            >
                <Sponsors />
            </motion.div>
        </>
    );
}