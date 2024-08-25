import ServiceDetailPage from "@/components/pages/Services/ServiceDetailPage";
import { SERVICES_LIST } from "@/data/services";
import NotFoundPage from "@/components/pages/NotFoundPage";

export default function Page({ params }: { params: { slug: string } }) {
  const serviceSlug = params.slug;

  const service = SERVICES_LIST.find((service) => service.slug === serviceSlug);

  if (!service) {
    return <NotFoundPage />;
  }

  return <ServiceDetailPage service={service} />;
}

export async function generateStaticParams() {
  return SERVICES_LIST.map((service) => ({
    slug: service.slug,
  }));
}
