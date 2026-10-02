const skills = {
  Frontend: ["React", "React Native", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  Backend: ["Node.js", "Express", "REST APIs", "MongoDB", "Python", "Moleculer", "Redis"],
  Tools: ["Git", "Docker", "RabbitMQ", "Azure DevOps", "Postman", "OpenSSH", "Grafana", "Prometheus", "Llama.cpp"],
};

export default function Skills() {
  return (
    <section className="border-t border-zinc-800/60 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Technologies I work with
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(skills).map(([category, technologies]) => (
            <div
              key={category}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
            >
              <h3 className="mb-5 text-lg font-semibold text-white">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-zinc-700 px-3 py-1.5 text-sm text-zinc-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}