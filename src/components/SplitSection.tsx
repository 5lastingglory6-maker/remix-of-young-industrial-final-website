import { Link } from '@/components/SiteLink';
import { ArrowRight } from 'lucide-react';
import TrustBar from '@/components/TrustBar';
const fabShop = '/gen-fab-shop.jpg';
const heatPump = '/hero-heatpump.jpg';
export default function SplitSection() {
  return (
    <section className="section-pad bg-white" aria-labelledby="splitHeading">
      <div className="container-8xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-3">A Legacy of Quality. A Future of Innovation.</p>
          <h2 id="splitHeading" className="text-3xl font-bold text-navy-800 md:text-4xl">
            Built to Deliver. Trusted to Last
          </h2>
          <p className="mt-4 text-lg text-steel-600">
            For over 35 years, Young's Industrial has helped businesses, homeowners, and
            organizations across Atlantic Canada complete projects with confidence. Backed by
            experienced tradespeople, industry-leading expertise, and an unwavering commitment to
            quality, we deliver dependable solutions that stand the test of time. Whether you're
            planning a major industrial project or upgrading your home or workplace, you'll receive
            the same professional service, skilled craftsmanship, and attention to detail that
            have defined our reputation for decades.
          </p>
          <div className="mt-7 flex justify-center">
            <Link to="/about" className="btn-primary">
              About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <TrustBar variant="light" />

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {/* Industrial & Commercial */}
          <article className="order-2 flex flex-col overflow-hidden rounded-2xl border border-steel-200 shadow-sm lg:order-1">
            <div className="aspect-[16/10] overflow-hidden bg-steel-200">
              <img
                src={fabShop}
                alt="Certified welders at work in Young's fabrication shop"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col bg-navy-900 p-8">
              <span className="self-start rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy-100">
                Industrial &amp; Commercial
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold text-white md:text-2xl">
                Industrial Refrigeration &amp; Fabrication
              </h3>
              <p className="mt-4 flex-1 text-navy-100/85">
                For 35 years, Young's Industrial has provided industrial refrigeration, fabrication,
                and equipment servicing for marine, offshore, and industrial operations across
                Atlantic Canada. Our certified welders, machinists, millwrights, and pipefitters run
                a fully equipped CNC machine and welding shop, while our refrigeration team installs
                and services compressors, evaporators, blast freezers, and ice-making equipment. We
                work with fish processing plants, cold storage facilities, mining and oil &amp; gas
                operations, pulp &amp; paper mills, and municipal water systems — backed by ISO
                9001:2015 and Canadian Welding Bureau certification.
              </p>
              <Link
                to="/industrial-commercial-services"
                className="mt-7 inline-flex items-center gap-2 self-start rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-navy-900 transition-all hover:-translate-y-0.5 hover:bg-steel-100"
              >
                See Industrial &amp; Commercial Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          {/* Residential & Office */}
          <article className="order-1 flex flex-col overflow-hidden rounded-2xl border border-steel-200 shadow-sm lg:order-2">
            <div className="aspect-[16/10] overflow-hidden bg-steel-200">
              <img
                src={heatPump}
                alt="Residential heat pump installation by Young's technicians"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col bg-steel-100 p-8">
              <span className="self-start rounded-full border border-steel-300 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy-700">
                Home &amp; Office
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold text-navy-800 md:text-2xl">
                Residential &amp; Office HVAC Services
              </h3>
              <p className="mt-4 flex-1 text-steel-700">
                The same certified team now brings that expertise to homes and offices. We install
                and service heat pumps and mini-splits, handle residential and commercial electrical
                work, and offer off-grid solar, thermal imaging, and smart building controls. As an
                authorized GE HVAC dealer, we can also help you claim up to $22,000 through
                Newfoundland &amp; Labrador's takeCHARGE oil-to-electric rebate program — and walk
                you through the paperwork from quote to install.
              </p>
              <Link
                to="/residential-offices"
                className="mt-7 inline-flex items-center gap-2 self-start rounded-lg bg-navy-800 px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-700"
              >
                See Residential &amp; Office Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
