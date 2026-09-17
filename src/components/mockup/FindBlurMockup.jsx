import { LuUpload, LuScan } from "react-icons/lu";

function Mountain() {
  return (
    <svg viewBox="0 0 120 80">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bcd3e6" />
          <stop offset="1" stopColor="#e8e4d8" />
        </linearGradient>
      </defs>
      <rect width="120" height="80" fill="url(#sky)" />
      <polygon points="0,80 35,30 60,62 80,38 120,80" fill="#5d6d5e" />
      <polygon points="30,38 35,30 42,40 36,42" fill="#f4f4f0" />
      <polygon points="60,80 85,45 120,80" fill="#42503f" />
    </svg>
  );
}

export default function FindBlurMockup({ mockup }) {
  return (
    <div className="mock-wrap">
      <div className="mock-card">
        <div className="mock-head">
          <span className="mock-logo"><LuScan className="ic ic-sm" /></span>
          <div>
            <b>{mockup.appName}</b>
            <small>{mockup.appTag}</small>
          </div>
        </div>
        <div className="mock-body">
          <div className="dropzone">
            <LuUpload className="ic" />
            <p>Drop an image here<br /><small>or click to upload</small></p>
          </div>
          <div className="result">
            <span className="result-img"><Mountain /></span>
            <span className="row">
              <span className="pill pill--green">Sharp</span>
              <span className="q">?</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}