export function Footer() {
    return (
        <footer className="bg-[#034d03] text-gray-200 mt-10">
            <div className="flex flex-col justify-center items-center w-full">
                <div className="flex w-full flex-col lg:flex-col justify-center items-center">
                    <img className="w-30 h-auto" src="/teams/logo.png" alt="Logo" />
                    <h2 className="text-lg font-medium text-center">
                        Football Club Bucovina Vzw
                    </h2>
                </div>
                <div className="flex flex-row justify-center items-center w-full mt-4 gap-10">
                    <h3 className="opacity-80 text-gray-300">BE79 7340 6867 8433</h3>
                    <h3 className="opacity-80 text-gray-300">bucovinafc@gmail.com</h3>
                </div>

                {/* Copyright Section */}
                <div className="mt-6 mb-4 font-light text-center text-gray-400">
                    <p>&copy; 2025 Cosmin Nechita. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}