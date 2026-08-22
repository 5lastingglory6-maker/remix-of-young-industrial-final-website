import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Link } from "@/components/SiteLink";
import { ArrowRight, ChevronDown, Phone, Truck, Gauge, Clock, MapPin, Award, ShieldCheck, Droplets, Home, Siren, Waves, Search, Factory, Utensils, Car, ClipboardCheck, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import heroAsset from "@/assets/vac-hero-truck.jpg.asset.json";
import septicAsset from "@/assets/vac-septic-pumping.jpg.asset.json";
import sumpAsset from "@/assets/vac-sump-tank.jpg.asset.json";
import catchBasinAsset from "@/assets/vac-catch-basin.jpg.asset.json";
import bulkAsset from "@/assets/vac-bulk-hauling.jpg.asset.json";
import emergencyAsset from "@/assets/vac-emergency-callout.jpg.asset.json";
import industrialAsset from "@/assets/vac-industrial-truck.jpg.asset.json";

const SITE_URL = "https://id-preview--505c4137-b717-4e3e-b23f-a53d695b8ee2.lovable.app";

const FACTS = [
  { icon: Truck, label: "3 vacuum trucks in the fleet" },
  { icon: Award, label: "10 years of vacuum truck service" },
  { icon: Clock, label: "Dispatched within 24 hours" },
  { icon: MapPin, label: "Atlantic Canada service area" },
  { icon: ShieldCheck, label: "Certified disposal & full tracking" },
];

const CORE_SERVICES: { icon: typeof Droplets; title: string; desc: string }[] = [
  {
    icon: Droplets,
    title: "Septic Tank Pumping",
    desc: "Keep your septic system operating properly with professional pumping and waste removal.",
  },
  {
    icon: Home,
    title: "Holding Tank Service",
    desc: "Reliable emptying and waste removal for holding tanks of different sizes and applications.",
  },
  {
    icon: Waves,
    title: "Drain & Sewer Cleaning",
    desc: "Clear blockages, grease, buildup, debris, and other materials that restrict flow.",
  },
  {
    icon: Utensils,
    title: "Grease Trap Cleaning",
    desc: "Remove accumulated fats, oils, grease, and solids to help keep commercial drainage systems working properly.",
  },
  {
    icon: Gauge,
    title: "Sumps & Catch Basins",
    desc: "Remove accumulated water, sediment, grit, sludge, and debris from sumps and catch basins.",
  },
  {
    icon: Siren,
    title: "Emergency Pumping",
    desc: "When a backup or overflow cannot wait, get the service you need to address the problem.",
  },
];

const RESIDENTIAL_CARDS: { img: string; title: string; text: string }[] = [
  {
    img: septicAsset.url,
    title: "Septic Tank Pumping & Cleaning",
    text: "Your septic system handles wastewater every day, but the solids that accumulate inside the tank need to be removed periodically. As solids continue to build up, they can interfere with the proper operation of the system and eventually contribute to backups or damage to the septic field. Professional pumping and cleaning removes accumulated material and helps your system continue operating effectively. If you are unsure when your septic tank was last serviced, that uncertainty alone is a good reason to have the system assessed and establish an appropriate maintenance schedule.",
  },
  {
    img: sumpAsset.url,
    title: "Holding Tank Pumping",
    text: "Unlike a septic system, a holding tank stores wastewater without processing it through a drainage field. That means it must be emptied as it fills. How frequently a holding tank needs service depends on factors such as tank capacity and household or building water usage. Waiting until the tank is completely full can result in wastewater backing up into your property. Regular pumping helps you stay ahead of the problem and avoid an unpleasant emergency.",
  },
  {
    img: emergencyAsset.url,
    title: "Emergency Septic Pumping",
    text: "Foul odours? Sewage backing up? Wastewater appearing where it should not be? These are signs that your system may require immediate attention. A blocked or overloaded septic system can create problems for your property and the surrounding environment. Vacuum pumping can remove excess waste and help restore the system to proper operating condition. When a septic or wastewater problem cannot wait, contact Young Industrial to discuss the situation and determine the right service.",
  },
  {
    img: catchBasinAsset.url,
    title: "Drain & Sewer Cleaning",
    text: "A blocked drain does not always mean you need to dig up a pipe. Grease, sludge, roots, frozen lines, sediment, and other debris can restrict or completely stop the flow through drainage and sewer lines. High pressure jetting can help break through these materials, clean the inside of the line, and restore flow. Young Industrial can provide drain and sewer cleaning for residential and larger applications.",
  },
  {
    img: bulkAsset.url,
    title: "Video Pipe Inspection",
    text: "Sometimes the most important question is not how do we clean the pipe? but what is actually causing the problem? Video pipe inspection allows the inside of a drainage or sewer line to be examined without immediately resorting to excavation. A camera can help identify blockages, damage, buildup, or other issues and help determine where a problem is located. When you know what is happening inside the pipe, you can make a more informed decision about what needs to happen next.",
  },
];

const WARNING_SIGNS = [
  "Foul or unusual sewage odours",
  "Slow drains or recurring blockages",
  "Sewage or wastewater backing up",
  "Standing or seeping wastewater",
  "Frequent drainage problems",
  "A holding tank or septic alarm activating",
  "A tank that may be approaching capacity",
  "Uncertainty about when your system was last pumped",
  "Recurring problems that keep coming back after temporary clearing",
];

const COMMERCIAL: { title: string; text: string }[] = [
  {
    title: "Commercial Septic Tank Service",
    text: "Commercial septic systems can deal with significantly different wastewater volumes and materials depending on the type of business. Regular pumping, cleaning, and inspection can help identify developing problems before they lead to backups or operational disruption.",
  },
  {
    title: "Grease Trap Cleaning",
    text: "Restaurants, kitchens, and food service operations deal with fats, oils, grease, water, and solid waste every day. When grease accumulates in a trap or drainage line, it can restrict flow and contribute to backups and unpleasant odours. Professional grease trap cleaning removes accumulated material and helps keep the system functioning properly. Where possible, service can be planned around your operating schedule to reduce disruption to your business.",
  },
  {
    title: "Sump & Catch Basin Cleaning",
    text: "Sums and catch basins collect water, sediment, grit, sludge, and other debris over time. If that material is allowed to accumulate, it can reduce capacity, interfere with drainage, and create operational problems. Vacuum removal provides an efficient way to remove accumulated material and restore usable capacity.",
  },
  {
    title: "Car Wash & Wash Bay Pits",
    text: "Wash bays and car wash facilities can accumulate a mixture of water, grit, oil, grease, soap, and other debris. Regular cleaning helps prevent this material from building up around sump systems and interfering with normal drainage.",
  },
  {
    title: "Commercial Drain & Sewer Cleaning",
    text: "Blocked commercial drains can quickly become an operational problem. High pressure jetting can be used to clear grease, buildup, debris, and other obstructions from drainage and sewer lines, helping restore proper flow and reduce recurring blockages.",
  },
];

const INDUSTRIAL_CAPABILITIES = [
  "Large-volume waste removal",
  "Industrial vacuuming",
  "Sumps and pits",
  "Liquid waste removal",
  "Drain and sewer cleaning",
  "Construction support",
  "Difficult-access cleanup",
  "Emergency pumping and response",
];

const PROCESS_STEPS = [
  {
    title: "Tell Us What You Need",
    text: "Contact Young Industrial and explain what is happening, what needs to be removed or cleaned, and where the job is located.",
  },
  {
    title: "We Assess the Job",
    text: "We determine the appropriate service and equipment based on the system, material, access, and requirements of the job.",
  },
  {
    title: "We Pump, Clean or Remove",
    text: "Our team carries out the required work, whether that means pumping a tank, cleaning a line, removing accumulated material, or supporting a larger project.",
  },
  {
    title: "Get Back to Business",
    text: "The goal is simple: address the problem properly and get your system, property, or operation back to where it needs to be.",
  },
];

const WHY_US = [
  {
    title: "The Right Equipment for the Job",
    text: "Vacuum truck work can involve everything from residential septic tanks to commercial sumps, grease traps, drainage systems, and larger industrial applications. The equipment and approach need to match the job.",
  },
  {
    title: "Residential, Commercial & Industrial",
    text: "Whether you are a homeowner dealing with a full tank, a restaurant managing grease buildup, or a facility dealing with accumulated waste, we can help determine the appropriate service for your needs.",
  },
  {
    title: "More Than Pumping",
    text: "Vacuum service is only part of the solution. Drain jetting, sewer cleaning, video inspection, and related services can help identify, clean, and address the problems surrounding your system.",
  },
  {
    title: "A Practical Approach",
    text: "We focus on understanding the problem, carrying out the appropriate work, and helping you avoid unnecessary disruption wherever possible.",
  },
];

const FAQS = [
  {
    q: "How often should my septic tank be pumped?",
    a: "There is no single schedule that works for every property. The appropriate frequency depends on factors such as the type and size of the system, wastewater volume, and how heavily the system is used. If you do not know when your tank was last serviced, contact Young Industrial to discuss your situation.",
  },
  {
    q: "How do I know if my septic tank needs pumping?",
    a: "Foul odours, slow drainage, wastewater backups, standing or seeping wastewater, and other recurring drainage problems can indicate that your system needs attention. A professional assessment can help determine whether pumping or another service is required.",
  },
  {
    q: "What happens if my septic tank backs up?",
    a: "A backup means wastewater is no longer moving through the system as it should. Depending on the cause, pumping, cleaning, inspection, or other service may be required. If wastewater is backing up, do not wait for the problem to become worse. Contact Young Industrial.",
  },
  {
    q: "Can you clean blocked drain lines?",
    a: "Yes. Drain and sewer jetting can be used to clear many types of blockages and buildup, including grease and debris. Jetting can also be used for certain thawing applications.",
  },
  {
    q: "Can you inspect pipes before excavation?",
    a: "Video pipe inspection can help identify problems inside drainage and sewer lines and can help locate where an issue is occurring without immediately digging.",
  },
  {
    q: "Do you service residential properties?",
    a: "Yes. Vacuum truck services can be used for residential septic, holding tank, drainage, sewer, and related waste removal needs.",
  },
  {
    q: "Do you handle commercial and industrial jobs?",
    a: "Yes. Vacuum truck services can support commercial and industrial applications including septic systems, grease traps, sumps, catch basins, pits, drainage systems, waste removal, and other demanding applications.",
  },
  {
    q: "Can you provide emergency pumping?",
    a: "If you are dealing with a septic, wastewater, or drainage emergency, contact Young Industrial to discuss the situation and determine the appropriate response.",
  },
  {
    q: "What types of material can a vacuum truck remove?",
    a: "Vacuum trucks are used to remove a range of accumulated liquids, sludge, wastewater, grease, sediment, and other materials depending on the equipment, job requirements, and applicable handling and disposal requirements.",
  },
];

const CERTIFICATIONS = [
  "ISO 9001:2015 quality system",
  "Provincial waste-hauler registration",
  "NL Environmental Protection Act compliance",
  "Environmental Emergencies / spill response",
  "Transportation of Dangerous Goods (TDG) certified drivers",
  "WHMIS 2015",
  "Confined-space entry & fall-protection training",
  "Class 3 air-brake licensed operators",
  "COR / occupational health & safety program",
];

function PhotoCards({ items }: { items: { img: string; title: string; text: string }[] }) {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <>
      {items.map(({ img, title, text }, index) => {
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
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-heading text-xl font-bold text-navy-800">{title}</h3>
              <div className="mt-3 flex-1">
                <p className={`text-sm text-steel-600 ${!isOpen ? "line-clamp-3" : ""}`}>{text}</p>
              </div>
              <button
                type="button"
                onClick={() => toggle(index)}
                className="mt-4 inline-flex items-center gap-1 self-start text-sm font-semibold text-safety-600 transition-colors hover:text-safety-700"
                aria-expanded={isOpen}
              >
                {isOpen ? "Show less" : "Show more"}
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = open.has(index);
        return (
          <div key={item.q} className="rounded-xl border border-steel-200 bg-white p-5">
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between text-left"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-lg font-bold text-navy-800">{item.q}</span>
              <ChevronDown className={`ml-4 h-5 w-5 shrink-0 text-steel-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && (
              <p className="mt-3 text-steel-600">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

function CommercialAccordion({ items }: { items: { title: string; text: string }[] }) {
  const [open, setOpen] = useState<Set<number>>(new Set([0]));

  const toggle = (index: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = open.has(index);
        return (
          <div key={item.title} className="rounded-xl border border-white/12 bg-white/5 p-5">
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between text-left"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-lg font-bold text-white">{item.title}</span>
              <ChevronDown className={`ml-4 h-5 w-5 shrink-0 text-navy-100 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && (
              <p className="mt-3 text-navy-100">{item.text}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

function VacuumTruckServices() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroAsset.url}
          alt="Young's Industrial vacuum truck on a job site"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/93 to-navy-950/72" />
        <div className="container-8xl relative py-24 md:py-28">
          <p className="eyebrow mb-5 text-safety-300">Vacuum Truck Division</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Professional Vacuum Truck Services for Homes, Businesses &amp; Industrial Sites
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-navy-100">
            When waste, wastewater, sludge, grease, or debris needs to be removed, you need more than a truck. You need
            the right equipment, a capable team, and a service that gets the problem handled properly.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-navy-100">
            Young Industrial provides vacuum truck and related cleaning services for residential, commercial, and industrial
            needs. From septic tanks and holding tanks to blocked drains, grease traps, sumps, catch basins, and difficult
            waste removal jobs, we help keep your property, facility, and operations running as they should.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">
              Request Service
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+17094679712"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/35 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* FACTS STRIP */}
      <section className="bg-navy-900 text-white">
        <div className="container-8xl grid grid-cols-1 gap-5 py-8 sm:grid-cols-2 lg:grid-cols-5">
          {FACTS.map((f) => (
            <div key={f.label} className="flex items-center justify-center gap-3">
              <f.icon className="h-10 w-10 shrink-0 text-safety-400" />
              <span className="text-[11px] font-bold uppercase leading-tight tracking-wide text-navy-100">{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="section-pad bg-white" id="services">
        <div className="container-8xl">
          <SectionHeading
            eyebrow="Comprehensive Core Services"
            title="We Handle the Mess So You Don't Have To"
            description="Young's Industrial provides vacuum truck and related cleaning services for a wide range of residential, commercial, and industrial needs."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {CORE_SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="h-full rounded-xl border border-steel-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-lg sm:border-steel-200 sm:p-7">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-safety-100 text-safety-700 sm:mb-5 sm:h-12 sm:w-12">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-1.5 text-sm font-bold text-navy-800 sm:mb-2.5 sm:text-lg">{title}</h3>
                <p className="text-xs text-steel-600 sm:text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESIDENTIAL SERVICES */}
      <section className="section-pad bg-steel-50" id="residential">
        <div className="container-8xl">
          <SectionHeading
            eyebrow="For Homeowners"
            title="Vacuum Truck Services for Your Home"
            description="Septic and drainage problems have a way of appearing at the worst possible time. A slow drain can become a blockage. A full tank can become a backup. An issue that seems minor today can turn into an expensive repair if it is left unattended. Young Industrial provides vacuum truck services to help homeowners deal with septic, wastewater, drainage, and waste removal needs before they become bigger problems."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PhotoCards items={RESIDENTIAL_CARDS} />
          </div>
          <div className="mt-12 max-w-3xl rounded-xl border border-navy-200 bg-white p-7 lg:mx-auto">
            <h3 className="text-xl font-bold text-navy-800">Not sure if your system needs attention? Let's take a look.</h3>
            <div className="mt-5">
              <Link to="/contact" className="btn-primary">
                Request Service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WARNING SIGNS */}
      <section className="section-pad bg-white" id="warning-signs">
        <div className="container-8xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-[70px]">
            <div>
              <SectionHeading
                eyebrow="Spot the Warning Signs"
                title="Is Your System Showing Signs It Needs Attention?"
                description="Don't Wait for a Complete Backup"
              />
              <ul className="mt-6 space-y-3">
                {WARNING_SIGNS.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-safety-600" />
                    <span className="text-steel-700">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <div className="rounded-2xl bg-navy-900 p-8 text-white md:p-10">
                <h3 className="text-2xl font-bold text-white">Prevent Problems Before They Become Emergencies</h3>
                <p className="mt-4 text-lg leading-relaxed text-navy-100">
                  Routine pumping, cleaning, and inspection can help reduce unexpected backups, protect the components of
                  your system, and extend its useful life.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-navy-100">
                  The right maintenance schedule depends on the type of system, its size, how heavily it is used, and the
                  material entering it. Commercial systems, for example, may require more frequent attention when wastewater
                  contains significant amounts of oil, fat, grease, or other materials.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-navy-100">
                  If you are unsure when your tank, drain, sump, or other system was last serviced, Young Industrial can help
                  you determine what should be checked and what service may be appropriate.
                </p>
                <div className="mt-8">
                  <Link to="/contact" className="btn-primary">
                    Request Service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL */}
      <section className="section-pad bg-navy-900 text-white" id="commercial">
        <div className="container-8xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-[70px]">
            <div>
              <p className="eyebrow mb-3.5 text-safety-300">For Businesses</p>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Keeping Your Business Moving</h2>
              <p className="mt-5 text-lg leading-relaxed text-navy-100">
                For a business, wastewater and drainage problems are more than an inconvenience. They can interrupt
                operations, create unpleasant conditions, affect customers and employees, and lead to costly downtime.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-navy-100">
                Young Industrial provides commercial vacuum truck and cleaning services for businesses that need tanks, traps,
                drains, sumps, pits, and other waste systems kept under control.
              </p>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  Schedule Grease Trap Service
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <CommercialAccordion items={COMMERCIAL} />
          </div>
        </div>
      </section>

      {/* INDUSTRIAL */}
      <section className="section-pad bg-white" id="industrial">
        <div className="container-8xl grid items-center gap-12 lg:grid-cols-2 lg:gap-[70px]">
          <img
            src={industrialAsset.url}
            alt="Industrial vacuum and cooling equipment at an industrial facility"
            loading="lazy"
            width={1200}
            height={900}
            className="h-[380px] w-full rounded-2xl object-cover lg:h-[520px]"
          />
          <div>
            <p className="eyebrow mb-3.5">For Industrial Sites</p>
            <h2 className="text-3xl font-bold text-navy-800 md:text-4xl">
              Vacuum Truck Solutions for Industrial Operations
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-steel-600">
              Industrial environments can create waste and cleanup requirements that go well beyond ordinary residential or
              commercial service.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-steel-600">
              Young Industrial provides vacuum truck support for industrial and demanding cleanup applications where liquid
              waste, sludge, debris, accumulated material, or difficult-to-access areas need to be addressed.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-steel-600">Our services can support:</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {INDUSTRIAL_CAPABILITIES.map((cap) => (
                <span key={cap} className="rounded-full bg-steel-100 px-3 py-1 text-sm font-semibold text-navy-800">
                  {cap}
                </span>
              ))}
            </div>
            <p className="mt-5 text-lg leading-relaxed text-steel-600">
              Whether the requirement is planned maintenance or an unexpected problem, the right equipment and approach can make
              the difference between a manageable job and prolonged disruption.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="btn-primary">
                Talk to Our Team About Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad bg-steel-50" id="process">
        <div className="container-8xl">
          <SectionHeading
            eyebrow="How It Works"
            title="One Service. One Straightforward Process."
            description="Getting vacuum truck service should not be complicated."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.title}
                className="rounded-xl border border-steel-200 bg-white p-7 text-center transition duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-xl font-extrabold text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-800">{step.title}</h3>
                <p className="mt-3 text-steel-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-pad bg-white" id="why-us">
        <div className="container-8xl">
          <SectionHeading
            eyebrow="Why Young Industrial?"
            title="When You Call for Vacuum Truck Service, You Want the Job Done Right"
            description="Young Industrial brings vacuum truck capability together with related cleaning and inspection services, allowing customers to address a wide range of septic, drainage, wastewater, and waste removal requirements through one service provider."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map(({ title, text }) => (
              <div key={title} className="h-full rounded-xl border border-steel-200 bg-white p-7 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-safety-100 text-safety-700">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2.5 text-lg font-bold text-navy-800">{title}</h3>
                <p className="text-steel-600">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/contact" className="btn-primary">
              Request Service
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="section-pad bg-navy-900 text-white" id="service-area">
        <div className="container-8xl text-center">
          <p className="eyebrow mb-3.5 text-safety-300">Service Area</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Serving Homes, Businesses &amp; Industrial Sites Across Atlantic Canada
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-navy-100">
            From residential properties to commercial facilities and industrial operations, Young Industrial provides
            vacuum truck and related cleaning services throughout Atlantic Canada, including Newfoundland &amp; Labrador,
            from our Come By Chance area offices and wherever our service crews operate.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-100">Not sure if we service your location?</p>
          <div className="mt-8 flex justify-center">
            <Link to="/contact" className="btn-primary">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert} className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-left">
                <ShieldCheck className="h-4 w-4 shrink-0 text-safety-400" />
                <span className="text-sm text-navy-100">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-steel-50" id="faq">
        <div className="container-8xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            align="center"
          />
          <div className="mt-12 max-w-3xl mx-auto">
            <Accordion items={FAQS} />
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="section-pad bg-white text-center" id="contact">
        <div className="container-8xl">
          <h2 className="text-3xl font-bold text-navy-800 md:text-4xl">
            Have a Tank, Drain, Sump or Waste Problem?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-steel-600">
            You do not need to figure out the solution before you call. Tell Young Industrial what is happening, where the
            problem is, and what you need removed, cleaned, pumped, or inspected. We will help determine the right service for
            the job.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Request Service
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+17094679712"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-navy-300 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-navy-800 transition-colors hover:bg-navy-50"
            >
              <Phone className="h-4 w-4" />
              Call Young Industrial
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export const Route = createFileRoute("/services/vacuum-truck-services")({
  head: () => ({
    meta: [
      { title: "Vacuum Truck Services | Young's Industrial" },
      {
        name: "description",
        content:
          "Professional vacuum truck services for residential septic, commercial grease traps, industrial sumps and emergency pumping across Atlantic Canada.",
      },
      { property: "og:title", content: "Vacuum Truck Services | Young's Industrial" },
      {
        property: "og:description",
        content:
          "Vacuum truck pumping, drain cleaning, video inspection and waste removal for homes, businesses and industrial sites in Newfoundland & Labrador.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE_URL}${heroAsset.url}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}${heroAsset.url}` },
    ],
  }),
  component: VacuumTruckServices,
});
