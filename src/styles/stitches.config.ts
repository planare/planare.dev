import { createStitches } from '@stitches/react';

export const { styled, globalCss, getCssText, theme } = createStitches({
    theme: {
        colors: {
            background: 'rgb(255,255,255)',
            text: '#010163',
            link: 'rgb(226, 225, 241)',
            accent: 'rgb(210, 205, 255)',
            warning: 'rgb(248, 180, 107)',
            border: 'rgb(198, 195, 220)',
            orange: 'rgb(255, 156, 47)',
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
    },
});
