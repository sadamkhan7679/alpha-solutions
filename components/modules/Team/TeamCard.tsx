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
import { Button } from "@/components/ui/button";

type TeamMemberCardProps = {
  person: TeamMember;
};

const TeamMemberCard = ({ person }: TeamMemberCardProps) => {
  return (
    <Card className="relative bg-primary flex flex-col content-between items-center mt-[100px]">
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
        <CardTitle className="text-primary-foreground">{person.name}</CardTitle>
        <CardDescription className="text-primary-foreground">
          {person.title}
        </CardDescription>
        <CardDescription className="text-primary-foreground">
          {person.description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="secondary">View Profile</Button>
      </CardFooter>
    </Card>
  );
};

export default TeamMemberCard;
