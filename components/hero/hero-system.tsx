"use client";

import { useEffect, useRef, useState } from "react";

type HeroSystemProps = {
  nodes: string[];
  slideNumber: string;
};

export function HeroSystem({ nodes, slideNumber }: HeroSystemProps) {
  const systemRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setReducedMotion(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !systemRef.current) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    systemRef.current.style.transform = `
      perspective(1000px)
      rotateX(${y * -4}deg)
      rotateY(${x * 4}deg)
    `;
  }

  function handleLeave() {
    if (!systemRef.current) return;

    systemRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div
      className="relative mx-auto w-full max-w-[620px]"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div
        ref={systemRef}
        className="relative aspect-square transition-transform duration-500 ease-out"
      >
        {/* Background grid */}
        <div className="absolute inset-0 opacity-70">
          <div className="hero-grid absolute inset-0" />
        </div>

        {/* Orbit rings */}
        <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200" />

        <div className="absolute left-1/2 top-1/2 h-[56%] w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100" />

        <div className="absolute left-1/2 top-1/2 h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200" />

        {/* Rotating orbit */}
        {!reducedMotion && (
          <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 animate-[spin_30s_linear_infinite] rounded-full border border-dashed border-blue-100" />
        )}

        {/* Connection lines */}
        <div className="absolute left-1/2 top-[11%] h-[78%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-200 to-transparent" />

        <div className="absolute left-[11%] top-1/2 h-px w-[78%] -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

        {/* Flowing signals */}
        {!reducedMotion && (
          <>
            <span className="absolute left-1/2 top-[18%] h-2 w-2 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,.7)] animate-[hero-flow-y_3s_linear_infinite]" />

            <span className="absolute left-[18%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,.6)] animate-[hero-flow-x_4s_linear_infinite]" />

            <span className="absolute right-[18%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,.7)] animate-[hero-flow-x-reverse_4s_linear_infinite]" />
          </>
        )}

        {/* Central system */}
        <div className="absolute left-1/2 top-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[30px] border border-blue-200 bg-white shadow-[0_25px_80px_rgba(37,99,235,.12)]">
          <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-blue-600">
            SYSTEM
          </span>

          <strong className="mt-2 text-xl font-bold tracking-[-0.06em] text-slate-950">
            TRUST
          </strong>

          <span className="mt-1 text-[9px] text-slate-400">
            Integration layer
          </span>

          <span className="absolute -bottom-2 rounded-full border border-slate-200 bg-white px-2 py-1 text-[8px] font-bold text-slate-400">
            {slideNumber}
          </span>
        </div>

        {/* Nodes */}
        <SystemNode
          label={nodes[0]}
          position="left-1/2 top-[4%] -translate-x-1/2"
        />

        <SystemNode
          label={nodes[1]}
          position="left-[2%] top-1/2 -translate-y-1/2"
        />

        <SystemNode
          label={nodes[2]}
          position="right-[2%] top-1/2 -translate-y-1/2"
        />

        <SystemNode
          label={nodes[3]}
          position="bottom-[4%] left-1/2 -translate-x-1/2"
        />

        {/* Status */}
        <div className="absolute bottom-[16%] left-[8%] hidden rounded-xl border border-slate-200 bg-white/90 px-3 py-2 shadow-sm backdrop-blur sm:block">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
              System active
            </span>
          </div>
        </div>

        <div className="absolute right-[8%] top-[16%] hidden rounded-xl border border-slate-200 bg-white/90 px-3 py-2 shadow-sm backdrop-blur sm:block">
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
            Connected
          </span>
        </div>
      </div>
    </div>
  );
}

function SystemNode({
  label,
  position,
}: {
  label: string;
  position: string;
}) {
  return (
    <div className={`absolute z-10 ${position}`}>
      <div className="group rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 transition-transform duration-300 group-hover:scale-150" />

          <span className="text-[10px] font-bold uppercase tracking-wide text-slate-700">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}