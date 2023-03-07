import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import { Icon } from "../components/icons";
import { Layout, theme } from "../components/Theme";
import useWeather from "../components/Weather";

export default function Home(): JSX.Element {
  const [showWeather, setShowWeather] = useState(false);
  const { results } = useWeather({ latitute: 40.71954, longitude: -73.99973 });

  return (
    <Layout>
      <Head>
        <title>Planare</title>
      </Head>
      <section>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}>
          <Image
            alt={""}
            className="logo"
            height={544 * 0.075}
            sizes="(max-width: 600px) 100vw, 600px"
            src="/inline.png"
            width={1442 * 0.075}
          />
          <Image
            alt={""}
            className="logo-dark"
            height={544 * 0.075}
            sizes="(max-width: 600px) 100vw, 600px"
            src="/inline-inverse.png"
            width={1442 * 0.075}
          />
          <button type="button" onClick={(): void => setShowWeather(!showWeather)}>
            {results?.emoji}&nbsp; New York
          </button>
        </div>
        <div style={{ marginTop: theme.spacing.small, opacity: 0.6 }}>
          {showWeather ? (
            <small>
              ... where it is currently {results?.temp}°F with {results?.description} and{" "}
              {results?.wind}
              mph winds, as of {results?.fetched}.
            </small>
          ) : (
            <small>&nbsp;</small>
          )}
        </div>

        <h1 style={{ marginTop: theme.spacing.small }}>
          Planare is a development shop that builds apps and websites.
        </h1>
        <div
          className="spin"
          style={{
            fontSize: "75px",
            opacity: 0.15,
            height: "50px",
            width: "50px",
            position: "fixed",
            // cente
            right: "0",
            bottom: "0",
            left: "0",
            top: "0",
            margin: "auto",
            display: "block",
          }}>
          💻
        </div>
        <p>
          We focus on shipping projects that are coherent, scalable, and meaningful to users. Our
          team is based in New York and we work with startup founders to help them build great
          products.
        </p>
        <p>
          Our pricing is flat and transparent. We charge a fixed rate for each project, which
          includes research, development, deployment and launch support. Our hourly rate is $150 for
          development, and $120 for consulting.
        </p>

        <p>
          In our first year, we launched a portfolio management app,{" "}
          <a href="https://cosmogroup.io" rel="noreferrer" target="_blank">
            website
            <Icon.External style={{ marginLeft: 4.5, marginRight: 6 }} />
          </a>
          and an open-source{" "}
          <a href="https://github.com/cosmoau/ui" rel="noreferrer" target="_blank">
            component library
            <Icon.External style={{ marginLeft: 4.5, marginRight: 6 }} />
          </a>
          for Cosmo, a rapidly growing vacation rental company from Melbourne, Australia.
        </p>
        <p>If you have any questions or would like to talk shop, please get in touch.</p>

        <div style={{ marginTop: theme.spacing.small }}>
          <a href="mailto:mail@planare.dev" rel="noreferrer" target="_blank">
            <Icon.Email />
            <p
              style={{
                display: "inline-flex",
                paddingLeft: theme.spacing.small,
                marginBottom: 0,
              }}>
              mail@planare.dev
            </p>
          </a>
        </div>
        <div>
          <a href="tel:+19299997420" rel="noreferrer" target="_blank">
            <Icon.Phone />
            <p
              style={{
                display: "inline-flex",
                paddingLeft: theme.spacing.small,
                marginBottom: 0,
              }}>
              (929) 999-7420
            </p>
          </a>
        </div>
        <div>
          <a href="https://github.com/planare" rel="noreferrer" target="_blank">
            <Icon.GitHub />
            <p
              style={{
                display: "inline-flex",
                paddingLeft: theme.spacing.small,
              }}>
              github.com&#47;planare
            </p>
          </a>
        </div>

        <aside style={{ marginTop: theme.spacing.normal }}>
          <Icon.Flag />
          <small style={{ marginLeft: theme.spacing.smallest, opacity: 0.6 }}>
            &copy; {new Date().getFullYear()} Planare LLC.{" "}
            <a href="https://planare.dev/billing">Manage your billing</a>.{" "}
            <a href="https://new.planare.dev">Preview our new site</a>.
          </small>
        </aside>
      </section>
    </Layout>
  );
}
