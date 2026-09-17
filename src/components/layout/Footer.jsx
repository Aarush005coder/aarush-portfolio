import { PORTFOLIO } from "../../data/portfolio";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <span>© {new Date().getFullYear()} {PORTFOLIO.profile.name}</span>
        <span>Built with curiosity, engineered with purpose.</span>
      </div>
    </footer>
  );
}