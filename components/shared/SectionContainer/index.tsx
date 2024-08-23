import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/utils/root";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
  sectionTitle?: string | React.ReactNode;
  description?: string;
};

const SectionContainer = ({
  children,
  className,
  sectionTitle,
  description,
}: SectionContainerProps) => {
  return (
    <section
      className={cn("py-10 px-8 mb-14 bg-transparent container", className)}
    >
      {sectionTitle && <h1 className="heading mb-5">{sectionTitle}</h1>}
      {description && (
        <p className="text-lg mb-5 text-justify">{description}</p>
      )}
      <div>{children}</div>
    </section>
  );
};

export default SectionContainer;
