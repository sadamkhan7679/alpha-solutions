import { TEAM_MEMBERS } from "@/constants/team";
import SectionContainer from "@/components/shared/SectionContainer";
import TeamMemberCard from "@/components/modules/Team/TeamCard";
import { SectionContent } from "@/types/root";

const teamSection: SectionContent = {
  headline: "Meet the Innovators Behind Your Success",
  description:
    "Our diverse team of passionate tech enthusiasts, creative minds, and strategic thinkers forms the backbone of our agency. With a perfect blend of experience and fresh perspectives, we're united by our commitment to pushing the boundaries of digital innovation. From seasoned developers to visionary designers, each member brings unique expertise to the table, ensuring your project benefits from a wealth of talent and insights.",
};

const TeamList = () => {
  return (
    <SectionContainer
      // sectionTitle={teamSection.headline}
      sectionTitle={
        <span>
          Meet the <span className="text-purple">&nbsp;Innovators</span> Behind
          Your <span className="text-purple">Success</span>
        </span>
      }
      description={teamSection.description}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
        {TEAM_MEMBERS.map((person) => {
          return <TeamMemberCard person={person} key={person.name} />;
        })}
      </div>
    </SectionContainer>
  );
};

export default TeamList;
