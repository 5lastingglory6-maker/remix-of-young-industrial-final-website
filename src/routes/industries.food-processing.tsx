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
  '/__l5e/assets-v1/df437beb-b7d0-4ff4-95ed-1f0ebc92f249/gen-machine-room.jpg',
  'https://images.pexels.com/photos/5953714/pexels-photo-5953714.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/5321429/pexels-photo-5321429.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/5532664/pexels-photo-5532664.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/2098605/pexels-photo-2098605.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/33514501/pexels-photo-33514501.jpeg?auto=compress&cs=tinysrgb&w=800',
];

const NUMBERED = [
  { n: '01', title: 'Sanitary Design Review', desc: 'We review your process flow diagrams and floor layout to engineer components with sloped drainage surfaces and zero exposed threads.' },
  { n: '02', title: 'High-Purity Fabrication', desc: 'TIG welding with Argon backing ensures flawless root penetration on all product contact surfaces in 304 and 316L stainless.' },
  { n: '03', title: 'Surface Treatment', desc: 'Weld beads are polished smooth and all fabrications undergo pickling and passivation to restore full corrosion resistance.' },
  { n: '04', title: 'Field Installation & Commissioning', desc: 'Mobile crews install and modify piping and structural systems under strict clean protocols during scheduled maintenance windows.' },
];

const FOCUS = [
  { title: 'Seafood & Aquaculture Processing', desc: 'High-durability stainless wash lines, sorting conveyors, and automated processing station structural frameworks.' },
  { title: 'Beverage & Dairy Facilities', desc: 'Insulated bulk storage tank components, automated valve matrices, and high-velocity fluid product loops.' },
  { title: 'Industrial Clean-In-Place (CIP) Skids', desc: 'Prefabricated modular chemical and clean-water delivery loops built to handle high-temperature sanitation washes.' },
];

