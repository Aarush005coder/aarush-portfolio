export default function Eyebrow({ num, label, className = "" }) {
  return (
    <div className={`eyebrow ${className}`.trim()}>
      <b>{num}</b>
      <span>/</span>
      {label}
    </div>
  );
}