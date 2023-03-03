import { setup } from "goober";
import { prefix } from "goober/prefixer";
import type { AppProps } from "next/app";
import { createElement } from "react";

import { GlobalStyles, Main } from "../components/Theme";
setup(createElement, prefix);

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Main id="root">
      <GlobalStyles />
      <Component {...pageProps} />
    </Main>
  );
}
