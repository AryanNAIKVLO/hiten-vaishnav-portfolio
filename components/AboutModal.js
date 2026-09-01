import Link from "next/link";

// ---- Edit these with your real info ----
const ABOUT_PHOTO = "/about/Me.JPG";
const PERSONAL_PHONE = "+919579815049";     // include country code, no spaces/dashes
const YOUTUBE_URL = "https://youtube.com/@hitenvaishnavyoutube?";
const INSTAGRAM_HANDLE = "@hhitenvaishnavv";
const INSTAGRAM_URL = "https://www.instagram.com/hhitenvaishnavv?";
const EMAIL = "vaishnav.hiten15@gmail.com";
// -----------------------------------------

export default function AboutModal({ open, onClose }) {
  if (!open) return null;
  const hasPhoto = Boolean(ABOUT_PHOTO);

  return (
    <div className="modal-overlay open">
      <div className="modal-panel">
        <div className="modal-close" onClick={onClose}>✕</div>

        <div className="modal-nav">
          <div className="nav-logo" style={{ fontSize: 14 }}>VAISHNAV</div>
          <div className="nav-links">
            <Link href="/">FILMS</Link>
            <Link href="/photography">PHOTOGRAPHY</Link>
            <span className="active">[ABOUT]</span>
          </div>
        </div>

        <div className={`modal-hero ${hasPhoto ? "" : "ph-1"}`}>
          {hasPhoto && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={ABOUT_PHOTO} alt="Hiten Vaishnav" className="modal-img" />
          )}
        </div>

        <div className="modal-body">
          <div className="about-grid">
            <div>
              <h5>BIOGRAPHY</h5>
              <p>
                Hiten Vaishnav is a director of photography drawn to quiet,
                observational imagery — light that feels found rather than
                lit. He approaches every project, from a two-minute music
                video to a feature documentary, with the same question:
                what does this story look like when nobody is performing
                for the camera.
              </p>
              <p>
                Replace this paragraph with your own background,
                influences, and the kind of work you want to be hired for.
              </p>
            </div>
            <div>
              <h5>CLIENTS &amp; RECOGNITION</h5>
              <p>
                List the brands, artists, or productions you&apos;ve shot
                for here, plus any festival selections or awards.
              </p>
              <div className="contact-row">
                <span>PERSONAL CONTACT</span>
                <a href={`tel:${PERSONAL_PHONE}`}>{PERSONAL_PHONE}</a>
              </div>
              <div className="contact-row">
                <span>YOUTUBE</span>
                <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
                  Watch
                </a>
              </div>
              <div className="contact-row">
                <span>INSTAGRAM</span>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  {INSTAGRAM_HANDLE}
                </a>
              </div>
              <div className="contact-row">
                <span>EMAIL</span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}