export interface Certification {
  id: number;
  title: string;
  issuer: string;
  year: string;
  description?: string;
  link: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    description: "Foundational knowledge of AWS Cloud platform and services.",
    link: "https://aws.amazon.com"
  },
  {
    id: 2,
    title: "Java Programming Certification",
    issuer: "Oracle",
    year: "2023",
    link: "https://oracle.com"
  },
  {
    id: 3,
    title: "Google Data Analytics Certificate",
    issuer: "Google",
    year: "2023",
    description: "Professional certificate in data cleaning, analysis, and visualization.",
    link: "https://coursera.org"
  }
];
