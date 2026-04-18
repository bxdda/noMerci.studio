export type Game = {
  slug: string;
  title: string;
  status: string;
  description: string;
  image: string;
  href: string;
};

export const games: Game[] = [
  {
    slug: "expansion",
    title: "Expansion",
    status: "Play Now",
    description: "A daily acronym puzzle experience.",
    image: "/images/expansion.png",
    href: "/games/expansion",
  },
  {
    slug: "succumb",
    title: "Succumb",
    status: "In Development",
    description: "A cinematic 2.5D project in development.",
    image: "/images/test.png",
    href: "/games/succumb",
  },
  {
    slug: "ints",
    title: "INTS",
    status: "In Development",
    description: "An upcoming project from No Merci.",
    image: "/images/test.png",
    href: "/games/ints",
  },
];