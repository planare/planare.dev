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
  alignItems: "center",
  gap: "3rem",
  animation: `${scrollAnimation} 160s linear infinite`,
  "&:hover": {
    animationPlayState: "paused",
  },
  h2: {
    color: "$background",
    WebkitTextStroke: "0.1rem rgb(1, 1, 99)",
    transition: "all 0.2s ease-in-out",
    marginBottom: "0 !important",
    "&:hover": {
      color: "$text",
      WebkitTextStroke: "0.1rem rgba(255, 255, 255, 0.1)",
    },
  },
});

const IdeasInnerDuplicateStyled = styled(IdeasInnerStyled, {
  animationDelay: "80s",
});

export function Ideas(): JSX.Element {
  return (
    <IdeasStyled>
      <IdeasInnerStyled>
        {ideasData.map((idea, index) => (
          <Typography key={index} variant="h2">
            {idea}
          </Typography>
        ))}
      </IdeasInnerStyled>
      <IdeasInnerDuplicateStyled aria-hidden="true">
        {ideasData.map((idea, index) => (
          <Typography key={`duplicate-${index}`} variant="h1">
            {idea}
          </Typography>
        ))}
      </IdeasInnerDuplicateStyled>
    </IdeasStyled>
  );
}
