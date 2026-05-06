import { getProjects } from '@/data/projects';
import { Language } from '@/lib/language';
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

  return (
    <MainLayout>
      <ProjectDetailsClient projectId={id} />
    </MainLayout>
  );
}
