// Pulls YouTube's own auto-generated thumbnail image for a video, given
// either an embed URL (https://www.youtube.com/embed/VIDEO_ID) or a
// normal watch URL (https://www.youtube.com/watch?v=VIDEO_ID).
// Returns "" if the URL doesn't look like a YouTube link.
export function getYouTubeThumbnail(url) {
  if (!url) return "";
  const match = url.match(/(?:embed\/|v=)([a-zA-Z0-9_-]{6,})/);
  if (!match) return "";
  const id = match[1];
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}