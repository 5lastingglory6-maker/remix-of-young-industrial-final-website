import { createFileRoute } from"@tanstack/react-router";
import { useState } from 'react';
import { Link } from '@/components/SiteLink';
import { ArrowRight, CheckCircle2, ChevronDown, ClipboardList, Wrench, Settings } from 'lucide-react';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import CTABanner from '@/components/CTABanner';
import SectionHeading from '@/components/SectionHeading';

const SERVICES: { icon: typeof ClipboardList; title: string; shortDesc: string; fullDesc: string; img: string }[] = [
  {
    icon: ClipboardList,
    title: 'Preventive Maintenance & Equipment Inspection',
    shortDesc: 'Scheduled maintenance plans and detailed condition assessments to keep your equipment reliable and compliant.',
    fullDesc: 'We develop preventive maintenance programs tailored to your equipment, service history, and production calendar. Our technicians perform routine inspections, lubrication, seal and belt replacements, vibration analysis, and refrigerant leak checks. We also deliver formal equipment inspection reports that document condition, flag developing issues, and guide maintenance decisions before small problems become costly failures.',
    img: 'https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Settings,
    title: 'System Optimization & Controls Upgrades',
    shortDesc: 'Performance tuning and modernization of control systems to improve efficiency, reliability, and remote visibility.',
    fullDesc: 'We analyze system performance, identify energy waste, and tune refrigeration and mechanical systems for better output. Our controls upgrades replace aging relays, switches, and PLCs with modern automation, remote monitoring, and alarm systems. Whether you need a full retrofit or a targeted improvement, we help extend equipment life while reducing operating costs.',
    img: 'https://images.pexels.com/photos/29181490/pexels-photo-29181490.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Wrench,
    title: 'Mechanical Repairs & Emergency Response',
    shortDesc: 'Rapid-response repairs and skilled millwright work on compressors, pumps, piping, and process equipment.',
    fullDesc: 'When equipment fails, our service team mobilizes quickly to diagnose the issue and restore operation with minimal downtime. We handle mechanical repairs, compressor and pump rebuilds, pipefitting, welding, and millwright work across refrigeration, industrial, and marine systems. Emergency support is available for critical failures, and we service equipment installed by any contractor.',
    img: 'https://images.pexels.com/photos/29224559/pexels-photo-29224559.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const NUMBERED = [
  { n: '01', title: 'Assessment', desc: 'We evaluate your current equipment condition, service history, and operational requirements to build an appropriate maintenance plan.' },
  { n: '02', title: 'Planned Maintenance', desc: 'Scheduled visits aligned with your production calendar keep equipment in top condition without disrupting operations.' },
  { n: '03', title: 'Rapid Response', desc: 'When unexpected issues arise, our service team mobilizes quickly to diagnose and restore equipment to service.' },
  { n: '04', title: 'Long-Term Partnership', desc: 'We track equipment history over time, allowing us to identify trends and address issues before they become failures.' },
];

const WHY_POINTS = [
  'Regular inspections identify issues before they cause unexpected failures',
  'Planned maintenance extends equipment life and protects capital investment',
  'Emergency response available for critical equipment issues',
  'We service equipment installed by any contractor, not just our own',
  'Refrigeration, mechanical, marine, and process equipment expertise',
];

const FAQS = [
  {
    q: 'Do you offer scheduled maintenance programs?',
    a: 'Yes. We develop maintenance plans tailored to your operational requirements, equipment type, and service history. Programs can be monthly, quarterly, or annual depending on what your equipment needs.',
  },
  {
    q: 'Can you respond to emergencies?',
    a: 'Yes. Emergency service support is available for critical equipment issues. Our team mobilizes quickly to diagnose and restore equipment, minimizing the impact of unplanned downtime.',
  },
  {
    q: 'Do you service equipment installed by other contractors?',
    a: 'Yes. We support a wide range of industrial equipment regardless of who installed it. If you need a qualified team to service or repair your equipment, we can help.',
  },
  {
    q: 'How does preventive maintenance reduce costs?',
    a: 'Regular inspections identify developing issues early — worn seals, abnormal vibration, refrigerant leaks — before they cause a major failure. Catching problems early is almost always less expensive than emergency repairs and lost production.',
  },
  {
    q: 'What types of equipment do you service?',
    a: 'We service refrigeration systems, industrial mechanical equipment, marine refrigeration and piping, controls systems, compressors, pumps, and process equipment across a wide range of industries.',
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

function ServiceCards() {
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
      {SERVICES.map(({ icon: Icon, title, shortDesc, fullDesc, img }, index) => {
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

function ServiceMaintenance() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/9242809/pexels-photo-9242809.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Technicians working in a modern workshop"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 to-navy-900/50" />
        <div className="container-8xl relative flex h-full items-end pb-14">
          <div className="max-w-2xl">
            <p className="eyebrow text-safety-400 mb-3">Services</p>
            <h1 className="text-4xl font-bold text-white md:text-5xl">Service &amp; Maintenance</h1>
            <p className="mt-4 text-lg text-navy-100">
              Proactive maintenance and rapid response support to maximize uptime and protect your equipment investment.
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
                title="Preventing Failures Before They Happen"
              />
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-steel-600">
                <p>
                  Reliable equipment requires proactive maintenance. Young's Industrial provides preventive maintenance, troubleshooting, repairs, and system upgrades that help clients maximize uptime and extend equipment life.
                </p>
                <p>
                  Our service teams support refrigeration systems, industrial equipment, fabrication assets, marine systems, and mechanical infrastructure across a wide range of industries throughout Atlantic Canada.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/services/refrigeration" className="btn-secondary">
                  Refrigeration Services
                </Link>
              </div>
            </div>
            <ImagePlaceholder
              src="https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Electrician working on industrial control panel"
              className="aspect-[4/3] shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad bg-steel-50">
        <div className="container-8xl">
          <SectionHeading eyebrow="Services" title="What We Provide" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <ServiceCards />
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <SectionHeading align="center" eyebrow="Our Approach" title="A Maintenance Partnership Built for the Long Term" />
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

      {/* Why Young's */}
      <section className="section-pad bg-steel-50">
        <div className="container-8xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ImagePlaceholder
              src="https://images.pexels.com/photos/7565157/pexels-photo-7565157.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Technician inspecting industrial equipment"
              className="aspect-[4/3] shadow-lg"
            />
            <div>
              <p className="eyebrow mb-3">Why Young's</p>
              <h2 className="text-3xl font-bold text-navy-800 md:text-4xl">
                Prevent failures. Protect operations.
              </h2>
              <p className="mt-5 text-lg text-steel-600">
                Our service philosophy focuses on preventing failures before they occur. Through planned maintenance and rapid response support, we help customers avoid costly downtime and protect critical operations.
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
        title="Let's Talk About Your Maintenance Needs"
        description="Whether you need a scheduled maintenance program or emergency support, our team is ready to help."
      />
    </>
  );
}

export const Route = createFileRoute("/services/service-maintenance")({
  head: () => ({
    meta: [
      { title:"Service & Maintenance \u2014 24/7 Emergency Response | Young's Industrial" },
      { name:"description", content:"Preventive maintenance programs, compliance inspections and 24/7 emergency response for industrial refrigeration and mechanical systems." },
      { property:"og:title", content:"Service & Maintenance \u2014 24/7 Emergency Response | Young's Industrial" },
      { property:"og:description", content:"Preventive maintenance programs, compliance inspections and 24/7 emergency response for industrial refrigeration and mechanical systems." },
      { property:"og:type", content:"website" },
      { name:"twitter:card", content:"summary_large_image" },
    ],
  }),
  component: ServiceMaintenance,
});
