"use client";

import { useI18n } from "@/i18n/I18nProvider";

const skills = {
  frontend: ["React", "React Native", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  backend: ["Node.js", "Express", "REST APIs", "MongoDB", "Python", "Moleculer", "Redis"],
  tools: ["Git", "Docker", "RabbitMQ", "Azure DevOps", "Postman", "OpenSSH", "Grafana", "Prometheus", "Llama.cpp", "LangGraph"],
};

export default function Skills() {
  const { t } = useI18n();
  return (
    <section className="border-t border-[var(--border)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
            {t("skills")}
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            {t("technologies")}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(skills).map(([category, technologies]) => (
            <div
              key={category}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
            >
              <h3 className="mb-5 text-lg font-semibold text-[var(--foreground)]">
                {t(category as "frontend" | "backend" | "tools")}
              </h3>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--muted)]"
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
