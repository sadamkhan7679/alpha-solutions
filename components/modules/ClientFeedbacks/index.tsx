"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "@/components/ui/InfiniteCards";
import { SectionContent } from "@/types/root";
import SectionContainer from "@/components/shared/SectionContainer";
import Image from "next/image";

const testimonialSection: SectionContent = {
  headline: "Voices of Success: What Our Clients Say",
  description:
    "Don't just take our word for it – hear from the businesses we've helped transform. Our clients' success stories are the true testament to our dedication and expertise. From startups that have become industry leaders to enterprises that have reinvented themselves for the digital age, these testimonials reflect the tangible impact of our partnerships. Discover how we've turned challenges into opportunities and ideas into game-changing digital solutions.",
};

const ClientsTestimonials = () => {
  return (
    <SectionContainer
      sectionTitle={testimonialSection.headline}
      description={testimonialSection.description}
    >
      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <Image
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                  loading="lazy"
                  width={40}
                  height={40}
                />
                <Image
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                  loading="lazy"
                  height={40}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ClientsTestimonials;
