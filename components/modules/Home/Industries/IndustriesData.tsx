"use client";

import Image from "next/image";
import { IndustriesTabs } from "@/components/modules/Home/Industries/IndustriesTabs";
import { industriesList, Industry } from "@/constants/industries";
import React from "react";
import ListItems from "@/components/shared/ListItems";
import { Typography } from "@/components/shared/Typography";
import { TECH_STACK_LIST } from "@/data/tech-stack";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type IndustryTab = {
  title: string;
  value: string;
  content: string | React.ReactNode;
};

export const IndustriesData = () => {
  return (
    <Tabs defaultValue={industriesList[0].title} className="w-full">
      <TabsList className="bg-primary gap-10 flex flex-wrap items-center rounded-none rounded-t-4xl">
        {industriesList.map((item, index) => (
          <TabsTrigger
            key={index}
            value={item.title}
            className="text-white h-12 px-8"
          >
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {industriesList.map((industry, index) => (
        <TabsContent
          key={index}
          value={industry.title}
          className="border-8 border-primary px-4 py-4 lg:px-8 lg:py-8 mt-0 rounded-b-4xl"
        >
          <IndustryCard industry={industry} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export const IndustryCard = ({ industry }: { industry: Industry }) => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-10">
      <div className="w-full lg:w-1/2">
        <Typography variant="h2" className="text-2xl font-bold">
          {industry.title}
        </Typography>
        <ListItems
          summary={industry.description}
          items={industry.services}
          itemClassName="text-primary"
        />
        <Link href={`/industries/${industry.slug}`}>
          <Button>Learn More</Button>
        </Link>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="mx-auto relative h-60 lg:h-112 w-full">
          <Image
            src={industry.image}
            alt={industry.title}
            // sizes="600px"
            fill
            style={{
              objectFit: "contain",
            }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
