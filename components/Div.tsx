import { CSSAttribute, styled } from "goober";

import { theme, spacingBottom, spacingTop } from "./Theme";

export const Div = styled("div")(
  (props: { bottom?: spacingBottom; top?: spacingTop }): CSSAttribute | string => ({
    paddingTop: props.top ? theme.spacing[props.top] : "0",
    paddingBottom: props.bottom ? theme.spacing[props.bottom] : "0",
  })
);
