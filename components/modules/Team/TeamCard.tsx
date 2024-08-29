import { TeamMember } from "@/types/Team";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type TeamMemberCardProps = {
  person: TeamMember;
};

const TeamMemberCard = ({ person }: TeamMemberCardProps) => {
  return (
    <Card className="w-full flex flex-col content-between items-center mt-[100px]">
      <CardHeader className="min-h-[150px] relative w-40 h-40 transform -translate-x-0 -translate-y-1/2">
        <Image
          className="rounded-full absolute top-0"
          fill
          src={person.image}
          alt={person.name}
          loading="lazy"
        />
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <CardTitle className="text-center mb-5">{person.name}</CardTitle>
        {/*<CardDescription>{person.title}</CardDescription>*/}
        <CardDescription>{person.description}</CardDescription>
      </CardContent>
      <CardFooter>{/*<button>View Profile</button>*/}</CardFooter>
    </Card>
  );
};

export default TeamMemberCard;
