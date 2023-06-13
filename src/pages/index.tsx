import Head from "next/head";
import Image from "next/image";

import { theme } from "../components/Theme";

const now = new Date();

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Planare</title>
      </Head>
      <Image
        alt={""}
        height={544 * 0.075}
        sizes="(max-width: 600px) 100vw, 600px"
        src="/inline-inverse.png"
        style={{ marginTop: theme.spacing.normal }}
        width={1442 * 0.075}
      />
      <p style={{ marginTop: theme.spacing.large }}>
        Planare is the office of{" "}
        <a href="https://twitter.com/planaredev" rel="noreferrer" target="_blank">
          Jackson Dolman
        </a>
        , a developer based in New York City.&nbsp;&nbsp;
        <span style={{ opacity: 0.42 }}>
          {now.toLocaleString("en-US", {
            timeZone: "America/New_York",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </span>
      </p>
      <p>
        We deliver coherent, scalable, and user-centric apps and websites, with an emphasis on
        frontend and product development. By partnering with startups, agencies, and small
        businesses, we assist in launching new projects, augmenting team capacities, and bolstering
        online presence.
      </p>{" "}
      <p>
        We recently developed a portfolio management app,{" "}
        <a href="https://cosmogroup.io" rel="noreferrer" target="_blank">
          website
        </a>{" "}
        and open-source{" "}
        <a href="https://github.com/cosmoau/ui" rel="noreferrer" target="_blank">
          component library
        </a>{" "}
        for Cosmo, a fast-growing vacation rental company based in Melbourne.&nbsp;&nbsp;
        <span style={{ opacity: 0.42 }}>
          {now.toLocaleString("en-AU", {
            timeZone: "Australia/Melbourne",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </span>
      </p>
      <p>
        We work out of a space in SoHo, at the junction of Little Italy and Chinatown. We would love
        to shoot the breeze. If you are in the area, let us know!
      </p>
      <p style={{ marginTop: theme.spacing.large }}>
        148 Lafayette Street, 4th Floor, New York, NY 10013
      </p>
      <p>
        <a
          className="cta"
          href="mailto:mail@planare.dev"
          rel="noreferrer"
          style={{ marginRight: theme.spacing.small }}
          target="_blank">
          mail@planare.dev
        </a>
        <a
          className="cta"
          href="tel:+19299997420"
          rel="noreferrer"
          style={{ marginRight: theme.spacing.small }}
          target="_blank">
          (929) 999-7420
        </a>
        <a className="cta" href="https://github.com/planare" rel="noreferrer" target="_blank">
          github.com&#47;planare
        </a>
      </p>
    </div>
  );
}
