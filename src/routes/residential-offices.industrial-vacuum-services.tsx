import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Link } from "@/components/SiteLink";
import { ArrowRight, ChevronDown, Droplets, Waves, Truck, Home, Siren, Gauge, Container, ClipboardCheck, Phone, Mail } from "lucide-react";
import heroAsset from "@/assets/vac-hero-truck.jpg.asset.json";
import sumpAsset from "@/assets/vac-sump-tank.jpg.asset.json";
import basinAsset from "@/assets/vac-catch-basin.jpg.asset.json";
import haulAsset from "@/assets/vac-bulk-hauling.jpg.asset.json";
import septicAsset from "@/assets/vac-septic-pumping.jpg.asset.json";
import emergencyAsset from "@/assets/vac-emergency-callout.jpg.asset.json";
import legacyAsset from "@/assets/p-marine-refrigeration.jpg.asset.json";

const SERVICES: { icon: typeof Droplets; title: string; desc: string; img: string }[] = [
  {
    icon: Droplets,
    title: "Industrial Sump & Tank Cleaning",
    desc: "Deep clearing of heavy sludges, commercial grease traps, and manufacturing runoff water to keep your facility running smoothly.",
    img: sumpAsset.url,
  },
  {
    icon: Waves,
    title: "Catch Basin & Storm Drain Cleansing",
    desc: "Rapid clearing of heavy sediment and debris from commercial properties and parking lots to prevent seasonal flooding.",
    img: basinAsset.url,
  },
  {
    icon: Truck,
    title: "Bulk Liquid Waste Hauling",
    desc: "Safe, high-volume transport of industrial liquid waste directly to certified environmental processing facilities with full regulatory compliance.",
    img: haulAsset.url,
  },
  {
    icon: Home,
    title: "Septic Tank Pumping",
    desc: "Fast, reliable, and routine maintenance cleanouts for local residential holding tanks to protect your property and system longevity.",
    img: septicAsset.url,
  },
  {
    icon: Siren,
    title: "Emergency Sewer Tank Backup Service",
    desc: "Rapid, on-call deployment to handle sudden system blockages, overflows, and liquid spills when time is critical.",
    img: emergencyAsset.url,
  },
];

const FLEET: { icon: typeof Gauge; title: string; desc: string }[] = [
  {
    icon: Gauge,
    title: "High-CFM Vacuum Infrastructure",
    desc: "Engineered to lift thick sludges and heavy wastewater over extended vertical and horizontal distances.",
  },
  {
    icon: Container,
    title: "Large-Capacity Tankers",
    desc: "Maximizes on-site uptime and reduces transit cycles by hauling massive volumes per trip, keeping your project on timeline.",
  },
  {
    icon: ClipboardCheck,
    title: "Full Environmental Tracking",
    desc: "Complete provincial documentation for every gallon transferred, ensuring legal, safe tipping at authorized treatment facilities.",
  },
];

const DISPATCH = [
  { label: "Lethbridge Office", action: "Call (709) 467-9712", href: "tel:+17094679712" },
  { label: "Come By Chance Branch", action: "Call (709) 463-2659", href: "tel:+17094632659" },
  { label: "Direct Operations Dispatch", action: "Call (709) 427-3385", href: "tel:+17094273385" },
];

