/**
 * Services
 *
 * This file contains the list of services offered by the company.
 * Each service has a category, name, description, benefits, technologies, link, and case studies.
 *
 * 1. Web Development
 * 2. Mobile Development
 * 3. AI Enhanced Solutions
 * 4. E-commerce
 * 5. Healthcare
 * 6. Education
 * 7. SaaS
 * 8. Startups
 * 9. Real Estate
 * 10. Finance
 * 11. Travel and Hospitality
 * 12. Food and Beverage
 */
import { ServiceItem } from "@/types/services";
import {WebDevelopmentIcon} from "@/icons/services/web-development";

export const SERVICES_META = {
  WEB_DEVELOPMENT: {
    title: "Web Development",
    className: "bg-service-web-development",
    slug: "web-development",
  },
  MOBILE_DEVELOPMENT: {
    title: "Mobile Development",
    className: "bg-service-mobile-development",
    slug: "mobile-development",
  },
  AI_ENHANCED_SOLUTIONS: {
    title: "AI Enhanced Solutions",
    className: "bg-service-ai-enhanced-solutions",
    slug: "ai-enhanced-solutions",
  },
  ECOMMERCE: {
    title: "E-commerce Development",
    className: "bg-service-e-commerce",
    slug: "e-commerce",
  },
  HEALTHCARE: {
    title: "Healthcare Application Development",
    className: "bg-service-healthcare",
    slug: "healthcare",
  },
  EDUCATION: {
    title: "Education Technology Solutions",
    className: "bg-service-education",
    slug: "education",
  },
  SAAS: {
    title: "SaaS Application Development",
    className: "bg-service-saas",
    slug: "saas",
  },
  STARTUPS: {
    title: "Startup IT Solutions",
    className: "bg-service-startups",
    slug: "startups",
  },
  REAL_ESTATE: {
    title: "Real Estate IT Solutions",
    className: "bg-service-real-estate",
    slug: "real-estate",
  },
  FINANCE: {
    title: "Finance IT Solutions",
    className: "bg-service-finance",
    slug: "finance",
  },
  TRAVEL_HOSPITALITY: {
    title: "Travel and Hospitality Solutions",
    className: "bg-service-travel-and-hospitality",
    slug: "travel-hospitality",
  },
  FOOD_BEVERAGE: {
    title: "Food and Beverage IT Solutions",
    className: "bg-service-food-and-beverage",
    slug: "food-beverage",
  },
};

