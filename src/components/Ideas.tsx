import React from "react";

import { Typography } from "./Typography";

import { ideasData } from "@/data/ideas";
import { styled, keyframes } from "@/styles/stitches.config";

const scrollAnimation = keyframes({
  "0%": { transform: "translateX(0)" },
  "100%": { transform: "translateX(calc(-100% - 3rem))" },
});

const IdeasStyled = styled("div", {
  display: "flex",
  overflow: "hidden",
  userSelect: "none",
  gap: "3rem",
});

const IdeasInnerStyled = styled("div", {
  flexShrink: 0,
  display: "flex",
  justifyContent: "space-around",
  minWidth: "100%",
  gap: "3rem",
  animation: `${scrollAnimation} 160s linear infinite`,
  "&:hover": {
    animationPlayState: "paused",
  },
});

export function Ideas(): JSX.Element {
  return (
    <IdeasStyled>
      <IdeasInnerStyled>
        {ideasData.map((idea, index) => (
          <Typography key={index} variant="h1">
            {idea}
          </Typography>
        ))}
      </IdeasInnerStyled>
      <IdeasInnerStyled aria-hidden="true">
        {ideasData.map((idea, index) => (
          <Typography key={`duplicate-${index}`} variant="h1">
            {idea}
          </Typography>
        ))}
      </IdeasInnerStyled>
    </IdeasStyled>
  );
}
