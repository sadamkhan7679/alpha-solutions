import { TEAM_MEMBERS } from "@/constants/team";
import SectionContainer from "@/components/shared/SectionContainer";
import TeamMemberCard from "@/components/modules/Team/TeamCard";

const TeamList = () => {
  return (
    <SectionContainer
      sectionTitle="Team"
      description="This is the list of team members"
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
