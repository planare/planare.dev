/* eslint-disable react/no-danger */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from "next/document";
import React, { ReactElement } from "react";

import { theme } from "../components/styles";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render(): ReactElement {
    const themeStyles = `
      :root {
        --color-background: ${theme.colors.background};
        --color-text: ${theme.colors.text};
        --color-link: ${theme.colors.link};
        --color-accent: ${theme.colors.accent};
        --color-warning: ${theme.colors.warning};
        
        --spacing-large: ${theme.spacing.large};
        --spacing-largest: ${theme.spacing.largest};
        --spacing-normal: ${theme.spacing.normal};
        --spacing-small: ${theme.spacing.small};
        --spacing-smallest: ${theme.spacing.smallest};
        
        --font: ${theme.font};
      }
    `;

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
          <link color="#d7d2fe" href="/safari-pinned-tab.svg" rel="mask-icon" />
          <meta content="#d7d2fe" name="msapplication-TileColor" />
          <meta content="#d7d2fe" name="theme-color" />

          <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
