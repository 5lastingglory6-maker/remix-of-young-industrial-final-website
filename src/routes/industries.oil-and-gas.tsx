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
  'https://images.pexels.com/photos/15970028/pexels-photo-15970028.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/37589838/pexels-photo-37589838.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/36825977/pexels-photo-36825977.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/5884386/pexels-photo-5884386.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3192669/pexels-photo-3192669.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1108104/pexels-photo-1108104.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/14539151/pexels-photo-14539151.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/9242809/pexels-photo-9242809.jpeg?auto=compress&cs=tinysrgb&w=800',
];

const NUMBERED = [
  { n: '01', title: 'Engineering Review', desc: 'Our team reviews your isometric drawings and engineering packages to plan optimal fabrication sequencing.' },
  { n: '02', title: 'Shop Fabrication', desc: 'CNC pipe profiling, edge beveling, and automated positioner welding ensure exact concentricity and fit-up.' },
  { n: '03', title: 'Inspection & NDT', desc: 'Every spool is verified through your specified NDT method with documented results before shipment.' },
  { n: '04', title: 'Field Installation', desc: 'Certified welding and millwright crews mobilize for on-site installation and commissioning across Atlantic Canada.' },
];

const FOCUS = [
  { title: 'Upstream Processing Facilities', desc: 'Custom wellsite skids, manifold assemblies, and structural framing.' },
  { title: 'Midstream Infrastructure', desc: 'Metering stations, gathering pipeline spools, compressor station manifolds, and valve skids.' },
  { title: 'Downstream Marine Refineries', desc: 'High-pressure steam loops, fluid processing headers, and heavy pump foundation structures.' },
];

const FAQS = [
  {
    q: 'What welding and quality codes do you follow for oil and gas projects?',
    a: 'All pressure piping is fabricated in strict accordance with ASME B31.3 (Process Piping) and ASME Section IX welding regulations. Our structural steel components are certified under CWB (Canadian Welding Bureau) frameworks, providing complete regulatory alignment for regional and offshore installations.',
  },
  {
    q: 'What Non-Destructive Testing (NDT) capabilities do you offer for high-pressure spools?',
    a: 'We coordinate a complete suite of NDT methods based on your project specifications, including Radiographic Testing (X-Ray), Ultrasonic Testing (UT), Magnetic Particle Inspection (MPI), and Hydrostatic Pressure Testing accompanied by full QA/QC documentation.',
  },
  {
    q: 'Do you provide full material traceability for refinery and offshore installations?',
    a: 'Yes. Every piece of plate, pipe, or fitting used in our oil and gas fabrication is tracked from procurement to final weld, complete with Material Test Reports (MTRs) integrated into your final turnover package.',
  },
  {
    q: 'Can you support emergency turnarounds and unplanned outages?',
    a: 'Yes. Our mobile field engineering crews are equipped for rapid mobilization. We handle in-situ machining, vessel modification, pipe replacement-in-kind, and structural retrofitting performed directly on-site or at dockside facilities to minimize downtime.',
  },
  {
    q: 'What is your capacity for large-volume pipe spooling programs?',
    a: 'Our primary fabrication facility is equipped with CNC pipe profiling, automated positioner chucks, and a dedicated welding floor. We have successfully delivered 600+ spool programs sequenced to meet tight turnaround schedules.',
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

function OilAndGas() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[480px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/15970028/pexels-photo-15970028.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Oil refinery facility with industrial pipelines"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/92 to-navy-900/55" />
        <div className="container-8xl relative flex h-full items-end pb-16">
          <div className="max-w-2xl">
            <p className="eyebrow text-safety-400 mb-3">Industries Served</p>
            <h1 className="text-4xl font-bold text-white md:text-5xl">Oil &amp; Gas Infrastructure</h1>
            <p className="mt-4 text-lg text-navy-100">
              Precision welding, heavy structural steel fabrication, and multi-alloy pipe spooling engineered to survive extreme pressure and highly corrosive offshore environments.
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
              <SectionHeading eyebrow="Our Capabilities" title="High-Integrity Fabrication for the Energy Sector" />
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-steel-600">
                <p>
                  Young's Industrial fabricates process piping assemblies, structural steel, and specialized equipment for upstream extraction, midstream transport, and downstream refinery units throughout Atlantic Canada and beyond.
                </p>
                <p>
                  From CNC pipe profiling to mobile field machining, our certified teams deliver complete solutions with the documentation, traceability, and quality standards that demanding energy clients require.
                </p>
              </div>
              <ul className="mt-8 space-y-3 text-steel-600">
                {['ASME B31.3 Process Piping Compliance', 'CWB-Certified Structural Welding', 'Full Heat-Number Material Traceability', '100% NDT Documentation Available'].map((c) => (
                  <li key={c} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-safety-500" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ImagePlaceholder
              src="https://images.pexels.com/photos/37589838/pexels-photo-37589838.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Modern gas plant operations"
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
              alt="Industrial process pipe spooling and welding"
              className="aspect-[4/3] shadow-lg"
            />
            <div>
              <SectionHeading eyebrow="Technical Capabilities" title="Engineering the Details That Matter" />
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-steel-600">
                <p>
                  Our process pipe spooling begins with CNC pipe profiling and automated positioner chucks for exact concentricity and fit-up, with certified welding across Heavy-Wall Carbon Steel, 304 and 316L Stainless, Duplex, and corrosion-resistant alloys under ASME Section IX regulations. Every component carries 100% heat-number traceability with Material Test Reports integrated into your turnover package, verified through Radiographic Testing, Ultrasonic Testing, Magnetic Particle Inspection, and Hydrostatic Pressure Testing before shipment.
                </p>
                <p>
                  On the structural side, we fabricate heavy equipment skids, access platforms, catwalks, pipe racks, and enclosures welded to CWB standards using MIG, TIG, Stick, and Flux-Cored multi-process procedures. When turnarounds or emergency outages demand rapid response, our mobile crews deploy for in-situ line boring, precision flange facing, shaft turning, on-site laser alignment, code-compliant vessel modifications, and structural retrofitting — directly on-site or at dockside facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <SectionHeading align="center" eyebrow="Our Process" title="From Engineering Review to Field Installation" />
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
              <SectionHeading eyebrow="Applications" title="Oil &amp; Gas Focus Areas" />
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
              src="https://images.pexels.com/photos/5884386/pexels-photo-5884386.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Industrial refinery pipelines and steel structures"
              className="aspect-[4/3] shadow-lg"
            />
          </div>
        </div>
      </section>

      <ProjectsSection
        eyebrow="Related Projects"
        title="Projects in This Sector"
        bg="bg-white"
        slugs={['offshore-platform-fabrication', 'dartmouth-cold-storage', 'mining-pump-rebuild']}
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
        title="Have an Oil &amp; Gas Fabrication Project?"
        description="Our ASME-certified and CWB-certified teams are ready to support your next pipeline, structural, or field machining scope."
      />
    </>
  );
}

export const Route = createFileRoute("/industries/oil-and-gas")({
  head: () => ({
    meta: [
      { title:"Oil & Gas Industry Solutions | Young's Industrial" },
      { name:"description", content:"Fabrication, piping and cooling systems for upstream, midstream and downstream oil & gas facilities in Atlantic Canada." },
      { property:"og:title", content:"Oil & Gas Industry Solutions | Young's Industrial" },
      { property:"og:description", content:"Fabrication, piping and cooling systems for upstream, midstream and downstream oil & gas facilities in Atlantic Canada." },
      { property:"og:type", content:"website" },
      { name:"twitter:card", content:"summary_large_image" },
    ],
  }),
  component: OilAndGas,
});
