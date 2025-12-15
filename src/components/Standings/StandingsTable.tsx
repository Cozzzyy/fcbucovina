import { useState } from "react";
import { useStandings } from "./api/hooks/useStandings";
import { useTranslation } from "react-i18next";
import type { Team } from "../../types/Team";

export function StandingsTable() {
    const [selectedCompetition, setSelectedCompetition] = useState("1");
    const { t } = useTranslation();
    const { data: standings, isPending: loading, error } = useStandings();

    const getTeamImage = (team : Team) => {
        return selectedCompetition === "0"
            ? `/teams/${team.team}.png`
            : team.image || `/teams/${team.team}.png`;
    };

    if (loading) {
        return (
            <div className="p-4 max-w-6xl mx-auto mt-20 lg:mt-32">
                <h2 className="text-5xl lg:text-7xl text-green-700 font-bold italic mb-4">{t('standings.title')}</h2>
                <p className="text-gray-600 animate-pulse">{t('common.loading')}</p>
            </div>
        );
    }
    
    if (error) {
        return (
            <div className="p-4 max-w-6xl mx-auto mt-20 lg:mt-32">
                <h2 className="text-5xl lg:text-7xl text-green-700 font-bold italic mb-4">{t('standings.title')}</h2>
                <p className="text-red-600">{t('common.error')}: {error.message}</p>
            </div>
        );
    }

    // Show error if standings is not a valid array with data
    if (!standings || !Array.isArray(standings) || standings.length === 0) {
        return (
            <div className="p-4 max-w-6xl mx-auto mt-20 lg:mt-32">
                <h2 className="text-5xl lg:text-7xl text-green-700 font-bold italic mb-4">{t('standings.title')}</h2>
                <p className="text-red-600">{t('common.error')}: No standings data available</p>
            </div>
        );
    }

    return (
        <div className="p-4 max-w-6xl mx-auto mt-20 lg:mt-32">
            <h2 className="text-5xl lg:text-7xl text-green-700 font-bold italic mb-4">{t('standings.title')}</h2>
            <h2 className="text-3xl lg:text-5xl text-green-700 mb-8 lg:mb-12">{t('standings.season')}</h2>

            <form className="max-w-xs mb-8">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-500">{t('standings.selectCompetition')}</label>
                <select
                    id="countries"
                    value={selectedCompetition}
                    onChange={(e) => setSelectedCompetition(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-green-500 focus:border-green-500 block w-full p-4 mb-8">
                    <option value="0">{t('standings.competition')}</option>
                </select>
            </form>

            {/* --- COMPACT MOBILE CARD VIEW (< 768px) --- */}
            <div className="block md:hidden space-y-3">
                {standings.map((team, index) => {
                    const isBucovina = team.team.toUpperCase() === "FC BUCOVINA LOENHOUT";
                    
                    return (
                        <div
                            key={`${selectedCompetition}-${team.pos}-${index}`}
                            className={`relative bg-white shadow-sm border border-gray-100 p-3 flex flex-col gap-3 overflow-hidden ${
                                isBucovina ? "border-l-4 border-l-green-600 bg-green-50/20" : "border-l-4 border-l-transparent"
                            }`}
                        >
                            {/* Top Row: Rank, Logo, Name */}
                            <div className="flex items-center gap-3">
                                <span className="text-gray-400 font-mono text-sm font-bold w-5">
                                    {team.pos}.
                                </span>
                                <img
                                    src={getTeamImage(team)}
                                    alt={team.team}
                                    className="w-8 h-8 object-contain"
                                />
                                <span className={`font-bold text-sm leading-tight uppercase truncate ${isBucovina ? "text-green-800" : "text-gray-800"}`}>
                                    {team.team}
                                </span>
                            </div>

                            {/* Bottom Row: Stats Strip */}
                            <div className="flex items-center justify-between bg-gray-50 rounded px-3 py-2 text-xs">
                                {/* Major Stat: Points */}
                                <div className="flex flex-col items-center min-w-[30px] border-r border-gray-200 pr-3 mr-1">
                                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">{t('standings.points')}</span>
                                    <span className="text-base font-bold text-green-700">{team.pts}</span>
                                </div>

                                {/* Secondary Stats: Games | W-D-L */}
                                <div className="flex items-center justify-between flex-1 pl-2 gap-4">
                                    <div className="flex flex-col items-center">
                                        <span className="text-[10px] text-gray-400 uppercase">{t('standings.games')}</span>
                                        <span className="font-medium text-gray-700">{team.matches}</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-[10px] text-gray-400 uppercase">{t('standings.wins')}</span>
                                        <span className="font-medium text-gray-700">{team.wins}</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-[10px] text-gray-400 uppercase">{t('standings.draws')}</span>
                                        <span className="font-medium text-gray-700">{team.draws}</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-[10px] text-gray-400 uppercase">{t('standings.losses')}</span>
                                        <span className="font-medium text-gray-700">{team.losses}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* --- DESKTOP TABLE VIEW (>= 768px) --- */}
            <div className="hidden md:block">
                <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
                    <thead className="bg-gray-100 text-gray-700 text-xs sm:text-sm uppercase">
                    <tr>
                        <th className="px-2 sm:px-4 py-3 text-center w-16">{t('standings.position')}</th>
                        <th className="px-2 sm:px-4 py-3 text-left">{t('standings.team')}</th>
                        <th className="px-2 sm:px-4 py-3 text-center">{t('standings.points')}</th>
                        <th className="px-2 sm:px-4 py-3 text-center hidden sm:table-cell">{t('standings.games')}</th>
                        <th className="px-2 sm:px-4 py-3 text-center hidden md:table-cell">{t('standings.wins')}</th>
                        <th className="px-2 sm:px-4 py-3 text-center hidden md:table-cell">{t('standings.draws')}</th>
                        <th className="px-2 sm:px-4 py-3 text-center hidden md:table-cell">{t('standings.losses')}</th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-800">
                    {standings.map((team, index) => {
                        const isBucovina = team.team.toUpperCase() === "FC BUCOVINA LOENHOUT";
                        return (
                            <tr
                                key={`${selectedCompetition}-${team.pos}-${index}`}
                                className={`${
                                    isBucovina
                                        ? "bg-green-50 font-bold"
                                        : index % 2 === 0
                                            ? "bg-white"
                                            : "bg-gray-50"
                                } hover:bg-green-50 transition duration-150 border-b border-gray-100 last:border-b-0`}
                            >
                                <td className="px-2 sm:px-4 py-3 text-center">{team.pos}</td>
                                <td className="px-2 sm:px-4 py-3 text-left">
                                    <div className="flex items-center gap-3 select-none pointer-events-none">
                                        <img
                                            src={getTeamImage(team)}
                                            alt={team.team}
                                            className="w-8 h-8 object-contain"
                                        />
                                        <span className="select-none pointer-events-none text-wrap sm:text-nowrap truncate font-medium">
                                            {team.team.toUpperCase()}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-2 sm:px-4 py-3 text-center font-bold text-green-700">{team.pts}</td>
                                <td className="px-2 sm:px-4 py-3 text-center hidden sm:table-cell">{team.matches}</td>
                                <td className="px-2 sm:px-4 py-3 text-center hidden md:table-cell">{team.wins}</td>
                                <td className="px-2 sm:px-4 py-3 text-center hidden md:table-cell">{team.draws}</td>
                                <td className="px-2 sm:px-4 py-3 text-center hidden md:table-cell">{team.losses}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}