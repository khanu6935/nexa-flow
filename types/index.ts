import type { LucideIcon } from "lucide-react";

export type ServiceCategory = "Build" | "Automate & Integrate" | "Deliver & Maintain";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  description: string;
  outcome: string;
  capabilities: string[];
  icon: LucideIcon;
};

export type Project = {
  slug: string;
  name: string;
  label: "Concept Project" | "Demo Project";
  industry: string;
  problem: string;
  solution: string;
  technologies: string[];
  outcome: string;
};

export type Lead = {
  name: string;
  company: string;
  email: string;
  phone: string;
  country?: string;
  service: string;
  budget: string;
  timeline: string;
  requirements: string;
  source: "chatbot" | "contact-form" | "consultation-form";
};
