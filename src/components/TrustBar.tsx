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
      <div className="container-8xl py-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
          {items.map((item) => {
            const Icon = ICONS[item.icon] ?? BadgeCheck;
            return (
              <div key={item.label} className="flex items-center gap-3 md:justify-center">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${variant === 'dark' ? 'bg-navy-700' : 'bg-white border border-steel-200'}`}>
                  <Icon className={`h-5 w-5 ${variant === 'dark' ? 'text-safety-400' : 'text-safety-500'}`} />
                </div>
                <span className={`text-sm font-semibold leading-tight ${variant === 'dark' ? 'text-navy-50' : 'text-navy-700'}`}>
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
