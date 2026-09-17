import Eyebrow from "./Eyebrow";
import Button from "./Button";
import Chip from "./Chip";
import ProjectMockup from "../mockup/ProjectMockup";

export default function FeaturedSlide({ project, index }) {
  return (
    <div className="feat">
      <ProjectMockup mockup={project.mockup} />

      <div className="feat-details">
        <Eyebrow num={String(index + 1).padStart(2, "0")} label={project.label} className="feat-label" />
        <h3 className="feat-title">{project.title}</h3>
        <p className="feat-desc">{project.description}</p>
        <div className="tags">{project.tags.map((t) => <Chip key={t}>{t}</Chip>)}</div>
        <div className="cols">
          {project.columns.map((c) => (
            <div className="col" key={c.heading}>
              <b>{c.heading}</b>
              <p>{c.text}</p>
            </div>
          ))}
        </div>

        {/* right-lower corner: jo links exist karte hain, wahi buttons bante hain */}
        <div className="slide-links">
          <Button href={project.demoUrl}>Live Demo</Button>
          <Button href={project.githubUrl} variant="ghost">GitHub</Button>
        </div>
      </div>
    </div>
  );
}