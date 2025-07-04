export function NameSection({ scrollToNewsSeparator }: { scrollToNewsSeparator: () => void }) {
    return (
        <div
            className="flex flex-col h-screen justify-start items-center px-4 text-center gap-30 z-8 overflow-hidden"
            style={{ boxSizing: "border-box" }}
        >
            <div className="pt-12 flex flex-col justify-center items-center w-full">
                <h1 className="text-5xl lg:text-8xl font-bold text-center text-white leading-tight lg:w-2/3 mt-0">
                    FC BUCOVINA LOENHOUT
                </h1>
                <h2 className="text-[12px] lg:text-md text-center text-[#ffe87c] pt-2 lg:w-1/4 m-0">
                    "O ECHIPĂ UNITĂ PRIN ÎNCREDERE, CRESCUTĂ PRIN RESPECT, CONDUSĂ DE DORINȚA DE A ÎNVINGE.”
                </h2>
            </div>
            <div>
                <button
                    className="px-3 py-2 text-sm border-2 font-bold border-green-700 text-white rounded-2xl hover:bg-green-700 transition-colors"
                    onClick={scrollToNewsSeparator}
                >
                    VEZI MAI MULTE
                </button>
            </div>
        </div>
    );
}
