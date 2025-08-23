import {useState} from "react";
import type {Team} from "../../types/Team.ts";
import standingsData from "../../../data/standings.json";

export function StandingsTable() {
    const [selectedCompetition, setSelectedCompetition] = useState("1");

    const standings: Team[] = selectedCompetition === "0"
        ? standingsData.standingsVoetbalVlaanderen4P as Team[]
        : standingsData.standingsBvA as Team[];

    return (
        <div className="p-4 max-w-6xl mx-auto mt-20 lg:mt-32">
            <h2 className="text-5xl lg:text-7xl text-green-700 font-bold italic mb-4">CLASAMENT</h2>
            <h2 className="text-3xl lg:text-5xl text-green-700 mb-8 lg:mb-12">2025-2026</h2>

            <form className="max-w-xs mb-8">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-500">Alege competiția</label>
                <select
                    id="countries"
                    value={selectedCompetition}
                    onChange={(e) => setSelectedCompetition(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 mb-8">
                    <option value="1">BvA Heren Groep 4 P3/P4</option>  
                    <option value="0">Voetbal Vlaanderen 4P</option>
                </select>
            </form>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-xl shadow-md">
                    <thead className="bg-gray-100 text-gray-700 text-xs sm:text-sm uppercase">
                    <tr>
                        <th className="px-4 py-3 text-center">Loc</th>
                        <th className="px-4 py-3 text-left">Echipă</th>
                        <th className="px-2 py-3 text-center">Puncte</th>
                        <th className="px-4 py-3 text-center">Meciuri</th>
                        <th className="px-4 py-3 text-center">Victorii</th>
                        <th className="px-4 py-3 text-center">Egaluri</th>
                        <th className="px-4 py-3 text-center">Înfrângeri</th>
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