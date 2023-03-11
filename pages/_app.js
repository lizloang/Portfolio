import "../styles/globals.css";
import Head from "next/head";
import { Inter } from "@next/font/google";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>LizLoang</title>
        <meta name="description" content="Lizbeth portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <div className="flex min-h-screen flex-col justify-between">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
