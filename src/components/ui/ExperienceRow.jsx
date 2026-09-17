import { LuAward } from "react-icons/lu";
import Chip from "./Chip";

export default function ExperienceRow({ xp, onOpenCert }) {
  return (
    <div className="xp">
      <span className="period">{xp.period}</span>
      <div>
        <h4>{xp.role}</h4>
        <div className="co">{xp.company}</div>
        <p>{xp.description}</p>
        <div className="tags">
          {xp.tags.map((t) => <Chip key={t} small>{t}</Chip>)}
          {xp.certImage && (
            <button className="chip chip--sm chip--btn" onClick={() => onOpenCert(xp)}>
              <LuAward className="ic ic-xs" /> {xp.certLabel || "Certificate"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}