import Image from "next/image";
import Link from "next/link";
import React from "react";

import { projectsData } from "../data/projects";

import { Badge } from "./Badge";
import { Block } from "./Block";
import { Button } from "./Button";
import { Card } from "./Card";
import { Typography } from "./Typography";

import { styled } from "@/styles/stitches.config";

const ProjectsStyled = styled(Block, {
  width: "100%",
  position: "relative",
  overflow: "hidden",
});

const ProjectsInnerStyled = styled(Block, {
  display: "flex",
  flexDirection: "column",
  gap: "$normal",
  phone: {
    flexDirection: "row",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    justifyContent: "flex-start",
    gap: "$small",
  },
});

const ProjectsCardStyled = styled("div", {
  display: "grid",
  gridTemplateColumns: "31% auto",
  gap: "$normal",
  alignItems: "center",
  textAlign: "left",
  margin: "0 auto",

  img: {
    transition: "all 0.3s ease",
  },
  "&:hover": {
    img: {
      transform: "scale(1.02)",
    },
  },
  phone: {
    display: "flex",
    alignItems: "flex-start",
    flex: "0 0 100%",
    scrollSnapAlign: "start",
    flexDirection: "column",
  },
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
                    objectFit: "cover",
                    objectPosition: "top",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </a>
            </Block>

            <Block>
              <Block bottom="small" flexAlign="center">
                <Typography inline="smallest" variant="h5">
                  {project.title}&nbsp;&nbsp;
                </Typography>
                <Badge variant="alternative">{project.year}</Badge>
              </Block>

              <Typography variant="small" css={{
                phone: {
                  display: "none"
                }
              }}>{project.description}</Typography>
              <Block
                css={{
                  gap: "$small",
                  flexWrap: "wrap",
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
              Get in touch if you&apos;d like to learn more about our work.
            </Typography>
            <Link href="/contact">
              <Button
                css={{
                  whiteSpace: "nowrap",
                }}>
                Contact &rarr;
              </Button>
            </Link>
          </Block>
        </Card>
      </Block>
    </ProjectsStyled>
  );
}
