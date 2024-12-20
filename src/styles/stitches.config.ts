import { createStitches } from '@stitches/react';

const PHONE_BREAKPOINT = 980;

export function checkBreakpoint(): { isPhone: boolean } {
    return {
        isPhone: typeof window !== 'undefined' && window.innerWidth <= PHONE_BREAKPOINT,
    };
}

export const { styled, keyframes, globalCss, getCssText, theme } = createStitches({
    theme: {
        colors: {
            background: 'rgb(255,255,255)',
            text: '#010163',
            accent: 'rgb(228, 225, 253)',
            overlay: 'rgba(1, 1, 99, 0.05)',
            border: 'rgba(1, 1, 99, 0.2)',
        },
        space: {
            large: '4rem',
            largest: '6rem',
            normal: '2rem',
            small: '1rem',
            smallest: '0.5rem',
        },
        fonts: {
            primary: 'Space Grotesk, sans-serif',
        },
        radii: {
            small: "0.33rem",
            normal: "0.75rem",
            large: "1rem",
        }
    },
    utils: {
        phone: (value: unknown) => ({
            [`@media (max-width: ${PHONE_BREAKPOINT}px)`]: value,
        }),
    },
});
