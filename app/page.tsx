import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Certificate Lifecycle Management",
    category: "DIGITAL TRUST / PKI",
    description:
      "Enterprise certificate lifecycle management covering implementation, integration, workflow validation and deployment support.",
    technologies: ["PKI", "CLM", "REST API", "SSL/TLS"],
    href: "/projects/certificate-lifecycle-management",
  },
  {
    number: "02",
    title: "Enterprise S/MIME Integration",
    category: "DIGITAL TRUST / EMAIL SECURITY",
    description:
      "Enterprise S/MIME enrollment and certificate workflows covering subscriber onboarding, verification and certificate lifecycle activities.",
    technologies: ["S/MIME", "PKI", "X.509", "API"],
    href: "/projects/smime-integration",
  },
  {
    number: "03",
    title: "Certificate Authority API Integration",
    category: "API INTEGRATION / PKI",
    description:
      "REST and SOAP API integration testing covering authentication, certificate ordering, retrieval, verification, renewal, reissue and revocation.",
    technologies: ["REST", "SOAP", "OAuth 2.0", "Postman"],
    href: "/projects/ca-api-integration",
  },
  {
    number: "04",
    title: "Enterprise System Integration",
    category: "PROJECT ENGINEERING",
    description:
      "End-to-end system implementation covering requirements gathering, project planning, integration, SIT, UAT, troubleshooting and deployment.",
    technologies: ["API", "SIT", "UAT", "Business Analysis"],
    href: "/projects/enterprise-system-integration",
  },
];

const experiences = [
  {
    period: "JUN 2026 — PRESENT",
    role: "Product Engineer",
    company: "MSC Trustgate.com Sdn Bhd",
    category: "Digital Trust · PKI · CLM · API Integration",
    description:
      "Supporting implementation, integration and deployment of digital trust solutions while working closely with customers, developers, PKI engineers, DevOps and system analysts.",
    points: [
      "Product implementation, installation, configuration and deployment",
      "REST and SOAP API integration and technical testing",
      "Requirements gathering and workflow analysis",
      "Customer onboarding, UAT and deployment support",
      "Troubleshooting and root cause analysis",
      "Product demonstrations, documentation and user training",
    ],
  },
  {
    period: "JAN 2025 — JUN 2026",
    role: "Project Engineer",
    company: "Gross Synergy Sdn Bhd",
    category: "System Integration · Business Analysis · Project Delivery",
    description:
      "Led and supported enterprise implementation projects involving system integration, APIs, e-commerce platforms and business workflows.",
    points: [
      "Led project activities from initiation through implementation",
      "Facilitated requirements gathering and stakeholder meetings",
      "Prepared URS, BRD, workflows, mock-ups and technical documents",
      "Coordinated developers, vendors and customer stakeholders",
      "Managed SIT and UAT activities",
      "Performed troubleshooting and root cause analysis",
      "Prepared project schedules and Gantt charts",
    ],
  },
  {
    period: "JUN 2024 — DEC 2024",
    role: "Network Engineer",
    company: "REDtone Engineering and Network Services Sdn Bhd",
    category: "Infrastructure · VMware · Network Monitoring · IT Support",
    description:
      "Supported server infrastructure, network monitoring, enterprise IT operations and user support activities.",
    points: [
      "Managed server infrastructure using VMware vSphere",
      "Monitored networks using PRTG Network Monitor",
      "Supported IP, DNS and external connectivity",
      "Performed server software and security patch updates",
      "Managed Active Directory user accounts",
      "Prepared SLA, incident and preventive maintenance documentation",
      "Coordinated technical matters with vendors",
    ],
  },
  {
    period: "MAR 2024 — MAY 2024",
    role: "IT Trainee",
    company: "Agensi Kaunseling dan Pengurusan Kredit (AKPK)",
    category: "IT Operations · Technical Support",
    description:
      "Gained practical exposure to enterprise IT operations, technical support and organizational IT processes.",
    points: [
      "Supported day-to-day IT operations",
      "Assisted with technical troubleshooting",
      "Supported internal users and IT activities",
      "Gained exposure to enterprise IT processes",
    ],
  },
];

const skillGroups = [
  {
    title: "Digital Trust",
    description:
      "Practical experience supporting certificate-based security and digital trust solutions.",
    skills: ["PKI", "SSL/TLS", "S/MIME", "X.509", "CLM"],
  },
  {
    title: "Integration",
    description:
      "Integration and testing across REST, SOAP and enterprise application environments.",
    skills: ["REST API", "SOAP", "OAuth 2.0", "Postman", "JSON", "XML"],
  },
  {
    title: "Project Delivery",
    description:
      "Experience coordinating requirements, stakeholders, testing and implementation activities.",
    skills: ["BRD", "URS", "SIT", "UAT", "Gantt", "RCA"],
  },
  {
    title: "Infrastructure",
    description:
      "Foundation in enterprise infrastructure, server and network administration.",
    skills: ["VMware", "DNS", "Active Directory", "PRTG", "Windows Server"],
  },
];

