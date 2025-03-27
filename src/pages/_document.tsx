/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-danger */
import { getCssText } from "@/styles/stitches.config";
import NextDocument, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import { ReactElement } from "react";

type Props = {
  css: string;
};

class Document extends NextDocument<Props> {
  static async getInitialProps({ renderPage }: DocumentContext): Promise<any> {
    const page = await renderPage();
    const css = getCssText();

    return { ...page, css };
  }
  render(): ReactElement<any> {
    const domain = "https://planare.dev";
    const title = "Planare";
    const description =
      "Planare is a web development office based in New York. We focus on helping startups and not-for-profits to build apps and websites that scale.";

    return (
      <Html lang="en">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: " " + this.props.css }} id="stitches" />

          <meta charSet="utf-8" />
          <meta content={description} name="description" />
          <meta content={domain} property="og:url" />
          <meta content={title} property="og:title" />
          <meta content={description} property="og:description" />
          <meta content={title} property="og:site_name" />
          <meta content={`${domain}/meta.jpg`} property="og:image" />
          <meta content="website" property="og:type" />
          <meta content="en_US" property="og:locale" />
          <meta content="summary" name="twitter:card" />
          <meta content="Planare" name="twitter:title" />
          <meta content={description} name="twitter:description" />
          <meta content={`${domain}/meta.jpg`} name="twitter:image" />
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link href="/site.webmanifest" rel="manifest" />
          <link color="#d7d2fe" href="/safari-pinned-tab.svg" rel="mask-icon" />
          <meta content="#d7d2fe" name="msapplication-TileColor" />
          <meta content="#d7d2fe" name="theme-color" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
