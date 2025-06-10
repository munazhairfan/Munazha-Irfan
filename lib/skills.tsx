import {
  SiNextdotjs,
  SiTypescript,
  SiSanity,
  SiStreamlit,
  SiCanva,
} from "react-icons/si";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { ReactNode } from "react";

type Skill = {
  name: string;
  icon: ReactNode;
  category: string;
};

export const skills: Skill[] = [
  // Frontend
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white size-10" />,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 size-10" />,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript className="text-yellow-400 size-10" />,
    category: "Frontend",
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-600 size-10" />,
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500 size-10" />,
    category: "Frontend",
  },

  // Backend
  {
    name: "Python",
    icon: <FaPython className="text-yellow-500 size-10" />,
    category: "Backend",
  },
  {
    name: "Sanity",
    icon: <SiSanity className="text-red-500 size-10" />,
    category: "Backend",
  },

  // Tools
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-800 dark:text-white size-10" />,
    category: "Tools",
  },
  {
    name: "Vercel",
    icon: <IoLogoVercel className="text-black dark:text-white size-10" />,
    category: "Tools",
  },
  {
    name: "Streamlit",
    icon: <SiStreamlit className="text-red-500 size-10" />,
    category: "Tools",
  },
  {
    name: "Figma",
    icon: <FaFigma className="text-pink-400 size-10" />,
    category: "Tools",
  },
  {
    name: "Canva",
    icon: <SiCanva className="text-blue-400 size-10" />,
    category: "Tools",
  },
];
