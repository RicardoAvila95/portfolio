"use client";

import { useI18n } from "@/i18n/I18nProvider";

export default function Projects() {
  const { t } = useI18n();
  return (
    <section
      id="projects"
      className="border-t border-[var(--border)] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
            {t("projects")}
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            {t("personalProjects")}
          </h2>
        </div>

        <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--card)] p-8 md:p-12">
          <p className="text-xl font-medium text-[var(--foreground)]">
            {t("comingSoon")}
          </p>

          <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">
            {t("projectsDescription")}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "React", "Tailwind CSS"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--muted)]"
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
