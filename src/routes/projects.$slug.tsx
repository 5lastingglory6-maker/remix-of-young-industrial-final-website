import { createFileRoute } from "@tanstack/react-router";
import { Link } from '@/components/SiteLink';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { PROJECTS, orderProjects } from '@/data/site';
import CTABanner from '@/components/CTABanner';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import ProjectCard, { ProjectMedia } from '@/components/ProjectCard';

function ProjectDetail() {
  const { slug } = Route.useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container-8xl py-32 text-center">
        <h1 className="text-3xl font-bold text-navy-800">Project Not Found</h1>
        <p className="mt-4 text-steel-600">The project you're looking for doesn't exist or has been moved.</p>
        <Link to="/projects" className="btn-primary mt-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </div>
    );
  }

  const related = orderProjects(
    PROJECTS.filter(
      (p) => p.slug !== project.slug && (p.sector ?? p.category) === (project.sector ?? project.category),
    ),
  ).slice(0, 3);
  const more = related.length
    ? related
    : orderProjects(PROJECTS.filter((p) => p.slug !== project.slug)).slice(0, 3);

  const meta = [
    { label: 'Location', value: project.location },
    { label: 'Completed', value: project.completed ?? project.industry },
    { label: 'Scope', value: project.scopeLabel ?? project.category },
    { label: 'Client', value: project.client },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-steel-200 bg-steel-50">
        <div className="container-8xl flex flex-wrap items-center gap-2 py-4 text-sm text-steel-500">
          <Link to="/" className="hover:text-navy-700">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/projects" className="hover:text-navy-700">Projects</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-semibold text-navy-800">{project.title}</span>
        </div>
      </div>

      {/* Banner */}
      <section className="relative overflow-hidden bg-navy-950">
        {project.image ? (
          <>
            <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/80 to-navy-900/60" />
          </>
        ) : (
          <div className={`absolute inset-0 ${project.gradient ?? 'bg-navy-900'} opacity-70`} />
        )}
        <div className="container-8xl relative py-16 md:py-24">
          <p className="eyebrow text-safety-400">{project.sector ?? project.category}</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-white md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">{project.summary}</p>

          <dl className="mt-10 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-safety-400">{m.label}</dt>
                <dd className="mt-2 font-semibold text-white">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Stat strip */}
      {project.stats && project.stats.length > 0 && (
        <section className="border-b border-steel-200 bg-white">
          <div className="container-8xl grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {project.stats.map((s) => (
              <div key={s.label} className="border-l-4 border-safety-500 pl-4">
                <p className="text-2xl font-bold text-navy-900 md:text-3xl">{s.value}</p>
                <p className="mt-1 text-sm text-steel-500">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Case study body */}
      <section className="section-pad bg-white">
        <div className="container-8xl grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {project.about && (
              <>
                <p className="eyebrow text-safety-600">About the Project</p>
                <h2 className="mt-3 text-2xl font-bold text-navy-900 md:text-3xl">Background</h2>
                <p className="mt-5 text-lg leading-relaxed text-steel-600">{project.about}</p>
              </>
            )}

            <h2 className={`text-2xl font-bold text-navy-900 md:text-3xl ${project.about ? 'mt-14' : ''}`}>
              The Challenge
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-steel-600">{project.challenge}</p>

            <h2 className="mt-14 text-2xl font-bold text-navy-900 md:text-3xl">What We Delivered</h2>
            {project.delivered && project.delivered.length > 0 ? (
              <ul className="mt-6 space-y-5">
                {project.delivered.map((d) => (
                  <li key={d.title} className="border-l-4 border-steel-200 pl-5">
                    <p className="font-bold text-navy-800">{d.title}</p>
                    <p className="mt-1 leading-relaxed text-steel-600">{d.text}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="mt-6 space-y-4">
                {project.scope.map((s) => (
                  <li key={s} className="border-l-4 border-steel-200 pl-5 leading-relaxed text-steel-600">
                    {s}
                  </li>
                ))}
              </ul>
            )}

            {project.callout && (
              <blockquote className="mt-12 rounded-xl border-l-4 border-safety-500 bg-steel-50 p-7">
                <p className="eyebrow text-safety-600">Why it mattered</p>
                <p className="mt-3 text-lg leading-relaxed text-navy-800">{project.callout}</p>
              </blockquote>
            )}

            <h2 className="mt-14 text-2xl font-bold text-navy-900 md:text-3xl">The Outcome</h2>
            <p className="mt-5 text-lg leading-relaxed text-steel-600">{project.outcome ?? project.result}</p>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="overflow-hidden rounded-xl border border-steel-200">
                <div className="aspect-[4/5]">
                  <ProjectMedia project={project} note={project.sideNote} />
                </div>
              </div>
              <div className="rounded-xl border border-steel-200 bg-steel-50 p-7">
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-navy-800">Project Details</h3>
                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="text-steel-500">Client</dt>
                    <dd className="mt-0.5 font-semibold text-navy-800">{project.client}</dd>
                  </div>
                  <div>
                    <dt className="text-steel-500">Location</dt>
                    <dd className="mt-0.5 font-semibold text-navy-800">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="text-steel-500">Industry</dt>
                    <dd className="mt-0.5 font-semibold text-navy-800">{project.industry}</dd>
                  </div>
                  <div>
                    <dt className="text-steel-500">Sector</dt>
                    <dd className="mt-0.5 font-semibold text-navy-800">{project.sector ?? project.category}</dd>
                  </div>
                </dl>
                <Link to="/contact" className="btn-primary mt-6 w-full">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Image gallery */}
      {project.gallery.length > 0 && (
        <section className="section-pad bg-steel-50">
          <div className="container-8xl">
            <p className="eyebrow text-safety-600">Project Gallery</p>
            <h2 className="mt-3 text-2xl font-bold text-navy-900 md:text-3xl">Project Images</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.gallery.map((img, i) => (
                <ImagePlaceholder
                  key={i}
                  src={img}
                  alt={`${project.title} - image ${i + 1}`}
                  className="aspect-square shadow-md"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related work */}
      <section className={`section-pad ${project.gallery.length > 0 ? 'bg-white' : 'bg-steel-50'}`}>
        <div className="container-8xl">
          <p className="eyebrow text-safety-600">Related Work</p>
          <h2 className="mt-3 text-2xl font-bold text-navy-900 md:text-3xl">More Projects</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Project?"
        description="Let's discuss how we can deliver the same quality and reliability for your operation."
      />
    </>
  );
}


export const Route = createFileRoute("/projects/$slug")({
  head: () => ({
    meta: [
      { title:"Project Details | Young's Industrial" },
      { name:"description", content:"A closer look at the challenge, solution and results of this Young's Industrial project." },
      { property:"og:title", content:"Project Details | Young's Industrial" },
      { property:"og:description", content:"A closer look at the challenge, solution and results of this Young's Industrial project." },
      { property:"og:type", content:"website" },
      { name:"twitter:card", content:"summary_large_image" },
    ],
  }),
  component: ProjectDetail,
});
