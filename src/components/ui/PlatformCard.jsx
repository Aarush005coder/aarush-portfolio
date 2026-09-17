import { LuArrowUpRight } from "react-icons/lu";

export default function PlatformCard({ platform }) {
  const inner = (
    <>
      <span className="plat-logo">
        <img src={platform.logo} alt={`${platform.name} logo`} loading="lazy" />
      </span>
      <div className="plat-name">
        {platform.name} <LuArrowUpRight className="ic ic-xs" />
      </div>
      <p className="plat-desc">{platform.desc}</p>
      <div className="plat-stats">
        {platform.stats.map(([v, l]) => (
          <div key={l}>
            <b>{v}</b>
            <span>{l}</span>
          </div>
        ))}
      </div>
    </>
  );

  return platform.url ? (
    <a className="plat-card" href={platform.url} target="_blank" rel="noreferrer">{inner}</a>
  ) : (
    <div className="plat-card">{inner}</div>
  );
}