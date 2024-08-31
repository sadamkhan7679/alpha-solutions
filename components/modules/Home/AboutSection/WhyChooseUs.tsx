import ContentSection from "@/components/modules/Home/AboutSection/ContentSection";

export const WhyChooseUs = () => {
  return (
    <ContentSection
      sectionTitle="Why Choose Us"
      heading={
        // "We Are Your Trusted Digital Partner, Committed to Delivering Exceptional Results"
        <span>
          We Are Your{" "}
          <span className="highlighted-text">Trusted Digital Partner</span>,
          Committed to{" "}
          <span className="highlighted-text">
            Delivering Exceptional Results
          </span>
        </span>
      }
      className={"lg:flex-row-reverse"}
      description="Choosing Alpha Solutions means partnering with a team that's fully invested in your success. We bring a unique blend of expertise, innovation, and dedication to every project, ensuring outcomes that exceed expectations."
      listItems={[
        "Proven track record across diverse industries and complex projects",
        "Agile methodology for faster delivery and adaptability to changing needs",
        "Client-centric approach with close collaboration at every stage",
        "Cutting-edge solutions that keep you ahead of the competition",
        "Comprehensive support from concept to post-launch maintenance",
      ]}
      image={"/images/about/video_shape_1.png"}
    />
  );
};

export default WhyChooseUs;
