import { createFileRoute } from"@tanstack/react-router";
import { useState } from 'react';
import { Link } from '@/components/SiteLink';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import CTABanner from '@/components/CTABanner';
import SectionHeading from '@/components/SectionHeading';
import ProjectsSection from '@/components/ProjectsSection';
import GallerySection from '@/components/GallerySection';

const GALLERY_IMAGES = [
  'https://images.pexels.com/photos/2098605/pexels-photo-2098605.jpeg?auto=compress&cs=tinysrgb&w=800',
  '/__l5e/assets-v1/b59af5ba-ef40-44c3-b977-9a0a171e477d/gen-machine-room.jpg',
  'https://images.pexels.com/photos/23503522/pexels-photo-23503522.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/18419622/pexels-photo-18419622.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1895012/pexels-photo-1895012.jpeg?auto=compress&cs=tinysrgb&w=800',
  '/__l5e/assets-v1/88470c64-a6a7-4f8c-b11a-40b9f68ec39e/gen-fab-shop.jpg',
  'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/5321429/pexels-photo-5321429.jpeg?auto=compress&cs=tinysrgb&w=800',
];

const NUMBERED = [
  { n: '01', title: 'System Engineering', desc: 'We review your refrigeration load requirements and plant layout to plan optimal pipe routing and spool sequencing.' },
  { n: '02', title: 'Shop Prefabrication', desc: 'Pipe spools pre-fabricated off-site in our welding bays using CNC cutting and positioning tools for stress-free field alignment.' },
  { n: '03', title: 'Structural Fabrication', desc: 'Ice raker framing, auger casings, and support gantries built to CWB standards for continuous stress and vibration resistance.' },
  { n: '04', title: 'Commissioning & Restoration', desc: 'Compressor rebuilding, auger replacement, and system commissioning to restore your ice plant to full production capacity.' },
];

const FOCUS = [
  { title: 'Commercial Fishing Fleet Ice Plants', desc: 'Dockside high-tonnage flake ice systems, chilled seawater (CSW) piping loops, and holding tank components.' },
  { title: 'Blast Freezing & Cold Storage Hubs', desc: 'High-velocity evaporator coil manifolds, custom pallet rack structural safety framing, and heavy freezer door frame plates.' },
  { title: 'Concrete Batch Cooling Infrastructure', desc: 'Specialized heavy-duty ice delivery augers and cooling water manifolds for regulating concrete curing temperatures.' },
];

const FAQS = [
  {
    q: 'What specifications do you follow for ammonia (R-717) industrial refrigeration piping?',
    a: 'Ammonia systems operate under highly demanding pressure and chemical conditions. We fabricate these systems in strict accordance with ASME B31.5 (Refrigeration Piping) and ASME Section IX standards. We use heavy-wall carbon steel or specific stainless alloys combined with 100% full-penetration welds to ensure absolute seal integrity.',
  },
  {
    q: 'Why is shop-fabricated piping better for cold storage expansions?',
    a: 'Building piping networks directly inside an active, sub-zero cold storage facility slows down construction and hazards your operations. By prefabricating your pipe spools off-site using our CNC cutting and positioning tools, we deliver job-ready assemblies that can be bolted or welded into place quickly, minimizing system downtime.',
  },
  {
    q: 'Can you repair or replace worn augers and conveyor components for older ice plants?',
    a: 'Yes. Our machine and fabrication shops routinely rebuild worn ice-handling machinery. We can roll and weld custom heavy-wall flights, replace bent central shafts, and manufacture stainless steel auger troughs to restore your automated delivery systems to original factory tolerances.',
  },
  {
    q: 'What compressor brands can your machine shop service?',
    a: 'We rebuild and laser-align large industrial screw and reciprocating compressors including Mycom and Sabroe units. Our services include complete tear-down, custom shaft and housing sleeve work, bearing replacement, and dynamic balancing to restore peak operating efficiency.',
  },
  {
    q: 'Do you fabricate structural framing for automated ice raker systems?',
    a: 'Yes. We manufacture custom structural steel framing for automatic ice-raker systems, ice storage bin enclosures, distribution auger casings, and heavy overhead support gantries. All load-bearing components are fully welded to CWB standards to handle continuous stress, vibration, and moisture.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-steel-200 last:border-0">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 py-5 text-left">
        <span className="font-heading text-base font-bold text-navy-800">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-safety-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48 pb-5' : 'max-h-0'}`}>
        <p className="text-steel-600">{a}</p>
      </div>
    </div>
  );
}

