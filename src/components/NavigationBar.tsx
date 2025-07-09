import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const mobileLinks = [
    { name: "ACASA", path: "/" },
    { name: "STIRI", path: "/stiri" },
    { name: "CLUB", path: "/club" },
    { name: "MECIURI", path: "/meciuri" },
    { name: "CLASAMENT", path: "/clasament" },
];

export function NavigationBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-green-700 fixed top-0 w-full z-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6">
                <div className="relative flex h-20 items-center justify-between">
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-green-800 focus:outline-none focus:ring-0"
                            aria-controls="mobile-menu"
                            aria-expanded={menuOpen}
                            aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"}
                        >
              <span className="sr-only">
                {menuOpen ? "Închide meniul principal" : "Deschide meniul principal"}
              </span>
                            {menuOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex-1 flex justify-center sm:justify-start">
                        <img className="h-25 lg:h-45 lg:mt-8 w-auto" src="/teams/FC%20Bucovina%20Loenhout.png" alt="Logo" />
                    </div>

                    {/* Desktop links */}
                    <div className="hidden sm:flex sm:items-center sm:space-x-2">
                        {mobileLinks.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="rounded-md px-3 py-2 text-lg font-light text-white hover:text-green-300 hover:scale-105 transition-transform"
                            >
                                {item.name}
                            </Link>
                        ))}
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
                        className="sm:hidden overflow-hidden"
                    >
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {mobileLinks.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15 * index }}
                                >
                                    <Link
                                        to={item.path}
                                        onClick={() => setMenuOpen(false)}
                                        className="block rounded-md px-3 py-2 text-base font-bold text-white hover:bg-green-800"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
