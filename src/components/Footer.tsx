export function Footer() {
    return (
        <footer className="bg-[#045804] text-white mt-20">
            <div className=" flex flex-col justify-center items-center w-full">
                <div className="flex w-full flex-col lg:flex-col justify-center items-center">
                    <img className={"w-35 h-auto"} src="/logo.png" alt="Logo" />
                    <h2 className="text-lg font-light text-center">
                        Football Club Bucovina Vzw
                    </h2>
                </div>
                <div className={"flex flex-row justify-center items-center w-full mt-4 gap-10"}>
                    <h3 className={"opacity-50"}>BE79 7340 6867 8433</h3>
                    <h3 className={"opacity-50"}>bucovinafc@gmail.com</h3>
                </div>

                {/* Copyright Section */}
                <div className="mt-6 mb-4 font-light text-center opacity-50">
                    <p>&copy; 2025 Cosmin Nechita. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}