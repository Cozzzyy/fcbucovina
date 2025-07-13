import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function NameSection() {
    const navigate = useNavigate();

    const handleCalendarClick = () => {
        navigate("/meciuri");
    };

    return (
        <section
            className="flex flex-col h-screen justify-start items-center px-4 text-center overflow-hidden pb-20 md:pb-40"
            style={{ boxSizing: "border-box" }}
        >
            <header className="pt-12 flex flex-col justify-center items-center w-full mt-auto">
                <h1
                    className="text-[55px] lg:text-9xl font-bold text-nowrap text-center text-green-700 shadow-2xl leading-tight lg:w-2/3 mt-0 relative"
                >
                    FC BUCOVINA
                </h1>
                <h2 className="text-5xl lg:text-7xl font-bold text-white lg:w-1/2 mb-5">
                    LOENHOUT
                </h2>
                <h2 className="text-[12px] lg:text-md text-center text-[#ffe87c] pt-2 lg:w-1/4 m-0">
                    "O ECHIPĂ UNITĂ PRIN ÎNCREDERE, CRESCUTĂ PRIN RESPECT, CONDUSĂ DE DORINȚA DE A ÎNVINGE.”
                </h2>
            </header>
            <footer className="mb-auto mt-8">
                <button
                    className="flex items-center gap-2 px-6 py-2 text-md font-bold bg-green-700 text-white rounded hover:bg-green-800 transition-colors"
                    onClick={handleCalendarClick}
                    aria-label="Vezi mai multe despre FC Bucovina"
                >
                    <Calendar className="w-4 h-4 text-white" />
                    Calendar
                </button>
            </footer>
        </section>
    );
}
