const heroHighlights = [
  { value: "3", label: "Years designing rich user flows" },
  { value: "150+", label: "Components delivered across platforms" },
  { value: "4", label: "Design systems launched end-to-end" },
];

const projects = [
  {
    title: "Aurora Workbench",
    blurb:
      "Unified React + Angular design system powering enterprise analytics dashboards with real-time theming and accessibility baked in.",
    metrics: [
      "Cut delivery time for new modules by 43%",
      "Reduced escaped UI defects by 68%",
    ],
    stack: ["React 19", "Angular 17", "Storybook", "Radix UI", "Vite"],
  },
  {
    title: "Pulse Customer Portal",
    blurb:
      "Responsive customer portal modernized from AngularJS into React, introducing offline-ready experiences and granular analytics pipelines.",
    metrics: [
      "Lifted activation rate by 21%",
      "Optimized bundle size to <190kb",
    ],
    stack: ["Next.js 15", "Angular Elements", "TanStack Query", "Tailwind"],
  },
  {
    title: "Canvas Experimentation Hub",
    blurb:
      "Cross-framework experimentation suite enabling product squads to ship feature flags, A/B tests, and UI experiments without code merges.",
    metrics: [
      "Launched 60+ experiments in first quarter",
      "Integrated with LaunchDarkly, Optimizely, and custom SDKs",
    ],
    stack: ["React Server Components", "Angular CDK", "Nx", "Vitest"],
  },
];

const experiences = [
  {
    period: "2023 — Present",
    role: "Senior Frontend Engineer",
    company: "Northwind Labs",
    summary:
      "Leading the platform squad responsible for the cross-framework experience layer that enables React and Angular teams to ship cohesive products.",
    bullets: [
      "Architected a federated module pipeline so Angular widgets can hydrate inside Next.js.",
      "Introduced visual regression guardrails using Storybook and Chromatic.",
      "Mentored 6 engineers transitioning from Angular to React Server Components.",
    ],
  },
  {
    period: "2021 — 2023",
    role: "Frontend Engineer",
    company: "Fluidly",
    summary:
      "Scaled a fintech dashboard from MVP to full analytics studio while evolving Angular 12 foundations and introducing hybrid React experiences.",
    bullets: [
      "Refactored legacy Angular zones to signal-based change detection for 30% faster renders.",
      "Delivered a React-driven reporting surface powering $12M annual transaction volume.",
      "Partnered with design to establish accessibility standards and governance.",
    ],
  },
];

const toolbelt = [
  {
    title: "Frameworks",
    items: ["React 19", "Next.js App Router", "Angular 17", "Angular Elements"],
  },
  {
    title: "Systems & Styling",
    items: ["Storybook", "Tailwind CSS", "CSS Variables", "Radix Primitives"],
  },
  {
    title: "Tooling & Quality",
    items: ["Nx Workspaces", "Vitest", "Playwright", "Chromatic", "Lighthouse CI"],
  },
];

export default function Home() {
  return (
    <div className="relative mx-auto min-h-screen max-w-6xl px-6 py-20 md:px-10 lg:px-16">
      <div className="absolute inset-0 -z-10 mx-auto max-w-6xl opacity-70 blur-3xl">
        <div className="h-full rounded-full bg-gradient-to-br from-sky-500/25 via-purple-500/15 to-emerald-500/20" />
      </div>

      <header className="flex flex-col gap-12">
        <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-300/40 bg-sky-400/10 px-4 py-1 text-sm font-medium text-sky-200">
            Frontend Developer · React & Angular
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-50 md:text-6xl">
            Hey, I&apos;m Avery Collins.
          </h1>
          <p className="max-w-2xl text-lg text-slate-200/90 md:text-xl">
            I design and ship product experiences where React precision meets
            Angular structure. With three years translating product strategy into
            production-ready interfaces, I thrive at the seams of design systems,
            accessibility, and high-velocity delivery.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hello@averybuilds.dev"
              className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Schedule a product deep-dive →
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-300/50 hover:text-sky-100"
            >
              Browse shipped work
            </a>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {heroHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-slate-950/40 p-6 shadow-2xl shadow-sky-500/10"
            >
              <p className="text-4xl font-semibold text-slate-50">{item.value}</p>
              <p className="mt-2 text-sm text-slate-300/80">{item.label}</p>
            </div>
          ))}
        </div>
      </header>

      <main className="mt-24 space-y-28">
        <section
          id="projects"
          className="space-y-10 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur"
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">
              Product work shipped with purpose
            </h2>
            <p className="max-w-2xl text-base text-slate-200/85 md:text-lg">
              A snapshot of cross-framework initiatives where I brought React and
              Angular together to unlock delivery speed without sacrificing craft.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-purple-500/10"
              >
                <div>
                  <h3 className="text-xl font-semibold text-slate-50">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300/90">{project.blurb}</p>
                </div>
                <ul className="space-y-2 text-sm text-slate-200/90">
                  {project.metrics.map((metric) => (
                    <li key={metric} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-200/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="space-y-10 rounded-3xl border border-white/10 bg-slate-950/40 p-10"
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">
              Experience shaping teams & platforms
            </h2>
            <p className="max-w-2xl text-base text-slate-200/85 md:text-lg">
              From multi-tenant dashboards to design systems at scale, I focus on
              building healthy workflows for the engineers and designers around me.
            </p>
          </div>
          <div className="space-y-8">
            {experiences.map((experience) => (
              <article
                key={experience.company}
                className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-[minmax(180px,220px)_1fr]"
              >
                <div>
                  <p className="text-sm uppercase tracking-wide text-slate-300/70">
                    {experience.period}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-100">
                    {experience.role}
                  </h3>
                  <p className="text-sm text-slate-400">{experience.company}</p>
                </div>
                <div className="space-y-3 text-sm text-slate-200/90">
                  <p>{experience.summary}</p>
                  <ul className="space-y-2">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="tooling"
          className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur"
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">
              Toolbelt & delivery principles
            </h2>
            <p className="max-w-2xl text-base text-slate-200/85 md:text-lg">
              I operate best where strong system thinking meets experimentation —
              pairing robust testing with product-first iteration loops.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {toolbelt.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-100">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-200/80">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-sky-400/30 bg-sky-400/5 p-6 text-sm text-sky-100">
            <p>
              When React and Angular live side-by-side, I rely on Nx-managed
              workspaces, Storybook-driven contracts, and typed design tokens to
              keep the seams invisible.
            </p>
          </div>
        </section>

        <section
          id="angular-lab"
          className="space-y-6 rounded-3xl border border-sky-400/40 bg-slate-950/40 p-10 shadow-2xl shadow-sky-500/20"
        >
          <div className="flex flex-col gap-2">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/60 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-200">
              Angular Insight Lab
            </span>
            <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">
              Weekly focus planner powered by Angular
            </h2>
            <p className="max-w-3xl text-base text-slate-200/85 md:text-lg">
              An interactive Angular micro-app I use to balance delivery, pairing,
              and experimentation. Embedded here to showcase the hybrid workflows I
              build between React shells and Angular feature pods.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-2">
            <iframe
              src="/angular/"
              title="Avery Collins Angular Focus Planner"
              className="h-[480px] w-full rounded-[20px] border-0 bg-slate-950"
              loading="lazy"
            />
          </div>
        </section>
      </main>

      <footer className="mt-24 flex flex-col items-start gap-4 border-t border-white/10 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Avery Collins. Crafted in React & Angular.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:hello@averybuilds.dev"
            className="transition hover:text-sky-200"
          >
            hello@averybuilds.dev
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-sky-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-sky-200"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
