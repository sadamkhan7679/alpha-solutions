import WhoAreWe from "@/components/modules/Home/AboutSection/WhoAreWe";
import WhyChooseUs from "@/components/modules/Home/AboutSection/WhyChooseUs";
import OurServices from "@/components/modules/Home/OurServices";
import KeyHighlights from "@/components/modules/Home/KeyHighlights";

const AboutUs = () => {
  return (
    <div className="mb-20">
      <WhoAreWe />
      {/*<WhatWeDo />*/}
      <KeyHighlights />
      <OurServices />
      <WhyChooseUs />
    </div>
  );
};

export default AboutUs;
