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
    embedUrl: "https://youtu.be/LJY78ZqzVpQ",
    stills: [],
    quote: "Created to create",
    credits: {
      "DIRECTED BY": "Hiten Vaishnav",
      "DIRECTOR OF PHOTOGRAPHY": "Hiten Vaishnav",
      "EDIT": "Hiten vaishnav",
    },
  },
  {
    title: "AURA SKINCARE",
    tag: "'COMMERCIAL'",
    ph: "ph-2",
    thumbnail: "",
    video: "",
    embedUrl: "",
    stills: [],
    quote: "Thirty seconds of stillness for a skincare launch.",
    credits: {
      "AGENCY": "Fancy Shot",
      "DIRECTOR": "Neel Kapoor",
      "DIRECTOR OF PHOTOGRAPHY": "Hiten Vaishnav",
      "PRODUCER": "Ishita Bose",
      "COLOR CORRECTION": "Hiten Vaishnav",
    },
  },
  {
    title: "AWAY FROM HOME",
    tag: "'DOCUMENTARY'",
    ph: "ph-3",
    thumbnail: "",
    video: "",
    embedUrl: "",
    stills: [],
    quote: "Three years following a family that moved twice.",
    credits: {
      "DIRECTED BY": "Hiten Vaishnav",
      "DIRECTOR OF PHOTOGRAPHY": "Hiten Vaishnav",
      "EDITOR": "Farah Sheikh",
      "SOUND DESIGN": "Vikram Joshi",
    },
  },
  {
    title: "NEON NIGHTS",
    tag: "'MUSIC VIDEO'",
    ph: "ph-4",
    thumbnail: "",
    video: "",
    embedUrl: "",
    stills: [],
    quote: "Shot entirely on practicals across two nights.",
    credits: {
      "DIRECTED BY": "Studio Loft",
      "DIRECTOR OF PHOTOGRAPHY": "Hiten Vaishnav",
      "1ST AC": "Yusuf Khan",
      "EDIT": "Meera Iyer",
    },
  },
  {
    title: "THE LAST TRAIN",
    tag: "'SHORT FILM'",
    ph: "ph-5",
    thumbnail: "",
    video: "",
    embedUrl: "",
    stills: [],
    quote: "A stranger, a platform, twelve minutes to midnight.",
    credits: {
      "WRITTEN & DIRECTED BY": "Aditi Rao",
      "DIRECTOR OF PHOTOGRAPHY": "Hiten Vaishnav",
      "PRODUCTION DESIGN": "Karan Malhotra",
      "EDITOR": "Rohan Shah",
    },
  },
  {
    title: "WANDER",
    tag: "'TRAVEL FILM'",
    ph: "ph-6",
    thumbnail: "",
    video: "",
    embedUrl: "",
    stills: [],
    quote: "A visual diary shot across four cities.",
    credits: {
      "DIRECTED BY": "Hiten Vaishnav",
      "DIRECTOR OF PHOTOGRAPHY": "Hiten Vaishnav",
      "EDIT & COLOR": "Hiten Vaishnav",
    },
  },
  {
    title: "SILENT ROOMS",
    tag: "'NARRATIVE'",
    ph: "ph-7",
    thumbnail: "",
    video: "",
    embedUrl: "",
    stills: [],
    quote: "An empty apartment, told in six shots.",
    credits: {
      "WRITTEN & DIRECTED BY": "Devika Rao",
      "DIRECTOR OF PHOTOGRAPHY": "Hiten Vaishnav",
      "EDITOR": "Farah Sheikh",
      "SOUND": "Vikram Joshi",
    },
  },
];
