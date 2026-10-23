// ---- Edit this to change the hero photo ----
const HERO_PHOTO = "/about/Me.JPG";
// --------------------------------------------

export default function Hero() {
  return (
    <section className="hero" id="work">
      <div className="hero-grid">
        <div className="hero-text">
          <div className="tags">
            <span className="tag">cinematography</span>
            <span className="tag">portfolio</span>
            <span className="tag date">2026</span>
          </div>

          <div className="hero-title-row">
            <div className="rec-dot"></div>
            <div className="rec-label">REC — SHOWREEL</div>
          </div>
          <div className="hero-eyebrow">VAISHNAV</div>
          <div className="wordmark">HITEN</div>
          <p className="hero-sub">
            Director of Photography working across short film, music video,
            documentary and commercial work. Inspired by contemporary cinema,
            music, and the visual language of everyday life, i am drawn to
            stories with character, emotion, and a strong point of view ,
            collaborating with filmmakers and creative teams to build images
            that feel distinctive, human, and unforgettable.
          </p>
        </div>

        {HERO_PHOTO && (
          <div className="hero-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HERO_PHOTO} alt="Hiten Vaishnav" />
          </div>
        )}
      </div>
    </section>
  );
}