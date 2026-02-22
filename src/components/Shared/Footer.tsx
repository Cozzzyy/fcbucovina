import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-[#018749] text-gray-100 mt-auto">
            <div className="flex flex-col justify-center items-center w-full text-center">
                <div className=" flex flex-col justify-start items-start w-full lg:w-1/2 mt-5">
                    <h2 className="text-4xl lg:text-6xl font-bold text-left px-4 lg:px-0 lg:text-center italic ">
                        {t('footer.clubName')}
                    </h2>
                    <div className={"flex md:flex-row flex-col justify-between px-4 lg:px-0  w-full items-start mt-4"}>
                        <div className="flex md:flex-row flex-col justify-between items-start mt-6 gap-15">
                            <div className="flex flex-col justify-center items-start gap-2">
                                <h3 className="text-md text-white font-bold italic mb-2">
                                    {t('footer.links')}
                                </h3>
                                <p className="text-sm text-white">
                                    <Link to="/">{t('footer.home')}</Link>
                                </p>
                                <p className="text-sm text-white">
                                    <Link to="/stiri">{t('footer.news')}</Link>
                                </p>
                                <p className="text-sm text-white">
                                    <Link to="/meciuri">{t('footer.games')}</Link>
                                </p>
                                <p className="text-sm text-white">
                                    <Link to="/club">{t('footer.club')}</Link>
                                </p>
                                <p className="text-sm text-white">
                                    <Link to="/clasament">{t('footer.standings')}</Link>
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-start gap-2">
                                <h3 className="text-md text-white font-bold italic mb-2">
                                    {t('footer.contact')}
                                </h3>
                                <p className="text-sm text-white uppercase">
                                    bucovinafc@gmail.com
                                </p>
                                <p className="text-sm text-white mb-1 mr-2">BE79 7340 6867 8433</p>
                                <a href="https://www.facebook.com/profile.php?id=100057387851433" target="_blank" rel="noopener noreferrer">
                                    <img className={"w-8 h-auto"} src="/icons8-facebook-50.png" alt={"Facebook"} />
                                </a>
                            </div>
                        </div>
                        <img className={"w-30 lg:w-45 lg:mt-0 mt-8 h-auto mr-10"} src="/teams/FC%20Bucovina%20Loenhout.png"
                            alt="FC Bucovina Logo" />
                    </div>
                </div>
                <div className="mt-8 mb-4 font-light">
                    <p>{t('footer.copyright')}</p>
                </div>

            </div>
        </footer>
    );
}