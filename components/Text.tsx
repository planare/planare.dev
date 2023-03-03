import { CSSAttribute, styled } from "goober";

import { theme, spacingBottom, spacingTop } from "./Theme";

export const Text = styled("span")(
  (props: {
    as?: string;
    bottom?: spacingBottom;
    css?: CSSAttribute;
    top?: spacingTop;
  }): CSSAttribute | string => ({
    paddingTop: props.top ? theme.spacing[props.top] : "0",
    paddingBottom: props.bottom ? theme.spacing[props.bottom] : "0",
  })
);
