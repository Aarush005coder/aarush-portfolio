import { PORTFOLIO } from "../../data/portfolio";
import { LuArrowUpRight } from "react-icons/lu";
import Eyebrow from "../ui/Eyebrow";
import ProjectCard from "../ui/ProjectCard";
import FeaturedCarousel from "../ui/FeaturedCarousel";

export default function Work() {
  const { featured, projects, links } = PORTFOLIO;
  return (
    <section className="sec" id="work">
      <div className="wrap">
        <div className="work-head">
          <div>
            <Eyebrow num="02" label="Selected Work" />
            <h2 className="h-serif h2">A collection of systems,<br />products, and experiments<br />I've built.</h2>
          </div>
          <a className="viewall" href={links.github} target="_blank" rel="noreferrer">
            View all projects <LuArrowUpRight className="ic ic-sm" />
          </a>
        </div>

        {/* FindBlur ↔ Quill slider — circular arrows se navigate */}
        <FeaturedCarousel items={featured} />

        {projects.length > 0 && (
          <div className="others">
            <div className="others-head">
              <h3 className="h-serif">Other Notable Projects</h3>
              <a className="viewall" href={links.github} target="_blank" rel="noreferrer">
                View all projects <LuArrowUpRight className="ic ic-sm" />
              </a>
            </div>
            <div className="proj-grid">
              {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}