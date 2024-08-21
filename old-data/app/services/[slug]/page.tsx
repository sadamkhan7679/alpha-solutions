


import React from "react";
import {servicesList} from "@/constants/services";

type ServicePageProps = {
	params: { slug: string };
};


const ServicePage:React.FC<ServicePageProps> = ({ params }) => {
	const slug = params.slug;


	const serviceData = servicesList.find((service)=>service.slug === slug);

	console.log("serviceData",serviceData)

	if(!serviceData){
		return (
			<>Service not found</>
		)
	}
	

	return (
		<>ServicePage</>
	)
}

export default ServicePage