import { PORTFOLIO } from "../../data/portfolio";
import Eyebrow from "../ui/Eyebrow";
import MindsetCard from "../ui/MindsetCard";

export default function Mindset() {
  const items = PORTFOLIO.mindset || [];
  return (
    <section className="sec sec--mindset" id="mindset">
      <div className="wrap mind-grid-wrap">
        <div className="mind-left">
          <Eyebrow num="05" label="Engineering Mindset" />
          <h2 className="h-serif h2">I enjoy turning difficult problems into simple systems.</h2>
          <p className="muted mind-note">
            Every project starts with the same instinct — break the complexity down,
            understand it deeply, then rebuild it as the simplest system that scales.
          </p>
        </div>
        <div className="mind-grid">
          {items.map((m, i) => <MindsetCard key={m.title} item={m} index={i} />)}
        </div>
      </div>
    </section>
  );
}