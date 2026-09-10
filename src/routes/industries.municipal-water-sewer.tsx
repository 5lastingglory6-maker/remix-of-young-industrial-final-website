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
  'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/12726229/pexels-photo-12726229.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/36926327/pexels-photo-36926327.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/35425761/pexels-photo-35425761.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/35425762/pexels-photo-35425762.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/4440227/pexels-photo-4440227.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800',
  '/gen-fab-shop.jpg',
];

const NUMBERED = [
  { n: '01', title: 'Drawing Review', desc: 'Our team works directly from your provided DWG, DXF, or PDF engineering drawings to plan exact fabrication requirements.' },
  { n: '02', title: 'Controlled Shop Fabrication', desc: 'Spools and structural components built off-site to avoid cramped mechanical rooms and deliver job-ready assemblies.' },
  { n: '03', title: 'Surface Treatment', desc: 'All stainless fabrications undergo pickling and passivation to restore corrosion resistance at every weld joint.' },
  { n: '04', title: 'Pump Station Commissioning', desc: 'In-house machining of wear rings, custom shaft fabrications, and laser alignment maximize operational lifespans.' },
];

const FOCUS = [
  { title: 'Clean Water Treatment Plants', desc: 'Intake manifolds, chemical dosing lines, filtration headers, and high-purity stainless steel distribution piping.' },
  { title: 'Wastewater Lift & Pumping Stations', desc: 'Force main pipe spools, bypass pumping headers, and heavy pump base plates.' },
  { title: 'Sewage Processing Facilities', desc: 'Aeration tank piping arrays, custom clarifier metal components, hoppers, and access platforms.' },
];

