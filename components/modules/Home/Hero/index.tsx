"use client";
import { FC, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/shared/Typography";
import { CTA } from "@/components/shared/CTA";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type HeroSectionProps = {};

const HeroSection: FC<HeroSectionProps> = () => {
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
    <div
      ref={ref}
      className={cn(
        "w-full min-h-screen grid grid-cols-1 md:grid-cols-2 pt-8 app-container",
      )}
      style={{
        backgroundImage: `url('/assets/hero-banner/2.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-72 md:h-full">
        <motion.div
          className="flex flex-col justify-between md:justify-evenly items-start md:h-full mt-10 md:mt-0"
          {...getAnimation("right")}
        >
          <div
            className={cn("w-20 h-12 md:w-40 md:h-20 mt-5 md:mt-10")}
            style={{
              backgroundImage: `url('/assets/hero-banner/3.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="">
            <Typography variant="h6" className="text-primary">
              Pioneering the Digital Frontier with Innovative, Tailored
              Solutions
            </Typography>
            <Typography
              variant="h2"
              className="text-primary-dark mt-5 mb-5 md:mb-16"
            >
              Crafting captivating digital experiences that engage, inspire, and
              propel your business forward
            </Typography>{" "}
            <Typography variant="h4" className="text-primary">
              Empowering Businesses to Soar with Cutting-Edge Web and Mobile
              Innovations
            </Typography>
          </div>
          <CTA
            title={"Get Started"}
            className="w-full mt-10 md:mt-0 lg:w-1/2 h-12"
          />
        </motion.div>
      </div>
      <motion.div
        className="md:h-full flex flex-col items-start md:items-center content-center w-full"
        {...getAnimation("left")}
      >
        <div
          className={cn("w-full h-full md:w-4/5 md:h-4/5 hidden md:block")}
          style={{
            backgroundImage: `url('/assets/hero-banner/6.png')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className={cn("w-20 h-12 md:w-40 md:h-20 mt-5 md:mt-10 self-end")}
          style={{
            backgroundImage: `url('/assets/hero-banner/3.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
