import PagesContainer from "@/components/modules/Layouts/PagesContainer";
import { PROJECTS_META, SERVICES_META } from "@/data/pages-meta";
import { SERVICES_LIST } from "@/data/services";
import { Fragment } from "react";
import ServiceItemCard from "@/components/pages/Services/ServiceItem";
import { projectsList } from "@/data/Projects";
import CaseStudyItem from "@/components/pages/CaseStudies/CaseStudyItem";

export default function CaseStudiesPage() {
  return (
    <PagesContainer
      heading="Case Studies"
      sectionTitle={PROJECTS_META.sectionTitle}
      description={PROJECTS_META.description}
    >
      {projectsList.map((project) => {
        return (
          <Fragment key={project.slug}>
            <CaseStudyItem project={project} />
          </Fragment>
        );
      })}
    </PagesContainer>
  );
}
