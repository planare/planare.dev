import { ideasData } from "@/data/ideas";
import { styled, keyframes } from "@/styles/stitches.config";
import React, { type JSX } from "react";

import { Typography } from "./Typography";

const scrollAnimation = keyframes({
  "0%": { transform: "translateX(0)" },
  "100%": { transform: "translateX(calc(-100% - 3rem))" },
});

const IdeasStyled = styled("div", {
  display: "flex",
  gap: "3rem",
  overflow: "hidden",
  userSelect: "none",
});

const IdeasInnerStyled = styled("div", {
  "&:hover": {
    animationPlayState: "paused",
  },
  alignItems: "center",
  animation: `${scrollAnimation} 160s linear infinite`,
  display: "flex",
  flexShrink: 0,
  gap: "3rem",
  h2: {
    "&:hover": {
      color: "$text",
      WebkitTextStroke: "0.1rem rgba(255, 255, 255, 0.1)",
    },
    color: "$darkest",
    marginBottom: "0 !important",
    transition: "all 0.2s ease-in-out",
    WebkitTextStroke: "0.1rem #fff",
  },
  justifyContent: "space-around",
  minWidth: "100%",
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
