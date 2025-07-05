import './App.css';
import { Background } from "./components/Background.tsx";
import { NavigationBar } from "./components/NavigationBar.tsx";
import { NameSection } from "./components/NameSection.tsx";
import { NewsSeparator } from "./components/NewsSeparator.tsx";
import { LatestGames } from "./components/LatestGames.tsx";
import { Footer } from "./components/Footer.tsx";
import { Sponsors } from "./components/Sponsors.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NewsPage } from "./components/NewsPage.tsx";
import { motion } from "framer-motion";
import {ImageSlideshow} from "./components/ImageSlideshow.tsx";
import {Club} from "./components/Club/Club.tsx"
import { useRef } from "react";
import {ScrollingPlayersRow} from "./components/ScrollingPlayersRow.tsx";


function App() {
    const pageTransition = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 1.5 },
    };

    const newsSeparatorRef = useRef<HTMLDivElement>(null);

    const scrollToNewsSeparator = () => {
        if (newsSeparatorRef.current) {
            const offset = -100; // Adjust this value based on your navbar height
            const topPosition = newsSeparatorRef.current.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
    };

    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <motion.div {...pageTransition}>
                            <NameSection scrollToNewsSeparator={scrollToNewsSeparator} />
                            <div ref={newsSeparatorRef}>
                                <NewsSeparator />
                            </div>
                            <ImageSlideshow />
                            <ScrollingPlayersRow />
                            <LatestGames />
                            <Sponsors />
                        </motion.div>
                    }
                />
                <Route
                    path="/stiri"
                    element={
                        <motion.div {...pageTransition}>
                            <NewsPage />
                        </motion.div>
                    }
                />
                <Route
                    path="/club"
                    element={
                        <motion.div {...pageTransition}>
                            <Club />
                        </motion.div>
                    }
                />
            </Routes>
            <Footer />
            <Background />
        </Router>
    );
}

export default App;