const FAQS = [
  {
    q: 'How does Young\'s Industrial comply with CFIA and FDA food safety standards?',
    a: 'We construct all food processing equipment and piping using materials and finishes that prevent product contamination. Our welding and polishing processes strictly follow sanitary engineering designs, ensuring all product contact surfaces feature a smooth finish free of pits, cracks, or crevices.',
  },
  {
    q: 'What is the benefit of post-weld pickling and passivation for food-grade equipment?',
    a: 'Welding alters the molecular structure of stainless steel and depletes its surface chromium. We apply chemical pickling and passivation treatments to all completed fabrications to remove weld oxides, strip embedded iron, and restore the natural corrosion-resistant oxide layer, preventing future rust formation.',
  },
  {
    q: 'Do you fabricate custom stainless steel conveyor structures for seafood processors?',
    a: 'Yes. We specialize in custom marine and land-based seafood processing hardware. We manufacture complete stainless steel conveyor frames, draining beds, and sorting tables engineered using open-profile washdown designs that allow your sanitation crews to clean the equipment rapidly.',
  },
  {
    q: 'What welding process do you use for sanitary process lines?',
    a: 'All sanitary process piping is 100% orbitally or manually TIG (GTAW) welded utilizing high-purity Argon gas backing to ensure flawless root penetration. This creates smooth, crevice-free internal weld surfaces that prevent bacteria harboring and allow effective clean-in-place sanitation.',
  },
  {
    q: 'Can you support modifications during a scheduled CIP cleaning window?',
    a: 'Yes. Our mobile crews are trained to execute repairs and modifications under strict clean-room protocols. We handle on-site stainless steel pipe rerouting, structural safety alterations, and valve manifold integrations during scheduled cleaning or maintenance shutdowns to minimize production losses.',
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

function FoodProcessing() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[480px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/7598915/pexels-photo-7598915.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Stainless steel tanks in a modern food processing facility"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/92 to-navy-900/55" />
        <div className="container-8xl relative flex h-full items-end pb-16">
          <div className="max-w-2xl">
            <p className="eyebrow text-safety-400 mb-3">Industries Served</p>
            <h1 className="text-4xl font-bold text-white md:text-5xl">Sanitary Food Processing</h1>
            <p className="mt-4 text-lg text-navy-100">
              Ultra-smooth, bacteria-resistant stainless steel process piping and custom equipment engineered to meet the strictest food safety and hygiene standards.
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
              <SectionHeading eyebrow="Our Capabilities" title="High-Purity Fabrication for Food Safety" />
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-steel-600">
                <p>
                  Young's Industrial handles high-purity process lines designed for fluid food products, ingredients, clean-in-place (CIP) loops, and automated processing. Our TIG welding protocols and surface refinement processes ensure every product contact surface is free of pits and crevices.
                </p>
                <p>
                  From custom conveyor frames for seafood processors to CIP skid modules for beverage facilities, we engineer and build equipment tailored to the exact spatial layout of your plant floor.
                </p>
              </div>
              <ul className="mt-8 space-y-3 text-steel-600">
                {['100% TIG Welded with Argon Backing', '304 & 316L Sanitary Grade Stainless Steel', 'CFIA & FDA Compliant Finishes', 'Pickling & Passivation on All Welds'].map((c) => (
                  <li key={c} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-safety-500" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ImagePlaceholder
              src="https://images.pexels.com/photos/5953714/pexels-photo-5953714.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Worker in protective gear in a modern dairy factory"
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
              alt="Sanitary TIG welding on stainless steel process piping"
              className="aspect-[4/3] shadow-lg"
            />
            <div>
              <SectionHeading eyebrow="Technical Capabilities" title="Sanitary Fabrication to CFIA &amp; FDA Standards" />
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-steel-600">
                <p>
                  All sanitary process piping is 100% orbitally or manually TIG (GTAW) welded using high-purity Argon gas backing for flawless root penetration, with internal and external weld beads polished and blended to eliminate microscopic crevices where bacteria can harbor. Our hygiene-first designs feature rounded tube frames, sloped surfaces for optimal fluid drainage, and zero exposed threads or lap joints — ensuring all product contact surfaces are free of pits, cracks, or crevices in strict accordance with CFIA and FDA food safety standards.
                </p>
                <p>
                  Beyond piping, we engineer custom inspection tables, processing chutes, stainless steel product hoppers, conveyor frames, wash stations, and safety guards tailored to your plant floor layout. Our mobile crews execute repairs under strict clean-room protocols — including shaft machining and rebuilding of sanitary positive displacement pumps, mixers, and homogenizers, plus on-site pipe rerouting and valve manifold integrations during scheduled shutdowns. Post-weld pickling and passivation removes weld oxides, strips embedded iron, and restores the natural corrosion-resistant oxide layer to prevent future rust formation on all completed fabrications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <SectionHeading align="center" eyebrow="Our Process" title="From Sanitary Design to Clean-Room Installation" />
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
              <SectionHeading eyebrow="Applications" title="Food Processing Focus Areas" />
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
              src="https://images.pexels.com/photos/5532664/pexels-photo-5532664.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Automated beverage packaging in a modern factory"
              className="aspect-[4/3] shadow-lg"
            />
          </div>
        </div>
      </section>

      <ProjectsSection
        eyebrow="Related Projects"
        title="Projects in This Sector"
        bg="bg-white"
        slugs={['food-processing-cip-skid', 'dartmouth-cold-storage', 'fishing-vessel-refrigeration']}
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
        title="Building Sanitary Equipment for Your Facility?"
        description="Our TIG-certified team fabricates food-grade piping, custom conveyors, and CIP skids to CFIA and FDA compliant standards."
      />
    </>
  );
}

export const Route = createFileRoute("/industries/food-processing")({
  head: () => ({
    meta: [
      { title:"Food Processing Industry Solutions | Young's Industrial" },
      { name:"description", content:"Sanitary fabrication and industrial refrigeration for food processing plants, cold storage and freezing operations." },
      { property:"og:title", content:"Food Processing Industry Solutions | Young's Industrial" },
      { property:"og:description", content:"Sanitary fabrication and industrial refrigeration for food processing plants, cold storage and freezing operations." },
      { property:"og:type", content:"website" },
      { name:"twitter:card", content:"summary_large_image" },
    ],
  }),
  component: FoodProcessing,
});
