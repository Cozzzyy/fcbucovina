export function StandingsTable() {
    const standings = [
        {pos: 1, team: "R. Cappellen FC B", pts: 0, matches: 0, wins: 0, draws: 0, losses: 0},
        {pos: 2, team: "K. Wuustwezel FC B", pts: 0, matches: 0, wins: 0, draws: 0, losses: 0},
        {pos: 3, team: "KSOC Maria Ter Heide", pts: 0, matches: 0, wins: 0, draws: 0, losses: 0},
        {pos: 4, team: "K. Kalmthout SK B", pts: 0, matches: 0, wins: 0, draws: 0, losses: 0},
        {pos: 5, team: "FC Bucovina Loenhout", pts: 0, matches: 0, wins: 0, draws: 0, losses: 0},
        {pos: 6, team: "EXC. FC Essen", pts: 0, matches: 0, wins: 0, draws: 0, losses: 0},
        {pos: 7, team: "Putte SK", pts: 0, matches: 0, wins: 0, draws: 0, losses: 0},
        {pos: 8, team: "Horendonk FC", pts: 0, matches: 0, wins: 0, draws: 0, losses: 0},
        {pos: 9, team: "KSV Wildert", pts: 0, matches: 0, wins: 0, draws: 0, losses: 0},
        {pos: 10, team: "Excelsior Mariaburg B", pts: 0, matches: 0, wins: 0, draws: 0, losses: 0},
        {pos: 11, team: "K. Heibos SV", pts: 0, matches: 0, wins: 0, draws: 0, losses: 0},
        {pos: 12, team: "Zandvliet Sport B", pts: 0, matches: 0, wins: 0, draws: 0, losses: 0},
        {pos: 13, team: "K. Sint Job FC B", pts: 0, matches: 0, wins: 0, draws: 0, losses: 0},
        {pos: 14, team: "SV Noorse", pts: 0, matches: 0, wins: 0, draws: 0, losses: 0},
    ];

    return (
        <div className="p-4 max-w-6xl mx-auto mt-15 lg:mt-30">
            <h2 className="text-5xl lg:text-7xl text-green-700 font-bold italic mb-2">CLASAMENT</h2>
            <h2 className="text-3xl lg:text-5xl text-green-700 mb-8 lg:mb-12">2025-2026</h2>
            <h2 className="text-sm text-gray-300 mb-4">Competitie - 4 Provinciaal Antw B</h2>
    <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-md">
            <thead className="bg-gray-100 text-gray-700 text-xs sm:text-sm uppercase">
            <tr>
                <th className="px-2 sm:px-4 py-2 text-center">Loc</th>
                <th className="px-2 sm:px-4 py-2 text-left">Echipă</th>
                <th className="px-2 sm:px-4 py-2 text-center">Puncte</th>
                <th className="px-2 sm:px-4 py-2 text-center">Meciuri</th>
                <th className="px-2 sm:px-4 py-2 text-center">Victorii</th>
                <th className="px-2 sm:px-4 py-2 text-center">Egaluri</th>
                <th className="px-2 sm:px-4 py-2 text-center">Înfrângeri</th>
            </tr>
            </thead>
            <tbody className="text-gray-800">
            {standings.map((team, index) => {
                const isBucovina = team.team.toUpperCase() === "FC BUCOVINA LOENHOUT";
                return (
                    <tr
                        key={team.pos}
                        className={`${
                            isBucovina
                                ? "bg-green-100 font-bold"
                                : index % 2 === 0
                                    ? "bg-white"
                                    : "bg-gray-100"
                        } hover:bg-green-200 transition font-medium`}
                    >
                        <td className="px-2 py-3 text-center">{team.pos}</td>
                        <td className="px-2 pr-20 py-3 text-left flex items-center gap-3 whitespace-nowrap">
                            <img
                                src={`/teams/${team.team}.png`}
                                alt={team.team}
                                className="w-7 h-7 mr-3 inline-block"
                                loading="lazy" // Lazy load the image
                            />
                            {team.team}
                        </td>
                        <td className="px-2 sm:px-4 py-3 text-center">{team.pts}</td>
                        <td className="px-2 sm:px-4 py-3 text-center">{team.matches}</td>
                        <td className="px-2 sm:px-4 py-3 text-center">{team.wins}</td>
                        <td className="px-2 sm:px-4 py-3 text-center">{team.draws}</td>
                        <td className="px-2 sm:px-4 py-3 text-center">{team.losses}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    </div>
</div>
)
    ;
}
