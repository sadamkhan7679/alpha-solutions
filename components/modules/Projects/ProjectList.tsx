"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useTransform,
  useScroll,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { projectsList } from "@/data/Projects";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import ListItems from "@/components/shared/ListItems";

type ProjectListProps = {
  // project: Project;
};

const ProjectList = ({}: ProjectListProps) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = projectsList.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = projectsList.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  const motionVariants = (index: number) => ({
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: activeCard === index ? 1 : 0.3,
    },
  });

  return (
    <motion.div
      // animate={{
      //   // backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      // }}
      className="h-screen app-container overflow-y-auto justify-center relative left-0 right-0 rounded-md py-10 no-scrollbar grid grid-cols-1 lg:grid-cols-2 border border-black/[0.2] dark:border-white/[0.2]"
      ref={ref}
    >
      <div className="relative flex items-start px-4 w-full">
        <div className="w-full">
          {projectsList.map((item, index) => (
            <div
              key={item.title + index}
              className="my-20 min-h-[30rem] lg:min-h-[50rem]"
            >
              <motion.h2
                {...motionVariants(index)}
                className="text-2xl font-bold text-primary"
              >
                {item.title}
              </motion.h2>
              <div
                // style={{ background: backgroundGradient }}
                className={cn(
                  "lg:hidden relative h-120 w-full rounded-md my-12 top-10 overflow-hidden",
                  // contentClassName,
                )}
              >
                <div
                  style={{
                    position: "relative",
                    width: "400px",
                    height: "500px",
                  }}
                  // Place this div at the end of the container
                  className="mx-auto"
                >
                  <Image
                    src={projectsList[activeCard].thumbnailUrl}
                    // src={"/images/projects/6.png"}
                    alt={projectsList[activeCard].title}
                    sizes="400px"
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                    loading="lazy"
                    // fill={true}
                    // className="ml-auto"
                  />
                </div>
              </div>
              <motion.div {...motionVariants(index)}>
                <ListItems summary={item.description} items={item.features} />

                <div className="flex flex-wrap h-full">
                  {item.tags.map((tag, index) => (
                    <Badge key={tag + index} className="mr-4 mt-4">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
          <div className="h-80" />
        </div>
      </div>
      <div className="">
        <div
          // style={{ background: backgroundGradient }}
          className={cn(
            "hidden h-108 w-full rounded-md sticky top-10 overflow-hidden lg:flex items-end",
            // contentClassName,
          )}
        >
          <div
            style={{ position: "relative", width: "600px", height: "600px" }}
            // Place this div at the end of the container
            className="ml-auto"
          >
            <Image
              src={projectsList[activeCard].thumbnailUrl}
              // src={"/images/projects/1.png"}
              alt={projectsList[activeCard].title}
              sizes="500px"
              fill
              style={{
                objectFit: "contain",
              }}
              loading="lazy"
              // fill={true}
              // className="ml-auto"
            />
          </div>
          {/*{projectsList[activeCard].content ?? null}*/}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectList;

// Project Name: Coffee Tea
// Description: A virtual platform for candidates to prepare for interviews.
// People can sign up to find a mentor or be a mentor. The main goal is to help candidates prepare for interviews by providing them with a mentor who can guide them through the process and give them tips on how to succeed. People can pratice mock interviews, get feedback on their resume, and learn how to answer common interview questions. The platform also has a video call integration so that people can have face-to-face conversations with their mentors. Users can pay for the service using a payment gateway.
// Features:
// - User authentication
// - Mentorship matching
// - Video call integration
// - Payment gateway integration
// - Mock interviews
// - Resume feedback
// - Interview tips
// Tags: Next.js, TailwindCSS, Firebase, WebRTC, Stripe, TypeScript, Framer Motion
