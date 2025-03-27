import { createStitches } from '@stitches/react';

const PHONE_BREAKPOINT = 980;

export function checkBreakpoint(): { isPhone: boolean } {
    return {
        isPhone: typeof window !== 'undefined' && window.innerWidth <= PHONE_BREAKPOINT,
    };
}

export const { getCssText, globalCss, keyframes, styled, theme } = createStitches({
    theme: {
        colors: {
            accent: 'rgb(228, 225, 253)',
            background: '#1f1f5b',
            border: 'rgba(255, 255, 255, 0.3)',
            darkest: '#06062a',
            overlay: 'rgba(255, 255, 255, 0.05)',
            text: 'rgb(255, 255, 255)',
        },
        fonts: {
            primary: 'Space Grotesk, sans-serif',
        },
        radii: {
            large: "1.5rem",
            normal: "1rem",
            small: "0.5rem",
        },
        space: {
            large: '3rem',
            largest: '6rem',
            normal: '1.5rem',
            small: '1rem',
            smallest: '0.5rem',
        }
    },
    utils: {
        phone: (value: unknown) => ({
            [`@media (max-width: ${PHONE_BREAKPOINT}px)`]: value,
        }),
    },
});
