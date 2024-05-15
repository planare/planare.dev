import { Space_Grotesk } from "next/font/google";

export const font = Space_Grotesk({
    subsets: ["latin-ext"],
});

export const theme = {
    colors: {
        background: "rgb(255,255,255)",
        text: "#010163",
        link: "rgb(226, 225, 241)",
        accent: "rgb(210, 205, 255)",
        warning: "rgb(255 156 47)",
    },
    spacing: {
        large: "4rem",
        largest: "6rem",
        normal: "2rem",
        small: "1rem",
        smallest: "0.5rem",
    },
    font: "Space Grotesk', sans-serif",
};
