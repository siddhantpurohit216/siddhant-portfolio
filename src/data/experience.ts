export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string;
  fullDetails: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Argusoft",
    role: "Full stack java software developer",
    duration: "June 2023 – Present",
    description: "Built configurable AI Monitoring Dashboard and pluggable AI provider framework using LangChain and Spring Boot.",
    fullDetails: "- Built configurable AI Monitoring Dashboard with LangChain-based pipelines to track model performance and usage limits, improving monitoring accuracy by 60% and reducing debugging time by 45%.\n- Developed a pluggable AI provider framework using Factory and Strategy design patterns with Spring AOP-based logging, cutting provider integration effort by 50% and improving observability by 70%.\n- Engineered scalable REST APIs and an admin dashboard for asset and incident management, improving response time by 40%, supporting around 10 assets with 200ms latency, boosting operational visibility by 95%, and reducing average resolution time from 5 to 2 days.\n- Implemented event-driven synchronization using Apache Kafka consumers to ingest live user and client data from distributed services, enabling real-time updates and improving cross-system consistency by 65%.\n- Designed enterprise-grade authentication and RBAC with stateless JWT authorization and centralized security, reducing unauthorized access risks by 90% and strengthening compliance.\n- Built a scalable Dynamic Form Builder Platform with versioning, customizable fields, circular dependency detection, and multi-user collaboration, supporting around 5K daily requests, improving form creation efficiency by 50%, cutting query latency by 40%, and reducing configuration errors.",
    technologies: ["Java", "Spring Boot", "LangChain", "Apache Kafka", "PostgreSQL", "React", "AWS", "JWT", "Design Patterns"]
  },
  {
    id: 2,
    company: "Argusoft",
    role: "Software Developer Intern",
    duration: "Jan 2023 – May 2023",
    description: "Developed and optimized enterprise-level applications using Java, Spring Boot, and Angular.",
    fullDetails: "- Contributed to the development of a robust enterprise application, focusing on backend services with Java and Spring Boot.\n- Designed and implemented responsive user interfaces using Angular, ensuring a seamless user experience across different devices.\n- Optimized database queries in PostgreSQL, leading to a significant improvement in application response times.\n- Collaborated with senior developers to implement security features and role-based access control (RBAC).\n- Participated in code reviews and agile ceremonies, contributing to the overall quality and efficiency of the development process.",
    technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL"]
  },
  {
    id: 3,
    company: "Core Spiritual",
    role: "Software Developer Intern",
    duration: "Dec 2022 – Feb 2023",
    description: "Proposed and integrated the GPT Turbo API to automate web page summarization, reducing manual effort by 70%.",
    fullDetails: "- Proposed and integrated the GPT Turbo API to automate web page summarization, reducing manual effort by 70% and collaborated with the team to improve summary quality through prompt engineering.\n- Built a user-friendly UI that enabled non-technical users to easily generate summaries, improving accessibility and usability.",
    technologies: ["React", "Node.js", "OpenAI API", "JavaScript", "Prompt Engineering"]
  }
];
