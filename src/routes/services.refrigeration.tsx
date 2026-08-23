import { createFileRoute } from"@tanstack/react-router";
import { Link } from '@/components/SiteLink';
import { ArrowRight, CheckCircle2, Ship, Snowflake, Building2, Flame } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import ImageFrame from '@/components/ImageFrame';
import CTABanner from '@/components/CTABanner';
import SectionHeading from '@/components/SectionHeading';
import customRefrigerationAsset from '@/assets/p-custom-refrigeration-packages.jpg.asset.json';
import marineRefrigerationAsset from '@/assets/p-marine-refrigeration.jpg.asset.json';
import plateFreezerAsset from '@/assets/gen-plate-freezer.jpg.asset.json';
import industrialCoolingAsset from '@/assets/p-industrial-cooling-compressor-2.jpg.asset.json';
import machineRoomAsset from '@/assets/gen-machine-room.jpg.asset.json';

const APPROACH_POINTS = [
  'Ammonia, CO₂, glycol, and HFC/HFO capability',
  'Mycom, Baltimore Aircoil, North Star, and Geneglace equipment',
  'In-house pipe spooling and skid fabrication',
  'PLC-based controls with remote monitoring',
  '24/7 emergency service across Atlantic Canada',
];

const PRODUCT_LINES = [
  { name: 'Mycom', desc: 'Industrial Compressors' },
  { name: 'North Star', desc: 'Ice Equipment' },
  { name: 'Baltimore Aircoil', desc: 'Evaporative Condensers' },
  { name: 'Geneglace', desc: 'Ice Equipment' },
];

const MARKETS: { icon: LucideIcon; title: string; desc: string; img: string }[] = [
  { icon: Ship, title: 'Fishing Vessels & Seafood Processing Facilities', desc: 'RSW, hold cooling, and plant refrigeration systems for fishing vessels and land-based seafood processing operations.', img: marineRefrigerationAsset.url },
  { icon: Snowflake, title: 'Industrial Refrigeration, Cold Storage & Blast Freezing', desc: 'Custom process cooling, food production, low-temperature storage warehouses, and high-capacity blast freeze systems for heavy industrial applications.', img: plateFreezerAsset.url },
  { icon: Building2, title: 'Arena & Recreational Ice', desc: 'Ammonia ice plants with heat reclaim systems designed for arenas, rinks, and recreational ice facilities.', img: industrialCoolingAsset.url },
  { icon: Flame, title: 'Heat Reclamation, Exchangers & Pipe Insulation', desc: 'Recover waste heat from refrigeration cycles, plus ASME-compliant pressure vessels, heat exchangers, and industrial pipe insulation.', img: thermalAsset.url },
];

const SYSTEMS = [
  { n: '01', title: 'Ammonia (NH\u2083) Refrigeration', desc: 'Low-temp industrial packages using Mycom compressors and Baltimore Aircoil evaporative condensers.' },
  { n: '02', title: 'CO\u2082 Cascade & Transcritical', desc: 'Modern natural-refrigerant systems for cold storage, food processing, and district cooling.' },
  { n: '03', title: 'Glycol & Secondary Loops', desc: 'Chilled-glycol loops for process cooling, brewery, and dairy applications.' },
  { n: '04', title: 'Commercial & Industrial HVAC', desc: 'Air-handling, ventilation, and heat-recovery packages built and installed by our HVAC team.' },
];

const EQUIPMENT = [
  'Pipe Insulation', 'Industrial Refrigeration Systems', 'Heat Reclaim Systems', 'Compressors',
  'Refrigerants', 'Refrigeration Valves & Accessories', 'Evaporators', 'Pressure Vessels',
  'Condensers', 'Chillers', 'Plate Heat Exchangers', 'Complete line of Refrigeration Parts',
];

