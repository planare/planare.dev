/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

import { projectsData } from "../data/projects";

import { Badge } from "./Badge";
import { Block } from "./Block";
import { Typography } from "./Typography";

import { styled } from "@/styles/stitches.config"; // Adjust the import path as necessary

const ProjectsTableStyled = styled("div", {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "1rem",
    fontSize: "1.1rem",

    td: {
      textAlign: "left",
      padding: "$small 0",
      borderBottom: "1px solid $accent",

      img: {
        transition: "all 0.4s ease-in-out",
      },
      "&:hover": {
        img: {
          transform: "scale(0.95)",
        },
      },
    },
  },
});

export function Projects(): JSX.Element {
  return (
    <ProjectsTableStyled>
      <Typography variant="h3">Selected Projects</Typography>
      <table>
        <tbody>
          {projectsData.map((project, index) => (
            <tr key={index}>
              <td>
                <Block css={{ width: "20rem", height: "12rem", marginRight: "$normal" }}>
                  <a href={project.url} rel="noreferrer" target="_blank">
                    <Image alt={`${project.title} logo`} fill src={project.image} />
                  </a>
                </Block>
              </td>
              <td>
                <Block bottom="smallest" flexAlign="center">
                  <Typography inline="smallest" variant="h5">
                    {project.title}&nbsp;&nbsp;
                  </Typography>
                  <Badge variant="alternative">{project.year}</Badge>
                </Block>
                <Typography variant="small">{project.description}</Typography>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Block top="small">
        <Typography variant="small">
          ☞ Get in touch if you&apos;d like to learn more about these projects or see more examples
          of our work.
        </Typography>
      </Block>
    </ProjectsTableStyled>
  );
}
