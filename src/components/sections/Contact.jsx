import { PORTFOLIO } from "../../data/portfolio";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import Eyebrow from "../ui/Eyebrow";

export default function Contact() {
  const { contact, links } = PORTFOLIO;
  return (
    <section className="sec sec--contact" id="contact">
      <div className="wrap">
        <Eyebrow num="08" label="Contact" />
        <h2>{contact.heading}</h2>
        <p>{contact.text}</p>
        <div className="cta-row">
          <a className="btn btn--dark" href={links.email}><LuMail className="ic ic-sm" /> Email Me</a>
          <a className="btn btn--ghost" href={links.github} target="_blank" rel="noreferrer"><FaGithub className="ic ic-sm" /> GitHub</a>
          <a className="btn btn--ghost" href={links.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn className="ic ic-sm" /> LinkedIn</a>
        </div>
      </div>
    </section>
  );
}