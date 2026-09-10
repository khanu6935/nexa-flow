export const industries = [
  ["Real Estate", "Property platforms, lead workflows and operational systems."],
  ["Healthcare", "Scheduling, administrative tools and digital patient experiences."],
  ["E-commerce", "Storefronts, integrations, dashboards and workflow automation."],
  ["Education", "Learning platforms, portals and administrative workflows."],
  ["Finance", "Internal tools, reporting and controlled workflow automation."],
  ["Hospitality", "Booking experiences, operations tools and customer workflows."],
  ["Professional Services", "CRM, client portals, automation and reporting."],
  ["Startups", "MVPs, product engineering and scalable technical foundations."],
] as const;

export const technologies = {
  Frontend: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "Java", "Spring Boot", "REST APIs"],
  Mobile: ["React Native"],
  Database: ["PostgreSQL", "MongoDB", "MySQL"],
  "Cloud / DevOps": ["AWS", "Docker", "CI/CD", "GitHub Actions", "GitLab CI"],
  "AI / Automation": ["LLM integrations", "AI APIs", "Workflow automation", "Process automation"],
  Testing: ["Jest", "Playwright", "Cypress", "API testing", "Automated testing"],
} as const;
