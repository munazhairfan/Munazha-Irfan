import {projects} from "../lib/all-project"
import React from 'react'
import ProjectCard from '@/components/ProjectCard';

const grouped = {
  "E-Commerce": projects.filter(p => p.category === "E-Commerce"),
  "Tools & Utilities": projects.filter(p => p.category === "Tools & Utilities"),
  "AI & Chatbots": projects.filter(p => p.category === "AI & Chatbots"),
  "Creative & Design": projects.filter(p => p.category === "Creative & Design"),
  "Health & Lifestyle": projects.filter(p => p.category === "Health & Lifestyle"),
};
const Projects = () => {
  return (
    <div>
      {Object.entries(grouped).map(([category, projects]) => (
        <div key={category} className="md:m-10">
          <h3 className="text-4xl text-center my-10 text-gray-700">{category}</h3>
              <section className="mt-12 flex flex-wrap justify-center">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </section>
        </div>
      ))}
    </div>
  )
}

export default Projects
