import Link from "next/link";

export default function Nav({ active, onAboutClick, compact = false }) {
  return (
    <nav className="nav">
      <div className="nav-logo" style={compact ? { fontSize: 14 } : undefined}>
        VAISHNAV
      </div>
      <div className="nav-links">
        <Link href="/" className={active === "films" ? "active" : ""}>
          FILMS
        </Link>
        <Link href="/photography" className={active === "photography" ? "active" : ""}>
          PHOTOGRAPHY
        </Link>
        <button onClick={onAboutClick} className={active === "about" ? "active" : ""}>
          ABOUT
        </button>
      </div>
    </nav>
  );
}
