export default function HeroGraph({ labels }) {
  const W = 560, H = 280, n = labels.length + 1;
  const ys = [215, 205, 160, 105, 62, 40];
  const pts = Array.from({ length: n }, (_, i) => ({ x: 30 + i * ((W - 70) / (n - 1)), y: ys[i] }));

  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < n; i++) {
    const p = pts[i - 1], c = pts[i], m = (p.x + c.x) / 2;
    d += ` C ${m} ${p.y}, ${m} ${c.y}, ${c.x} ${c.y}`;
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`}>
      {[140, 280, 420].map((x) => <line key={x} x1={x} y1={20} x2={x} y2={260} stroke="#e6e4dc" />)}
      {[80, 160, 240].map((y) => <line key={y} x1={20} y1={y} x2={540} y2={y} stroke="#eceae2" />)}
      <path d={d} fill="none" stroke="#c9c7be" strokeWidth="1.2" />
      {pts.map((p, i) => (
        <g key={i}>
          {i === n - 1 ? (
            <>
              <circle cx={p.x} cy={p.y} r="6" fill="#b8d374" />
              <circle cx={p.x} cy={p.y} r="2" fill="#182230" />
            </>
          ) : (
            <circle cx={p.x} cy={p.y} r={i === 0 ? 2.5 : 3} fill="#182230" />
          )}
          {i > 0 && (
            <text x={p.x} y={p.y - (i === n - 1 ? 16 : 14)} textAnchor="middle" fontSize="11" fill="#182230">
              {labels[i - 1]}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}