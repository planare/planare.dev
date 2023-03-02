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
            <p>Planare doesn&apos;t use cookies.</p>
            <p>
              We use Vercel Analytics to see how many people visit our site. Visitors are identified
              by a hash created from the incoming request, which resets daily. Using a generated
              hash provides a privacy-friendly alternative to cookies ensuring that they can&apos;t
              be tracked between different days or different websites.
            </p>
            <ul>
              <li>
                <strong>Browser</strong>:{" "}
                {navigator?.userAgent || "You are using an unknown browser"}
              </li>
              <li>
                <strong>Operating System</strong>:{" "}
                {navigator?.platform || "You are using an unknown operating system"}
              </li>
              <li>
                <strong>Screen Resolution</strong>:{" "}
                {`${window?.screen?.width}x${window?.screen?.height}`}
              </li>
              <li>
                <strong>Timezone</strong>: {Intl.DateTimeFormat().resolvedOptions().timeZone}
              </li>
              <li>
                <strong>Language</strong>: {navigator?.language}
              </li>
              <li>
                <strong>Referrer</strong>: {document?.referrer || "No referrer"}
              </li>
              <li>
                <strong>URL</strong>: {window?.location?.href}
              </li>
            </ul>
            <p>
              <a href="https://vercel.com/docs/concepts/analytics">
                Learn more about Vercel Analytics <Icon.External />
              </a>
            </p>
            <p style={{ marginTop: theme.spacing.large }}>
              <Link href="/">planare.dev</Link>
            </p>
          </div>
        ) : isMounted && cookies !== "" ? (
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
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </section>
    </Layout>
  );
}
