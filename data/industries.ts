import { Industry } from "@/types/services";

export const INDUSTRIES_KEYS = {
  REAL_ESTATE: "REAL_ESTATE",
  ECOMMERCE: "ECOMMERCE",
  HEALTHCARE: "HEALTHCARE",
  FINANCE: "FINANCE",
  EDUCATION: "EDUCATION",
  SOCIAL_NETWORK: "SOCIAL_NETWORK",
  TRAVEL_HOSPITALITY: "TRAVEL_HOSPITALITY",
};

export const INDUSTRIES_LIST: Industry[] = [
  {
    title: "Real Estate",
    slug: "real-estate",
    description:
      "Revolutionizing the real estate industry with cutting-edge technology.",
    Icon: require("@/assets/icons/industries/real-estate.svg").default,
  },
  {
    title: "E-commerce",
    slug: "e-commerce",
    description:
      "Building e-commerce platforms that drive sales and conversions.",
    Icon: require("@/assets/icons/industries/e-commerce.svg").default,
  },
  {
    title: "Healthcare",
    slug: "healthcare",
    description: "Transforming healthcare with innovative digital solutions.",
    Icon: require("@/assets/icons/industries/healthcare.svg").default,
  },
  {
    title: "Finance",
    slug: "finance",
    description:
      "Empowering financial institutions with secure and scalable solutions.",
    Icon: require("@/assets/icons/industries/finance.svg").default,
  },
  {
    title: "Education",
    slug: "education",
    description:
      "Enhancing the learning experience with interactive educational platforms.",
    Icon: require("@/assets/icons/industries/education.svg").default,
  },
  {
    title: "Social Network",
    slug: "social-network",
    description:
      "Building social networks that connect people around the world.",
    Icon: require("@/assets/icons/industries/social-network.svg").default,
  },
  {
    title: "Travel & Hospitality",
    slug: "travel-hospitality",
    description:
      "Creating seamless digital experiences for travelers and tourists.",
    Icon: require("@/assets/icons/industries/travel-hospitality.svg").default,
  },
];
