'use client';

import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

type Project = {
  title: string;
  image: string;
  description: string;
  link: string;
  github: string;
};

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
    const { ref, inView } = useInView({
    triggerOnce: true,   
    threshold: 0.1,      
  });
  return (
    <motion.div 
        ref={ref}
        className="bg-white shadow-lg rounded-lg p-6 m-4 w-full sm:w-80 hover:scale-110 transition "
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}>
      <img
        src={project.image}
        alt={project.title}
        className="w-full sm:h-48 h-30 object-cover rounded-md"
      />
      <h3 className="sm:text-2xl text-xl font-semibold sm:mt-4">{project.title}</h3>
      <p className="mt-2 text-gray-600 sm:text-base text-[10px]">{project.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <a href={project.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 hover:underline">
          View Project
        </a>
        <a href={project.github} className="text-gray-500 hover:underline">
          GitHub
        </a>
      </div>
    </motion.div>
  );
}
