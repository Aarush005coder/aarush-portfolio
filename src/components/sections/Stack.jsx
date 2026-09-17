import { PORTFOLIO } from "../../data/portfolio";
import Eyebrow from "../ui/Eyebrow";
import SkillGroup from "../ui/SkillGroup";

export default function Stack() {
  return (
    <section className="sec" id="stack">
      <div className="wrap">
        <div className="sec-head">
          <Eyebrow num="04" label="Technical Depth" />
          <h2 className="h-serif h2">Built Across the Stack</h2>
          <p className="muted">{PORTFOLIO.stackIntro}</p>
        </div>
        <div className="skill-grid">
          {PORTFOLIO.skills.map((s) => <SkillGroup key={s.title} skill={s} />)}
        </div>
      </div>
    </section>
  );
}