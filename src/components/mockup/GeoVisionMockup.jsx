import { LuMapPin, LuArrowRight, LuCamera, LuCpu } from "react-icons/lu";

function Photo() {
  return (
    <svg viewBox="0 0 120 80">
      <defs>
        <linearGradient id="gsky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f3d9b0" />
          <stop offset="1" stopColor="#e8e4d8" />
        </linearGradient>
      </defs>
      <rect width="120" height="80" fill="url(#gsky)" />
      <circle cx="88" cy="20" r="8" fill="#e9c46a" />
      <polygon points="0,80 30,42 55,68 78,46 120,80" fill="#8a6f4d" />
      <polygon points="45,80 75,52 120,80" fill="#6b543a" />
    </svg>
  );
}

function MapPane() {
  return (
    <svg viewBox="0 0 120 80">
      <rect width="120" height="80" fill="#e8ece3" />
      <path d="M0 20 H120 M0 45 H120 M0 65 H120" stroke="#d5d8cc" strokeWidth="1" />
      <path d="M30 0 V80 M65 0 V80 M95 0 V80" stroke="#d5d8cc" strokeWidth="1" />
      <path d="M10 70 C 40 50, 60 55, 84 30" stroke="#9aa08f" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
      <circle cx="84" cy="30" r="4" fill="#b8d374" stroke="#182230" strokeWidth="1.2" />
    </svg>
  );
}

export default function GeoVisionMockup({ mockup }) {
  return (
    <div className="mock-wrap">
      <div className="mock-card">
        <div className="mock-head">
          <span className="mock-logo"><LuMapPin className="ic ic-sm" /></span>
          <div>
            <b>{mockup.appName}</b>
            <small>{mockup.appTag}</small>
          </div>
        </div>

        <div className="g-body">
          <div className="g-pane">
            <span className="g-cap"><LuCamera className="ic ic-xs" /> input image</span>
            <span className="g-img"><Photo /></span>
          </div>
          <div className="g-arrow"><LuArrowRight className="ic" /></div>
          <div className="g-pane">
            <span className="g-cap"><LuMapPin className="ic ic-xs" /> predicted location</span>
            <span className="g-img"><MapPane /></span>
          </div>
        </div>

        <div className="g-coords">
          <span>26.2389° N</span>
          <span className="g-sep">·</span>
          <span>73.0243° E</span>
          <span className="pill pill--green">≈ Jodhpur, IN</span>
        </div>

        <div className="q-tools">
          <span className="chip chip--sm">128×128</span>
          <span className="chip chip--sm"><LuCpu className="ic ic-xs" /> AlexNet-style CNN</span>
          <span className="chip chip--sm">sigmoid → (lat, lon)</span>
        </div>
      </div>
    </div>
  );
}