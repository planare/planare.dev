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
    return (
      <Html>
        <Head />
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
