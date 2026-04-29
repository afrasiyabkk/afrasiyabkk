import { getProjects, getProjectDetailsPageData } from '@/data/projects';
import { Language } from '@/lib/language';
import Link from 'next/link';
import { MainLayout } from '@/components/layout/MainLayout';
import ProjectDetailsClient from './_components/ProjectDetailsClient';
import '@/styles/project-details.css';

interface ProjectDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getProjects('en' as Language);
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { id } = await params;
  const projects = getProjects('en' as Language);
  const pageData = getProjectDetailsPageData('en' as Language);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <MainLayout>
        <div className="project-details-container">
          <div className="project-not-found">
            <h1>{pageData.projectNotFound}</h1>
            <p>{pageData.projectNotFoundMessage}</p>
            <Link href="/projects" className="back-btn">
              {pageData.backToProjects}
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <ProjectDetailsClient project={project} pageData={pageData} />
    </MainLayout>
  );
}
