import { createGlobalStyles } from "goober/global";
import { BIZ_UDPMincho } from "next/font/google";

const serif = BIZ_UDPMincho({
  fallback: ["monospace"],
  subsets: ["latin"],
  weight: ["400"],
  display: "block",
});

export const theme = {
  colors: {
    background: "rgb(244, 247, 255)",
    border: "rgba(0, 0, 90, 0.66)",
    night: "rgb(0,0,30)",
    nightBorder: "rgba(244, 247, 255, 0.66)",
    text: "rgb(0,0,90)",
    link: "rgb(116, 66, 71)",
    nightLink: "rgb(217, 167, 172)",
    overlay: "rgba(0, 0, 90, 0.033)",
    nightOverlay: "rgba(244, 247, 255, 0.033)",
  },
  spacing: {
    large: "4rem",
    largest: "8rem",
    normal: "2rem",
    small: "1rem",
    smallest: "0.5rem",
  },
};

export type spacingTop = keyof typeof theme.spacing;
export type spacingBottom = keyof typeof theme.spacing;

export const GlobalStyles = createGlobalStyles`
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