function ServiceCards() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggle = (index: number) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  return (
    <>
      {SERVICES.map(({ icon: Icon, title, desc, img }, index) => {
        const isOpen = expanded.has(index);
        const isLong = desc.length > 110;
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
              <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-lg bg-safety-500 text-white transition-colors group-hover:bg-navy-100">
                <Icon className="h-6 w-6 transition-colors group-hover:text-safety-400" />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-heading text-xl font-bold text-navy-800">{title}</h3>
              <div className="mt-3 flex-1">
                <p className={`text-sm text-steel-600 ${isLong && !isOpen ? "line-clamp-2" : ""}`}>{desc}</p>
              </div>
              {isLong && (
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="mt-4 inline-flex items-center gap-1 self-start text-sm font-semibold text-safety-600 transition-colors hover:text-safety-700"
                  aria-expanded={isOpen}
                >
                  {isOpen ? "Show less" : "Show more"}
                  <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}

function IndustrialVacuumServices() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroAsset.url}
          alt="Young's Industrial vacuum tanker truck on an industrial job site"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/93 to-navy-950/72" />
        <div className="container-8xl relative py-24 md:py-28">
          <p className="eyebrow mb-5 text-safety-300">Environmental Waste Division</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Industrial Vacuum &amp; Environmental Waste Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-navy-100">
            High-capacity liquid extraction, industrial sump cleanouts, and residential septic maintenance across
            Atlantic Canada.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">
              Request a Vac Service Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+17094679712"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/35 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
            >
              Call (709) 467-9712
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad bg-white" id="services">
        <div className="container-8xl">
          <p className="eyebrow mb-3.5">Comprehensive Core Services</p>
          <h2 className="max-w-3xl text-3xl font-bold text-navy-800 md:text-4xl">
            One Fleet. Industrial Sites and Residential Properties.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCards />
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section className="section-pad bg-steel-50" id="fleet">
        <div className="container-8xl">
          <p className="eyebrow mb-3.5">Fleet Assets &amp; Technical Capabilities</p>
          <h2 className="max-w-3xl text-3xl font-bold text-navy-800 md:text-4xl">
            Built for Scale. Engineered for Compliance.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-steel-600">
            Industrial procurement managers and municipal engineers cannot afford project delays. Young's Industrial
            commands a specialized, heavy-duty vacuum fleet capable of handling high-viscosity solids and massive liquid
            volumes.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {FLEET.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="h-full rounded-xl border border-steel-200 bg-white p-7 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-safety-100 text-safety-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2.5 text-lg font-bold text-navy-800">{title}</h3>
                <p className="text-steel-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGACY */}
      <section className="section-pad bg-white" id="legacy">
        <div className="container-8xl grid items-center gap-12 lg:grid-cols-2 lg:gap-[70px]">
          <img
            src={legacyAsset.url}
            alt="Young's Industrial crew working on marine refrigeration and plumbing systems"
            loading="lazy"
            className="h-[380px] w-full rounded-2xl object-cover lg:h-[520px]"
          />
          <div>
            <p className="eyebrow mb-3.5">Why Choose Us</p>
            <h2 className="text-3xl font-bold text-navy-800 md:text-4xl">
              The Young's Legacy: Precision Engineering from the Coldest Waters to Deep Infrastructure
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-steel-600">
              For years, Newfoundland's marine, commercial fishing, and industrial sectors have trusted Young's for
              mission-critical refrigeration and complex marine plumbing. We built our reputation in high-stakes
              environments where equipment failure is not an option.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-steel-600">
              Our Industrial Vacuum division is a natural evolution of that exact same mechanical expertise. We
              understand fluid dynamics, pressure systems, and heavy infrastructure. When you hire Young's, you aren't
              just hiring a truck and a hose—you are deploying an elite team backed by a legacy of industrial plumbing,
              cooling, and mechanical expertise.
            </p>
          </div>
        </div>
      </section>

      {/* DISPATCH */}
      <section className="section-pad bg-steel-50" id="dispatch">
        <div className="container-8xl">
          <div className="overflow-hidden rounded-2xl bg-navy-900 p-8 text-white md:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="eyebrow mb-3.5 text-safety-300">Direct Dispatch</p>
                <h2 className="text-3xl font-bold text-white md:text-4xl">Project-Critical Vacuum Issue?</h2>
                <p className="mt-5 text-lg leading-relaxed text-navy-100">
                  Industrial backups, flooded basins, and residential septic emergencies require immediate action. Don't
                  wait for email threads when time is losing you money. Use our direct channels below for rapid
                  deployment.
                </p>
                <div className="mt-8">
                  <Link to="/contact" className="btn-navy-outline">
                    Request a Vac Service Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-xl border border-white/12 bg-white/5 p-7">
                <h3 className="text-lg font-bold text-white">Immediate Field Booking Lines</h3>
                <ul className="mt-5 space-y-4">
                  {DISPATCH.map((d) => (
                    <li key={d.label} className="flex flex-col gap-1">
                      <span className="text-[11px] font-bold uppercase tracking-wide text-navy-100">{d.label}</span>
                      <a href={d.href} className="inline-flex items-center gap-2 font-semibold text-white hover:text-safety-300">
                        <Phone className="h-4 w-4 text-safety-400" />
                        {d.action}
                      </a>
                    </li>
                  ))}
                  <li className="flex flex-col gap-1">
                    <span className="text-[11px] font-bold uppercase tracking-wide text-navy-100">
                      Direct Operations Dispatch — Email
                    </span>
                    <a
                      href="mailto:gerry.greening@youngsice.com"
                      className="inline-flex items-center gap-2 font-semibold text-white hover:text-safety-300"
                    >
                      <Mail className="h-4 w-4 text-safety-400" />
                      gerry.greening@youngsice.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const Route = createFileRoute("/residential-offices/industrial-vacuum-services")({
  head: () => ({
    meta: [
      { title: "Industrial Vacuum & Environmental Waste Services | Young's" },
      {
        name: "description",
        content:
          "High-capacity liquid extraction, industrial sump and tank cleanouts, catch basin cleaning, bulk liquid waste hauling and residential septic pumping across Atlantic Canada.",
      },
      { property: "og:title", content: "Industrial Vacuum & Environmental Waste Services | Young's Industrial" },
      {
        property: "og:description",
        content:
          "Heavy-duty vacuum fleet for industrial sumps, storm drains, bulk liquid waste hauling and residential septic service, with full environmental tracking.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndustrialVacuumServices,
});
