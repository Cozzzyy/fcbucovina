import {Link} from "react-router-dom";

export function Footer() {
    return (
        <footer className="bg-green-800 text-gray-100 mt-25">
            <div className="flex flex-col justify-center items-center w-full text-center">
                <div className=" flex flex-col justify-start items-start w-full lg:w-1/2 mt-5">
                    <h2 className="text-4xl lg:text-6xl font-bold text-left px-4 lg:px-0 lg:text-center italic text-green-700">
                        Football Club Bucovina Vzw
                    </h2>
                    <div className={"flex md:flex-row flex-col justify-between px-4 lg:px-0  w-full items-start mt-4"}>
                        <div className="flex md:flex-row flex-col justify-between items-start mt-6 gap-15">
                            <div className="flex flex-col justify-center items-start gap-2">
                                <h2 className="text-md text-white font-bold italic mb-2">
                                    LINKS
                                </h2>
                                <h2 className="text-sm text-white">
                                    <Link to="/">ACASA</Link>
                                </h2>
                                <h2 className="text-sm text-white">
                                    <Link to="/stiri">STIRI</Link>
                                </h2>
                                <h2 className="text-sm text-white">
                                    <Link to="/meciuri">MECIURI</Link>
                                </h2>
                                <h2 className="text-sm text-white">
                                    <Link to="/club">CLUB</Link>
                                </h2>
                                <h2 className="text-sm text-white">
                                    <Link to="/clasament">CLASAMENT</Link>
                                </h2>
                            </div>
                            <div className="flex flex-col justify-center items-start gap-2">
                                <h2 className="text-md text-white font-bold italic mb-2">
                                    CONTACT
                                </h2>
                                <h2 className="text-sm text-white uppercase">
                                    bucovinafc@gmail.com
                                </h2>
                                <h2 className="text-sm text-white mb-1 mr-2">BE79 7340 6867 8433</h2>
                                <a href="https://www.facebook.com/profile.php?id=100057387851433" target="_blank" rel="noopener noreferrer">
                                    <img className={"w-8 h-auto"} src="/icons8-facebook-50.png" alt={"Facebook"} />
                                </a>
                            </div>
                        </div>
                        <img className={"w-30 lg:w-45 lg:mt-0 mt-8 h-auto mr-10"} src="/teams/FC%20Bucovina%20Loenhout.png"
                             alt="FC Bucovina Logo"/>
                    </div>
                </div>
                <div className="mt-15 mb-4 font-light">
                    <p>&copy; 2025 Cosmin Nechita. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}