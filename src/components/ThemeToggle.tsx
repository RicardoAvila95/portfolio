"use client";

import { useEffect, useSyncExternalStore } from "react";

const subscribe = (onChange: () => void) => {
  window.addEventListener("storage", onChange);
  window.addEventListener("theme-change", onChange);

  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("theme-change", onChange);
  };
};

const getSnapshot = () =>
  localStorage.getItem("theme") === "light" ? "light" : "dark";

const getServerSnapshot = () => "dark";

export default function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    window.dispatchEvent(new Event("theme-change"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      aria-pressed={theme === "light"}
      className="rounded-full border border-[var(--border)] p-2 text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
