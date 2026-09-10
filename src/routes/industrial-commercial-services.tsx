import { createFileRoute } from"@tanstack/react-router";
import { Link } from '@/components/SiteLink';
import { ArrowRight, Factory, Snowflake, Wrench, Cog, Quote, CheckCircle2 } from 'lucide-react';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import TrustBar from '@/components/TrustBar';
import CTABanner from '@/components/CTABanner';
import ComeByChanceServices from '@/components/ComeByChanceServices';
import SectionHeading from '@/components/SectionHeading';
import ProjectsSection from '@/components/ProjectsSection';
const heroFacility = '/hero-facility.png';
const heroRefinery = '/hero-industrial-refinery.png';
const CAPABILITIES = [
  {
    icon: Factory,
    title: 'Industrial Fabrication',
    desc: 'Custom pipe spooling, structural steel, and pressure vessel work with full traceability.',
    img: 'https://images.pexels.com/photos/22717514/pexels-photo-22717514.jpeg?auto=compress&cs=tinysrgb&w=800',
    to: '/services/fabrication',
  },
  {
    icon: Snowflake,
    title: 'Refrigeration & HVAC',
    desc: 'Ammonia, CO₂, and glycol systems designed, built, and serviced in-house.',
    img: 'https://images.pexels.com/photos/37913513/pexels-photo-37913513.jpeg?auto=compress&cs=tinysrgb&w=800',
    to: '/services/refrigeration',
  },
  {
    icon: Wrench,
    title: 'Custom Skids & Packages',
    desc: 'Complete refrigeration and process skids pre-built and tested in our shop.',
    img: 'https://images.pexels.com/photos/14008091/pexels-photo-14008091.jpeg?auto=compress&cs=tinysrgb&w=800',
    to: '/services/custom-skids',
  },
  {
    icon: Cog,
    title: 'Service & Maintenance',
    desc: 'Preventive maintenance, emergency response, and controls upgrades across the region.',
    img: 'https://images.pexels.com/photos/29181490/pexels-photo-29181490.jpeg?auto=compress&cs=tinysrgb&w=800',
    to: '/services/service-maintenance',
  },
];

const TESTIMONIALS = [
  { quote:"Young's delivered our cold storage build ahead of schedule and the system has run flawlessly through our busiest season. Their in-house fabrication made all the difference.", name: 'David MacDonald', role: 'Operations Manager, Atlantic Cold Logistics' },
  { quote:"The quality of their pipe spooling program was outstanding. Every spool arrived in the right sequence, which let us complete our shutdown on time. A truly professional team.", name: 'Sarah Chen', role: 'Project Engineer, Atlantic Pulp & Paper' },
  { quote:"From engineering through commissioning, Young's understood our vessel's constraints and delivered a refrigeration retrofit that exceeded our expectations.", name: 'Captain Robert Tremblay', role: 'Owner, Harbour Grace Fisheries' },
];


