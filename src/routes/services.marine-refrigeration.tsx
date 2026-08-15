import { createFileRoute } from"@tanstack/react-router";
import { useState } from 'react';
import { Link } from '@/components/SiteLink';
import { ArrowRight, CheckCircle2, ChevronDown, Ship, Wrench, Thermometer, Snowflake, Anchor, Settings } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import CTABanner from '@/components/CTABanner';
import SectionHeading from '@/components/SectionHeading';

const SERVICES: { icon: LucideIcon; title: string; desc: string; img: string }[] = [
  {
    icon: Ship,
    title: 'Vessel Refrigeration & System Modernization',
    desc: 'Design, installation, upgrades, and retrofits that improve the performance and reliability of marine refrigeration systems.',
    img: 'https://images.pexels.com/photos/37795529/pexels-photo-37795529.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Anchor,
    title: 'Ice Making & Fish Hold Cooling',
    desc: 'Integrated ice-making and chilled seawater systems designed to protect catch quality on board and at the dock.',
    img: 'https://images.pexels.com/photos/23503522/pexels-photo-23503522.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Snowflake,
    title: 'Plate Freezer Installations',
    desc: 'High-capacity plate freezer packages for on-vessel processing operations.',
    img: '/__l5e/assets-v1/0669bb9a-3e84-491e-91ce-97b8db15a49c/gen-plate-freezer.jpg',
  },
  {
    icon: Settings,
    title: 'Refrigeration Piping',
    desc: 'Custom stainless and copper marine piping fabricated and installed by our team.',
    img: 'https://images.pexels.com/photos/33514501/pexels-photo-33514501.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const WHY_POINTS = [
  'Experience in both industrial refrigeration and marine operations',
  'Custom piping fabrication completed in our own shop',
  'Systems designed for harsh Atlantic marine conditions',
  'Full service from design and installation through ongoing maintenance',
  'Emergency repair response for vessels in port',
];

const FAQS = [
  {
    q: 'Can you retrofit older vessels?',
    a: 'Yes. We regularly modernize existing marine refrigeration systems, bringing older equipment up to current performance and efficiency standards without requiring a full replacement.',
  },
  {
    q: 'Do you support fishing vessels specifically?',
    a: 'Yes. Fishing vessel refrigeration — including RSW systems, fish hold cooling, and plate freezers — is one of our core service areas. We understand the demands of commercial fishing operations.',
  },
  {
    q: 'Can you service systems while vessels are docked?',
    a: 'Yes. We coordinate closely with vessel operators and port schedules to carry out maintenance and repair with minimal disruption to operations.',
  },
  {
    q: 'Do you provide custom piping systems?',
    a: 'Yes. Our fabrication division produces custom marine piping solutions in stainless steel, copper, and carbon steel to suit each vessel\'s layout and requirements.',
  },
  {
    q: 'Do you handle emergency repairs?',
    a: 'Yes. Our service team is available to respond to emergency refrigeration failures for vessels operating in Atlantic Canada.',
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

function MarineRefrigeration() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/37795529/pexels-photo-37795529.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Fishing vessels at dock"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 to-navy-900/50" />
        <div className="container-8xl relative flex h-full items-end pb-14">
          <div className="max-w-2xl">
            <p className="eyebrow text-safety-400 mb-3">Services</p>
            <h1 className="text-4xl font-bold text-white md:text-5xl">Marine Refrigeration</h1>
            <p className="mt-4 text-lg text-navy-100">
              Refrigeration systems built for Atlantic Canada's marine environment — reliable, durable, and field-serviceable.
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
                title="Refrigeration Built for the Sea"
              />
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-steel-600">
                <p>
                  Operating in Atlantic Canada's marine environment requires refrigeration systems built to withstand harsh conditions, heavy workloads, and continuous operation.
                </p>
                <p>
                  Young's Industrial provides refrigeration solutions for fishing vessels, seafood processors, and marine operators who depend on reliable cooling systems to protect product quality and maintain operational efficiency.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/services/refrigeration" className="btn-secondary">
                  Refrigeration & HVAC
                </Link>
              </div>
            </div>
            <ImagePlaceholder
              src="https://images.pexels.com/photos/5321429/pexels-photo-5321429.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Fisherman working at the waterfront"
              className="aspect-[4/3] shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad bg-steel-50">
        <div className="container-8xl">
          <SectionHeading eyebrow="Services" title="What We Provide" />
          <p className="mt-5 w-full text-lg text-steel-600">
            Every refrigeration project is designed around your vessel, facility, available space, and operating requirements. Before fabrication or installation begins, our engineers survey the site, review existing equipment, identify potential challenges, and develop a practical system suited to the conditions. We present the proposed design for your confirmation, then proceed with careful installation and testing once approved. From the initial survey through completion, we keep you informed at the key stages while delivering a reliable system built for quality performance and straightforward maintenance.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ icon: Icon, title, desc, img }) => (
              <div key={title} className="group relative overflow-hidden rounded-xl aspect-[3/4]">
                <img
                  src={img}
                  alt={title}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105 [filter:contrast(1.15)_saturate(1.2)_brightness(1.02)]"
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

      {/* Why Choose Young's */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ImagePlaceholder
              src="https://images.pexels.com/photos/23503522/pexels-photo-23503522.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Fishing vessel at sea"
              className="aspect-[4/3] shadow-lg"
            />
            <div>
              <p className="eyebrow mb-3">Why Young's</p>
              <h2 className="text-3xl font-bold text-navy-800 md:text-4xl">
                Practical solutions for real vessel conditions.
              </h2>
              <p className="mt-5 text-lg text-steel-600">
                Our experience in both industrial refrigeration and marine operations allows us to deliver practical solutions designed for real-world vessel conditions — not just what looks good on paper.
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
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-steel-50">
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
        title="Need Marine Refrigeration Support?"
        description="From vessel retrofits to new installations, our team is ready to help keep your operations running."
      />
    </>
  );
}

export const Route = createFileRoute("/services/marine-refrigeration")({
  head: () => ({
    meta: [
      { title:"Marine Refrigeration \u2014 Vessel RSW & Freezer Systems | Young's Industrial" },
      { name:"description", content:"Marine refrigeration for fishing fleets and commercial vessels: RSW chillers, plate freezers, blast freezers and dockside service." },
      { property:"og:title", content:"Marine Refrigeration \u2014 Vessel RSW & Freezer Systems | Young's Industrial" },
      { property:"og:description", content:"Marine refrigeration for fishing fleets and commercial vessels: RSW chillers, plate freezers, blast freezers and dockside service." },
      { property:"og:type", content:"website" },
      { name:"twitter:card", content:"summary_large_image" },
    ],
  }),
  component: MarineRefrigeration,
});