const certifications = [
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft / APU Certified Cloud Administrator",
    year: "2024 — 2025",
  },
  {
    title: "Microsoft Azure Administrator",
    issuer: "AZ-104 Training",
    year: "2024 — 2025",
  },
  {
    title: "Linux for Web Server",
    issuer: "Training.My",
    year: "DEC 2024",
  },
  {
    title: "Workplace Psychological First Aid",
    issuer: "NIOSH",
    year: "OCT 2024",
  },
  {
    title: "Mental Health Awareness Course",
    issuer: "NIOSH",
    year: "OCT 2024",
  },
  {
    title: "Anti-Sexual Harassment Act 2022",
    issuer: "Universiti Teknologi Malaysia",
    year: "2023",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="text-xl font-bold tracking-[-0.05em] text-slate-950"
          >
            TAUFIQ<span className="text-blue-600">.</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <a
            href="mailto:fiqtau8@gmail.com"
            className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Let&apos;s Talk
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-100/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-32">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                Product Engineer · Digital Trust
              </span>
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.06em] text-slate-950 md:text-7xl">
              Turning technical
              <br />
              <span className="text-blue-600">complexity</span> into
              <br />
              practical solutions.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              I&apos;m Muhammad Taufiq, a Product Engineer focused on digital
              trust, certificate management, API integration and enterprise
              technology implementation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Explore My Work →
              </a>

              <a
                href="mailto:fiqtau8@gmail.com"
                className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
              >
                Get In Touch
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 border-t border-slate-200 pt-8">
              <Stat value="4+" label="Years Experience" />
              <Stat value="4" label="Featured Projects" />
              <Stat value="API" label="Integration Focus" />
            </div>
          </div>

          <TechnicalVisual />
        </div>
      </section>

      {/* ABOUT */}
  {/* ABOUT */}
