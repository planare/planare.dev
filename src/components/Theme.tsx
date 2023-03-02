import { BIZ_UDPMincho } from "@next/font/google";
import { ReactNode } from "react";
import css from "styled-jsx/css";

const serif = BIZ_UDPMincho({
  fallback: ["monospace"],
  subsets: ["latin"],
  weight: ["400"],
});

export const theme = {
  colors: {
    background: "rgb(244, 247, 255)",
    border: "rgba(0, 0, 90, 0.33)",
    night: "rgb(0,0,30)",
    nightBorder: "rgba(244, 247, 255, 0.33)",
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

export const global = css.global`
  * {
    box-sizing: border-box;
    font-weight: 400 !important;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: ${serif.style.fontFamily};
    line-height: 1.5;
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
    color: ${theme.colors.link};
    text-decoration: wavy underline 1px;
  }

  button {
    transition: all 0.42s ease-in-out;
    border: 0.1rem solid ${theme.colors.border};
    background: ${theme.colors.text};
    color: ${theme.colors.background};
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    padding: calc(${theme.spacing.smallest} / 3) calc(${theme.spacing.smallest} / 1.5);
    border-radius: ${theme.spacing.smallest};
  }

  button:hover {
    background: ${theme.colors.background};
    color: ${theme.colors.text};
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
    max-width: 70rem;
    margin: 0 auto;
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

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .spin {
    animation: spin 7s linear infinite;
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
      color: ${theme.colors.nightLink};
    }
    button {
      background: ${theme.colors.night};
      color: ${theme.colors.background};
      border-color: ${theme.colors.nightBorder};
    }
    button:hover {
      background: ${theme.colors.background};
      color: ${theme.colors.night};
    }

    .logo-dark {
      display: block;
    }
    .logo {
      display: none;
    }
  }
  @media (max-width: 900px) {
    body {
      font-size: 14px;
    }

    main {
      padding: 1rem;
      display: block;
    }
    section {
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
