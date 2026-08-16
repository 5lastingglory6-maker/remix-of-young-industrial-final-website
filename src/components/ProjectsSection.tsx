import { Link } from '@/components/SiteLink';
import { ArrowRight } from 'lucide-react';
import { PROJECTS, type Project } from '@/data/site';
import SectionHeading from '@/components/SectionHeading';

const CATEGORY_COLORS: Record<string, string> = {
  Fabrication: 'bg-safety-100 text-safety-700',
  Refrigeration: 'bg-navy-100 text-navy-700',
  Marine: 'bg-steel-200 text-steel-700',
  Offshore: 'bg-navy-700 text-white',
};

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
  const projects: Project[] = slugs
    .map((slug) => PROJECTS.find((p) => p.slug === slug))
    .filter((p): p is Project => Boolean(p));

  if (projects.length === 0) return null;

  return (
    <section className={`section-pad ${bg}`}>
      <div className="container-8xl">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className={`mt-12 grid gap-6 sm:grid-cols-2 ${columns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-steel-200 bg-white transition-all hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden bg-steel-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold ${CATEGORY_COLORS[project.category] ?? 'bg-steel-200 text-steel-700'}`}>
                  {project.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-safety-600">{project.industry}</p>
                <h3 className="mt-2 text-lg font-bold text-navy-800 group-hover:text-navy-600 transition-colors">{project.title}</h3>
                <p className="mt-1 text-sm text-steel-500">{project.client} · {project.location}</p>
                <p className="mt-3 text-sm text-steel-600 flex-1">{project.summary}</p>
                <span className="btn-ghost mt-4">
                  View Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
