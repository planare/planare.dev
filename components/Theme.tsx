import { css, CSSAttribute, styled } from "goober";
import { createGlobalStyles } from "goober/global";
import { BIZ_UDPMincho } from "next/font/google";
import { CSSProperties } from "react";

const serif = BIZ_UDPMincho({
  fallback: ["monospace"],
  subsets: ["latin"],
  weight: ["400"],
  display: "block",
});

const theme = {
  colors: {
    background: "rgb(244, 247, 255)",
    border: "rgba(0, 0, 90, 0.75)",
    night: "rgb(0,0,30)",
    nightBorder: "rgba(244, 247, 255, 0.75)",
    text: "rgb(0,0,90)",
    link: "rgb(116, 66, 71)",
    nightLink: "rgb(217, 167, 172)",
  },
  spacing: {
    large: "4rem",
    largest: "8rem",
    normal: "2rem",
    small: "1rem",
    smallest: "0.5rem",
  },
};

const GlobalStyles = createGlobalStyles`
* {
    box-sizing: border-box;
    font-weight: 400 !important;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: ${serif.style.fontFamily};
    line-height: 1.5;
    font-size: 15px;
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};
  }

  @media screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 2dppx) {
    body {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
    }
  }

    a,
  a:visited,
  a:active {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    color: ${theme.colors.link};
    text-decoration: wavy underline 1px;
  }
    img {
    max-width: 100%;
    display: block;
       object-fit: fit !important;
    object-position: center;
  }
    svg {
    vertical-align: middle;
    height: 1.2rem;
    width: 1.2rem;
    object-fit: cover;
    align-self: center;
  }
   @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
   @media (prefers-color-scheme: dark) {
    body {
      background-color: ${theme.colors.night};
      color: ${theme.colors.background};
    }
     a,
    a:visited,
    a:active {
      color: ${theme.colors.background};
    }
    a:hover {
      color: ${theme.colors.nightLink};
    }
}
  @media (max-width: 900px) {
    body {
      font-size: 14px;
    }
  }
`;
type spacingTop = keyof typeof theme.spacing;
type spacingBottom = keyof typeof theme.spacing;

const Main = styled("main")(
  (props: { bottom?: spacingBottom; top?: spacingTop }): CSSAttribute | string => ({
    paddingBottom: props.bottom ? theme.spacing[props.bottom] : "0",
    paddingTop: props.top ? theme.spacing[props.top] : "0",
    paddingLeft: theme.spacing.normal,
    paddingRight: theme.spacing.normal,
    margin: "0 auto",
    maxWidth: "2000px",

    "@media (max-width: 900px)": {
      paddingLeft: theme.spacing.small,
      paddingRight: theme.spacing.small,
    },
  })
);

const Row = styled("section")(
  (props: {
    align?: CSSProperties["alignItems"];
    bottom?: spacingBottom;
    justify?: CSSProperties["justifyContent"];
    top?: spacingTop;
  }): CSSAttribute | string => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: props.justify ? props.justify : "space-between",
    alignItems: props.align ? props.align : "center",
    alignContent: "center",
    margin: "0 auto",

    gap: theme.spacing.normal,
    "@media (max-width: 900px)": {
      flexWrap: "wrap",
      justifyContent: "center",
    },
  })
);

const Column = styled("div")(
  (props: {
    align?: CSSProperties["textAlign"];
    items?: CSSProperties["alignItems"];
    justify?: CSSProperties["justifyContent"];
    width: string;
    widthCollapse?: string;
  }): CSSAttribute | string => ({
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: props.justify ? props.justify : "space-between",
    alignItems: props.items ? props.items : "normal",
    textAlign: props.align ? props.align : "left",
    margin: "0 auto",
    width: props.width,
    "@media (max-width: 900px)": {
      width: props.widthCollapse ? props.widthCollapse : "100%",
    },
  })
);

const Card = styled("div")((props: { css?: CSSAttribute }): CSSAttribute | string => ({
  border: `1px solid ${theme.colors.border}`,
  padding: theme.spacing.normal,
  height: "100%",
  "@media (prefers-color-scheme: dark)": {
    border: `1px solid ${theme.colors.nightBorder}`,
  },
  ...props.css,
}));

const Text = styled("span")(
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

const Button = styled("button")((): CSSAttribute | string => ({
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

const Div = styled("div")(
  (props: { bottom?: spacingBottom; top?: spacingTop }): CSSAttribute | string => ({
    paddingTop: props.top ? theme.spacing[props.top] : "0",
    paddingBottom: props.bottom ? theme.spacing[props.bottom] : "0",
  })
);

const Divider = styled("hr")(
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

const showDarkScheme = css({
  "@media (prefers-color-scheme: dark)": {
    display: "block !important",
  },
  "@media (prefers-color-scheme: light)": {
    display: "none !important",
  },
});

const showLightScheme = css({
  "@media (prefers-color-scheme: dark)": {
    display: "none !important",
  },
  "@media (prefers-color-scheme: light)": {
    display: "block !important",
  },
});

const hiddenCollapse = css({
  "@media (max-width: 900px)": {
    display: "none !important",
  },
});

const visibleCollapse = css({
  "@media (max-width: 900px)": {
    display: "block !important",
  },
  display: "none !important",
});

export {
  GlobalStyles,
  Main,
  Row,
  Column,
  Card,
  Text,
  Button,
  Div,
  Divider,
  showDarkScheme,
  showLightScheme,
  hiddenCollapse,
  visibleCollapse,
  theme,
};
