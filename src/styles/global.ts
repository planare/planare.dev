import { Space_Grotesk } from "next/font/google";

import { globalCss, theme } from "./stitches.config";

export const globalFont = Space_Grotesk({
    subsets: ["latin-ext"],
    
});

export const globalStyles = globalCss({
    '*': {
        boxSizing: 'border-box',
        fontDisplay: 'swap',
        marginBlockStart: 0,
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
    },
    'a, a:visited, a:active': {
        color: 'inherit',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
    },
    'a:hover': {
        opacity: 0.8,
    },
    'body': {
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        fontFamily: theme.fonts.primary,
        fontSize: '17px',
        lineHeight: '1.4',
        margin: 0,
        padding: 0,
    },
    'img': {
        borderRadius: '0.75rem',
        display: 'block',
        maxWidth: '100%',
    },
    'svg': {
        height: "1.6rem",
        marginRight: "0.5rem",
        verticalAlign: "middle",
        width: "1.6rem",
}
});