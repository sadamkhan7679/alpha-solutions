import { ServiceItem } from "@/types/services";
import ServiceItemCard from "@/components/pages/Services/ServiceItem";

type ServiceDetailPageProps = {
  service: ServiceItem;
};

const ServiceDetailPage = ({ service }: ServiceDetailPageProps) => {
  return (
    <div className="app-container">
      <ServiceItemCard service={service} isDetail />
    </div>
  );
};

export default ServiceDetailPage;
