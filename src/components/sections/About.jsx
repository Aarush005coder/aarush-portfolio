import { PORTFOLIO } from "../../data/portfolio";
import Eyebrow from "../ui/Eyebrow";

export default function About() {
  const { about } = PORTFOLIO;
  return (
    <section className="sec" id="about">
      <div className="wrap about-grid">
        <div>
          <Eyebrow num="07" label="About" />
          <h2 className="h-serif h2">{about.heading}</h2>
        </div>
        <div>
          {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <div className="facts">
            {about.facts.map((f) => (
              <div key={f.k}><b>{f.k}</b><span>{f.v}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}