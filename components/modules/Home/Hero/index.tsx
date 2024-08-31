import { FC } from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/shared/Typography";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/shared/CTA";

type HeroSectionProps = {};

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <div
      className={cn(
        "w-full min-h-screen grid grid-cols-1 md:grid-cols-2 pt-20 app-container",
      )}
      style={{
        backgroundImage: `url('/assets/hero-banner/2.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-full">
        <div className="flex flex-col justify-evenly items-start h-full">
          <div
            className={cn("w-40 h-20 mt-10")}
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
              className="text-primary-dark text-5xl mt-5 mb-16"
            >
              Crafting captivating digital experiences that engage, inspire, and
              propel your business forward
            </Typography>{" "}
            <Typography variant="h4" className="text-primary">
              Empowering Businesses to Soar with Cutting-Edge Web and Mobile
              Innovations
            </Typography>
          </div>
          {/*<CTA variant="secondary" className="w-full lg:w-1/2 h-12">*/}
          {/*  Get Started*/}
          {/*</Button>*/}
          <CTA title={"Get Started"} className="w-full lg:w-1/2 h-12" />
        </div>
      </div>
      <div className="h-full flex flex-col items-center content-center w-full">
        <div
          className={cn("w-4/5 h-4/5")}
          style={{
            backgroundImage: `url('/assets/hero-banner/6.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className={cn("w-40 h-20 mt-10")}
          style={{
            backgroundImage: `url('/assets/hero-banner/3.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
