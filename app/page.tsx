import ProjectCard from '@/components/ProjectCard';
import Skills from '@/components/Skills';
import Hero from '@/components/Hero';
import {projects} from "../lib/all-project"

export default function HomePage() {

  return (
    <>
      <main className="px-4 py-8">
        <Hero/>
        <Skills/>
        <h2 className="text-4xl font-medium text-center my-10 text-gray-700">Projects</h2>
        <section className="mt-12 flex flex-wrap justify-center">
          {projects.slice(0,3).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </section>
        <div className='max-w-full flex justify-center mt-4'>
        <a href="./projects" className="text-blue-500 hover:underline text-2xl"
          target="_blank"
          rel="noopener noreferrer">
          View All Projects...
        </a>
        </div>
      </main>
    </>
  );
}
