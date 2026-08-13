export default function SmimeIntegrationPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
          Project 02 · Digital Trust
        </p>

        <h1 className="mt-6 text-5xl font-bold tracking-[-0.05em] md:text-6xl">
          Enterprise S/MIME Integration
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          Enterprise S/MIME certificate enrollment and integration workflow
          covering subscriber onboarding, identity verification, certificate
          issuance and lifecycle management.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <ProjectDetail title="Focus" value="S/MIME · PKI · Email Security" />
          <ProjectDetail title="Integration" value="REST / SOAP APIs" />
          <ProjectDetail title="Activities" value="Testing · Validation · UAT" />
          <ProjectDetail title="Role" value="Product Engineer" />
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <h2 className="text-2xl font-bold">Project Overview</h2>

          <p className="mt-5 leading-8 text-slate-400">
            Supported the analysis and implementation of enterprise S/MIME
            certificate workflows, including certificate ordering,
            subscriber verification, API integration and lifecycle activities.
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