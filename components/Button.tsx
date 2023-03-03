import { CSSAttribute, styled } from "goober";

import { theme } from "./Theme";

export const Button = styled("button")((): CSSAttribute | string => ({
  border: `1px solid ${theme.colors.border}`,
  borderRadius: "0.5rem",
  padding: theme.spacing.small,
  margin: theme.spacing.smallest,
  cursor: "pointer",
  outline: "inherit",
  transition: "all 0.42s ease-in-out",
  background: `${theme.colors.text}`,
  color: `${theme.colors.background}`,

  ":hover": {
    background: `${theme.colors.background}`,
    color: `${theme.colors.text}`,
  },
}));
