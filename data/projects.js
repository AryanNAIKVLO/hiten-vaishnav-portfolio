// Each project can optionally point to real media. Leave any field empty
// ("" or []) and the site falls back to the placeholder gradient (the
// "ph" field) automatically — fill projects in one at a time.
//
// THUMBNAIL (grid preview image) — always a local file, these are small:
//   public/work/<slug>-thumb.jpg  ->  thumbnail: "/work/<slug>-thumb.jpg"
//
// FULL VIDEO — pick ONE of these two depending on file size:
//   - Short clip (a few MB, well under 50MB): put the .mp4 in public/work/
//     and set video: "/work/<slug>.mp4"
//   - Anything large (the norm for real footage — many clips are 1GB+):
//     upload it to Vimeo as "Unlisted" and set embedUrl to its player URL,
//     e.g. embedUrl: "https://player.vimeo.com/video/123456789"
//     (from a vimeo.com/123456789 link, the player URL is that same ID
//     under player.vimeo.com/video/). Leave "video" empty in this case.
//     YouTube unlisted works too: embedUrl: "https://www.youtube.com/embed/VIDEO_ID"
//
// STILLS (optional behind-the-scenes grid, local files, keep these small):
//   public/work/<slug>-still-1.jpg  ->  stills[0], etc.

export const projects = [
  {
    title: "Sport",
    tag: "Action Shot'",
    ph: "ph-0",
    thumbnail: "",
    video: "",
    embedUrl: "https://www.youtube.com/embed/oX7X7i91008",
    stills: [],
    quote: "PUll",
    credits: {
      "DIRECTOR OF PHOTOGRAPHY": "Hiten Vaishnav",
      "EDITOR": "Hiten Vaishnav",
      "COLOR": "Hiten Vaishnav",
    },
  },
  {
    title: "Created to create",
    tag: "VIDEO'",
    ph: "ph-1",
    thumbnail: "",
    video: "",
    embedUrl: "https://youtube.com/embed/LJY78ZqzVpQ",
    stills: [],
    quote: "Created to create",
    credits: {
      "DIRECTED BY": "Hiten Vaishnav",
      "DIRECTOR OF PHOTOGRAPHY": "Hiten Vaishnav",
      "EDIT": "Hiten vaishnav",
    },
  },
  {
    title: "Market",
    tag: "'Behind the scene'",
    ph: "ph-2",
    thumbnail: "",
    video: "",
    embedUrl: "https://youtube.com/embed/ylPQc--JSZM",
    stills: [],
    quote: "Behind the scenes but cinematic.",
    credits: {
      "DIRECTOR": "Hiten Vaishnav",
      "DIRECTOR OF PHOTOGRAPHY": "Hiten Vaishnav",
      "COLOR CORRECTION": "Hiten Vaishnav",
    },
  },
  {
    title: "Small town boys ",
    tag: "'Short'",
    ph: "ph-3",
    thumbnail: "",
    video: "",
    embedUrl: "https://youtu.be/it-vkslsgQE?si=qSvhcbP2NYgihsJ3",
    stills: [],
    quote: "An avg evening of a small town guy.",
    credits: {
      "DIRECTED BY": "Hiten Vaishnav",
      "DIRECTOR OF PHOTOGRAPHY": "Hiten Vaishnav",
      "COLOUR CORRECTION": "Hiten Vaishnav",
    },
  },
  
];
