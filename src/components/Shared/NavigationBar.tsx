import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { useQueryClient } from '@tanstack/react-query';
import { fetchClubMatches, transformToGameFormat } from '../Games/api/endpoint/endpoint';
import { fetchSeriesRankings } from '../Standings/api/endpoint/endpoint';
import { fetchNews } from '../News/api/endpoint/endpoint';
import { fetchClubData } from '../Club/api/endpoint/endpoint';
import transformToTeamFormat from '../Standings/utils/utils';

const navLinks = [
    { nameKey: "nav.home", path: "/" },
    { nameKey: "nav.news", path: "/stiri" },
    { nameKey: "nav.club", path: "/club" },
    { nameKey: "nav.games", path: "/meciuri" },
    { nameKey: "nav.standings", path: "/clasament" },
];

const languages = [
    { code: "ro", name: "RO", flag: "🇷🇴" },
    { code: "en", name: "EN", flag: "🇬🇧" },
    { code: "nl", name: "NL", flag: "🇳🇱" },
    { code: "fr", name: "FR", flag: "🇫🇷" },
];

export function NavigationBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const queryClient = useQueryClient();

    const changeLanguage = (langCode: string) => {
        i18n.changeLanguage(langCode);
        setLangMenuOpen(false);
    };

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    const handleHover = (route: string) => {
        switch (route) {
            case '/meciuri':
                queryClient.prefetchQuery({
                    queryKey: ['games'],
                    queryFn: async () => {
                        const data = await fetchClubMatches();
                        return transformToGameFormat(data.clubMatchesAssignations);
                    },
                    staleTime: 5 * 60 * 1000,
                });
                break;
            case '/clasament':
                queryClient.prefetchQuery({
                    queryKey: ['standings'],
                    queryFn: async () => {
                        const apiData = await fetchSeriesRankings();
                        return transformToTeamFormat(apiData);
                    },
                    staleTime: 5 * 60 * 1000,
                });
                break;
            case '/stiri':
                queryClient.prefetchQuery({
                    queryKey: ['news'],
                    queryFn: async () => {
                        const data = await fetchNews();
                        return data.news;
                    },
                    staleTime: 10 * 60 * 1000,
                });
                break;
            case '/club':
                queryClient.prefetchQuery({
                    queryKey: ['club'],
                    queryFn: fetchClubData,
                    staleTime: 30 * 60 * 1000,
                });
                break;
        }
    };

    return (
        <nav className="bg-[#018749] fixed top-0 w-full z-50 drop-shadow-black">
            <div className="mx-auto max-w-7xl px-2 sm:px-6">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-green-800 focus:outline-none focus:ring-0"
                            aria-controls="mobile-menu"
                            aria-expanded={menuOpen}
                            aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
                        >
              <span className="sr-only">
                {menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              </span>
                            {menuOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex-1 flex justify-center sm:justify-start">
                        <img className="h-20 lg:h-35 lg:ml-10 lg:mt-8 w-auto" src="/teams/FC%20Bucovina%20Loenhout.png" alt="Logo" />
                    </div>

                    {/* Desktop links and language selector */}
                    <div className="hidden sm:flex sm:items-center sm:space-x-2">
                        {navLinks.map((item) => (
                            <Link
                                key={item.nameKey}
                                to={item.path}
                                onMouseEnter={() => handleHover(item.path)}
                                className="rounded-md px-3 py-2 text-lg font-bold text-white hover:text-green-300 hover:scale-105 transition-transform"
                            >
                                {t(item.nameKey)}
                            </Link>
                        ))}
                        
                        {/* Language selector */}
                        <div className="relative ml-4">
                            <button
                                onClick={() => setLangMenuOpen(!langMenuOpen)}
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-lg font-bold text-white hover:bg-green-800 transition-colors"
                                aria-label={t('languages.selectLanguage')}
                            >
                                <Globe className="w-5 h-5" />
                                {currentLanguage.name}
                            </button>
                            
                            <AnimatePresence>
                                {langMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50"
                                    >
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => changeLanguage(lang.code)}
                                                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                                                    i18n.language === lang.code ? 'bg-green-50 text-green-700 font-bold' : 'text-gray-700'
                                                }`}
                                            >
                                                {t(`languages.${lang.code === 'ro' ? 'romanian' : lang.code === 'en' ? 'english' : lang.code === 'nl' ? 'dutch' : 'french'}`)}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu with animation */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        id="mobile-menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navLinks.map((item, index) => (
                                <motion.div
                                    key={item.nameKey}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15 * index }}
                                >
                                    <Link
                                        to={item.path}
                                        onClick={() => setMenuOpen(false)}
                                        onMouseEnter={() => handleHover(item.path)}
                                        className="block rounded-md px-3 py-2 text-base font-bold text-white hover:bg-green-800"
                                    >
                                        {t(item.nameKey)}
                                    </Link>
                                </motion.div>
                            ))}
                            
                            {/* Mobile language selector */}
                            <div className="pt-2 border-t border-green-600 mt-2">
                                <p className="px-3 py-2 text-sm text-green-200 font-semibold">{t('languages.languageLabel')}</p>
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => changeLanguage(lang.code)}
                                        className={`block w-full text-left rounded-md px-3 py-2 ${
                                            i18n.language === lang.code 
                                                ? 'text-white font-bold text-base' 
                                                : 'text-white hover:bg-green-800 text-sm font-light'
                                        }`}
                                    >
                                        {t(`languages.${lang.code === 'ro' ? 'romanian' : lang.code === 'en' ? 'english' : lang.code === 'nl' ? 'dutch' : 'french'}`)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
