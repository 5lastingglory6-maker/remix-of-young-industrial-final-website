import { createFileRoute } from"@tanstack/react-router";
import { Link } from '@/components/SiteLink';
import { ArrowRight, Quote } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import SectionHeading from '@/components/SectionHeading';
import SplitSection from '@/components/SplitSection';
import StatsSection from '@/components/StatsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CareersBanner from '@/components/CareersBanner';
import heroIndustry from"@/assets/hero-industry.png.asset.json";

const TESTIMONIALS = [
  { quote:"Young's delivered our cold storage build ahead of schedule and the system has run flawlessly through our busiest season. Their in-house fabrication made all the difference.", name: 'David MacDonald', role: 'Operations Manager, Atlantic Cold Logistics' },
  { quote:"The quality of their pipe spooling program was outstanding. Every spool arrived in the right sequence, which let us complete our shutdown on time. A truly professional team.", name: 'Sarah Chen', role: 'Project Engineer, Atlantic Pulp & Paper' },
  { quote:"From engineering through commissioning, Young's understood our vessel's constraints and delivered a refrigeration retrofit that exceeded our expectations.", name: 'Captain Robert Tremblay', role: 'Owner, Harbour Grace Fisheries' },
];


function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[600px] md:h-[680px] overflow-hidden">
          <img
            src={heroIndustry.url}
            alt="Industrial welding and fabrication work"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/70 to-navy-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
          <div className="container-8xl relative flex h-full items-center">
            <div className="max-w-2xl animate-fade-up">
              <p className="eyebrow text-safety-400 mb-4">35 Years of Industrial Excellence</p>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                Built on Excellence Since 2000
              </h1>
              <p className="mt-5 text-lg text-navy-100 md:text-xl">
                Industrial Refrigeration, Fabrication &amp; Marine Equipment Services Across Atlantic Canada
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-navy-600 bg-navy-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-navy-700"
                >
                  View Our Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial vs Residential split */}
      <SplitSection />

      {/* Company stats */}
      <StatsSection />

      {/* Testimonials */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <SectionHeading
            align="center"
            eyebrow="Client Testimonials"
            title="Trusted by Industry Leaders"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="relative rounded-xl bg-steel-50 border border-steel-200 p-8">
                <Quote className="h-10 w-10 text-safety-200" />
                <p className="mt-4 text-steel-700 italic">"{t.quote}"</p>
                <div className="mt-6 pt-4 border-t border-steel-200">
                  <p className="font-semibold text-navy-800">{t.name}</p>
                  <p className="text-sm text-steel-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <ProjectsSection
        bg="bg-steel-50"
        eyebrow="Selected Work"
        title="Featured Projects Across Our Services"
        columns={4}
        slugs={[
          'paradise-twin-arena',
          'kkv-bull-arm-batch-plant',
          'quinlan-processing-facility',
          'north-atlantic-refinery',
        ]}
      />

      {/* We're hiring */}
      <CareersBanner />

      {/* Projects CTA */}
      <CTABanner
        title="Delivering Quality Work Across Every Project"
        description="From cold storage facilities to offshore platforms, our team brings 35 years of experience to every job."
      />
    </>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title:"Industrial Fabrication & Refrigeration in Atlantic Canada | Young's Industrial" },
      { name:"description", content:"Young's Industrial Refrigeration Limited delivers custom fabrication, ammonia and CO2 refrigeration, marine and offshore services across Atlantic Canada." },
      { property:"og:title", content:"Industrial Fabrication & Refrigeration in Atlantic Canada | Young's Industrial" },
      { property:"og:description", content:"Young's Industrial Refrigeration Limited delivers custom fabrication, ammonia and CO2 refrigeration, marine and offshore services across Atlantic Canada." },
      { property:"og:type", content:"website" },
      { name:"twitter:card", content:"summary_large_image" },
    ],
  }),
  component: Home,
});
