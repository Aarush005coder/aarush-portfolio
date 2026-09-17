import FindBlurMockup from "./FindBlurMockup";
import QuillMockup from "./QuillMockup";
import GeoVisionMockup from "./GeoVisionMockup";
import ScreenshotMockup from "./ScreenshotMockup";

export default function ProjectMockup({ mockup }) {
  if (!mockup) return null;

  // drawn mockups = fallback (agar images load na ho to)
  const fallbacks = {
    findblur: <FindBlurMockup mockup={mockup} />,
    quill: <QuillMockup mockup={mockup} />,
    geovision: <GeoVisionMockup mockup={mockup} />,
  };

  // ✅ SINGLE image (`image`) AUR array (`images`) — DONO support
  const hasImages =
    Boolean(mockup.image) ||
    (Array.isArray(mockup.images) && mockup.images.length > 0);

  if (hasImages) {
    return <ScreenshotMockup mockup={mockup} fallback={fallbacks[mockup.type]} />;
  }

  // warna drawn mockup
  switch (mockup.type) {
    case "quill":
      return <QuillMockup mockup={mockup} />;
    case "geovision":
      return <GeoVisionMockup mockup={mockup} />;
    case "findblur":
    default:
      return <FindBlurMockup mockup={mockup} />;
  }
}