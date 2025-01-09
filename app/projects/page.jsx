import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">{`PakmanGames' Projects`}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.reverse().map((project) => (
          <div 
            className="z-10"
            key={project.id}>
              <ProjectCard
                title={project.title}
                image={project.image}
                description={project.description}
                learnMore={project.learnMore}
              />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;