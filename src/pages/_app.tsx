import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Provider } from "react-wrap-balancer";

import "../components/styles/globals.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider>
      <Component {...pageProps} />
      <Analytics />
    </Provider>
  );
}