function IndustrialCommercialServices() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[600px] md:h-[680px] overflow-hidden">
          <img
            src={heroRefinery}
            alt="Young's Industrial service trucks at a refinery site"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/35 to-transparent" />
          <div className="container-8xl relative flex h-full items-center">
            <div className="max-w-2xl animate-fade-up">
              <p className="eyebrow text-safety-400 mb-4">35 Years of Industrial Excellence</p>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                Industrial and Commercial Services
              </h1>
              <p className="mt-5 text-lg text-navy-100 md:text-xl">
                Industrial Refrigeration, Fabrication &amp; Marine Equipment Services Across Atlantic Canada
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/projects" className="btn-navy">
                  View Our Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-pad bg-steel-50">
        <div className="container-8xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow mb-3">Certifications</p>
              <h2 className="text-3xl font-bold text-navy-800 md:text-4xl">
                Certified to the standards our clients demand.
              </h2>
              <ul className="mt-6 space-y-4 text-steel-600">
                {[
                  'ISO-9001-2015 quality management certification',
                  'Canadian Welding Bureau (CWB) certified to CSA W47.1',
                  'TSSA / ABSA-compliant pressure piping and vessel work',
                  'COR-certified safety program with full incident reporting',
                  'Full material traceability and NDT documentation on request',
                ].map((c) => (
                  <li key={c} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-safety-500" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-xl border border-steel-200 bg-steel-100 aspect-[4/3] shadow-lg">
              <img
                src="https://images.pexels.com/photos/36826987/pexels-photo-36826987.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Certified pressure vessel work"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-pad bg-steel-50">
        <div className="container-8xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-3">What We Do</p>
            <h2 className="text-3xl font-bold text-navy-800 md:text-4xl">
              Full-Service Industrial Capabilities
            </h2>
            <p className="mt-5 text-lg text-steel-600">
              From concept and detailing to fabrication, installation, and long-term service — one team, one accountable partner.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((c) => {
              const Icon = c.icon;
              return (
                <Link
                  key={c.title}
                  to={c.to}
                  className="group flex flex-col overflow-hidden rounded-xl border border-steel-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-video overflow-hidden bg-steel-200">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-md bg-navy-500 text-white transition-colors group-hover:bg-navy-100">
                      <Icon className="h-5 w-5 transition-colors group-hover:text-safety-400" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-lg font-bold text-navy-800 transition-colors group-hover:text-safety-600">
                      {c.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-steel-600">{c.desc}</p>
                    <span className="btn-ghost mt-4">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <TrustBar />

      {/* Featured product spotlight */}
      <section className="section-pad bg-steel-50">
        <div className="container-8xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="eyebrow mb-3">Featured Product Line</p>
              <h2 className="text-3xl font-bold text-navy-800 md:text-4xl">Custom Refrigeration Packages</h2>
              <p className="mt-5 text-lg text-steel-600">
                We engineer and build complete industrial refrigeration packages tailored to your facility, vessel, or process. Every package is assembled, piped, and tested in-house by our certified team, then delivered ready for commissioning.
              </p>
              <p className="mt-4 text-steel-600">
                From compressor skids and plate heat exchangers to full ammonia systems with heat reclaim, our packages combine trusted brands — Mycom, Baltimore Air Coil, North Star, and Geneglace — with our own fabrication and controls expertise.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn-secondary">Learn More</Link>
                <Link to="/contact" className="btn-primary">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <ImagePlaceholder
                src={heroFacility}
                alt="Custom industrial refrigeration package"
                className="aspect-square shadow-xl w-full"
              />
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
        eyebrow="Project Portfolio"
        title="Featured Industrial Projects"
        bg="bg-steel-50"
        slugs={[
          'north-atlantic-refinery',
          'quinlan-processing-facility',
          'paradise-twin-arena',
          'labrador-ready-mix-muskrat-falls',
        ]}
        columns={4}
      />


      {/* Projects CTA */}
      <CTABanner
        title="Delivering Quality Work Across Every Project"
        description="From cold storage facilities to offshore platforms, our team brings 35 years of experience to every job."
      />
    </>
  );
}

export const Route = createFileRoute("/industrial-commercial-services")({
  head: () => ({
    meta: [
      { title:"Industrial & Commercial Services | Young's Industrial" },
      { name:"description", content:"Turnkey industrial and commercial mechanical services: fabrication, refrigeration, HVAC, process piping, and 24/7 maintenance support." },
      { property:"og:title", content:"Industrial & Commercial Services | Young's Industrial" },
      { property:"og:description", content:"Turnkey industrial and commercial mechanical services: fabrication, refrigeration, HVAC, process piping, and 24/7 maintenance support." },
      { property:"og:type", content:"website" },
      { name:"twitter:card", content:"summary_large_image" },
    ],
  }),
  component: IndustrialCommercialServices,
});
