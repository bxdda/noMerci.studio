export type GameProject = {
  slug: string;
  title: string;
  subtitle: string;
  playHref?: string;
  playLabel?: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
  status: string;
  platform: string;
  type: string;
  builtWith: string[];
};

export const gameProjects: Record<string, GameProject> = {
  expansion: {
    slug: "expansion",
    title: "Expansion",
    subtitle:
      "A daily acronym puzzle experience built around deduction, recognition, and replayable word discovery.",
    playHref: "https://expansion-game.com",
    playLabel: "Play Expansion",
    imageSrc: "/images/expansion.png",
    imageAlt: "Expansion screenshot",
    paragraphs: [
      "Expansion is a daily word puzzle project centered on acronyms and their full forms. Players work from shortened clues toward the full phrase, combining recognition, inference, and vocabulary.",
      "The project was designed as both a playable daily experience and a technical showcase for responsive UI, clean gameplay flow, and polished browser deployment.",
      "As part of the broader No Merci studio identity, Expansion represents a focused, accessible release with a distinct mechanic and strong visual simplicity.",
    ],
    status: "Released",
    platform: "Web",
    type: "Daily Puzzle Game",
    builtWith: [
      "Java",
      "LibGDX",
      "HTML5 Deployment",
      "Scene2D UI",
      "Responsive Layout",
    ],
  },

  succumb: {
    slug: "succumb",
    title: "Succumb",
    subtitle:
      "A cinematic 2.5D project in development, built around atmosphere, animation, and hybrid visual design.",
    imageSrc: "/images/succumb.jpg",
    imageAlt: "Succumb screenshot",
    paragraphs: [
      "Succumb is a 2.5D game project that combines 3D environments with 2D Spine-based character animation to create a layered, cinematic presentation.",
      "The project serves as a technical showcase for animation integration, camera work, UI design, and the blending of 2D and 3D systems inside a unified gameplay space.",
      "Within No Merci, Succumb represents a darker and more experimental direction, focused on mood, motion, and a more authored visual identity.",
    ],
    status: "In Development",
    platform: "PC / Web",
    type: "2.5D Cinematic Project",
    builtWith: [
      "Java",
      "LibGDX",
      "Spine",
      "Bullet Physics",
      "Scene2D UI",
      "Custom Camera Systems",
    ],
  },

  ints: {
    slug: "ints",
    title: "INTS",
    subtitle:
      "An upcoming No Merci project currently in development.",
    imageSrc: "/images/ints.jpg",
    imageAlt: "INTS screenshot",
    paragraphs: [
      "INTS is an upcoming project from No Merci that will expand the studio’s lineup with another focused interactive experience.",
      "The project is still taking shape, but it reflects the same emphasis on distinctive mechanics, clean presentation, and strong identity.",
      "As development continues, INTS will serve as another expression of the studio’s evolving design language and technical direction.",
    ],
    status: "In Development",
    platform: "TBD",
    type: "Upcoming Project",
    builtWith: [
      "In Progress",
    ],
  },
};