export const servicesList: ServiceItem[] = [
  {
    id: "1",
    title: SERVICES_META.WEB_DEVELOPMENT.title,
    slug: SERVICES_META.WEB_DEVELOPMENT.slug,
    Icon: WebDevelopmentIcon,
    summary:
      "Creating robust and scalable websites to drive your business forward.",
    detailedDescription:
      "Our Web Development services focus on creating robust and scalable websites tailored to solve your unique business challenges. Whether you're struggling with an outdated website, slow performance, or poor user experience, our expert team utilizes the latest technologies to deliver a site that enhances your online presence, drives traffic, and increases conversions. We ensure your website is responsive, SEO optimized, and built for high performance, addressing all your digital pain points.",
    keyBenefits: [
      "Responsive design for all devices",
      "SEO optimized to rank higher in search engines",
      "High performance ensuring fast load times",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
    targetAudience: ["Businesses", "Startups", "Enterprises"],
    caseStudies: [
      {
        title: "Corporate Website for Tech Company",
        link: "/case-studies/corporate-website",
      },
      {
        title: "Portfolio Site for Creative Agency",
        link: "/case-studies/portfolio-site",
      },
    ],
    additionalData: {
      clientTestimonials: [
        "Our new website has significantly boosted our online presence and lead generation.",
        "The responsiveness and speed of our website have improved tremendously.",
      ],
      serviceTags: [
        "Web Design",
        "Web Development",
        "SEO",
        "Performance Optimization",
        "Responsive Web Design",
        "User Experience",
        "Frontend Development",
        "Backend Development",
        "Web Applications",
      ],
      seoTags: [
        "web development",
        "responsive web design",
        "SEO optimization",
        "high performance websites",
        "web applications",
        "frontend development",
        "backend development",
        "user experience",
        "business websites",
      ],
    },
  },
  {
    id: "2",
    title: SERVICES_META.MOBILE_DEVELOPMENT.title,
    slug: SERVICES_META.MOBILE_DEVELOPMENT.slug,
    Icon: WebDevelopmentIcon,
    summary: "Creating user-friendly and high-performance mobile applications.",
    detailedDescription:
      "Our Mobile Development services are designed to create user-friendly and high-performance mobile applications that solve your business needs. Whether you need an app to improve customer engagement, streamline operations, or offer new services, we build applications that provide a seamless user experience, robust functionality, and scalable architecture. Addressing issues such as poor app performance, limited functionality, and user disengagement, we help you launch successful mobile solutions.",
    keyBenefits: [
      "User-friendly interfaces",
      "Seamless integration with existing systems",
      "Scalable and maintainable solutions",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Java",
      "Objective-C",
      "Firebase",
      "SQLite",
      "GraphQL",
      "REST APIs",
      "AWS Mobile",
      "Google Cloud",
    ],
    targetAudience: ["Businesses", "Startups", "Enterprises"],
    caseStudies: [
      {
        title: "E-commerce Mobile App for Retail Business",
        link: "/case-studies/ecommerce-mobile-app",
      },
      {
        title: "Healthcare Mobile App for Patient Management",
        link: "/case-studies/healthcare-mobile-app",
      },
    ],
    additionalData: {
      clientTestimonials: [
        "The app has improved our customer engagement and sales.",
        "Our operations are now more efficient thanks to the mobile app.",
      ],
      serviceTags: [
        "Mobile App Development",
        "User Experience",
        "Scalability",
        "Integration",
        "Cross-Platform Apps",
        "Native Mobile Apps",
        "iOS Development",
        "Android Development",
      ],
      seoTags: [
        "mobile app development",
        "user-friendly mobile apps",
        "high performance mobile apps",
        "cross-platform mobile development",
        "native mobile apps",
        "iOS development",
        "Android development",
        "mobile user experience",
        "mobile application integration",
      ],
    },
  },
  {
    id: "3",
    title: SERVICES_META.AI_ENHANCED_SOLUTIONS.title,
    slug: SERVICES_META.AI_ENHANCED_SOLUTIONS.slug,
    Icon: WebDevelopmentIcon,
    summary: "Harnessing the power of AI to solve complex business problems.",
    detailedDescription:
      "Our AI Enhanced Solutions help businesses harness the power of artificial intelligence to solve complex problems and drive growth. If you're facing challenges like inefficient processes, lack of actionable insights, or poor customer engagement, our AI solutions offer predictive analytics, automation, and personalized experiences. We ensure that your AI implementation is tailored to your specific needs, providing you with the tools to make smarter decisions and enhance operational efficiency.",
    keyBenefits: [
      "Predictive analytics for better decision making",
      "Automated workflows to save time",
      "Improved customer engagement with AI-driven insights",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "NLTK",
      "AWS SageMaker",
      "Google AI Platform",
      "Azure AI",
      "IBM Watson",
    ],
    targetAudience: ["Businesses", "Startups", "Enterprises"],
    caseStudies: [
      {
        title: "Customer Service Chatbot for Finance Industry",
        link: "/case-studies/chatbot-finance",
      },
      {
        title: "Predictive Maintenance for Manufacturing",
        link: "/case-studies/predictive-maintenance",
      },
    ],
    additionalData: {
      clientTestimonials: [
        "Our customer service has improved significantly with the AI chatbot.",
        "The predictive maintenance solution has reduced our downtime considerably.",
      ],
      serviceTags: [
        "AI Solutions",
        "Machine Learning",
        "Automation",
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Data Science",
        "AI Integration",
        "AI Consulting",
      ],
      seoTags: [
        "AI solutions",
        "machine learning",
        "predictive analytics",
        "AI-driven automation",
        "customer engagement with AI",
        "AI implementation",
        "natural language processing",
        "computer vision",
        "data science",
      ],
    },
  },
  {
    id: "4",
    title: SERVICES_META.ECOMMERCE.title,
    slug: SERVICES_META.ECOMMERCE.slug,
    Icon: WebDevelopmentIcon,
    summary:
      "Building scalable and secure e-commerce platforms to boost your online sales.",
    detailedDescription:
      "Our E-commerce Development services are designed to create scalable and secure e-commerce platforms that meet your business requirements. Whether you're struggling with a limited online presence, poor user experience, or low conversion rates, we develop solutions that enhance your e-commerce operations. Our team builds platforms with enhanced user experience, secure payment gateways, and scalable architecture to ensure your online store performs optimally and drives sales.",

    keyBenefits: [
      "Enhanced user experience",
      "Secure payment gateways",
      "Scalable architecture",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "Stripe",
      "PayPal",
      "Shopify",
      "Magento",
      "WooCommerce",
      "AWS",
    ],
    targetAudience: ["Retailers", "Startups", "Businesses"],
    caseStudies: [
      {
        title: "Online Retail Platform",
        link: "/case-studies/online-retail-platform",
      },
      {
        title: "Custom Payment Integration",
        link: "/case-studies/custom-payment-integration",
      },
    ],
    additionalData: {
      clientTestimonials: [
        "Our online store's user experience has drastically improved.",
        "We have seen a significant increase in sales since the new platform launch.",
      ],
      serviceTags: [
        "E-commerce",
        "User Experience",
        "Payment Integration",
        "Scalability",
        "Online Store Development",
        "Secure Transactions",
        "Conversion Optimization",
        "E-commerce Platforms",
        "Retail Solutions",
      ],
      seoTags: [
        "e-commerce development",
        "online store development",
        "secure e-commerce platforms",
        "user experience in e-commerce",
        "payment integration",
        "scalable e-commerce solutions",
        "conversion optimization",
        "retail e-commerce solutions",
        "shopify development",
      ],
    },
  },
  {
    id: "5",
    title: SERVICES_META.HEALTHCARE.title,
    slug: SERVICES_META.HEALTHCARE.slug,
    Icon: WebDevelopmentIcon,
    summary:
      "Creating secure and compliant healthcare applications to improve patient care.",
    detailedDescription:
      "Our Healthcare Application Development services focus on creating secure and compliant healthcare applications to improve patient care. If you are dealing with inefficient patient management, lack of telehealth capabilities, or data security concerns, we develop solutions that address these issues. Our applications are designed to ensure HIPAA compliance, secure patient data management, and provide telehealth capabilities to enhance patient care and operational efficiency.",
    keyBenefits: [
      "HIPAA compliance",
      "Secure patient data management",
      "Telehealth capabilities",
    ],
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Twilio",
      "AWS",
      "FHIR",
      "HL7",
      "Docker",
      "Kubernetes",
      "MongoDB",
      "GraphQL",
      "Azure",
    ],
    targetAudience: ["Hospitals", "Clinics", "Healthcare Providers"],
    caseStudies: [
      {
        title: "Telemedicine Platform",
        link: "/case-studies/telemedicine-platform",
      },
      {
        title: "Patient Management System",
        link: "/case-studies/patient-management-system",
      },
    ],
    additionalData: {
      clientTestimonials: [
        "The telemedicine platform has revolutionized our patient care.",
        "Our patient management has become much more efficient and secure.",
      ],
      serviceTags: [
        "Healthcare",
        "HIPAA Compliance",
        "Telehealth",
        "Patient Management",
        "Secure Data",
        "Healthcare Applications",
        "Telemedicine",
        "Health IT Solutions",
        "Healthcare Software",
      ],
      seoTags: [
        "healthcare application development",
        "HIPAA compliant software",
        "secure healthcare applications",
        "telehealth solutions",
        "patient management systems",
        "telemedicine platforms",
        "health IT solutions",
        "healthcare software development",
        "secure patient data management",
      ],
    },
  },
  {
    id: "6",
    title: SERVICES_META.EDUCATION.title,
    slug: SERVICES_META.EDUCATION.slug,
    Icon: WebDevelopmentIcon,
    summary:
      "Innovative education technology solutions to enhance learning experiences.",
    detailedDescription:
      "Our Education Technology Solutions provide innovative tools to enhance learning experiences and improve educational outcomes. If you're facing challenges with outdated learning management systems, poor student engagement, or inefficient administrative processes, we develop solutions that address these issues. Our technology solutions include interactive learning platforms, student management systems, and administrative tools that enhance the overall learning experience and streamline operations.",
    keyBenefits: [
      "Interactive learning platforms",
      "Student management systems",
      "Efficient administrative tools",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "AWS",
      "Firebase",
      "Twilio",
      "Canvas API",
      "Google Classroom API",
      "EdTech Integration",
    ],
    targetAudience: ["Schools", "Universities", "Educational Institutions"],
    caseStudies: [
      {
        title: "Interactive Learning Platform",
        link: "/case-studies/interactive-learning-platform",
      },
      {
        title: "Student Management System",
        link: "/case-studies/student-management-system",
      },
    ],
    additionalData: {
      clientTestimonials: [
        "The interactive learning platform has transformed our teaching methods.",
        "Our student management is now more efficient and user-friendly.",
      ],
      serviceTags: [
        "Education Technology",
        "Interactive Learning",
        "Student Management",
        "EdTech Solutions",
        "Learning Platforms",
        "Educational Software",
        "Education Management Systems",
        "Online Learning",
        "Virtual Classrooms",
      ],
      seoTags: [
        "education technology solutions",
        "interactive learning platforms",
        "student management systems",
        "edtech solutions",
        "educational software",
        "online learning platforms",
        "virtual classrooms",
        "learning management systems",
        "educational technology development",
      ],
    },
  },
  {
    id: "7",
    title: SERVICES_META.SAAS.title,
    slug: SERVICES_META.SAAS.slug,
    Icon: WebDevelopmentIcon,
    summary:
      "Building scalable and reliable SaaS applications tailored to your business needs.",
    detailedDescription:
      "Our SaaS Application Development services focus on building scalable and reliable SaaS applications tailored to your business needs. If you're facing issues with application scalability, user management, or subscription handling, we develop solutions that address these problems. Our SaaS applications are designed to provide seamless user experiences, efficient subscription management, and scalable architectures to ensure your service operates smoothly and grows with your business.",
    keyBenefits: [
      "Seamless user experiences",
      "Efficient subscription management",
      "Scalable architectures",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "Stripe",
      "PayPal",
      "AWS",
      "Docker",
      "Kubernetes",
      "Firebase",
    ],
    targetAudience: ["Businesses", "Startups", "Enterprises"],
    caseStudies: [
      {
        title: "Multi-tenant SaaS Platform",
        link: "/case-studies/multi-tenant-saas-platform",
      },
      {
        title: "CRM SaaS Application",
        link: "/case-studies/crm-saas-application",
      },
    ],
    additionalData: {
      clientTestimonials: [
        "The SaaS application is highly scalable and reliable.",
        "We have seen a significant increase in user satisfaction since implementing the new SaaS model.",
      ],
      serviceTags: [
        "SaaS",
        "Scalability",
        "Multi-tenant",
        "Subscription Management",
        "SaaS Development",
        "Cloud Applications",
        "SaaS Solutions",
        "SaaS Platforms",
        "User Management",
      ],
      seoTags: [
        "SaaS application development",
        "scalable SaaS applications",
        "multi-tenant SaaS platforms",
        "subscription management solutions",
        "cloud-based SaaS applications",
        "user management in SaaS",
        "SaaS development services",
        "SaaS platforms",
        "reliable SaaS solutions",
      ],
    },
  },
  {
    id: "8",
    title: SERVICES_META.STARTUPS.title,
    slug: SERVICES_META.STARTUPS.slug,
    Icon: WebDevelopmentIcon,
    summary: "Comprehensive IT solutions to help startups succeed and grow.",
    detailedDescription:
      "Our Startup IT Solutions are tailored to meet the specific needs of new businesses looking to establish themselves in the market. Whether you need assistance with MVP development, rapid prototyping, or technology consulting, we provide end-to-end solutions to support your startup's growth. Addressing common startup challenges such as limited resources, tight deadlines, and scalability issues, we help you build a solid technological foundation for future success.",
    keyBenefits: [
      "MVP development",
      "Rapid prototyping",
      "Technology consulting",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "AWS",
      "Firebase",
      "Docker",
      "Kubernetes",
      "GitHub",
      "Jenkins",
    ],
    targetAudience: ["Startups", "Entrepreneurs", "Innovators"],
    caseStudies: [
      {
        title: "MVP for Fintech Startup",
        link: "/case-studies/mvp-fintech-startup",
      },
      {
        title: "Rapid Prototype for HealthTech Startup",
        link: "/case-studies/rapid-prototype-healthtech",
      },
    ],
    additionalData: {
      clientTestimonials: [
        "The MVP development helped us launch quickly and attract investors.",
        "Their rapid prototyping services were instrumental in validating our idea.",
      ],
      serviceTags: [
        "Startup",
        "MVP",
        "Prototyping",
        "Technology Consulting",
        "Startup IT Solutions",
        "Rapid Development",
        "Startup Support",
        "Innovative Solutions",
        "Entrepreneurial Tech",
      ],
      seoTags: [
        "startup IT solutions",
        "MVP development",
        "rapid prototyping",
        "technology consulting for startups",
        "innovative startup solutions",
        "entrepreneurial tech support",
        "startup growth solutions",
        "startup technology services",
        "tech consulting for startups",
      ],
    },
  },
  {
    id: "9",
    title: SERVICES_META.REAL_ESTATE.title,
    slug: SERVICES_META.REAL_ESTATE.slug,
    Icon: WebDevelopmentIcon,
    summary:
      "Innovative IT solutions to streamline real estate operations and enhance property management.",
    detailedDescription:
      "Our Real Estate IT Solutions are designed to streamline real estate operations and enhance property management. If you are facing challenges with property listings, client management, or data analytics, our solutions provide comprehensive property management systems, user-friendly client portals, and data-driven insights. We help you improve efficiency, enhance client satisfaction, and make informed decisions with our tailored real estate technology solutions.",
    keyBenefits: [
      "Comprehensive property management",
      "User-friendly client portals",
      "Data-driven insights",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "AWS",
      "Docker",
      "Kubernetes",
      "Google Cloud",
      "Twilio",
      "Firebase",
      "Leaflet",
    ],
    targetAudience: ["Real Estate Agents", "Property Managers", "Developers"],
    caseStudies: [
      {
        title: "Property Management System",
        link: "/case-studies/property-management-system",
      },
      {
        title: "Client Portal for Real Estate Firm",
        link: "/case-studies/client-portal-real-estate",
      },
    ],
    additionalData: {
      clientTestimonials: [
        "The property management system has streamlined our operations.",
        "Our clients love the new user-friendly portal.",
      ],
      serviceTags: [
        "Real Estate",
        "Property Management",
        "Client Portals",
        "Data Analytics",
        "Real Estate IT",
        "Property Listings",
        "Real Estate Solutions",
        "Real Estate Technology",
        "Client Management",
      ],
      seoTags: [
        "real estate IT solutions",
        "property management systems",
        "client portals for real estate",
        "real estate data analytics",
        "real estate technology solutions",
        "property listing management",
        "real estate client management",
        "real estate software development",
        "real estate technology services",
      ],
    },
  },
  {
    id: "10",
    title: SERVICES_META.FINANCE.title,
    slug: SERVICES_META.FINANCE.slug,
    Icon: WebDevelopmentIcon,
    summary:
      "Secure and efficient IT solutions for the finance industry to optimize operations.",
    detailedDescription:
      "Our Finance IT Solutions help financial institutions optimize their operations and improve customer service. If you are dealing with issues like regulatory compliance, data security, or inefficient processes, our solutions offer secure transaction processing, data management, and compliance tracking. We ensure that your financial operations run smoothly and securely, allowing you to focus on growing your business.",

    keyBenefits: [
      "Secure transaction processing",
      "Efficient data management",
      "Regulatory compliance tracking",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "AWS",
      "Docker",
      "Kubernetes",
      "Google Cloud",
      "Twilio",
      "Firebase",
      "Blockchain",
    ],
    targetAudience: ["Banks", "Financial Institutions", "Fintech Startups"],
    caseStudies: [
      {
        title: "Blockchain-based Payment System",
        link: "/case-studies/blockchain-payment-system",
      },
      {
        title: "Compliance Tracking System",
        link: "/case-studies/compliance-tracking-system",
      },
    ],
    additionalData: {
      clientTestimonials: [
        "Our transaction processes are now secure and efficient.",
        "Compliance tracking has become much easier with the new system.",
      ],
      serviceTags: [
        "Finance",
        "Secure Transactions",
        "Data Management",
        "Regulatory Compliance",
        "Financial IT Solutions",
        "Blockchain",
        "Payment Systems",
        "Fintech Solutions",
        "Financial Software",
      ],
      seoTags: [
        "finance IT solutions",
        "secure financial transactions",
        "financial data management",
        "regulatory compliance solutions",
        "blockchain payment systems",
        "fintech IT solutions",
        "financial software development",
        "secure transaction processing",
        "financial compliance tracking",
      ],
    },
  },
  {
    id: "11",
    title: SERVICES_META.TRAVEL_HOSPITALITY.title,
    slug: SERVICES_META.TRAVEL_HOSPITALITY.slug,
    Icon: WebDevelopmentIcon,
    summary:
      "Advanced IT solutions to enhance customer experience in the travel and hospitality industry.",
    detailedDescription:
      "Our Travel and Hospitality Solutions provide advanced IT solutions to enhance customer experience and streamline operations. If you're facing challenges like booking management, customer engagement, or operational inefficiencies, our solutions offer integrated booking systems, personalized customer engagement tools, and efficient management platforms. We help you deliver exceptional service and optimize your operations to stay competitive in the travel and hospitality industry.",
    keyBenefits: [
      "Integrated booking systems",
      "Personalized customer engagement",
      "Efficient management platforms",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "AWS",
      "Docker",
      "Kubernetes",
      "Twilio",
      "Firebase",
      "Google Cloud",
      "Stripe",
    ],
    targetAudience: ["Hotels", "Travel Agencies", "Tour Operators"],
    caseStudies: [
      {
        title: "Booking Management System",
        link: "/case-studies/booking-management-system",
      },
      {
        title: "Customer Engagement Platform",
        link: "/case-studies/customer-engagement-platform",
      },
    ],
    additionalData: {
      clientTestimonials: [
        "The integrated booking system has streamlined our operations.",
        "Customer engagement has significantly improved with the new platform.",
      ],
      serviceTags: [
        "Travel",
        "Hospitality",
        "Booking Management",
        "Customer Engagement",
        "Travel IT Solutions",
        "Hospitality Technology",
        "Travel Platforms",
        "Hospitality Management",
        "Tourism Solutions",
      ],
      seoTags: [
        "travel and hospitality solutions",
        "booking management systems",
        "customer engagement platforms",
        "hospitality management technology",
        "integrated travel systems",
        "tourism IT solutions",
        "hospitality software development",
        "customer engagement tools",
        "travel technology solutions",
      ],
    },
  },
  {
    id: "12",
    title: SERVICES_META.FOOD_BEVERAGE.title,
    slug: SERVICES_META.FOOD_BEVERAGE.slug,
    Icon: WebDevelopmentIcon,
    summary:
      "Innovative IT solutions for the food and beverage industry to enhance operations and customer experience.",
    detailedDescription:
      "Our Food and Beverage IT Solutions provide innovative tools to enhance operations and improve customer experience in the food and beverage industry. Whether you're dealing with inventory management, order processing, or customer engagement challenges, our solutions offer efficient management systems, integrated order processing, and personalized customer interaction tools. We help you streamline your operations and deliver exceptional service to your customers.",
    keyBenefits: [
      "Efficient inventory management",
      "Integrated order processing",
      "Personalized customer interaction",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "AWS",
      "Docker",
      "Kubernetes",
      "Firebase",
      "Stripe",
      "Google Cloud",
      "Twilio",
    ],
    targetAudience: ["Restaurants", "Cafes", "Food Delivery Services"],
    caseStudies: [
      {
        title: "Inventory Management System",
        link: "/case-studies/inventory-management-system",
      },
      {
        title: "Integrated Order Processing Platform",
        link: "/case-studies/order-processing-platform",
      },
    ],
    additionalData: {
      clientTestimonials: [
        "Inventory management has become much more efficient.",
        "Order processing is now seamless and integrated with our systems.",
      ],
      serviceTags: [
        "Food and Beverage",
        "Inventory Management",
        "Order Processing",
        "Customer Interaction",
        "Food IT Solutions",
        "Restaurant Technology",
        "Food Delivery Systems",
        "Hospitality IT",
        "Culinary Tech",
      ],
      seoTags: [
        "food and beverage IT solutions",
        "inventory management systems",
        "order processing platforms",
        "customer interaction tools",
        "restaurant technology solutions",
        "food delivery systems",
        "hospitality IT solutions",
        "culinary technology",
        "food service management software",
      ],
    },
  },
];

