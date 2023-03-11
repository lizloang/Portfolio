import { Inter } from "@next/font/google";
import Tooling from "../components/Tooling/Tooling";
const inter = Inter({ subsets: ["latin"] });

export default function tooling() {
  return (
    <>
      <main>
        <Tooling />
      </main>
    </>
  );
}
