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

function App() {
    const pageTransition = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 1 },
    };

    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <motion.div {...pageTransition}>
                            <NameSection />
                            <NewsSeparator />
                            <LatestGames />
                            <ImageSlideshow />
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
            </Routes>
            <Footer />
            <Background />
        </Router>
    );
}

export default App;