import { LuArrowUpRight } from "react-icons/lu";

export default function Button({ href, variant = "dark", small = false, arrow = true, external = true, children }) {
  if (!href) return null; // khali link = button auto-hide
  return (
    <a
      className={`btn btn--${variant} ${small ? "btn--sm" : ""}`.trim()}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
      {arrow && <LuArrowUpRight className="ic ic-sm" />}
    </a>
  );
}