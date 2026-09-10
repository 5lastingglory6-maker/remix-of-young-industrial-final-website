import { createFileRoute } from"@tanstack/react-router";
import { Link } from '@/components/SiteLink';
import { useState } from 'react';
import { ArrowRight, Wrench, Layers, CheckCircle2, Ship, HardHat, ChevronDown } from 'lucide-react';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import CTABanner from '@/components/CTABanner';
import SectionHeading from '@/components/SectionHeading';
const heroPlant = '/hero-plant.png';
const CAPABILITIES: { icon: typeof Layers; title: string; shortDesc: string; fullDesc: string; img: string }[] = [
  {
    icon: Layers,
    title: 'Pipe Spooling & Structural Steel',
    shortDesc: 'Carbon, stainless, and sanitary spools with full weld documentation; platforms, mezzanines, and process supports fabricated to spec.',
    fullDesc: 'Our pipe spooling shop produces carbon steel, stainless steel, and sanitary spools with complete weld documentation, material traceability, and pressure testing. Complementing this, our structural steel team fabricates platforms, mezzanines, and process supports to exact engineering specifications. Every weld is backed by CWB certification and ISO-9001 quality controls, so your spools and steel arrive ready for installation.',
    img: 'https://images.pexels.com/photos/27354192/pexels-photo-27354192.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Ship,
    title: 'Marine Fabrication & Pressure Vessels',
    shortDesc: 'ASME-compliant vessel work with third-party inspection; modules and access steel for shipyards and offshore programs.',
    fullDesc: 'We deliver ASME-compliant pressure vessel fabrication with third-party inspection, hydro testing, and full documentation. Alongside vessels, our marine team builds modules and access steel for shipyards and offshore programs, engineered to withstand harsh marine environments and strict classification requirements. From prototype to production, we work with naval architects and marine engineers to keep schedules on track.',
    img: 'https://images.pexels.com/photos/18419622/pexels-photo-18419622.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: HardHat,
    title: 'On-Site Installation & Custom Skids',
    shortDesc: 'Complete process and refrigeration skids pre-tested in the shop; rigging, welding, and commissioning crews across Atlantic Canada.',
    fullDesc: 'We assemble complete process and refrigeration skids in our shop, pipe them, wire controls, and run performance tests before delivery. Our on-site installation crews then handle rigging, welding, alignment, and commissioning across Atlantic Canada. From site preparation to final startup, our millwrights, pipefitters, and welders work as one team to bring your project in safely and on schedule.',
    img: 'https://images.pexels.com/photos/6509862/pexels-photo-6509862.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const INDUSTRIES = [
  { title: 'Oil and Gas', to: '/industries/oil-and-gas', img: '/hero-industrial-refinery.png' },
  { title: 'Pulp and Paper', to: '/industries/pulp-and-paper', img: '/heritage-plant.jpg' },
  { title: 'Power Generation', to: '/industries/power-generation', img: '/hero-plant.png' },
  { title: 'Municipal Water and Sewer', to: '/industries/municipal-water-sewer', img: '/p-industrial-cooling-compressor-2.jpg' },
  { title: 'Food Processing', to: '/industries/food-processing', img: '/p-geneglace-flake-ice-seafood-processsing.jpg' },
  { title: 'Ice Making', to: '/industries/ice-making', img: '/p-ice-flakes-industrial-chemistry-cool-down.jpg' },
];


function CapabilityCards() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <>
      {CAPABILITIES.map(({ icon: Icon, title, shortDesc, fullDesc, img }, index) => {
        const isOpen = expanded.has(index);
        return (
          <div
            key={title}
            className="group flex flex-col overflow-hidden rounded-xl border border-steel-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={img}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
              <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-lg bg-safety-500 text-white transition-colors group-hover:bg-navy-100">
                <Icon className="h-6 w-6 transition-colors group-hover:text-safety-400" />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-heading text-xl font-bold text-navy-800">{title}</h3>
              <div className="mt-3 flex-1">
                <p className="text-sm text-steel-600">
                  {shortDesc}
                  {isOpen && (
                    <>
                      {' '}
                      {fullDesc}
                    </>
                  )}
                </p>
              </div>
              <button
                type="button"
                onClick={() => toggle(index)}
                className="mt-4 inline-flex items-center gap-1 self-start text-sm font-semibold text-safety-600 transition-colors hover:text-safety-700"
                aria-expanded={isOpen}
              >
                {isOpen ? 'Show less' : 'Show more'}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}


function FabricationServices() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src={heroPlant}
          alt="Welding and fabrication shop"
          className="absolute inset-0 h-full w-full object-cover [transform:scaleX(-1)]"
        />
        <div className="absolute inset-0 bg-navy-950/10" />
        <div className="container-8xl relative flex h-full items-end pb-12">
          <div className="max-w-2xl">
            <p className="eyebrow text-safety-400 mb-3">Services</p>
            <h1 className="text-4xl font-bold text-white md:text-5xl">Fabrication Services</h1>
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
      </section>

      {/* Intro */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Our Capabilities"
                title="Fully Equipped Machine & Welding Shops"
              />
              <div className="mt-5 space-y-4 text-steel-600 text-lg leading-relaxed">
                <p>
                  We provide welding, portable welding, pump rebuilding, machining, and field machining, hydraulic services, with fully equipped machine and welding shops with CNC equipment.
                </p>
                <p>
                  We offer a team of certified, experienced and highly skilled Millwrights, Machinists, Pipefitters, and Welders. We serve clients in construction, forestry, marine, mining, oil and gas industries, and food processing industries.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Millwrights', 'Machinists', 'Pipefitters', 'Welders'].map((role) => (
                  <span key={role} className="inline-flex items-center gap-2 rounded-full bg-steel-100 px-4 py-2 text-sm font-semibold text-navy-700">
                    <Wrench className="h-4 w-4 text-safety-500" />
                    {role}
                  </span>
                ))}
              </div>
            </div>
            <ImagePlaceholder
              src="/p-fabrication-img.jpg"
              alt="Machine and welding shop fabrication work"
              className="aspect-[4/3] shadow-lg"
            />

          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-pad bg-steel-50">
        <div className="container-8xl">
          <SectionHeading
            align="center"
            eyebrow="Industries Served"
            title="Serving Diverse Industrial Sectors"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.title}
                to={ind.to}
                className="group relative overflow-hidden rounded-xl aspect-[4/3]"
              >
                <img src={ind.img} alt={ind.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{ind.title}</h3>
                  <span className="btn-ghost mt-2 text-safety-400">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <SectionHeading eyebrow="Capabilities" title="What We Fabricate" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <CapabilityCards />
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

      <CTABanner
        title="Have a Fabrication Project in Mind?"
        description="Our certified team is ready to help with welding, machining, pipe spooling and structural steel."
      />
    </>
  );
}

export const Route = createFileRoute("/services/fabrication")({
  head: () => ({
    meta: [
      { title:"Fabrication Services \u2014 Pipe Spooling & Pressure Vessels | Young's Industrial" },
      { name:"description", content:"CWB-standard pipe spooling, structural steel, skid packages and pressure vessel fabrication with full material traceability." },
      { property:"og:title", content:"Fabrication Services \u2014 Pipe Spooling & Pressure Vessels | Young's Industrial" },
      { property:"og:description", content:"CWB-standard pipe spooling, structural steel, skid packages and pressure vessel fabrication with full material traceability." },
      { property:"og:type", content:"website" },
      { name:"twitter:card", content:"summary_large_image" },
    ],
  }),
  component: FabricationServices,
});
