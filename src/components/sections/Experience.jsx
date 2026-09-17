import { useState, useEffect } from "react";
import { PORTFOLIO } from "../../data/portfolio";
import { LuX } from "react-icons/lu";
import Eyebrow from "../ui/Eyebrow";
import ExperienceRow from "../ui/ExperienceRow";
import CertImage from "../ui/CertImage";

export default function Experience() {
  const xps = PORTFOLIO.experience || [];
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!xps.length) return null;

  return (
    <section className="sec" id="experience">
      <div className="wrap">
        <Eyebrow num="05" label="Experience" />
        <h2 className="h-serif h2">Where I've worked.</h2>
        {xps.map((x) => <ExperienceRow key={x.role} xp={x} onOpenCert={setActive} />)}
      </div>

      {/* Certificate lightbox */}
      {active && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <div className="lightbox-in" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close">
              <LuX className="ic" />
            </button>
            <CertImage
              image={active.certImage}
              alt={`${active.role} — ${active.company} certificate`}
              fallback={<div className="lightbox-ph">Certificate image coming soon…</div>}
            />
            <div className="lightbox-cap">
              <b>{active.role} · {active.company}</b>
              <span>{active.certLabel || "Internship Certificate"} · {active.period}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}