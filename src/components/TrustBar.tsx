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
      <div className="container-8xl py-4 md:py-5">
        <div className="grid grid-cols-2 items-start justify-items-start gap-x-2 gap-y-3 sm:gap-x-4 lg:grid-cols-4 lg:items-center lg:justify-items-center lg:gap-4">
          {items.map((item) => {
            const Icon = ICONS[item.icon] ?? BadgeCheck;
            return (
              <div key={item.label} className="flex w-full min-w-0 items-center justify-start gap-1.5 sm:gap-2 lg:justify-center">
                <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded md:h-7 md:w-7 ${variant === 'dark' ? 'bg-navy-700' : 'bg-white border border-steel-200'}`}>
                  <Icon className={`h-2.5 w-2.5 md:h-3.5 md:w-3.5 ${variant === 'dark' ? 'text-safety-400' : 'text-safety-500'}`} />
                </div>
                <span className={`min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-[7px] font-semibold leading-tight min-[360px]:text-[8px] sm:text-[11px] md:text-xs lg:text-sm ${variant === 'dark' ? 'text-navy-50' : 'text-navy-700'}`}>
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
