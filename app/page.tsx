import { Navbar, ProcessStep, SectionHeading } from "@/components/portfolio";
import { Hero } from "@/components/hero/hero";

const projects = [
  [
    "01",
    "Certificate Lifecycle Management",
    "Digital Trust / PKI",
    "Certificate lifecycle management across implementation, integration, workflow validation and deployment support.",
    "Implementation, configuration, workflow validation and deployment support.",
    ["PKI", "CLM", "REST API", "SSL/TLS"],
    "/projects/certificate-lifecycle-management",
  ],
  [
    "02",
    "Enterprise S/MIME Integration",
    "Digital Trust / Email Security",
    "Enterprise S/MIME certificate enrollment and workflow support for subscriber onboarding, verification and lifecycle activities.",
    "Enrollment workflows, verification, API integration and lifecycle activities.",
    ["S/MIME", "PKI", "X.509", "API"],
    "/projects/smime-integration",
  ],
  [
    "03",
    "Certificate Authority API Integration",
    "API Integration / PKI",
    "REST and SOAP API testing for certificate ordering, retrieval, verification, renewal, reissue and revocation.",
    "Authentication, request validation, lifecycle testing and technical troubleshooting.",
    ["REST", "SOAP", "OAuth 2.0", "Postman"],
    "/projects/ca-api-integration",
  ],
  [
    "04",
    "Enterprise System Integration",
    "Enterprise Delivery",
    "End-to-end enterprise implementation spanning requirements, integration, testing, troubleshooting and deployment.",
    "Requirements, documentation, stakeholder coordination, SIT, UAT and deployment support.",
    ["API", "SIT", "UAT", "Integration"],
    "/projects/enterprise-system-integration",
  ],
] as const;

