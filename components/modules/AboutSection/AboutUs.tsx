import WhoAreWe from "@/components/modules/AboutSection/WhoAreWe";
import WhatWeDo from "@/components/modules/AboutSection/WhatWeDo";
import WhyChooseUs from "@/components/modules/AboutSection/WhyChooseUs";
import OurServices from "@/components/modules/OurServices";

const AboutUs = () => {
  return (
    <div className="mb-20">
      <WhoAreWe />
      {/*<WhatWeDo />*/}
      <OurServices />
      <WhyChooseUs />
    </div>
  );
};

export default AboutUs;
