import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Icon } from "../components/icons";
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
    if (typeof document !== "undefined" && document) {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }

      setCookies("");
    }
  }

  return (
    <Layout>
      <Head>
        <title>Privacy Information: Planare</title>
      </Head>
      <section>
        <h1>Privacy Information</h1>

        {isMounted && cookies === "" ? (
          <div>
            <p>
              Planare does not use cookies. We exclusively use Vercel Analytics to track the number
              of visitors to our site, but we do not collect any data that can be used to personally
              identify a visitor.
            </p>
            <a href="https://vercel.com/docs/concepts/analytics/audiences">
              Learn more about Vercel Analytics <Icon.External />
            </a>
          </div>
        ) : (
          <div>
            <p>
              We found some straggling cookies, you can remove all of them by clicking the button
              below.
            </p>
            <p>We don&apos;t use cookies, but you may have some hanging around.</p>
            <div
              style={{ maxWidth: "100%", wordWrap: "break-word", marginTop: theme.spacing.normal }}>
              {cookies
                ? cookies.split(";").map((cookie, i) => (
                    <p
                      key={i}
                      style={{
                        border: `0.1rem solid ${theme.colors.border}`,
                        padding: "0.4rem",
                        marginTop: `${theme.spacing.smallest}`,
                        borderRadius: `${theme.spacing.smallest}`,
                      }}>
                      {cookie}
                      <br />
                    </p>
                  ))
                : "No cookies found"}
            </div>
            <button
              type="button"
              onClick={(): void => {
                purge();
              }}>
              Purge
            </button>
          </div>
        )}
        <p style={{ marginTop: theme.spacing.large }}>
          <Link href="/">&#9756; planare.dev</Link>
        </p>
      </section>
    </Layout>
  );
}
