// Restored from ref/webview/assets/index-eq1Q1wHr-B5eOXH6-.js
// Card icon from the Kakao artifact icon pack.
import type { ReactNode, SVGProps } from "react";
const KakaoCard = (props: SVGProps<SVGSVGElement>): ReactNode => {
  let iconPart69 = (
    <rect
      x={4}
      y={8}
      width={72}
      height={64}
      rx={9.11392}
      fill="url(#paint0_linear_298_22511)"
    />
  );
  let iconPart70 = {
    maskType: "alpha",
  };
  let iconPart71 = (
    <mask
      id="mask0_298_22511"
      style={iconPart70}
      maskUnits="userSpaceOnUse"
      x={4}
      y={8}
      width={72}
      height={64}
    >
      <rect
        x={76}
        y={72}
        width={72}
        height={64}
        rx={8}
        transform="rotate(-180 76 72)"
        fill="#B4B4B4"
      />
    </mask>
  );
  let iconPart72 = (
    <g mask="url(#mask0_298_22511)">
      <path
        d="M12 8L40 8L68 8.00001C72.4183 8.00001 76 11.5817 76 16L76 22.6334C76 25.494 74.4726 28.1369 71.994 29.5651L43.994 45.6987C41.5218 47.1231 38.4781 47.1231 36.006 45.6986L8.00599 29.5651C5.52741 28.1369 4 25.494 4 22.6334L4 16C4 11.5817 7.58173 8 12 8Z"
        fill="url(#paint1_linear_298_22511)"
      />
    </g>
  );
  let iconPart73 = (
    <g filter="url(#filter0_ii_298_22511)">
      <path
        d="M27.3462 24.9517C33.4178 22.2316 38.501 25.9785 39.992 28.2453C45.1785 22.1424 51.5091 24.1072 53.8167 25.4174C55.777 26.5305 62.0965 31.3729 59.3467 41.0612C57.4827 47.6287 49.5279 54.1057 43.7278 57.8384C41.4912 59.2777 38.6451 59.2697 36.407 57.8222C30.8838 54.2501 22.9611 47.8936 20.6993 40.6253C19.1915 35.7799 19.7567 28.3519 27.3462 24.9517Z"
        fill="url(#paint2_linear_298_22511)"
      />
    </g>
  );
  let iconPart74 = (
    <filter
      id="filter0_ii_298_22511"
      x={18.0288}
      y={22}
      width={44.0005}
      height={38.9128}
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dx={2} dy={2} />
      <feGaussianBlur stdDeviation={1} />
      <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"
      />
      <feBlend
        mode="normal"
        in2="shape"
        result="effect1_innerShadow_298_22511"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dx={-2} dy={-2} />
      <feGaussianBlur stdDeviation={1} />
      <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"
      />
      <feBlend
        mode="normal"
        in2="effect1_innerShadow_298_22511"
        result="effect2_innerShadow_298_22511"
      />
    </filter>
  );
  let iconPart75 = (
    <linearGradient
      id="paint0_linear_298_22511"
      x1={40}
      y1={8}
      x2={40}
      y2={72}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0.302813} stopColor="#FFB3B3" />
      <stop offset={1} stopColor="#FFEAF3" />
    </linearGradient>
  );
  let iconPart76 = (
    <linearGradient
      id="paint1_linear_298_22511"
      x1={40}
      y1={8.00001}
      x2={40}
      y2={48}
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#FFE2E3" />
      <stop offset={0.599349} stopColor="#FFF4F4" />
    </linearGradient>
  );
  let iconPart77 = (
    <defs>
      {iconPart74}
      {iconPart75}
      {iconPart76}
      <linearGradient
        id="paint2_linear_298_22511"
        x1={40}
        y1={24}
        x2={40}
        y2={59.9999}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.149038} stopColor="#FF807E" />
        <stop offset={1} stopColor="#FF1011" />
      </linearGradient>
    </defs>
  );
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 80 80"
      fill="currentColor"
      {...props}
    >
      {iconPart69}
      {iconPart71}
      {iconPart72}
      {iconPart73}
      {iconPart77}
    </svg>
  );
};
KakaoCard.displayName = "KakaoCard";
export default KakaoCard;
