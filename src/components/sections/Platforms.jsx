import { PORTFOLIO } from "../../data/portfolio";
import { LuArrowUpRight } from "react-icons/lu";
import Eyebrow from "../ui/Eyebrow";
import PlatformCard from "../ui/PlatformCard";

export default function Platforms() {
  const { platforms, links } = PORTFOLIO;
  if (!platforms?.items?.length) return null;

  // seamless infinite loop ke liye list do baar
  const loop = [...platforms.items, ...platforms.items];

  return (
    <section className="sec" id="platforms">
      <div className="wrap">
        <div className="work-head">
          <div>
            <Eyebrow num="03" label="Platforms" />
            <h2 className="h-serif h2">Platforms I Work On</h2>
            <p className="muted platforms-intro">{platforms.intro}</p>
          </div>
          {/* <a className="viewall" href={links.github} target="_blank" rel="noreferrer">
            View all platforms <LuArrowUpRight className="ic ic-sm" /> */}
          {/* </a> */}
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {loop.map((p, i) => (
            <PlatformCard key={`${p.name}-${i}`} platform={p} />
          ))}
        </div>
      </div>
    </section>
  );
}