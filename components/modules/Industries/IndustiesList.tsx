"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { industriesList } from "@/constants/industries";

type IndustriesListProps = {
  // Industries: Industries;
};

const IndustriesList = ({}: IndustriesListProps) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = industriesList.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = industriesList.map(
      (_, index) => index / cardLength,
    );
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
          {industriesList.map((item, index) => (
            <div
              key={item.title + index}
              className="my-20 min-h-[30rem] lg:min-h-[50rem]"
            >
              <motion.h2
                {...motionVariants(index)}
                className="text-2xl font-bold text-slate-100"
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
                    src={industriesList[activeCard].image}
                    // src={"/images/Industriess/6.png"}
                    alt={industriesList[activeCard].title}
                    sizes="400px"
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                    // fill={true}
                    // className="ml-auto"
                  />
                </div>
              </div>
              <motion.p
                {...motionVariants(index)}
                className="text-kg text-slate-300 max-w-lg mt-10"
              >
                {item.description}
              </motion.p>
              <motion.div {...motionVariants(index)}>
                <ul className="mt-4 px-4">
                  {item.services.map((feature, index) => (
                    <li key={feature + index} className="list-disc">
                      {feature}
                    </li>
                  ))}
                </ul>

                {/*<div className="flex flex-wrap h-full">*/}
                {/*  {item.tags.map((tag, index) => (*/}
                {/*    <Badge key={tag + index} className="mr-4 mt-4">*/}
                {/*      {tag}*/}
                {/*    </Badge>*/}
                {/*  ))}*/}
                {/*</div>*/}
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
            style={{ position: "relative", width: "600px", height: "400px" }}
            // Place this div at the end of the container
            className="ml-auto"
          >
            <Image
              src={industriesList[activeCard].image}
              // src={"/images/Industriess/1.png"}
              alt={industriesList[activeCard].title}
              sizes="400px"
              fill
              // style={{
              //   objectFit: "contain",
              // }}
              // fill={true}
              // className="ml-auto"
            />
          </div>
          {/*{IndustriessList[activeCard].content ?? null}*/}
        </div>
      </div>
    </motion.div>
  );
};

export default IndustriesList;
