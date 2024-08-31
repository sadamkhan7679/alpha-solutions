import ServiceDetailPage from "@/components/pages/Services/ServiceDetailPage";
import { SERVICES_LIST } from "@/data/services";
import NotFoundPage from "@/components/pages/NotFoundPage";
import PagesContainer from "@/components/modules/Layouts/PagesContainer";
import { SERVICES_META } from "@/data/pages-meta";
import { Fragment } from "react";
import ServiceItemCard from "@/components/pages/Services/ServiceItem";
import SectionContainer from "@/components/shared/SectionContainer";

export default function Page({ params }: { params: { slug: string } }) {
  const serviceSlug = params.slug;

  const service = SERVICES_LIST.find((service) => service.slug === serviceSlug);

  if (!service) {
    return <NotFoundPage />;
  }

  return (
    <PagesContainer
      heading="Our Services"
      sectionTitle={SERVICES_META.sectionTitle}
      description={SERVICES_META.description}
    >
      <ServiceItemCard service={service} isDetail />
    </PagesContainer>
  );
}

export async function generateStaticParams() {
  return SERVICES_LIST.map((service) => ({
    slug: service.slug,
  }));
}
