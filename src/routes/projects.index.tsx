import { createFileRoute } from "@tanstack/react-router";
import { useState } from 'react';
import { PROJECTS, PROJECT_SECTORS, type ProjectSector } from '@/data/site';
import ProjectCard from '@/components/ProjectCard';
import CTABanner from '@/components/CTABanner';

const FILTERS: (ProjectSector | 'All')[] = ['All', ...PROJECT_SECTORS];

function Projects() {
  const [active, setActive] = useState<ProjectSector | 'All'>('All');

  const filtered =
    active === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => (p.sector ?? p.category) === active);

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
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-safety-600">Portfolio</p>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 md:text-4xl">
              Selected Project Work
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel-600">
              Mechanical, refrigeration, and fabrication packages delivered for public infrastructure,
              energy, marine, and institutional clients.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {FILTERS.map((sector) => (
              <button
                key={sector}
                onClick={() => setActive(sector)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  active === sector
                    ? 'border-navy-800 bg-navy-800 text-white'
                    : 'border-steel-200 bg-white text-steel-600 hover:border-steel-300 hover:bg-steel-100'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
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
