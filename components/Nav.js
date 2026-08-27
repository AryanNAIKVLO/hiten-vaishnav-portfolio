export default function Nav({ onAboutClick }) {
  return (
    <nav className="nav">
      <div className="nav-logo">VAISHNAV</div>
      <div className="nav-links">
        <a href="#work" className="active">WORK</a>
        <button onClick={onAboutClick}>ABOUT</button>
        <span className="hide-mobile">PHOTOGRAPHY</span>
      </div>
    </nav>
  );
}
