import Link from "next/link";

const workflow = [
  {
    number: "01",
    title: "Authentication",
    description:
      "Establish secure API authentication and validate access to the certificate authority services.",
  },
  {
    number: "02",
    title: "Request",
    description:
      "Prepare certificate requests, product information and required subscriber data.",
  },
  {
    number: "03",
    title: "Processing",
    description:
      "Submit requests through REST or SOAP APIs and evaluate responses and processing states.",
  },
  {
    number: "04",
    title: "Lifecycle",
    description:
      "Handle certificate retrieval, verification, renewal, reissue and revocation workflows.",
  },
];

const responsibilities = [
  "Analyzed CA API documentation and integration requirements",
  "Prepared and tested REST API requests",
  "Prepared and tested SOAP API requests",
  "Configured OAuth 2.0 authentication for API access",
  "Tested certificate ordering and certificate retrieval workflows",
  "Tested certificate verification and validation scenarios",
  "Investigated API response codes and integration errors",
  "Validated CSR and certificate-related request parameters",
  "Documented API workflows, test results and technical findings",
  "Coordinated API requirements with developers and PKI teams",
];

const technologies = [
  "REST API",
  "SOAP API",
  "OAuth 2.0",
  "Postman",
  "JSON",
  "XML",
  "CSR",
  "X.509",
  "SSL/TLS",
  "PKI",
];

const apiOperations = [
  {
    title: "Certificate Ordering",
    text: "Submit certificate requests with the required product, CSR and subscriber information.",
  },
  {
    title: "Certificate Retrieval",
    text: "Retrieve issued certificate information and validate the returned certificate data.",
  },
  {
    title: "Verification",
    text: "Validate order and subscriber-related information as part of the certificate workflow.",
  },
  {
    title: "Renewal & Reissue",
    text: "Evaluate certificate renewal and reissue scenarios as part of lifecycle management.",
  },
  {
    title: "Revocation",
    text: "Test certificate revocation workflows and validate API responses.",
  },
  {
    title: "Error Handling",
    text: "Analyze HTTP and application-level errors to identify incorrect parameters or integration issues.",
  },
];

