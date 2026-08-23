import SectionHeading from './SectionHeading';

const COME_BY_CHANCE_SERVICES = [
  '8,00 square foot facility',
  'Full machine shop cnc machinery',
  'Full pipe welding shop with spinners and cutters',
  'Full structural steel shop with plasma',
  'Full line of mobile welding and machining equipment truck',
  'Full line of trailers to supply material to and from sites',
  'Full metal braking and rolling capability',
  'Full mechanical contractor',
  'Boom trucking services',
  'Trucking services',
  'Excavating/civil',
  'Snow clearing/sanding',
  'Sandblasting',
  'Painting',
  'Mechanic & mobile mechanic',
  '5 ton overhead crane',
  '10 ton overhead crane',
  'Lay down space rentals',
  'Equipment rentals',
];

export default function ComeByChanceServices() {
  return (
    <section className="section-pad bg-white">
      <div className="container-8xl">
        <SectionHeading
          align="center"
          eyebrow="Come By Chance Facility"
          title="In addition to the above at our Come By Chance location we offer the following"
        />
        <div className="mt-10 sm:mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 xl:grid-cols-5">
          {COME_BY_CHANCE_SERVICES.map((item) => (
            <div
              key={item}
              className="flex items-start gap-2 rounded-lg border border-steel-200 bg-white px-2 py-2.5 sm:gap-3 sm:px-4 sm:py-3"
            >
              <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-safety-500" />
              <span className="text-center text-[11px] font-medium leading-tight text-navy-700 sm:text-sm">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
