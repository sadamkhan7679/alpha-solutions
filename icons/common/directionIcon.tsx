import { SVGIconProps } from "@/types/root";

export const DirectionIcon = ({
  width = 48,
  height = 48,
  ...props
}: SVGIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
};
