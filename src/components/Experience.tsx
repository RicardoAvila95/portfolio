export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[var(--border)] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
            Experience
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Professional experience
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <div className="text-sm text-[var(--muted)]">
            Jun 2022 — Jun 2026
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)]">
              Software Engineer
            </h3>

            <p className="mt-1 text-[var(--muted)]">
              Blue Room Innovation
            </p>

            <ul className="mt-6 space-y-3 text-[var(--muted)]">
              <li>
                • Developed and maintained web and mobile applications using
                TypeScript, React and React Native.
              </li>

              <li>
                • Developed REST APIs and backend services with Node.js and
                TypeScript.
              </li>

              <li>
                • Worked with MongoDB for application data and queries.
              </li>

              <li>
                • Participated in CI/CD processes and mobile application
                releases for Android and iOS.
              </li>

              <li>
                • Worked in an Agile/Scrum environment with cross-functional
                teams.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
