import localFont from '@next/font/local';
import { ReactNode } from 'react';
import css from 'styled-jsx/css';

const Standard = localFont({
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
  preload: true,
  src: [
    {
      path: '../fonts/standard-bold.woff2',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../fonts/standard-bold.woff',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../fonts/standard-book.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../fonts/standard-book.woff',
      style: 'normal',
      weight: '400',
    },
  ],
});

export const theme = {
  colors: {
    background: 'rgb(255,255,255)',
    border: 'rgba(0,0,0,0.5)',
    button: '#000',
    hover: '#000',
    tag: 'rgba(80, 80, 80, 0)',
    text: 'rgb(0,0,0)',
  },
  fontFamily: {
    mono: 'Menlo, Monaco, monospace',
    sansSerif: Standard.style.fontFamily,
  },
  spacing: {
    large: '4rem',
    largest: '8rem',
    normal: '2rem',
    small: '1rem',
    smallest: '0.5rem',
  },
};

const global = css.global`
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

  @media screen and (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    body {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
    }
  }

  * {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    display: block;
  }

  main {
    padding: 2rem;
    min-height: 100vh;
  }
  @media (max-width: 900px) {
    main {
      padding: 1rem;
      display: block;
    }
  }
  section {
    border: 0.1rem solid ${theme.colors.border};
    border-radius: 0.5rem;
    background-color: ${theme.colors.tag};
    padding: 2rem;
    max-width: 40rem;
  }
  @media (max-width: 900px) {
    section {
      padding: 1.75rem;
      width: 100%;
    }
  }

  img {
    object-fit: fit !important;
    object-position: center;
  }
  a,
  a:visited,
  a:active {
    color: ${theme.colors.text};
    text-decoration: none;
  }
  a:hover {
    color: ${theme.colors.text};
    border-bottom: 0.1rem solid ${theme.colors.border};
  }
  svg {
    vertical-align: middle;
    height: 1rem;
    width: 1rem;
  }
`;

export default function Provider({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div>
      {children}
      <style jsx global>
        {global}
      </style>
    </div>
  );
}

export function Layout({ children }: { children: ReactNode }): JSX.Element {
  return <main>{children}</main>;
}
