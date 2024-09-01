"use client";
import { ReactNode, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Aperture, BadgeCheck } from "lucide-react";
import ListItems from "@/components/shared/ListItems";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typography } from "@/components/shared/Typography";

type ContentSectionProps = {
  sectionTitle: string;
  heading: ReactNode;
  description: string;
  listItems: string[];
  className?: string;
  image?: string;
  imageClassName?: string;
};

const ContentSection = ({
  sectionTitle,
  heading,
  description,
  listItems,
  className,
  imageClassName,
  image = "/industries/education.jpg",
}: ContentSectionProps) => {
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1, // Adjust threshold
    rootMargin: "0px", // Temporarily remove rootMargin
    // threshold: 0, // Detects any amount of the element in view
    // rootMargin: "-100px 0px", // Triggers 100px before the section comes fully into view
    triggerOnce: false,
  });

  useEffect(() => {
    // console.log("inView sectionTitle", sectionTitle, inView);

    if (inView) {
      leftControls.start({ x: 0, opacity: 1 });
      rightControls.start({ x: 0, opacity: 1 });
    } else {
      // Reset animation when out of view
      leftControls.start({ x: -400, opacity: 0 });
      rightControls.start({ x: 400, opacity: 0 });
    }
  }, [inView, leftControls, rightControls]);

  const getAnimation = (direction: string) => {
    return {
      initial: { x: direction === "left" ? 400 : -400, opacity: 0 },
      animate: direction === "left" ? leftControls : rightControls,
      transition: { duration: 1 },
    };
  };

  return (
    <div className={cn("app-container")} ref={ref}>
      <div
        // className="app-container flex flex-col lg:flex-row gap-10"
        className={cn(
          "flex flex-col lg:flex-row gap-0 md:gap-20 border-y-2 app-border",
          className,
        )}
      >
        <motion.div
          className="w-full lg:w-1/2 py-10 md:py-20"
          {...getAnimation("left")}
          // initial={{ x: -400, opacity: 0 }}
          // animate={leftControls}
          // transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h6"
            className="text-primary font-bold flex items-center underline decoration-4 underline-offset-8"
          >
            <Aperture width={24} height={24} className="mr-3" />
            {sectionTitle}
          </Typography>
          <div className="text-subheading text-left mt-5">{heading}</div>
          <ListItems
            summary={description}
            items={listItems}
            itemClassName="text-primary"
          />
        </motion.div>
        <motion.div
          // className="w-full h-112 relative lg:w-1/2 mt-10 lg:mt-0 self-center"
          {...getAnimation("right")}
          className={cn(
            "w-full h-72 md:h-112 relative mb-5 md:mb-0 lg:w-1/2 mt-2 md:mt-10 lg:mt-0 self-start md:self-center",
            imageClassName,
          )}
          // initial={{ x: 400, opacity: 0 }}
          // animate={rightControls}
          // transition={{ duration: 0.8 }}
        >
          <Image
            src={image}
            alt={`About Section - ${sectionTitle}`}
            className="rounded-lg"
            fill
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ContentSection;
