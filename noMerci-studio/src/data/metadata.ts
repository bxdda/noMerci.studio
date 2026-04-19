export type PageMeta = {
  title: string;
  description: string;
  image: string;
};

export const defaultMeta: PageMeta = {
  title: "noMerci Interactive",
  description:
    "Independent interactive studio building atmospheric games, cinematic 2.5D worlds, and stylized digital experiences.",
  image: "/og/nomerci-og.png",
};

export const routeMeta: Record<string, Partial<PageMeta>> = {
  "/": {
    title: "noMerci Interactive",
  },

  "/about": {
    title: "About — noMerci Interactive",
    description:
      "Learn about noMerci Interactive, the studio vision, and the design philosophy behind our projects.",
    // image optional for now, will fall back
  },

  "/games": {
    title: "Games — noMerci Interactive",
    description:
      "Explore noMerci Interactive projects, including original games, technical showcases, and atmospheric interactive worlds.",
  },

  "/games/expansion": {
    title: "Expansion — noMerci Interactive",
    description:
      "Guess the word. Expand the acronym.",
  },

  "/games/succumb": {
    title: "Succumb — noMerci Interactive",
    description:
      "A cinematic 2.5D project blending 3D environments with Spine-based character animation and dark atmosphere.",
  },

  "/games/ints": {
    title: "It’s Never That Simple — noMerci Interactive",
    description:
      "A dark, story-driven 2.5D experience exploring contemporary conflict, ambition, and layered human complexity.",
  },
};