<section id="about" className="section-padding bg-[#f8fafc]">
  <div className="mx-auto max-w-7xl">
    <SectionHeading
      eyebrow="About Me"
      title="A technical professional who connects people, products and technology."
      description="My experience spans infrastructure, enterprise system integration, project engineering and digital trust."
    />

    <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
      {/* PROFILE */}
      <div className="relative mx-auto w-full max-w-md">
        <div className="absolute -inset-4 rounded-[40px] bg-blue-100/60 blur-2xl" />

        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-xl">
          <div className="aspect-[4/5] overflow-hidden rounded-[24px] bg-slate-100">
            <img
              src="/images/profile/taufiq.jpg"
              alt="Muhammad Taufiq"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="absolute -bottom-5 -right-5 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
            Based in
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-800">
            Selangor, Malaysia
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div>
        <p className="text-lg leading-8 text-slate-600">
          I&apos;m a Product Engineer with experience across IT
          infrastructure, enterprise system integration and digital trust
          technologies.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          My current work focuses on certificate-based security solutions,
          Certificate Lifecycle Management, S/MIME and API integration. I
          work across technical and business teams to translate requirements
          into practical solutions.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          I enjoy understanding how systems work, troubleshooting complex
          problems and helping customers and internal teams move from
          requirements to implementation.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <InfoCard
            number="01"
            title="Product Engineering"
            text="Implementation, configuration, integration and technical support."
          />

          <InfoCard
            number="02"
            title="System Integration"
            text="APIs, enterprise platforms, requirements and technical workflows."
          />

          <InfoCard
            number="03"
            title="Digital Trust"
            text="PKI, SSL/TLS, S/MIME and Certificate Lifecycle Management."
          />

          <InfoCard
            number="04"
            title="Project Delivery"
            text="Stakeholder coordination, SIT, UAT, troubleshooting and deployment."
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* EXPERIENCE */}
      <section id="experience" className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Career Journey"
            title="Experience across infrastructure, integration and digital trust."
            description="A progression from IT infrastructure and enterprise integration to product engineering and digital trust solutions."
          />

          <div className="mt-16">
            {experiences.map((experience) => (
              <ExperienceItem
                key={`${experience.company}-${experience.period}`}
                experience={experience}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section-padding bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Technical Capabilities"
            title="Skills built through real project delivery."
            description="A combination of product, integration, project and infrastructure capabilities."
          />

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {skillGroups.map((group, index) => (
              <SkillCard
                key={group.title}
                group={group}
                number={String(index + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Selected Projects"
            title="A closer look at the work behind the experience."
            description="Selected case studies covering digital trust, PKI, API integration and enterprise system implementation."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section-padding bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Training & Certifications"
            title="Continuous learning beyond the workplace."
            description="Selected technical training and professional development."
          />

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification) => (
              <div
                key={certification.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                    Certification
                  </span>

                  <span className="text-xs font-medium text-slate-400">
                    {certification.year}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-950">
                  {certification.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {certification.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* EDUCATION & LEADERSHIP */}
<section
  id="education"
  className="section-padding bg-white"
>
  <div className="mx-auto max-w-7xl">
    <SectionHeading
      eyebrow="Education & Beyond"
      title="Learning, leadership and experiences beyond the workplace."
      description="Academic, leadership and international experiences that helped shape my approach to technology and collaboration."
    />

    <div className="mt-16 grid gap-6 lg:grid-cols-3">
      {/* EDUCATION */}
      <EducationCard
        number="01"
        label="Education"
        title="Universiti Tun Hussein Onn Malaysia"
        subtitle="Bachelor's Degree"
        year="2020 — 2024"
        description="Built a foundation in technology, problem solving and project-based collaboration through academic work and university activities."
      />

      {/* LEADERSHIP */}
      <EducationCard
        number="02"
        label="Leadership"
        title="Vice President"
        subtitle="Kelab Sukarelawan UTHM"
        year="2021 / 2022"
        description="Supported the president in club activities, events and meetings while helping coordinate committee activities and member engagement."
      />

      {/* INTERNATIONAL */}
      <EducationCard
        number="03"
        label="International Experience"
        title="International Mobility Programme"
        subtitle="Universitas Pakuan × UTHM"
        year="2024"
        description="Participated in a cultural exchange programme, supported international students as a buddy and joined an industrial visit to Semen Tiga Roda."
      />
    </div>

    {/* ACTIVITIES */}
    <div className="mt-6 rounded-3xl border border-slate-200 bg-[#f8fafc] p-8 md:p-10">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            Selected Activities
          </p>

          <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-slate-950">
            Community & industry involvement
          </h3>

          <p className="mt-4 leading-7 text-slate-500">
            Selected activities demonstrating involvement beyond technical
            work and academic responsibilities.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <ActivityItem
            title="International Mangrove Tree Planting Programme"
            year="2019"
          />

          <ActivityItem
            title="Bulan Sukarelawan Selangor Lestari"
            year="2019"
          />

          <ActivityItem
            title="Youth Ambassador Campaign Roadshow"
            year="2021"
          />

          <ActivityItem
            title="FPTP Technopreneurship Week"
            year="2021"
          />
        </div>
      </div>
    </div>
  </div>
</section>








      {/* CONTACT */}
      <section id="contact" className="bg-slate-950 px-6 py-24 text-white lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
                Contact
              </p>

              <h2 className="mt-6 max-w-3xl text-4xl font-bold tracking-[-0.05em] md:text-6xl">
                Let&apos;s build something useful.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                Interested in digital trust, enterprise integration,
                technology implementation or simply want to connect?
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:fiqtau8@gmail.com"
                  className="rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-blue-500"
                >
                  Email Me
                </a>

<a
  href="https://github.com/trhobs12-arch/porfolio"
  target="_blank"
  rel="noreferrer"
  className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-bold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
>
  GitHub ↗
</a>


                

                <a
                  href="https://www.linkedin.com/in/taufiqramlan"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-bold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
                  
                >
                  LinkedIn ↗

                </a>
              </div>
            </div>

            <div className="grid gap-4">
             <ContactItem label="Email" value="fiqtau8@gmail.com" />
<ContactItem label="LinkedIn" value="linkedin.com/in/taufiqramlan" />
<ContactItem label="GitHub" value="github.com/trhobs12-arch/porfolio" />
<ContactItem label="Location" value="Kajang, Selangor" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8 text-slate-500 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm md:flex-row">
          <span>© 2026 Muhammad Taufiq</span>
          <span>Product Engineer · Digital Trust · Enterprise Integration</span>
        </div>
      </footer>
    </main>
  );
}

/* ============================================================
   COMPONENTS
============================================================ */

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm font-semibold text-slate-500 transition hover:text-blue-600"
    >
      {children}
    </a>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <p className="text-2xl font-bold tracking-tight text-slate-950">
        {value}
      </p>
      <p className="mt-1 text-xs font-medium text-slate-400">{label}</p>
    </div>
  );
}

function TechnicalVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="absolute inset-8 rounded-full border border-blue-100" />
      <div className="absolute inset-20 rounded-full border border-blue-100" />
      <div className="absolute inset-32 rounded-full border border-cyan-100" />

      <div className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 bg-blue-100" />
      <div className="absolute left-1/2 top-1/2 h-[72%] w-px -translate-y-1/2 bg-blue-100" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-48 w-48 flex-col items-center justify-center rounded-[32px] border border-blue-200 bg-white shadow-2xl shadow-blue-100">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600">
            ◆
          </div>

          <span className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-900">
            Digital Trust
          </span>

          <span className="mt-1 text-[11px] text-slate-400">
            Secure Technology
          </span>
        </div>
      </div>

      <VisualNode position="left-[3%] top-[17%]" title="PKI" subtitle="Certificates" />
      <VisualNode position="right-[3%] top-[17%]" title="API" subtitle="Integration" />
      <VisualNode position="left-[10%] bottom-[15%]" title="CLM" subtitle="Lifecycle" />
      <VisualNode position="right-[10%] bottom-[15%]" title="Enterprise" subtitle="Systems" />
    </div>
  );
}

function VisualNode({
  position,
  title,
  subtitle,
}: {
  position: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className={`absolute ${position}`}>
      <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-lg">
        <p className="text-sm font-bold text-slate-900">{title}</p>
        <p className="mt-1 text-[11px] text-slate-400">{subtitle}</p>
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
        {eyebrow}
      </p>

      <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.05em] text-slate-950 md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}

function InfoCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      <span className="text-xs font-bold text-blue-600">{number}</span>

      <h3 className="mt-7 text-2xl font-bold tracking-[-0.03em] text-slate-950">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-500">{text}</p>
    </div>
  );
}

function ExperienceItem({
  experience,
}: {
  experience: {
    period: string;
    role: string;
    company: string;
    category: string;
    description: string;
    points: string[];
  };
}) {
  return (
    <div className="relative border-l border-slate-200 pb-14 pl-8 last:pb-0 md:pl-12">
      <div className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-4 border-white bg-blue-600" />

      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-blue-600">
            {experience.period}
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            {experience.category}
          </p>

          <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-slate-950">
            {experience.role}
          </h3>

          <p className="mt-1 font-semibold text-slate-700">
            {experience.company}
          </p>

          <p className="mt-5 max-w-3xl leading-7 text-slate-600">
            {experience.description}
          </p>

          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {experience.points.map((point) => (
              <div
                key={point}
                className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                <p className="text-sm leading-6 text-slate-600">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillCard({
  group,
  number,
}: {
  group: {
    title: string;
    description: string;
    skills: string[];
  };
  number: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-blue-600">{number}</span>
        <span className="h-2 w-2 rounded-full bg-blue-600" />
      </div>

      <h3 className="mt-7 text-2xl font-bold tracking-[-0.03em] text-slate-950">
        {group.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-500">
        {group.description}
      </p>

      <div className="mt-7 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
}: {
  project: {
    number: string;
    title: string;
    category: string;
    description: string;
    technologies: string[];
    href: string;
  };
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl md:p-10">
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-50 opacity-0 blur-3xl transition group-hover:opacity-100" />

      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-bold text-blue-600">
            {project.number}
          </span>

          <span className="text-right text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            {project.category}
          </span>
        </div>

        <h3 className="mt-12 text-3xl font-bold tracking-[-0.04em] text-slate-950">
          {project.title}
        </h3>

        <p className="mt-5 max-w-xl leading-7 text-slate-600">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
            >
              {technology}
            </span>
          ))}
        </div>

        <Link
          href={project.href}
          className="mt-10 inline-block text-sm font-bold text-blue-600 transition group-hover:translate-x-1"
        >
          View case study →
        </Link>
      </div>
    </article>
  );
}

function ContactItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold text-slate-200">{value}</p>
    </div>
  );
}
function EducationCard({
  number,
  label,
  title,
  subtitle,
  year,
  description,
}: {
  number: string;
  label: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
}) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-blue-600">
          {number}
        </span>

        <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-600">
          {label}
        </span>
      </div>

      <p className="mt-8 text-xs font-bold tracking-[0.15em] text-slate-400">
        {year}
      </p>

      <h3 className="mt-4 text-2xl font-bold leading-tight tracking-[-0.03em] text-slate-950">
        {title}
      </h3>

      <p className="mt-2 font-semibold text-slate-700">
        {subtitle}
      </p>

      <p className="mt-5 text-sm leading-7 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function ActivityItem({
  title,
  year,
}: {
  title: string;
  year: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200">
      <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-600" />

      <div>
        <p className="text-sm font-semibold leading-6 text-slate-700">
          {title}
        </p>

        <p className="mt-1 text-xs font-medium text-slate-400">
          {year}
        </p>
      </div>
    </div>
  );
}

