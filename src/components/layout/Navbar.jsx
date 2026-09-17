import { useEffect, useState } from "react";
import { PORTFOLIO } from "../../data/portfolio";
import { LuSun, LuMoon } from "react-icons/lu";
import Button from "../ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  // theme apply + save
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap nav-in">
        <a className="brand" href="#top">{PORTFOLIO.profile.name}</a>
        <nav className="links">
          {PORTFOLIO.nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
        </nav>
        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle dark / light mode"
          >
            {theme === "dark" ? <LuSun className="ic" /> : <LuMoon className="ic" />}
          </button>
          <Button href={PORTFOLIO.links.resume} variant="ghost" small>Resume</Button>
        </div>
      </div>
    </header>
  );
}