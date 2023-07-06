import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from "next/document";
import React, { ReactElement } from "react";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render(): ReactElement {
    const domain = "https://planare.dev";
    const title = "Planare";
    const description =
      "Planare is a web development office based in New York. We focus on helping startups and not-for-profits to build apps and websites that scale.";

    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />

          <meta
            content="Planare is a web development office based in New York. We focus on helping startups and not-for-profits to build apps and websites that scale."
            name="description"
          />

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
          <link color="#00005a" href="/safari-pinned-tab.svg" rel="mask-icon" />
          <meta content="#2b5797" name="msapplication-TileColor" />
          <meta content="#f4f7ff" name="theme-color" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
