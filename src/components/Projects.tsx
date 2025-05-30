import { styled } from "@/styles/stitches.config";
import Image from "next/image";
import Link from "next/link";
import React, { type JSX } from "react";

import { projectsData } from "../data/projects";
import { Badge } from "./Badge";
import { Block } from "./Block";
import { Button } from "./Button";
import { Card } from "./Card";
import { Typography } from "./Typography";

const ProjectsStyled = styled(Block, {
  overflow: "hidden",
  position: "relative",
  width: "100%",
});

const ProjectsInnerStyled = styled(Block, {
  display: "flex",
  flexDirection: "column",
  gap: "$normal",
  phone: {
    flexDirection: "row",
    gap: "$small",
    justifyContent: "flex-start",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
  },
});

const ProjectsCardStyled = styled("div", {
  "&:hover": {
    img: {
      transform: "scale(1.02)",
    },
  },
  alignItems: "center",
  display: "grid",
  gap: "$normal",
  gridTemplateColumns: "31% auto",
  img: {
    transition: "all 0.3s ease",
  },

  margin: "0 auto",
  phone: {
    alignItems: "flex-start",
    display: "flex",
    flex: "0 0 100%",
    flexDirection: "column",
    scrollSnapAlign: "start",
  },
  textAlign: "left",
});

export function Projects(): JSX.Element {
  return (
    <ProjectsStyled container>
      <Typography variant="p">&mdash; Selected Projects</Typography>
      <ProjectsInnerStyled top="normal">
        {projectsData.map((project, index) => (
          <ProjectsCardStyled key={index}>
            <Block css={{ height: "15rem", width: "100%" }}>
              <a href={project.url} rel="noreferrer" target="_blank">
                <Image
                  alt={`${project.title} logo`}
                  fill
                  src={project.image}
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    width: "100%",
                  }}
                />
              </a>
            </Block>

            <Block>
              <Block bottom="small" flexAlign="center">
                <Typography inline="smallest" variant="h5">
                  {project.title}&nbsp;&nbsp;
                </Typography>
                <Badge
                  css={{
                    whiteSpace: "nowrap",
                  }}
                  variant="alternative">
                  {project.year}
                </Badge>
              </Block>

              <Typography
                css={{
                  phone: {
                    display: "none",
                  },
                }}
                variant="small">
                {project.description}
              </Typography>
              <Block
                css={{
                  flexWrap: "wrap",
                  gap: "$small",
                  paddingTop: "$small",
                }}
                flexAlign="center">
                {project.work &&
                  project.work.map((work, idx) => <Badge key={idx}>{work.title}</Badge>)}
              </Block>
            </Block>
          </ProjectsCardStyled>
        ))}
      </ProjectsInnerStyled>
      <Block top="large">
        <Card css={{ padding: "$small" }} variant="alternative">
          <Block flexAlign="center" justify="space-between">
            <Typography inline="small" variant="small">
              <Typography inline="small" variant="span">
                ▧
              </Typography>
              Want to see more of our work?
            </Typography>
            <Block css={{ phone: { display: "none" } }}>
              <Link href="/portfolio">
                <Button
                  css={{
                    whiteSpace: "nowrap",
                  }}>
                  2024 Portfolio &rarr;
                </Button>
              </Link>
            </Block>
            <Block css={{ display: "none", phone: { display: "block" } }}>
              <Link href="/contact">
                <Button
                  css={{
                    whiteSpace: "nowrap",
                  }}>
                  Contact Us &rarr;
                </Button>
              </Link>
            </Block>
          </Block>
        </Card>
      </Block>
    </ProjectsStyled>
  );
}
