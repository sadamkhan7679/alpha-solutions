import React from "react";
import { cn } from "@/utils/root";
import SectionHeading from "@/components/shared/SectionHeading";

export type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
  sectionTitle?: string | React.ReactNode;
  description?: string | React.ReactNode;
  headingsContainer?: boolean;
  childrenContainer?: boolean;
  ActionComponent?: React.ReactNode;
};

const SectionContainer = ({
  children,
  className,
  sectionTitle,
  description,
  headingsContainer = true,
  childrenContainer = true,
  ActionComponent,
}: SectionContainerProps) => {
  return (
    <section className={cn("relative mb-14 bg-transparent", className)}>
      <div
        className={cn(
          "mx-auto flex flex-col lg:flex-row justify-between ",
          headingsContainer ? "app-container" : null,
        )}
      >
        <div>
          {sectionTitle && (
            <SectionHeading className="text-black">
              {sectionTitle}
            </SectionHeading>
          )}
          {description && (
            <p className="text-lg mb-5 text-justify">{description}</p>
          )}
        </div>
        {ActionComponent && (
          <div className="mt-8 lg:mt-0">{ActionComponent}</div>
        )}
      </div>
      <div className={cn(childrenContainer ? "app-container mx-auto" : null)}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
