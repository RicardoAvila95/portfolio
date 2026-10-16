"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";

export default function Contact() {
  const { t } = useI18n();
  return (
    <section
      id="contact"
      className="border-t border-[var(--border)] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
            {t("contact")}
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {t("contactTitle")}
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            {t("contactDescription")}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="mailto:ricard_995@hotmail.com"
              className="theme-primary-button rounded-full px-6 py-3 text-sm font-semibold hover:-translate-y-0.5"
            >
              {t("emailMe")}
            </Link>

            <Link
              href="https://www.linkedin.com/in/ricardoavila95"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
