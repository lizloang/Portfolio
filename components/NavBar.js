import Link from "next/link";

export default function NavBar() {
  return (
    <header className="fixed z-10 mr-auto h-auto w-full items-center justify-between bg-slate-800 py-6 px-8 text-lg font-bold text-white opacity-95 md:top-0 md:flex md:py-4">
      <div className="flex items-baseline md:gap-2">
        <Link
          href="/"
          className="group text-3xl text-white transition duration-300"
        >
          Liz Loang
          <span class="block h-0.5 max-w-0 bg-white transition-all duration-200 group-hover:max-w-full"></span>
        </Link>

        <div className="px-3 ">
          Open to work
          <div className="mx-2 inline-block h-2.5 w-2.5 rounded-full bg-lime-500"></div>{" "}
        </div>
      </div>
      <nav className="hidden md:block">
        <ul className="flex gap-8 ">
          <li>
            <Link
              className="rounded-full py-3 px-4 hover:bg-pink-500"
              href="/tooling"
            >
              Tooling
            </Link>
          </li>
          <li>
            <Link
              className="rounded-full py-3 px-4 hover:bg-pink-500"
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="rounded-full py-3 px-4 hover:bg-pink-500"
              href="/contact"
            >
              Contact{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
