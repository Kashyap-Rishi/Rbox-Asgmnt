import type { SVGProps } from "react";

const InterestedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="6" cy="6" r="6" fill="#C4ECDA" />
    <rect x="2" y="2" width="8" height="8" rx="4" fill="#46C18D" />
  </svg>
);

export default InterestedIcon;
