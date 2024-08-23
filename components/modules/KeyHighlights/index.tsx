import React from "react";
import { SVGIconProps } from "@/types/services";
import { Calendar, FolderKanban, UserRoundCheck, Users } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionContainer from "@/components/shared/SectionContainer";

type KeyHighlightItem = {
  title: string;
  description: string;
  Icon: JSX.Element;
};

const iconSize = 96;

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
      Icon: FolderKanban,
    },
    {
      metric: "Years of Experience",
      value: "20+",
      Icon: Calendar,
    },
    {
      metric: "Satisfied Clients",
      value: "50+",
      Icon: UserRoundCheck,
    },
    {
      metric: "Team Members",
      value: "20+",
      Icon: Users,
    },
  ],
};

const keyHighlightsData: KeyHighlightItem[] = [
  {
    title: "20+",
    description: "Years of Experience",
    Icon: <Calendar size={iconSize} />,
  },
  {
    title: "100+",
    description: "Projects Completed",
    Icon: <FolderKanban size={iconSize} />,
  },
  {
    title: "100%",
    description: "Client Satisfaction",
    Icon: <UserRoundCheck size={iconSize} />,
  },
];

const KeyHighlights = () => {
  return (
    <SectionContainer
      sectionTitle={
        <span>
          Transforming Ideas into
          <span className="text-purple">&nbsp;Digital Success Stories</span>
        </span>
      }
      description={keyHighlights.title}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {keyHighlights.highlights.map((item, index) => (
          <Card
            key={index}
            className="flex flex-col items-center justify-center px-4 py-8 bg-black-200 rounded-lg"
          >
            {/*@ts-ignore*/}
            <CardHeader>{<item.Icon size={96} />}</CardHeader>
            <CardTitle className="text-5xl mb-5">{item.value}</CardTitle>
            <CardDescription className="text-3xl text-bold text-center">
              {item.metric}
            </CardDescription>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default KeyHighlights;