function IceMaking() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[480px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2098605/pexels-photo-2098605.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Industrial ice making and refrigeration equipment"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/92 to-navy-900/55" />
        <div className="container-8xl relative flex h-full items-end pb-16">
          <div className="max-w-2xl">
            <p className="eyebrow text-safety-400 mb-3">Industries Served</p>
            <h1 className="text-4xl font-bold text-white md:text-5xl">Industrial Ice &amp; Cold Storage</h1>
            <p className="mt-4 text-lg text-navy-100">
              Combining specialized CWB steel welding with advanced refrigeration piping prefabrication to build durable, high-tonnage thermal control systems.
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
      </section>

      {/* Overview */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading eyebrow="Our Capabilities" title="High-Capacity Fabrication for Thermal Control" />
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-steel-600">
                <p>
                  Industrial ice production and blast freezing require complex, heavy-duty pressure piping networks to safely circulate refrigerants like Ammonia (R-717) and high-pressure Freon loops. Young's Industrial prefabricates these systems to ASME B31.5 codes under strict quality oversight.
                </p>
                <p>
                  From ice raker structural framing to compressor rebuilding, our certified teams help ice plants and cold storage facilities maintain peak chilling efficiency and system pressure safety.
                </p>
              </div>
              <ul className="mt-8 space-y-3 text-steel-600">
                {['ASME B31.5 Refrigeration Piping Compliance', 'CWB-Certified Structural Steel Framing', 'Cryogenic-Grade Welding Procedures', 'Mycom & Sabroe Compressor Rebuilding'].map((c) => (
                  <li key={c} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-safety-500" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ImagePlaceholder
              src="/__l5e/assets-v1/b59af5ba-ef40-44c3-b977-9a0a171e477d/gen-machine-room.jpg"
              alt="Industrial cold storage facility"
              className="aspect-[4/3] shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="section-pad bg-steel-50">
        <div className="container-8xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ImagePlaceholder
              src="https://images.pexels.com/photos/36825977/pexels-photo-36825977.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Industrial refrigeration pipe spooling and pressure piping"
              className="aspect-[4/3] shadow-lg"
            />
            <div>
              <SectionHeading eyebrow="Technical Capabilities" title="High-Tonnage Thermal Systems Built to Code" />
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-steel-600">
                <p>
                  Our cryogenic-grade welding procedures use impact-tested carbon and stainless steels that maintain structural strength in continuous sub-zero environments, with pipe spools pre-fabricated off-site using CNC cutting and positioning tools for stress-free field installation. All ammonia (R-717) and high-pressure Freon systems are fabricated to ASME B31.5 and ASME Section IX standards using heavy-wall carbon steel or specific stainless alloys with 100% full-penetration welds, including heavy-wall header systems, oil separator line manifolds, suction accumulation spools, and liquid distribution networks.
                </p>
                <p>
                  For ice handling infrastructure, we manufacture custom structural steel framing for automatic ice-raker systems, storage bin enclosures, distribution auger casings, and heavy overhead support gantries — all load-bearing components fully welded to CWB standards for continuous stress, vibration, and moisture. Our thermal vessel services cover code-compliant modifications to surge drums, evaporative condenser frames, and accumulation tanks, while our machine shops rebuild and laser-align large industrial screw and reciprocating compressors including Mycom and Sabroe units — rolling and welding custom heavy-wall flights, replacing bent central shafts, and manufacturing stainless steel auger troughs to restore automated delivery systems to original factory tolerances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <SectionHeading align="center" eyebrow="Our Process" title="From System Engineering to Full Production" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {NUMBERED.map((s) => (
              <div key={s.n} className="group flex gap-6 rounded-xl border border-steel-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="font-heading text-4xl font-bold text-safety-500/80 transition-colors group-hover:text-safety-500 shrink-0">{s.n}</div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy-800">{s.title}</h3>
                  <p className="mt-2 text-steel-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-pad bg-steel-50">
        <div className="container-8xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading eyebrow="Applications" title="Ice &amp; Cold Storage Focus Areas" />
              <div className="mt-8 space-y-6">
                {FOCUS.map((f) => (
                  <div key={f.title} className="flex gap-4 rounded-xl border border-steel-200 bg-white p-6">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-safety-500" />
                    <div>
                      <h3 className="font-bold text-navy-800">{f.title}</h3>
                      <p className="mt-1 text-steel-600">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ImagePlaceholder
              src="/__l5e/assets-v1/88470c64-a6a7-4f8c-b11a-40b9f68ec39e/gen-fab-shop.jpg"
              alt="Industrial refrigeration processing facility"
              className="aspect-[4/3] shadow-lg"
            />
          </div>
        </div>
      </section>

      <ProjectsSection
        eyebrow="Related Projects"
        title="Projects in This Sector"
        bg="bg-white"
        slugs={['ice-plant-installation', 'arena-ice-plant', 'dartmouth-cold-storage']}
      />

      <GallerySection
        eyebrow="Gallery"
        title="Sector Gallery"
        bg="bg-steel-50"
        images={GALLERY_IMAGES}
      />

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <div className="mx-auto max-w-3xl">
            <SectionHeading align="center" eyebrow="FAQ" title="Common Questions" />
            <div className="mt-12 rounded-xl border border-steel-200 bg-white px-8">
              {FAQS.map((faq) => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Building or Upgrading an Ice Plant or Cold Storage Facility?"
        description="Our ASME B31.5 certified team fabricates refrigeration piping, structural framing, and rebuilds compressors for high-tonnage thermal systems."
      />
    </>
  );
}

export const Route = createFileRoute("/industries/ice-making")({
  head: () => ({
    meta: [
      { title:"Ice Making Systems & Ice Plants | Young's Industrial" },
      { name:"description", content:"Flake, plate and block ice plants plus rink and process ice systems designed, built and serviced in-house." },
      { property:"og:title", content:"Ice Making Systems & Ice Plants | Young's Industrial" },
      { property:"og:description", content:"Flake, plate and block ice plants plus rink and process ice systems designed, built and serviced in-house." },
      { property:"og:type", content:"website" },
      { name:"twitter:card", content:"summary_large_image" },
    ],
  }),
  component: IceMaking,
});
