"use client";

import { useState } from "react";
import { photos } from "../../data/photos";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import AboutModal from "../../components/AboutModal";
import PhotoCard from "../../components/PhotoCard";
import PhotoLightbox from "../../components/PhotoLightbox";

export default function PhotographyPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <Nav active="photography" onAboutClick={() => setAboutOpen(true)} />

      <div className="wrap">
        <section className="hero" style={{ paddingBottom: 24 }}>
          <div className="hero-eyebrow">SELECTED</div>
          <div className="wordmark" style={{ fontSize: "clamp(48px, 9vw, 120px)" }}>
            PHOTOGRAPHY
          </div>
          <p className="hero-sub">
            Stills shot on set and between productions. Replace these
            placeholders with your own photography.
          </p>
        </section>

        <div className="photo-grid">
          {photos.map((p, i) => (
            <PhotoCard key={i} photo={p} onClick={() => setActiveIndex(i)} />
          ))}
        </div>
      </div>

      <Footer />

      <PhotoLightbox
        photos={photos}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        onClose={() => setActiveIndex(null)}
      />
      <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </>
  );
}
