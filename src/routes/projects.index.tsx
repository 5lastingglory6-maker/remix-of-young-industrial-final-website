import { createFileRoute } from"@tanstack/react-router";
import { useState } from 'react';
import { Link } from '@/components/SiteLink';
import { ArrowRight, Filter } from 'lucide-react';
import { PROJECTS, type ProjectCategory } from '@/data/site';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';

const CATEGORIES: (ProjectCategory | 'All')[] = ['All', 'Fabrication', 'Refrigeration', 'Marine', 'Offshore'];

const CATEGORY_COLORS: Record<ProjectCategory, string> = {
  Fabrication: 'bg-safety-100 text-safety-700',
  Refrigeration: 'bg-navy-100 text-navy-700',
  Marine: 'bg-steel-200 text-steel-700',
  Offshore: 'bg-navy-700 text-white',
};

function Projects() {
  const [active, setActive] = useState<ProjectCategory | 'All'>('All');

  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1108104/pexels-photo-1108104.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Industrial project portfolio"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 to-navy-900/50" />
        <div className="container-8xl relative flex h-full items-end pb-12">
          <div className="max-w-2xl">
            <p className="eyebrow text-safety-400 mb-3">Our Work</p>
            <h1 className="text-4xl font-bold text-white md:text-5xl">Projects</h1>
            <p className="mt-4 text-lg text-navy-100 max-w-xl">
              A selection of fabrication, refrigeration, marine, and offshore projects delivered across Atlantic Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <SectionHeading eyebrow="Portfolio" title="Featured Projects" />
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <Filter className="h-4 w-4 text-steel-400 shrink-0" />
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active === cat
                      ? 'bg-navy-800 text-white'
                      : 'bg-steel-100 text-steel-600 hover:bg-steel-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
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
                  <span className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold ${CATEGORY_COLORS[project.category]}`}>
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

      <CTABanner
        title="Have a Project You'd Like to Discuss?"
        description="Our team brings 35 years of experience to every fabrication, refrigeration, marine, and offshore project."
      />
    </>
  );
}

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title:"Projects \u2014 Fabrication & Refrigeration Case Studies | Young's Industrial" },
      { name:"description", content:"Selected fabrication, refrigeration, marine and offshore projects delivered across Atlantic Canada." },
      { property:"og:title", content:"Projects \u2014 Fabrication & Refrigeration Case Studies | Young's Industrial" },
      { property:"og:description", content:"Selected fabrication, refrigeration, marine and offshore projects delivered across Atlantic Canada." },
      { property:"og:type", content:"website" },
      { name:"twitter:card", content:"summary_large_image" },
    ],
  }),
  component: Projects,
});
