import Link from "next/link";

export default function NavBar() {
  return (
    <header className=" fixed inset-0 z-10 mr-auto flex h-16 items-center justify-between bg-slate-800 p-8 text-lg font-bold text-white opacity-95">
      <div className="flex items-baseline gap-2">
        Open to work{" "}
        <div className="h-2.5 w-2.5 rounded-full bg-lime-500"></div>
      </div>
      <nav>
        <ul className="flex gap-8 ">
          <li>
            <Link
              className="rounded-full py-3 px-4 hover:bg-pink-500"
              href="/tooling/tooling.js"
            >
              Tooling
            </Link>
          </li>
          <li>
            <Link className="rounded-full py-3 px-4 hover:bg-pink-500" href="/">
              Projects
            </Link>
          </li>
          <li>
            <Link className="rounded-full py-3 px-4 hover:bg-pink-500" href="/">
              Contact{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
