import { useTranslation } from "react-i18next";

export function TitleSection() {
    const { t } = useTranslation();
    
    return (
        <h1 className={"text-7xl text-transparent bg-transparent mt-35 w-11/12 md:w-2/3 italic "}
            style={{
                WebkitTextStroke: '2px green',
            }}>
            {t('games.gamesTitle')}
        </h1>
    )
}