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
  'https://images.pexels.com/photos/8803230/pexels-photo-8803230.jpeg?auto=compress&cs=tinysrgb&w=800',
  '/gen-fab-shop.jpg',
  'https://images.pexels.com/photos/29257462/pexels-photo-29257462.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/27354192/pexels-photo-27354192.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/36825977/pexels-photo-36825977.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/6509862/pexels-photo-6509862.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/14539151/pexels-photo-14539151.jpeg?auto=compress&cs=tinysrgb&w=800',
];

const NUMBERED = [
  { n: '01', title: 'Shutdown Planning', desc: 'We coordinate with your maintenance team to plan fabrication scopes that align precisely with your turnaround window.' },
  { n: '02', title: 'Shop Prefabrication', desc: 'Spools and structural components built in controlled shop conditions reduce field labor and speed up installation.' },
  { n: '03', title: 'On-Site Deployment', desc: 'Cross-trained Millwrights, Pipefitters, and CWB Welders deploy mobile trucks directly to your mill 24/7.' },
  { n: '04', title: 'Machine Line Restoration', desc: 'Pump overhauls, shaft machining, and precision re-alignment restore processing lines to factory tolerances.' },
];

const FOCUS = [
  { title: 'Chemical Recovery & Digesting Loops', desc: 'Stainless steel piping spools, chemical liquor line components, and specialized valve manifolds.' },
  { title: 'Stock Preparation & Material Conveyance', desc: 'High-wear raw material chutes, custom conveyor structures, and processing line framing.' },
  { title: 'Plant Utilities & Boiler Houses', desc: 'High-pressure steam pipe spooling built to ASME B31.1 power piping requirements.' },
];

