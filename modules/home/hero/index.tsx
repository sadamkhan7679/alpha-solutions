"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LampEffect } from "@/components/ui/lamp-effect";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "@/components/ui/typewriter-effect";

type HeroSectionProps = {};

// Solving Your Business Challenges with Innovative IT Solutions

const words = [
  { text: "Solving" },
  { text: "Your" },
  { text: "Business" },
  { text: "Challenges" },
  { text: "with" },
  { text: "Innovative", className: "text-blue-500 dark:text-blue-500" },
  { text: "IT", className: "text-blue-500 dark:text-blue-500" },
  { text: "Solutions", className: "text-blue-500 dark:text-blue-500" },
];

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section>
      <LampEffect>
        <p className="text-neutral-600 dark:text-neutral-200 text-3xl  mb-10">
          Tailored Technology to Drive Your Success
        </p>
        <TypewriterEffectSmooth words={words} />
        {/*Solving Your Business Challenges with Innovative IT Solutions <br />*/}
        {/*Tailored Technology to Drive Your Success*/}
      </LampEffect>
    </section>
  );
};

export default HeroSection;
