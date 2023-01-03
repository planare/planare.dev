import localFont from "@next/font/local";
import { ReactNode } from "react";
import css from "styled-jsx/css";

const Standard = localFont({
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  preload: true,
  src: [
    {
      path: "../fonts/standard-bold.woff2",
      style: "normal",
      weight: "700",
    },
    {
      path: "../fonts/standard-book.woff2",
      style: "normal",
      weight: "400",
    },
  ],
});

export const theme = {
  colors: {
    background: "rgb(244, 247, 255)",
    border: "rgba(0, 0, 90, 0.33)",
    night: "rgb(0,0,30)",
    nightBorder: "rgba(244, 247, 255, 0.33)",
    text: "rgb(0,0,90)",
  },
  fontFamily: {
    mono: "Menlo, Monaco, monospace",
    sansSerif: Standard.style.fontFamily,
  },
  spacing: {
    large: "4rem",
    largest: "8rem",
    normal: "2rem",
    small: "1rem",
    smallest: "0.5rem",
  },
};

export const global = css.global`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${theme.fontFamily.sansSerif};
    line-height: 1.4;
    font-size: 16px;
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
    color: inherit;
    text-decoration: underline;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    font: inherit;
    color: inherit;
    cursor: pointer;
    outline: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  main {
    padding: 2rem;
    min-height: 100vh;
  }

  section {
    max-width: 42rem;
    padding: ${theme.spacing.normal};
    border: 0.1rem dashed ${theme.colors.border};
    border-radius: ${theme.spacing.smallest};
  }
  img {
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
  .logo-dark {
    display: none;
  }
  .logo {
    display: block;
  }
  @media (prefers-color-scheme: dark) {
    body {
      background-color: ${theme.colors.night};
      color: ${theme.colors.background};
    }
    section {
      border-color: ${theme.colors.nightBorder};
    }
    a,
    a:visited,
    a:active {
      color: ${theme.colors.background};
    }
    a:hover {
      color: ${theme.colors.background};
    }
    .logo-dark {
      display: block;
    }
    .logo {
      display: none;
    }
  }
  @media (max-width: 900px) {
    main {
      padding: 1rem;
      display: block;
    }
    section {
      padding: 1.75rem;
      width: 100%;
    }
  }
`;

export default function Provider({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div>
      {children}
      <style global jsx>
        {global}
      </style>
    </div>
  );
}

export function Layout({ children }: { children: ReactNode }): JSX.Element {
  return <main>{children}</main>;
}
