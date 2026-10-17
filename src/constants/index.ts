import { Github, Linkedin, Mail } from "lucide-react";

export const CONTACT_INFO = {
  email: "jairosaborio31@gmail.com",
  phone: "+34 722 148 938",
  phoneClean: "+34722148938", // For tel: links
  location: "Málaga, Spain",
};

export const CV_URL = "/Jairo_Curriculum.pdf?v=3";

export const PROFILE_IMAGE = "/jairo.webp";

export const SECTIONS = [
  "now",
  "experience",
  "skills",
  "projects",
  "contact",
] as const;

export const SOCIAL_LINKS = [
  {
    id: "github",
    icon: Github,
    href: "https://github.com/JairoAlexandro",
    label: "GitHub",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/jairo-alexandro",
    label: "LinkedIn",
  },
  {
    id: "email",
    icon: Mail,
    href: `mailto:${CONTACT_INFO.email}`,
    label: "Email",
  },
];
