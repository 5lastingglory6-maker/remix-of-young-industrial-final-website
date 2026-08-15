import { Mail } from 'lucide-react';

export default function CareersBanner() {
  return (
    <section className="section-pad bg-steel-50" aria-labelledby="careersHeading">
      <div className="container-8xl">
        <div className="flex flex-col items-start gap-6 rounded-2xl border border-steel-200 bg-white p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-2xl">
            <p className="eyebrow text-safety-600 mb-2">Careers</p>
            <h2 id="careersHeading" className="font-heading text-2xl font-bold text-navy-800 md:text-3xl">
              We're growing — now hiring
            </h2>
            <p className="mt-3 text-steel-600">
              Refrigeration mechanics, electricians, HVAC installers, and project coordinators.
              Ammonia experience is an asset; we're willing to train the right person.
            </p>
          </div>
          <a
            href="mailto:reception@youngsice.com?subject=Careers%20Inquiry"
            className="btn-primary shrink-0"
          >
            Email About Openings
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
