import { NameSection } from "../components/Home/TopSection/NameSection.tsx";
import { NewsCards } from "../components/Home/NewsSection/NewsCards.tsx";
import { ImageSlideshow } from "../components/Home/GameImagesSection/ImageSlideshow.tsx";
import { ScrollingPlayersRow } from "../components/Home/PlayersSection/ScrollingPlayersRow.tsx";
import { LatestGames } from "../components/Home/LatestGamesSection/LatestGames.tsx";
import { Sponsors } from "../components/Shared/Sponsors.tsx";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useNews } from "../components/News/api/hooks/useNews";
import { useClub } from "../components/Club/api/hooks/useClub";

export function HomePage() {
    const newsSeparatorRef = useRef<HTMLDivElement>(null);
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const { data: news } = useNews();
    const { data: clubData } = useClub();

    return (
        <>
            {/* Removed animation for LCP optimization */}
            <NameSection/>

            <motion.div
                ref={newsSeparatorRef}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                variants={sectionVariants}
            >
                <NewsCards news={news} />
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
                <ScrollingPlayersRow players={clubData?.players} staff={clubData?.staff} />
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
