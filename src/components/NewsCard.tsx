

const newsData = [
    {
        id: 1,
        title: "FC BUCOVINA - IMPREUNA SPRE PERFORMANTA IN SEZONUL 25-26",
        date: "2023-10-01",
        text: "Asociația sportivă Football Club Bucovina Vzw pornește cu încredere într-un nou sezon în care ne propunem să facem un sezon bun la fel ca cel precedent. Pentru a atinge aceste obiective ambițioase, avem nevoie de voi  sponsori, parteneri, oameni de afaceri sau susținători care cred în sport, în echipe unite și în puterea comunității românești din Belgia."
    },
    {
        id: 2,
        title: "FC BUCOVINA - INVITATE DE ONOARE LA UN MECI DE AMICAL IN BRUXELLE",
        date: "2023-09-25",
        text: "Echipa noastră, Fc Bucovina, are onoarea de a răspunde invitației lansate de Porto Bruxelles pentru un meci amical de gală ce va avea loc sâmbătă seara, în capitala Belgiei. Evenimentul marchează începutul unui nou capitol pentru clubul gazdă, care va profita de această ocazie pentru a-și prezenta oficial echipamentele pentru sezonul 2025-2026, precum.."
    },
    {
        id: 3,
        title: "FINAL DE SEZON. FINAL DE POVESTE. DAR NU ȘI FINAL DE DRUM.",
        date: "2023-10-05",
        text: "Astăzi nu scriem doar despre un meci. Scriem despre caracter. Despre inimă. Despre o echipă care a demonstrat că fotbalul înseamnă mai mult decât un scor. Scriem despre  Fc Bucovina, o echipă care a luptat cu tot ce a avut în ea, până la ultima picătură de energie, până la ultima bătaie de inimă.\n" +
            "Într-un duel de foc, contând pentru semifinala barajului..."
    }
];

import { useNavigate } from "react-router-dom";

export function NewsCards() {
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-18 mt-3 mb-30">
            {newsData.map((news) => (
                <div
                    key={news.id}
                    className="bg-white shadow-xl p-4 hover:shadow-xl transition-shadow opacity-85"
                >
                    <h2 className="text-xl font-bold">{news.title}</h2>
                    <p className="text-sm text-gray-500 mt-1">{news.date}</p>
                    <p className="text-gray-700 mt-4">{news.text}</p>
                    <button
                        className="mt-4 px-2 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                        onClick={() => navigate("/stiri")}
                    >
                        Citește tot
                    </button>
                </div>
            ))}
        </div>
    );
}