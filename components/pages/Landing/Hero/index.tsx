import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Typography } from "@/components/shared/Typography";

const Hero = () => {
  return (
    <section className="w-full min-h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-[#fff] border-b-4 border-orange-500 flex flex-col items-center justify-center">
      <div className="container px-4 md:px-6 h-full my-auto">
        <div className="flex flex-col items-center space-y-4 h-full text-center">
          <div className="">
            <Typography variant="h1" className="text-white text-9xl">
              Transforming Ideas into Digital Reality
            </Typography>
            <Typography
              variant="h2"
              className="mx-auto my-10 max-w-[900px] text-white font-normal"
            >
              Innovative Web & Mobile Solutions
              <br />
              Custom Software Development
              <br />
              Digital Transformation Experts
            </Typography>
          </div>
          <div className="space-x-4">
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-[#fff]"
            >
              <Link href="#contact">Get Started</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-black border-[#fff] hover:bg-[#fff] hover:text-[#000080]"
            >
              <Link href="#portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
