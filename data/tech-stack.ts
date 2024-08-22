import { SVGIconProps } from "@/types/services";
import React from "react";

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

const TOOLS: Record<string, TechStackTool> = {
  // Frontend
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