// const services = [
//   {
//     title: "Web Development",
//     description: "We create tailored web applications to meet your business needs.",
//
//   }
// ]
//
//
//
//
//
//
//
//
//
//
//
// const servicesList = [
//   {
//     id: "1",
//     category: "Web and Mobile Development",
//     name: "Custom Web and Mobile App Development",
//     description:
//       "We create tailored web and mobile applications to meet your business needs.",
//     benefits: [
//       "Scalable and maintainable solutions",
//       "User-friendly interfaces",
//       "Seamless integration with existing systems",
//     ],
//     technologies: [
//       "React",
//       "Next.js",
//       "Node.js",
//       "MongoDB",
//       "SQL",
//       "PostgreSQL",
//     ],
//     link: "/services/web-mobile-app-development",
//     caseStudies: [
//       {
//         title: "E-commerce Platform for Retail Business",
//         description:
//           "Developed a robust e-commerce platform for a leading retail company.",
//         link: "/case-studies/e-commerce-platform",
//       },
//       {
//         title: "Mobile App for Healthcare Provider",
//         description:
//           "Developed a secure and user-friendly mobile app for a healthcare provider.",
//         link: "/case-studies/healthcare-mobile-app",
//       },
//     ],
//   },
//   {
//     id: "2",
//     category: "AI and Machine Learning",
//     name: "AI and Machine Learning Solutions",
//     description:
//       "Leverage AI to enhance business processes and decision-making.",
//     benefits: [
//       "Predictive analytics for better decision making",
//       "Automated workflows to save time",
//       "Improved customer engagement with AI-driven insights",
//     ],
//     technologies: ["Python", "TensorFlow", "Keras", "PyTorch", "Scikit-learn"],
//     link: "/services/ai-machine-learning",
//     caseStudies: [
//       {
//         title: "Customer Service Chatbot for Finance Industry",
//         description:
//           "Implemented a chatbot to enhance customer service for a finance company.",
//         link: "/case-studies/chatbot-finance",
//       },
//       {
//         title: "Predictive Maintenance for Manufacturing",
//         description:
//           "Developed predictive maintenance solutions to reduce downtime in manufacturing.",
//         link: "/case-studies/predictive-maintenance",
//       },
//     ],
//   },
//   {
//     id: "3",
//     category: "E-commerce",
//     name: "Custom E-commerce Development",
//     description:
//       "We build scalable and secure e-commerce platforms tailored to your business needs.",
//     benefits: [
//       "Enhanced user experience",
//       "Secure payment gateways",
//       "Scalable architecture",
//     ],
//     technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
//     link: "/services/ecommerce-development",
//     caseStudies: [
//       {
//         title: "Online Retail Platform",
//         description:
//           "Developed a robust e-commerce platform for a leading retail company.",
//         link: "/case-studies/online-retail-platform",
//       },
//       {
//         title: "Custom Payment Integration",
//         description:
//           "Integrated custom payment solutions for a subscription-based e-commerce site.",
//         link: "/case-studies/custom-payment-integration",
//       },
//     ],
//   },
//   {
//     id: "4",
//     category: "Healthcare",
//     name: "Healthcare Application Development",
//     description:
//       "Creating secure and compliant healthcare applications to improve patient care.",
//     benefits: [
//       "HIPAA compliance",
//       "Secure patient data management",
//       "Telehealth capabilities",
//     ],
//     technologies: ["React", "Node.js", "PostgreSQL", "Twilio"],
//     link: "/services/healthcare-app-development",
//     caseStudies: [
//       {
//         title: "Telemedicine Platform",
//         description:
//           "Built a comprehensive telemedicine platform for a healthcare provider.",
//         link: "/case-studies/telemedicine-platform",
//       },
//       {
//         title: "Patient Management System",
//         description:
//           "Developed a secure patient management system for a clinic.",
//         link: "/case-studies/patient-management-system",
//       },
//     ],
//   },
//   {
//     id: "5",
//     category: "Education",
//     name: "EdTech Solutions",
//     description:
//       "Providing innovative EdTech solutions to enhance learning experiences.",
//     benefits: [
//       "Interactive learning platforms",
//       "Scalable online classrooms",
//       "Data-driven insights",
//     ],
//     technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
//     link: "/services/edtech-solutions",
//     caseStudies: [
//       {
//         title: "Online Learning Platform",
//         description: "Developed an online learning platform for a university.",
//         link: "/case-studies/online-learning-platform",
//       },
//       {
//         title: "Student Analytics Dashboard",
//         description:
//           "Created an analytics dashboard to track student performance.",
//         link: "/case-studies/student-analytics-dashboard",
//       },
//     ],
//   },
//   {
//     id: "6",
//     category: "SaaS",
//     name: "SaaS Application Development",
//     description:
//       "Building scalable SaaS applications to meet diverse business needs.",
//     benefits: [
//       "Subscription-based models",
//       "Multi-tenant architecture",
//       "Scalable infrastructure",
//     ],
//     technologies: [
//       "React",
//       "Next.js",
//       "Node.js",
//       "MongoDB",
//       "Docker",
//       "Kubernetes",
//     ],
//     link: "/services/saas-development",
//     caseStudies: [
//       {
//         title: "Project Management Tool",
//         description: "Developed a SaaS project management tool for teams.",
//         link: "/case-studies/project-management-tool",
//       },
//       {
//         title: "CRM Solution",
//         description:
//           "Built a CRM solution to help businesses manage customer relationships.",
//         link: "/case-studies/crm-solution",
//       },
//     ],
//   },
//   {
//     id: "7",
//     category: "Startups",
//     name: "Startup IT Solutions",
//     description:
//       "Offering IT solutions to help startups accelerate their growth.",
//     benefits: [
//       "MVP development",
//       "Scalable solutions",
//       "Cost-effective services",
//     ],
//     technologies: [
//       "React",
//       "Next.js",
//       "Node.js",
//       "MongoDB",
//       "PostgreSQL",
//       "AWS",
//     ],
//     link: "/services/startup-it-solutions",
//     caseStudies: [
//       {
//         title: "FinTech Startup Platform",
//         description:
//           "Developed a comprehensive platform for a FinTech startup.",
//         link: "/case-studies/fintech-startup-platform",
//       },
//       {
//         title: "Social Media App",
//         description: "Built a social media application for a startup.",
//         link: "/case-studies/social-media-app",
//       },
//     ],
//   },
// ];
