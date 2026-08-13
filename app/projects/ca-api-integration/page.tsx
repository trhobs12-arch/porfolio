export default function CaApiIntegrationPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
          Project 03 · API Integration
        </p>

        <h1 className="mt-6 text-5xl font-bold tracking-[-0.05em] md:text-6xl">
          Certificate Authority API Integration
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          REST and SOAP API integration testing covering authentication,
          certificate ordering, retrieval, verification, renewal, reissue and
          revocation.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <ProjectDetail title="Focus" value="PKI · Certificate Authority" />
          <ProjectDetail title="APIs" value="REST · SOAP" />
          <ProjectDetail title="Tools" value="Postman · OAuth 2.0" />
          <ProjectDetail title="Role" value="Product Engineer" />
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <h2 className="text-2xl font-bold">Project Overview</h2>

          <p className="mt-5 leading-8 text-slate-400">
            Worked on API integration and testing activities involving
            certificate lifecycle operations. Activities included request
            validation, authentication, certificate ordering, retrieval,
            verification and lifecycle management.
          </p>
        </div>

        <a
          href="/#projects"
          className="mt-12 inline-block text-sm font-bold text-blue-400 hover:text-blue-300"
        >
          ← Back to projects
        </a>
      </div>
    </main>
  );
}

function ProjectDetail({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
        {title}
      </p>

      <p className="mt-3 font-semibold text-slate-200">{value}</p>
    </div>
  );
}