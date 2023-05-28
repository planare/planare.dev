import Head from "next/head";
import Link from "next/link";

import { theme } from "../components/Theme";

export default function Custom404(): JSX.Element {
  return (
    <div>
      <Head>
        <title>404: Planare</title>
      </Head>
      <p style={{ marginTop: theme.spacing.largest }}>This page could not be found.</p>
      <h1>
        <Link href="/">🏠</Link>
      </h1>
    </div>
  );
}
