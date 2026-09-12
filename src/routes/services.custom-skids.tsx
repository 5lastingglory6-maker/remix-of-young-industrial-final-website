import { createFileRoute } from"@tanstack/react-router";
import { useState } from 'react';
import { Link } from '@/components/SiteLink';
import { ArrowRight, CheckCircle2, ChevronDown, Package, Snowflake, Layers, Cog, Gauge, Zap } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import CTABanner from '@/components/CTABanner';
import SectionHeading from '@/components/SectionHeading';

const SOLUTIONS: { icon: LucideIcon; title: string; desc: string; img: string }[] = [
  {
    icon: Snowflake,
    title: 'Refrigeration Skids',
    desc: 'Pre-engineered refrigeration packages piped, wired, and shop-tested before delivery.',
    img: '/__l5e/assets-v1/df437beb-b7d0-4ff4-95ed-1f0ebc92f249/gen-machine-room.jpg',
  },
  {
    icon: Gauge,
    title: 'Compressor Packages',
    desc: 'Skid-mounted compressor units built around Mycom and other trusted equipment brands.',
    img: 'https://images.pexels.com/photos/33514501/pexels-photo-33514501.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Layers,
    title: 'Process Piping Skids',
    desc: 'Pre-fabricated process piping assemblies that reduce field labour and installation time.',
    img: 'https://images.pexels.com/photos/36825977/pexels-photo-36825977.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Package,
    title: 'Pump Skids',
    desc: 'Pump packages with integrated controls, valving, and instrumentation ready for site.',
    img: 'https://images.pexels.com/photos/4440227/pexels-photo-4440227.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Zap,
    title: 'Modular Process Units',
    desc: 'Self-contained modular systems designed to arrive at site ready for fast commissioning.',
    img: 'https://images.pexels.com/photos/29224559/pexels-photo-29224559.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Cog,
    title: 'Utility Systems',
    desc: 'Utility packages including compressed air, cooling water, and HVAC for industrial sites.',
    img: 'https://images.pexels.com/photos/586019/pexels-photo-586019.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const BENEFITS = [
  { n: '01', title: 'Faster Installation', desc: 'Packages arrive assembled and tested — field installation is a fraction of building from components on site.' },
  { n: '02', title: 'Better Quality Control', desc: 'Shop assembly under controlled conditions means tighter quality, better welds, and documented inspections.' },
  { n: '03', title: 'Reduced Site Labour', desc: 'Less field construction means lower overall labour costs and reduced exposure to schedule risk.' },
  { n: '04', title: 'Simplified Commissioning', desc: 'Pre-tested systems significantly reduce start-up time and the risk of field-discovered defects.' },
];

const WHY_POINTS = [
  'Every skid designed around the client\'s specific operational requirements',
  'In-house fabrication, piping, and controls under one roof',
  'Systems inspected and tested prior to shipment wherever applicable',
  'Shipping coordination for remote and regional project locations',
  'Installation and commissioning support available from our team',
];

const FAQS = [
  {
    q: 'Can packages be customized for our specific requirements?',
    a: 'Yes. Every skid is designed around the client\'s operational requirements. We work with your engineering team or develop designs in-house to match your process conditions, footprint, and performance targets.',
  },
  {
    q: 'Do you test systems before delivery?',
    a: 'Yes. Systems are inspected and tested in our shop prior to shipment wherever applicable. This includes pressure testing, functional checks, and controls verification to reduce commissioning surprises.',
  },
  {
    q: 'Can skids be shipped to remote locations?',
    a: 'Yes. We support projects across Atlantic Canada and coordinate shipping logistics for remote or difficult-access locations.',
  },
  {
    q: 'Do you provide installation support?',
    a: 'Yes. Our team can assist with installation, field connections, and commissioning support to ensure the system performs as designed from day one.',
  },
  {
    q: 'What refrigerant types do your refrigeration skids support?',
    a: 'We build packages for ammonia (NH₃), CO₂, glycol secondary loops, and HFC/HFO refrigerants depending on the application and client preference.',
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

function CustomSkids() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/4440227/pexels-photo-4440227.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Pre-fabricated industrial equipment in factory"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 to-navy-900/50" />
        <div className="container-8xl relative flex h-full items-end pb-14">
          <div className="max-w-2xl">
            <p className="eyebrow text-safety-400 mb-3">Services</p>
            <h1 className="text-4xl font-bold text-white md:text-5xl">Custom Skids &amp; Packages</h1>
            <p className="mt-4 text-lg text-navy-100">
              Shop-built, shop-tested equipment packages that arrive at your site ready for installation.
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
                title="Pre-Engineered Packages That Save Time and Cost"
              />
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-steel-600">
                <p>
                  Pre-engineered and shop-tested equipment packages reduce installation time, improve quality control, and simplify commissioning.
                </p>
                <p>
                  Young's Industrial designs and fabricates custom skids and packaged systems that arrive ready for installation, helping clients reduce field labour requirements and accelerate project schedules.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/products" className="btn-secondary">
                  View Products
                </Link>
              </div>
            </div>
            <ImagePlaceholder
              src="https://images.pexels.com/photos/33514501/pexels-photo-33514501.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Industrial stainless steel piping and equipment"
              className="aspect-[4/3] shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-pad bg-steel-50">
        <div className="container-8xl">
          <SectionHeading eyebrow="Solutions" title="Packages We Build" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map(({ icon: Icon, title, desc, img }) => (
              <div key={title} className="group relative overflow-hidden rounded-xl aspect-[4/5]">
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

      {/* Benefits */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <SectionHeading align="center" eyebrow="Key Benefits" title="Why Pre-Fabricate?" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {BENEFITS.map((s) => (
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

      {/* Why Young's */}
      <section className="section-pad bg-steel-50">
        <div className="container-8xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow mb-3">Why Young's</p>
              <h2 className="text-3xl font-bold text-navy-800 md:text-4xl">
                Fabrication, piping, and controls under one roof.
              </h2>
              <p className="mt-5 text-lg text-steel-600">
                By keeping fabrication, pipe work, controls, and testing in-house, we maintain tighter quality control and faster turnaround than contractors who sub out portions of the build.
              </p>
              <ul className="mt-6 space-y-3 text-steel-600">
                {WHY_POINTS.map((point) => (
                  <li key={point} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-safety-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ImagePlaceholder
              src="https://images.pexels.com/photos/29224559/pexels-photo-29224559.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Workers in a manufacturing factory"
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
        title="Ready to Discuss Your Package Requirements?"
        description="Tell us what you need and we'll design a skid or package that fits your site, your schedule, and your budget."
      />
    </>
  );
}

export const Route = createFileRoute("/services/custom-skids")({
  head: () => ({
    meta: [
      { title:"Custom Skids & Packaged Systems | Young's Industrial" },
      { name:"description", content:"Shop-built, factory-tested custom skids and packaged process systems that cut site installation time and risk." },
      { property:"og:title", content:"Custom Skids & Packaged Systems | Young's Industrial" },
      { property:"og:description", content:"Shop-built, factory-tested custom skids and packaged process systems that cut site installation time and risk." },
      { property:"og:type", content:"website" },
      { name:"twitter:card", content:"summary_large_image" },
    ],
  }),
  component: CustomSkids,
});
