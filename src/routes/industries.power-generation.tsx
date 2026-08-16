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
  'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/2566844/pexels-photo-2566844.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/35596450/pexels-photo-35596450.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/4440227/pexels-photo-4440227.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/6416359/pexels-photo-6416359.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/33514501/pexels-photo-33514501.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/29224559/pexels-photo-29224559.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/6509862/pexels-photo-6509862.jpeg?auto=compress&cs=tinysrgb&w=800',
];

const NUMBERED = [
  { n: '01', title: 'Engineering Package Review', desc: 'We review P&IDs, isometrics, and stress analysis documents to plan fabrication and installation sequences.' },
  { n: '02', title: 'Shop Fabrication', desc: 'Heavy-wall spools, structural steel, and pressure components manufactured under documented QC procedures.' },
  { n: '03', title: 'NDT & Material Certification', desc: 'Every pressure component ships with MTRs, weld logs, and NDT results integrated into your project turnover package.' },
  { n: '04', title: 'Emergency Turnaround Response', desc: 'Rapid mobilization of mobile field machining and millwright crews to minimize grid downtime during outages.' },
];

const FOCUS = [
  { title: 'Thermal & Steam Power Plants', desc: 'Main steam lines, turbine bypass loops, extraction piping headers, and boiler safety valve vent spools.' },
  { title: 'Hydroelectric Utilities', desc: 'High-strength penstock access steel plates, structural turbine housing supports, and custom drainage manifold components.' },
  { title: 'Co-Generation Installations', desc: 'Waste-heat recovery piping systems, exhaust gas ducts, and modular processing skids.' },
];

