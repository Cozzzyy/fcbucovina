import './App.css';
import { Background } from "./components/Shared/Background.tsx";
import { NavigationBar } from "./components/Shared/NavigationBar.tsx";
import { Footer } from "./components/Shared/Footer.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NewsPage } from "./pages/NewsPage.tsx";
import { motion } from "framer-motion";
import { ScrollToTop } from "./components/Shared/ScrollToTop.tsx";
import { StandingsPage } from "./pages/StandingsPage.tsx";
import { GamesPage } from "./pages/GamesPage.tsx";
import { HomePage } from "./pages/HomePage.tsx";
import { ClubPage } from "./pages/ClubPage.tsx";

// Hoisted outside component to avoid recreation on each render
const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 2 },
};

function App() {
    return (
        <Router>
            <ScrollToTop />
            <NavigationBar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <motion.div {...pageTransition}>
                            <HomePage />
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
                            <ClubPage />
                        </motion.div>
                    }
                />
                <Route
                    path="/clasament"
                    element={
                        <motion.div {...pageTransition}>
                            <StandingsPage />
                        </motion.div>
                    }
                />
                <Route
                    path="/meciuri"
                    element={
                        <motion.div {...pageTransition}>
                            <GamesPage />
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