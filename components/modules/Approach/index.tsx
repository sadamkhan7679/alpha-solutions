import { ApproachData } from "@/data/approach";
import ApproachItem from "@/components/modules/Approach/ApproachItem";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ApproachStep {
  title: string;
  description: string;
}

const approachSteps: ApproachStep[] = [
  {
    title: "Discovery",
    description: "Understand your business goals and user needs.",
  },
  {
    title: "Design",
    description: "Create intuitive and visually stunning user experiences.",
  },
  {
    title: "Development",
    description:
      "Bring your digital solutions to life with cutting-edge technologies.",
  },
  {
    title: "Testing",
    description:
      "Ensure quality, functionality, and seamless user interactions.",
  },
  {
    title: "Deployment",
    description:
      "Deliver your digital products to the world and provide ongoing support.",
  },
];

const ApproachSection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMouseOverRef = useRef<boolean>(false);

  const handleScroll = () => {
    if (!isMouseOverRef.current) return;

    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const containerHeight = containerRect.height;
    const scrollPosition = window.scrollY - containerRect.top;
    const stepHeight = containerHeight / approachSteps.length;

    const newStep = Math.min(
      Math.floor(scrollPosition / stepHeight),
      approachSteps.length - 1,
    );

    setCurrentStep(newStep);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    isMouseOverRef.current = true;
    setCurrentStep(0); // Reset to the first step when mouse enters
  };

  const handleMouseLeave = () => {
    isMouseOverRef.current = false;
    setCurrentStep(0); // Reset to the first step when mouse leaves
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div className="container mx-auto px-4 flex">
          <div className="w-1/2 pr-8">
            <motion.h2
              className="text-4xl font-bold mb-4"
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {approachSteps[currentStep].title}
            </motion.h2>
          </div>
          <div className="w-1/2">
            {approachSteps.map((step, index) => (
              <StepContent
                key={index}
                description={step.description}
                isActive={index === currentStep}
              />
            ))}
          </div>
        </div>
      </div>
      {/* This div creates the scrollable space */}
      <div style={{ height: `${approachSteps.length * 100}vh` }}></div>
    </div>
  );
};

interface StepContentProps {
  description: string;
  isActive: boolean;
}

const StepContent: React.FC<StepContentProps> = ({ description, isActive }) => {
  const controls: AnimationControls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Changed to false to allow re-triggering
    threshold: 0.5,
  });

  useEffect(() => {
    if (isActive && inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [isActive, inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className={`absolute inset-0 flex items-center ${isActive ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <p className="text-xl">{description}</p>
    </motion.div>
  );
};

const Approach = () => {
  return (
    <div>
      <h1>Approach</h1>

      <ApproachItem content={ApproachData.content} />
      {/*<ApproachSection />*/}
    </div>
  );
};

export default Approach;
