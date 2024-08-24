export type TechStackTool = {
  title: string;
  description: string;
  link?: string;
  image: string;
};

enum ToolsItem {
  // Languages
  HTML = "HTML",
  CSS = "CSS",
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
  // Frontend
  React = "React",
  NextJS = "NextJS",
  Redux = "Redux",
  TailwindCSS = "TailwindCSS",
  BOOTSTRAP = "BOOTSTRAP",
  MATERIAL_UI = "MATERIAL_UI",
  // Backend
  NodeJS = "NodeJS",
  ExpressJS = "ExpressJS",
  NestJS = "NestJS",
  GraphQL = "GraphQL",
  // Database
  MongoDB = "MongoDB",
  PostgreSQL = "PostgreSQL",
  MySQL = "MySQL",
  // DevOps
  Docker = "Docker",
  Kubernetes = "Kubernetes",
  AWS = "AWS",
  GCP = "GCP",
  Azure = "Azure",
  // Version Control
  GIT = "GIT",
  Github = "Github",
  Gitlab = "Gitlab",
  Bitbucket = "Bitbucket",
  // UI/UX
  Figma = "Figma",
  AdobeXD = "AdobeXD",
  Sketch = "Sketch",
  Invision = "Invision",
  Zeplin = "Zeplin",
  Miro = "Miro",

  // Others
  Stripe = "Stripe",
  Twilio = "Twilio",
  SendGrid = "SendGrid",
  Firebase = "Firebase",
  Algolia = "Algolia",
  Sentry = "Sentry",
  GoogleMaps = "GoogleMaps",
  GoogleAnalytics = "GoogleAnalytics",
}

export const TOOLS: Record<ToolsItem, TechStackTool> = {
  // Languages
  HTML: {
    title: "HTML",
    description: "HTML description",
    image: "/images/tools/html.png",
  },
  CSS: {
    title: "CSS",
    description: "CSS description",
    image: "/images/tools/css.svg",
  },
  JavaScript: {
    title: "JavaScript",
    description: "JavaScript description",
    image: "/images/tools/javascript.svg",
  },
  TypeScript: {
    title: "TypeScript",
    description: "TypeScript description",
    image: "/images/tools/typescript.png",
  },
  // Frontend
  React: {
    title: "React",
    description: "React description",
    image: "/images/tools/react.svg",
  },
  NextJS: {
    title: "Next.js",
    description: "Next.js description",
    image: "/images/tools/next-js.svg",
  },
  Redux: {
    title: "Redux",
    description: "Redux description",
    image: "/images/tools/redux.svg",
  },
  // UI Styling
  TailwindCSS: {
    title: "Tailwind CSS",
    description: "Tailwind CSS description",
    image: "/images/tools/tailwindcss.png",
  },
  BOOTSTRAP: {
    title: "Bootstrap",
    description: "Bootstrap description",
    image: "/images/tools/bootstrap.svg",
  },
  MATERIAL_UI: {
    title: "Material-UI",
    description: "Material-UI description",
    image: "/images/tools/material-ui.svg",
  },

  // Backend
  NodeJS: {
    title: "Node.js",
    description: "Node.js description",
    image: "/images/tools/node-js.png",
  },
  ExpressJS: {
    title: "Express",
    description: "Express description",
    image: "/images/tools/express-js.png",
  },
  NestJS: {
    title: "Nest.js",
    description: "Nest.js description",
    image: "/images/tools/NestJS.svg",
  },
  GraphQL: {
    title: "GraphQL",
    description: "GraphQL description",
    image: "/images/tools/graphql.png",
  },

  // Database
  MongoDB: {
    title: "MongoDB",
    description: "MongoDB description",
    image: "/images/tools/mongodb.svg",
  },
  PostgreSQL: {
    title: "PostgreSQL",
    description: "PostgreSQL description",
    image: "/images/tools/postgresql.svg",
  },
  MySQL: {
    title: "MySQL",
    description: "MySQL description",
    image: "/images/tools/mysql.svg",
  },

  // DevOps
  Docker: {
    title: "Docker",
    description: "Docker description",
    image: "/images/tools/docker.svg",
  },
  Kubernetes: {
    title: "Kubernetes",
    description: "Kubernetes description",
    image: "/images/tools/kubernetes.svg",
  },
  AWS: {
    title: "AWS",
    description: "AWS description",
    image: "/images/tools/aws.png",
  },
  GCP: {
    title: "Google Cloud Platform",
    description: "GCP description",
    image: "/images/tools/Google-cloud-platform.svg",
  },
  Azure: {
    title: "Azure",
    description: "Azure description",
    image: "/images/tools/azure-devops.svg",
  },
  GIT: {
    title: "Git",
    description: "Git description",
    image: "/images/tools/Git.png",
  },

  Github: {
    title: "GitHub",
    description: "GitHub description",
    image: "/images/tools/github.svg",
  },
  Gitlab: {
    title: "GitLab",
    description: "GitLab description",
    image: "/images/tools/gitlab.svg",
  },
  Bitbucket: {
    title: "Bitbucket",
    description: "Bitbucket description",
    image: "/images/tools/bitbucket-icon.svg",
  },

  // UI/UX
  Figma: {
    title: "Figma",
    description: "Figma description",
    image: "/images/tools/figma.svg",
  },
  AdobeXD: {
    title: "Adobe XD",
    description: "Adobe XD description",
    image: "/images/tools/adobexd.png",
  },
  Sketch: {
    title: "Sketch",
    description: "Sketch description",
    image: "/images/tools/sketch.png",
  },
  Invision: {
    title: "Invision",
    description: "Invision description",
    image: "/images/tools/invision.svg",
  },
  Zeplin: {
    title: "Zeplin",
    description: "Zeplin description",
    image: "/images/tools/zeplin.svg",
  },
  Miro: {
    title: "Miro",
    description: "Miro description",
    image: "/images/tools/miro.png",
  },

  // Others
  Stripe: {
    title: "Stripe",
    description: "Stripe description",
    image: "/images/tools/stripe.png",
  },
  Twilio: {
    title: "Twilio",
    description: "Twilio description",
    image: "/images/tools/twilio.png",
  },
  SendGrid: {
    title: "SendGrid",
    description: "SendGrid description",
    image: "/images/tools/sendgrid.png",
  },
  Firebase: {
    title: "Firebase",
    description: "Firebase description",
    image: "/images/tools/firebase.png",
  },
  Algolia: {
    title: "Algolia",
    description: "Algolia description",
    image: "/images/tools/algolia.png",
  },
  Sentry: {
    title: "Sentry",
    description: "Sentry description",
    image: "/images/tools/sentry.png",
  },
  GoogleMaps: {
    title: "Google Maps",
    description: "Google Maps description",
    image: "/images/tools/google-maps.png",
  },
  GoogleAnalytics: {
    title: "Google Analytics",
    description: "Google Analytics description",
    image: "/images/tools/google-analytics.png",
  },
};
