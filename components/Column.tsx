import { CSSAttribute, styled } from "goober";
import { CSSProperties } from "react";

import { theme } from "./Theme";

export const Column = styled("div")(
  (props: {
    align?: CSSProperties["textAlign"];
    items?: CSSProperties["alignItems"];
    justify?: CSSProperties["justifyContent"];
    width: string;
    widthCollapse?: string;
  }): CSSAttribute | string => ({
    display: "flex",
    flexDirection: "column",
    alignItems: props.items ? props.items : "normal",
    justifyContent: props.justify ? props.justify : "normal",
    textAlign: props.align ? props.align : "left",
    width: props.width,
    marginLeft: theme.spacing.small,
    marginRight: theme.spacing.small,
    flex: "1 1 auto",

    "@media (max-width: 900px)": {
      width: props.widthCollapse ? props.widthCollapse : "100%",
      marginLeft: theme.spacing.smallest,
      marginRight: theme.spacing.smallest,
    },
  })
);
