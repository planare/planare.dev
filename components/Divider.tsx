import { CSSAttribute, styled } from "goober";

import { theme, spacingBottom, spacingTop } from "./Theme";

export const Divider = styled("hr")(
  (props: { bottom?: spacingBottom; top?: spacingTop }): CSSAttribute | string => ({
    marginTop: props.top ? theme.spacing[props.top] : "0",
    marginBottom: props.bottom ? theme.spacing[props.bottom] : "0",
    border: "none",
    height: "1px",
    opacity: 0.5,
    color: theme.colors.border,
    background: theme.colors.border,
    "@media (prefers-color-scheme: dark)": {
      color: theme.colors.nightBorder,
      background: theme.colors.nightBorder,
    },
  })
);
