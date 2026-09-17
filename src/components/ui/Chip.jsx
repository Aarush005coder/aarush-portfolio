export default function Chip({ children, small = false }) {
  return <span className={`chip ${small ? "chip--sm" : ""}`.trim()}>{children}</span>;
}