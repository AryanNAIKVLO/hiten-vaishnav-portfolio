// Extracts the video ID from any common YouTube link format:
//   https://www.youtube.com/watch?v=ID
//   https://youtu.be/ID?si=...
//   https://www.youtube.com/embed/ID
function extractYouTubeId(url) {
  if (!url) return "";
  const match = url.match(/(?:youtu\.be\/|embed\/|v=)([a-zA-Z0-9_-]{6,})/);
  return match ? match[1] : "";
}

// YouTube's auto-generated thumbnail for the grid cards.
export function getYouTubeThumbnail(url) {
  const id = extractYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
}

// Three frames YouTube auto-picks from the video (roughly 25%, 50%, 75%).
export function getYouTubeStills(url) {
  const id = extractYouTubeId(url);
  if (!id) return [];
  return [1, 2, 3].map((n) => `https://img.youtube.com/vi/${id}/hq${n}.jpg`);
}

// Converts any YouTube link into the /embed/ format that iframes allow.
// Non-YouTube links (e.g. Vimeo player URLs) are returned unchanged.
export function getYouTubeEmbedUrl(url) {
  const id = extractYouTubeId(url);
  return id ? `https://www.youtube.com/embed/${id}` : url;
}