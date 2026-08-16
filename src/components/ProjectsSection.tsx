import { PROJECTS, orderProjects, type Project } from '@/data/site';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';

interface Props {
  eyebrow?: string;
  title?: string;
  bg?: string;
  slugs: string[];
  columns?: 3 | 4;
}

export default function ProjectsSection({
  eyebrow = 'Related Projects',
  title = 'Projects in This Sector',
  bg = 'bg-white',
  slugs,
  columns = 3,
}: Props) {
  const projects: Project[] = orderProjects(
    slugs
      .map((slug) => PROJECTS.find((p) => p.slug === slug))
      .filter((p): p is Project => Boolean(p)),
  );

  if (projects.length === 0) return null;

  return (
    <section className={`section-pad ${bg}`}>
      <div className="container-8xl">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div
          className={`mt-12 grid gap-6 sm:grid-cols-2 ${columns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
