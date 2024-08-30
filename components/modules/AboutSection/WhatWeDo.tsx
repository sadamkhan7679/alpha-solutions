import ContentSection from "@/components/modules/AboutSection/ContentSection";

export const WhatWeDo = () => {
  return (
    <div>
      <ContentSection
        sectionTitle="What We Do"
        // heading={
        //   "We Provide Exclusive Digital Solutions to Help Your Business Thrive Through Cutting-Edge Technology"
        // }
        heading={
          <span>
            We Provide Exclusive{" "}
            <span className="highlighted-text">Digital Solutions</span> to Help{" "}
            <span className="highlighted-text"> Your Business </span> Thrive
            Through Cutting-Edge Technology
          </span>
        }
        description="We specialize in crafting bespoke digital experiences that not only meet your current needs but position you for future growth. Our comprehensive suite of services is designed to give you a competitive edge in the digital landscape."
        listItems={[
          "Custom Web Development: Scalable, secure, and user-friendly websites and web applications",
          "Mobile App Creation: High-performance, intuitive apps for iOS and Android platforms",
          "UX/UI Design: Visually stunning, user-centric interfaces that boost engagement",
          "E-commerce Solutions: Robust online stores optimized for conversions and user experience",
          "Digital Strategy Consulting: Expert guidance to navigate the ever-evolving digital world",
        ]}
      />
    </div>
  );
};

export default WhatWeDo;
