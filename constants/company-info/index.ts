export const COMPANY_INFO = {
  Name: "Alpha Solutions",
  ShortName: "Alpha",
  Author: "Alpha Solutions",
  SiteName: "Alpha Solutions",
  Robots: "index, follow",
  ThemeColor: "#000000",
  Title: "Alpha Solutions | Expert Web & Mobile App Development",
  Tagline: "Tailored Technology to Drive Your Success",
  Address: "1234 Main St, New York, NY 10001",
  Phone: "+1 (123) 456-7890",
  Email: "support@alpha-solutions.dev",
  Social: {
    Facebook: "https://www.facebook.com/",
    Twitter: "https://twitter.com/",
    LinkedIn: "https://www.linkedin.com/",
    Instagram: "https://www.instagram.com/",
  },

  // Add the following properties
  // 1. Logo: "/path/to/logo.png"
  // 2. Favicon: "/path/to/favicon.png"
  // 3. Description: "Company description"
  // 4. Keywords: "company, description, keywords"
  // 5. Author: "Author name"
  // 6. SiteName: "Site name"
  // 7. Title: "Site title"
  // 8. Image: "/path/to/image.jpg"
  // 9. Twitter: "@twitter_handle"
  // 10. Type: "website"
  // 11. Robots: "index, follow"
  // 12. ThemeColor: "#000000"

  Logo: "/logo.svg",
  Favicon: "/favicon/favicon.ico",
  Description:
    "Transform your business with our cutting-edge web and mobile app development services. Specializing in React, Next.js, AI-enhanced apps, and cloud solutions, we deliver innovative, scalable, and user-centric digital experiences. From custom software to e-commerce platforms, our expert team brings your vision to life with the latest technologies and best practices in UI/UX design.",
  Keywords: ["company, description, keywords"],
  URL: "https://alpha-solutions.dev",
  Image: "/logo.svg",
  Twitter: "@twitter_handle",
  Type: "website",
};

export const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: COMPANY_INFO.Name,
  description: COMPANY_INFO.Description,
  url: COMPANY_INFO.URL,
  logo: `${COMPANY_INFO.URL}${COMPANY_INFO.Logo}`,
  sameAs: [
    COMPANY_INFO.Social.Facebook,
    COMPANY_INFO.Social.Twitter,
    COMPANY_INFO.Social.LinkedIn,
    COMPANY_INFO.Social.Instagram,
  ],
  // ... other properties as needed
};
