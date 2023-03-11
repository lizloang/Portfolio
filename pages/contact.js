import { Inter } from "@next/font/google";
import Contact from "../components/Contact/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function projects() {
  return (
    <>
      <main>
        <Contact className="mt-52" />
      </main>
    </>
  );
}
