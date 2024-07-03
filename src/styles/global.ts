import { Space_Grotesk } from "next/font/google";

import { globalCss, theme } from "./stitches.config";

export const globalFont = Space_Grotesk({
    subsets: ["latin-ext"],
    
});

export const globalStyles = globalCss({
    '*': {
        boxSizing: 'border-box',
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        fontDisplay: 'swap',
        marginBlockStart: 0,
    },
    'body': {
        padding: 0,
        margin: 0,
        fontFamily: theme.fonts.primary,
        lineHeight: '1.4',
        fontSize: '17px',
        color: theme.colors.text,
        backgroundColor: theme.colors.background,
    },
    'a, a:visited, a:active': {
        color: 'inherit',
        transition: 'all 0.2s ease',
        textDecoration: 'none',
    },
    'a:hover': {
        opacity: 0.8,
    },
    'img': {
        maxWidth: '100%',
        display: 'block',
        borderRadius: '0.75rem',
    },
    'svg': {
        width: "1.6rem",
        height: "1.6rem",
        verticalAlign: "middle",
        marginRight: "0.5rem",
}
});