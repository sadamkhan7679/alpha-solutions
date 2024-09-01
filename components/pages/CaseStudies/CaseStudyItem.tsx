// projectsList: Project[]
import { Project, TechStack } from "@/types/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/shared/Typography";
import ListItems from "@/components/shared/ListItems";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TagsList from "@/components/shared/TagsList";
import { CTA } from "@/components/shared/CTA";
import React from "react";
import TestimonialCard from "@/components/shared/TestimonialCard";

type CaseStudyItemProps = {
  project: Project;
  isDetailPage?: boolean;
};

const CaseStudyItem = ({ project, isDetailPage }: CaseStudyItemProps) => {
  return (
    <Card className="w-full px-6 mb-10 broder-4 border-primary">
      <CardHeader
        className={cn(
          "flex flex-row items-center w-full text-primary",
          "border-b-4 border-primary",
        )}
      >
        {/*{ServiceIcon && (*/}
        {/*    <ServiceIcon width={60} height={60} className="mr-5" />*/}
        {/*    // <service.Icon />*/}
        {/*)}*/}
        <CardTitle className="flex flex-col">
          <Typography variant="h3">{project.title}</Typography>
          <span className="text-sm mt-2">Platform: {project.type}</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <ListItems
              summary={project.description}
              items={project.features}
              itemClassName={cn("text-primary")}
            />
            {!isDetailPage && (
              <Link href={`/case-studies/${project.slug}`}>
                <Button className="mt-4">View Full Case Study</Button>
              </Link>
            )}
          </div>
          <div className="flex flex-row items-start justify-end py-8 lg:py-16">
            <Image
              src={project.thumbnailUrl}
              alt={project.title}
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
        {isDetailPage ? (
          <div>
            <ContentItem title="Problem" content={project.problem} />
            <ContentItem title="Solution" content={project.solution} />
            <ContentItem title="Results" content={project.results} />
            <Typography variant="h5" className="my-5">
              Challenges and Solutions
            </Typography>
            {project?.challengesAndSolutions?.map((item, index) => (
              <div className="mt-5" key={item.challenge}>
                <Typography variant="p" className="font-bold">
                  {item.challenge}
                </Typography>
                <Typography variant="p" className="text-black">
                  {item.solution}
                </Typography>
              </div>
            ))}

            <div className="mt-5">
              <TechStackItem techStack={project.techStack} />
            </div>

            <Typography variant="h5" className="my-5">
              Lessons Learned
            </Typography>
            <ListItems items={project.lessons} />

            {project?.testimonial && (
              <div className="mb-5">
                <TestimonialCard testimonial={project.testimonial} />
              </div>
            )}

            <div className="flex items-center">
              <CTA title="Get Started" />
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};

const ContentItem = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="mt-5">
      <Typography variant="h5">{title}</Typography>
      <Typography variant="p" className="text-black">
        {content}
      </Typography>
    </div>
  );
};

const TechStackItem = ({ techStack }: { techStack: TechStack }) => {
  return (
    <div className="">
      <Typography variant="h5">Tech Stack</Typography>
      {Object.entries(techStack).map(([key, value]) => {
        // Capitalize the first letter of the key
        const label = key.charAt(0).toUpperCase() + key.slice(1);
        const tools = value.map((tool: any) => tool.title) as string[];

        return (
          <div key={key} className="grid grid-cols-12 place-items-stretch">
            <div className="mr-10 col-span-12 lg:col-span-1 flex items-center">
              <Typography variant="p" className="font-bold uppercase">
                {label}
              </Typography>
            </div>
            <div className="col-span-12 lg:col-span-11">
              <TagsList tags={tools} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CaseStudyItem;