export default function CaApiIntegrationPage() {
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
                Case Study 03
              </span>

              <span className="h-px w-10 bg-blue-200" />
            </div>

            <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-[-0.05em] text-slate-950 md:text-7xl">
              Certificate Authority
              <br />
              <span className="text-gradient">
                API Integration
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              API integration and testing for certificate lifecycle operations
              using REST, SOAP and OAuth-based authentication.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {technologies.slice(0, 6).map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600"
                >
                  {technology}
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
                Connecting applications with certificate authority services.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Certificate Authority APIs allow applications and enterprise
                platforms to interact programmatically with certificate
                services instead of relying entirely on manual operations.
              </p>

              <p>
                My involvement focused on understanding the CA API
                capabilities, testing integration scenarios and validating
                certificate lifecycle operations through REST and SOAP
                interfaces.
              </p>

              <p>
                The work involved authentication, request preparation,
                certificate ordering, verification, retrieval, renewal,
                reissue and revocation scenarios, together with analysis of
                API responses and integration errors.
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
                API testing, integration and troubleshooting.
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

      {/* WORKFLOW */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              Integration Workflow
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-slate-950 md:text-5xl">
              From authentication to certificate lifecycle.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A simplified representation of the integration approach used
              during API testing and technical validation.
            </p>
          </div>

          <div className="mt-16 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step, index) => (
              <div
                key={step.number}
                className={`p-8 ${
                  index !== workflow.length - 1
                    ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <span className="text-xs font-bold text-blue-600">
                  {step.number}
                </span>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="border-y border-slate-200 bg-slate-950 px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
              Conceptual Architecture
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] md:text-5xl">
              Application → API → Certificate Authority.
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Simplified architecture showing the relationship between an
              enterprise application, API integration layer and certificate
              authority services.
            </p>
          </div>

          <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-10">
            <div className="grid gap-4 md:grid-cols-5 md:items-center">
              <ArchitectureNode
                title="Enterprise"
                subtitle="Application"
              />

              <Arrow />

              <ArchitectureNode
                title="Integration"
                subtitle="REST / SOAP"
              />

              <Arrow />

              <ArchitectureNode
                title="Certificate Authority"
                subtitle="CA Services"
              />
            </div>

            <div className="my-8 h-px bg-white/10" />

            <div className="grid gap-4 md:grid-cols-5 md:items-center">
              <ArchitectureNode
                title="Authentication"
                subtitle="OAuth 2.0"
              />

              <Arrow />

              <ArchitectureNode
                title="Request"
                subtitle="CSR / Product"
              />

              <Arrow />

              <ArchitectureNode
                title="Certificate"
                subtitle="Issue / Manage"
              />
            </div>
          </div>
        </div>
      </section>

      {/* API OPERATIONS */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              API Operations
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Certificate lifecycle operations.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The API testing covered multiple stages of the certificate
              lifecycle and different integration scenarios.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {apiOperations.map((operation, index) => (
              <OperationCard
                key={operation.title}
                number={String(index + 1).padStart(2, "0")}
                title={operation.title}
                text={operation.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* REST VS SOAP */}
      <section className="border-y border-slate-200 bg-white section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              Integration Interfaces
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-slate-950 md:text-5xl">
              REST and SOAP integration.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <InterfaceCard
              label="REST API"
              title="Modern API-based integration"
              description="Tested HTTP-based API workflows using structured JSON requests and responses, authentication and product-specific parameters."
              items={[
                "OAuth 2.0 authentication",
                "JSON request / response",
                "HTTP status codes",
                "Certificate lifecycle operations",
              ]}
            />

            <InterfaceCard
              label="SOAP API"
              title="Service-oriented integration"
              description="Tested XML-based SOAP services and evaluated request structures, parameters, response messages and application-level errors."
              items={[
                "XML request / response",
                "WSDL-based services",
                "SOAP operations",
                "Application error handling",
              ]}
            />
          </div>
        </div>
      </section>

      {/* TROUBLESHOOTING */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                Troubleshooting
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-slate-950">
                Turning API errors into technical findings.
              </h2>
            </div>

            <div className="space-y-5">
              <TroubleshootingItem
                title="Request Validation"
                text="Reviewed request structure, required parameters, CSR content and certificate product configuration when requests were rejected."
              />

              <TroubleshootingItem
                title="Authentication"
                text="Validated authentication configuration and access requirements when API calls returned authorization-related responses."
              />

              <TroubleshootingItem
                title="Application Errors"
                text="Analyzed application-level error codes and API responses to identify incorrect values, unsupported configurations and invalid requests."
              />

              <TroubleshootingItem
                title="Documentation Alignment"
                text="Compared API behavior against available documentation and validated request structures through controlled testing."
              />
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="border-t border-slate-200 bg-white section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                Technology
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-slate-950">
                Tools and technologies.
              </h2>
            </div>

            <div className="flex flex-wrap content-start gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-600"
                >
                  {technology}
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
                What this project strengthened.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Takeaway
                title="API Engineering"
                text="Strengthened practical understanding of REST and SOAP API integration and testing."
              />

              <Takeaway
                title="PKI Understanding"
                text="Deepened understanding of how applications interact with certificate authority services."
              />

              <Takeaway
                title="Troubleshooting"
                text="Improved ability to analyze API errors, request validation issues and configuration problems."
              />

              <Takeaway
                title="Technical Documentation"
                text="Improved ability to translate API behavior and testing findings into practical technical documentation."
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
              Continue exploring
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              View the other projects.
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

function ArchitectureNode({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-center">
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

function OperationCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40">
      <span className="text-xs font-bold text-blue-600">
        {number}
      </span>

      <h3 className="mt-6 text-lg font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-500">
        {text}
      </p>
    </div>
  );
}

function InterfaceCard({
  label,
  title,
  description,
  items,
}: {
  label: string;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
      <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600">
        {label}
      </span>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-7 space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 text-sm font-medium text-slate-600"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function TroubleshootingItem({
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