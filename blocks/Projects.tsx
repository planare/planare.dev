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
import projectBendigoSpeechWorksWebsite from "../public/images/project-bendigospeechworks-website.png";
import projectBendigoSpeechWorksWebsite2 from "../public/images/project-bendigospeechworks-website2.png";
import projectCosmoGroupWebsite from "../public/images/project-cosmogroup-website.png";
import projectCosmoGroupWebsite2 from "../public/images/project-cosmogroup-website2.gif";
import projectCosmoGroupWebsite3 from "../public/images/project-cosmogroup-website3.png";
import projectCosmoGroupWebsite4 from "../public/images/project-cosmogroup-website4.png";
import projectElGordoWebsite from "../public/images/project-elgordo-website.png";
import projectElGordoWebsite2 from "../public/images/project-elgordo-website2.png";
import projectElGordoWebsite3 from "../public/images/project-elgordo-website3.png";
import projectICCWebsite from "../public/images/project-icc-website.png";
import projectICCWebsite2 from "../public/images/project-icc-website2.png";
import projectICCWebsite3 from "../public/images/project-icc-website3.png";
import projectJePleureWebsite from "../public/images/project-jepleure-website.png";
import projectJePleureWebsite2 from "../public/images/project-jepleure-website2.png";
import projectJePleureWebsite3 from "../public/images/project-jepleure-website3.png";
import projectTimboxWebsite from "../public/images/project-timbox-website.png";
import projectTimboxWebsite2 from "../public/images/project-timbox-website2.png";

const index = {
  cosmo: [
    {
      image: projectCosmoGroupWebsite,
      title: "Cosmo: Website",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: projectCosmoGroupWebsite2,
      title: "Cosmo: Sales Tools",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: projectCosmoGroupWebsite3,
      title: "Cosmo: Public Calculator",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: projectCosmoGroupWebsite4,
      title: "Cosmo: Mobile View",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
  jepleure: [
    {
      image: projectJePleureWebsite,
      title: "Je Pleure: Shopify Website",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: projectJePleureWebsite2,
      title: "Je Pleure: Mobile View",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: projectJePleureWebsite3,
      title: "Je Pleure: Product Page",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
  elgordo: [
    {
      image: projectElGordoWebsite,
      title: "El Gordo: Website",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: projectElGordoWebsite2,
      title: "El Gordo: Mobile View",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: projectElGordoWebsite3,
      title: "El Gordo: Website",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
  bendigospeechworks: [
    {
      image: projectBendigoSpeechWorksWebsite,
      title: "Bendigo Speech Works: Website",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: projectBendigoSpeechWorksWebsite2,
      title: "Bendigo Speech Works: Mobile View",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
  timbox: [
    {
      image: projectTimboxWebsite,
      title: "Timbox: Website",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: projectTimboxWebsite2,
      title: "Timbox: Mobile View",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
  icc: [
    {
      image: projectICCWebsite,
      title: "ICC: Website",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: projectICCWebsite2,
      title: "ICC: Mobile View",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: projectICCWebsite3,
      title: "ICC: Website",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
} as {
  [key: string]: {
    description: string;
    image: StaticImageData;
    title: string;
  }[];
};

export const IndexProjects = (): JSX.Element => {
  const [indexStates, setIndexStates] = useState<{
    [key: string]: number;
  }>({
    cosmo: 0,
    jepleure: 0,
    elgordo: 0,
    bendigospeechworks: 0,
    timbox: 0,
    icc: 0,
  });

  function indexChange(project: string): void {
    const indexState = indexStates[project];
    const indexLength = index[project].length;
    const newIndexState = indexState + 1 === indexLength ? 0 : indexState + 1;
    setIndexStates({
      ...indexStates,
      [project]: newIndexState,
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
              src={index.cosmo[indexStates.cosmo].image.src}
              width={projectCosmoGroupWebsite.width}
            />
          </Div>

          <Text as="p">{index.cosmo[indexStates.cosmo].title}</Text>
          <Text as="small">{index.cosmo[indexStates.cosmo].description}</Text>

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

        <Div id="elgordo" top="large">
          <Div className={FullImage} onClick={(): void => indexChange("elgordo")}>
            <Image
              alt="Je Pleure Website"
              blurDataURL={index.elgordo[indexStates.elgordo].image.blurDataURL}
              height={projectElGordoWebsite.height}
              placeholder="blur"
              src={index.elgordo[indexStates.elgordo].image}
              width={projectElGordoWebsite.width}
            />
          </Div>

          <Text as="p">{index.elgordo[indexStates.elgordo].title}</Text>
          <Text as="small">{index.elgordo[indexStates.elgordo].description}</Text>

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
              <a href="https://elgordobendigo.com" rel="noreferrer" target="_blank">
                View
              </a>
            </Text>
            <Text as="small">2021</Text>
            <Text as="small">Closed Source</Text>
          </Div>
        </Div>

        <Div id="jepleure" top="large">
          <Div className={FullImage} onClick={(): void => indexChange("jepleure")}>
            <Image
              alt="Je Pleure Website"
              blurDataURL={index.jepleure[indexStates.jepleure].image.blurDataURL}
              height={projectJePleureWebsite.height}
              placeholder="blur"
              src={index.jepleure[indexStates.jepleure].image}
              width={projectJePleureWebsite.width}
            />
          </Div>

          <Text as="p">{index.jepleure[indexStates.jepleure].title}</Text>
          <Text as="small">{index.jepleure[indexStates.jepleure].description}</Text>

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

        <Div id="bendigospeechworks" top="large">
          <Div className={FullImage} onClick={(): void => indexChange("bendigospeechworks")}>
            <Image
              alt="Je Pleure Website"
              blurDataURL={
                index.bendigospeechworks[indexStates.bendigospeechworks].image.blurDataURL
              }
              height={projectBendigoSpeechWorksWebsite.height}
              placeholder="blur"
              src={index.bendigospeechworks[indexStates.bendigospeechworks].image}
              width={projectBendigoSpeechWorksWebsite.width}
            />
          </Div>

          <Text as="p">{index.bendigospeechworks[indexStates.bendigospeechworks].title}</Text>
          <Text as="small">
            {index.bendigospeechworks[indexStates.bendigospeechworks].description}
          </Text>

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

        <Div id="icc" top="large">
          <Div className={FullImage} onClick={(): void => indexChange("icc")}>
            <Image
              alt="Je Pleure Website"
              blurDataURL={index.icc[indexStates.icc].image.blurDataURL}
              height={projectICCWebsite.height}
              placeholder="blur"
              src={index.icc[indexStates.icc].image}
              width={projectICCWebsite.width}
            />
          </Div>

          <Text as="p">{index.icc[indexStates.icc].title}</Text>
          <Text as="small">{index.icc[indexStates.icc].description}</Text>

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
      </Div>
    </Div>
  );
};
