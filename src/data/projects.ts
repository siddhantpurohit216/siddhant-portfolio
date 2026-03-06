export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Voice Task Tracker",
    description: "Linear-inspired task manager with AI voice parsing for intelligent task creation and status tracking.",
    techStack: ["React", "Node.js", "Express", "AI Parsing"],
    githubLink: "https://github.com/siddhantpurohit216/voice-task-tracker",
    featured: true
  },
  {
    id: 2,
    title: "LLM Agile Planner",
    description: "AI system converting requirement docs into structured epics, user stories, and sprint plans via multi-step workflows.",
    techStack: ["LLM", "AI Workflow", "Productivity"],
    githubLink: "https://github.com/siddhantpurohit216/llm-agile-planner",
    featured: true
  },
  {
    id: 3,
    title: "Dispatch Load Optimizer",
    description: "Spring Boot application optimizing delivery dispatching based on capacity, priority, and distance constraints.",
    techStack: ["Spring Boot", "Optimization", "Java"],
    githubLink: "https://github.com/siddhantpurohit216/dispatch-load-optimizer",
    featured: true
  },
  {
    id: 4,
    title: "Weather API Service",
    description: "Production-grade REST API for Indian pincode weather with smart PostgreSQL caching to minimize latency.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "Caching"],
    githubLink: "https://github.com/siddhantpurohit216/weather-info-api",
    featured: true
  }
];
