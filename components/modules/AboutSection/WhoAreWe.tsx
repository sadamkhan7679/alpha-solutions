import ContentSection from "@/components/modules/AboutSection/ContentSection";

export const WhoAreWe = () => {
  return (
    <ContentSection
      sectionTitle="About Alpha Solutions"
      // heading="Alpha Solutions: Your Partner in Digital Innovation"
      heading={
        <span>
          Alpha Solutions:{" "}
          <span className="highlighted-text">Your Partner</span> in Digital
          Innovation
        </span>
      }
      description="At Alpha Solutions, we're more than just developers – we're your strategic allies in the digital realm. . We specialize in building custom web and mobile applications that help businesses grow and thrive in the digital age."
      listItems={[
        "Industry veterans with a proven track record of success",
        "Diverse team of creative minds, developers, and UX/UI specialists",
        "Forward-thinking approach that anticipates and adapts to technological trends",
        "Committed to fostering long-term partnerships with our clients",
        "Driven by a mission to revolutionize businesses through tailored digital solutions",
      ]}
      className="lg:flex-row-reverse"
      image={"/images/about/about_2_1.jpg"}
    />
  );
};

export default WhoAreWe;
