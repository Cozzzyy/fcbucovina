import { useTranslation } from "react-i18next";

export function TitleSection() {
    const { t } = useTranslation();
    
    return (
        <div className="w-full text-left px-4 max-w-6xl mx-auto mt-20 lg:mt-32">
            <h2 className="text-5xl lg:text-7xl text-green-700 font-bold italic mb-1">
                {t('games.gamesTitle')}
            </h2>
            <h2 className="text-3xl lg:text-5xl text-green-700 lg:mb-12">
                {t('games.gamesSeason')}
            </h2>
        </div>
    )
}