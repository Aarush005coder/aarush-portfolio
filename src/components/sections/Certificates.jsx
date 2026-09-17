import { useState, useEffect } from "react";
import { PORTFOLIO } from "../../data/portfolio";
import { LuX, LuArrowLeft, LuArrowRight } from "react-icons/lu";
import Eyebrow from "../ui/Eyebrow";
import CertificateCard from "../ui/CertificateCard";
import CertImage from "../ui/CertImage";

const PER_PAGE = 8; // 4 upar + 4 neeche

export default function Certificates() {
  const certs = PORTFOLIO.certificates || [];
  const [active, setActive] = useState(null);
  const [page, setPage] = useState(0);
  const [touchX, setTouchX] = useState(null);

  // certificates ko 8-8 ke pages me baanto
  const pages = [];
  for (let i = 0; i < certs.length; i += PER_PAGE) pages.push(certs.slice(i, i + PER_PAGE));

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!certs.length) return null;

  const next = () => setPage((p) => Math.min(p + 1, pages.length - 1));
  const prev = () => setPage((p) => Math.max(p - 1, 0));

  return (
    <section className="sec" id="certificates">
      <div className="wrap">
        <div className="work-head">
          <div>
            <Eyebrow num="06" label="Certifications" />
            <h2 className="h-serif h2">Certificates & credentials.</h2>
          </div>
          <span className="cert-count">{certs.length} credentials</span>
        </div>

        <div className="cert-carousel">
          {page > 0 && (
            <button className="car-btn car-btn--left" onClick={prev} aria-label="Previous certificates">
              <LuArrowLeft className="ic" />
            </button>
          )}

          <div
            className="cert-view"
            onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX === null) return;
              const dx = e.changedTouches[0].clientX - touchX;
              if (dx < -50) next();
              else if (dx > 50) prev();
              setTouchX(null);
            }}
          >
            <div className="cert-track" style={{ transform: `translateX(-${page * 100}%)` }}>
              {pages.map((group, gi) => (
                <div className="cert-page" key={gi}>
                  <div className="cert-grid">
                    {group.map((c) => (
                      <CertificateCard key={c.name} cert={c} onOpen={setActive} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {page < pages.length - 1 && (
            <button className="car-btn car-btn--right" onClick={next} aria-label="More certificates">
              <LuArrowRight className="ic" />
            </button>
          )}

          {pages.length > 1 && (
            <div className="car-dots">
              {pages.map((_, i) => (
                <button
                  key={i}
                  className={`car-dot ${i === page ? "is-active" : ""}`}
                  onClick={() => setPage(i)}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
              <span className="car-count">
                {String(page + 1).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox — full-size certificate */}
      {active && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <div className="lightbox-in" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close">
              <LuX className="ic" />
            </button>
            <CertImage
              image={active.image}
              alt={active.name}
              fallback={<div className="lightbox-ph">Certificate image coming soon…</div>}
            />
            <div className="lightbox-cap">
              <b>{active.name}</b>
              <span>{active.issuer}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}