export default function Home() {
  return (
    <main className="bg-[#fafafa]">
      <Navbar />

      {/* ============================================================
          HERO
      ============================================================ */}

      <Hero />

      {/* ============================================================
          CAPABILITIES
      ============================================================ */}

      <section id="services" className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <SectionHeading
              eyebrow="Capabilities"
              title="Where technology meets the real problem."
              text="I work across product requirements, technical implementation and customer environments to help move projects from idea to working solution."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Digital Trust",
                  description:
                    "Working with digital certificates, PKI, S/MIME and certificate lifecycle management to support secure digital workflows.",
                  tags: ["PKI", "S/MIME", "CLM", "CA"],
                },
                {
                  number: "02",
                  title: "API & Integration",
                  description:
                    "Connecting products and enterprise systems through REST, SOAP and authentication-based integrations.",
                  tags: ["REST", "SOAP", "OAuth", "Integration"],
                },
                {
                  number: "03",
                  title: "Business Systems",
                  description:
                    "Understanding business workflows and translating requirements into practical system and product solutions.",
                  tags: ["ERP", "E-Commerce", "Inventory", "Workflow"],
                },
                {
                  number: "04",
                  title: "Project Delivery",
                  description:
                    "Supporting projects from requirements and PoC through configuration, testing, deployment and customer handover.",
                  tags: ["PoC", "SIT", "UAT", "Deployment"],
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-600">
                      {item.number}
                    </span>

                    <span className="text-xl text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-blue-500">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-10 text-2xl font-bold tracking-[-0.04em] text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SELECTED WORK
      ============================================================ */}

      <section
        id="work"
        className="bg-slate-950 px-6 py-24 text-white lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                Selected Work
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.05em] md:text-6xl">
                Turning complex systems into workable solutions.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                A selection of work across digital trust, certificate
                infrastructure, APIs and enterprise systems.
              </p>
            </div>

            <span className="text-sm font-medium text-slate-500">
              04 case studies
            </span>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {projects.map(
              ([
                number,
                title,
                category,
                description,
                work,
                technologies,
                href,
              ]) => (
                <article
                  key={number}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-7 transition duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/[0.07] md:p-9"
                >
                  <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-blue-400">
                        {number}
                      </span>

                      <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                        {category}
                      </span>
                    </div>

                    <h3 className="mt-14 max-w-md text-2xl font-bold tracking-[-0.04em] md:text-3xl">
                      {title}
                    </h3>

                    <p className="mt-5 max-w-lg leading-7 text-slate-400">
                      {description}
                    </p>

                    <div className="mt-7">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                        My contribution
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {work}
                      </p>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-9">
                      <a
                        href={href}
                        className="inline-flex items-center gap-2 text-sm font-bold text-white transition group-hover:text-blue-400"
                      >
                        Explore case study
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW I WORK
      ============================================================ */}

      <section
        id="approach"
        className="bg-slate-950 px-6 pb-24 text-white lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="border-t border-white/10 pt-20">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                How I Work
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.05em] md:text-6xl">
                From requirement to working solution.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                A practical delivery approach built around understanding the
                problem, validating the solution and making sure it works in
                the customer environment.
              </p>
            </div>

            <div className="mt-14 grid gap-x-8 md:grid-cols-2 lg:grid-cols-5">
              <ProcessStep
                number="01"
                title="Understand"
                text="Understand business requirements, technical requirements and the existing environment."
              />

              <ProcessStep
                number="02"
                title="Design"
                text="Define the integration, workflow and technical approach."
              />

              <ProcessStep
                number="03"
                title="Implement"
                text="Configure the solution, integrate systems and perform technical testing."
              />

              <ProcessStep
                number="04"
                title="Validate"
                text="Use SIT, UAT and troubleshooting to validate the complete workflow."
              />

              <ProcessStep
                number="05"
                title="Deliver"
                text="Support deployment, documentation, knowledge transfer and handover."
              />
            </div>
          </div>
        </div>
      </section>
{/* ============================================================
    EXPERIENCE
============================================================ */}

<section id="experience" className="px-6 py-24 lg:px-8">
  <div className="mx-auto max-w-6xl">
    <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">

      {/* LEFT — INTRO */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
          Experience
        </p>

        <h2 className="mt-5 text-4xl font-bold tracking-[-0.05em] text-slate-950 md:text-5xl">
          Built from infrastructure to digital trust.
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          A technical journey across network infrastructure, business
          systems, project delivery and enterprise digital trust.
        </p>

        <div className="mt-8 h-px w-20 bg-blue-600" />
      </div>

      {/* RIGHT — EXPERIENCE CARDS */}
      <div className="space-y-5">

        {/* CURRENT ROLE */}
        <article className="group relative overflow-hidden rounded-3xl border border-blue-200 bg-blue-50 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/40 md:p-9">

          <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-blue-100 transition duration-500 group-hover:scale-150" />

          <div className="relative">

            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700">
                  Current Focus
                </p>

                <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-slate-950 md:text-3xl">
                  Project Engineer
                </h3>

                <p className="mt-2 font-medium text-slate-600">
                  Digital Trust & Enterprise Integration
                </p>
              </div>

              <span className="shrink-0 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-blue-700 shadow-sm">
                Current
              </span>
            </div>

            <p className="mt-7 leading-7 text-slate-600">
              Working across digital trust products and enterprise
              integrations, with hands-on exposure to PKI, S/MIME,
              Certificate Lifecycle Management, Certificate Authority APIs,
              product implementation, technical validation and customer-facing
              delivery.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Digital Trust",
                "PKI",
                "S/MIME",
                "CLM",
                "CA API",
                "Product Implementation",
                "Integration",
                "Technical Validation",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        </article>


        {/* PROJECT LEADERSHIP */}
        <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40 md:p-9">

          <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-slate-50 transition duration-500 group-hover:scale-150" />

          <div className="relative">

            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Project Leadership
            </p>

            <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-slate-950 md:text-3xl">
              Project Engineer → Project Team Lead
            </h3>

            <p className="mt-2 font-medium text-slate-600">
              Inventory Management, E-Commerce & ERP Systems
            </p>

            <p className="mt-7 leading-7 text-slate-600">
              Progressed from project engineering into project team leadership,
              working across inventory management, e-commerce and ERP systems.
              Gained experience in business workflows, product integration,
              system implementation, testing and customer delivery.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Project Leadership",
                "Inventory Management",
                "E-Commerce",
                "ERP",
                "API Integration",
                "System Integration",
                "SIT / UAT",
                "Customer Coordination",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        </article>


        {/* NETWORK ENGINEER */}
        <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40 md:p-9">

          <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-slate-50 transition duration-500 group-hover:scale-150" />

          <div className="relative">

            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Earlier Foundation
            </p>

            <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-slate-950 md:text-3xl">
              Network Engineer
            </h3>

            <p className="mt-2 font-medium text-slate-600">
              Network Infrastructure & Technical Operations
            </p>

            <p className="mt-7 leading-7 text-slate-600">
              Built a strong technical foundation across network
              infrastructure, connectivity, security and troubleshooting.
              Gained hands-on exposure to LAN/WAN environments, network
              equipment, firewalls, VPNs and network monitoring.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "LAN / WAN",
                "Network Infrastructure",
                "Routers & Switches",
                "Firewalls",
                "VPN",
                "Network Monitoring",
                "Troubleshooting",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        </article>

      </div>
    </div>
  </div>
</section>

      {/* ============================================================
          ABOUT
      ============================================================ */}

      <section className="border-t border-slate-200 bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading
            eyebrow="About"
            title="Technology, products and customer requirements."
          />

          <div>
            <p className="text-xl font-medium leading-9 tracking-[-0.02em] text-slate-950">
              I work at the intersection of technology, products and customer
              requirements.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              My experience spans digital trust, PKI, certificate management,
              API integration and business systems. I work across requirements,
              implementation, testing and delivery to help turn complex
              technical requirements into practical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          CONTACT
      ============================================================ */}

      <section
        id="contact"
        className="bg-blue-700 px-6 py-24 text-white lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
            Let&apos;s work together
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-bold tracking-[-0.05em] md:text-6xl">
            Have a system, integration or digital trust challenge?
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Let&apos;s talk about the requirements, the technical challenges
            and how we can turn them into a workable solution.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:fiqtau8@gmail.com"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-blue-800 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Let&apos;s Talk
            </a>

            <a
              href="https://www.linkedin.com/in/taufiqramlan"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOOTER
      ============================================================ */}

      <footer className="bg-slate-950 px-6 py-7 text-sm text-slate-400 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 md:flex-row">
          <span>© 2026 Muhammad Taufiq</span>

          <span>
            Project Engineer · Digital Trust · Enterprise Integration
          </span>
        </div>
      </footer>
    </main>
  );
}