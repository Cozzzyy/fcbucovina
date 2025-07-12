export function NameSection({ scrollToNewsSeparator }: { scrollToNewsSeparator: () => void }) {
    return (
        <section
            className="relative flex flex-col h-screen justify-start items-center px-4 text-center overflow-hidden pb-55 gap-5 pt-15"
            style={{ boxSizing: "border-box" }}
        >
            <header className="pt-12 flex flex-col justify-center items-center w-full mt-auto">
                <h1 className="text-5xl lg:text-8xl font-bold text-center text-white leading-tight lg:w-2/3 mt-0">
                    FC BUCOVINA LOENHOUT
                </h1>
                <h2 className="text-[12px] lg:text-md text-center text-[#ffe87c] pt-2 lg:w-1/4 m-0">
                    "O ECHIPĂ UNITĂ PRIN ÎNCREDERE, CRESCUTĂ PRIN RESPECT, CONDUSĂ DE DORINȚA DE A ÎNVINGE.”
                </h2>
            </header>
            <footer className="mt-8 flex flex-col items-center gap-4 mb-35">
                <button
                    className="px-5 py-3 lg:px-3 lg:py-2 text-md lg:text-sm border-2 font-medium border-green-700 text-white rounded-lg hover:bg-green-700 transition-colors"
                    onClick={scrollToNewsSeparator}
                    aria-label="Vezi mai multe despre FC Bucovina"
                >
                    VEZI MAI MULTE
                </button>
            </footer>
            <div className="absolute bottom-4 flex flex-col items-center">
                <p className="text-white text-sm font-bold mb-2">Urmărește-ne pe social media</p>
                <a href="https://www.facebook.com/profile.php?id=100057387851433" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <img
                        src="/facebook.png"
                        alt="Facebook"
                        className="w-10 h-10"
                    />
                </a>
            </div>
        </section>
    );
}