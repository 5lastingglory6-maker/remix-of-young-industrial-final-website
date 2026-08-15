import { Link } from '@/components/SiteLink';

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  rounded?: boolean;
  aspect?: string;
}

export default function ImagePlaceholder({ src, alt, className = '', rounded = true }: ImagePlaceholderProps) {
  return (
    <div className={`relative overflow-hidden bg-steel-100 ${rounded ? 'rounded-lg' : ''} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent pointer-events-none" />
    </div>
  );
}

export function Placeholder({ label, className = '', aspect = 'aspect-video' }: { label: string; className?: string; aspect?: string }) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-steel-200 to-steel-300 ${aspect} flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, #4a6fab 0%, transparent 60%)' }} />
      <div className="text-center px-4 z-10">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy-600/10 mb-2">
          <svg className="h-6 w-6 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-steel-600">{label}</span>
      </div>
    </div>
  );
}

export function LinkCard({ to, children, className = '' }: { to: string; children: React.ReactNode; className?: string }) {
  return (
    <Link to={to} className={`group block ${className}`}>
      {children}
    </Link>
  );
}
