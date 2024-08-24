"use client";
import React, { useEffect, useRef, useState } from "react";
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
import { motion, useScroll, useTransform } from "framer-motion";

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

// const DevelopmentApproach = () => {
//   const ref = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [height, setHeight] = useState(0);
//
//   useEffect(() => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect();
//       setHeight(rect.height);
//     }
//   }, [ref]);
//
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 10%", "end 50%"],
//   });
//
//   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
//
//   return (
//     <div
//       className="w-full bg-white dark:bg-transparent font-sans md:px-10"
//       ref={containerRef}
//     >
//       <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
//         <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
//           Changelog from my journey
//         </h2>
//         <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
//           I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
//           a timeline of my journey.
//         </p>
//       </div>
//
//       <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
//         {approachSection.items.map((item, index) => (
//           <div
//             key={index}
//             className="flex justify-start pt-10 md:pt-40 md:gap-10"
//           >
//             <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
//               <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
//                 <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
//               </div>
//               <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
//                 {item.title}
//               </h3>
//             </div>
//
//             <div className="relative pl-20 pr-4 md:pl-4 w-full">
//               <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
//                 {item.title}
//               </h3>
//               {item.description}{" "}
//             </div>
//           </div>
//         ))}
//         <div
//           style={{
//             height: height + "px",
//           }}
//           className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
//         >
//           <motion.div
//             style={{
//               height: heightTransform,
//               opacity: opacityTransform,
//             }}
//             className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

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