function RefrigerationServices() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src="/__l5e/assets-v1/df437beb-b7d0-4ff4-95ed-1f0ebc92f249/gen-machine-room.jpg"
          alt="Industrial refrigeration compressor room"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 to-navy-900/50" />
        <div className="container-8xl relative flex h-full items-end pb-12">
          <div className="max-w-2xl">
            <p className="eyebrow text-safety-400 mb-3">Services</p>
            <h1 className="text-4xl font-bold text-white md:text-5xl">Refrigeration &amp; HVAC Services</h1>
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
                title="The Industry's Most Reliable Refrigeration Equipment"
              />
              <p className="mt-5 text-steel-600 text-lg">
                We are providers of the industry's most reliable industrial refrigeration machinery and equipment, from compressors and evaporator machines to ice makers and blast freezers.
              </p>
              <p className="mt-4 text-steel-600 text-lg">
                Our focus is to provide energy-efficient, durable, and serviceable refrigeration packages that our clients can be proud to own. To ensure our high standards of quality and workmanship are consistently met, our team includes refrigeration technicians, electricians, pipefitters, and certified welders — supported by our in-house 3D drafting department.
              </p>
              <p className="mt-4 text-steel-600 text-lg">
                Every industry presents a different refrigeration application with its own performance standards. Young's Industrial in-house quality control program monitors every project from design through commissioning to meet and exceed those requirements — no matter the industry or scope.
              </p>
            </div>
            <ImagePlaceholder
              src={customRefrigerationAsset.url}
              alt="Custom industrial refrigeration package"
              className="aspect-[4/3] shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-pad bg-white">
        <div className="container-8xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <ImageFrame
            src="/__l5e/assets-v1/df437beb-b7d0-4ff4-95ed-1f0ebc92f249/gen-machine-room.jpg"
            alt="Refrigeration equipment"
            className="aspect-[4/3] shadow-lg"
          />
          <div>
            <p className="eyebrow mb-3">Our Approach</p>
            <h2 className="text-3xl font-bold text-navy-800 md:text-4xl">
              Engineered, built, and serviced by one team.
            </h2>
            <p className="mt-5 text-lg text-steel-600">
              We integrate design, fabrication, controls, and service under one roof — so the package that
              gets designed on paper is the package that gets built, installed, and maintained. That means
              fewer hand-offs, fewer surprises, and a system that our team knows inside-out from day one.
            </p>
            <ul className="mt-6 space-y-3 text-steel-600">
              {APPROACH_POINTS.map((b) => (
                <li key={b} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-safety-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Product Lines */}
      <section className="section-pad bg-steel-50">
        <div className="container-8xl">
          <SectionHeading
            align="center"
            eyebrow="Product Lines"
            title="Trusted Brands We Supply & Service"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCT_LINES.map((line) => (
              <div key={line.name} className="group rounded-xl border border-steel-200 bg-white p-8 text-center transition-all hover:border-safety-300 hover:shadow-lg">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-800 group-hover:bg-safety-500 transition-colors">
                  <span className="font-heading text-xl font-bold text-safety-400 group-hover:text-white transition-colors">
                    {line.name.charAt(0)}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-800">{line.name}</h3>
                <p className="mt-1 text-sm text-steel-600">{line.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets We Serve */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <SectionHeading
            align="center"
            eyebrow="Markets We Serve"
            title="Refrigeration Solutions for Every Application"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {MARKETS.map(({ icon: Icon, title, desc, img }) => (
              <div key={title} className="group relative overflow-hidden rounded-xl aspect-[4/3]">
                <img
                  src={img}
                  alt={title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-900/55 to-navy-900/15" />
                <div className="absolute top-5 left-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-safety-500 transition-colors group-hover:bg-navy-100">
                    <Icon className="h-6 w-6 text-white transition-colors group-hover:text-safety-400" />
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-steel-200">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems We Build */}
      <section className="section-pad bg-steel-50">
        <div className="container-8xl">
          <SectionHeading align="center" eyebrow="Systems We Build" title="Refrigeration & HVAC Systems" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {SYSTEMS.map((s) => (
              <div
                key={s.n}
                className="group flex gap-6 rounded-xl border border-steel-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="font-heading text-4xl font-bold text-safety-500/80 transition-colors group-hover:text-safety-500">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy-800">{s.title}</h3>
                  <p className="mt-2 text-steel-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Systems */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Equipment & Systems"
                title="Complete Refrigeration Equipment & Systems"
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {EQUIPMENT.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg bg-white border border-steel-200 px-4 py-3">
                    <div className="h-2 w-2 rounded-full bg-safety-500 shrink-0" />
                    <span className="text-sm font-medium text-navy-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary mt-8">
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ImagePlaceholder
              src="/__l5e/assets-v1/b09c55df-2b0f-4001-b325-eafa36f1ae2a/gen-fab-shop.jpg"
              alt="Industrial refrigeration piping and equipment"
              className="aspect-[4/3] shadow-lg"
            />
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Refrigeration or HVAC Services?"
        description="From compressors to complete cold storage systems, we have the equipment and expertise you need."
      />
    </>
  );
}

export const Route = createFileRoute("/services/refrigeration")({
  head: () => ({
    meta: [
      { title:"Refrigeration & HVAC Services \u2014 Ammonia, CO2, Glycol | Young's Industrial" },
      { name:"description", content:"Design, installation and service of industrial ammonia, CO2 and glycol refrigeration systems plus commercial HVAC." },
      { property:"og:title", content:"Refrigeration & HVAC Services \u2014 Ammonia, CO2, Glycol | Young's Industrial" },
      { property:"og:description", content:"Design, installation and service of industrial ammonia, CO2 and glycol refrigeration systems plus commercial HVAC." },
      { property:"og:type", content:"website" },
      { name:"twitter:card", content:"summary_large_image" },
    ],
  }),
  component: RefrigerationServices,
});
