import React from "react";
import { cn } from "@/utils/root";
import SectionHeading from "@/components/shared/SectionHeading";

export type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
  sectionTitle?: string | React.ReactNode;
  description?: string | React.ReactNode;
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
    <section className={cn("relative mb-14 bg-transparent", className)}>
      <div className={cn("mx-auto", container ? "app-container" : null)}>
        {sectionTitle && (
          <SectionHeading className="text-black">{sectionTitle}</SectionHeading>
        )}
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
