import { css } from "goober";

export const showDarkScheme = css({
  "@media (prefers-color-scheme: dark)": {
    display: "block !important",
  },
  "@media (prefers-color-scheme: light)": {
    display: "none !important",
  },
});

export const showLightScheme = css({
  "@media (prefers-color-scheme: dark)": {
    display: "none !important",
  },
  "@media (prefers-color-scheme: light)": {
    display: "block !important",
  },
});

export const hiddenCollapse = css({
  "@media (max-width: 900px)": {
    display: "none !important",
  },
});

export const visibleCollapse = css({
  "@media (max-width: 900px)": {
    display: "block !important",
  },
  display: "none !important",
});
