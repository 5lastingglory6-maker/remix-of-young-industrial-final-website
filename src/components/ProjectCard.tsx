import { Link } from '@/components/SiteLink';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/data/site';

const FALLBACK_GRADIENT =
  'bg-[linear-gradient(150deg,var(--color-navy-700),var(--color-navy-950))]';

export function ProjectMedia({
  project,
  className = '',
  note,
}: {
  project: Project;
  className?: string;
  note?: string;
}) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${className}`}
      />
    );
  }

  return (
    <div
      className={`relative flex h-full w-full items-end p-5 ${project.gradient ?? FALLBACK_GRADIENT} ${className}`}
      role="img"
      aria-label={project.title}
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(255,255,255,.14) 0 2px, transparent 2px 12px)',
        }}
      />
      <p className="relative text-xs font-medium uppercase tracking-[0.18em] text-white/70">
        {note ?? project.location}
      </p>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-steel-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-steel-300 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-steel-200">
        <ProjectMedia project={project} />
      </div>
      <div className="flex flex-1 flex-col border-t border-steel-200 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-safety-600">
          {project.sector ?? project.category}
        </p>
        <h3 className="mt-3 text-lg font-bold leading-snug text-navy-800 transition-colors group-hover:text-navy-600">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-steel-500">
          {project.client} · {project.location}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-600">{project.summary}</p>
        <span className="btn-ghost mt-5">
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
