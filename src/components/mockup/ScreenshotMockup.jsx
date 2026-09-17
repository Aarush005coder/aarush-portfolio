import { projectImage, availableProjectImages } from "./projectImages";

function ShotImage({ image, alt }) {
  const url = projectImage(image);
  if (!url) {
    console.warn(`[portfolio] "${image}" nahi mila. Available files:`, availableProjectImages);
    return (
      <span className="shot-ph shot-ph--tile">
        <small>image missing</small>
      </span>
    );
  }
  return <img className="shot-img" src={url} alt={alt} />;
}

export default function ScreenshotMockup({ mockup, fallback = null }) {
  const images = mockup.images?.length ? mockup.images : mockup.image ? [mockup.image] : [];
  const found = images.filter((k) => projectImage(k));

  // koi image nahi mili -> drawn mockup (pehle jaisa) + console me available names
  if (!found.length) {
    console.warn("[portfolio] koi project image nahi mili. Available files:", availableProjectImages);
    return fallback;
  }

  return (
    <div className="mock-wrap">
        <div className={`mock-card mock-card--shot mock-${mockup.type}`}>
        <div className="shot-bar">
          <span className="shot-dot" />
          <span className="shot-dot" />
          <span className="shot-dot" />
          <span className="shot-url">{(mockup.appName || "app").toLowerCase()}.app</span>
        </div>
        <div className={found.length > 1 ? "shot-duo" : "shot-single"}>
          {found.map((img, idx) => (
            <ShotImage key={img} image={img} alt={`${mockup.appName} screenshot ${idx + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}