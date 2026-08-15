import { createFileRoute } from"@tanstack/react-router";
import { useState } from 'react';
import { Link } from '@/components/SiteLink';
import { ArrowRight, CheckCircle2, ChevronDown, Factory, Flame, Wrench, Shield } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import CTABanner from '@/components/CTABanner';
import SectionHeading from '@/components/SectionHeading';

const SERVICES: { icon: LucideIcon; title: string; desc: string; img: string }[] = [
  {
    icon: Factory,
    title: 'Structural Steel & Pipe Fabrication',
    desc: 'CWB-certified structural steel and fully documented pipe spools for offshore modules, platforms, and process systems.',
    img: 'https://images.pexels.com/photos/35383408/pexels-photo-35383408.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Flame,
    title: 'Offshore Support Fabrication',
    desc: 'Custom-fabricated components for energy-sector projects built to demanding specifications.',
    img: 'https://images.pexels.com/photos/3192669/pexels-photo-3192669.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Wrench,
    title: 'Equipment Installation',
    desc: 'Rigging, fitting, and equipment placement by certified millwrights and pipefitters.',
    img: 'https://images.pexels.com/photos/14539151/pexels-photo-14539151.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Shield,
    title: 'Shutdown Support & Mechanical Maintenance',
    desc: 'Rapid turnaround mobilization and ongoing mechanical maintenance to keep critical offshore equipment running safely.',
    img: 'https://images.pexels.com/photos/9242809/pexels-photo-9242809.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const CERTS = [
  'ISO-9001-2015 quality management certification',
  'Canadian Welding Bureau (CWB) certified to CSA W47.1',
  'COR-certified safety program with full incident reporting',
  'Full material traceability and NDT documentation on request',
  'Experience supporting major energy-sector projects across Atlantic Canada',
];

const NUMBERED = [
  { n: '01', title: 'Shop Fabrication', desc: 'Structural steel, pipe spools, and custom components fabricated in our fully equipped Dartmouth facility.' },
  { n: '02', title: 'Quality Control', desc: 'Material traceability, weld documentation, and third-party inspection available on every project.' },
  { n: '03', title: 'Field Installation', desc: 'Certified welding and millwright crews available for on-site installation across Atlantic Canada.' },
  { n: '04', title: 'Shutdown Support', desc: 'Rapid mobilization to support planned maintenance outages, minimizing downtime for energy clients.' },
];

const FAQS = [
  {
    q: 'Do you support large industrial projects?',
    a: 'Yes. We have supported major infrastructure and industrial developments throughout Atlantic Canada, including offshore fabrication contracts and large-scale plant projects.',
  },
  {
    q: 'Can you provide site services?',
    a: 'Yes. We offer both shop fabrication and field support. Our certified crews mobilize to project sites across the region.',
  },
  {
    q: 'Do you work under strict quality standards?',
    a: 'Yes. We maintain recognized quality and welding certifications including ISO-9001-2015 and CWB certification to CSA W47.1, with full material traceability available.',
  },
  {
    q: 'Can you support shutdowns and turnarounds?',
    a: 'Yes. We regularly assist clients during planned outages and maintenance events, providing rapid fabrication, installation, and mechanical support to keep projects on schedule.',
  },
  {
    q: 'What types of structural steel work do you handle?',
    a: 'We fabricate platforms, mezzanines, access steel, offshore modules, and process supports. All structural steel work is completed by CWB-certified welders with full documentation.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-steel-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-heading text-base font-bold text-navy-800">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-safety-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48 pb-5' : 'max-h-0'}`}
      >
        <p className="text-steel-600">{a}</p>
      </div>
    </div>
  );
}

function OffshoreOilGas() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3192662/pexels-photo-3192662.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Offshore oil platform in the North Sea"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 to-navy-900/50" />
        <div className="container-8xl relative flex h-full items-end pb-14">
          <div className="max-w-2xl">
            <p className="eyebrow text-safety-400 mb-3">Services</p>
            <h1 className="text-4xl font-bold text-white md:text-5xl">Offshore &amp; Oil &amp; Gas</h1>
            <p className="mt-4 text-lg text-navy-100">
              Fabrication, installation, and maintenance services for demanding energy-sector environments.
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
              <SectionHeading
                eyebrow="Our Capabilities"
                title="Built for the Energy Sector's Demands"
              />
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-steel-600">
                <p>
                  Young's Industrial supports offshore and energy-sector clients with fabrication, installation, maintenance, and site services designed for demanding operating environments.
                </p>
                <p>
                  From structural steel fabrication to specialized industrial support services, we help energy projects maintain safety, reliability, and productivity throughout the full project lifecycle.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/services/fabrication" className="btn-secondary">
                  Fabrication Services
                </Link>
              </div>
            </div>
            <ImagePlaceholder
              src="https://images.pexels.com/photos/15973758/pexels-photo-15973758.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Offshore oil rig at sunset"
              className="aspect-[4/3] shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad bg-steel-50">
        <div className="container-8xl">
          <SectionHeading eyebrow="Services" title="What We Provide" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ icon: Icon, title, desc, img }) => (
              <div key={title} className="group relative overflow-hidden rounded-xl aspect-[3/4]">
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

      {/* How We Work */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <SectionHeading align="center" eyebrow="Our Process" title="From Shop to Site" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {NUMBERED.map((s) => (
              <div
                key={s.n}
                className="group flex gap-6 rounded-xl border border-steel-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="font-heading text-4xl font-bold text-safety-500/80 transition-colors group-hover:text-safety-500 shrink-0">
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

      {/* Certifications */}
      <section className="section-pad bg-steel-50">
        <div className="container-8xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow mb-3">Certifications & Standards</p>
              <h2 className="text-3xl font-bold text-navy-800 md:text-4xl">
                Certified to the standards that matter.
              </h2>
              <p className="mt-5 text-lg text-steel-600">
                The energy sector demands the highest levels of quality, traceability, and safety. Our team maintains the certifications and documentation practices required by major energy clients.
              </p>
              <ul className="mt-6 space-y-3 text-steel-600">
                {CERTS.map((c) => (
                  <li key={c} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-safety-500" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ImagePlaceholder
              src="https://images.pexels.com/photos/19768241/pexels-photo-19768241.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Offshore platform industrial facility"
              className="aspect-[4/3] shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <div className="mx-auto max-w-3xl">
            <SectionHeading align="center" eyebrow="FAQ" title="Common Questions" />
            <div className="mt-12 rounded-xl border border-steel-200 bg-white px-8">
              {FAQS.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Working on an Offshore or Energy Project?"
        description="Our certified fabrication and field teams are ready to support your next project from shop to site."
      />
    </>
  );
}

export const Route = createFileRoute("/services/offshore-oil-gas")({
  head: () => ({
    meta: [
      { title:"Offshore & Oil & Gas Services | Young's Industrial" },
      { name:"description", content:"Offshore fabrication, module refits and refrigeration support built to marine and oil & gas certification requirements." },
      { property:"og:title", content:"Offshore & Oil & Gas Services | Young's Industrial" },
      { property:"og:description", content:"Offshore fabrication, module refits and refrigeration support built to marine and oil & gas certification requirements." },
      { property:"og:type", content:"website" },
      { name:"twitter:card", content:"summary_large_image" },
    ],
  }),
  component: OffshoreOilGas,
});
