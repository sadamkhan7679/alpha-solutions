// "use client";
import React from "react";
import { ServicesGrid, ServicesGridItem } from "./ServicesGrid";
import { servicesList } from "@/constants/services";

type ServicesListProps = {};

const ServicesList: React.FC<ServicesListProps> = () => {
  return (
    <div>
      <h1>Services List</h1>
      <ServicesGrid className="w-full mx-auto">
        {servicesList.map((service, i) => (
          <ServicesGridItem
            key={i}
            // title={item.title}
            // description={item.description}
            // header={item.header}
            // icon={item.icon}
            color="green"
            service={service}
            // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </ServicesGrid>
    </div>
  );
};

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
export default ServicesList;
