interface Industry {
  title: string;
  description: string;
  summary: string;
  headline: string;
  services: string[];
  icon: string;
  image: string;
  tags: string[];
  id?: string | number;
  slug?: string;
  featuredProjects?: Project[];
}

// Optional related interface
interface Project {
  name: string;
  description: string;
  url?: string;
}

export const industriesList: Industry[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    slug: "healthcare",
    summary: "Revolutionizing patient care through technology",
    headline:
      "Empowering healthcare providers with cutting-edge digital solutions",
    description:
      "In the rapidly evolving healthcare sector, we deliver innovative web and mobile applications that streamline patient care, improve medical record management, and enhance communication between healthcare providers and patients. Our solutions range from telemedicine platforms and electronic health records (EHR) systems to patient engagement apps and medical imaging software. We prioritize data security, regulatory compliance, and user-friendly interfaces to create solutions that truly make a difference in healthcare delivery.",
    icon: "medical-cross",
    image: "/industries/healthcare.jpg",
    tags: [
      "Telemedicine",
      "EHR",
      "Patient Engagement",
      "Medical Imaging",
      "HIPAA Compliance",
    ],
    services: [
      "Telemedicine platforms",
      "Electronic Health Records (EHR) systems",
      "Patient engagement apps",
      "Medical imaging software",
      "Healthcare data analytics",
      "Appointment scheduling systems",
      "Medical billing and coding solutions",
      "Remote patient monitoring applications",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    slug: "ecommerce",
    summary: "Building the future of online retail",
    headline: "Crafting seamless shopping experiences for the digital age",
    description:
      "Our e-commerce solutions cater to businesses of all sizes, from startups to enterprise-level operations. We develop robust, scalable platforms that offer intuitive user experiences, secure payment gateways, and powerful backend management systems. Our expertise spans custom e-commerce websites, mobile shopping apps, inventory management tools, and integration with popular marketplaces. We focus on creating solutions that drive conversions, enhance customer loyalty, and provide valuable insights through advanced analytics.",
    icon: "shopping-cart",
    image: "/industries/ecommerce.jpg",
    tags: [
      "Online Retail",
      "Mobile Commerce",
      "Payment Gateways",
      "Inventory Management",
      "Analytics",
    ],
    services: [
      "Custom e-commerce website development",
      "Mobile shopping app creation",
      "Inventory management systems",
      "Secure payment gateway integration",
      "Product recommendation engines",
      "Multi-channel selling solutions",
      "Order fulfillment and tracking systems",
      "Customer loyalty programs",
    ],
  },
  {
    id: "education",
    title: "Education",
    slug: "education",
    summary: "Transforming learning through digital innovation",
    headline:
      "Creating engaging educational platforms for learners of all ages",
    description:
      "We develop comprehensive digital solutions for the education sector, ranging from e-learning platforms and learning management systems (LMS) to interactive educational apps and virtual classroom tools. Our focus is on creating engaging, accessible, and personalized learning experiences that cater to diverse educational needs. We incorporate features such as progress tracking, adaptive learning paths, collaborative tools, and gamification elements to enhance student engagement and improve learning outcomes.",
    icon: "graduation-cap",
    image: "/industries/education.jpg",
    tags: [
      "E-learning",
      "LMS",
      "EdTech",
      "Virtual Classrooms",
      "Adaptive Learning",
    ],
    services: [
      "Learning Management Systems (LMS)",
      "Virtual classroom platforms",
      "Interactive educational apps",
      "Online course creation tools",
      "Student progress tracking systems",
      "Adaptive learning software",
      "Educational content management systems",
      "School management solutions",
    ],
  },
  {
    id: "finance",
    title: "Finance",
    slug: "finance",
    summary: "Securing the future of digital finance",
    headline: "Developing robust fintech solutions for a connected world",
    description:
      "Our finance-focused development services cover a wide range of applications, from personal banking and investment platforms to complex enterprise-level financial management systems. We prioritize security, reliability, and regulatory compliance while building intuitive interfaces for both consumers and financial professionals. Our solutions include mobile banking apps, payment processing systems, cryptocurrency platforms, and AI-driven financial advisory tools. We stay at the forefront of fintech trends to deliver cutting-edge solutions that meet the evolving needs of the financial sector.",
    icon: "chart-line",
    image: "/industries/finance.webp",
    tags: [
      "Fintech",
      "Mobile Banking",
      "Blockchain",
      "Payment Processing",
      "Financial Analytics",
    ],
    services: [
      "Mobile banking applications",
      "Online investment platforms",
      "Cryptocurrency exchange development",
      "Payment processing systems",
      "Financial management software",
      "AI-driven financial advisory tools",
      "Fraud detection systems",
      "Regulatory compliance solutions",
    ],
  },
  {
    id: "travel",
    title: "Travel & Hospitality",
    slug: "travel-hospitality",
    summary: "Elevating travel experiences through technology",
    headline:
      "Crafting digital solutions for seamless journeys and memorable stays",
    description:
      "We create innovative web and mobile applications for the travel and hospitality industry, enhancing every aspect of the traveler's journey. Our solutions range from online booking platforms and travel planning apps to hotel management systems and virtual concierge services. We focus on delivering personalized experiences, streamlining operations, and increasing customer satisfaction through features like AI-powered recommendations, real-time updates, and seamless integration with travel services. Our goal is to help businesses in this sector adapt to changing consumer behaviors and technological advancements.",
    icon: "plane",
    image: "/industries/travel-hospitality.jpg",
    tags: [
      "Online Booking",
      "Travel Planning",
      "Hospitality Management",
      "Virtual Concierge",
      "Travel Tech",
    ],
    services: [
      "Online travel booking platforms",
      "Hotel management systems",
      "Virtual concierge applications",
      "Travel planning and itinerary apps",
      "Loyalty program management",
      "Contactless check-in solutions",
      "AI-powered travel recommendation systems",
      "Travel analytics and reporting tools",
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate",
    slug: "real-estate",
    summary: "Digitizing property markets for the modern era",
    headline:
      "Revolutionizing property search, sales, and management with innovative tech",
    description:
      "Our real estate solutions cater to various stakeholders in the property market, including buyers, sellers, agents, and property managers. We develop feature-rich platforms that simplify property listings, virtual tours, and transaction management. Our applications incorporate advanced search algorithms, AR/VR technologies for immersive property viewings, and AI-driven market analysis tools. We also create robust property management systems that streamline operations for real estate professionals, enhancing efficiency and improving client relationships.",
    icon: "home",
    image: "/industries/real-estate.webp",
    tags: [
      "Property Listings",
      "Virtual Tours",
      "Real Estate CRM",
      "Property Management",
      "Market Analysis",
    ],
    services: [
      "Property listing and search platforms",
      "Virtual and augmented reality property tours",
      "Real estate CRM systems",
      "Property management software",
      "AI-driven market analysis tools",
      "Real estate transaction management systems",
      "Mortgage calculation and comparison tools",
      "Real estate investment analysis platforms",
    ],
  },
  {
    id: "sales-marketing",
    title: "Sales & Marketing",
    slug: "sales-marketing",
    summary: "Amplifying business growth through digital strategies",
    headline: "Empowering sales teams and marketers with data-driven tools",
    description:
      "We develop comprehensive digital solutions to enhance sales processes and marketing efforts. Our offerings include CRM systems, marketing automation platforms, analytics dashboards, and lead generation tools. We focus on creating intuitive interfaces that provide actionable insights, automate repetitive tasks, and facilitate better customer engagement. Our solutions help businesses streamline their sales funnels, personalize marketing campaigns, and measure ROI effectively, ultimately driving revenue growth and improving customer relationships.",
    icon: "bullhorn",
    image: "/industries/sales-marketing.png",
    tags: [
      "CRM",
      "Marketing Automation",
      "Analytics",
      "Lead Generation",
      "Campaign Management",
    ],
    services: [
      "Customer Relationship Management (CRM) systems",
      "Marketing automation platforms",
      "Lead generation and management tools",
      "Sales analytics and reporting dashboards",
      "Email marketing campaign managers",
      "Social media management tools",
      "Customer segmentation and targeting solutions",
      "Conversion rate optimization tools",
    ],
  },
  {
    id: "social-platforms",
    title: "Social Platforms",
    slug: "social-platforms",
    summary: "Building connected communities in the digital space",
    headline: "Creating engaging social experiences for the modern web",
    description:
      "We specialize in developing robust and scalable social platforms that foster online communities and facilitate user interactions. Our solutions range from niche social networks and community forums to large-scale social media applications. We incorporate features such as real-time messaging, content sharing, user-generated content moderation, and personalized feeds. Our focus is on creating intuitive, engaging interfaces that encourage user participation while ensuring data privacy and platform security. We also develop tools for social media management and analytics to help businesses leverage these platforms effectively.",
    icon: "users",
    image: "/industries/social-platforms.webp",
    tags: [
      "Social Networks",
      "Community Building",
      "Content Sharing",
      "User Engagement",
      "Social Analytics",
    ],
    services: [
      "Custom social network development",
      "Community forum platforms",
      "Real-time messaging systems",
      "Content sharing and management tools",
      "User-generated content moderation systems",
      "Social media analytics dashboards",
      "Influencer management platforms",
      "Social commerce solutions",
    ],
  },
  {
    id: "consultation",
    title: "Consultation Services",
    slug: "consultation-services",
    summary: "Facilitating expertise sharing in the digital realm",
    headline: "Connecting experts and clients through innovative platforms",
    description:
      "Our consultation service solutions cater to a wide range of industries, enabling professionals to offer their expertise online. We develop platforms that facilitate scheduling, video conferencing, document sharing, and secure payment processing for consultations. Our applications focus on creating seamless experiences for both consultants and clients, with features like automated appointment reminders, integrated note-taking tools, and feedback systems. We also incorporate AI-driven matching algorithms to connect clients with the most suitable experts based on their needs and preferences.",
    icon: "comments",
    image: "/industries/consultation-services.jpg",
    tags: [
      "Expert Networks",
      "Online Consultations",
      "Appointment Scheduling",
      "Video Conferencing",
      "Knowledge Sharing",
    ],
    services: [
      "Online consultation platforms",
      "Expert matching systems",
      "Video conferencing integration",
      "Appointment scheduling tools",
      "Secure document sharing solutions",
      "Online payment processing for consultations",
      "Client management systems for consultants",
      "Feedback and rating systems",
    ],
  },
  {
    id: "entertainment",
    title: "Entertainment",
    slug: "entertainment",
    summary: "Redefining digital entertainment for global audiences",
    headline: "Crafting immersive experiences for the entertainment industry",
    description:
      "We develop cutting-edge solutions for various segments of the entertainment industry, including streaming platforms, gaming applications, interactive media, and virtual events. Our expertise spans creating robust video-on-demand services, developing engaging mobile games, and building interactive storytelling platforms. We focus on delivering high-performance applications that can handle large user bases and provide personalized experiences. Our solutions incorporate features like content recommendation engines, social sharing capabilities, and advanced analytics to help entertainment businesses understand and engage their audiences better.",
    icon: "film",
    image: "/industries/entertainment.png",
    tags: [
      "Streaming Services",
      "Gaming",
      "Interactive Media",
      "Virtual Events",
      "Content Management",
    ],
    services: [
      "Video streaming platform development",
      "Mobile game creation",
      "Interactive storytelling applications",
      "Virtual event platforms",
      "Content management systems for media",
      "Recommendation engines for entertainment",
      "Social viewing and sharing features",
      "Analytics for audience engagement",
    ],
  },
  {
    id: "food-beverage",
    title: "Food & Beverage",
    slug: "food-beverage",
    summary: "Serving up digital solutions for the culinary world",
    headline: "Enhancing dining experiences and streamlining F&B operations",
    description:
      "Our digital solutions for the food and beverage industry cover a wide spectrum, from restaurant management systems and online ordering platforms to food delivery apps and recipe sharing communities. We develop user-friendly applications that improve operational efficiency for businesses while enhancing the dining experience for customers. Our solutions include features like real-time inventory management, table reservation systems, contactless ordering and payment, and customer loyalty programs. We also create platforms that connect food enthusiasts, enabling recipe sharing, meal planning, and social interactions centered around culinary experiences.",
    icon: "utensils",
    image: "/industries/food-beverage.webp",
    tags: [
      "Restaurant Management",
      "Online Ordering",
      "Food Delivery",
      "Recipe Platforms",
      "Inventory Management",
    ],
    services: [
      "Restaurant management systems",
      "Online food ordering platforms",
      "Food delivery app development",
      "Recipe sharing and meal planning apps",
      "Inventory management for restaurants",
      "Table reservation systems",
      "Contactless ordering and payment solutions",
      "Customer loyalty programs for F&B businesses",
    ],
  },
];
