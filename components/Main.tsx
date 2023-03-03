import { CSSAttribute, styled } from "goober";

import { theme } from "./Theme";

export const Main = styled("main")((): CSSAttribute | string => ({
  margin: "0 auto",
  padding: `${theme.spacing.normal} ${theme.spacing.small}`,
  maxWidth: "2000px",

  "@media (max-width: 900px)": {
    padding: `${theme.spacing.small} ${theme.spacing.smallest} !important`,
  },
}));
