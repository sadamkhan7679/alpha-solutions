// "use client";
import { cn } from "@/lib/utils";
import React from "react";
import { ServiceItem } from "@/types/services";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SERVICES_META } from "@/constants/services";

export const ServicesGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto ",
        className,
      )}
    >
      {children}
    </div>
  );
};

const SVGComponent = () => (
  <svg
    width="72px"
    height="72px"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <polyline points="48 8 16 24 16 40 48 56" />
      <polyline points="16 8 48 24 48 40 16 56" />
      <line x1={48} y1={24} x2={32} y2={32} />
      <line x1={16} y1={24} x2={32} y2={32} />
      <line x1={32} y1={48} x2={32} y2={32} />
    </g>
  </svg>
);

// Blue
// Green
// Emarald
// Teal
// Cyan
// Sky
// Indigo
// Violet
// Purple
// Fuchsia
// Pink
// Rose


const colors = [
  "blue",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

const getItemColor = (color: string) => {
  switch (color) {
    case "blue":
      return {
        bgColor: "hover:bg-blue-gradient",
        textColor: "hover:text-blue-700",
        svgClass: "hover:fill-blue-700 hover:stroke-blue-700",
      }
    case "green":
        return {
            bgColor: "hover:bg-green-gradient",
            textColor: "text-green-700",
        }
    case "emerald":
      return {
        bgColor: "hover:bg-emerald-gradient",
        textColor: "text-emerald-700",
      }
    case "teal":
      return {
        bgColor: "hover:bg-teal-gradient",
        textColor: "text-teal-700",
      }
    case "cyan":
      return {
        bgColor: "hover:bg-cyan-gradient",
        textColor: "text-cyan-700",
      }
    case "sky":
      return {
        bgColor: "hover:bg-sky-gradient",
        textColor: "text-sky-700",
      }
    case "indigo":
      return {
        bgColor: "hover:bg-indigo-gradient",
        textColor: "text-indigo-700",
      }
    case "violet":
      return {
        bgColor: "hover:bg-violet-gradient",
        textColor: "text-violet-700",
      }
    case "purple":
      return {
        bgColor: "hover:bg-purple-gradient",
        textColor: "text-purple-700",
      }
    case "fuchsia":
      return {
        bgColor: "hover:bg-fuchsia-gradient",
        textColor: "text-fuchsia-700",
      }
    case "pink":
      return {
        bgColor: "hover:bg-pink-gradient",
        textColor: "text-pink-700",
      }
    case "rose":
      return {
        bgColor: "hover:bg-rose-gradient",
        textColor: "text-rose-700",
      }
    default:
      return {
        bgColor: "hover:bg-blue-gradient",
        textColor: "text-blue-700",
      }
  }
};

export const ServicesGridItem = ({
  service,
  className,
  color,
}: {
  service: ServiceItem;
  className?: string;
  color: string;
}) => {
  const { title, slug, summary,Icon, } = service;

  const serviceMeta = Object.values(SERVICES_META).find(
    (meta) => meta.slug === slug,
  );

  return (
    <Card className={cn(
        "group cursor-pointer",
        `${serviceMeta?.className}`,
        // wrapperClassName,
        // "bg-blue-gradient",
        className,
    )}>
      <CardHeader>
        <CardTitle className={cn(
            "flex items-center group-hover:text-white font-bold text-xl"
        )}>
          <Icon
            className="mr-2"
            width={50}
            height={40}

          />
          {title}
        </CardTitle>
        <CardDescription className="group-hover:text-white">{summary}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};
