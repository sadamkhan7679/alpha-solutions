"use client";
import React from "react";
import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/components/ui/timeline";
import SectionContainer from "@/components/shared/SectionContainer";
import { TelescopeIcon } from "@/icons/common/TelescopeIcon";
import { NotebookPenIcon } from "@/icons/common/NotebookPenIcon";
import { FigmaIcon } from "@/icons/common/FigmaIcon";
import { SquareCodeIcon } from "@/icons/common/SquareCodeIcon";
import { TabletSmartphoneIcon } from "@/icons/common/TabletSmartphoneIcon";
import { RocketIcon } from "@/icons/common/RocketIcon";
import { ConstructionIcon } from "@/icons/common/ConstructionIcon";
import { tree } from "next/dist/build/templates/app-page";

type ApproachItem = {
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const approachSection: {
  heading: string | React.ReactNode;
  description: string;
  items: ApproachItem[];
} = {
  heading: "Our Proven Blueprint for Digital Excellence",
  description:
    "Embark on a journey of innovation with our meticulously crafted development process. From concept to launch, we've honed each step to ensure your vision becomes a cutting-edge reality. Discover how we turn ideas into impactful digital solutions.",
  items: [
    {
      title: "Unearthing Your Vision",
      description:
        "We begin by diving deep into your project goals, target audience, and unique challenges. Our team collaborates with you to define the scope, features, and objectives of your app, ensuring a solid foundation for success.",
      Icon: TelescopeIcon,
    },
    {
      title: "Mapping the Digital Landscape",
      description:
        "With insights gathered, we craft a comprehensive roadmap. This includes defining the technology stack, creating user personas, outlining the information architecture, and establishing project milestones. We set the stage for a smooth development journey.",
      Icon: NotebookPenIcon,
    },
    {
      title: "Bringing Ideas to Life",
      description:
        "Our designers create intuitive wireframes and stunning visual designs that align with your brand. We develop interactive prototypes to test user flows and gather early feedback, refining the user experience before a single line of code is written.",
      Icon: FigmaIcon,
    },
    {
      title: "Building Your Digital Masterpiece",
      description:
        "Our skilled developers bring the designs to life, writing clean, efficient code for both front-end and back-end components. We follow agile methodologies, allowing for flexibility and continuous improvement throughout the development process.",
      Icon: SquareCodeIcon,
    },
    {
      title: "Perfecting Every Pixel and Function",
      description:
        "Rigorous testing is conducted to ensure your app functions flawlessly across all devices and scenarios. We perform thorough bug fixes, usability testing, and performance optimization to deliver a polished, high-quality product.",
      Icon: TabletSmartphoneIcon,
    },
    {
      title: "Launching Your Digital Presence",
      description:
        "We carefully manage the deployment process, ensuring a smooth transition from development to live environments. Our team handles all technical aspects of the launch, including server configuration, database migration, and app store submissions.",
      Icon: RocketIcon,
    },
    {
      title: "Nurturing Your Digital Growth",
      description:
        "Our commitment doesn't end at launch. We provide ongoing support, monitor performance, and implement updates to keep your app secure and relevant. We're here to help your digital solution evolve and thrive in the ever-changing tech landscape.",
      Icon: ConstructionIcon,
    },
  ],
};

const DevelopmentApproach = () => {
  return (
    <div className="mx-4 lg:mx-10 py-20 rounded-3xl lg:rounded-9xl overflow-hidden bg-primary-dark">
      <SectionContainer
        sectionTitle={
          <span className="text-white">
            Our Proven Blueprint for{" "}
            <span className="text-secondary">Digital Excellence</span>
          </span>
        }
        headingsContainer
        childrenContainer
        description={
          <span className="text-white">{approachSection.description}</span>
        }
        className=" static"
      >
        <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 bg-primary-dark rounded-4xl overflow-hidden">
          <Timeline positions="center" className="max-w-6xl hidden lg:block">
            {approachSection.items.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <TimelineItem key={item.title}>
                  <TimelineHeading
                    side={isEven ? "left" : "right"}
                    className="text-xl md:text-3xl text-secondary font-black"
                  >
                    {item.title}
                  </TimelineHeading>
                  <TimelineDot
                    status="custom"
                    // @ts-ignore
                    customIcon={<item.Icon size={24} className="text-white" />}
                    className="w-20 h-20 rounded-2xl border-none"
                  />
                  <TimelineLine done className="bg-white" />
                  <TimelineContent
                    side={isEven ? "left" : "right"}
                    className="py-10 text-justify text-md md:text-xl text-white"
                  >
                    {item.description}
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>

          <Timeline positions="left" className="max-w-7xl block lg:hidden">
            {approachSection.items.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <TimelineItem key={item.title}>
                  <TimelineHeading
                    side={"right"}
                    className="text-xl md:text-3xl text-secondary font-black"
                  >
                    {item.title}
                  </TimelineHeading>
                  <TimelineDot
                    status="custom"
                    // @ts-ignore
                    customIcon={<item.Icon size={24} className="text-white" />}
                    className="w-10 h-20 md:w-20 md:h-40 rounded-2xl border-none"
                  />
                  <TimelineLine done className="bg-white" />
                  <TimelineContent
                    side={"right"}
                    className="py-10 text-justify text-md md:text-xl text-white"
                  >
                    {item.description}
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </div>
      </SectionContainer>
    </div>
  );
};

export default DevelopmentApproach;
