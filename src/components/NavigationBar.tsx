import { useState } from "react";
import { Link } from "react-router-dom";

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
                            <span className="sr-only">{menuOpen ? "Închide meniul principal" : "Deschide meniul principal"}</span>
                            {menuOpen ? (
                                // X icon
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Hamburger icon
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex-1 flex justify-center sm:justify-start">
                        <img className="h-25 lg:h-45 lg:mt-8 w-auto" src="/teams/logo.png" alt="Logo" />
                    </div>

                    <div className="hidden sm:flex sm:items-center sm:space-x-2">
                        {[
                            { name: "ACASA", path: "/" },
                            { name: "STIRI", path: "/stiri" },
                            { name: "CLUB", path: "/club" },
                            { name: "MECIURI", path: "/meciuri" },
                            { name: "CLASAMENT", path: "/clasament" },
                        ].map((item) => (
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

            {/* Mobile menu (toggle) */}
            {menuOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {[
                            { name: "ACASA", path: "/" },
                            { name: "STIRI", path: "/stiri" },
                            { name: "CLUB", path: "/club" },
                            { name: "MECIURI", path: "/meciuri" },
                            { name: "CLASAMENT", path: "/clasament" },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setMenuOpen(false)} // Close menu on click
                                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-green-800"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}