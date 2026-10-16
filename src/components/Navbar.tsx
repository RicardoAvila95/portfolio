"use client";

import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { useI18n } from "@/i18n/I18nProvider";

export default function Navbar() {
  const { t } = useI18n();
  const navigation = [
    { name: t("aboutNav"), href: "#about" },
    { name: t("experienceNav"), href: "#experience" },
    { name: t("projectsNav"), href: "#projects" },
    { name: t("contactNav"), href: "#contact" },
  ];
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-[var(--foreground)]"
        >
          Ricardo<span className="text-[var(--accent)]">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSelector />
          <ThemeToggle />

          <a
            href="#contact"
            className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {t("letsTalk")}
          </a>
        </div>
      </div>
    </header>
  );
}
