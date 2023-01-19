import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Layout, theme } from "../components/Theme";

export default function PrivacyPolicy(): JSX.Element {
  const [isMounted, setIsMounted] = useState(false);
  const [cookies, setCookies] = useState("");

  useEffect(() => {
    if (typeof document !== "undefined" && document) {
      setIsMounted(true);
      if (document.cookie) {
        setCookies(document.cookie);
      }
    }
  }, []);

  function purge(): void {
    // remove every single cookie because we're not using them
    // and we don't want to be tracked
    if (typeof document !== "undefined" && document) {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }

      setCookies("");
    }
  }

  return (
    <Layout>
      <Head>
        <title>404: Planare</title>
      </Head>
      <section>
        <h1>Privacy Policy</h1>

        {isMounted && cookies === "" ? (
          <p>
            Planare does not use cookies. We do not track you, we do not collect your data, and we
            do not sell your data to third parties. We <i>do</i> use Vercel Analytics to track the
            number of visitors to our site, but we do not collect any data that can be used to
            identify you.
          </p>
        ) : (
          <>
            <p>
              We found some straggling cookies, you can remove all of them by clicking the button
              below.
            </p>
            <p>We don&apos;t use cookies, but you may have some hanging around.</p>
            <p>{cookies}</p>
            <button
              type="button"
              onClick={(): void => {
                purge();
              }}>
              Purge
            </button>
          </>
        )}
        <p style={{ marginTop: theme.spacing.large }}>
          <Link href="/">&#9756; planare.dev</Link>
        </p>
      </section>
    </Layout>
  );
}
