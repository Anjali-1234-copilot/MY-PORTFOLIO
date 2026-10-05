export interface Person {
  name: string;
  headline: string;
  location: string;
  email: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
}

export interface EducationItem {
  institution: string;
  program: string;
  period: string;
  resultLabel: "CGPA" | "Percentage";
  result: string;
  coursework?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface NavItem {
  href: string;
  label: string;
}
