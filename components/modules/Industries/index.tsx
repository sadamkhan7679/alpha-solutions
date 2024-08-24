import SectionContainer from "@/components/shared/SectionContainer";
import { SectionContent } from "@/types/root";
import IndustriesList from "@/components/modules/Industries/IndustiesList";

const industriesServedSection: SectionContent = {
  headline: "Driving Digital Innovation Across Sectors",
  description:
    "Our expertise spans a diverse range of industries, allowing us to bring cross-sector insights and tailored solutions to every project. From revolutionizing healthcare with intuitive patient management systems to boosting e-commerce sales with AI-driven platforms, we've left our digital footprint across multiple domains. Our versatility enables us to understand unique industry challenges and leverage best practices from various sectors, ensuring innovative and effective solutions regardless of your field.",
};

const Industries = () => {
  return (
    <SectionContainer
      sectionTitle={
        <span>
          Driving
          <span className="text-purple">
            &nbsp;Digital Innovation
          </span> Across <span className="text-purple">Sectors</span>
        </span>
      }
      description={industriesServedSection.description}
      container={false}
    >
      {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">*/}
      {/*  /!* Project Cards *!/*/}
      {/*</div>*/}
      <IndustriesList />
    </SectionContainer>
  );
};

export default Industries;
