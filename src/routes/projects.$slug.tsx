import { createFileRoute } from"@tanstack/react-router";
import { Link } from '@/components/SiteLink';
import { ArrowLeft, ArrowRight, MapPin, Building2, CheckCircle2, AlertCircle, Lightbulb, TrendingUp } from 'lucide-react';
import { PROJECTS } from '@/data/site';
import CTABanner from '@/components/CTABanner';
import ImagePlaceholder from '@/components/ImagePlaceholder';

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

  const related = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] md:h-[500px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/60 to-navy-900/30" />
        <div className="container-8xl relative flex h-full items-end pb-12">
          <div className="max-w-3xl">
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-100 hover:text-white transition-colors mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
            <span className="inline-block rounded-full bg-safety-500 px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider mb-4">
              {project.category}
            </span>
            <h1 className="text-3xl font-bold text-white md:text-5xl">{project.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-6 text-navy-100">
              <span className="flex items-center gap-2"><Building2 className="h-4 w-4 text-safety-400" /> {project.client}</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-safety-400" /> {project.location}</span>
              <span className="text-sm">{project.industry}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Scope of work */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="eyebrow mb-3">Project Overview</p>
              <h2 className="text-2xl font-bold text-navy-800 md:text-3xl">Scope of Work</h2>
              <div className="mt-6 space-y-4 text-steel-600 text-lg leading-relaxed">
                <p>{project.scope[0]}</p>
                <p>{project.scope[1]}</p>
                <p>{project.scope[2]}</p>
                <p>{project.scope[3]}</p>
              </div>
            </div>
            <aside className="lg:col-span-1">
              <div className="rounded-xl border border-steel-200 bg-steel-50 p-7 sticky top-28">
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-navy-800 mb-5">Project Details</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-steel-500">Client</dt>
                    <dd className="font-semibold text-navy-800 mt-0.5">{project.client}</dd>
                  </div>
                  <div>
                    <dt className="text-steel-500">Location</dt>
                    <dd className="font-semibold text-navy-800 mt-0.5">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="text-steel-500">Industry</dt>
                    <dd className="font-semibold text-navy-800 mt-0.5">{project.industry}</dd>
                  </div>
                  <div>
                    <dt className="text-steel-500">Category</dt>
                    <dd className="font-semibold text-navy-800 mt-0.5">{project.category}</dd>
                  </div>
                </dl>
                <Link to="/contact" className="btn-primary mt-6 w-full">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Challenge / Solution / Result */}
      <section className="section-pad bg-steel-50">
        <div className="container-8xl">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: AlertCircle, label: 'Challenge', text: project.challenge, color: 'text-safety-500' },
              { icon: Lightbulb, label: 'Solution', text: project.solution, color: 'text-navy-600' },
              { icon: TrendingUp, label: 'Result', text: project.result, color: 'text-green-600' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-xl border border-steel-200 bg-white p-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-steel-50`}>
                    <Icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-navy-800">{item.label}</h3>
                  <p className="mt-3 text-steel-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image gallery */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <p className="eyebrow mb-3">Project Gallery</p>
          <h2 className="text-2xl font-bold text-navy-800 md:text-3xl">Project Images</h2>
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

      {/* Related projects */}
      <section className="section-pad bg-steel-50">
        <div className="container-8xl">
          <h2 className="text-2xl font-bold text-navy-800 md:text-3xl">More Projects</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-steel-200 bg-white transition-all hover:shadow-lg"
              >
                <div className="aspect-video overflow-hidden bg-steel-200">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-safety-600">{p.industry}</p>
                  <h3 className="mt-1 font-bold text-navy-800 group-hover:text-safety-600 transition-colors">{p.title}</h3>
                </div>
              </Link>
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
