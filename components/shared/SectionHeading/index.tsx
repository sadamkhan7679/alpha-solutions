import React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/shared/Typography";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionHeading = ({ children, className }: SectionHeadingProps) => {
  return (
    <Typography variant="h3" className={cn("mt-5 mb-10", className)}>
      {children}
    </Typography>
  );
};

export default SectionHeading;
