"use client";

import { useEffect, useState } from "react";
import { heroSlides } from "./hero-slides";
import { HeroSystem } from "./hero-system";

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [paused]);

  const slide = heroSlides[active];

  return (
    <section
      className="relative overflow-hidden bg-[#fafafa] px-6 py-16 sm:py-20 lg:px-8 lg:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* subtle background atmosphere */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-100/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* LEFT */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-blue-600" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Product Engineer
            </span>
          </div>

          <h1 className="mt-7 text-5xl font-bold leading-[0.98] tracking-[-0.065em] text-slate-950 sm:text-6xl lg:text-7xl">
            I build systems
            <br />
            that connect
            <br />
            <span className="text-blue-600">trust.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
            Digital trust, enterprise integration and business systems —
            turning complex technology into practical products and solutions.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              View selected work
            </a>

            <a
              href="mailto:fiqtau8@gmail.com"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400"
            >
              Let&apos;s talk
            </a>
          </div>

          {/* capability strip */}
          <div className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            <span>Digital Trust</span>
            <span>•</span>
            <span>Enterprise Integration</span>
            <span>•</span>
            <span>Business Systems</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <HeroSystem
            nodes={slide.nodes}
            slideNumber={slide.number}
          />
        </div>
      </div>

      {/* SLIDE INFORMATION */}
      <div className="relative mx-auto mt-10 max-w-7xl border-t border-slate-200 pt-6">
        <div className="grid gap-6 lg:grid-cols-[120px_1fr_auto] lg:items-center">
          <div>
            <span className="text-xs font-bold text-blue-600">
              {slide.number} / 04
            </span>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              {slide.eyebrow}
            </p>

            <p className="mt-2 text-sm font-semibold text-slate-700">
              {slide.description}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {heroSlides.map((item, index) => (
              <button
                key={item.number}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show ${item.eyebrow}`}
                aria-current={active === index}
                className="group flex items-center gap-2"
              >
                <span
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    active === index
                      ? "w-10 bg-blue-600"
                      : "w-5 bg-slate-200 group-hover:bg-slate-300"
                  }`}
                />
              </button>
            ))}

            <button
              type="button"
              onClick={() =>
                setActive((current) =>
                  current === 0 ? heroSlides.length - 1 : current - 1,
                )
              }
              className="ml-3 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-950"
              aria-label="Previous slide"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() =>
                setActive((current) => (current + 1) % heroSlides.length)
              }
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-950"
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}