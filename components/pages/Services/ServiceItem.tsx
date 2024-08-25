import { ServiceItem } from "@/types/services";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import ListItems from "@/components/shared/ListItems";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/shared/CTA";
import TagsList from "@/components/shared/TagsList";

type ServiceItemProps = {
  service: ServiceItem;
  isDetail?: boolean;
};

const ServiceItemCard = ({ service, isDetail = false }: ServiceItemProps) => {
  return (
    <Card className="w-full px-6 mb-10">
      <CardHeader className="flex flex-row items-center w-full app-divider">
        {service.Icon && (
          <Image
            src={service.Icon}
            alt={service.title}
            width={48}
            height={48}
            className="mr-3"
          />
          // <service.Icon />
        )}
        <CardTitle className="flex flex-col">
          <span>{service.title}</span>
          <span className="text-sm mt-2">{service.headline}</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <ListItems
              summary={service.detailedDescription}
              items={service.keyBenefits}
            />
            {!isDetail && (
              <Link href={`/services/${service.slug}`}>
                <Button className="mt-4">Learn More</Button>
              </Link>
            )}
          </div>
          <div className="flex flex-row items-start justify-end">
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
        {isDetail ? (
          <div>
            <div className="mt-4">
              <TagsList tags={service.technologies} />
            </div>

            <div className="flex items-center">
              <CTA />
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default ServiceItemCard;
