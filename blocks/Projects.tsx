import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import { FullImage } from "../components/Classes";
import { Div } from "../components/Div";
import { Divider } from "../components/Divider";
import { Text } from "../components/Text";
import { theme } from "../components/Theme";
import { Icon } from "../icons";
import projectCosmoGroupWebsite from "../public/images/project-cosmogroup-website.png";
import projectCosmoGroupWebsite2 from "../public/images/project-cosmogroup-website2.gif";
import projectCosmoGroupWebsite3 from "../public/images/project-cosmogroup-website3.png";
import projectCosmoGroupWebsite4 from "../public/images/project-cosmogroup-website4.png";
import logoInverse from "../public/inline-inverse.png";
import logo from "../public/inline.png";

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

export const IndexProjects = (): JSX.Element => {
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
      <Div id="cosmo">
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

        <Divider top="normal" />
        <Div
          style={{
            padding: theme.spacing.smallest,
            background: theme.colors.overlay,
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

      <Div id="planare" top="large">
        <Div className={FullImage} onClick={(): void => indexChange("planare")}>
          <Image
            alt="Planare Logo"
            blurDataURL={logo.blurDataURL}
            height={logo.height}
            placeholder="blur"
            src={indexImages.planare[indexStates.planare]}
            width={logo.width}
          />
        </Div>

        <Text as="p">{indexCaptions.planare[indexStates.planare].title}</Text>
        <Text as="small">{indexCaptions.planare[indexStates.planare].description}</Text>

        <Divider top="normal" />
        <Div
          style={{
            padding: theme.spacing.smallest,
            background: theme.colors.overlay,
            display: "flex",
            justifyContent: "space-between",
          }}>
          <Text as="small">
            <Icon.External style={{ marginRight: 6 }} />
            <a href="https://planare.dev" rel="noreferrer" target="_blank">
              View
            </a>
          </Text>
          <Text as="small">2023</Text>
          <Text as="small">
            <Icon.GitHub style={{ marginRight: 6 }} />
            <a href="https://github.com/planare/planare.dev" rel="noreferrer" target="_blank">
              Source
            </a>
          </Text>
        </Div>
      </Div>
    </Div>
  );
};
