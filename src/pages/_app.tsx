import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Theme } from "@/components/Theme";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Theme>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </Theme>
  );
}
