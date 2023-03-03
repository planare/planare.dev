import { SVGProps } from "react";

export const Flag = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg height="650" viewBox="0 0 7410 3900" width="1235" {...props}>
    <defs>
      <pattern height="420" id="s" patternUnits="userSpaceOnUse" width="494">
        <path d="m247 90 70.53 217.08-184.66-134.16h228.26L176.47 307.08z" fill="#fff" />
      </pattern>
    </defs>
    <path d="m0 0h7410v3900H0z" fill="#fff" />
    <path d="m3705 0v3900" stroke="#000" strokeDasharray="300" strokeWidth="7410" />
    <path d="m0 0h2964v2100H0z" fill="#000" />
    <g fill="url(#s)">
      <path d="m0 0h2964v2100H0z" />
      <path d="m0 0h2470v1680H0z" transform="translate(247,210)" />
    </g>
  </svg>
);
