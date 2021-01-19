import type { AppProps } from "next/app";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="main-wrapper">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
