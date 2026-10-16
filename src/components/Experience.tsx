"use client";

import { useI18n } from "@/i18n/I18nProvider";

export default function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience" className="border-t border-[var(--border)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--accent)]">{t("experience")}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">{t("professionalExperience")}</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <div className="text-sm text-[var(--muted)]">{t("experienceDate")}</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)]">{t("role")}</h3>
            <p className="mt-1 text-[var(--muted)]">Blue Room Innovation</p>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-[var(--muted)]">
              <li>{t("exp1")}</li><li>{t("exp2")}</li><li>{t("exp3")}</li><li>{t("exp4")}</li><li>{t("exp5")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
