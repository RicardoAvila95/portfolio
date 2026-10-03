import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6 pt-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
            Software Engineer
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl">
            Hi, I'm Ricardo.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            I build web and mobile applications with modern technologies,
            focusing on clean, maintainable and reliable software.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="theme-primary-button rounded-full px-6 py-3 text-sm font-semibold hover:-translate-y-0.5"
            >
              View my work
            </Link>

            <Link
              href="#contact"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-3 text-sm text-[var(--muted)]">
          <span className="h-px w-10 bg-[var(--border)]" />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
