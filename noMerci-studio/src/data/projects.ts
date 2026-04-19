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
      "Expansion is a daily word puzzle project centered on acronyms and their full forms (expansions). Players work from shortened clues toward the full phrase, combining recognition, inference, and vocabulary.",
      "The project was designed as both a playable daily experience and a technical showcase for responsive UI, clean gameplay flow, and polished browser deployment.",
      "As part of the broader No Merci studio identity, Expansion represents a focused, accessible release with a distinct mechanic and strong visual simplicity.",
    ],
    status: "Released",
    platform: "Web",
    type: "Daily Puzzle Game",
    builtWith: [
      "Java",
      "JavaScript",
      "libGDX",
      "HTML5",
      "scene2D",
      "scene2D.ui"
    ],
  },

  succumb: {
    slug: "succumb",
    title: "Succumb",
    subtitle:
      "A cinematic 2.5D project in development, built around atmosphere, animation, and hybrid visual design.",
    imageSrc: "/images/logo1.jpg",
    imageAlt: "— Media coming soon —",
    paragraphs: [
      "Succumb is a PC-focused game that blends 3D environments with 2D Spine-based character animation to create a responsive, layered presentation.",
      "Built on an in-house engine, SirenEngine, Succumb integrates Bullet3D physics, custom animation pipelines, and real-time camera systems into a unified gameplay space.",
      "Within No Merci, it represents a more experimental direction—focused on interaction, motion, and technical execution over convention.",
      "Planned for release on Steam, targeting 2026–2027.",
    ],
    status: "In Development",
    platform: "PC",
    type: "2.5D Cinematic Project",
    builtWith: [
      "Java",
      "libGDX",
      "Spine",
      "Bullet Physics",
      "scene2D",
      "scene2D.ui",
    ],
  },

  ints: {
    slug: "ints",
    title: "It's Never That Simple",
    subtitle:
      "A narrative-driven 2.5D project focused on tension, systems, and grounded storytelling.",
    imageSrc: "/images/logo1.jpg",
    imageAlt: " — Media coming soon —",
    paragraphs: [
      "It’s Never That Simple (INTS) is a linear story experience that blends 2D Spine-based animation with 3D worldspace to create a controlled, cinematic flow.",
      "Set between the Bronx, NY and Philadelphia, PA, the project explores modern street culture through a darker, more grounded lens, expanding into themes of geopolitics, power, and escalation.",      "As development continues, INTS will serve as another expression of the studio’s evolving design language and technical direction.",
      "Built using Java, LibGDX, and Bullet physics, the game emphasizes high-stakes gameplay, precise mechanics, and a demanding level of difficulty.",
      "At its core, the project is structured around a single idea—complex systems, situations, and decisions rarely resolve cleanly.",
    ],
    status: "In Development",
    platform: "PC / TBD",
    type: "Large-scale 2.5D linear storygame. High difficulty. Dark.",
    builtWith: [
      "Java",
      "libGDX",
      "Bullet Physics",
      "Spine",
      "scene2D",
      "scene2D.ui",
    ],
  },
};