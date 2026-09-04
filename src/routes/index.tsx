import { createFileRoute } from"@tanstack/react-router";
import { Link } from '@/components/SiteLink';
import { ArrowRight, Quote } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import ComeByChanceServices from '@/components/ComeByChanceServices';
import SectionHeading from '@/components/SectionHeading';
import SplitSection from '@/components/SplitSection';
import StatsSection from '@/components/StatsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CareersBanner from '@/components/CareersBanner';
import heroRefinery from "@/assets/hero-industrial-refinery.png.asset.json";
import vacLogo from "@/assets/young-vac-logo.jpg.asset.json";

const VAC_HIGHLIGHTS = [
  'Septic & holding tank pumping',
  'Grease traps, sumps & catch basins',
  'Drain & sewer cleaning, video inspection',
  'Industrial cleanouts & bulk liquid hauling',
  '3 vacuum trucks, dispatched within 24 hours',
  'Certified, fully documented disposal',
];


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
            src={heroRefinery.url}
            alt="Young's Industrial service trucks at a refinery site"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 to-transparent" />
          <div className="container-8xl relative flex h-full items-center justify-end">
            <div className="max-w-2xl animate-fade-up text-right">
              <p className="eyebrow text-safety-400 mb-4">35 Years of Industrial Excellence</p>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                Built on Excellence Since 2000
              </h1>
              <p className="mt-5 text-lg text-navy-100 md:text-xl">
                Industrial Refrigeration, Fabrication &amp; Marine Equipment Services Across Atlantic Canada
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
                <Link to="/contact" className="btn-primary">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wider text-navy-700 transition-colors hover:bg-navy-700 hover:text-white"
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


      {/* Vacuum truck services */}
      <section className="section-pad bg-steel-50" aria-labelledby="vacHeading">
        <div className="container-8xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-steel-200 bg-white p-4 shadow-sm">
              <img
                src={vacLogo.url}
                alt="Young's Vac Service — sewer tanks, garage drains, oil and water vacuum truck services"
                className="mx-auto h-auto w-full max-w-md object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <p className="eyebrow mb-3">Vacuum Truck Services</p>
              <h2 id="vacHeading" className="text-3xl font-bold text-navy-800 md:text-4xl">
                One Call for Tanks, Drains, Sumps &amp; Liquid Waste
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-steel-600">
                Young's Vac Service handles the mess so you don't have to — for homes, businesses and
                industrial sites across Atlantic Canada. From routine septic and holding tank pumping to
                grease traps, catch basins, blocked drains, wash bay pits and industrial tank cleanouts,
                our vacuum trucks pump, clean, haul and dispose of liquid waste with certified,
                fully documented disposal.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {VAC_HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-steel-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-safety-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/services/vacuum-truck-services" className="btn-primary">
                  VACUUM TRUCK SERVICES
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ComeByChanceServices />

      {/* Testimonials */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <SectionHeading
            align="center"
            eyebrow="Client Testimonials"
            title="Trusted by Industry Leaders"
          />
          <div className="mt-12 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 scrollbar-hide md:mx-0 md:grid md:grid-cols-3 md:gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="relative w-[75vw] shrink-0 snap-start rounded-xl bg-steel-50 border border-steel-200 p-6 md:w-auto md:p-8">
                <Quote className="h-8 w-8 text-safety-200 md:h-10 md:w-10" />
                <p className="mt-4 text-sm text-steel-700 italic md:text-base">"{t.quote}"</p>
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