const FAQS = [
  {
    q: 'What material certifications do you provide for high-temperature steam lines?',
    a: 'For high-temperature power piping applications, we provide complete material traceability. Every alloy pipe section, fitting, and flange ships with its corresponding Material Test Report (MTR), confirming the exact chemical and physical properties meet your engineering requirements.',
  },
  {
    q: 'Can your team handle on-site flange facing for leaking high-pressure utility joints?',
    a: 'Yes. Our mobile service trucks are outfitted with portable pneumatic and hydraulic flange-facing machinery. We can deploy directly to your facility during a scheduled drop or emergency outage to remachine warped or pitted flange faces, restoring a perfect sealing surface without removing the pipe network.',
  },
  {
    q: 'Are your welding procedures approved for high-strength Chrome-Moly alloy steels?',
    a: 'Yes. We maintain registered and qualified welding procedures for specialized high-temperature alloy steels including Chrome-Moly lines. These processes require strict pre-heating controls, controlled inter-pass temperatures, and precise Post-Weld Heat Treatment (PWHT) to eliminate stress concentrations and prevent cracking.',
  },
  {
    q: 'How do you support planned outages at thermal power stations?',
    a: 'We pre-fabricate replacement spools, structural components, and pressure parts in our shop ahead of the outage window. Our field crews then deploy during the scheduled drop to perform installation, flange facing, pump overhauls, and alignment work to help you restart on schedule.',
  },
  {
    q: 'What structural certifications apply to your boiler access platforms?',
    a: 'All structural platforms, catwalks, and access steel for power generation environments are fabricated to CWB standards under CSA W47.1 certification. Load-bearing members and connections are designed for constant mechanical vibration and thermal expansion.',
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

function PowerGeneration() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[480px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2566844/pexels-photo-2566844.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Power plant and wind turbines under dramatic sky"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/92 to-navy-900/55" />
        <div className="container-8xl relative flex h-full items-end pb-16">
          <div className="max-w-2xl">
            <p className="eyebrow text-safety-400 mb-3">Industries Served</p>
            <h1 className="text-4xl font-bold text-white md:text-5xl">Power Generation</h1>
            <p className="mt-4 text-lg text-navy-100">
              Certified ASME B31.1 power piping spools, structural infrastructure modifications, and precision field machining engineered for critical utility reliability.
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
              <SectionHeading eyebrow="Our Capabilities" title="High-Pressure Fabrication for Critical Utilities" />
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-steel-600">
                <p>
                  Thermal power facilities rely on high-pressure steam loops, feed-water lines, and condenser networks that face extreme thermal expansion and mechanical loads. Young's Industrial prefabricates these critical components under documented quality programs that meet the standards utility clients demand.
                </p>
                <p>
                  From Chrome-Moly alloy spooling to emergency flange facing, our certified teams help power utilities maintain reliability and minimize outage duration throughout the project lifecycle.
                </p>
              </div>
              <ul className="mt-8 space-y-3 text-steel-600">
                {['ASME B31.1 Power Piping Compliance', 'Chrome-Moly P11/P22/P91 Welding Procedures', 'Full Material Traceability with MTRs', 'Rapid Mobile Field Machining Deployment'].map((c) => (
                  <li key={c} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-safety-500" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ImagePlaceholder
              src="https://images.pexels.com/photos/35596450/pexels-photo-35596450.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Modern power plant with turbines and chimneys"
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
              src="https://images.pexels.com/photos/16047353/pexels-photo-16047353.png?auto=compress&cs=tinysrgb&w=1200"
              alt="High-pressure pipe welding for power generation"
              className="aspect-[4/3] shadow-lg"
            />
            <div>
              <SectionHeading eyebrow="Technical Capabilities" title="Certified for Critical Utility Reliability" />
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-steel-600">
                <p>
                  Our advanced weld procedures cover high-temperature Chrome-Moly alloy steels — P11, P22, and P91 — alongside heavy carbon steels, requiring strict pre-heating controls, controlled inter-pass temperatures, and precise Post-Weld Heat Treatment (PWHT) to eliminate stress concentrations and prevent cracking. All pressure components undergo mandated NDT including complete radiographic tracking, magnetic particle testing, and hydrostatic testing, with full material traceability through MTRs for every pipe section, fitting, and flange.
                </p>
                <p>
                  For structural infrastructure, we manufacture pipe support systems, spring hanger anchors, boiler access platforms, catwalks, turbine enclosures, and safety handrails — all fully compliant with CWB structural standards using deep-penetration multi-layer welds designed for constant load bearing and high vibration environments. When grid downtime is costly, our rapid-response mobile division deploys for high-accuracy flange facing on steam connections, in-situ line boring for generator hinges, precision milling of pump baseplates, and complete overhaul of boiler feed pumps, cooling water pumps, and heavy fans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <SectionHeading align="center" eyebrow="Our Process" title="From Design Review to Outage Completion" />
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
              <SectionHeading eyebrow="Applications" title="Power Generation Focus Areas" />
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
              src="https://images.pexels.com/photos/6416359/pexels-photo-6416359.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Wind generators and electric power towers"
              className="aspect-[4/3] shadow-lg"
            />
          </div>
        </div>
      </section>

      <ProjectsSection
        eyebrow="Related Projects"
        title="Projects in This Sector"
        bg="bg-white"
        slugs={['labrador-ready-mix-muskrat-falls', 'kkv-bull-arm-batch-plant', 'power-generation-cooling-skid']}
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
        title="Working on a Power Generation Project?"
        description="Our ASME B31.1 certified fabrication and mobile field crews are ready to support your next outage or capital project."
      />
    </>
  );
}

export const Route = createFileRoute("/industries/power-generation")({
  head: () => ({
    meta: [
      { title:"Power Generation Industry Solutions | Young's Industrial" },
      { name:"description", content:"Piping, structural and cooling systems for thermal, hydro and renewable power generation facilities." },
      { property:"og:title", content:"Power Generation Industry Solutions | Young's Industrial" },
      { property:"og:description", content:"Piping, structural and cooling systems for thermal, hydro and renewable power generation facilities." },
      { property:"og:type", content:"website" },
      { name:"twitter:card", content:"summary_large_image" },
    ],
  }),
  component: PowerGeneration,
});
