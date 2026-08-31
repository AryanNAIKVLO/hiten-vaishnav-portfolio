import Link from "next/link";

export default function AboutModal({ open, onClose }) {
  if (!open) return null;

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

        <div className="modal-hero ph-1"></div>

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
              <div className="contact-row"><span>PERSONAL CONTACT</span><span>HITEN VAISHNAV</span></div>
              <div className="contact-row"><span>VIMEO</span><span>@hitenvaishnav</span></div>
              <div className="contact-row"><span>INSTAGRAM</span><span>@hitenvaishnav</span></div>
              <div className="contact-row"><span>EMAIL</span><span>hello@hitenvaishnav.com</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
