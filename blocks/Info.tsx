import Link from "next/link";

import { Div } from "../components/Div";
import { Divider } from "../components/Divider";
import { Text } from "../components/Text";
import { hiddenCollapse, visibleCollapse } from "../components/Utils";
import { Icon } from "../icons";

import { Logo } from "./Logo";
import { Spinner } from "./Spinner";

export const IndexInfo = (): JSX.Element => {
  return (
    <Div id="IndexInfo">
      <Div className={hiddenCollapse}>
        <Logo />
      </Div>
      <Div bottom="large" top="large">
        <Spinner>💻</Spinner>

        <Text as="h1" top="small">
          Planare is a development shop that builds apps and websites.
        </Text>
        <Text as="p">
          We focus on shipping projects that are coherent, scalable, and meaningful to users. Our
          team is based in New York since 2022, after 6 years in Melbourne, Australia. We work with
          startup founders to help them build great products.
        </Text>
        <Text as="p">
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
        </Text>
        <Text as="p" className={visibleCollapse}>
          <Link href="/projects">See more projects</Link>
        </Text>
        <Divider bottom="small" top="largest" />
        <Text as={"small"}>Contact</Text>
        <Text as="p" top="small">
          <Icon.Email style={{ marginRight: 6 }} />
          <a href="mailto:mail@planare.dev">mail@planare.dev</a>
        </Text>
        <Text as="p">
          <Icon.Phone style={{ marginRight: 6 }} />
          <a href="tel:+19299997420">(929) 999-7420</a>
        </Text>
        <Text as="p">
          <Icon.GitHub style={{ marginRight: 6 }} />
          <a href="https://github.com/planare">github.com/planare</a>
        </Text>
        <Divider bottom="small" top="largest" />
        <Text as={"small"}>Rates</Text>
        <Text as="p" top="small">
          Our pricing is flat and transparent. We charge a fixed rate for each project, which
          includes research, development, deployment and launch support. Our hourly rate is $150 for
          development, and $120 for consulting.
        </Text>
        <Text>
          We use technology like Vercel, Supabase, and Stripe (among others!) and clients are billed
          directly for those. We simply charge a fixed retainer for ongoing maintenace and support,
          if needed.
        </Text>
        <Text as="p">We offer discounts for repeat clients and non-profits.</Text>
        <Divider bottom="small" top="largest" />
        <Text as={"small"}>Location</Text>
        <Text as="p" top="small">
          We work out of a space in SoHo, New York City, at the junction of Little Italy and
          Chinatown. We would love to shoot the breeze. If you are in the area, let us know!
        </Text>
        <Text as="p">148 Lafeyette Street, 4th Floor, New York, NY 10013</Text>
        <Divider bottom="small" top="largest" />
        <Text as={"small"}>Resources</Text>
        <Text as="p" top="small">
          <Icon.Options style={{ marginRight: 6 }} />
          <Link href="/privacy-policy">Privacy Policy</Link>
        </Text>
        <Text>
          <Icon.Options style={{ marginRight: 6 }} />
          <Link href="/billing" target="_blank">
            Update Billing
          </Link>
        </Text>
        <Divider bottom="small" top="largest" />
        <Text as={"small"}>
          <Icon.Flag style={{ marginRight: 6 }} />
          {new Date().getFullYear()} Planare, LLC.
        </Text>
      </Div>
    </Div>
  );
};
