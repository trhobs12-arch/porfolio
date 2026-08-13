import Link from "next/link";


const projectStages = [
  {
    number: "01",
    title: "Discover",
    description:
      "Gather business requirements, understand existing processes and identify the objectives of the implementation.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define project scope, workflows, stakeholders, timelines and technical dependencies.",
  },
  {
    number: "03",
    title: "Integrate",
    description:
      "Coordinate system integration, APIs, configuration and communication between platforms.",
  },
  {
    number: "04",
    title: "Validate",
    description:
      "Conduct SIT and UAT, investigate issues and verify that the solution meets requirements.",
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "Coordinate implementation activities, user readiness and deployment preparation.",
  },
];

const responsibilities = [
  "Led end-to-end project coordination from initiation through implementation",
  "Facilitated requirements gathering sessions with stakeholders",
  "Prepared workflows, URS, BRD and solution documentation",
  "Coordinated developers, vendors and customer stakeholders",
  "Supported API and system integration activities",
  "Prepared project schedules and Gantt charts",
  "Coordinated System Integration Testing and User Acceptance Testing",
  "Performed troubleshooting and root cause analysis",
  "Prepared meeting minutes, technical documentation and user guides",
  "Supported deployment and post-implementation activities",
];

const deliverables = [
  {
    title: "Requirements",
    items: ["URS", "BRD", "Requirement Analysis", "Stakeholder Sessions"],
  },
  {
    title: "Project Planning",
    items: ["Gantt Chart", "Project Schedule", "Milestones", "Dependencies"],
  },
  {
    title: "Technical",
    items: ["Workflows", "API Integration", "Mock-ups", "Solution Design"],
  },
  {
    title: "Testing",
    items: ["SIT", "UAT", "Issue Tracking", "Root Cause Analysis"],
  },
  {
    title: "Documentation",
    items: ["MOM", "User Guide", "Technical Documents", "Project Records"],
  },
  {
    title: "Deployment",
    items: ["Implementation", "User Readiness", "Go-Live Support", "Handover"],
  },
];

const skills = [
  "Business Analysis",
  "Requirements Gathering",
  "Project Coordination",
  "System Integration",
  "API Integration",
  "SIT",
  "UAT",
  "Root Cause Analysis",
  "Stakeholder Management",
  "Vendor Coordination",
  "Technical Documentation",
  "Gantt Scheduling",
];

export default function EnterpriseSystemIntegrationPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* NAVIGATION */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="text-xl font-bold tracking-[-0.04em] text-slate-950"
          >
            TAUFIQ<span className="text-blue-600">.</span>
          </Link>

          <Link
            href="/#projects"
            className="text-sm font-semibold text-slate-500 transition hover:text-blue-600"
          >
            ← Back to Projects
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />

        <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-cyan-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                Case Study 04
              </span>

              <span className="h-px w-10 bg-blue-200" />
            </div>

            <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-[-0.05em] text-slate-950 md:text-7xl">
              Enterprise System
              <br />
              <span className="text-gradient">
                Integration & Delivery
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              End-to-end project coordination covering requirements analysis,
              system integration, stakeholder management, testing,
              troubleshooting and deployment.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {skills.slice(0, 6).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                Overview
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-slate-950">
                Connecting business requirements with technology delivery.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Enterprise system implementation requires more than technical
                configuration. It requires coordination between business
                requirements, users, developers, vendors and project
                stakeholders.
              </p>

              <p>
                My role involved supporting projects across the complete
                delivery lifecycle — from requirements gathering and
                planning through system integration, testing and deployment.
              </p>

              <p>
                The projects involved different enterprise and e-commerce
                technology environments, requiring structured communication,
                technical documentation and coordination across multiple
                parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MY ROLE */}
      <section className="border-y border-slate-200 bg-white section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                My Contribution
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-slate-950">
                Project engineering across the delivery lifecycle.
              </h2>
            </div>

            <div className="grid gap-3">
              {responsibilities.map((responsibility, index) => (
                <div
                  key={responsibility}
                  className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-blue-50/40"
                >
                  <span className="text-sm font-bold text-blue-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm font-medium leading-6 text-slate-700">
                    {responsibility}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY LIFECYCLE */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              Delivery Lifecycle
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-slate-950 md:text-5xl">
              From business need to working solution.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A structured project delivery approach helped keep business,
              technical and implementation activities aligned.
            </p>
          </div>

          <div className="mt-16 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm md:grid-cols-2 lg:grid-cols-5">
            {projectStages.map((stage, index) => (
              <div
                key={stage.number}
                className={`p-8 ${
                  index !== projectStages.length - 1
                    ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <span className="text-xs font-bold text-blue-600">
                  {stage.number}
                </span>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {stage.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT FLOW */}
      <section className="border-y border-slate-200 bg-slate-950 px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
              Conceptual Project Flow
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] md:text-5xl">
              Business → Technology → Delivery.
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              A simplified representation of how project requirements were
              translated into technical implementation and validated before
              deployment.
            </p>
          </div>

          <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-10">
            <div className="grid gap-4 md:grid-cols-7 md:items-center">
              <FlowNode
                title="Business"
                subtitle="Requirements"
              />

              <Arrow />

              <FlowNode
                title="Analysis"
                subtitle="Understand"
              />

              <Arrow />

              <FlowNode
                title="Solution"
                subtitle="Design"
              />

              <Arrow />

              <FlowNode
                title="Integration"
                subtitle="Implement"
              />
            </div>

            <div className="my-8 h-px bg-white/10" />

            <div className="grid gap-4 md:grid-cols-7 md:items-center">
              <FlowNode
                title="SIT"
                subtitle="System Test"
              />

              <Arrow />

              <FlowNode
                title="UAT"
                subtitle="User Test"
              />

              <Arrow />

              <FlowNode
                title="Deployment"
                subtitle="Go-Live"
              />

              <Arrow />

              <FlowNode
                title="Support"
                subtitle="Post-Go-Live"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              Project Deliverables
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Turning project activities into clear deliverables.
            </h2>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((deliverable, index) => (
              <DeliverableCard
                key={deliverable.title}
                number={String(index + 1).padStart(2, "0")}
                title={deliverable.title}
                items={deliverable.items}
              />
            ))}
          </div>
        </div>
      </section>

      {/* STAKEHOLDER MANAGEMENT */}
      <section className="border-y border-slate-200 bg-white section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                Collaboration
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-slate-950">
                Working across technical and business teams.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <CollaborationCard
                title="Customer"
                text="Understand business requirements, clarify expectations and support UAT and implementation."
              />

              <CollaborationCard
                title="Developers"
                text="Translate requirements into technical discussions and coordinate integration issues."
              />

              <CollaborationCard
                title="Vendors"
                text="Coordinate technical dependencies, issue resolution and implementation activities."
              />

              <CollaborationCard
                title="Internal Teams"
                text="Align product, technical and project activities to support successful delivery."
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTING */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              Testing & Troubleshooting
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Validate, investigate, improve.
            </h2>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <TestingCard
              number="01"
              title="SIT"
              text="Validate system functionality and integration between technical components before user testing."
            />

            <TestingCard
              number="02"
              title="UAT"
              text="Support users in validating business workflows and confirming that requirements are met."
            />

            <TestingCard
              number="03"
              title="Root Cause Analysis"
              text="Investigate technical and application issues, identify likely causes and coordinate resolution."
            />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-t border-slate-200 bg-white section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                Skills Applied
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-slate-950">
                A combination of technical and project skills.
              </h2>
            </div>

            <div className="flex flex-wrap content-start gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TAKEAWAYS */}
      <section className="border-t border-slate-200 bg-[#f8fafc] section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                Key Takeaways
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-slate-950">
                What this experience strengthened.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Takeaway
                title="Business Analysis"
                text="Improved ability to understand business requirements and translate them into practical technical workflows."
              />

              <Takeaway
                title="Project Leadership"
                text="Strengthened coordination skills across project activities, stakeholders, vendors and technical teams."
              />

              <Takeaway
                title="System Integration"
                text="Developed broader understanding of how enterprise systems, APIs and business processes work together."
              />

              <Takeaway
                title="Delivery Discipline"
                text="Gained practical experience across planning, testing, documentation, deployment and post-implementation support."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 px-6 py-20 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-blue-100">
              Explore the complete portfolio
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Back to all projects.
            </h2>
          </div>

          <Link
            href="/#projects"
            className="w-fit rounded-full bg-white px-7 py-3.5 text-sm font-bold text-blue-600 transition hover:bg-blue-50"
          >
            Back to Projects →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-slate-400 md:flex-row">
          <span>© 2026 Muhammad Taufiq</span>

          <Link
            href="/"
            className="transition hover:text-blue-600"
          >
            Back to homepage
          </Link>
        </div>
      </footer>
    </main>
  );
}

function FlowNode({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-center">
      <div className="text-sm font-bold text-white">
        {title}
      </div>

      <div className="mt-2 text-xs text-slate-500">
        {subtitle}
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="hidden text-center text-xl text-blue-400 md:block">
      →
    </div>
  );
}

function DeliverableCard({
  number,
  title,
  items,
}: {
  number: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40">
      <span className="text-xs font-bold text-blue-600">
        {number}
      </span>

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 text-sm font-medium text-slate-500"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function CollaborationCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h3 className="font-bold text-slate-900">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-500">
        {text}
      </p>
    </div>
  );
}

function TestingCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40">
      <span className="text-xs font-bold text-blue-600">
        {number}
      </span>

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-500">
        {text}
      </p>
    </div>
  );
}

function Takeaway({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="font-bold text-slate-900">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-500">
        {text}
      </p>
    </div>
  );
}