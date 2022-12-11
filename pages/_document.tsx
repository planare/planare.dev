import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from 'next/document';
import Script from 'next/script';
import React, { ReactElement } from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): ReactElement {
    const domain = 'https://planare.dev';
    const title = 'Planare';
    const description =
      'Planare is a web development office based in Brooklyn, NY. We focus on helping startups and not-for-profits to build apps and websites that scale.';
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta http-equiv='x-ua-compatible' content='ie=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />

          <meta
            name='description'
            content='Planare is a web development office based in Brooklyn, NY. We focus on helping startups and not-for-profits to build apps and websites that scale.'
          />

          <meta property='og:url' content={domain} />
          <meta property='og:title' content={title} />
          <meta property='og:description' content={description} />
          <meta property='og:site_name' content={title} />
          <meta property='og:image' content={`${domain}/image.jpg`} />
          <meta property='og:type' content='website' />
          <meta property='og:locale' content='en_US' />

          <meta name='twitter:card' content='summary' />
          <meta name='twitter:site' content='@jacksondolman' />
          <meta name='twitter:title' content='Planare' />
          <meta name='twitter:description' content={description} />
          <meta name='twitter:image' content={`${domain}/image.jpg`} />

          <link
            rel='icon'
            href='path/to/favicon-16.png'
            sizes='16x16'
            type='image/png'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script
            defer
            strategy='beforeInteractive'
            src='https://api.pirsch.io/pirsch.js'
            id='pirschjs'
            data-code='YXvuxOkm2CyIQoM6Xfsy2HemFcG63mO1'
          />
        </body>
      </Html>
    );
  }
}
