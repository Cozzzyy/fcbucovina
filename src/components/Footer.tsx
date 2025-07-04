export function Footer() {
    return (
        <footer className="bg-green-700 text-gray-200 mt-10">
            <div className="flex flex-col justify-center items-center w-full">
                <div className="flex w-full flex-col lg:flex-col justify-center items-center">
                    <img className="w-30 h-auto" src="/teams/logo.png" alt="Logo" />
                    <h2 className="text-lg font-medium text-center">
                        Football Club Bucovina Vzw
                    </h2>
                </div>
                <a href="https://www.facebook.com/profile.php?id=100057387851433" target="_blank" rel="noopener noreferrer">
                    <img className="w-10 h-auto mt-2" src="/facebook.png" alt="Facebook Logo" />
                </a>

                <div className="flex flex-row justify-center items-center w-full mt-4 gap-10">
                    <h3 className="opacity-80 text-gray-300">BE79 7340 6867 8433</h3>
                    <h3 className="opacity-80 text-gray-300">bucovinafc@gmail.com</h3>
                </div>

                {/*Facebook*/}

                {/* Copyright Section */}
                <div className="mt-6 mb-4 font-light text-center text-gray-200">
                    <p>&copy; 2025 Cosmin Nechita. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}