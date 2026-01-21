import { useState } from 'react';
import './GalleryGrid.css';

function GalleryGrid({ items }) {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <div className="gallery-grid">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="gallery-item"
                        onClick={() => setSelectedImage(item)}
                    >
                        <img src={item.src} alt={item.alt || `Gallery Image ${index + 1}`} />
                        <div className="gallery-overlay">
                            <span>View Fullscreen</span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="lightbox" onClick={() => setSelectedImage(null)}>
                    <button className="lightbox-close">&times;</button>
                    <img src={selectedImage.src} alt={selectedImage.alt} />
                </div>
            )}
        </>
    );
}

export default GalleryGrid;
