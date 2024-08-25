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
    <Card className="relative flex flex-col content-between items-center mt-[100px]">
      <CardHeader className="min-h-[150px]">
        <Image
          className="rounded-full absolute top-0 transform -translate-x-1/2 -translate-y-1/2"
          width={150}
          height={150}
          src={person.image}
          alt={person.name}
          loading="lazy"
        />
      </CardHeader>
      <CardContent className="text-center">
        <CardTitle>{person.name}</CardTitle>
        <CardDescription>{person.title}</CardDescription>
        <CardDescription>{person.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <button>View Profile</button>
      </CardFooter>
    </Card>
  );
};

export default TeamMemberCard;
