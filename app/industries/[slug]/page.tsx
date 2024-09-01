import { SERVICES_LIST } from "@/data/services";
import NotFoundPage from "@/components/pages/NotFoundPage";
import PagesContainer from "@/components/modules/Layouts/PagesContainer";
import { SERVICES_META } from "@/data/pages-meta";
import ServiceItemCard from "@/components/pages/Services/ServiceItem";
import { industriesList } from "@/constants/industries";
import { IndustryCard } from "@/components/modules/Home/Industries/IndustriesData";

export default function Page({ params }: { params: { slug: string } }) {
  const industrySlug = params.slug;

  const industry = industriesList.find(
    (industry) => industry.slug === industrySlug,
  );

  if (!industry) {
    return <NotFoundPage />;
  }

  return (
    <PagesContainer
      heading="Our Services"
      sectionTitle={SERVICES_META.sectionTitle}
      description={SERVICES_META.description}
      links={[{ href: "/services", title: "Services" }]}
    >
      <IndustryCard industry={industry} />
    </PagesContainer>
  );
}

export async function generateStaticParams() {
  return industriesList.map((industry) => ({
    slug: industry.slug,
  }));
}
