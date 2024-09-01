import React from "react";
import { cn } from "@/lib/utils";

type TypographyProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  color?: "primary" | "secondary" | "tertiary" | "quaternary";
  weight?: "light" | "regular" | "medium" | "bold";
  align?: "left" | "center" | "right" | "justify";
  className?: string;
};

export const Typography = ({
  children,
  variant = "p",
  color = "primary",
  weight = "regular",
  align = "left",
  className,
  ...props
}: TypographyProps) => {
  const Tag = variant;

  const defaultClasses = {
    h1: "text-5xl lg:text-6xl font-bold",
    h2: "text-4xl lg:text-5xl font-bold",
    h3: "text-3xl lg:text-4xl font-bold",
    h4: "text-2xl lg:text-3xl font-bold",
    h5: "text-xl lg:text-2xl font-bold",
    h6: "text-md lg:text-xl font-bold",
    p: "text-base",
    span: "text-base",
  };

  return (
    <Tag
      className={cn(
        defaultClasses[variant],
        `text-${color}`,
        `font-${weight}`,
        `text-${align}`,
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};
