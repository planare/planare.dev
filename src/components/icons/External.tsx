import { SVGProps } from "react";

export const External = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M18 13v6a2 2 0 0 1-1 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6" style={{ opacity: 0.2 }} />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </svg>
);
