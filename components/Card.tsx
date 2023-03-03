import { CSSAttribute, styled } from "goober";

import { theme } from "./Theme";

export const Card = styled("div")((props: { css?: CSSAttribute }): CSSAttribute | string => ({
  border: `1px solid ${theme.colors.border}`,
  padding: theme.spacing.normal,
  height: "100%",
  "@media (prefers-color-scheme: dark)": {
    border: `1px solid ${theme.colors.nightBorder}`,
  },
  ...props.css,
}));
