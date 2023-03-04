import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

import { FullImage } from "../components/Classes";
import { Div } from "../components/Div";
import { Divider } from "../components/Divider";
import { Text } from "../components/Text";
import { theme } from "../components/Theme";
import { visibleCollapse } from "../components/Utils";
import { Icon } from "../icons";
import projectCosmoGroupWebsite from "../public/images/project-cosmogroup-website.png";
import projectCosmoGroupWebsite2 from "../public/images/project-cosmogroup-website2.gif";
import projectCosmoGroupWebsite3 from "../public/images/project-cosmogroup-website3.png";
import projectCosmoGroupWebsite4 from "../public/images/project-cosmogroup-website4.png";
import projectJePleureWebsite from "../public/images/project-jepleure-website.png";
import projectJePleureWebsite2 from "../public/images/project-jepleure-website2.png";
import projectJePleureWebsite3 from "../public/images/project-jepleure-website3.png";

const indexImages = {
  cosmo: [
    projectCosmoGroupWebsite,
    projectCosmoGroupWebsite2,
    projectCosmoGroupWebsite3,
    projectCosmoGroupWebsite4,
  ],
  jepleure: [projectJePleureWebsite, projectJePleureWebsite2, projectJePleureWebsite3],
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
  jepleure: [
    {
      title: "Je Pleure: Shopify Website",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
      title: "Je Pleure: Mobile View",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Je Pleure: Product Page",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
  alfredomarcopradil: [
    {
      title: "Alfredo Marco Pradil: Website",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Alfredo Marco Pradil: Mobile View",
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
    jepleure: 0,
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
      <Text
        className={visibleCollapse}
        style={{
          position: "fixed",
          top: theme.spacing.normal,
          right: theme.spacing.normal,
          padding: theme.spacing.small,
          zIndex: 100,
          textAlign: "right",
        }}>
        <Link href="/">&larr;</Link>
      </Text>
      <Div bottom="large" top="large">
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
          <Div className={FullImage} onClick={(): void => indexChange("jepleure")}>
            <Image
              alt="Je Pleure Website"
              blurDataURL={projectJePleureWebsite.blurDataURL}
              height={projectJePleureWebsite.height}
              placeholder="blur"
              src={indexImages.jepleure[indexStates.jepleure]}
              width={projectJePleureWebsite.width}
            />
          </Div>

          <Text as="p">{indexCaptions.jepleure[indexStates.jepleure].title}</Text>
          <Text as="small">{indexCaptions.jepleure[indexStates.jepleure].description}</Text>

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
              <a href="https://jepleure.com" rel="noreferrer" target="_blank">
                View
              </a>
            </Text>
            <Text as="small">2021</Text>
            <Text as="small">Closed Source</Text>
          </Div>
        </Div>
        {/* https://web.archive.org/web/20210224082809/http://alfredomarcopradil.com/ */}
      </Div>
    </Div>
  );
};
