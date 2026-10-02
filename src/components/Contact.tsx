import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-zinc-800/60 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Let's get in touch.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            I'm currently open to new professional opportunities. If you'd
            like to talk about a project or a position, feel free to reach
            out.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="mailto:ricard_995@hotmail.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition-transform hover:-translate-y-0.5"
            >
              Email me
            </Link>

            <Link
              href="https://www.linkedin.com/in/ricardoavila95"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-zinc-500"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}