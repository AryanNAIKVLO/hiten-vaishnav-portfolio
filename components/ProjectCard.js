export default function ProjectCard({ project, onClick, size = "default" }) {
  const isSmall = size === "small";
  return (
    <div className="thumb" onClick={onClick}>
      <div className={`thumb-media ${project.ph} ${isSmall ? "small" : ""}`}>
        <div className={`play ${isSmall ? "small" : ""}`}></div>
        {!isSmall && <div className="swap-note">// replace with your footage</div>}
      </div>
      <div className={`thumb-caption ${isSmall ? "small" : ""}`}>
        {project.title} {project.tag}
      </div>
    </div>
  );
}
