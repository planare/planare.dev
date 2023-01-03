import Head from "next/head";
import Link from "next/link";

import { Layout } from "../components/Theme";

export default function Custom404(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>404: Planare</title>
      </Head>
      <section>
        <h1>This page could not be found.</h1>
        <p>
          <Link href="/">&#10042; Return to the homepage</Link>
        </p>
      </section>
    </Layout>
  );
}
