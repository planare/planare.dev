import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import { Icon } from "../components/icons";
import { Layout, theme } from "../components/Theme";
import useWeather from "../components/Weather";

export default function Home(): JSX.Element {
  const [showWeather, setShowWeather] = useState(false);
  const { results } = useWeather({ latitute: 40.6782, longitude: -73.9442 });

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
            Brooklyn, NY
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

        <p style={{ marginTop: theme.spacing.small }}>
          Planare is a development agency founded in 2022 by{" "}
          <a href="https://dolmios.com">
            Jackson Dolman
            <Icon.External style={{ marginLeft: 4.5, marginRight: 6 }} />
          </a>
          that develops apps and websites for a deliberately small roster of startups and
          not-for-profits. We focus on shipping projects that are coherent, scalable, and meaningful
          to users.
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
          for Cosmo, a rapidly growing short-term property rental startup.
        </p>
        <p>
          Feel free to get in touch if you want to discuss a project, ask questions, or talk shop.
        </p>

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
              929.999.7420
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
            &copy; {new Date().getFullYear()} Planare LLC. 11237 + 19709
          </small>
        </aside>
      </section>
    </Layout>
  );
}
