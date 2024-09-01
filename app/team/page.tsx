import PagesContainer from "@/components/modules/Layouts/PagesContainer";
import { TEAM_META } from "@/data/pages-meta";
import TeamList from "@/components/modules/Home/Team";

export default function Page() {
  return (
    <PagesContainer
      heading={TEAM_META.title}
      sectionContainerProps={{
        headingsContainer: false,
        childrenContainer: false,
      }}
    >
      <TeamList />
    </PagesContainer>
  );
}
