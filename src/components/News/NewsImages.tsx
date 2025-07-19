interface NewsImagesProps {
    images: string[];
}

export default function NewsImages({ images }: NewsImagesProps) {
    if (images.length === 1) {
        return (
            <div className="w-full">
                <img src={images[0]} alt="News 1" className="w-full h-auto rounded" />
            </div>
        );
    }
    return (
        <div className="grid grid-cols-2 gap-4">
            {images.slice(0, 2).map((src, idx) => (
                <img key={idx} src={src} alt={`News ${idx + 1}`} className="w-full h-auto rounded" />
            ))}
        </div>
    );
}