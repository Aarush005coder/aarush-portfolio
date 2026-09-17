import { useState } from "react";
import Icon from "./Icon";

function LogoImg({ sources, name, tint }) {
  const [i, setI] = useState(0);
  if (!sources.length || i >= sources.length) return null;

  if (tint) {
    return (
      <span
        className="chip-logo-tint"
        style={{
          backgroundColor: tint,
          WebkitMaskImage: `url(${sources[i]})`,
          maskImage: `url(${sources[i]})`,
        }}
        role="img"
        aria-label={`${name} logo`}
      />
    );
  }

  return (
    <img
      src={sources[i]}
      alt={`${name} logo`}
      loading="lazy"
      onError={() => setI(i + 1)}
    />
  );
}

export default function SkillGroup({ skill }) {
  return (
    <div className="skill-card">
      <div className="skill-card-head">
        <span className="skill-card-icon"><Icon name={skill.icon} /></span>
        <b>{skill.title}</b>
      </div>
      <div className="skill-chips">
        {skill.items.map((it) => {
          // 1. Plain text (fallback)
          if (typeof it === "string") {
            return <span key={it} className="skill-chip">{it}</span>;
          }

          // 2. Conceptual Icons (DSA, OOP, Soft Skills)
          if (it.icon) {
            return (
              <span key={it.name} className="skill-chip">
                <span className="chip-concept-icon" style={{ color: it.color }}>
                  <Icon name={it.icon} className="chip-icon-svg" />
                </span>
                {it.name}
              </span>
            );
          }

          // 3. Brand Logos (React, Python, etc.)
          return (
            <span key={it.name} className="skill-chip">
              <LogoImg
                sources={it.logos || (it.logo ? [it.logo] : [])}
                name={it.name}
                tint={it.tint}
              />
              {it.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}