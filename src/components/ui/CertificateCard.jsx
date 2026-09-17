import { LuAward, LuArrowUpRight } from "react-icons/lu";
import CertImage from "./CertImage";

export default function CertificateCard({ cert, onOpen }) {
  return (
    <div className="cert card">
      <button className="cert-img" onClick={() => onOpen(cert)} aria-label={`View ${cert.name}`}>
        <CertImage
          image={cert.image}
          alt={cert.name}
          fallback={
            <span className="cert-ph">
              <LuAward className="ic" />
              <small>certificate image put here</small>
            </span>
          }
        />
        <span className="cert-zoom">View</span>
      </button>
      <div className="cert-body">
        <b>{cert.name}</b>
        <span className="issuer">{cert.issuer}</span>
        <span className="row">
          <span className="chip chip--sm">{cert.tag || "Certificate"}</span>
          {cert.url && (
            <a className="iconbtn" href={cert.url} target="_blank" rel="noreferrer" aria-label={cert.name}>
              <LuArrowUpRight className="ic ic-sm" />
            </a>
          )}
        </span>
      </div>
    </div>
  );
}