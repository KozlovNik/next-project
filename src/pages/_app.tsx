import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../shared/system/theme";
import "../styles/globals.css";
import "../../public/main.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
