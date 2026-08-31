"use client";

import { useState } from "react";
import { projects } from "../data/projects";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import AboutModal from "../components/AboutModal";
import Footer from "../components/Footer";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [aboutOpen, setAboutOpen] = useState(false);

  const openAbout = () => {
    setActiveIndex(null);
    setAboutOpen(true);
  };

  const openProject = (i) => {
    setAboutOpen(false);
    setActiveIndex(i);
  };

  return (
    <>
      <Nav active="films" onAboutClick={openAbout} />

      <div className="wrap">
        <Hero />

        <div className="featured">
          {projects.slice(0, 2).map((p, i) => (
            <ProjectCard key={i} project={p} onClick={() => openProject(i)} />
          ))}
        </div>

        <div className="section-label">SELECTED WORK</div>
        <div className="grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} onClick={() => openProject(i)} />
          ))}
        </div>

        <div className="info-strip">
          <div>
            <h4><span className="accent-bar"></span>Gear</h4>
            <p>
              Sony FX6 · Cooke Panchro primes · DJI RS3 Pro
              <br />
              Replace with your own camera &amp; lens kit.
            </p>
          </div>
          <div>
            <h4><span className="accent-bar"></span>Based in</h4>
            <p>
              Mumbai, India — available worldwide for shoots.
              <br />
              Update with your city and travel radius.
            </p>
          </div>
        </div>
      </div>

      <Footer />

      <ProjectModal
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        onClose={() => setActiveIndex(null)}
        onAboutClick={openAbout}
      />
      <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </>
  );
}
