import { useState } from 'react';
import { Mail, UserRound } from 'lucide-react';
import { Link } from '@/components/SiteLink';

type Member = { name: string; role: string; bio: string };

const GROUPS: { id: string; label: string; members: Member[] }[] = [
  {
    id: 'exec',
    label: 'Executive Leadership',
    members: [
      {
        name: 'Mike Young',
        role: 'President & General Manager',
        bio:"As founder and President of Young's Industrial, Mike provides the strategic leadership behind the company's continued growth throughout Atlantic Canada. With more than three decades of experience in industrial fabrication, welding, refrigeration, and mechanical systems, he oversees major industrial projects, long-term client partnerships, and the company's overall direction.",
      },
      {
        name: 'Ena Young',
        role: 'Business Manager',
        bio:"Ena leads the administrative and operational side of Young's Industrial, ensuring projects are supported by strong organizational systems, regulatory compliance, and effective business management. Her leadership in finance, human resources, and corporate administration helps keep every project running efficiently.",
      },
    ],
  },
  {
    id: 'ops',
    label: 'Operations',
    members: [
      {
        name: 'Gerry Greening',
        role: 'Operations Manager',
        bio: 'Gerry oversees the day-to-day coordination of manufacturing operations, workforce scheduling, equipment utilization, and safety compliance. His experience managing complex industrial projects ensures work is completed efficiently while maintaining the highest standards of quality and workplace safety.',
      },
      {
        name: 'Trevor Young',
        role: 'Industrial Projects & Field Superintendent',
        bio:"Trevor manages field operations across industrial construction, fabrication, piping, and mechanical installations. Working closely with project teams and clients, he ensures every site operates safely, efficiently, and according to schedule, regardless of project size or complexity.",
      },
      {
        name: 'Jonathan Young',
        role: 'Thermal Systems & Fleet Lead',
        bio: 'Jonathan specializes in industrial refrigeration and mechanical service operations, coordinating emergency response, equipment deployment, and technical field support. His expertise helps clients maintain reliable refrigeration systems in demanding industrial environments.',
      },
    ],
  },
  {
    id: 'fin',
    label: 'Finance & Estimating',
    members: [
      {
        name: 'Brenda Chard',
        role: 'Accounting Manager',
        bio:"Brenda manages the company's financial operations, supporting projects through accurate budgeting, payroll, accounting, and financial administration. Her work ensures every project is backed by sound financial management and efficient business processes.",
      },
      {
        name: 'Courtney Penney',
        role: 'Technical Estimator & Project Coordinator',
        bio: 'Courtney works closely with clients from the earliest stages of a project, preparing detailed estimates, coordinating schedules, and ensuring every proposal reflects the technical requirements of the work. Her attention to detail helps transform project concepts into successful outcomes.',
      },
    ],
  },
];

export default function TeamSection() {
  const [active, setActive] = useState(GROUPS[0]!.id);
  const group = GROUPS.find((g) => g.id === active) ?? GROUPS[0]!;

  return (
    <section className="section-pad bg-navy-950" aria-labelledby="teamHeading">
      <div className="container-8xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow inline-flex items-center gap-2 text-safety-400">
            <span className="h-0.5 w-4 bg-safety-400" aria-hidden="true" />
            Meet the Team
            <span className="h-0.5 w-4 bg-safety-400" aria-hidden="true" />
          </p>
          <h2 id="teamHeading" className="mt-4 font-heading text-3xl font-bold text-white md:text-4xl">
            The people behind every successful project
          </h2>
          <p className="mt-4 text-lg text-navy-100">
            For more than 35 years, Young's Industrial has built its reputation on the expertise,
            dedication, and professionalism of its people. From executive leadership and project
            management to field operations and estimating, every member of our team plays a critical
            role in delivering safe, reliable, and high-quality solutions across Atlantic Canada.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Team departments">
          {GROUPS.map((g) => {
            const isActive = g.id === active;
            return (
              <button
                key={g.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(g.id)}
                className={`rounded-full border px-6 py-2.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'border-safety-500 bg-safety-500 text-white'
                    : 'border-white/10 text-navy-100 hover:border-white/30 hover:text-white'
                }`}
              >
                {g.label}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {group.members.map((m) => (
            <div
              key={m.name}
              className="relative rounded-xl border border-white/10 bg-navy-900 p-6"
            >
              <span className="absolute inset-y-0 left-0 w-[3px] bg-safety-500" aria-hidden="true" />

              {/* Top row: photo, name/role, contact button */}
              <div className="flex items-start gap-4">
                <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-steel-600 to-navy-900 text-center">
                  <UserRound className="h-5 w-5 text-white/70" />
                  <span className="mt-1 px-1 text-[0.55rem] uppercase tracking-wide text-white/55">
                    Photo Placeholder
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-lg font-bold text-white">{m.name}</h3>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-safety-400">
                    {m.role}
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs font-semibold text-navy-100 transition-colors hover:border-safety-500 hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5" />
                  Contact
                </Link>
              </div>

              {/* Bio in its own full-width box */}
              <div className="mt-4 rounded-lg border border-white/10 bg-navy-950/50 p-4">
                <p className="text-sm text-navy-100">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
