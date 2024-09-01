import { ServiceItem } from "@/types/services";
import { WebAppIcon } from "@/icons/services/WebAppIcon";
import { MobileIcon } from "@/icons/services/MobileIcon";
import { DesktopAppIcon } from "@/icons/services/DesktopAppIcon";
import { AIIcon } from "@/icons/services/AIIcon";
import { EcommerceIcon } from "@/icons/services/EcommerceIcon";
import { WebDesignIcon } from "@/icons/services/WebDesignIcon";
import { BlockchainIcon } from "@/icons/services/BlockchainIcon";
import { CloudIcon } from "@/icons/services/CloudIcon";
import { ConsultingIcon } from "@/icons/services/ConsultingIcon";
import { FC } from "react";
import { SVGIconProps } from "@/types/root";

export const SERVICES_KEYS = {
  WEB_DEVELOPMENT: "WEB_DEVELOPMENT",
  MOBILE_DEVELOPMENT: "MOBILE_DEVELOPMENT",
  DESKTOP_DEVELOPMENT: "DESKTOP_DEVELOPMENT",
  AI_ENHANCED_SOLUTIONS: "AI_ENHANCED_SOLUTIONS",
  ECOMMERCE_DEVELOPMENT: "ECOMMERCE_DEVELOPMENT",
  CONSULTING_SERVICES: "CONSULTING_SERVICES",
  UI_UX_DESIGN: "UI_UX_DESIGN",
  BLOCKCHAIN_DEVELOPMENT: "BLOCKCHAIN_DEVELOPMENT",
  CLOUD_SERVICES: "CLOUD_SERVICES",
};

export const SERVICES_ICONS: Record<
  keyof typeof SERVICES_KEYS,
  FC<SVGIconProps>
