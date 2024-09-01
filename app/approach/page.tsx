import PagesContainer from "@/components/modules/Layouts/PagesContainer";
import { APPROACH_META } from "@/data/pages-meta";
import DevelopmentApproach from "@/components/modules/Home/DevelopmentApproach";

export default function Page() {
  return (
    <PagesContainer
      heading={APPROACH_META.title}
      sectionContainerProps={{
        headingsContainer: false,
        childrenContainer: false,
      }}
    >
      <DevelopmentApproach />
    </PagesContainer>
  );
}
