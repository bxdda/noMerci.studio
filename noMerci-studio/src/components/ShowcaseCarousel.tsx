import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";

const baseCards = [
  {
    title: "Expansion",
    image: "/images/expansion.png",
    href: "/games/expansion",
  },
  {
    title: "Succumb",
    image: "/images/logo1.png",
    href: "/games/succumb",
  },
  {
    title: "INTS",
    image: "/images/logo1.png",
    href: "/games/ints",
  },
];

export default function ShowcaseCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = useMemo(() => [...baseCards, ...baseCards], []);

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    let frameId = 0;

    const updateCardFocus = () => {
      const viewport = viewportRef.current;

      if (!viewport) {
        frameId = requestAnimationFrame(updateCardFocus);
        return;
      }

      const viewportRect = viewport.getBoundingClientRect();
      const viewportCenterX = viewportRect.left + viewportRect.width / 2;

      // How wide the "focus zone" is around the center.
      // Increase for a softer transition, decrease for a tighter spotlight.
      const focusRadius = viewportRect.width * 0.32;

      for (const card of cardRefs.current) {
        if (!card) continue;

        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const distanceFromCenter = Math.abs(cardCenterX - viewportCenterX);

        // 1 when centered, 0 when outside focus radius
        const normalized = Math.max(
          0,
          1 - distanceFromCenter / focusRadius
        );

        // Ease it so the effect feels smoother
        const focus = normalized * normalized;

        // Interpolate visual values
        const blur = 1.2 - focus * 1.2; // 1.2px -> 0px
        const brightness = 0.85 + focus * 0.15; // 0.85 -> 1
        const opacity = 0.75 + focus * 0.25; // 0.75 -> 1

        card.style.setProperty("--card-blur", `${blur}px`);
        card.style.setProperty("--card-brightness", `${brightness}`);
        card.style.setProperty("--card-opacity", `${opacity}`);
        card.style.setProperty("--card-focus", `${focus}`);
      }

      frameId = requestAnimationFrame(updateCardFocus);
    };

    frameId = requestAnimationFrame(updateCardFocus);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="relative -mt-40 overflow-hidden px-6 pb-24 pt-8 md:-mt-48 md:pb-32 md:pt-10">
      <div className="mx-auto max-w-7xl">
        <div
          ref={viewportRef}
          className="relative overflow-hidden py-12 md:py-14"
        >
          <div className="showcase-track flex w-max items-center gap-8 md:gap-10">
            {cards.map((card, index) => {
              const hovered = hoveredIndex === index;
              const leftOfHovered =
                hoveredIndex !== null && index < hoveredIndex;
              const rightOfHovered =
                hoveredIndex !== null && index > hoveredIndex;

              let translateX = 0;
              if (leftOfHovered) translateX = -34;
              if (rightOfHovered) translateX = 34;

              const style: CSSProperties = {
                transform: hovered
                  ? "translateX(0px) scale(1.02)"
                  : `translateX(${translateX}px) scale(1)`,
              };

              return (
                <a
                  key={`${card.title}-${index}`}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  href={card.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="showcase-card group relative block h-[260px] w-[460px] shrink-0 overflow-hidden rounded-[2.2rem] border border-white/10 bg-zinc-900 md:h-[320px] md:w-[620px]"
                  style={style}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.65),rgba(0,0,0,0.2),transparent)]" />

                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="text-lg font-medium text-white md:text-xl">
                      {card.title}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-[linear-gradient(to_right,#090909,rgba(9,9,9,0.82),transparent)] md:w-48" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-[linear-gradient(to_left,#090909,rgba(9,9,9,0.82),transparent)] md:w-48" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_32%,rgba(9,9,9,0.18)_62%,rgba(9,9,9,0.5)_88%,rgba(9,9,9,0.8)_100%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(to_top,#090909,rgba(9,9,9,0.85),transparent)] md:h-32" />
        </div>
      </div>

      <style>{`
        .showcase-track {
          animation: nomerci-marquee 36s linear infinite;
          will-change: transform;
        }

        .showcase-track:hover {
          animation-play-state: paused;
        }

        .showcase-card {
          --card-blur: 1.2px;
          --card-brightness: 0.85;
          --card-opacity: 0.75;
          --card-focus: 0;

          filter: blur(var(--card-blur)) brightness(var(--card-brightness));
          opacity: var(--card-opacity);

          transition:
            transform 500ms ease,
            filter 220ms linear,
            opacity 220ms linear;
          will-change: transform, filter, opacity;
        }

        .showcase-card:hover {
          filter: blur(0) brightness(1);
          opacity: 1;
          z-index: 3;
        }

        @keyframes nomerci-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 20px));
          }
        }
      `}</style>
    </section>
  );
}