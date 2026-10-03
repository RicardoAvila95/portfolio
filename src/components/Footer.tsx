export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Ricardo Ávila</p>

        <p>Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
