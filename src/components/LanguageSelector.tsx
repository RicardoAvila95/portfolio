"use client";

import { useI18n } from "@/i18n/I18nProvider";
import type { Locale } from "@/i18n/translations";

const languages: { code: Locale; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "ca", label: "CA" },
];

export default function LanguageSelector() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div>
      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value as Locale)}
        aria-label={t("language")}
        className="rounded-full border border-[var(--border)] bg-[var(--background)] px-2 py-2 text-sm text-[var(--foreground)]"
      >
        {languages.map(({ code, label }) => <option key={code} value={code}>{label}</option>)}
      </select>
    </div>
  );
}
