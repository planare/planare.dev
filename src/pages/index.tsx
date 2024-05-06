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
      <h1 style={{ marginTop: "5rem" }}>
        Check back soon, we are working on a new website. We are still available for work.
      </h1>
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
      <p style={{ marginTop: theme.spacing.large, marginBottom: 0 }}>
        <a
          className="cta"
          href="mailto:mail@planare.dev"
          rel="noreferrer"
          style={{ marginRight: theme.spacing.small }}
          target="_blank">
          mail@planare.dev
        </a>
        {/*
        <a
          className="cta"
          href="tel:+19299997420"
          rel="noreferrer"
          style={{ marginRight: theme.spacing.small }}
          target="_blank">
          (929) 999-7420
        </a>*/}
        <a className="cta" href="https://github.com/planare" rel="noreferrer" target="_blank">
          github.com&#47;planare
        </a>
      </p>
      <small style={{ opacity: 0.64 }}>651 N Broad Street, Middletown DE 19709, USA</small>
    </div>
  );
}
