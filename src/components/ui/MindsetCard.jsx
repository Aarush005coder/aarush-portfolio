import Icon from "./Icon";

export default function MindsetCard({ item, index }) {
  const accent = item.accent || "#182230";
  return (
    <div
      className="mind"
      style={{
        "--accent": accent,
        "--accent-soft": accent + "1A",  // 10% transparency
        "--accent-mid": accent + "4D",   // 30% transparency
      }}
    >
      <div className="mind-top">
        <span className="mind-icon"><Icon name={item.icon} /></span>
        <span className="mind-num">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <b>{item.title}</b>
      <p>{item.text}</p>
      <span className="mind-line" />
    </div>
  );
}