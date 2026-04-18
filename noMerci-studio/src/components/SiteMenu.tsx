import { useEffect, useState } from "react";
import { navigate } from "astro:transitions/client";

const links = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "games", href: "/games" },
];

export default function SiteMenu() {
  const [open, setOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !isNavigating) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isNavigating]);

  const handleNavigate = async (href: string) => {
    if (isNavigating) return;

    setIsNavigating(true);
    setOpen(false);

    window.setTimeout(async () => {
      await navigate(href);
      setIsNavigating(false);
    }, 260);
  };

  return (
    <>
      {/* Menu Icon */}
      <button
        type="button"
        onClick={() => {
          if (!isNavigating) setOpen(true);
        }}
        className="group flex h-10 w-10 items-center justify-center"
        aria-expanded={open}
        aria-controls="site-menu"
      >
        <div className="flex flex-col items-center justify-center gap-[5px]">
          <span className="block h-[2px] w-5 bg-white transition-opacity group-hover:opacity-80"></span>
          <span className="block h-[2px] w-5 bg-white transition-opacity group-hover:opacity-80"></span>
          <span className="block h-[2px] w-5 bg-white transition-opacity group-hover:opacity-80"></span>
        </div>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[100] transition duration-300 ${
          open
            ? "pointer-events-auto bg-black/55 backdrop-blur-sm"
            : "pointer-events-none bg-black/0 backdrop-blur-none"
        }`}
      >
        <div
          className={`absolute inset-0 transition duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            if (!isNavigating) setOpen(false);
          }}
        />

        {/* Menu Panel */}
        <div
          id="site-menu"
          className={`absolute left-1/2 top-1/2 w-[min(92vw,700px)] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/10 bg-[#141414]/95 px-8 py-12 shadow-2xl transition duration-500 md:px-14 md:py-16 ${
            open
              ? "translate-y-[-50%] opacity-100"
              : "translate-y-[-46%] opacity-0"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          {/* 🔥 Close Icon (replaces text) */}
          <div className="absolute right-6 top-6 md:right-8 md:top-8">
            <button
              type="button"
              onClick={() => {
                if (!isNavigating) setOpen(false);
              }}
              className="group flex h-10 w-10 items-center justify-center disabled:opacity-50"
              disabled={isNavigating}
              aria-label="Close menu"
            >
              <div className="relative h-5 w-5">
                <span
                  className={`absolute left-0 top-1/2 h-[2px] w-full bg-white transition-all duration-300 ${
                    open
                      ? "rotate-45 translate-y-0"
                      : "rotate-0 translate-y-[-6px]"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-1/2 h-[2px] w-full bg-white transition-all duration-300 ${
                    open
                      ? "-rotate-45 translate-y-0"
                      : "rotate-0 translate-y-[6px]"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col items-center justify-center gap-6 text-center md:gap-8">
            {links.map((link, index) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavigate(link.href)}
                disabled={isNavigating}
                className={`text-4xl font-medium tracking-[-0.03em] text-white transition duration-300 hover:text-zinc-300 disabled:opacity-70 md:text-6xl ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
                style={{
                  transitionDelay: open ? `${120 + index * 60}ms` : "0ms",
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}