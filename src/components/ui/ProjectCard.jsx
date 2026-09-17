import { LuArrowRight } from "react-icons/lu";
import Chip from "./Chip";

export default function ProjectCard({ project, index }) {
  return (
    <article className="proj card">
      <div>
        <span className="num">{String(index + 2).padStart(2, "0")}</span>
        <h4 className="h-serif">{project.title}</h4>
        <p>{project.description}</p>
        <div className="tags">{project.tags.map((t) => <Chip key={t} small>{t}</Chip>)}</div>
      </div>
      <div className="proj-side">
        {project.image ? (
          <div className="thumb"><img src={project.image} alt={project.title} /></div>
        ) : (
          <div className="thumb"><span className="thumb-ui" /><span className="thumb-title">{project.title}</span></div>
        )}
        {project.url && (
          <a className="iconbtn" href={project.url} target="_blank" rel="noreferrer" aria-label={project.title}>
            <LuArrowRight className="ic ic-sm" />
          </a>
        )}
      </div>
    </article>
  );
}