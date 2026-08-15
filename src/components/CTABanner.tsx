import { Link } from '@/components/SiteLink';
import { ArrowRight } from 'lucide-react';

export default function CTABanner({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-800">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #fb5c11 0%, transparent 50%)' }} />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)' }} />
      <div className="container-8xl relative py-16 md:py-20">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
            {description && <p className="mt-3 text-navy-100 text-lg">{description}</p>}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link to="/contact" className="btn-primary">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/projects" className="btn-navy-outline">
              View Our Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
