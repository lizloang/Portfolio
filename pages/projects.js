import { Inter } from "@next/font/google";
import Projects from "../components/Projects/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function projects() {
  return (
    <>
      <main>
        <Projects />
      </main>
    </>
  );
}
