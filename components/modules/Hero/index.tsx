import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "@/components/ui/SpotLight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";
import { CTA } from "@/components/shared/CTA";

type HeroSectionProps = {};

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className="pb-20 pt-24 mb-28">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.3]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10 app-container">
        <div className="max-w-[100vw] md:max-w-2xl lg:max-w-[80vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-md text-center text-blue-100 max-w-100">
            Pioneering the Digital Frontier with Innovative, Tailored Solutions
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Crafting captivating digital experiences that engage, inspire, and propel your business forward"
            className="text-center text-[40px] md:text-5xl lg:text-6xl mt-8 mb-12"
          />

          <p className="text-center md:tracking-wider mb-12 text-sm md:text-lg lg:text-2xl">
            Empowering Businesses to Soar with Cutting-Edge Web and Mobile
            Innovations
          </p>

          <CTA />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
