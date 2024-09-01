import PagesContainer from "@/components/modules/Layouts/PagesContainer";
import { INDUSTRIES_META } from "@/data/pages-meta";
import { IndustriesData } from "@/components/modules/Home/Industries/IndustriesData";
import IndustriesList from "@/components/modules/Home/Industries/IndustiesList";

export default function Page() {
  return (
    <PagesContainer
      heading={INDUSTRIES_META.title}
      sectionTitle={INDUSTRIES_META.sectionTitle}
      description={INDUSTRIES_META.description}
      sectionContainerProps={{
        headingsContainer: true,
        childrenContainer: true,
      }}
    >
      <div className="hidden lg:block">
        <IndustriesData />
      </div>
      <div className="block lg:hidden">
        <IndustriesList />
      </div>
    </PagesContainer>
  );
}
