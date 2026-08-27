"use client";

import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectModal({ activeIndex, setActiveIndex, onClose, onAboutClick }) {
  if (activeIndex === null) return null;
  const project = projects[activeIndex];

  const stills = Array.from({ length: 6 }).map(
    (_, i) => projects[(activeIndex + i) % projects.length].ph
  );

  const others = projects
    .map((p, i) => ({ ...p, i }))
    .filter((p) => p.i !== activeIndex)
    .slice(0, 3);

  return (
    <div className="modal-overlay open">
      <div className="modal-panel">
        <div className="modal-close" onClick={onClose}>✕</div>

        <div className="modal-nav">
          <div className="nav-logo" style={{ fontSize: 14 }}>VAISHNAV</div>
          <div className="nav-links">
            <span className="active">[WORK]</span>
            <button onClick={onAboutClick}>ABOUT</button>
          </div>
        </div>

        <div className={`modal-hero ${project.ph}`}>
          <div className="play large"></div>
        </div>

        <div className="modal-body">
          <div className="modal-title">{project.title} {project.tag}</div>
          <div className="modal-quote">{project.quote}</div>

          <div className="credits-title">CREDITS</div>
          <div className="credits-grid">
            {Object.entries(project.credits).map(([role, name]) => (
              <div key={role} style={{ display: "contents" }}>
                <div className="role">{role}</div>
                <div className="name">{name}</div>
              </div>
            ))}
          </div>

          <div className="stills-grid">
            {stills.map((ph, i) => (
              <div key={i} className={`still ${ph}`}></div>
            ))}
          </div>

          <div className="other-projects">
            <div className="credits-title">OTHER PROJECTS</div>
            <div className="grid3">
              {others.map((p) => (
                <ProjectCard
                  key={p.i}
                  project={p}
                  size="small"
                  onClick={() => setActiveIndex(p.i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
