import { css } from "goober";

import { theme } from "./Theme";

export const Pane = css({
  height: `calc(100vh - ${theme.spacing.large})`,
  width: "100%",
  maxHeight: `calc(100vh - ${theme.spacing.large})`,
  overflow: "scroll",

  "@media (max-width: 900px)": {
    height: `calc(100vh - ${theme.spacing.normal})`,
    maxHeight: `calc(100vh - ${theme.spacing.normal})`,
  },
});

export const FullImage = css({
  width: "100%",
  height: "auto",
  img: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    position: "relative",
  },
  cursor: "e-resize",
});
