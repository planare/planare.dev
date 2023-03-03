/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-danger */
import { extractCss } from "goober";
import NextDocument, { DocumentContext, Head, Html, Main, NextScript } from "next/document";

type Props = {
  css: string;
};

class Document extends NextDocument<Props> {
  static async getInitialProps({ renderPage }: DocumentContext): Promise<any> {
    const page = await renderPage();
    const css = extractCss();
    return { ...page, css };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: " " + this.props.css }} id={"_goober"} />
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
