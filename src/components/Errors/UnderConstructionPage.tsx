export function UnderConstructionPage() {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Pagina în construcție</h1>
                <p className="text-lg text-gray-600 mb-6">Această pagină este în curs de dezvoltare. Vă mulțumim pentru răbdare!</p>
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