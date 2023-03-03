import { css, keyframes, styled } from "goober";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  Column,
  Div,
  Card,
  Row,
  Text,
  Divider,
  hiddenCollapse,
  visibleCollapse,
  showDarkScheme,
  showLightScheme,
} from "../components/Theme";
import { Icon } from "../icons";
import projectCosmoGroupWebsite from "../public/images/project-cosmogroup-website.png";
import projectCosmoGroupWebsite2 from "../public/images/project-cosmogroup-website2.gif";
import projectCosmoGroupWebsite3 from "../public/images/project-cosmogroup-website3.png";
import projectCosmoGroupWebsite4 from "../public/images/project-cosmogroup-website4.png";
import logoInverse from "../public/inline-inverse.png";
import logo from "../public/inline.png";

const Pane = css({
  maxHeight: "95vh",
  height: "95vh",
  marginTop: "2.5vh",
  overflow: "scroll",
});

const FullImage = css({
  width: "100%",
  height: "auto",
  img: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    position: "relative",
  },
  cursor: "e-resize",
});

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

const Spinner = styled("div")({
  animation: `${spin} 7s linear infinite`,
  fontSize: "3rem",
  opacity: 0.5,
});

const Logo = (): JSX.Element => {
  return (
    <Div
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 100,
      }}>
      <Image
        alt="Planare"
        className={showDarkScheme}
        height={544 * 0.04}
        sizes="(max-width: 600px) 100vw, 600px"
        src={logoInverse.src}
        width={1442 * 0.04}
      />

      <Image
        alt="Planare"
        className={showLightScheme}
        height={544 * 0.04}
        sizes="(max-width: 600px) 100vw, 600px"
        src={logo.src}
        width={1442 * 0.04}
      />
    </Div>
  );
};
const IndexInfo = (): JSX.Element => {
  return (
    <Div id="IndexInfo">
      <Logo />
      <Div bottom="largest" top="largest">
        <Spinner>💻</Spinner>

        <Text as="h1" top="small">
          Planare is a development shop that builds apps and websites.
        </Text>
        <Text as="p">
          We focus on shipping projects that are coherent, scalable, and meaningful to users. Our
          team is based in New York and we work with startup founders to help them build great
          products.
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

const IndexProjects = (): JSX.Element => {
  // typed
  const indexImages = {
    cosmo: [
      projectCosmoGroupWebsite,
      projectCosmoGroupWebsite2,
      projectCosmoGroupWebsite3,
      projectCosmoGroupWebsite4,
    ],
    planare: [logo, logoInverse],
  } as {
    [key: string]: StaticImageData[];
  };

  const indexCaptions = {
    cosmo: [
      {
        title: "Cosmo: Website",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Cosmo: Sales Tools",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Cosmo: Public Calculator",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Cosmo: Mobile View",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
    planare: [
      {
        title: "Planare: Logo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Planare: Logo Inverse",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  } as {
    [key: string]: {
      description: string;
      title: string;
    }[];
  };

  const [indexStates, setIndexStates] = useState<{
    [key: string]: number;
  }>({
    cosmo: 0,
    planare: 0,
  });

  function indexChange(project: string): void {
    const projectImages = indexImages[project];
    const projectState = indexStates[project];
    let newState = projectState;
    if (projectState === projectImages.length - 1) {
      newState = 0;
    } else {
      newState = projectState + 1;
    }

    setIndexStates({
      ...indexStates,
      [project]: newState,
    });
  }

  return (
    <Div id="IndexProjects">
      <Div className={FullImage} onClick={(): void => indexChange("cosmo")}>
        <Image
          alt="Cosmo Group Website"
          blurDataURL={projectCosmoGroupWebsite.blurDataURL}
          height={projectCosmoGroupWebsite.height}
          placeholder="blur"
          src={indexImages.cosmo[indexStates.cosmo]}
          width={projectCosmoGroupWebsite.width}
        />
      </Div>

      <Text as="p">{indexCaptions.cosmo[indexStates.cosmo].title}</Text>
      <Text as="small">{indexCaptions.cosmo[indexStates.cosmo].description}</Text>

      <Divider bottom="small" top="normal" />
      <Div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}>
        <Text as="small">
          <Icon.External style={{ marginRight: 6 }} />
          <a href="https://cosmogroup.io" rel="noreferrer" target="_blank">
            View
          </a>
        </Text>
        <Text as="small">2023</Text>
        <Text as="small">Closed Source</Text>
      </Div>
    </Div>
  );
};

const PrivacyPolicy = (): JSX.Element => {
  return (
    <Div id="PrivacyPolicy">
      <Div bottom="largest" top="largest">
        <Text as={"h1"} bottom="smallest" top="smallest">
          Privacy Policy
        </Text>
      </Div>
    </Div>
  );
};

export const Layout = ({
  route,
}: {
  route: "index" | "privacy-policy" | "projects" | "404";
}): JSX.Element => {
  return (
    <Div id={route}>
      <Row>
        <Column align="center" width="50%">
          <Card className={Pane}>
            <Div className={visibleCollapse}>
              <Div className={visibleCollapse}>
                <Logo />
              </Div>
              {route === "index" ? (
                <IndexInfo />
              ) : route === "projects" ? (
                <IndexProjects />
              ) : route === "privacy-policy" ? (
                <PrivacyPolicy />
              ) : (
                "404"
              )}
            </Div>
            <Div className={hiddenCollapse}>
              <IndexInfo />
            </Div>
          </Card>
        </Column>
        <Column align="center" className={hiddenCollapse} width="50%">
          <Card className={Pane}>
            {route === "index" || route === "projects" ? (
              <IndexProjects />
            ) : route === "privacy-policy" ? (
              "privacy policy"
            ) : (
              "404"
            )}
          </Card>
        </Column>
      </Row>
    </Div>
  );
};
