import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/utils/root";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
  sectionTitle?: string;
  description?: string;
};

const SectionContainer = ({
  children,
  className,
  sectionTitle,
  description,
}: SectionContainerProps) => {
  return (
    <Card className={cn("py-10 px-8 mb-14 bg-transparent", className)}>
      {sectionTitle && <h1 className="heading mb-5">{sectionTitle}</h1>}
      {description && (
        <p className="text-lg text-zinc-500 mb-5">{description}</p>
      )}
      <div>{children}</div>
    </Card>
  );
};

export default SectionContainer;
