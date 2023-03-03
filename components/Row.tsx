import { CSSAttribute, styled } from "goober";
import { CSSProperties } from "react";

import { spacingBottom, spacingTop } from "./Theme";

export const Row = styled("section")(
  (props: {
    align?: CSSProperties["alignItems"];
    bottom?: spacingBottom;
    justify?: CSSProperties["justifyContent"];
    top?: spacingTop;
  }): CSSAttribute | string => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: props.justify ? props.justify : "space-between",
    alignItems: props.align ? props.align : "normal",
    paddingTop: props.top ? props.top : "0",
    paddingBottom: props.bottom ? props.bottom : "0",

    "@media (max-width: 900px)": {
      flexWrap: "wrap",
      justifyContent: "center",
    },
  })
);
