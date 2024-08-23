import React from "react";
import {
  Telescope,
  NotebookPen,
  Figma,
  SquareCode,
  TabletSmartphone,
  Rocket,
  Construction,
} from "lucide-react";
import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/components/ui/timeline";
import SectionContainer from "@/components/shared/SectionContainer";

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
      Icon: Telescope,
    },
    {
      title: "Mapping the Digital Landscape",
      description:
        "With insights gathered, we craft a comprehensive roadmap. This includes defining the technology stack, creating user personas, outlining the information architecture, and establishing project milestones. We set the stage for a smooth development journey.",
      Icon: NotebookPen,
    },
    {
      title: "Bringing Ideas to Life",
      description:
        "Our designers create intuitive wireframes and stunning visual designs that align with your brand. We develop interactive prototypes to test user flows and gather early feedback, refining the user experience before a single line of code is written.",
      Icon: Figma,
    },
    {
      title: "Building Your Digital Masterpiece",
      description:
        "Our skilled developers bring the designs to life, writing clean, efficient code for both front-end and back-end components. We follow agile methodologies, allowing for flexibility and continuous improvement throughout the development process.",
      Icon: SquareCode,
    },
    {
      title: "Perfecting Every Pixel and Function",
      description:
        "Rigorous testing is conducted to ensure your app functions flawlessly across all devices and scenarios. We perform thorough bug fixes, usability testing, and performance optimization to deliver a polished, high-quality product.",
      Icon: TabletSmartphone,
    },
    {
      title: "Launching Your Digital Presence",
      description:
        "We carefully manage the deployment process, ensuring a smooth transition from development to live environments. Our team handles all technical aspects of the launch, including server configuration, database migration, and app store submissions.",
      Icon: Rocket,
    },
    {
      title: "Nurturing Your Digital Growth",
      description:
        "Our commitment doesn't end at launch. We provide ongoing support, monitor performance, and implement updates to keep your app secure and relevant. We're here to help your digital solution evolve and thrive in the ever-changing tech landscape.",
      Icon: Construction,
    },
  ],
};

const DevelopmentApproach = () => {
  return (
    <SectionContainer
      sectionTitle={
        <span>
          Our Proven Blueprint for{" "}
          <span className="text-purple">Digital Excellence</span>
        </span>
      }
      description={approachSection.description}
    >
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Timeline positions="center" className="max-w-6xl">
          {approachSection.items.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <TimelineItem key={item.title}>
                <TimelineHeading
                  side={isEven ? "left" : "right"}
                  className="text-xl md:text-3xl"
                >
                  {item.title}
                </TimelineHeading>
                <TimelineDot
                  status="custom"
                  // @ts-ignore
                  customIcon={<item.Icon size={24} />}
                  className="w-20 h-20 rounded-2xl border-none"
                />
                <TimelineLine done />
                <TimelineContent
                  side={isEven ? "left" : "right"}
                  className="py-10 text-justify text-md md:text-xl text-white"
                >
                  {item.description}
                </TimelineContent>
                {/*<TimelineContent side={isEven ? "left" : "right"}>*/}
                {/*  {item.description}*/}
                {/*</TimelineContent>*/}
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </SectionContainer>
  );
};

export default DevelopmentApproach;
