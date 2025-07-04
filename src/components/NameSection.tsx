export function NameSection({ scrollToNewsSeparator }: { scrollToNewsSeparator: () => void }) {
    return (
        <div className="flex w-full mt-12 justify-center items-center flex-col">
            <h1 className="text-5xl text-center lg:w-1/2 lg:text-8xl font-bold text-white leading-tight">
                FC BUCOVINA LOENHOUT
            </h1>
            <h2 className="text-[12px] text-center w-full lg:w-1/4 lg:text-md text-[#ffe87c] mt-3">
                "O ECHIPĂ UNITĂ PRIN ÎNCREDERE, CRESCUTĂ PRIN RESPECT, CONDUSĂ DE DORINȚA DE A ÎNVINGE.”
            </h2>

            <button
                className="mt-85 lg:mt-65 px-4 py-2 border-green-700 border-1 text-white rounded-2xl hover:bg-green-700 transition-colors"
                onClick={scrollToNewsSeparator}
            >
                VEZI MAI MULTE
            </button>
        </div>
    );
}