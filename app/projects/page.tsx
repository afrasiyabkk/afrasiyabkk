import { MainLayout } from '@/components/layout/MainLayout';
import { ProjectCard } from '@/components/common/ProjectCard';
import { PROJECTS } from '@/data/projects';
import '@/styles/projects.css';

export default function ProjectsPage() {
  return (
    <MainLayout>
      <div className="projects-container">
        <section className="projects-header">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            A collection of work showcasing my technical expertise and problem-solving abilities
          </p>
        </section>

        <section className="projects-grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </div>
    </MainLayout>
  );
}
