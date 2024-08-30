"use client";
import { Aperture } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SERVICES_LIST } from "@/data/services";
import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type OurServicesProps = {};

const OurServices = ({}: OurServicesProps) => {
  const controls = useAnimation();
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
      controls.start({ y: -300, opacity: 1 });
    } else {
      // Reset animation when out of view
      controls.start({ y: 400, opacity: 0 });
    }
  }, [ref, inView, controls]);

  const getAnimation = (direction: string) => {
    return {
      initial: { y: 400, opacity: 0 },
      animate: controls,
      transition: { duration: 1 },
    };
  };

  return (
    <div className="app-container relative -mb-24" id="services" ref={ref}>
      <div
        className="w-full min-h-104 px-10 lg:px-20 flex items-center content-center my-section rounded-2xl "
        style={{
          backgroundImage: `url('/images/banners/service_bg_2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center content-between  w-full lg:w-1/2 pb-20">
          <div>
            <h2 className="text-primary font-bold text-body flex items-center">
              <Aperture width={24} height={24} className="mr-3" />
              Our Services
            </h2>
            <h3
              // className="text-subheading text-center mt-5 mb-10 w-2/3 lg:w-1/2"
              className={cn("text-subheading mt-5 mb-10", "text-center")}
            >
              We Provide{" "}
              <span className="highlighted-text ml-3">
                Cutting-Edge Solutions
              </span>{" "}
              For
              <span className="highlighted-text ml-3">Your Business</span>
            </h3>
          </div>
          <div></div>
        </div>
      </div>
      <motion.div
        className="relative transform -translate-x-0 -translate-y-1/2"
        initial={{ y: 400, opacity: 0 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {SERVICES_LIST.map((service) => {
              return (
                <CarouselItem
                  key={service.slug}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="pt-20 h-full">
                    <div className="bg-black border border-transparent dark:border-white/[0.2] w-full mt-0 p-0 rounded-2xl h-full">
                      {/*<div className="w-full flex content-center relative transform -translate-x-0 -translate-y-1/2">*/}
                      <div className="w-full flex flex-col items-center text-center relative transform -translate-x-0 -translate-y-1/2">
                        <div className="rounded-full border-2 app-border w-24 h-24 p-5 service-card-icon-light">
                          {service.Icon && (
                            <Image
                              className="service-card-icon-light"
                              width={96}
                              height={96}
                              src={service.Icon}
                              alt={service.title}
                              loading="lazy"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-center p-4 lg:p-8">
                        <h4 className="card-subheading text-center">
                          {service.title}
                        </h4>
                        {/*<CardDescription>{person.title}</CardDescription>*/}
                        <p className="card-body my-5">{service.summary}</p>
                        <Button>View Details</Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </div>
  );
};

export default OurServices;
