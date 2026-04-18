import { useEffect, useState } from "react";

type IntroStage = "hidden" | "enter" | "tremor" | "glow" | "fade";

export default function IntroOverlay() {
  const [visible, setVisible] = useState(false);
  const [stage, setStage] = useState<IntroStage>("hidden");
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const bootSplash = document.getElementById("boot-splash");
    const alreadySeen = sessionStorage.getItem("nomerci-intro-seen");

    if (alreadySeen) {
      if (bootSplash) bootSplash.remove();
      return;
    }

    setShouldRender(true);
    setVisible(true);

    if (bootSplash) bootSplash.remove();

    sessionStorage.setItem("nomerci-intro-seen", "true");

    const enterTimer = window.setTimeout(() => setStage("enter"), 80);
    const tremorTimer = window.setTimeout(() => setStage("tremor"), 1400);
    const glowTimer = window.setTimeout(() => setStage("glow"), 1900);
    const fadeTimer = window.setTimeout(() => setStage("fade"), 2900);
    const removeTimer = window.setTimeout(() => {
      setVisible(false);
      setShouldRender(false);
      setStage("hidden");
    }, 4300);

    return () => {
      window.clearTimeout(enterTimer);
      window.clearTimeout(tremorTimer);
      window.clearTimeout(glowTimer);
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender || !visible) return null;

  const isHidden = stage === "hidden";
  const isTremor = stage === "tremor";
  const isGlow = stage === "glow";
  const isFade = stage === "fade";

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-black transition-opacity duration-[1400ms] ease-out ${
        isFade ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="relative flex flex-col items-center justify-center px-6">
        
        {/* 🔥 LOGO (no glow) */}
        <img
          src="/images/logo.png"
          alt=""
          className={[
            "pointer-events-none mb-6 w-40 select-none md:mb-8 md:w-56",
            "transition-[opacity,filter,transform,scale] duration-[1400ms] ease-out",

            isHidden
              ? "translate-y-3 opacity-0 blur-sm scale-[0.92]"
              : "",

            !isHidden && !isFade
              ? "translate-y-0 opacity-100 blur-[1px] scale-[1.08]"
              : "",

            isTremor
              ? "scale-[1.05]"
              : "",

            // ❌ removed glow effect here
            isGlow
              ? "opacity-100 blur-0 scale-[1.1]"
              : "",

            isFade
              ? "translate-y-0 opacity-0 blur-0 scale-100"
              : "",
          ].join(" ")}
        />

        {/* 🔥 TEXT (still glows red) */}
        <h1
          className={[
            "relative z-10 select-none text-5xl font-semibold md:text-7xl",
            "transition-[opacity,color,filter,transform,letter-spacing] duration-[1400ms] ease-out",

            isHidden
              ? "translate-y-3 opacity-0 blur-sm tracking-[0.12em] scale-[1.02]"
              : "",

            !isHidden && !isFade
              ? "translate-y-0 opacity-100 blur-[2px] tracking-[0.1em] scale-100 text-zinc-200"
              : "",

            isTremor
              ? "tracking-[0.06em] scale-[0.985]"
              : "",

            isGlow
              ? "blur-0 tracking-[0.08em] scale-100 text-red-500"
              : "",

            isFade
              ? "translate-y-0 opacity-0 blur-0 scale-100 tracking-[0.08em] text-red-500"
              : "",
          ].join(" ")}
        >
          noMerci
        </h1>
      </div>
    </div>
  );
}