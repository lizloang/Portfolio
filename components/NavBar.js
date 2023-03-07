import Link from "next/link";

export default function NavBar() {
  return (
    <header className=" z-10 fixed inset-0 opacity-95 bg-slate-800 text-white font-bold text-lg h-16 flex mr-auto justify-between items-center ">
      <div className="flex items-baseline gap-2">
        Open to work{" "}
        <div className="bg-lime-500 w-2.5 h-2.5 rounded-full"></div>
      </div>
      <nav>
        <ul className="flex gap-8 ">
          <li>
            <Link className="hover:bg-pink-500 py-3 px-4 rounded-full" href="/">
              Tooling
            </Link>
          </li>
          <li>
            <Link className="hover:bg-pink-500 py-3 px-4 rounded-full" href="/">
              Projects
            </Link>
          </li>
          <li>
            <Link className="hover:bg-pink-500 py-3 px-4 rounded-full" href="/">
              Contact{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
