import { projectsList } from "@/data/Projects";
import NotFoundPage from "@/components/pages/NotFoundPage";
import PagesContainer from "@/components/modules/Layouts/PagesContainer";
import { PROJECTS_META } from "@/data/pages-meta";
import { Fragment } from "react";
import CaseStudyItem from "@/components/pages/CaseStudies/CaseStudyItem";

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const project = projectsList.find((project) => project.slug === slug);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <PagesContainer
      heading="Case Studies"
      sectionTitle={PROJECTS_META.sectionTitle}
      description={PROJECTS_META.description}
      links={[{ href: "/case-studies", title: "Case Studies" }]}
    >
      <CaseStudyItem project={project} isDetailPage />
    </PagesContainer>
  );
}

export async function generateStaticParams() {
  return projectsList.map((project) => ({
    slug: project.slug,
  }));
}