const FAQS = [
  {
    q: 'How do you protect stainless steel fabrication from carbon contamination for paper mill applications?',
    a: 'We enforce strict material segregation protocols within our facility. Stainless steel fabrication, cutting, and welding are handled in a designated shop environment with dedicated tooling to completely eliminate carbon steel cross-contamination and preserve the full corrosion resistance of the alloy.',
  },
  {
    q: 'Can you support emergency mid-run breakdowns or scheduled annual mill shutdowns?',
    a: 'Yes. Our teams of cross-trained Millwrights, Pipefitters, and CWB Welders specialize in turnaround windows. We deploy fully equipped mobile welding and field machining trucks directly to your mill to execute 24/7 on-site maintenance, component replacements, and machine line restorations.',
  },
  {
    q: 'What specifications do you follow for high-wear pulp conveyance components?',
    a: 'We build material handling assemblies using heavy-wall designs and abrasion-resistant materials like high-manganese steel. All structural framing and supports are fully welded to meet CWB standards, ensuring they handle the continuous shock loads of raw processing lines.',
  },
  {
    q: 'What alloys do you recommend for chemical liquor piping in kraft pulp mills?',
    a: 'For aggressive chemical environments including white and black liquor loops, we typically specify 316L Stainless Steel or Duplex Stainless grades. These alloys provide superior resistance to chloride pitting and the high-temperature caustic conditions common in kraft process chemistry.',
  },
  {
    q: 'Do you fabricate custom conveyor and chute structures for processing lines?',
    a: 'Yes. We manufacture custom conveyor structures, material chutes, and processing line framing built from abrasion-resistant steels and certified structural profiles. All fabrication is documented to CWB standards and sized to your existing line layout.',
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

function PulpAndPaper() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[480px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/29257462/pexels-photo-29257462.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Industrial pulp and paper mill plant"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/92 to-navy-900/55" />
        <div className="container-8xl relative flex h-full items-end pb-16">
          <div className="max-w-2xl">
            <p className="eyebrow text-safety-400 mb-3">Industries Served</p>
            <h1 className="text-4xl font-bold text-white md:text-5xl">Pulp &amp; Paper Processing</h1>
            <p className="mt-4 text-lg text-navy-100">
              Heavy-duty fabrication and maintenance for pulp and paper mills — stainless steel piping, custom millwright services, and rapid-response shutdown support.
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
              <SectionHeading eyebrow="Our Capabilities" title="Built for the Chemical Demands of Paper Mills" />
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-steel-600">
                <p>
                  Pulp and paper processing involves aggressive chemical environments, high temperatures, and abrasive slurries. Young's Industrial prefabricates high-durability piping systems and builds wear-resistant structural components designed to withstand these harsh conditions.
                </p>
                <p>
                  Our cross-trained millwrights and pipefitters specialize in turnaround windows — deploying to your mill to execute repairs, machine restorations, and installations with minimal production impact.
                </p>
              </div>
              <ul className="mt-8 space-y-3 text-steel-600">
                {['ASME B31.3 & B31.1 Piping Compliance', 'CWB-Certified Structural Welding', 'Strict Stainless Steel Segregation Protocols', '24/7 Emergency Shutdown Deployment'].map((c) => (
                  <li key={c} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-safety-500" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ImagePlaceholder
              src="https://images.pexels.com/photos/8803230/pexels-photo-8803230.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Steel mill industrial processing"
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
              src="https://images.pexels.com/photos/8803230/pexels-photo-8803230.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Heavy-duty industrial steel mill processing"
              className="aspect-[4/3] shadow-lg"
            />
            <div>
              <SectionHeading eyebrow="Technical Capabilities" title="Built for Harsh Chemical Environments" />
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-steel-600">
                <p>
                  Our alloy specialization covers 316L Stainless, Duplex, and high-nickel alloys chosen to eliminate chemical pitting and erosion in aggressive kraft process environments, with all spools shop-fabricated to ASME B31.3 specifications and high-pressure steam lines built to ASME B31.1. Strict material segregation protocols with dedicated tooling prevent carbon steel cross-contamination and preserve full corrosion resistance.
                </p>
                <p>
                  Beyond piping, we manufacture and repair conveyor chutes, custom hoppers, exhaust ducting, and chemical tank internals using high-manganese abrasion-resistant steels and heavy carbon structural steel certified to CWB standards. Our millwright services extend to full pump overhauls — tear-down, shaft machining, bushing replacement, and dynamic balancing of process pumps, chemical liquor pumps, and agitators — complemented by laser-guided shaft and roller alignment to minimize vibration, reduce bearing wear, and optimize power efficiency across the mill.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <SectionHeading align="center" eyebrow="Our Process" title="From Shop Fabrication to Mill Restart" />
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
              <SectionHeading eyebrow="Applications" title="Pulp &amp; Paper Focus Areas" />
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
              src="/gen-fab-shop.jpg"
              alt="Pulp and paper industrial processing plant"
              className="aspect-[4/3] shadow-lg"
            />
          </div>
        </div>
      </section>

      <ProjectsSection
        eyebrow="Related Projects"
        title="Projects in This Sector"
        bg="bg-white"
        slugs={['vytrell-voiseys-bay', 'pulp-mill-pipe-spooling', 'mining-pump-rebuild']}
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
        title="Supporting Your Next Mill Shutdown?"
        description="Our certified teams of Millwrights, Pipefitters, and Welders mobilize directly to your facility to keep turnaround windows tight."
      />
    </>
  );
}

export const Route = createFileRoute("/industries/pulp-and-paper")({
  head: () => ({
    meta: [
      { title:"Pulp & Paper Industry Solutions | Young's Industrial" },
      { name:"description", content:"Mill-hardened fabrication and process cooling for pulp and paper operations, engineered for shutdown-window schedules." },
      { property:"og:title", content:"Pulp & Paper Industry Solutions | Young's Industrial" },
      { property:"og:description", content:"Mill-hardened fabrication and process cooling for pulp and paper operations, engineered for shutdown-window schedules." },
      { property:"og:type", content:"website" },
      { name:"twitter:card", content:"summary_large_image" },
    ],
  }),
  component: PulpAndPaper,
});
