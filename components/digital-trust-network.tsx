"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    number: "01",
    eyebrow: "DIGITAL TRUST",
    title: "Certificate infrastructure that works in the real world.",
    description:
      "PKI, S/MIME, certificate lifecycle management and CA integration across enterprise environments.",
    tags: ["PKI", "S/MIME", "CLM", "Certificates"],
    nodes: ["PKI", "S/MIME", "CA API", "CLM"],
  },
  {
    number: "02",
    eyebrow: "API & SYSTEM INTEGRATION",
    title: "Connecting products, APIs and enterprise systems.",
    description:
      "REST, SOAP and certificate authority integrations that connect applications to the services behind them.",
    tags: ["REST", "SOAP", "CA APIs", "Enterprise"],
    nodes: ["APPLICATION", "API", "CA", "CERTIFICATE"],
  },
  {
    number: "03",
    eyebrow: "BUSINESS SYSTEMS",
    title: "Technology shaped around business workflows.",
    description:
      "Exposure to ERP, e-commerce and inventory management systems, with a focus on requirements and integration.",
    tags: ["ERP", "E-Commerce", "Inventory", "Integration"],
    nodes: ["ERP", "E-COMMERCE", "INVENTORY", "INTEGRATION"],
  },
  {
    number: "04",
    eyebrow: "PRODUCT DELIVERY",
    title: "From requirements to a working solution.",
    description:
      "PoC, configuration, testing, UAT, deployment, documentation and customer-facing implementation support.",
    tags: ["PoC", "SIT", "UAT", "Deployment"],
    nodes: ["REQUIRE", "CONFIGURE", "VALIDATE", "DELIVER"],
  },
];

export function DigitalTrustNetwork() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [paused]);

  const slide = slides[active];

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Technical visual */}
      <div className="relative mx-auto aspect-square w-full max-w-[560px]">
        {/* ambient circles */}
        <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100" />
        <div className="absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200" />

        {/* animated orbit */}
        <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-blue-100" />

        {/* connection lines */}
        <div className="absolute left-1/2 top-[14%] h-[72%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-200 to-transparent" />
        <div className="absolute left-[14%] top-1/2 h-px w-[72%] -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

        {/* moving pulse */}
        <div className="absolute left-1/2 top-[14%] h-2 w-2 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(37,99,235,.55)] animate-[pulse_2s_ease-in-out_infinite]" />

        {/* center */}
        <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[28px] border border-blue-200 bg-white shadow-2xl shadow-blue-100">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600">
            Product Engineering
          </span>

          <strong className="mt-2 text-lg tracking-[-0.05em] text-slate-950">
            DIGITAL TRUST
          </strong>

          <span className="mt-1 text-[10px] text-slate-400">
            Integration layer
          </span>
        </div>

        {/* nodes */}
        <Node
          label={slide.nodes[0]}
          position="left-1/2 top-[5%] -translate-x-1/2"
        />

        <Node
          label={slide.nodes[1]}
          position="left-[3%] top-1/2 -translate-y-1/2"
        />

        <Node
          label={slide.nodes[2]}
          position="right-[3%] top-1/2 -translate-y-1/2"
        />

        <Node
          label={slide.nodes[3]}
          position="left-1/2 bottom-[5%] -translate-x-1/2"
        />
      </div>

      {/* Experience slider */}
      <div className="mt-2 border-t border-slate-200 pt-7">
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-blue-600">
                {slide.number}
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                {slide.eyebrow}
              </span>
            </div>

            <h3
              key={slide.number}
              className="mt-3 text-xl font-bold tracking-[-0.04em] text-slate-950 sm:text-2xl"
            >
              {slide.title}
            </h3>

            <p
              key={`${slide.number}-description`}
              className="mt-3 max-w-xl text-sm leading-6 text-slate-600"
            >
              {slide.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {slide.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* controls */}
        <div className="mt-7 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {slides.map((item, index) => (
              <button
                key={item.number}
                type="button"
                aria-label={`Show ${item.eyebrow}`}
                aria-current={active === index}
                onClick={() => setActive(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  active === index
                    ? "w-10 bg-blue-600"
                    : "w-5 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                setActive((current) =>
                  current === 0 ? slides.length - 1 : current - 1,
                )
              }
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-950"
              aria-label="Previous slide"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() =>
                setActive((current) => (current + 1) % slides.length)
              }
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-950"
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Node({
  label,
  position,
}: {
  label: string;
  position: string;
}) {
  return (
    <div className={`absolute z-10 ${position}`}>
      <div className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[10px] font-bold uppercase tracking-wide text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-700">
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-blue-500" />
        {label}
      </div>
    </div>
  );
}