const FAQS = [
  {
    q: 'Do you offer roll-grooving services for large-diameter municipal water lines?',
    a: 'Yes. Our machine shop features heavy-duty rolling equipment capable of precision roll-grooving for both carbon steel and stainless steel pipe to industry standards. This provides reliable mechanical joint configurations for treatment plant headers and pump station connections.',
  },
  {
    q: 'How do you guarantee the longevity of stainless steel welds used in wastewater treatment environments?',
    a: 'To prevent corrosion at joint points, all stainless steel fabrications undergo strict post-weld cleaning, including pickling and passivation. This chemical process restores the protective chromium oxide layer on the steel surface, ensuring maximum resistance to aggressive wastewater chemicals and moisture.',
  },
  {
    q: 'Can you fabricate custom infrastructure assemblies based on municipal engineering blueprints?',
    a: 'Yes. We specialize in custom B2B and public procurement fabrication. Our team works directly from your provided DWG, DXF, or PDF engineering drawings to manufacture exact custom manifolds, standpipes, and structural access metalwork with tight tolerances and full CWB structural compliance.',
  },
  {
    q: 'What pump types can your machine shop rebuild for municipal facilities?',
    a: 'We service high-volume vertical turbine pumps, lift station centrifugal pumps, and solids-handling wastewater pumps. Our services include complete tear-down, in-house machining of replacement wear rings, custom shaft fabrications, seal upgrades, and laser alignment to maximize operational lifespans.',
  },
  {
    q: 'Do you fabricate structural access steel for wet environments like treatment plant vaults?',
    a: 'Yes. We manufacture CWB-certified structural platforms, non-slip grating, heavy-duty handrails, and dry-well ladder systems specifically designed to survive the continuous high-humidity and chemical exposure typical of utility vaults and treatment facilities.',
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

function MunicipalWaterAndSewer() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[480px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/35425761/pexels-photo-35425761.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Aerial view of water treatment plant"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/92 to-navy-900/55" />
        <div className="container-8xl relative flex h-full items-end pb-16">
          <div className="max-w-2xl">
            <p className="eyebrow text-safety-400 mb-3">Industries Served</p>
            <h1 className="text-4xl font-bold text-white md:text-5xl">Municipal Water &amp; Sewer</h1>
            <p className="mt-4 text-lg text-navy-100">
              Shop-fabricated pipe spools, custom fluid manifolds, and precision pump rebuilding engineered for long-term municipal infrastructure reliability.
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
              <SectionHeading eyebrow="Our Capabilities" title="Certified Metal Fabrication for Public Infrastructure" />
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-steel-600">
                <p>
                  Young's Industrial designs and constructs complex fluid distribution networks, headers, and chemical dosing manifolds for water treatment plants and pump stations throughout Atlantic Canada.
                </p>
                <p>
                  By building spools off-site in our facility, we avoid cramped mechanical rooms and deliver job-ready assemblies with perfect dimensional alignment. All stainless fabrications receive post-weld passivation to ensure decades of corrosion-free service.
                </p>
              </div>
              <ul className="mt-8 space-y-3 text-steel-600">
                {['304 & 316L Stainless Steel Fabrication', 'CWB-Certified Structural Access Metalwork', 'Pickling & Passivation on All Stainless Welds', 'Custom Fabrication from DWG, DXF & PDF Drawings'].map((c) => (
                  <li key={c} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-safety-500" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ImagePlaceholder
              src="https://images.pexels.com/photos/12726229/pexels-photo-12726229.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Water treatment plant with blue piping"
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
              src="https://images.pexels.com/photos/36926327/pexels-photo-36926327.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Municipal water treatment plant with filtration tanks"
              className="aspect-[4/3] shadow-lg"
            />
            <div>
              <SectionHeading eyebrow="Technical Capabilities" title="Engineered for Decades of Service" />
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-steel-600">
                <p>
                  Our material compliance spans 304 and 316L Stainless Steel, galvanized carbon steels, and specialized alloy piping, matched to your municipal design prints through full roll-grooving capabilities up to large diameters alongside traditional flanged and fully welded connections. For wastewater infrastructure, we fabricate custom grit hoppers, fluid storage tanks, overflow chutes, internal tank baffling, weirs, and equipment access framing — all heavy-duty metalwork designed to resist continuous moisture and biological corrosion, complemented by CWB-certified structural platforms, non-slip grating, heavy-duty handrails, and dry-well ladder systems engineered for high-humidity utility vaults.
                </p>
                <p>
                  Our pump station overhaul services cover high-volume vertical turbine pumps, lift station centrifugal pumps, and solids-handling wastewater pumps, with component restorations performed in-house including machining of replacement wear rings, custom shaft fabrications, seal upgrades, and laser alignment to maximize operational lifespans. All stainless steel fabrications undergo strict post-weld cleaning with pickling and passivation to restore the protective chromium oxide layer, ensuring maximum resistance to aggressive wastewater chemicals and moisture over decades of service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <SectionHeading align="center" eyebrow="Our Process" title="From Engineering Drawings to Commissioning" />
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
              <SectionHeading eyebrow="Applications" title="Municipal Water &amp; Sewer Focus Areas" />
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
              src="https://images.pexels.com/photos/35425762/pexels-photo-35425762.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Modern wastewater treatment plant with filtration tanks"
              className="aspect-[4/3] shadow-lg"
            />
          </div>
        </div>
      </section>

      <ProjectsSection
        eyebrow="Related Projects"
        title="Projects in This Sector"
        bg="bg-white"
        slugs={['paradise-twin-arena', 'eastern-health-burin', 'municipal-water-pump-station']}
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
        title="Planning a Municipal Water or Sewer Project?"
        description="Our CWB-certified team fabricates custom manifolds, pipe spools, and structural access metalwork to your exact engineering drawings."
      />
    </>
  );
}

export const Route = createFileRoute("/industries/municipal-water-sewer")({
  head: () => ({
    meta: [
      { title:"Municipal Water & Sewer Solutions | Young's Industrial" },
      { name:"description", content:"Stainless process piping, pump skids and treatment plant fabrication for municipal water and wastewater infrastructure." },
      { property:"og:title", content:"Municipal Water & Sewer Solutions | Young's Industrial" },
      { property:"og:description", content:"Stainless process piping, pump skids and treatment plant fabrication for municipal water and wastewater infrastructure." },
      { property:"og:type", content:"website" },
      { name:"twitter:card", content:"summary_large_image" },
    ],
  }),
  component: MunicipalWaterAndSewer,
});
