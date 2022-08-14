import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { ThemeProvider } from "styled-components";
import { theme } from "../shared/system/theme";
import "../styles/globals.css";
import "../../public/main.css";
import "nprogress/nprogress.css";

NProgress.configure({ easing: "ease", speed: 500 });

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
