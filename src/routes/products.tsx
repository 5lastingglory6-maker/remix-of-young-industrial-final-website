import { createFileRoute } from"@tanstack/react-router";
import { Link } from '@/components/SiteLink';
import { ArrowRight } from 'lucide-react';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import CTABanner from '@/components/CTABanner';
import SectionHeading from '@/components/SectionHeading';
import mycomAsset from '@/assets/mycom-cropped.jpg.asset.json';
import geneglaceAsset from '@/assets/geneglace-cropped.png.asset.json';
import cornellAsset from '@/assets/cornell-cropped.jpg.asset.json';

const CATEGORIES = [
  {
    title: 'Compressors & Evaporative Condensers',
    desc: 'Reliable compression and heat rejection from the names industrial refrigeration depends on. We supply Mycom compressors and parts alongside Baltimore Aircoil evaporative condensers to keep your plant running efficiently.',
    img: mycomAsset.url,
  },
  {
    title: 'Ice Equipment, Chillers & Heat Exchangers',
    desc: 'Complete cooling and ice-making solutions for commercial and industrial use. From North Star and Geneglace ice equipment to process chillers and plate heat exchangers, we help you move and remove heat exactly where it is needed.',
    img: geneglaceAsset.url,
  },
  {
    title: 'Pumps & Pump Rebuilding',
    desc: 'New Cornell pumps and complete in-shop rebuild services to keep your fluid systems moving. Our rebuild program restores worn pumps to reliable working condition and extends the life of your equipment.',
    img: cornellAsset.url,
  },
];

function Products() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[360px] overflow-hidden">
        <img
          src="/__l5e/assets-v1/df437beb-b7d0-4ff4-95ed-1f0ebc92f249/gen-machine-room.jpg"
          alt="Industrial refrigeration products and equipment"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 to-navy-900/50" />
        <div className="container-8xl relative flex h-full items-end pb-12">
          <div className="max-w-2xl">
            <p className="eyebrow text-safety-400 mb-3">Our Products</p>
            <h1 className="text-4xl font-bold text-white md:text-5xl">Products & Equipment</h1>
          </div>
        </div>
      </section>

      {/* Spotlight: Custom Refrigeration Packages */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ImagePlaceholder
              src="/__l5e/assets-v1/df437beb-b7d0-4ff4-95ed-1f0ebc92f249/gen-machine-room.jpg"
              alt="Custom refrigeration package"
              className="aspect-[4/3] shadow-xl"
            />
            <div>
              <p className="eyebrow mb-3">Featured Product Line</p>
              <h2 className="text-3xl font-bold text-navy-800 md:text-4xl">Custom Refrigeration Packages</h2>
              <p className="mt-5 text-lg text-steel-600">
                We engineer and build complete industrial refrigeration packages tailored to your facility, vessel, or process. Every package is assembled, piped, and tested in-house by our certified team, then delivered ready for commissioning.
              </p>
              <p className="mt-4 text-steel-600">
                Combining trusted brands — Mycom, Baltimore Aircoil, North Star, and Geneglace — with our own fabrication and controls expertise, our packages deliver reliable performance in the most demanding environments.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/services/refrigeration" className="btn-secondary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="section-pad bg-steel-50">
        <div className="container-8xl">
          <SectionHeading
            align="center"
            eyebrow="Product Categories"
            title="Complete Equipment & Product Lines"
            description="From compressors and ice equipment to pumps and custom fabrication, we supply and service the products your operation depends on."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <div key={cat.title} className="group flex flex-col overflow-hidden rounded-xl border border-steel-200 bg-white transition-all hover:shadow-lg">
                <div className="aspect-video overflow-hidden bg-steel-200">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-navy-800">{cat.title}</h3>
                  <p className="mt-2 text-sm text-steel-600 flex-1">{cat.desc}</p>
                  <Link to="/contact" className="btn-ghost mt-4">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Looking for a Specific Product?"
        description="Contact our team and we'll help you find the right equipment for your application."
      />
    </>
  );
}

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title:"Products \u2014 Refrigeration Packages & Fabricated Equipment | Young's Industrial" },
      { name:"description", content:"Browse our packaged refrigeration equipment, chillers, skids and fabricated components built for industrial duty." },
      { property:"og:title", content:"Products \u2014 Refrigeration Packages & Fabricated Equipment | Young's Industrial" },
      { property:"og:description", content:"Browse our packaged refrigeration equipment, chillers, skids and fabricated components built for industrial duty." },
      { property:"og:type", content:"website" },
      { name:"twitter:card", content:"summary_large_image" },
    ],
  }),
  component: Products,
});
