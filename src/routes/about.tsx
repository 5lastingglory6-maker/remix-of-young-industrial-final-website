import { createFileRoute } from"@tanstack/react-router";
import { Award, BadgeCheck, ShieldCheck, MapPin, Target, Handshake } from 'lucide-react';
import ImagePlaceholder from '@/components/ImagePlaceholder';
const aboutUsAsset = '/about-rooftop-tech.jpg';
const commitmentAsset = '/about-daikin-vrv.jpg';
import TrustBar from '@/components/TrustBar';
import CTABanner from '@/components/CTABanner';
import SectionHeading from '@/components/SectionHeading';
import CommunitySection from '@/components/CommunitySection';
import TeamSection from '@/components/TeamSection';
const aboutBanner = '/company_building_and_car.jpg';
function About() {
  return (
    <>
      {/* Header image */}
      <section className="relative h-[360px] md:h-[440px] overflow-hidden">
        <img
          src={aboutBanner}
          alt="Young's Industrial facility and team"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 to-navy-900/50" />
        <div className="container-8xl relative flex h-full items-end pb-12">
          <div className="max-w-2xl">
            <p className="eyebrow text-safety-400 mb-3">About Our Company</p>
            <h1 className="text-4xl font-bold text-white md:text-5xl">Built on Excellence Since 2000</h1>
          </div>
        </div>
      </section>

      <TrustBar variant="dark" />

      {/* Who We Are */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="A Local Company Built on 35 Years of Service"
              />
              <div className="mt-5 space-y-4 text-steel-600 text-lg leading-relaxed">
                <p>
                  Young's Industrial Refrigeration Limited is engaged in industrial refrigeration, fabrication and the installation and servicing of marine, recreation, industrial and offshore equipment throughout Atlantic Canada.
                </p>
                <p>
                  We are a local company built on 35 years of service excellence in the North Atlantic environment, focused on growth through investment in people, training, technology, systems and facilities.
                </p>
              </div>
            </div>
            <ImagePlaceholder
              src={aboutUsAsset}
              alt="Young's Industrial technician servicing a rooftop condenser unit"
              className="aspect-square shadow-lg"
            />

          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-pad bg-steel-50">
        <div className="container-8xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <ImagePlaceholder
                src={commitmentAsset}
                alt="Young's Industrial technician charging a Daikin VRV system on site"
                className="aspect-square shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                eyebrow="Our Commitment"
                title="Partnering With Customers for Innovative Solutions"
              />
              <div className="mt-5 space-y-4 text-steel-600 text-lg leading-relaxed">
                <p>
                  We are committed to partnering with our customers to provide innovative, cost-efficient products and services. We also provide the highest standard of equipment and best practices in the industry along with experienced, highly trained employees.
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-safety-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-navy-800">Innovative Solutions</p>
                    <p className="text-sm text-steel-600">Cost-efficient products and services engineered to your needs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Handshake className="h-6 w-6 text-safety-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-navy-800">Customer Partnerships</p>
                    <p className="text-sm text-steel-600">Trusted relationships built on 35 years of service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Certifications */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <SectionHeading
            align="center"
            eyebrow="Our Certifications"
            title="Certified to the Highest Industry Standards"
            description="We are certified ISO-9001-2015 and Canadian Welding Bureau Standards, reflecting our commitment to quality in everything we do."
          />
          <div className="mt-12 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 scrollbar-hide sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {[
              { icon: BadgeCheck, label: 'ISO-9001-2015', desc: 'Quality Management System certified to international standards.' },
              { icon: ShieldCheck, label: 'CWB Standards', desc: 'Canadian Welding Bureau certified welding procedures and welders.' },
              { icon: Award, label: '35 Years in Business', desc: 'Three and a half decades of service excellence in Atlantic Canada.' },
              { icon: MapPin, label: 'Serving Atlantic Canada', desc: 'Proudly serving the North Atlantic industrial community.' },
            ].map((cert) => {
              const Icon = cert.icon;
              return (
                <div key={cert.label} className="w-[75vw] shrink-0 snap-start rounded-xl border border-steel-200 bg-steel-50 p-7 text-center sm:w-auto">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-800">
                    <Icon className="h-8 w-8 text-safety-400" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy-800">{cert.label}</h3>
                  <p className="mt-2 text-sm text-steel-600">{cert.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <TeamSection />

      <CommunitySection />





      <CTABanner
        title="Ready to work with us?"
        description="Tell us about your project and our team will get back to you with a quote."
      />
    </>
  );
}

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title:"About Us \u2014 Our Story & Certifications | Young's Industrial" },
      { name:"description", content:"Since 2000, Young's Industrial has grown into a trusted ISO-9001-2015 certified fabrication and refrigeration contractor serving Atlantic Canada." },
      { property:"og:title", content:"About Us \u2014 Our Story & Certifications | Young's Industrial" },
      { property:"og:description", content:"Since 2000, Young's Industrial has grown into a trusted ISO-9001-2015 certified fabrication and refrigeration contractor serving Atlantic Canada." },
      { property:"og:type", content:"website" },
      { name:"twitter:card", content:"summary_large_image" },
    ],
  }),
  component: About,
});
