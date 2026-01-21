import GalleryGrid from '../components/GalleryGrid';
import img1 from '../assets/gallery-1.png';
import img2 from '../assets/gallery-2.png';
import img3 from '../assets/gallery-3.png';

const galleryItems = [
    { src: img1, alt: "Neon Tunnel FPV" },
    { src: img2, alt: "Mountain Sunrise" },
    { src: img3, alt: "City Night Skyline" },
    { src: img1, alt: "Neon Tunnel Remix" }, // Repetitive for grid demo
    { src: img3, alt: "City Lights" },
    { src: img2, alt: "Golden Peaks" },
];

function Gallery() {
    return (
        <div className="page-content container">
            <h1 className="page-title">Visual Portfolio</h1>
            <GalleryGrid items={galleryItems} />
        </div>
    );
}

export default Gallery;
