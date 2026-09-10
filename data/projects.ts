import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "real-estate-management-platform",
    name: "Real Estate Management Platform",
    label: "Concept Project",
    industry: "Real Estate",
    problem: "Property operations, tenant information and maintenance requests are spread across disconnected tools.",
    solution: "A centralized platform for properties, tenants, service requests, reporting and operational visibility.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    outcome: "Designed to reduce operational fragmentation and make property information easier to manage.",
  },
  {
    slug: "healthcare-appointment-platform",
    name: "Healthcare Appointment Platform",
    label: "Concept Project",
    industry: "Healthcare",
    problem: "Manual appointment coordination creates unnecessary administrative overhead and scheduling friction.",
    solution: "A patient-facing scheduling experience connected with internal appointment and availability management.",
    technologies: ["React", "TypeScript", "REST API", "PostgreSQL"],
    outcome: "Designed to simplify appointment scheduling for patients and administrative teams.",
  },
  {
    slug: "ai-customer-support-assistant",
    name: "AI Customer Support Assistant",
    label: "Demo Project",
    industry: "Professional Services",
    problem: "Teams repeatedly answer common questions while important requests compete for attention.",
    solution: "A controlled AI support assistant that uses an approved knowledge base and routes qualified inquiries.",
    technologies: ["Next.js", "AI API", "Node.js", "Vector Search"],
    outcome: "Designed to reduce repetitive support work while keeping escalation paths clear.",
  },
  {
    slug: "business-analytics-dashboard",
    name: "Business Analytics Dashboard",
    label: "Demo Project",
    industry: "Business Operations",
    problem: "Decision-makers rely on spreadsheets and disconnected systems to understand day-to-day performance.",
    solution: "A centralized operational dashboard that organizes business metrics, workflow status and reporting.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    outcome: "Designed to make operational information easier to understand and act on.",
  },
];
