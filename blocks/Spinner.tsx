import { keyframes, styled } from "goober";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const Spinner = styled("div")({
  animation: `${spin} 7s linear infinite`,
  fontSize: "3rem",
  opacity: 0.5,
});
