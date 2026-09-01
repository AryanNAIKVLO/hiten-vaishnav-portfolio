import { getYouTubeThumbnail } from "../lib/youtube";

export default function ProjectCard({ project, onClick, size = "default" }) {
  const isSmall = size === "small";
  const thumbnailSrc = project.thumbnail || getYouTubeThumbnail(project.embedUrl);
  const hasThumb = Boolean(thumbnailSrc);

  return (
    <div className="thumb" onClick={onClick}>
      <div className={`thumb-media ${hasThumb ? "" : project.ph} ${isSmall ? "small" : ""}`}>
        {hasThumb && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={thumbnailSrc} alt={project.title} className="thumb-img" />
        )}
        <div className={`play ${isSmall ? "small" : ""}`}></div>
        {!isSmall && !hasThumb && (
          <div className="swap-note">// replace with your footage</div>
        )}
      </div>
      <div className={`thumb-caption ${isSmall ? "small" : ""}`}>
        {project.title} {project.tag}
      </div>
    </div>
  );
}