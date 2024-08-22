import React from "react";
import { SVGIconProps } from "@/types/services";
import { Calendar, FolderKanban, UserRoundCheck } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type KeyHighlightItem = {
  title: string;
  description: string;
  Icon: JSX.Element;
};

const iconSize = 96;

const keyHighlightsData: KeyHighlightItem[] = [
  {
    title: "7+",
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
    <div>
      <h1>Key Highlights</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {keyHighlightsData.map((item, index) => (
          <Card
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-black-200 rounded-lg"
          >
            <CardHeader>{item.Icon}</CardHeader>
            <CardTitle className="text-5xl">{item.title}</CardTitle>
            <CardDescription className="text-3xl text-bold">
              {item.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default KeyHighlights;
