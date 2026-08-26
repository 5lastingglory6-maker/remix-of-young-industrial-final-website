import { Award, BadgeCheck, MapPin, ShieldCheck } from 'lucide-react';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'badge-check': BadgeCheck,
  'shield-check': ShieldCheck,
  'award': Award,
  'map-pin': MapPin,
};

export default function TrustBar({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const items = [
    { label: 'ISO-9001-2015 Certified', icon: 'badge-check' },
    { label: 'Canadian Welding Bureau Standards', icon: 'shield-check' },
    { label: '35 Years in Business', icon: 'award' },
    { label: 'Serving Atlantic Canada', icon: 'map-pin' },
  ];

  return (
    <div className={variant === 'dark' ? 'bg-navy-900' : 'bg-steel-50 border-y border-steel-200'}>
      <div className="container-8xl py-5 md:py-6">
        <div className="flex flex-nowrap items-center gap-4 overflow-x-auto md:grid md:grid-cols-4 md:gap-4 md:overflow-visible">
          {items.map((item) => {
            const Icon = ICONS[item.icon] ?? BadgeCheck;
            return (
              <div key={item.label} className="flex flex-none items-center gap-2 md:justify-center">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${variant === 'dark' ? 'bg-navy-700' : 'bg-white border border-steel-200'}`}>
                  <Icon className={`h-4 w-4 ${variant === 'dark' ? 'text-safety-400' : 'text-safety-500'}`} />
                </div>
                <span className={`whitespace-nowrap text-xs font-semibold leading-tight md:text-sm ${variant === 'dark' ? 'text-navy-50' : 'text-navy-700'}`}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
