import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/utils/root";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
  sectionTitle?: string | React.ReactNode;
  description?: string;
  container?: boolean;
};

const SectionContainer = ({
  children,
  className,
  sectionTitle,
  description,
  container = true,
}: SectionContainerProps) => {
  return (
    <section className={cn("relative mb-14 bg-transparent")}>
      <div className={cn("app-container mx-auto")}>
        {sectionTitle && <h1 className="heading mb-5">{sectionTitle}</h1>}
        {description && (
          <p className="text-lg mb-5 text-justify">{description}</p>
        )}
      </div>
      <div className={cn(container ? "app-container mx-auto" : null)}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
