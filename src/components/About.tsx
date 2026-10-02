export default function About() {
  return (
    <section id="about" className="border-t border-zinc-800/60 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            About me
          </p>
        </div>

        <div className="max-w-3xl space-y-6 text-lg leading-8 text-zinc-400">
          <p>
            I'm a Software Engineer with professional experience developing
            web and mobile applications.
          </p>

          <p>
            My main experience is with TypeScript, React, React Native and
            Node.js, working on both frontend and backend applications.
          </p>

          <p>
            I'm currently expanding my frontend knowledge with Next.js and
            building personal projects to continue learning and improving my
            skills.
          </p>
        </div>
      </div>
    </section>
  );
}