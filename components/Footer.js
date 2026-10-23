// ---- Edit these with your real info ----
const EMAIL = "vaishnav.hiten15@gmail.com";
const YOUTUBE_URL = "https://youtube.com/@hitenvaishnavyoutube?";
const INSTAGRAM_URL = "https://www.instagram.com/hhitenvaishnavv?";
// -----------------------------------------

export default function Footer() {
  return (
    <footer>
      <div className="f-logo">HITEN</div>
      <div className="f-credit">CINEMATOGRAPHY PORTFOLIO — HITEN VAISHNAV</div>
      <div className="socials">
        <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">YOUTUBE</a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
        <a href={`mailto:${EMAIL}`}>EMAIL</a>
      </div>
    </footer>
  );
}