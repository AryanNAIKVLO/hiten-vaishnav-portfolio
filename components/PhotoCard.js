export default function PhotoCard({ photo, onClick }) {
  const hasImg = Boolean(photo.src);
  return (
    <div className="photo-card" onClick={onClick}>
      <div className={`photo-media ${hasImg ? "" : photo.ph}`}>
        {hasImg && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photo.src} alt={photo.caption} className="thumb-img" />
        )}
      </div>
      <div className="photo-caption">
        <span>{photo.caption}</span>
        <span className="cat">{photo.category}</span>
      </div>
    </div>
  );
}
