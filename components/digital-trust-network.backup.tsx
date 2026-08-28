"use client";

import { useEffect, useRef, useState } from "react";

type NodeName = "PKI" | "S/MIME" | "CA API" | "CLM" | "ENTERPRISE" | "ERP / BUSINESS SYSTEMS";

const details: Record<NodeName, string> = {
  PKI: "Certificate Infrastructure",
  "S/MIME": "Secure Email Certificates",
  "CA API": "Certificate Authority Integration",
  CLM: "Certificate Lifecycle Management",
  ENTERPRISE: "Enterprise System Integration",
  "ERP / BUSINESS SYSTEMS": "Business Applications",
};

const connectionMap: Record<NodeName, string[]> = {
  PKI: ["pki"],
  "S/MIME": ["smime"],
  "CA API": ["ca"],
  CLM: ["clm"],
  ENTERPRISE: ["enterprise"],
  "ERP / BUSINESS SYSTEMS": ["enterprise"],
};

export function DigitalTrustNetwork() {
  const [activeNode, setActiveNode] = useState<NodeName | null>(null);
  const [reducedMotion, setReducedMotion] = useState(true);
  const networkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  function moveNetwork(event: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !networkRef.current) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;
    networkRef.current.style.transform = `translate(${x}px, ${y}px)`;
  }

  function resetNetwork() {
    if (networkRef.current) networkRef.current.style.transform = "translate(0, 0)";
  }

  const activeLines = activeNode ? connectionMap[activeNode] : [];

  return <div className="relative mx-auto w-full max-w-[620px]" onMouseMove={moveNetwork} onMouseLeave={resetNetwork}>
    <div className="network-shell relative aspect-[1.05] min-h-[360px] overflow-hidden border border-slate-200 bg-white/70 sm:min-h-[470px]" ref={networkRef}>
      <div className="network-grid absolute inset-0" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 520" fill="none" aria-hidden="true">
        <path className={`network-line ${activeLines.includes("pki") ? "network-line-active" : ""}`} d="M300 225V95" />
        <path className={`network-line ${activeLines.includes("smime") ? "network-line-active" : ""}`} d="M244 260H96" />
        <path className={`network-line ${activeLines.includes("ca") ? "network-line-active" : ""}`} d="M356 260H504" />
        <path className={`network-line ${activeLines.includes("clm") ? "network-line-active" : ""}`} d="M300 315V386" />
        <path className={`network-line ${activeLines.includes("enterprise") ? "network-line-active" : ""}`} d="M300 430V478" />
        {!reducedMotion && <>
          <FlowDot path="M300 225V95" duration="5.5s" />
          <FlowDot path="M244 260H96" duration="6.5s" />
          <FlowDot path="M504 260H356" duration="5.8s" />
          <FlowDot path="M300 315V386" duration="6.2s" />
          <FlowDot path="M300 478V430" duration="5.2s" />
        </>}
      </svg>
      <div className="absolute left-1/2 top-[50%] z-10 -translate-x-1/2 -translate-y-1/2"><div className={`central-node ${activeNode ? "central-node-active" : ""}`}><span className="text-[10px] font-bold uppercase tracking-[.2em] text-blue-700">Live system</span><strong className="mt-2 block text-base tracking-[-.04em] text-slate-950">DIGITAL TRUST</strong><span className="mt-1 block text-[10px] text-slate-500">Integration layer</span></div></div>
      <NetworkNode name="PKI" className="left-1/2 top-[10%] -translate-x-1/2" active={activeNode === "PKI"} related={Boolean(activeNode)} onEnter={setActiveNode} onLeave={() => setActiveNode(null)} />
      <NetworkNode name="S/MIME" className="left-[4%] top-[45%] -translate-y-1/2" active={activeNode === "S/MIME"} related={Boolean(activeNode)} onEnter={setActiveNode} onLeave={() => setActiveNode(null)} />
      <NetworkNode name="CA API" className="right-[4%] top-[45%] -translate-y-1/2" active={activeNode === "CA API"} related={Boolean(activeNode)} onEnter={setActiveNode} onLeave={() => setActiveNode(null)} />
      <NetworkNode name="CLM" className="left-1/2 top-[74%] -translate-x-1/2" active={activeNode === "CLM"} related={Boolean(activeNode)} onEnter={setActiveNode} onLeave={() => setActiveNode(null)} />
      <NetworkNode name="ENTERPRISE" className="bottom-[3%] left-[23%]" active={activeNode === "ENTERPRISE"} related={Boolean(activeNode)} onEnter={setActiveNode} onLeave={() => setActiveNode(null)} />
      <NetworkNode name="ERP / BUSINESS SYSTEMS" className="bottom-[3%] right-[4%]" active={activeNode === "ERP / BUSINESS SYSTEMS"} related={Boolean(activeNode)} onEnter={setActiveNode} onLeave={() => setActiveNode(null)} />
    </div>
    <StatusPanel />
  </div>;
}

function FlowDot({ path, duration }: { path: string; duration: string }) {
  return <circle r="4" className="flow-dot"><animateMotion dur={duration} repeatCount="indefinite" path={path} /></circle>;
}

function NetworkNode({ name, className, active, related, onEnter, onLeave }: { name: NodeName; className: string; active: boolean; related: boolean; onEnter: (name: NodeName) => void; onLeave: () => void }) {
  return <div className={`network-node-wrap absolute z-10 ${className}`} onMouseEnter={() => onEnter(name)} onMouseLeave={onLeave} onFocus={() => onEnter(name)} onBlur={onLeave} tabIndex={0}>
    <div className={`network-node ${active ? "network-node-active" : ""} ${related && !active ? "network-node-related" : ""}`}>{name}</div>
    {active && <div role="tooltip" className="absolute left-1/2 top-full z-20 mt-2 w-max max-w-[180px] -translate-x-1/2 border border-blue-100 bg-white px-3 py-2 text-center text-[11px] font-medium text-slate-600 shadow-sm">{details[name]}</div>}
  </div>;
}

function StatusPanel() {
  const rows = [["PKI", "ACTIVE"], ["CA API", "CONNECTED"], ["S/MIME", "ACTIVE"], ["CLM", "MONITORING"], ["ENTERPRISE", "CONNECTED"]];
  return <aside className="absolute -left-2 top-[14%] hidden w-[180px] border border-slate-200 bg-white p-4 shadow-sm lg:block"><p className="text-[10px] font-bold tracking-[.18em] text-slate-500">SYSTEM STATUS</p><div className="mt-3 space-y-2.5">{rows.map(([label, status]) => <div key={label} className="flex items-center justify-between gap-3 text-[10px]"><span className="flex items-center gap-1.5 text-slate-600"><i className="h-1.5 w-1.5 rounded-full bg-blue-500" />{label}</span><b className="text-[9px] tracking-wide text-blue-700">{status}</b></div>)}</div></aside>;
}
