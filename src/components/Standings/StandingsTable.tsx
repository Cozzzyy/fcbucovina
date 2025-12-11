import {useState} from "react";
import { useStandings } from "./api/hooks/useStandings";
import { useTranslation } from "react-i18next";

export function StandingsTable() {
    const [selectedCompetition, setSelectedCompetition] = useState("1");
    const { t } = useTranslation();
    const { data: standings, isPending: loading, error } = useStandings();

    if (loading) {
        return (
            <div className="p-4 max-w-6xl mx-auto mt-20 lg:mt-32">
                <h2 className="text-5xl lg:text-7xl text-green-700 font-bold italic mb-4">{t('standings.title')}</h2>
                <p className="text-gray-600">{t('common.loading')}</p>
            </div>
        );
    }

    if (error || !standings) {
        return (
            <div className="p-4 max-w-6xl mx-auto mt-20 lg:mt-32">
                <h2 className="text-5xl lg:text-7xl text-green-700 font-bold italic mb-4">{t('standings.title')}</h2>
                <p className="text-red-600">{t('common.error')}: {error?.message || t('common.noData')}</p>
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 mb-8">
                    <option value="0">{t('standings.competition')}</option>
                </select>
            </form>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-xl shadow-md">
                    <thead className="bg-gray-100 text-gray-700 text-xs sm:text-sm uppercase">
                    <tr>
                        <th className="px-4 py-3 text-center">{t('standings.position')}</th>
                        <th className="px-4 py-3 text-left">{t('standings.team')}</th>
                        <th className="px-2 py-3 text-center">{t('standings.points')}</th>
                        <th className="px-4 py-3 text-center">{t('standings.games')}</th>
                        <th className="px-4 py-3 text-center">{t('standings.wins')}</th>
                        <th className="px-4 py-3 text-center">{t('standings.draws')}</th>
                        <th className="px-4 py-3 text-center">{t('standings.losses')}</th>
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
                                        ? "bg-green-100 font-bold"
                                        : index % 2 === 0
                                            ? "bg-white"
                                            : "bg-gray-100"
                                } hover:bg-green-200 transition font-medium`}
                            >
                                <td className="px-4 py-3 text-center">{team.pos}</td>
                                <td className="px-4 py-3 text-left">
                                    <div className="flex items-center gap-3 select-none pointer-events-none"
                                         contentEditable={false}
                                         suppressContentEditableWarning={true}>
                                        <img
                                            src={selectedCompetition === "0"
                                                ? `/teams/${team.team}.png`
                                                : team.image || `/teams/${team.team}.png`
                                            }
                                            alt={team.team}
                                            className="w-7 h-7 flex-shrink-0"
                                        />
                                        <span className="select-none pointer-events-none text-wrap font-medium"
                                              contentEditable={false}
                                              suppressContentEditableWarning={true}>
                                            {team.team.toUpperCase()}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-center font-bold">{team.pts}</td>
                                <td className="px-4 py-3 text-center">{team.matches}</td>
                                <td className="px-4 py-3 text-center">{team.wins}</td>
                                <td className="px-4 py-3 text-center">{team.draws}</td>
                                <td className="px-4 py-3 text-center">{team.losses}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}