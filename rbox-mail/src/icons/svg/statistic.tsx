import type { SVGProps } from "react";

const StatisticIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.33317 6.28573H0.666504V19.1191H5.33317V6.28573Z"
      fill="#AEAEAE"
    />
    <path
      d="M19.3332 10.9524H14.6665V19.1191H19.3332V10.9524Z"
      fill="#AEAEAE"
    />
    <path
      d="M12.3332 0.452393H7.6665V19.1191H12.3332V0.452393Z"
      fill="#AEAEAE"
    />
  </svg>
);

export default StatisticIcon;
