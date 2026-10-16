"use client";

import { useI18n } from "@/i18n/I18nProvider";

export default function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="border-t border-[var(--border)] px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
            {t("aboutTitle")}
          </p>
        </div>

        <div className="max-w-3xl space-y-6 text-lg leading-8 text-[var(--muted)]">
          <p>
            {t("aboutOne")}
          </p>

          <p>
            {t("aboutTwo")}
          </p>

          <p>
            {t("aboutThree")}
          </p>
        </div>
      </div>
    </section>
  );
}
