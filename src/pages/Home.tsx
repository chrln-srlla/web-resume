import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="page-section grid items-center gap-10 md:grid-cols-2 -mt-5">
      <div className="space-y-6">
        <p className="section-kicker -mt-5">Online resume builder</p>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          Build a clean, printable resume.
        </h1>
        <p className="max-w-prose text-white/70">
          Fill your details in a few steps, then print to PDF.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link to="/personal-information" className="btn-primary sm:w-auto">
            Get started
          </Link>
          <Link to="/account" className="btn-secondary w-full sm:w-auto">
            Preview / Print
          </Link>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(255,255,255,0.08),transparent_70%)]" />
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-white p-5 text-black md:p-6">
              <div className="flex items-start justify-between gap-4 border-b border-zinc-200 pb-4">
                <div className="min-w-0">
                  <div className="text-2xl font-bold uppercase tracking-tight md:text-3xl">
                    Full Name
                  </div>
                  <div className="mt-1 text-sm font-semibold text-zinc-600">
                    Frontend Developer
                  </div>
                  <div className="mt-3 space-y-1 text-[0.8rem] text-zinc-600">
                    <div>email@example.com • +63 9XX XXX XXXX</div>
                    <div>github.com/username • linkedin.com/in/username</div>
                    <div>City, Country</div>
                  </div>
                </div>
                <div className="shrink-0">
                  <div className="h-14 w-14 rounded-xl border border-zinc-200 bg-zinc-100" />
                </div>
              </div>

              <div className="mt-4">
                <div className="inline-flex items-center bg-zinc-100 px-2 py-1 text-xs font-bold tracking-wide text-zinc-800">
                  SKILLS
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["React", "TypeScript", "Tailwind", "Git", "REST APIs"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="rounded border border-zinc-200 px-2 py-1 text-[0.8rem] text-zinc-700"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="mt-6 grid gap-5">
                <div>
                  <div className="inline-flex items-center bg-zinc-100 px-2 py-1 text-xs font-bold tracking-wide text-zinc-800">
                    SUMMARY
                  </div>
                  <div className="mt-3 space-y-2 text-[0.85rem] text-zinc-700">
                    <div className="h-2 w-11/12 rounded bg-zinc-200" />
                    <div className="h-2 w-10/12 rounded bg-zinc-200" />
                    <div className="h-2 w-9/12 rounded bg-zinc-200" />
                  </div>
                </div>

                <div>
                  <div className="inline-flex items-center bg-zinc-100 px-2 py-1 text-xs font-bold tracking-wide text-zinc-800">
                    PROJECTS
                  </div>
                  <div className="mt-3 space-y-2 text-[0.85rem] text-zinc-700">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                      <div className="h-2 w-9/12 rounded bg-zinc-200" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                      <div className="h-2 w-8/12 rounded bg-zinc-200" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                      <div className="h-2 w-10/12 rounded bg-zinc-200" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
