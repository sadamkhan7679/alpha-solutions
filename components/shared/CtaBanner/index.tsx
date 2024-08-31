import { Aperture } from "lucide-react";
import { CTA } from "@/components/shared/CTA";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/shared/Typography";

type CtaBannerProps = {};

const CtaBanner = ({}: CtaBannerProps) => {
  return (
    <div
      className="w-full min-h-96 app-container py-12 md:py-0 flex items-center content-center my-section"
      style={{
        backgroundImage: `url('/images/banners/cta_bg_3.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex content-center items-center flex-col w-full">
        <Typography variant="h5" className="text-white flex items-center">
          <Aperture width={24} height={24} className="mr-3" />
          Contact Us
        </Typography>
        <Typography
          variant="h3"
          // className="text-subheading text-center mt-5 mb-10 w-2/3 lg:w-1/2"
          className={cn(
            "text-white mt-5 mb-10 w-full lg:w-1/2 text-center",
            "",
          )}
        >
          Ready to Transform Your Business?
          <span className="text-primary-light ml-3">
            Discover Our Tailored Services For Your Business
          </span>
        </Typography>

        <CTA />
      </div>
    </div>
  );
};

export default CtaBanner;
