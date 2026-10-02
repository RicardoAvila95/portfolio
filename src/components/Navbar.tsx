
const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-white"
        >
          Ricardo<span className="text-blue-400">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-white transition-all hover:border-blue-400 hover:text-blue-400"
        >
          Let's talk
        </a>
      </div>
    </header>
  );
}