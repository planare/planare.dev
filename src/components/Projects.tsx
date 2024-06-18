/* eslint-disable @next/next/no-img-element */
import React from "react";

import { projectsData } from "../data/projects";

import { styled } from "@/styles/stitches.config"; // Adjust the import path as necessary

const ProjectsTableStyled = styled("div", {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "1rem",
    fontSize: "1.1rem",

    td: {
      textAlign: "left",
      padding: "$small 0", // Assuming 'small' is defined in your theme's space scale
      borderBottom: "1px solid $accent", // Assuming 'accent' is defined in your theme's colors
    },
  },
});

export function Projects(): JSX.Element {
  return (
    <ProjectsTableStyled>
      <h2>Selected Projects</h2>
      <table>
        <tbody>
          {projectsData.map((project, index) => (
            <tr key={index}>
              <td>
                <div style={{ width: "15rem" }}>
                  <img alt={`${project.title} logo`} src={project.image} />
                </div>
              </td>
              <td>
                <h5>
                  {project.title}&nbsp;&nbsp;
                  <span className="badge alternative">{project.year}</span>
                </h5>
                <small>{project.description}</small>
                <div
                  style={{
                    display: "flex",
                    gap: "$smallest",
                    flexWrap: "wrap",
                    paddingTop: "$small",
                  }}>
                  {project.work &&
                    project.work.map((work, idx) => <span key={idx}>{work.title}</span>)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ paddingTop: "$normal" }}>
        <small>
          ☞ Get in touch if you&apos;d like to learn more about these projects or see more examples
          of our work.
        </small>
      </div>
    </ProjectsTableStyled>
  );
}
