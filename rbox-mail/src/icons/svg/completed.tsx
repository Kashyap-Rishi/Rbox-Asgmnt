import type { SVGProps } from "react";

const CompletedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="12" height="12" rx="6" fill="#E6D162" />
  </svg>
);

export default CompletedIcon;
