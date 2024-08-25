import { SVGIconProps } from "@/types/root";
export const CircleIcon = ({
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
      <circle cx={12} cy={12} r={10} />
    </svg>
  );
};