> = {
  WEB_DEVELOPMENT: WebAppIcon,
  MOBILE_DEVELOPMENT: MobileIcon,
  DESKTOP_DEVELOPMENT: DesktopAppIcon,
  AI_ENHANCED_SOLUTIONS: AIIcon,
  ECOMMERCE_DEVELOPMENT: EcommerceIcon,
  CONSULTING_SERVICES: ConsultingIcon,
  UI_UX_DESIGN: WebDesignIcon,
  BLOCKCHAIN_DEVELOPMENT: BlockchainIcon,
  CLOUD_SERVICES: CloudIcon,
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    key: SERVICES_KEYS.WEB_DEVELOPMENT,
    title: "Web Development",
    slug: "web-development",
    Icon: "/services/web-development.svg",
    image: "/assets/services-images/web.png",
    headline: "Crafting Digital Experiences, One Pixel at a Time",
    summary:
      "From responsive websites to complex web applications, we bring your digital vision to life. Our cutting-edge web solutions are tailored to engage your audience and drive results, ensuring your business stands out in the digital landscape.",
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
    key: SERVICES_KEYS.MOBILE_DEVELOPMENT,
    title: "Mobile Development",
    slug: "mobile-development",
    image: "/assets/services-images/mobile.png",
    Icon: "/services/mobile-app.svg",
    headline: "Putting Your Business in Your Customers' Pockets",
    summary:
      "Transform the way you connect with your audience through our bespoke mobile applications. Whether it's iOS, Android, or cross-platform, we develop intuitive, high-performance apps that keep your users coming back for more.",
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
    key: SERVICES_KEYS.DESKTOP_DEVELOPMENT,
    title: "Desktop Development",
    slug: "desktop-development",
    image: "/assets/services-images/desktop.png",
    Icon: "/services/desktop-app-development.svg",
    headline: "Powerful Solutions for the Modern Workspace",
    summary:
      "Elevate your business operations with our custom desktop applications. We create robust, user-friendly software that streamlines workflows, boosts productivity, and gives your team the tools they need to excel.",
    detailedDescription:
      "Our Desktop Development services focus on building powerful and secure desktop applications that meet your business requirements. Whether you need a desktop app to streamline operations, improve productivity, or enhance data security, we create solutions that offer robust functionality, intuitive interfaces, and scalable architecture. Addressing issues such as outdated software, security vulnerabilities, and poor performance, our team ensures your desktop app is tailored to your specific needs.",
    keyBenefits: [
      "Robust functionality tailored to your needs",
      "Intuitive interfaces for ease of use",
      "Scalable architecture for future growth",
    ],
    technologies: [
      "Electron",
      "React",
      "Angular",
      "Java",
      "C#",
      "Python",
      "SQLite",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
      "Windows Forms",
      "WPF",
    ],
    targetAudience: ["Businesses", "Startups", "Enterprises"],
    caseStudies: [
      {
        title: "Inventory Management System for Retail Business",
        link: "/case-studies/inventory-management-system",
      },
      {
        title: "Custom CRM Software for Sales Team",
        link: "/case-studies/custom-crm-software",
      },
    ],
    additionalData: {
      clientTestimonials: [
        "The inventory management system has improved our operational efficiency.",
        "Our sales team is more productive thanks to the custom CRM software.",
      ],
      serviceTags: [
        "Desktop App Development",
        "User Experience",
        "Scalability",
        "Integration",
        "Cross-Platform Apps",
        "Windows Apps",
        "Mac Apps",
        "Linux Apps",
        "Custom Software",
      ],
      seoTags: [
        "desktop app development",
        "powerful desktop applications",
        "secure desktop software",
        "cross-platform desktop development",
        "custom software solutions",
        "Windows apps",
        "Mac apps",
        "Linux apps",
        "desktop user experience",
      ],
    },
  },
  {
    key: SERVICES_KEYS.AI_ENHANCED_SOLUTIONS,
    title: "AI Enhanced Solutions",
    slug: "ai-enhanced-solutions",
    image: "/assets/services-images/ai.png",
    Icon: "/services/ai.svg",
    headline: "Harnessing the Power of AI to Propel Your Business Forward",
    summary:
      "Step into the future with our AI-enhanced solutions. From predictive analytics to intelligent automation, we leverage cutting-edge AI technologies to give your business a competitive edge and unlock new possibilities.",
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
    key: SERVICES_KEYS.ECOMMERCE_DEVELOPMENT,
    title: "E-commerce Development",
    slug: "e-commerce",
    image: "/assets/services-images/e-commerce.png",
    Icon: "/services/ecommerce.svg",
    headline: "Turning Clicks into Customers",
    summary:
      "Create seamless shopping experiences that drive conversions. Our e-commerce solutions are built to scale, optimized for performance, and designed to turn browsers into buyers, helping your online store thrive in the digital marketplace.",
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
    key: SERVICES_KEYS.CONSULTING_SERVICES,
    title: "Consulting Services",
    slug: "consulting-services",
    image: "/assets/services-images/consulting.png",
    Icon: "/services/interview.svg",
    headline: "Guiding Your Digital Transformation Journey",
    summary:
      "Navigate the complex world of technology with confidence. Our expert consultants provide strategic guidance, helping you make informed decisions, optimize your digital strategy, and stay ahead in a rapidly evolving tech landscape.",
    detailedDescription:
      "Our Consulting Services provide expert guidance and strategic advice to help you achieve your business goals. Whether you're looking to optimize your digital strategy, improve operational efficiency, or drive growth through technology, our team offers tailored solutions to address your unique challenges. From technology audits to digital transformation roadmaps, we provide the insights and expertise you need to succeed in today's competitive landscape.",
    keyBenefits: [
      "Expert guidance from industry professionals",
      "Tailored solutions to address your unique challenges",
      "Strategic advice to drive growth and innovation",
    ],
    technologies: [],
    targetAudience: ["Businesses", "Startups", "Enterprises"],
    caseStudies: [
      {
        title: "Digital Transformation Strategy for Retail Business",
        link: "/case-studies/digital-transformation-strategy",
      },
      {
        title: "Technology Audit for Financial Services Firm",
        link: "/case-studies/technology-audit",
      },
    ],
    additionalData: {
      clientTestimonials: [
        "The digital transformation strategy has helped us stay ahead of the competition.",
        "The technology audit identified key areas for improvement and optimization.",
      ],
      serviceTags: [
        "Consulting Services",
        "Digital Strategy",
        "Operational Efficiency",
        "Technology Audits",
        "Digital Transformation",
        "Strategic Advice",
        "Business Growth",
        "Innovation",
      ],
      seoTags: [
        "consulting services",
        "digital strategy",
        "operational efficiency",
        "technology audits",
        "digital transformation",
        "strategic advice",
        "business growth",
        "innovation",
      ],
    },
  },
  {
    key: SERVICES_KEYS.UI_UX_DESIGN,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    image: "/assets/services-images/ui-ux.png",
    Icon: "/services/figma.svg",
    headline: "Designing Experiences That Users Love",
    summary:
      "First impressions matter. Our UI/UX design services create intuitive, visually stunning interfaces that captivate users and enhance engagement. We blend aesthetics with functionality to deliver experiences that users can't resist.",
    detailedDescription:
      "Our UI/UX Design services focus on creating intuitive and visually appealing designs that enhance user experience and drive engagement. Whether you're looking to revamp your existing interface, design a new product, or improve user retention, our team crafts designs that are both aesthetically pleasing and user-friendly. From wireframes to interactive prototypes, we ensure that your digital solutions are not only functional but also visually stunning.",
    keyBenefits: [
      "Intuitive designs for ease of use",
      "Visually appealing interfaces to drive engagement",
      "User-centric approach to enhance user experience",
    ],
    technologies: [],
    targetAudience: ["Businesses", "Startups", "Enterprises"],
    caseStudies: [
      {
        title: "E-commerce Website Redesign",
        link: "/case-studies/ecommerce-website-redesign",
      },
      {
        title: "Mobile App UI/UX Enhancement",
        link: "/case-studies/mobile-app-ui-ux",
      },
    ],
    additionalData: {
      clientTestimonials: [
        "The new design has improved our user engagement and retention.",
        "Our customers love the intuitive and visually appealing interface.",
      ],
      serviceTags: [
        "UI/UX Design",
        "User Experience",
        "User Interface",
        "Visual Design",
        "Wireframing",
        "Interactive Prototypes",
        "User-Centered Design",
        "A/B Testing",
        "Design Systems",
      ],
      seoTags: [
        "ui/ux design",
        "user experience design",
        "user interface design",
        "visual design",
        "wireframing",
        "interactive prototypes",
        "user-centered design",
        "A/B testing",
        "design systems",
      ],
    },
  },
  {
    key: SERVICES_KEYS.BLOCKCHAIN_DEVELOPMENT,
    title: "Blockchain Development",
    slug: "blockchain-development",
    image: "/assets/services-images/blockchain.png",
    Icon: "/services/blockchain.svg",
    headline: "Building Trust in a Decentralized World",
    summary:
      "Step into the future of secure, transparent transactions with our blockchain solutions. From smart contracts to decentralized apps, we harness the power of blockchain to bring unprecedented security and efficiency to your business processes.",
    detailedDescription:
      "Our Blockchain Development services leverage blockchain technology to build secure and transparent solutions that drive innovation and trust. Whether you're looking to streamline transactions, enhance data security, or create decentralized applications, we offer tailored solutions to address your unique business needs. From smart contracts to tokenization, our team ensures that your blockchain implementation is scalable, secure, and future-proof.",
    keyBenefits: [
      "Enhanced data security and transparency",
      "Streamlined transactions with smart contracts",
      "Decentralized applications for greater innovation",
    ],
    technologies: [
      "Ethereum",
      "Hyperledger",
      "Solidity",
      "Web3.js",
      "Truffle",
      "Ganache",
      "IPFS",
      "Quorum",
      "Corda",
      "Stellar",
      "Ripple",
      "Chainlink",
    ],
    targetAudience: ["Businesses", "Startups", "Enterprises"],
    caseStudies: [
      {
        title: "Supply Chain Management on Blockchain",
        link: "/case-studies/supply-chain-blockchain",
      },
      {
        title: "Tokenization Platform for Real Estate",
        link: "/case-studies/tokenization-platform",
      },
    ],
    additionalData: {
      clientTestimonials: [
        "The blockchain solution has improved our data security and transparency.",
        "Our supply chain management is more efficient and streamlined with blockchain.",
      ],
      serviceTags: [
        "Blockchain Development",
        "Smart Contracts",
        "Tokenization",
        "Decentralized Applications",
        "Data Security",
        "Transparency",
        "Blockchain Integration",
        "Blockchain Consulting",
        "Blockchain Platforms",
      ],
      seoTags: [
        "blockchain development",
        "smart contracts",
        "tokenization",
        "decentralized applications",
        "data security",
        "transparency",
        "blockchain integration",
        "blockchain consulting",
        "blockchain platforms",
      ],
    },
  },
  {
    key: SERVICES_KEYS.CLOUD_SERVICES,
    title: "Cloud Services",
    slug: "cloud-services",
    image: "/assets/services-images/cloud-services.png",
    Icon: "/services/azuredevops.svg",
    headline: "Elevate Your Business to the Cloud",
    summary:
      "Unleash the full potential of cloud technology. Our cloud services offer scalability, flexibility, and cost-efficiency, empowering your business to innovate faster, collaborate seamlessly, and stay competitive in the digital age.",
    detailedDescription:
      "Our Cloud Services leverage cloud technology to build scalable and flexible solutions that drive efficiency and innovation. Whether you're looking to migrate to the cloud, optimize your cloud infrastructure, or develop cloud-native applications, we offer tailored solutions to meet your business needs. From AWS to Azure, our team ensures that your cloud implementation is secure, cost-effective, and future-ready.",
    keyBenefits: [
      "Scalable and flexible solutions",
      "Cost-effective cloud infrastructure",
      "Secure and future-ready cloud implementations",
    ],
    technologies: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Serverless",
      "Microservices",
      "CI/CD",
      "DevOps",
    ],
    targetAudience: ["Businesses", "Startups", "Enterprises"],
    caseStudies: [
      {
        title: "Cloud Migration for Retail Business",
        link: "/case-studies/cloud-migration",
      },
      {
        title: "Serverless Application Development",
        link: "/case-studies/serverless-application",
      },
    ],
    additionalData: {
      clientTestimonials: [
        "The cloud migration has improved our scalability and flexibility.",
        "Our serverless application is cost-effective and future-ready.",
      ],
      serviceTags: [
        "Cloud Services",
        "Cloud Migration",
        "Cloud Infrastructure",
        "Cloud-Native Applications",
        "Scalability",
        "Flexibility",
        "Cost-Effectiveness",
        "Security",
        "Future-Readiness",
      ],
      seoTags: [
        "cloud services",
        "cloud migration",
        "cloud infrastructure",
        "cloud-native applications",
        "scalability",
        "flexibility",
        "cost-effectiveness",
        "security",
        "future-readiness",
      ],
    },
  },
];
