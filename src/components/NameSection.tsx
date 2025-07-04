export function NameSection({ scrollToNewsSeparator }: { scrollToNewsSeparator: () => void }) {
    return (
        <div className="flex flex-col h-screen px-4 text-center items-center justify-start gap-35">
            {/* Top content */}
            <div className="pt-20 flex flex-col items-center">
                <h1 className="text-5xl lg:text-8xl font-bold text-white leading-tight lg:w-2/3">
                    FC BUCOVINA LOENHOUT
                </h1>
                <h2 className="text-[12px] lg:text-md text-[#ffe87c] mt-3 lg:w-1/4">
                    "O ECHIPĂ UNITĂ PRIN ÎNCREDERE, CRESCUTĂ PRIN RESPECT, CONDUSĂ DE DORINȚA DE A ÎNVINGE.”
                </h2>
            </div>

            {/* Bottom button */}
            <div className="mb-6">
                <button
                    className="px-4 py-2 border border-green-700 text-white rounded-2xl hover:bg-green-700 transition-colors"
                    onClick={scrollToNewsSeparator}
                >
                    VEZI MAI MULTE
                </button>
            </div>
        </div>
    );
}
