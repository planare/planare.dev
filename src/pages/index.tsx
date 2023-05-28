import Head from "next/head";
import Image from "next/image";

import { theme } from "../components/Theme";

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
      <p style={{ marginTop: theme.spacing.largest }}>
        Planare is the office of{" "}
        <a href="https://twitter.com/planaredev" rel="noreferrer" target="_blank">
          Jackson Dolman
        </a>
        , a developer based in New York City.
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
        for Cosmo, a fast-growing vacation rental company based in Melbourne, Australia.
      </p>
      <p style={{ marginTop: theme.spacing.large }}>
        <a href="mailto:mail@planare.dev" rel="noreferrer" target="_blank">
          mail@planare.dev
        </a>
        ,{" "}
        <a href="tel:+19299997420" rel="noreferrer" target="_blank">
          (929) 999-7420
        </a>
        ,{" "}
        <a href="https://github.com/planare" rel="noreferrer" target="_blank">
          github.com&#47;planare
        </a>
      </p>
    </div>
  );
}
