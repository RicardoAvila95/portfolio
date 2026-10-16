"use client";

import Link from "next/link";
import ProfileImage from "./ProfileImage";
import { useI18n } from "@/i18n/I18nProvider";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="flex min-h-screen items-center px-6 pt-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <ProfileImage />
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
            {t("role")}
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl">
            {t("heroTitle")}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            {t("heroDescription")}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="theme-primary-button rounded-full px-6 py-3 text-sm font-semibold hover:-translate-y-0.5"
            >
              {t("viewWork")}
            </Link>

            <Link
              href="#contact"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {t("getInTouch")}
            </Link>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-3 text-sm text-[var(--muted)]">
          <span className="h-px w-10 bg-[var(--border)]" />
          {t("scrollExplore")}
        </div>
      </div>
    </section>
  );
}
