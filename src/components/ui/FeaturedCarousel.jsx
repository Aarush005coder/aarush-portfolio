import { useState } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import FeaturedSlide from "./FeaturedSlide";

export default function FeaturedCarousel({ items }) {
  const [idx, setIdx] = useState(0);
  const [touchX, setTouchX] = useState(null);
  const n = items.length;

  const next = () => setIdx((i) => (i + 1) % n);
  const prev = () => setIdx((i) => (i - 1 + n) % n);

  return (
    <div className="carousel">
      <button className="car-btn car-btn--left" onClick={prev} aria-label="Previous project">
        <LuArrowLeft className="ic" />
      </button>

      <div
        className="car-view"
        onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX === null) return;
          const dx = e.changedTouches[0].clientX - touchX;
          if (dx < -50) next();
          else if (dx > 50) prev();
          setTouchX(null);
        }}
      >
        <div className="car-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
          {items.map((f, i) => (
            <div className="car-slide" key={f.label}>
              <FeaturedSlide project={f} index={i} />
            </div>
          ))}
        </div>
      </div>

      <button className="car-btn car-btn--right" onClick={next} aria-label="Next project">
        <LuArrowRight className="ic" />
      </button>

      <div className="car-dots">
        {items.map((f, i) => (
          <button
            key={f.label}
            className={`car-dot ${i === idx ? "is-active" : ""}`}
            onClick={() => setIdx(i)}
            aria-label={`Go to ${f.label}`}
          />
        ))}
        <span className="car-count">
          {String(idx + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}