// Enum for project types
import { TechStackTool } from "@/data/tools";

export enum ProjectType {
  WEB = "Web",
  MOBILE = "Mobile",
  HYBRID = "Hybrid",
}

// Enum for project status
export enum ProjectStatus {
  COMPLETED = "Completed",
  IN_PROGRESS = "In Progress",
  MAINTENANCE = "Maintenance",
}

// Interface for technology stack
export interface TechStack {
  frontend: TechStackTool[];
  backend: TechStackTool[];
  database: TechStackTool[];
  other?: TechStackTool[];
}

// Interface for project challenges and solutions
export interface ChallengesSolutions {
  challenge: string;
  solution: string;
}

// Interface for project metrics
export interface ProjectMetrics {
  userBase?: number;
  performance?: string;
  uptime?: string;
  customMetric?: { [key: string]: string | number };
}

// Main Project interface
export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  status: ProjectStatus;
  client: string;
  duration: {
    start: Date;
    end: Date | null; // null if ongoing
  };

  // Summary fields
  summary: string;
  thumbnailUrl: string;
  tags: string[];

  // Detailed case study fields
  description: string;
  problem: string;
  solution: string;
  techStack: TechStack;
  features: string[];
  challengesAndSolutions: ChallengesSolutions[];
  results: string;
  metrics?: ProjectMetrics;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };

  // Media
  screenshots: string[];
  videoUrl?: string;

  // Additional fields
  teamSize: number;
  role: string;
  responsibilities: string[];
  lessons: string[];

  // Links
  liveSiteUrl?: string;
  githubUrl?: string;

  // Dates
  createdAt: Date;
  updatedAt: Date;
}

// Type for the projects list
export type ProjectsList = Project[];
