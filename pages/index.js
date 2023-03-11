import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import AboutMe from "../components/AboutMe";
import Tooling from "../components/Tooling/Tooling";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <AboutMe />
        <Tooling />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
