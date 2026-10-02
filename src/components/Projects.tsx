export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-zinc-800/60 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Personal projects
          </h2>
        </div>

        <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/20 p-8 md:p-12">
          <p className="text-xl font-medium text-white">
            Something new is coming.
          </p>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
            I'm currently working on my first personal projects to explore
            new technologies and continue improving my development skills.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "React", "Tailwind CSS"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-zinc-700 px-3 py-1.5 text-sm text-zinc-400"
                >
                  {technology}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}