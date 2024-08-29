import { TOOLS } from "@/data/tools";

type TechStackTool = {
  title: string;
  description: string;
  link?: string;
  image: string;
};

type TechStackItem = {
  category: string;
  title: string;
  description: string;
  tools: TechStackTool[];
};

export const TECH_STACK_LIST: TechStackItem[] = [
  {
    category: "Frontend",
    title: "Frontend",
    description: "Frontend description",
    tools: [
      TOOLS.HTML,
      TOOLS.CSS,
      TOOLS.JavaScript,
      TOOLS.TypeScript,
      TOOLS.React,
      TOOLS.NextJS,
      TOOLS.VUE,
      TOOLS.Angular,
      TOOLS.TailwindCSS,
      TOOLS.BOOTSTRAP,
      TOOLS.MATERIAL_UI,
    ],
  },
  {
    category: "Backend",
    title: "Backend",
    description: "Backend description",
    tools: [
      TOOLS.NodeJS,
      TOOLS.ExpressJS,
      TOOLS.NestJS,
      TOOLS.GraphQL,
      TOOLS.MongoDB,
      TOOLS.PostgreSQL,
      TOOLS.MySQL,
      TOOLS.Laravel,
      TOOLS.NextJS,
      TOOLS.VUE,
      TOOLS.Angular,
    ],
  },
  {
    category: "Database",
    title: "Database",
    description: "Database description",
    tools: [TOOLS.MongoDB, TOOLS.PostgreSQL, TOOLS.MySQL],
  },
  {
    category: "UI/UX",
    title: "UI/UX",
    description: "UI/UX description",
    tools: [
      TOOLS.Figma,
      TOOLS.AdobeXD,
      TOOLS.Sketch,
      TOOLS.Invision,
      TOOLS.Zeplin,
      TOOLS.Miro,
    ],
  },
  {
    category: "DevOps",
    title: "DevOps",
    description: "DevOps description",
    tools: [
      TOOLS.Docker,
      TOOLS.Kubernetes,
      TOOLS.AWS,
      TOOLS.GCP,
      TOOLS.Azure,
      TOOLS.GIT,
      TOOLS.Github,
      TOOLS.Gitlab,
      TOOLS.Bitbucket,
    ],
  },
];
