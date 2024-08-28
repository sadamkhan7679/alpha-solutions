import React from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionContainer from "@/components/shared/SectionContainer";
import { TeamIcon } from "@/icons/common/TeamIcon";
import { UserIcon } from "@/icons/common/UserIcon";
import { CalenderIcon } from "@/icons/common/CalenderIcon";
import { FolderIcon } from "@/icons/common/FolderIcon";

type Highlight = {
  metric: string;
  value: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const keyHighlights: {
  headline: string;
  title: string;
  highlights: Highlight[];
} = {
  headline: "Transforming Ideas into Digital Success Stories",
  title: "Our Impact by the Numbers",
  highlights: [
    {
      metric: "Projects Completed",
      value: "50+",
      Icon: FolderIcon,
    },
    {
      metric: "Years of Experience",
      value: "20+",
      Icon: CalenderIcon,
    },
    {
      metric: "Satisfied Clients",
      value: "50+",
      Icon: UserIcon,
    },
    {
      metric: "Team Members",
      value: "20+",
      Icon: TeamIcon,
    },
  ],
};

const KeyHighlights = () => {
  return (
    <SectionContainer
      sectionTitle={
        <span>
          Transforming Ideas into
          <span className="text-primary">&nbsp;Digital Success Stories</span>
        </span>
      }
      description={keyHighlights.title}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {keyHighlights.highlights.map((item, index) => (
          <Card
            key={index}
            className="flex flex-col items-center justify-center px-4 py-8 rounded-lg bg-primary"
          >
            {/*@ts-ignore*/}
            <CardHeader>
              {
                <item.Icon
                  width={96}
                  height={96}
                  className="text-primary-foreground"
                />
              }
            </CardHeader>
            <CardTitle className="text-5xl text-primary-foreground mb-5">
              {item.value}
            </CardTitle>
            <CardDescription className="text-3xl text-bold text-center text-primary-foreground">
              {item.metric}
            </CardDescription>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default KeyHighlights;
