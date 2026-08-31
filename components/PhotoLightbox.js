"use client";

export default function PhotoLightbox({ photos, activeIndex, setActiveIndex, onClose }) {
  if (activeIndex === null) return null;
  const photo = photos[activeIndex];
  const hasImg = Boolean(photo.src);

  const goPrev = () => setActiveIndex((activeIndex - 1 + photos.length) % photos.length);
  const goNext = () => setActiveIndex((activeIndex + 1) % photos.length);

  return (
    <div className="modal-overlay open">
      <div className="lightbox-panel">
        <div className="modal-close" onClick={onClose}>✕</div>
        <div className="lightbox-nav-btn prev" onClick={goPrev}>‹</div>
        <div className="lightbox-nav-btn next" onClick={goNext}>›</div>

        <div className="lightbox-stage">
          {hasImg ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photo.src} alt={photo.caption} />
          ) : (
            <div className={`lightbox-ph ${photo.ph}`}></div>
          )}
        </div>

        <div className="lightbox-caption">
          {photo.caption} <span className="lightbox-cat">— {photo.category}</span>
        </div>
      </div>
    </div>
  );
}
