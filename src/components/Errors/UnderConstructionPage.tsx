import { useTranslation } from "react-i18next";

export function UnderConstructionPage() {
    const { t } = useTranslation();
    
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="text-center px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t('underConstruction.title')}</h1>
                <p className="text-base sm:text-lg text-gray-600 mb-6">{t('underConstruction.message')}</p>
                <img
                    className="mx-auto w-1/2 max-w-xs rounded-lg"
                    src="/under-construction.webp"
                    alt="Under Construction"
                    loading="lazy"
                />
            </div>
        </div>
    );
}