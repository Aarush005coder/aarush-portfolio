import { useState } from "react";

const EXT = [".png", ".jpg", ".jpeg", ".webp", ".PNG", ".JPG", ".JPEG", ".WEBP"];

/* agar path me extension hai to wahi use karo, warna saare formats try karo */
export function certSources(image) {
  if (!image) return [];
  if (/\.(png|jpe?g|webp|svg|gif)$/i.test(image)) return [image];
  return EXT.map((e) => image + e);
}

export default function CertImage({ image, alt, className = "", fallback = null }) {
  const sources = certSources(image);
  const [i, setI] = useState(0);
  if (!sources.length || i >= sources.length) return fallback;
  return (
    <img
      className={className}
      src={sources[i]}
      alt={alt}
      loading="lazy"
      onError={() => setI(i + 1)}
    />
  );
}