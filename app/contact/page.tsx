import ContactPage from "@/components/pages/ContactPage";
import PagesContainer from "@/components/modules/Layouts/PagesContainer";

export default function Page() {
  return (
    <PagesContainer
      heading="Contact Us"
      sectionTitle="Get in touch with us"
      description="We would love to hear from you. Please fill in the form below to get in touch with us"
    >
      <ContactPage />
    </PagesContainer>
  );
}
