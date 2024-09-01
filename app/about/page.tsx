import PagesContainer from "@/components/modules/Layouts/PagesContainer";
import AboutUs from "@/components/modules/Home/AboutSection/AboutUs";

export default function Page() {
  return (
    <PagesContainer
      heading={"About Us"}
      sectionContainerProps={{
        headingsContainer: false,
        childrenContainer: false,
      }}
    >
      <AboutUs />
    </PagesContainer>
  );
}
