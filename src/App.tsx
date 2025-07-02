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

function App() {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={
                    <>
                        <NameSection />
                        <NewsSeparator />
                        <LatestGames />
                        <Sponsors />
                    </>
                } />
                <Route path="/stiri" element={<NewsPage />} />
            </Routes>
            <Footer />
            <Background />
        </Router>
    );
}

export default App;