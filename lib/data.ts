import type {
  Certification,
  EducationItem,
  NavItem,
  Person,
  Project,
  SkillGroup,
  SocialLinks,
} from "@/lib/types";

export const person: Person = {
  name: "Anjali Singh",
  headline: "Computer Science Engineering Student",
  location: "Bengaluru, Karnataka",
  email: "anjalisinghmath@gmail.com",
};

export const socialLinks: SocialLinks = {
  linkedin: "https://www.linkedin.com/in/anjali-singh-14840834a",
  github: "https://github.com/Anjali-1234-copilot",
};

export const navItems: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const heroData = {
  eyebrow: "COMPUTER SCIENCE ENGINEER",
  firstName: "ANJALI",
  lastName: "SINGH",
  headline: "Engineering intelligent experiences where AI meets the real world.",
  tagline: "AI SYSTEMS  /  FULL-STACK  /  COMPUTER VISION",
  description:
    "Computer Science Engineer building intelligent systems, full-stack applications, and real-time computer vision solutions — turning complex ideas into software that feels simple, useful, and human.",
} as const;

export const aboutData = {
  eyebrow: "01 / ABOUT",
  heading: ["Building with curiosity.", "Solving with code."],
  paragraphs: [
    "Anjali Singh is a Computer Science Engineering student at Sapthagiri College of Engineering with a strong foundation in programming, full-stack development, and AI-powered applications.",
    "Her work focuses on building intelligent systems, modern software platforms, and real-time computer vision applications.",
  ],
  highlights: [
    { label: "Focus", value: "CSE" },
    { label: "Domain", value: "AI" },
    { label: "Stack", value: "FULL STACK" },
    { label: "Specialty", value: "COMPUTER VISION" },
  ],
  stats: {
    cgpa: "9.0",
    period: "2023 — 2027",
    institution: "Sapthagiri College of Engineering",
    program: "BE in Computer Science",
  },
} as const;

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["C", "Python", "Java", "JavaScript"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "React.js"],
  },
  {
    category: "Backend",
    items: ["Flask", "FastAPI", "REST APIs", "Node.js"],
  },
  {
    category: "Databases / Backend Services",
    items: ["MySQL", "PostgreSQL", "Supabase"],
  },
  {
    category: "Cloud / Platforms",
    items: ["Google Cloud", "Google Colab"],
  },
  {
    category: "Developer Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Docker",
      "Claude",
      "Cursor",
      "Antigravity",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "SMARTATTEND",
    subtitle: "AI Attendance Manager",
    description:
      "An AI-powered attendance management system using facial recognition for automated attendance tracking and real-time monitoring.",
    technologies: [
      "DeepFace",
      "FaceNet512",
      "MTCNN",
      "OpenCV",
      "Flask",
      "Next.js",
      "MongoDB",
      "Socket.io",
    ],
    features: [
      "Facial recognition",
      "Role-based authentication",
      "Real-time attendance updates",
      "Attendance analytics",
      "Multi-camera support",
    ],
    githubUrl:
      "https://github.com/Anjali-1234-copilot/SMARTATTEND-AI-ATTENDANCE-MANAGER",
  },
  {
    title: "MediCare",
    subtitle: "Hospital Management System",
    description:
      "A hospital management system designed to organize patient information, prescriptions, OPD workflows, and employee administration.",
    technologies: ["Spring MVC", "Hibernate", "MySQL", "Maven", "Tomcat"],
    features: [
      "Role-based authentication with BCrypt",
      "Patient data management",
      "Digital prescription PDF generation",
      "OPD queue management",
      "Employee administration",
      "Automated record processing",
    ],
    githubUrl: "https://github.com/Anjali-1234-copilot/MediCare-Hospital-Management-System",
  },
  {
    title: "SignSpeak AI",
    subtitle: "Real-Time Sign Language Recognition",
    description:
      "A real-time gesture recognition system designed to recognize sign language gestures through computer vision and provide low-latency feedback.",
    technologies: [
      "OpenCV",
      "MediaPipe",
      "TensorFlow Lite",
      "Flask",
      "JavaScript",
    ],
    features: [
      "Recognition of 15+ gestures",
      "Confidence scoring",
      "Statistics",
      "Low-latency processing",
      "Real-time gesture updates",
    ],
    githubUrl: "https://github.com/Anjali-1234-copilot/SignSpeak-AI",
  },
  {
    title: "Taxonomy",
    subtitle: "Open-Source Full-Stack Application",
    description:
      "An open-source full-stack application serving as a modern launchpad. Built using Next.js App Router, Server Components, NextAuth, and Prisma for a robust foundation.",
    technologies: [
      "Next.js 13",
      "App Router",
      "React",
      "Prisma",
      "NextAuth",
      "Tailwind CSS",
    ],
    features: [
      "Server Components architecture",
      "Robust authentication system",
      "Database integration with Prisma",
      "Responsive modern UI",
      "Full-stack scalable foundation",
    ],
    githubUrl: "https://github.com/Anjali-1234-copilot/Taxonomy",
  },
  {
    title: "SMARTBOT",
    subtitle: "AI-Powered Chatbot Application",
    description:
      "A modern AI chatbot built with Next.js and the AI SDK for smart conversations, interactive workflows, and productivity. Designed for real-world AI experiences.",
    technologies: [
      "Next.js",
      "AI SDK",
      "React",
      "Tailwind CSS",
      "Authentication",
    ],
    features: [
      "Smart conversations",
      "Chat history management",
      "Document support",
      "Interactive workflows",
      "Secure authentication",
    ],
    githubUrl: "https://github.com/Anjali-1234-copilot/SMARTBOT",
  },
];

export const education: EducationItem[] = [
  {
    institution: "Sapthagiri College of Engineering",
    program: "BE in Computer Science",
    period: "October 2023 – 2027",
    resultLabel: "CGPA",
    result: "9.0",
    coursework: [
      "Computer Networks",
      "Data Structures",
      "Computational Theory",
      "Software Development",
      "Operating Systems",
    ],
  },
  {
    institution: "Ram lagan Sr. Secondary School, MAU",
    program: "Intermediate Education",
    period: "May 2022",
    resultLabel: "Percentage",
    result: "69.83%",
  },
  {
    institution: "Sunbeam Academy, Varanasi",
    program: "Secondary Education",
    period: "May 2020",
    resultLabel: "Percentage",
    result: "88.83%",
  },
];

export const certifications: Certification[] = [
  { title: "HTML5", issuer: "Infosys Springboard" },
  { title: "CSS3", issuer: "Infosys Springboard" },
  { title: "JavaScript", issuer: "Infosys Springboard" },
  { title: "Networking and Web Technology", issuer: "Infosys Springboard" },
];

export const interests: string[] = [
  "Badminton",
  "Kho-Kho",
  "Drawing / Sketching",
  "Traveling / Discovering new things",
];
