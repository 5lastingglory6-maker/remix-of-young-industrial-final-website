const STATS = [
  { value: '35+', label: 'Years in business' },
  { value: '500+', label: 'Projects delivered' },
  { value: '1,000+', label: 'Homes & businesses serviced' },
  { value: '2', label: 'NL service locations' },
];

export default function StatsSection() {
  return (
    <section className="bg-navy-900" aria-labelledby="statsHeading">
      <div className="container-8xl py-14">
        <h2 id="statsHeading" className="sr-only">Company stats</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center md:border-r md:border-navy-700 md:last:border-r-0">
              <div className="font-heading text-4xl font-bold text-safety-400 md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-navy-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
