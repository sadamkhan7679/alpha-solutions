import { ServiceItem } from "@/types/services";
import ServiceItemCard from "@/components/pages/Services/ServiceItem";

type ServiceDetailPageProps = {
  service: ServiceItem;
};

const ServiceDetailPage = ({ service }: ServiceDetailPageProps) => {
  return <ServiceItemCard service={service} isDetail />;
};

export default ServiceDetailPage;
