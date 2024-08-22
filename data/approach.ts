import React from "react";

export type ApproachItem = {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
};

export const ApproachData: ApproachItem = {
  content: [
    {
      title: "Discovery",
      description:
        "We start by understanding your business, your goals, and your target audience. This helps us create a website that is tailored to your needs. lorem ipsum dolor sit amet,This helps us create a website that is tailored to your needs. lorem ipsum dolor sit amet",
    },
    {
      title: "Design",
      description:
        "We create a design that is not only visually appealing but also user-friendly. This helps us create a website that is tailored to your needs. lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
      title: "Development",
      description:
        "We develop your website using the latest technologies and best practices. This helps us create a website that is tailored to your needs. lorem ipsum dolor sit amet",
    },
    {
      title: "Testing",
      description:
        "We test your website on different devices and browsers to ensure compatibility. This helps us create a website that is tailored to your needs. lorem ipsum dolor sit amet",
    },
    {
      title: "Launch",
      description:
        "We launch your website and provide ongoing support and maintenance. This helps us create a website that is tailored to your needs. lorem ipsum dolor sit amet",
    },
  ],
};
