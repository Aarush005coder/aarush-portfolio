import { Fragment } from "react";
import { PORTFOLIO } from "../../data/portfolio";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { LuMail, LuArrowUpRight } from "react-icons/lu";
import Eyebrow from "../ui/Eyebrow";
import Button from "../ui/Button";
import HeroGraph from "../ui/HeroGraph";

export default function Hero() {
  const { profile, links } = PORTFOLIO;
  return (
    <section className="sec sec--intro" id="top">
      <div className="wrap intro-grid">
        <div>
          <Eyebrow num="01" label="Intro" />
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-tag">{profile.tagline.map((t, i) => <span key={i}>{t}<br /></span>)}</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="meta-row">
            {profile.chips.map((c, i) => (
              <Fragment key={c}>
                {i > 0 && <span className="sep">·</span>}
                <span className="meta"><i className="dot" />{c}</span>
              </Fragment>
            ))}
            <span className="sep">·</span>
            <span className="meta"><i className="dot dot--green" />{profile.status} <LuArrowUpRight className="ic ic-xs" /></span>
          </div>
          <div className="cta-row">
            <Button href="#work" external={false}>View Selected Work</Button>
            <Button href={links.resume} variant="ghost">Resume</Button>
          </div>
          <div className="socials">
            <a href={links.github} target="_blank" rel="noreferrer"><FaGithub className="ic" /> GitHub</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn className="ic" /> LinkedIn</a>
            <a href={links.email}><LuMail className="ic" /> Email</a>
          </div>
        </div>
        <div className="hero-right">
          <HeroGraph labels={profile.graph} />
          <div className="note">{profile.note.map((t, i) => <span key={i}>{t}<br /></span>)}</div>
        </div>
      </div>
    </section>
  );
}