/* src/assets/project-images/ ki saari files ko bundle karta hai —
   koi bhi extension (.png/.jpg/.jpeg/.webp) ya case chalega */
const modules = import.meta.glob("../../assets/project-images/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const map = {};
for (const [path, url] of Object.entries(modules)) {
  const file = path.split("/").pop();
  const base = file.replace(/\.[^.]+$/, "").toLowerCase();
  map[base] = url;
}

export const availableProjectImages = Object.keys(map);

export function projectImage(key) {
  if (!key) return null;
  const base = String(key).split("/").pop().replace(/\.[^.]+$/, "").toLowerCase();
  return map[base] || null;
}