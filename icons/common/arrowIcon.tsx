import { SVGIconProps } from "@/types/root";
import { cn } from "@/lib/utils";

type ArrowIconProps = SVGIconProps & {
  direction?: "up" | "down" | "left" | "right";
};

export const ArrowIcon = ({
  width = 48,
  height = 48,
  direction = "right",
  ...props
}: SVGIconProps) => {
  const getDirectionClass = (props: SVGIconProps) => {
    switch (direction) {
      case "up":
        return "transform rotate-90";
      case "down":
        return "transform -rotate-90";
      case "left":
        return "transform rotate-180";
      case "right":
        return "";
      default:
        return "";
    }
  };

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
      className={cn(getDirectionClass(props), props.className)}
      {...props}
    >
      <circle cx={12} cy={12} r={10} />
      <path d="m10 8 4 4-4 4" />
    </svg>
  );
};
