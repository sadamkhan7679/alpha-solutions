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
import { SERVICES_ICONS } from "@/data/services";
import { Typography } from "@/components/shared/Typography";
import { cn } from "@/lib/utils";

type ServiceItemProps = {
  service: ServiceItem;
  isDetail?: boolean;
};

const ServiceItemCard = ({ service, isDetail = false }: ServiceItemProps) => {
  const ServiceIcon =
    SERVICES_ICONS[service.key as keyof typeof SERVICES_ICONS];

  return (
    <Card className="w-full px-6 mb-10 broder-4 border-primary">
      <CardHeader
        className={cn(
          "flex flex-row items-center w-full text-primary",
          "border-b-4 border-primary",
        )}
      >
        {ServiceIcon && (
          <ServiceIcon width={60} height={60} className="mr-5" />
          // <service.Icon />
        )}
        <CardTitle className="flex flex-col">
          <Typography variant="h3">{service.title}</Typography>
          <span className="text-sm mt-2">{service.headline}</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <ListItems
              summary={service.detailedDescription}
              items={service.keyBenefits}
              itemClassName={cn("text-primary")}
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
