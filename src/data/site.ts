export const COMPANY = {
  name: "Young's Industrial Refrigeration Limited",
  shortName: "Young's Industrial",
  phone: '+1 (902) 555-0142',
  email: 'info@youngsindustrial.ca',
  address: '120 Industrial Park Road, Dartmouth, NS B3B 1A5, Canada',
  registration: 'NS Registry No. 0814-2907',
  hours: 'Mon–Fri: 7:00 AM – 5:00 PM AT',
  founded: 2000,
};

export const NAV_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Offices & Residential Services', to: '/residential-offices', children: [
    { label: 'Oil to Electric Rebate', to: '/residential-offices/oil-to-electric-rebate' },
    { label: 'Industrial Vacuum Services', to: '/residential-offices/industrial-vacuum-services' },
  ]},
  { label: 'Industrial & Commercial Services', to: '/industrial-commercial-services', children: [
    { label: 'Vacuum Truck Services', to: '/services/vacuum-truck-services' },
    { label: 'Fabrication Services', to: '/services/fabrication', children: [
      { label: 'Pulp & Paper', to: '/industries/pulp-and-paper' },
      { label: 'Power Generation', to: '/industries/power-generation' },
      { label: 'Municipal Water & Sewer', to: '/industries/municipal-water-sewer' },
      { label: 'Food Processing', to: '/industries/food-processing' },
      { label: 'Ice Making', to: '/industries/ice-making' },
      { label: 'Offshore & Oil & Gas', to: '/services/offshore-oil-gas' },
      { label: 'Oil & Gas', to: '/industries/oil-and-gas' },
    ]},
    { label: 'Refrigeration & HVAC Services', to: '/services/refrigeration', children: [
      { label: 'Marine Refrigeration', to: '/services/marine-refrigeration' },
    ]},
    { label: 'Custom Skids & Packages', to: '/services/custom-skids' },
    { label: 'Service & Maintenance', to: '/services/service-maintenance' },
  ]},
  { label: 'Products', to: '/products' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

export const TRUST_ITEMS = [
  { label: 'ISO-9001-2015 Certified', icon: 'badge-check' },
  { label: 'Canadian Welding Bureau Standards', icon: 'shield-check' },
  { label: '35 Years in Business', icon: 'award' },
  { label: 'Serving Atlantic Canada', icon: 'map-pin' },
];

export type ProjectCategory = 'Fabrication' | 'Refrigeration' | 'Marine' | 'Offshore';

export type ProjectSector =
  | 'Public Infrastructure'
  | 'Energy & Heavy Industry'
  | 'Marine & Seafood'
  | 'Institutional & Healthcare'
  | 'Fabrication'
  | 'Refrigeration'
  | 'Marine'
  | 'Offshore';

export interface ProjectStat {
  value: string;
  label: string;
}

export interface DeliveredItem {
  title: string;
  text: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  category: ProjectCategory;
  summary: string;
  image: string;
  gallery: string[];
  challenge: string;
  solution: string;
  result: string;
  scope: string[];
  /** Real client work — always sorted ahead of the legacy portfolio entries. */
  featured?: boolean;
  sector?: ProjectSector;
  /** Displayed in the banner meta row. */
  completed?: string;
  scopeLabel?: string;
  /** Case-study content, rendered only when present. */
  stats?: ProjectStat[];
  about?: string;
  delivered?: DeliveredItem[];
  callout?: string;
  outcome?: string;
  /** Tailwind gradient used for placeholder panels when no photo exists yet. */
  gradient?: string;
  bannerNote?: string;
  sideNote?: string;
  outcomeNote?: string;
}

const GRAD = {
  navy: 'bg-[linear-gradient(150deg,var(--color-navy-600),var(--color-navy-950))]',
  steel: 'bg-[linear-gradient(150deg,var(--color-steel-600),var(--color-navy-950))]',
  deep: 'bg-[linear-gradient(150deg,var(--color-navy-800),var(--color-navy-700))]',
  mixed: 'bg-[linear-gradient(150deg,var(--color-navy-700),var(--color-safety-600))]',
  ember: 'bg-[linear-gradient(150deg,var(--color-safety-500),var(--color-safety-700))]',
} as const;

/** Real client projects. These always appear before the legacy portfolio entries. */
export const REAL_PROJECTS: Project[] = [
  {
    slug: 'paradise-twin-arena',
    title: 'Town of Paradise — Twin Arena',
    client: 'Town of Paradise',
    industry: 'Public Recreation',
    location: 'Paradise, Newfoundland',
    category: 'Refrigeration',
    sector: 'Public Infrastructure',
    featured: true,
    completed: '2014',
    scopeLabel: 'Central Thermal Plant & Piping',
    gradient: GRAD.navy,
    image: '/__l5e/assets-v1/b0200281-43ff-41fc-9d90-66e01d6e59d3/p-industrial-cooling-compressor-2.jpg',
    gallery: [],
    summary:
      'Mechanical and piping contractor for the Paradise Double Ice Complex — two full-sized NHL rinks under one roof, built to LEED Silver standards.',
    bannerNote: 'Arena exterior, ice rink interior, or mechanical room during construction',
    sideNote: 'Sub-floor cooling pipe network before the concrete pour',
    outcomeNote: 'Completed ice surface or mechanical room control panel',
    stats: [
      { value: '83,400 sq ft', label: 'Facility footprint' },
      { value: '2', label: 'Full-sized NHL ice sheets' },
      { value: '$22M CAD', label: 'Total project value' },
      { value: 'LEED Silver', label: 'Certification achieved' },
    ],
    about:
      'The Paradise Double Ice Complex was built to house two full-sized, NHL-standard ice sheets operating simultaneously under one roof — a premier regional recreation hub engineered for the Town of Paradise with joint municipal and provincial infrastructure funding. Construction began in 2013, with the official grand opening in November 2014.',
    challenge:
      'Running two indoor rinks at once demands enormous energy and generates enormous byproduct heat — and the Town of Paradise required the complex to meet LEED Silver certification, which ruled out standard, high-emission commercial refrigeration equipment from the outset. The operational risk was equally real: any temperature fluctuation, sub-floor frost heave, or pipe joint leak could warp the ice surfaces, risking structural cracks, cancelled tournaments, and significant municipal repair costs.',
    delivered: [
      {
        title: 'Ammonia (R-717) central plant',
        text: "engineered to meet LEED Silver's strict environmental requirements, since ammonia carries zero ozone depletion and global warming potential",
      },
      {
        title: 'Sub-floor pipe spooling',
        text: 'miles of cooling loop pipe laid beneath both rinks, continuously welded to keep the floor flat and prevent frost heaving',
      },
      {
        title: 'Waste-heat recovery loop',
        text: 'captured byproduct heat from freezing the ice sheets and rerouted it to domestic hot water, sub-floor heating, and the spectator stands',
      },
      {
        title: 'Automated control systems',
        text: 'continuous monitoring of pressure, glycol flow, and compression loads, letting facility managers modulate both rinks independently',
      },
    ],
    callout:
      "A dual-rink facility under a hard LEED mandate isn't a standard refrigeration job — it meant designing a system that had to hit environmental targets, structural safety margins, and energy efficiency goals all at once, with zero room for a pipe joint failure under a poured concrete floor.",
    outcome:
      'The complex opened on schedule in late 2014 and remains a core piece of municipal recreation infrastructure in the region today. The high-efficiency mechanical loop helped the facility meet its energy targets by putting recaptured compressor heat to work rather than wasting it, and the project was recognized regionally for its impact on the community it serves.',
    solution:
      'A centralized ammonia plant, sub-floor pipe spooling, waste-heat recovery, and automated controls, engineered and integrated as a single thermal package.',
    result:
      'Opened on schedule in late 2014, meeting its LEED Silver energy targets with recaptured compressor heat.',
    scope: [
      'Design, prefabrication, and integration of the central ammonia thermal plant.',
      'Sub-floor cooling loop pipe networks beneath both NHL rinks.',
      'Custom waste-heat recovery loop feeding domestic hot water and spectator stands.',
      'Automated control integration for independent temperature control on both sheets.',
    ],
  },
  {
    slug: 'kkv-bull-arm-batch-plant',
    title: 'Kiewit Kvaerner — Bull Arm Batch Plant',
    client: 'Kiewit-Kvaerner Contractors (KKV)',
    industry: 'Oil & Gas',
    location: 'Bull Arm, Newfoundland',
    category: 'Fabrication',
    sector: 'Energy & Heavy Industry',
    featured: true,
    completed: '2011 – 2017',
    scopeLabel: 'Concrete Chilling & Batch Plant Integration',
    gradient: GRAD.steel,
    image: '/__l5e/assets-v1/0969a388-f64b-4022-b98a-fa6bb549ab46/p-fabrication-img.jpg',
    gallery: [],
    summary:
      'Concrete cooling and batch plant mechanical integration for the Hebron GBS — regulating pour temperatures on a megaproject scale.',
    bannerNote: 'Bull Arm fabrication yard or the Hebron GBS under construction',
    sideNote: 'Industrial water chilling array or flake-ice batching equipment',
    outcomeNote: 'Completed Hebron GBS platform or a mass concrete slip in progress',
    stats: [
      { value: '$14B+ CAD', label: 'Megaproject value' },
      { value: '600,000 t', label: 'GBS structure weight' },
      { value: '132,000 m³', label: 'Reinforced concrete placed' },
      { value: '1–4°C', label: 'Controlled mix water temperature' },
    ],
    about:
      'The Hebron Gravity Based Structure was built at the Bull Arm fabrication yard for Kiewit-Kvaerner Contractors, the tier-1 joint venture acting for ExxonMobil Canada, Chevron, Suncor, and Nalcor. Standing over 120 metres tall and weighing more than 600,000 tonnes, it remains one of the largest marine engineering feats in Canadian history. The deep-water construction phase ran from 2011 to 2017, with the platform towed to the Grand Banks in 2017.',
    challenge:
      'Pouring concrete in mass quantities creates immense internal heat through the heat of hydration. If the core of a wall heats up while the outside air cools it, the temperature differential triggers severe thermal cracking — and for a platform designed to sit in ice-filled North Atlantic saltwater for 30+ years, internal micro-cracks would be catastrophic. KKV required the mix to be discharged at a strictly controlled cold temperature, meaning the batch water had to be chilled continuously to near freezing right before it hit the mixing drums.',
    delivered: [
      {
        title: 'Industrial water chilling infrastructure',
        text: 'heavy-duty chilling arrays piped to continuously drop thousands of gallons of process water to roughly 1°C to 4°C',
      },
      {
        title: 'Ice-injection assembly support',
        text: 'structural and pipe spooling integration for automated flake-ice batching, letting crushed ice be injected straight into the mix to absorb the heat of hydration',
      },
      {
        title: 'ASME pressure piping loops',
        text: 'process water feed lines, glycol cooling loops, and high-pressure manifolds shop-fabricated and field-welded to survive heavy vibration and continuous flow',
      },
      {
        title: 'CWB-certified site services',
        text: 'mobile field machining, flange refacing, emergency rebuilds, and custom structural steel access walkways and pipe racks inside the active yard',
      },
    ],
    callout:
      'A single unscheduled stoppage could ruin thousands of tonnes of wet concrete. The chilling infrastructure and the mobile welding crews behind it had to work every hour of a continuous, 24/7 pour programme.',
    outcome:
      'The Hebron GBS was constructed on time, met every engineering metric, and was towed to the Grand Banks in 2017. The KKV batch plants held flawless temperature control throughout the massive concrete slips, and the structure achieved full density with zero thermal cracking anomalies.',
    solution:
      'Dual-division deployment: industrial water chilling and flake-ice batching integration on the batch plant, paired with CWB-certified mobile fabrication and millwright crews on-site.',
    result:
      'Zero thermal cracking anomalies across 132,000 m³ of concrete, with the GBS towed out on schedule in 2017.',
    scope: [
      'Installation and piping of high-capacity industrial water chilling arrays for concrete mix water.',
      'Structural and pipe spooling integration for automated flake-ice batching systems.',
      'ASME-code process water, glycol, and high-pressure manifold loops feeding the batch plant.',
      'CWB-certified structural steel fabrication and mobile field machining inside the Bull Arm yard.',
    ],
  },
  {
    slug: 'kkv-bull-arm-site-service',
    title: 'Kiewit Kvaerner — Bull Arm Site Service',
    client: 'Kiewit-Kvaerner Contractors (KKV)',
    industry: 'Oil & Gas',
    location: 'Bull Arm, Newfoundland',
    category: 'Offshore',
    sector: 'Energy & Heavy Industry',
    featured: true,
    completed: '2011 – 2017',
    scopeLabel: 'Mobile Fabrication, Millwrighting & Structural Steel',
    gradient: GRAD.deep,
    image: '/__l5e/assets-v1/cd7fe245-4e7f-421f-951f-60d9a494f914/p-ice-flakes-industrial-chemistry-cool-down.jpg',
    gallery: [],
    summary:
      'Mobile welding, structural fabrication, and field millwright services maintaining the mechanical support infrastructure across the Bull Arm yard.',
    bannerNote: 'Mobile welding truck or field crew inside an industrial fabrication yard',
    sideNote: 'Field machining, flange refacing, or a rotating equipment rebuild',
    about:
      'During the Hebron construction years, the Bull Arm yard operated as a fully functional, self-sustaining industrial city running 24/7. Young\u2019s deployed mobile welding, structural fabrication, and field millwright trucks to maintain, pipe, and service the vast web of mechanical support infrastructure the site depended on.',
    challenge:
      'With thousands of workers pouring concrete continuously on a sliding framework, a breakdown in any mechanical fluid line, conveyor, or batch manifold would freeze production. KKV needed a highly responsive regional mechanical contractor equipped with mobile fabrication trucks and code-certified welders able to handle immediate, heavy-duty plant alterations and structural steel repairs.',
    delivered: [
      {
        title: 'Mobile field machining & maintenance',
        text: 'in-situ alignment, flange refacing, and emergency rebuilds on heavy rotating pumps, bulk conveyors, and slurry motors',
      },
      {
        title: 'CWB-certified structural fabrication',
        text: 'custom heavy structural steel access walkways, equipment mounting brackets, safety guards, and pipe rack extensions adapted to the changing heights of the GBS',
      },
      {
        title: 'Multi-process marine welding',
        text: 'MIG, TIG, stick, and flux-cored procedures certified by the Canadian Welding Bureau to survive the harsh salt-air environment of the deep-water fabrication zone',
      },
    ],
    outcome:
      'The secondary utility frameworks across the yard stayed operational throughout the peak construction years, supporting a continuous pour programme without mechanical stoppages attributable to the support infrastructure.',
    solution:
      'A permanent on-site presence of CWB-certified welders, millwrights, and mobile fabrication trucks servicing the yard\u2019s mechanical utilities.',
    result:
      'Continuous mechanical availability across the yard through the peak years of the Hebron build.',
    scope: [
      'Mobile field machining, in-situ alignment, and flange refacing on heavy rotating equipment.',
      'CWB-certified structural steel walkways, brackets, guards, and pipe rack extensions.',
      'Multi-process marine welding certified for the deep-water fabrication environment.',
      'Emergency response and heavy-duty plant alterations inside an active 24/7 yard.',
    ],
  },
  {
    slug: 'labrador-ready-mix-muskrat-falls',
    title: 'Labrador Ready Mix — Muskrat Falls',
    client: 'Labrador Ready Mix (Béton Provincial)',
    industry: 'Hydroelectric Energy',
    location: 'Muskrat Falls, Labrador',
    category: 'Refrigeration',
    sector: 'Energy & Heavy Industry',
    featured: true,
    completed: '2014 – 2017',
    scopeLabel: 'Mass-Concrete Cooling & Ice Batching',
    gradient: GRAD.navy,
    image: '/__l5e/assets-v1/cd0e4398-b43d-4013-855f-be7ca0c1a0cd/p-custom-refrigeration-packages.jpg',
    gallery: [],
    summary:
      'Industrial-scale water chilling and flake-ice batching machinery for the concrete supply to the Muskrat Falls hydroelectric development.',
    bannerNote: 'Muskrat Falls dam site or a concrete batching plant in operation',
    sideNote: 'Screw chiller package or insulated thermal accumulation tanks',
    outcomeNote: 'Completed spillway, powerhouse, or a mass concrete pour',
    stats: [
      { value: '$13B+ CAD', label: 'Megaproject value' },
      { value: '450,000 m³', label: 'Structural concrete placed' },
      { value: '1–2°C', label: 'Target chilled water temperature' },
      { value: '−30°C', label: 'Winter site conditions' },
    ],
    about:
      'Labrador Ready Mix, a regional division of Béton Provincial, was the primary batch plant operator supplying the heavy civil consortia building the Muskrat Falls Hydroelectric Generating Station for Nalcor Energy. Young\u2019s designed, prefabricated, and integrated the cooling infrastructure directly into their high-volume batch plant assets through the peak pouring years.',
    challenge:
      'Hydro-dam spillways and powerhouse foundations are poured in blocks several metres thick. As the core cures, the heat of hydration climbs while the freezing Labrador air cools the exterior, and the differential triggers thermal cracking — unacceptable for a structure holding back the Churchill River. Blueprints enforced discharge temperatures below 15°C, often down to 10°C in summer. At the same time, standard water lines and cooling loops would freeze and fail outright in a site that routinely drops below −30°C.',
    delivered: [
      {
        title: 'Multi-stage screw chillers',
        text: 'high-displacement screw compressor chilling loops dropping thousands of gallons of raw process water to an exact 1°C to 2°C continuously',
      },
      {
        title: 'Thermal accumulation reservoirs',
        text: 'insulated structural water storage tanks fabricated and piped to hold a pre-chilled reserve so the batch plant never hit a thermal bottleneck',
      },
      {
        title: 'North Star flake-ice integration',
        text: 'high-tonnage industrial flake-ice makers installed adjacent to the mixing bins, with ASME B31.3 pneumatic feed spooling and structural auger casings for weight-monitored ice injection',
      },
      {
        title: 'Sub-arctic ruggedization',
        text: 'ASME B31.5 heavy-wall refrigeration loops fully insulated against environmental freezing, inside CWB-certified structural enclosures rated for sub-arctic wind and snow loads',
      },
    ],
    callout:
      'Because the pours ran day and night, any failure in the batch plant cooling loop would have halted a multi-billion dollar site and ruined massive batches of mixed cement.',
    outcome:
      'The concrete infrastructure at Muskrat Falls was completed with the spillway gates, powerhouse, and retaining walls meeting all structural safety metrics. Labrador Ready Mix consistently delivered concrete inside its thermal specification, and the mass pours cured with zero thermal cracking or density failures, even during peak production pushes.',
    solution:
      'A ruggedized industrial chilling plant with thermal storage and automated flake-ice batching, engineered specifically for continuous sub-arctic operation.',
    result:
      'Zero thermal cracking or structural density failures across 450,000 m³ of mass-poured concrete.',
    scope: [
      'Design and installation of a high-output industrial process water chilling plant.',
      'Fabrication and piping of insulated thermal accumulation reservoirs.',
      'Integration of North Star high-tonnage flake-ice equipment with ASME B31.3 pneumatic feed spooling.',
      'CWB-certified structural enclosures and fully insulated ASME B31.5 refrigeration loops.',
    ],
  },
  {
    slug: 'neal-bull-arm-camp',
    title: 'Neal — Bull Arm Camp Infrastructure',
    client: 'Neal',
    industry: 'Industrial Logistics',
    location: 'Bull Arm, Newfoundland',
    category: 'Refrigeration',
    sector: 'Energy & Heavy Industry',
    featured: true,
    completed: '2012 – 2016',
    scopeLabel: 'Cold Storage, Structural Framing & Field Service',
    gradient: GRAD.steel,
    image: '/__l5e/assets-v1/e799c73e-1cba-405e-987f-66a7f640484b/p-air-conditioning.jpg',
    gallery: [],
    summary:
      'Turnkey commercial cold storage, marine-grade structural framing, and 24/7 facility support for the Bull Arm industrial base camp.',
    bannerNote: 'Industrial base camp or a walk-in cold storage warehouse',
    sideNote: 'Multi-compressor refrigeration rack or galvanized condenser platform',
    stats: [
      { value: '500–1,200', label: 'Camp resident capacity' },
      { value: '24/7', label: 'Operating requirement' },
      { value: '4 yrs', label: 'Continuous service contract' },
      { value: 'Zero', label: 'Cold-chain failures' },
    ],
    about:
      'Neal provided living quarters, bulk food warehousing, and life-support utilities for the tier-1 consortiums working the Hebron project, running a self-sustaining 500-to-1,200-person industrial base camp inside the Bull Arm fabrication yard. Young\u2019s was selected as the primary mechanical, refrigeration, and fabrication subcontractor for its central cold storage infrastructure.',
    challenge:
      'The camp operated 24/7 with zero tolerance for downtime. If a centralized freezer or cooling loop failed for even a few hours, hundreds of thousands of dollars of perishable supplies would spoil and camp operations would halt. Compounding it, the yard sits directly on the Trinity Bay coastline, where standard condensing units and exposed manifolds suffer aggressive galvanic corrosion and can fail inside a single season.',
    delivered: [
      {
        title: 'Heavy-duty multi-compressor racks',
        text: 'redundant high-capacity racks wired to specialized evaporator coils, balancing cooling across multiple independent walk-in coolers and deep-freeze warehouses',
      },
      {
        title: 'ASME B31.5 cooling loops',
        text: 'refrigerant feed, suction, and condensate lines shop-fabricated, field-run, and pressure-tested for a 100% leak-free lifespan under continuous load',
      },
      {
        title: 'CWB-certified marine-grade framing',
        text: 'hot-dip galvanized structural steel mounting platforms, protective condenser cages, and overhead pipe racks built to withstand coastal weathering',
      },
      {
        title: '24/7 emergency field service',
        text: 'mobile service trucks dispatched for routine maintenance, compressor oil testing, coil cleanings, and emergency troubleshooting on a predictive maintenance schedule',
      },
    ],
    outcome:
      'The camp operated flawlessly throughout the peak years of the Hebron development, housing, feeding, and supporting thousands of construction workers without a single cold-chain or facility failure.',
    solution:
      'A redundant, marine-grade refrigeration plant with galvanized structural protection and dedicated lifecycle field service.',
    result:
      'Perfect thermal control across all storage assets for the duration of the megaproject.',
    scope: [
      'Installation of redundant multi-compressor racks serving walk-in coolers and deep-freeze warehouses.',
      'ASME B31.5 refrigerant, suction, and condensate piping, fully pressure-tested.',
      'CWB-certified hot-dip galvanized platforms, condenser cages, and overhead pipe racks.',
      'Stainless steel sanitary interior fit-outs and a 24/7 mobile field service programme.',
    ],
  },
  {
    slug: 'north-atlantic-refinery',
    title: 'North Atlantic Refinery',
    client: 'Braya Renewable Fuels (formerly NARL)',
    industry: 'Oil & Gas',
    location: 'Come By Chance, Newfoundland',
    category: 'Fabrication',
    sector: 'Energy & Heavy Industry',
    featured: true,
    completed: '2015 – 2024 (ongoing)',
    scopeLabel: 'Turnaround Piping, Fabrication & Millwrighting',
    gradient: GRAD.deep,
    image: '/__l5e/assets-v1/cd7fe245-4e7f-421f-951f-60d9a494f914/p-ice-flakes-industrial-chemistry-cool-down.jpg',
    gallery: [],
    summary:
      'ASME B31.3 process pipe spooling, structural fabrication, and turnaround millwright support at the Come By Chance refinery.',
    bannerNote: 'Refinery process piping, cracking towers, or the Come By Chance site',
    sideNote: 'CNC pipe profiling or prefabricated spools in the fabrication shop',
    outcomeNote: 'Radiographic weld inspection or a completed pipe rack',
    stats: [
      { value: '130,000 bpd', label: 'Refinery throughput' },
      { value: 'ASME B31.3', label: 'Process piping code' },
      { value: 'Zero', label: 'Weld-failure anomalies' },
      { value: 'First-pass', label: 'X-ray & hydrostatic results' },
    ],
    about:
      'The Come By Chance refinery is a 130,000 barrel-per-day deep-water crude processing facility that has since converted into one of the largest renewable diesel and sustainable aviation fuel hubs in North America. Young\u2019s uses the geographic proximity of its Come By Chance facility to act as a vital mechanical and fabrication contractor for Braya Renewable Fuels and their tier-1 construction management partners.',
    challenge:
      'Refinery loops carry volatile hydrocarbons, hydrogen gas, and corrosive catalysts at pressures and temperatures exceeding 400°C. A single sub-standard weld or unaligned flange means catastrophic pressure loss, fire hazard, and environmental contamination. During a turnaround, every hour offline costs hundreds of thousands of dollars, and thousands of specialized tasks run simultaneously in a cramped, high-risk environment with zero margin for dimensional error.',
    delivered: [
      {
        title: 'High-pressure ASME B31.3 spooling',
        text: 'code-compliant welding on heavy-wall carbon steel, low-temperature carbon steel, chrome-moly alloys, and 304/316L stainless',
      },
      {
        title: 'Controlled shop prefabrication',
        text: 'CNC plasma pipe profilers and chuck positioners producing complex spools off-site to isometric tolerances, cutting field welding time during tight turnaround windows',
      },
      {
        title: 'In-situ field machining',
        text: 'portable pneumatic flange-facing rigs remachining warped or leaking heat exchanger and valve flanges without removing the infrastructure',
      },
      {
        title: 'Heavy rotating equipment overhauls',
        text: 'precision tear-downs, laser alignments, and component rebuilds on high-pressure process pumps, multi-stage centrifugal compressors, and cooling tower fan arrays',
      },
    ],
    callout:
      'Every component requires absolute material traceability, documented non-destructive testing, and flawless alignment to pre-existing refinery headers before it goes anywhere near a live process block.',
    outcome:
      'The refinery has executed multiple major turnarounds and multi-million dollar renewable fuel conversions with zero weld-failure anomalies on Young\u2019s scope. Spools and structural assets consistently pass radiographic and hydrostatic testing on the first submission.',
    solution:
      'Shop prefabrication to isometric tolerances combined with rapid-deployment field crews for turnaround millwrighting and machining.',
    result:
      'Zero weld-failure anomalies and first-pass X-ray and hydrostatic results across multiple turnarounds.',
    scope: [
      'High-pressure ASME B31.3 process pipe spooling in carbon, chrome-moly, and stainless alloys.',
      'CNC shop prefabrication matched to refinery isometric drawings.',
      'In-situ flange facing and heavy rotating equipment overhauls during turnarounds.',
      'CWB-certified structural pipe racks, spring-hanger brackets, access platforms, and catwalks.',
    ],
  },
  {
    slug: 'asphalt-products-come-by-chance',
    title: 'Asphalt Products Inc.',
    client: 'Asphalt Products Inc.',
    industry: 'Chemical Processing',
    location: 'Come By Chance, Newfoundland',
    category: 'Fabrication',
    sector: 'Energy & Heavy Industry',
    featured: true,
    completed: '2016 – 2019',
    scopeLabel: 'Jacketed Hot-Oil Piping & Tank Structures',
    gradient: GRAD.ember,
    image: '/__l5e/assets-v1/0969a388-f64b-4022-b98a-fa6bb549ab46/p-fabrication-img.jpg',
    gallery: [],
    summary:
      'Jacketed hot-oil process piping, CWB anchor gantries, and tank access structures for an asphalt blending and distribution terminal.',
    bannerNote: 'Asphalt storage tanks or an insulated hot-oil pipe run',
    sideNote: 'Pipe-in-pipe jacketed spool fabrication in the shop',
    stats: [
      { value: '150°C+', label: 'Minimum line temperature' },
      { value: 'ASME B31.3', label: 'Process piping code' },
      { value: 'Zero', label: 'Thermal buckling failures' },
      { value: '2016–2019', label: 'Facility upgrade phase' },
    ],
    about:
      'Asphalt Products Inc. operates a high-output bitumen blending, storage, and distribution terminal adjacent to the shipping corridors of Come By Chance, handling massive volumetric flows of heavy, highly viscous petroleum byproducts that require continuous thermal regulation. Young\u2019s fabrication division was contracted to manufacture, weld, and install the high-temperature process piping and structural tank access assets for the facility expansion.',
    challenge:
      'Bitumen solidifies inside the system if line temperature drops below roughly 150°C, blocking lines, ruining thousands of feet of pipe, and destroying processing pumps. Because those lines run continuously hot, the steel undergoes aggressive expansion and contraction cycles — without precise piping geometry, expansion loops, and structural supports, lines buckle, tear out anchors, and rupture at the joints.',
    delivered: [
      {
        title: 'Pipe-in-pipe prefabrication',
        text: 'custom jacketed loops where the product pipe sits inside an outer casing carrying high-temperature thermal oil, keeping the asphalt continuously flowable',
      },
      {
        title: 'ASME B31.3 code welding',
        text: 'multi-layer welding procedures on every internal product weld and external jacket seal, engineered for constant severe thermal cycling without fatigue',
      },
      {
        title: 'CWB-certified anchor gantries',
        text: 'high-strength anchor blocks, structural slide guides, and spring-hanger racks letting hot lines expand along engineered paths without stressing tank headers',
      },
      {
        title: 'Field millwrighting & pump integration',
        text: 'laser-aligned installation of positive-displacement asphalt transfer pumps to minimize vibration and packing-gland wear',
      },
    ],
    outcome:
      'The terminal expansion was completed successfully, significantly increasing regional distribution and storage capacity. The lines have run with zero thermal buckling, binding, or joint fatigue failures, delivering a predictable, uninterrupted stream of asphalt production.',
    solution:
      'Jacketed pipe-in-pipe fabrication paired with engineered expansion anchoring and precision pump alignment.',
    result:
      'Zero thermal buckling, binding, or joint fatigue failures since commissioning.',
    scope: [
      'Fabrication and installation of custom jacketed hot-oil process piping loops.',
      'ASME B31.3 multi-layer code welding on product welds and jacket seals.',
      'CWB-certified anchor blocks, slide guides, and spring-hanger pipe racks.',
      'Welded tank access ladders, safety cages, and catwalks with industrial protective coatings.',
    ],
  },
  {
    slug: 'vytrell-voiseys-bay',
    title: "Vytrell Engineering — Voisey's Bay",
    client: 'Vytrell Engineering / Vale NL',
    industry: 'Mining',
    location: "Voisey's Bay, Labrador",
    category: 'Fabrication',
    sector: 'Energy & Heavy Industry',
    featured: true,
    completed: '2015 – 2018',
    scopeLabel: 'Low-Temperature Spooling & Modular Skids',
    gradient: GRAD.steel,
    image: '/__l5e/assets-v1/cd0e4398-b43d-4013-855f-be7ca0c1a0cd/p-custom-refrigeration-packages.jpg',
    gallery: [],
    summary:
      'Charpy-tested low-temperature pipe prefabrication and modular skid assemblies shipped to a remote sub-arctic nickel mine.',
    bannerNote: "Voisey's Bay mine site or a remote sub-arctic industrial facility",
    sideNote: 'Modular skid assembly or low-temperature pipe spools ready for shipping',
    outcomeNote: 'Radiographic or ultrasonic weld inspection in progress',
    stats: [
      { value: '−40°C', label: 'Design service temperature' },
      { value: 'A333 Gr.6', label: 'Low-temperature carbon steel' },
      { value: '100%', label: 'Flawless field fit-up' },
      { value: '100%', label: 'NDT weld verification' },
    ],
    about:
      "Vale's Voisey's Bay nickel mine is a world-class, multi-billion dollar asset in the deeply remote sub-arctic of northern Labrador. Young\u2019s fabricated high-precision, low-temperature modular assets and pipe spools for Vytrell Engineering, the tier-1 construction management firm executing mechanical, piping, and structural packages during the underground mine expansion.",
    challenge:
      'Standard carbon structural steels lose ductility and become brittle in northern Labrador winters that routinely fall below −40°C, and under the shock loads of heavy mining machinery they shatter-fracture. Voisey\u2019s Bay also has no road access: everything ships by marine cargo during tight summer ice-clearance windows or flies in. A prefabricated spool arriving with even a minor dimensional error cannot be easily replaced.',
    delivered: [
      {
        title: 'Charpy V-notch compliant welding',
        text: 'specialized procedures on low-temperature carbon steel such as ASTM A333 Grade 6 and high-strength stainless, impact-tested to prove toughness at sub-zero temperatures',
      },
      {
        title: 'Rigorous quality documentation',
        text: '100% dimensional verification against Vytrell CAD files, with material heat-number logging, Material Test Reports, and continuous weld mapping',
      },
      {
        title: 'CWB-certified modular skids',
        text: 'heavy-duty equipment mounting skids, structural pipe rack modules, and manifold enclosures built for high-fatigue mining environments',
      },
      {
        title: 'Full NDT verification',
        text: 'radiographic, ultrasonic, and liquid penetrant inspection on every asset before release into the marine logistics pipeline',
      },
    ],
    callout:
      'With no road access and a single shipping window, every spool had to be right the first time. Dimensional verification was not a formality — it was the whole risk model.',
    outcome:
      'Every asset achieved 100% flawless field fit-up with zero dimensional rework. The infrastructure has since withstood years of punishing sub-arctic winters and continuous mining vibration with zero embrittlement cracking or structural joint failures.',
    solution:
      'Impact-tested metallurgy, exhaustive NDT, and full dimensional verification before anything entered the shipping window.',
    result: '100% flawless field fit-up with zero embrittlement cracking to date.',
    scope: [
      'Low-temperature impact-tested process and utility pipe spooling to ASME B31.3.',
      'Charpy V-notch qualified welding procedures on A333 Grade 6 and stainless alloys.',
      'CWB-certified modular skids, pipe rack modules, and manifold enclosures.',
      'Full radiographic, ultrasonic, and liquid penetrant NDT with complete documentation.',
    ],
  },
  {
    slug: 'quinlan-processing-facility',
    title: 'Quinlan Processing Facility',
    client: 'Quinlan Brothers Ltd.',
    industry: 'Seafood Processing',
    location: 'Bay de Verde, Newfoundland',
    category: 'Refrigeration',
    sector: 'Marine & Seafood',
    featured: true,
    completed: '2017',
    scopeLabel: 'Refrigeration & Mechanical Contract',
    gradient: GRAD.mixed,
    image: '/__l5e/assets-v1/d0c0acc5-f409-48c7-a540-a702e3aeeddc/p-geneglace-flake-ice-seafood-processsing.jpg',
    gallery: [],
    summary:
      'The refrigeration and mechanical contract for a crab processing plant rebuilt from the ground up after a fire — fast-tracked for the 2017 season.',
    bannerNote: 'Quinlan Brothers processing facility, Bay de Verde',
    sideNote: 'Industrial ammonia machine room or blast freezer tunnel',
    outcomeNote: 'Sanitary stainless steel processing line or conveyor enclosure',
    stats: [
      { value: '100,000 sq ft', label: 'Rebuilt facility footprint' },
      { value: '700+', label: 'Plant jobs protected' },
      { value: '<12 months', label: 'Design to operational' },
      { value: 'April 2017', label: 'On-time start-up' },
    ],
    about:
      'On 11 April 2016 a pre-dawn structural fire completely levelled the Quinlan Brothers seafood plant in Bay de Verde, displacing roughly 700 workers at the start of the processing season. Quinlan Brothers rebuilt from the ground up with the Marco Group managing the structural shell, and Young\u2019s Industrial Refrigeration was awarded the master Refrigeration & Mechanical Contract to engineer the entire heart of the new facility.',
    challenge:
      'The mandate was non-negotiable: a completely new, ultra-modern facility designed, fabricated, piped, and operational by April 2017 to save the next snow crab and northern shrimp season. That gave subcontractors under a year for a mechanical deployment that traditionally takes 18 to 24 months. On top of the timeline, the plant needed high-tonnage flash-freezing capacity and 100% CFIA-compliant product-contact surfaces free of any pit or crevice that could harbour Listeria.',
    delivered: [
      {
        title: 'ASME B31.5 ammonia refrigeration loops',
        text: 'heavy-wall R-717 piping networks prefabricated and field-routed to the freezing tunnels, welded to ASME Section IX',
      },
      {
        title: 'High-tonnage blast freezer integration',
        text: 'multi-stage industrial screw compressors and high-velocity evaporator coil arrays flash-freezing hundreds of thousands of pounds of fresh catch daily',
      },
      {
        title: 'Argon-backed TIG sanitary welding',
        text: 'every product-line joint hand-welded with high-purity Argon shielding, with internal beads ground flat and polished to eliminate bacterial catch points',
      },
      {
        title: 'Off-site modular prefabrication',
        text: 'complete piping headers, distribution manifolds, and steel equipment skids pre-tested off-site and shipped for immediate bolt-up, trimming months off the schedule',
      },
    ],
    callout:
      'An industrial seafood facility is useless without high-capacity thermal control. The mechanical scope was the critical path of the entire rebuild.',
    outcome:
      'The plant achieved full operational start-up in April 2017, precisely on time for the snow crab season. The ammonia plant and sanitary stainless structures have delivered zero-downtime reliability through subsequent peak seasons with flawless CFIA sanitary tracking scores, and the facility has since added a modern farmed Atlantic salmon processing line on the same mechanical foundation.',
    solution:
      'Off-site modular prefabrication of the entire refrigeration and sanitary scope, assembled on-site inside a compressed rebuild window.',
    result:
      'Operational on schedule for the April 2017 season, protecting over 700 regional jobs.',
    scope: [
      'Master Refrigeration & Mechanical Contract for a 100,000 sq ft ground-up rebuild.',
      'ASME B31.5 industrial ammonia piping and high-tonnage blast freezer integration.',
      'Argon-backed TIG sanitary stainless fabrication for all product-contact lines.',
      'Open-profile conveyor enclosures, washing stations, and sorting tables for rapid sanitation.',
    ],
  },
  {
    slug: 'true-north-salmon',
    title: 'True North Salmon',
    client: 'Cooke Aquaculture Inc.',
    industry: 'Aquaculture',
    location: "St. George's, New Brunswick",
    category: 'Marine',
    sector: 'Marine & Seafood',
    featured: true,
    completed: '2015 – 2016',
    scopeLabel: 'Slurry Ice, CSW Systems & Sanitary Fabrication',
    gradient: GRAD.mixed,
    image: '/__l5e/assets-v1/b8f434c7-fd20-41af-b1c1-3c2974e76ea2/p-marine-refrigeration.jpg',
    gallery: [],
    summary:
      "Slurry-ice and chilled seawater systems plus 316L sanitary fabrication for Cooke Aquaculture's salmon processing hub in New Brunswick.",
    bannerNote: 'Salmon processing facility or dockside harvest handling',
    sideNote: 'Slurry-ice generator or chilled seawater holding tanks',
    outcomeNote: '316L stainless washing stations or open-profile conveyor framing',
    stats: [
      { value: '316L', label: 'Marine-grade stainless throughout' },
      { value: 'ASME B31.5', label: 'Refrigeration piping code' },
      { value: 'CFIA', label: 'Full sanitary compliance' },
      { value: 'Zero', label: 'Contamination anomalies' },
    ],
    about:
      'True North Salmon is the flagship commercial brand of Cooke Aquaculture, the largest independent, vertically integrated marine farming corporation in North America. Young\u2019s deployed its dual-certified mechanical and fabrication teams across provincial lines to build out the plant\u2019s core cold-chain and material handling infrastructure during a major processing line expansion.',
    challenge:
      'Once salmon are harvested from sea-cages their core temperature must drop to near freezing immediately, or cellular degradation ruins the export grade of the fish. The environment is also brutally corrosive — raw saltwater, organic fish fluids, and high-concentration sanitizers destroy standard steels within months. And because Cooke exports globally, every weld on a product line must be seamless: a single microscopic pit can harbour Listeria and cost the plant its export licence.',
    delivered: [
      {
        title: 'Advanced slurry-ice infrastructure',
        text: 'industrial ice generators producing fluid sub-zero slurry that encapsulates the fish without bruising and pulls heat out far faster than flake ice',
      },
      {
        title: 'ASME B31.5 refrigeration piping',
        text: 'high-pressure freon, glycol, and chilled process fluid lines shop-fabricated and field-run for a leak-free lifespan under continuous heavy pumping',
      },
      {
        title: 'Premium 316L stainless fabrication',
        text: 'custom fish-washing stations, product chutes, and processing enclosures in marine-grade 316L for maximum saltwater and chemical resistance',
      },
      {
        title: 'Open-profile washdown framing',
        text: 'conveyor frames built without hollow tubes or closed pockets so sanitation crews can spray down, sterilize, and visually inspect the whole line between shifts',
      },
    ],
    outcome:
      'The expansion gave Cooke Aquaculture one of the most efficient, sanitary, and technically advanced salmon processing operations on the Atlantic coast. The plant handles large daily processing quotas while maintaining flawless CFIA sanitary tracking scores and zero bacterial contamination anomalies.',
    solution:
      'A high-capacity slurry-ice and chilled seawater cold chain paired with fully sanitary 316L product handling infrastructure.',
    result:
      'Optimized cold chain with perfect CFIA compliance and zero contamination anomalies.',
    scope: [
      'Integration of high-tonnage slurry-ice generators and chilled seawater cooling loops.',
      'ASME B31.5 refrigeration and process fluid piping to the holding tanks.',
      'Custom 316L stainless washing stations, chutes, and processing enclosures.',
      'Argon-backed TIG welding with polished internal beads on all product-contact lines.',
    ],
  },
  {
    slug: 'fogo-island-coop',
    title: 'Fogo Island Co-op',
    client: 'Fogo Island Co-operative Society Ltd.',
    industry: 'Seafood Processing',
    location: 'Fogo Island, Newfoundland',
    category: 'Marine',
    sector: 'Marine & Seafood',
    featured: true,
    completed: 'Ongoing multi-year contract',
    scopeLabel: 'Ammonia Prefabrication, Ice Augers & Sanitary Steel',
    gradient: GRAD.navy,
    image: '/__l5e/assets-v1/d0c0acc5-f409-48c7-a540-a702e3aeeddc/p-geneglace-flake-ice-seafood-processsing.jpg',
    gallery: [],
    summary:
      'Ruggedized ammonia piping prefabrication, ice delivery augers, and sanitary fabrication for a three-plant remote-island fish processing operation.',
    bannerNote: 'Fogo Island Co-op processing plant or dockside offloading slip',
    sideNote: 'Stainless steel ice auger or prefabricated ammonia header manifold',
    stats: [
      { value: '3', label: 'Processing plants serviced' },
      { value: '316L', label: 'Marine-grade stainless' },
      { value: 'ASME B31.5', label: 'Refrigeration piping code' },
      { value: 'Zero', label: 'Structural or corrosion failures' },
    ],
    about:
      'The Fogo Island Co-operative Society operates three high-volume seafood processing plants on a remote island off the northeast coast of Newfoundland, handling tens of millions of pounds of snow crab, cold-water shrimp, pelagics, and groundfish annually. It is a globally recognized model of community-owned industrial economics, and Young\u2019s manufactures and delivers ruggedized industrial assets built specifically for that isolation.',
    challenge:
      'Fogo Island has no fixed land link — every machine, structural member, and mechanical part travels by marine ferry. If a blast freezer compressor, ice plant auger, or sanitary fluid line fails during the peak of the snow crab season, the co-op cannot wait weeks for a replacement part. Every lost hour backs up product, risks spoiling raw catches, and threatens the incomes of hundreds of local fishers and plant workers.',
    delivered: [
      {
        title: 'ASME B31.5 ammonia prefabrication',
        text: 'heavy-wall R-717 header manifolds and liquid distribution spools built under controlled shop conditions, ferried out and bolted together instantly in the field',
      },
      {
        title: 'Industrial flake-ice delivery augers',
        text: 'custom heavy-wall stainless augers and distribution troughs rolled, welded, and balanced to restore the automated ice lines supplying the fishing fleet',
      },
      {
        title: 'Sanitary 316L and aluminium fabrication',
        text: 'seafood sorting tables, inspection chutes, and processing enclosures in marine-grade stainless and high-strength aluminium alloys',
      },
      {
        title: 'Argon-shielded TIG welds',
        text: 'every product-contact weld ground flat, blended, and polished so no crevice or pinhole survives a CFIA audit',
      },
    ],
    callout:
      'Across a ferry-dependent supply line, prefabricated components have to achieve a flawless field fit-up on the first try. There is no second delivery inside a crab season.',
    outcome:
      'The co-op has modernized its multi-plant processing infrastructure while keeping operations running. The augers, refrigeration spools, and sanitary lines have survived years of heavy continuous use and harsh marine salt air with zero structural failures or corrosion anomalies.',
    solution:
      'Controlled off-site prefabrication of drop-in modules, paired with rapid-deployment mobile field service.',
    result:
      'Zero structural failures or corrosion anomalies across years of continuous island operation.',
    scope: [
      'Shop prefabrication of ASME B31.5 ammonia header manifolds and distribution spools.',
      'Custom heavy-wall stainless flake-ice delivery augers, troughs, and casings.',
      'Sanitary 316L stainless and aluminium sorting tables, chutes, and enclosures.',
      'Open-profile washdown framing for rapid chemical sterilization between shifts.',
    ],
  },
  {
    slug: 'ocean-choice-international',
    title: 'Ocean Choice International',
    client: 'Ocean Choice International',
    industry: 'Seafood Processing',
    location: "St. John's, Newfoundland",
    category: 'Marine',
    sector: 'Marine & Seafood',
    featured: true,
    completed: 'Ongoing',
    scopeLabel: 'Marine Fabrication & Mechanical Overhauls',
    gradient: GRAD.deep,
    image: '/__l5e/assets-v1/aa97aca2-81f2-4a3f-992b-7ba5db07bf33/p-marine-refigiration.jpg',
    gallery: [],
    summary:
      'Ongoing marine fabrication and mechanical overhauls across a fleet of deep-sea factory freezer trawlers and processing plants.',
    bannerNote: 'Factory freezer trawler at berth or a vessel refit in progress',
    about:
      'Ocean Choice International is a vertically integrated seafood enterprise operating a fleet of deep-sea factory freezer trawlers alongside multiple processing plants across Atlantic Canada. Young\u2019s provides ongoing marine fabrication and mechanical overhaul support across those assets.',
    challenge:
      'Vessel work runs to the schedule of the fishing season, not the shop. Structural alterations and cargo-chilling overhauls have to be executed dockside inside short windows, on assets that face continuous salt exposure and heavy operating cycles.',
    delivered: [
      {
        title: 'High-strength structural alterations',
        text: 'welded structural modifications executed directly onto fishing vessels',
      },
      {
        title: 'Ammonia cargo-chilling overhauls',
        text: 'teardown and rebuild of onboard ammonia cargo-chilling compressor loops',
      },
    ],
    outcome:
      'Continuous fabrication and mechanical support keeps the fleet and plant assets in service across successive fishing seasons.',
    solution:
      'Dockside structural welding and onboard refrigeration overhauls delivered inside short vessel windows.',
    result: 'Sustained availability across the fleet and plant assets.',
    scope: [
      'High-strength structural welding and alterations on fishing vessels.',
      'Overhaul of onboard ammonia cargo-chilling compressor loops.',
      'Ongoing marine mechanical support across multiple processing plants.',
    ],
  },
  {
    slug: 'torngat-fish-producers-coop',
    title: 'Torngat Fish Producers Coop',
    client: 'Torngat Fish Producers Co-operative Society Ltd.',
    industry: 'Seafood Processing',
    location: 'Happy Valley-Goose Bay, Labrador',
    category: 'Marine',
    sector: 'Marine & Seafood',
    featured: true,
    completed: 'Ongoing service & supply contract',
    scopeLabel: 'Ice Plant Augers & Sanitary Metalwork',
    gradient: GRAD.steel,
    image: '/__l5e/assets-v1/b8f434c7-fd20-41af-b1c1-3c2974e76ea2/p-marine-refrigeration.jpg',
    gallery: [],
    summary:
      'Heavy-duty ice plant delivery augers, freezer coils, and sanitary sorting tables for a sub-arctic Labrador coastal fish co-op.',
    bannerNote: 'Torngat processing facility or a northern offloading station',
    sideNote: 'Heavy-wall stainless auger flights on a machined central shaft',
    stats: [
      { value: '−40°C', label: 'Winter operating conditions' },
      { value: '304/316L', label: 'Stainless grades used' },
      { value: '100%', label: 'Operational performance' },
      { value: 'Zero', label: 'Embrittlement fractures' },
    ],
    about:
      'The Torngat Co-op operates critical processing facilities in remote Labrador and coordinates a network of rural offloading stations that process millions of pounds of Arctic char, Greenland halibut, and snow crab caught along the sub-arctic coastline by indigenous and local fishers.',
    challenge:
      'Goose Bay and the northern offloading stations are heavily isolated, with no road links to the northernmost communities, and equipment must survive winters below −40°C where standard metals lose ductility and shatter-fracture under shock loads. Processing snow crab and turbot also demands continuous volumes of sub-zero flake ice, and moving crushed ice and abrasive shellfish carapaces subjects augers and chutes to extreme localized friction and accelerated wear.',
    delivered: [
      {
        title: 'Precision auger flight fabrication',
        text: 'heavy-wall carbon and stainless flights rolled, welded, and mounted onto precision-machined central shafts for high-torque ice moving without bending or binding',
      },
      {
        title: 'Ruggedized troughs & casings',
        text: 'thick-wall stainless auger troughs and delivery casings with continuous high-strength welds to withstand friction and moisture',
      },
      {
        title: 'Sanitary 304/316L and aluminium metalwork',
        text: 'custom fish-sorting tables, washing bins, and product chutes in premium stainless and marine-grade aluminium to eliminate saltwater pitting',
      },
      {
        title: 'Hygienic weld profiles',
        text: 'Argon-shielded TIG welds ground flat, blended, and polished so no microscopic crack can hold organic waste',
      },
    ],
    outcome:
      'The custom augers, conveyance housings, and sanitary lines have achieved 100% operational performance under brutal sub-arctic production conditions, surviving years of localized friction, high-pressure chemical washdowns, and extreme thermal drops with zero structural failures or embrittlement fractures.',
    solution:
      'Low-maintenance, impact-tolerant components fabricated to drop straight into an isolated northern logistics pipeline.',
    result:
      '100% operational performance with zero structural failures or embrittlement fractures.',
    scope: [
      'Rebuild and optimization of automated ice plant delivery augers and conveyance systems.',
      'Heavy-wall stainless auger flights on precision-machined shafts, with ruggedized troughs.',
      'Walk-in freezer coils and heavy-duty welded sorting tables for rough marine conditions.',
      'Sanitary 304/316L stainless and aluminium product handling metalwork to CFIA standards.',
    ],
  },
  {
    slug: 'eastern-health-burin',
    title: 'Eastern Health — Burin',
    client: 'Eastern Health (NL Health Services)',
    industry: 'Healthcare',
    location: 'Burin, Newfoundland',
    category: 'Refrigeration',
    sector: 'Institutional & Healthcare',
    featured: true,
    completed: 'Multi-phase mechanical contracts',
    scopeLabel: 'Central Chiller Plant & Utility Piping',
    gradient: GRAD.navy,
    image: '/__l5e/assets-v1/e799c73e-1cba-405e-987f-66a7f640484b/p-air-conditioning.jpg',
    gallery: [],
    summary:
      'Central chiller plant integration, ASME code utility piping, and CWB equipment foundations at the Burin Peninsula Health Care Centre.',
    bannerNote: 'Hospital central utility plant or a multi-ton chiller installation',
    sideNote: 'Large-diameter chilled water manifolds and vibration-dampened headers',
    about:
      'The Burin Peninsula Health Care Centre is a regional public health asset with emergency wings, acute care units, and sterile surgical suites requiring non-stop environmental control. Young\u2019s won the institutional mechanical contract to manufacture, weld, and integrate the central cooling utility loops and equipment foundations.',
    challenge:
      'Surgical suites and intensive care units require uncompromised control over air change rates, humidity, and temperature. Any unplanned failure or pressure loss in the chiller plant or distribution loops triggers a healthcare emergency. The multi-ton chillers also generate heavy mechanical vibration that places continuous stress on piping joints and anchor points, so every loop had to meet ASME B31.1 and B31.3 with certified structural framing behind it.',
    delivered: [
      {
        title: 'ASME code piping prefabrication',
        text: 'large-diameter chilled water manifolds, condenser line spools, and glycol headers shop-fabricated and field-routed to ASME Section IX welding codes',
      },
      {
        title: 'Vibration-dampened headers',
        text: 'flexible expansion loops and dampened header connections protecting the plant from constant high-displacement compressor movement',
      },
      {
        title: 'CWB-certified equipment foundations',
        text: 'high-strength, low-vibration structural steel base plates and mounting skids securing the primary chilling machinery',
      },
      {
        title: 'Full NDT verification',
        text: 'hydrostatic pressure testing and liquid penetrant inspection before tie-in to the live hospital utility grid',
      },
    ],
    outcome:
      'The chiller loops and structural utility assets achieved flawless operational sign-off and continue to run reliably, managing thousands of hours of continuous compression and vibration with zero weld stress anomalies or fluid pressure drops.',
    solution:
      'ASME-code fluid loops on CWB-certified foundations, fully NDT-verified before tie-in to a live hospital grid.',
    result:
      'Flawless operational sign-off with zero weld stress anomalies or pressure drops.',
    scope: [
      'Prefabrication and field routing of large-diameter chilled water and glycol headers.',
      'Vibration-dampened expansion loops and header connections at the chiller plant.',
      'CWB-certified structural equipment skids, access platforms, and overhead hangers.',
      'Hydrostatic and liquid penetrant NDT verification prior to utility tie-in.',
    ],
  },
  {
    slug: 'eastern-health-clarenville',
    title: 'Eastern Health — Clarenville',
    client: 'Eastern Health (NL Health Services)',
    industry: 'Healthcare',
    location: 'Clarenville, Newfoundland',
    category: 'Refrigeration',
    sector: 'Institutional & Healthcare',
    featured: true,
    completed: 'Multi-phase mechanical contracts',
    scopeLabel: 'Central Chiller Plant & Utility Piping',
    gradient: GRAD.deep,
    image: '/__l5e/assets-v1/7e61bc26-a5cc-418a-8404-739263a25d20/p-about-us-image-2.jpg',
    gallery: [],
    summary:
      'Central cooling utility loops, medical cold storage, and CWB structural foundations at the Dr. G.B. Cross Memorial Hospital.',
    bannerNote: 'Dr. G.B. Cross Memorial Hospital or its central utility complex',
    sideNote: 'Overhead utility piping runs inside a hospital mechanical room',
    about:
      'The Dr. G.B. Cross Memorial Hospital in Clarenville is a regional institutional medical hub under Eastern Health. Young\u2019s acted as the institutional mechanical contractor, building custom steel equipment foundations, installing heavy chillers, and welding the main fluid and air cooling manifold lines alongside the hospital\u2019s sensitive medical cold storage.',
    challenge:
      'Hospital utility blocks run sprawling chilled water loops and high-pressure steam distribution networks that cannot be taken offline. Work had to proceed inside an operating healthcare environment with zero tolerance for pressure loss, and every joint had to meet ASME B31.1 and B31.3 while resisting vibration-induced fatigue from the multi-ton chillers.',
    delivered: [
      {
        title: 'Heavy chiller installation & manifold welding',
        text: 'installation of the multi-ton chillers with welded main fluid and air cooling manifold lines',
      },
      {
        title: 'Medical cold storage build-out',
        text: 'sensitive cold storage capacity for medical supplies alongside the centralized HVAC cooling network',
      },
      {
        title: 'CWB-certified steel foundations',
        text: 'custom structural equipment foundations and maintenance access platforms carrying the chilling machinery and overhead lines',
      },
      {
        title: 'Full NDT verification',
        text: 'hydrostatic pressure testing and liquid penetrant inspection guaranteeing a leak-free footprint before tie-in',
      },
    ],
    outcome:
      'The central loops and structural assets achieved flawless operational sign-off, maintaining perfect climate control across critical care areas with zero weld stress anomalies.',
    solution:
      'Institutional mechanical contracting delivered in phases inside an operating hospital, with certified structural support throughout.',
    result: 'Flawless operational sign-off and continuous reliable service.',
    scope: [
      'Installation of heavy centralized chillers and welded cooling manifold lines.',
      'Build-out of medical cold storage and centralized HVAC distribution.',
      'CWB-certified structural equipment foundations and access platforms.',
      'Hydrostatic and liquid penetrant NDT verification prior to utility tie-in.',
    ],
  },
];

const LEGACY_PROJECTS: Project[] = [

  {
    slug: 'dartmouth-cold-storage',
    title: 'Cold Storage Facility Build-Out',
    client: 'Atlantic Cold Logistics',
    industry: 'Refrigeration',
    location: 'Dartmouth, NS',
    category: 'Refrigeration',
    summary: 'Full industrial refrigeration system installation for a 40,000 sq ft cold storage facility.',
    image: '/__l5e/assets-v1/b0200281-43ff-41fc-9d90-66e01d6e59d3/p-industrial-cooling-compressor-2.jpg',
    gallery: [
      '/__l5e/assets-v1/df437beb-b7d0-4ff4-95ed-1f0ebc92f249/gen-machine-room.jpg',
      '/__l5e/assets-v1/b09c55df-2b0f-4001-b325-eafa36f1ae2a/gen-fab-shop.jpg',
      '/__l5e/assets-v1/aa97aca2-81f2-4a3f-992b-7ba5db07bf33/p-marine-refigiration.jpg',
      '/__l5e/assets-v1/7e61bc26-a5cc-418a-8404-739263a25d20/p-about-us-image-2.jpg',
    ],
    challenge: 'The client needed a reliable low-temperature system capable of maintaining -25°C across multiple zones, with tight construction sequencing and a hard deadline before the fall harvest season.',
    solution: 'Our team engineered a centralized ammonia refrigeration package with dual Mycom compressors, Baltimore Aircoil evaporative condensers, and custom pipe spooling fabricated in-house to reduce field welds.',
    result: 'Commissioned two weeks ahead of schedule, the facility achieved full temperature pull-down on the first run and has operated continuously through peak season with zero unplanned downtime.',
    scope: [
      'System design and engineering for a two-stage ammonia refrigeration plant serving four cold storage zones and a blast freeze cell.',
      'In-house fabrication of all refrigeration pipe spools, structural steel access platforms, and compressor skids.',
      'Supply and installation of Mycom compressors, Baltimore Aircoil condensers, and Geneglace ice equipment.',
      'Full commissioning, leak testing, and operator training delivered on-site before handover.',
    ],
  },
  {
    slug: 'offshore-platform-fabrication',
    title: 'Offshore Platform Structural Steel',
    client: 'North Atlantic Offshore Ltd.',
    industry: 'Oil and Gas',
    location: 'St. John\'s, NL',
    category: 'Offshore',
    summary: 'Fabrication and coating of 120 tonnes of structural steel for an offshore production platform.',
    image: '/__l5e/assets-v1/cd7fe245-4e7f-421f-951f-60d9a494f914/p-ice-flakes-industrial-chemistry-cool-down.jpg',
    gallery: [
      '/__l5e/assets-v1/d0c0acc5-f409-48c7-a540-a702e3aeeddc/p-geneglace-flake-ice-seafood-processsing.jpg',
      '/__l5e/assets-v1/0969a388-f64b-4022-b98a-fa6bb549ab46/p-fabrication-img.jpg',
      '/__l5e/assets-v1/cd0e4398-b43d-4013-855f-be7ca0c1a0cd/p-custom-refrigeration-packages.jpg',
      '/__l5e/assets-v1/b8f434c7-fd20-41af-b1c1-3c2974e76ea2/p-marine-refrigeration.jpg',
    ],
    challenge: 'The platform modules required CWB-certified welding to offshore structural standards, with strict traceability of every weld and a coating system rated for the North Atlantic splash zone.',
    solution: 'We deployed our certified welding crew and CNC-equipped shop to fabricate the access steel and pipe supports, with full material traceability and third-party inspection at each hold point.',
    result: 'All 120 tonnes delivered on schedule with zero non-conformances, passing the client\'s third-party audit and offshore classification survey on the first submission.',
    scope: [
      'Fabrication of 120 tonnes of structural and access steel for an offshore production platform deck.',
      'CWB-certified welding procedures and welder qualifications to CSA W47.1.',
      'Surface preparation and three-coat marine protective coating system applied in-house.',
      'Material traceability, NDT, and third-party inspection coordination through final release.',
    ],
  },
  {
    slug: 'fishing-vessel-refrigeration',
    title: 'Fishing Vessel Refrigeration Retrofit',
    client: 'Harbour Grace Fisheries',
    industry: 'Marine',
    location: 'Harbour Grace, NL',
    category: 'Marine',
    summary: 'Design and installation of a complete RSW refrigeration system for a 65-foot fishing vessel.',
    image: '/__l5e/assets-v1/b8f434c7-fd20-41af-b1c1-3c2974e76ea2/p-marine-refrigeration.jpg',
    gallery: [
      '/__l5e/assets-v1/639a8b3b-d9f3-4612-b4b5-84fd4ab30ef0/gen-marine-vessel.jpg',
      '/__l5e/assets-v1/e799c73e-1cba-405e-987f-66a7f640484b/p-air-conditioning.jpg',
      '/__l5e/assets-v1/b0200281-43ff-41fc-9d90-66e01d6e59d3/p-industrial-cooling-compressor-2.jpg',
      '/__l5e/assets-v1/aa97aca2-81f2-4a3f-992b-7ba5db07bf33/p-marine-refigiration.jpg',
    ],
    challenge: 'The vessel needed a compact, reliable refrigerated seawater (RSW) system that could fit within the existing engine room while maintaining hold temperatures for groundfish during multi-day trips.',
    solution: 'We engineered a skid-mounted compressor package with a plate heat exchanger and marine-grade controls, then fabricated and piped the entire system on-site during the vessel\'s short drydock window.',
    result: 'The retrofit was completed within the drydock period and the vessel returned to fishing with improved hold temperatures and reduced fuel consumption from the new high-efficiency system.',
    scope: [
      'Engineering and supply of a skid-mounted RSW refrigeration package for a 65-foot fishing vessel.',
      'On-site fabrication and piping of refrigeration lines, seawater circuit, and controls.',
      'Plate heat exchanger selection and installation sized for the vessel\'s hold capacity.',
      'Commissioning, sea trials, and crew training completed before the vessel returned to service.',
    ],
  },
  {
    slug: 'pulp-mill-pipe-spooling',
    title: 'Pulp Mill Pipe Spooling Program',
    client: 'Atlantic Pulp & Paper',
    industry: 'Pulp and Paper',
    location: 'Abercrombie, NS',
    category: 'Fabrication',
    summary: 'Production and delivery of 600+ custom pipe spools for a mill modernization project.',
    image: '/__l5e/assets-v1/0969a388-f64b-4022-b98a-fa6bb549ab46/p-fabrication-img.jpg',
    gallery: [
      '/__l5e/assets-v1/b09c55df-2b0f-4001-b325-eafa36f1ae2a/gen-fab-shop.jpg',
      '/__l5e/assets-v1/df437beb-b7d0-4ff4-95ed-1f0ebc92f249/gen-machine-room.jpg',
      '/__l5e/assets-v1/cd0e4398-b43d-4013-855f-be7ca0c1a0cd/p-custom-refrigeration-packages.jpg',
      '/__l5e/assets-v1/b8f434c7-fd20-41af-b1c1-3c2974e76ea2/p-marine-refrigeration.jpg',
    ],
    challenge: 'The mill modernization required over 600 pipe spools in carbon and stainless steel, fabricated to exact dimensions and delivered in sequence to match the tight turnaround shutdown.',
    solution: 'Our shop produced the spools on a just-in-time schedule using CNC pipe cutting and automated welding, with each spool mapped to a digital isometric for traceable field installation.',
    result: 'Every spool was delivered in the correct installation sequence, allowing the mill contractor to complete the tie-ins within the planned shutdown window and restart on schedule.',
    scope: [
      'Fabrication of 600+ custom pipe spools in carbon and stainless steel for a mill modernization.',
      'CNC pipe cutting, beveling, and automated welding to ASME B31.3 process piping standards.',
      'Digital isometric mapping and just-in-time delivery sequencing to match the shutdown plan.',
      'Hydrostatic testing, NDT, and full material certification provided with each spool batch.',
    ],
  },
  {
    slug: 'arena-ice-plant',
    title: 'Municipal Arena Ice Plant Installation',
    client: 'Town of Kentville',
    industry: 'Recreation',
    location: 'Kentville, NS',
    category: 'Refrigeration',
    summary: 'Design-build of a complete arena ice plant with ammonia refrigeration and heat reclaim.',
    image: '/__l5e/assets-v1/b0200281-43ff-41fc-9d90-66e01d6e59d3/p-industrial-cooling-compressor-2.jpg',
    gallery: [
      '/__l5e/assets-v1/aa97aca2-81f2-4a3f-992b-7ba5db07bf33/p-marine-refigiration.jpg',
      '/__l5e/assets-v1/df437beb-b7d0-4ff4-95ed-1f0ebc92f249/gen-machine-room.jpg',
      '/__l5e/assets-v1/b09c55df-2b0f-4001-b325-eafa36f1ae2a/gen-fab-shop.jpg',
      '/__l5e/assets-v1/7e61bc26-a5cc-418a-8404-739263a25d20/p-about-us-image-2.jpg',
    ],
    challenge: 'The town wanted to replace an aging R-22 ice plant with a modern ammonia system that could also reclaim waste heat to warm the arena lobby and domestic water, all within a municipal budget.',
    solution: 'We delivered a packaged ammonia ice plant with a heat reclaim system, custom-built compressor skid, and North Star ice equipment, engineered to fit the existing mechanical room footprint.',
    result: 'The new plant cut the arena\'s energy use significantly, supplies free heat to the lobby and domestic water systems, and has run reliably through two full winter seasons.',
    scope: [
      'Design-build of a complete ammonia arena ice plant with integrated heat reclaim system.',
      'Custom compressor skid fabrication, pipe spooling, and mechanical room fit-out.',
      'Supply and installation of North Star ice equipment and Baltimore Aircoil condenser.',
      'Controls integration, commissioning, and operator training for municipal staff.',
    ],
  },
  {
    slug: 'mining-pump-rebuild',
    title: 'Mining Slurry Pump Rebuild Program',
    client: 'Northern Canadian Mining',
    industry: 'Mining',
    location: 'Labrador City, NL',
    category: 'Fabrication',
    summary: 'In-shop rebuild and machining of eight large-diameter slurry pumps for a mine mill.',
    image: '/__l5e/assets-v1/aa97aca2-81f2-4a3f-992b-7ba5db07bf33/p-marine-refigiration.jpg',
    gallery: [
      '/__l5e/assets-v1/7e61bc26-a5cc-418a-8404-739263a25d20/p-about-us-image-2.jpg',
      '/__l5e/assets-v1/cd7fe245-4e7f-421f-951f-60d9a494f914/p-ice-flakes-industrial-chemistry-cool-down.jpg',
      '/__l5e/assets-v1/b09c55df-2b0f-4001-b325-eafa36f1ae2a/gen-fab-shop.jpg',
      '/__l5e/assets-v1/d0c0acc5-f409-48c7-a540-a702e3aeeddc/p-geneglace-flake-ice-seafood-processsing.jpg',
    ],
    challenge: 'The mine needed eight worn slurry pumps rebuilt during a short maintenance window, with worn impellers and casings requiring precision machining and welding repair to restore performance.',
    solution: 'Our machinists and welders rebuilt each pump in our shop, using CNC machining to restore casing tolerances and hardfacing welding on impellers to extend service life in abrasive slurry service.',
    result: 'All eight pumps were rebuilt, balanced, and returned ahead of the maintenance window, giving the mine a full set of spares and extending pump life by an estimated 18 months.',
    scope: [
      'In-shop rebuild of eight large-diameter mining slurry pumps during a planned maintenance window.',
      'CNC machining to restore casing and impeller tolerances to original specifications.',
      'Hardfacing welding on impellers and wear rings to resist abrasive slurry wear.',
      'Dynamic balancing, assembly, test run, and delivery of all eight pumps.',
    ],
  },
  {
    slug: 'power-generation-cooling-skid',
    title: 'Power Station Cooling Skid Package',
    client: 'Atlantic Power Corp.',
    industry: 'Power Generation',
    location: 'Point Tupper, NS',
    category: 'Fabrication',
    summary: 'Design and fabrication of a custom cooling water skid package for a thermal power station.',
    image: '/__l5e/assets-v1/cd0e4398-b43d-4013-855f-be7ca0c1a0cd/p-custom-refrigeration-packages.jpg',
    gallery: [
      '/__l5e/assets-v1/b8f434c7-fd20-41af-b1c1-3c2974e76ea2/p-marine-refrigeration.jpg',
      '/__l5e/assets-v1/e799c73e-1cba-405e-987f-66a7f640484b/p-air-conditioning.jpg',
      '/__l5e/assets-v1/df437beb-b7d0-4ff4-95ed-1f0ebc92f249/gen-machine-room.jpg',
      '/__l5e/assets-v1/b0200281-43ff-41fc-9d90-66e01d6e59d3/p-industrial-cooling-compressor-2.jpg',
    ],
    challenge: 'The station needed a reliable cooling water system that could be installed during a short outage window without disrupting existing plant operations.',
    solution: 'We designed and built a skid-mounted cooling package with integrated pumps, heat exchangers, and controls, fully shop-tested before delivery to reduce on-site work.',
    result: 'The skid was installed and commissioned within the planned outage, providing consistent cooling water flow and reducing maintenance requirements compared to the old system.',
    scope: [
      'Design and fabrication of a skid-mounted cooling water package for a thermal power station.',
      'Integrated pumps, plate heat exchangers, valving, and PLC controls on a single skid frame.',
      'Shop testing including pressure test, functional checks, and controls verification before shipment.',
      'On-site installation, tie-ins, and commissioning support during a planned outage window.',
    ],
  },
  {
    slug: 'municipal-water-pump-station',
    title: 'Municipal Water Pump Station Upgrade',
    client: 'Town of New Glasgow',
    industry: 'Municipal Water and Sewer',
    location: 'New Glasgow, NS',
    category: 'Fabrication',
    summary: 'Fabrication and installation of new pump station piping and structural supports for a municipal water system.',
    image: '/__l5e/assets-v1/0969a388-f64b-4022-b98a-fa6bb549ab46/p-fabrication-img.jpg',
    gallery: [
      '/__l5e/assets-v1/cd0e4398-b43d-4013-855f-be7ca0c1a0cd/p-custom-refrigeration-packages.jpg',
      '/__l5e/assets-v1/b8f434c7-fd20-41af-b1c1-3c2974e76ea2/p-marine-refrigeration.jpg',
      '/__l5e/assets-v1/b09c55df-2b0f-4001-b325-eafa36f1ae2a/gen-fab-shop.jpg',
      '/__l5e/assets-v1/e799c73e-1cba-405e-987f-66a7f640484b/p-air-conditioning.jpg',
    ],
    challenge: 'The existing pump station had corroded piping and inadequate structural supports, requiring a complete upgrade while keeping the station partially operational.',
    solution: 'We fabricated new stainless steel piping spools and structural supports in our shop, then installed them in phases to maintain water service throughout the project.',
    result: 'The upgraded station delivers higher flow capacity with improved reliability, and the phased installation meant no interruption to municipal water service.',
    scope: [
      'Shop fabrication of stainless steel piping spools for a municipal water pump station upgrade.',
      'Fabrication and installation of new structural supports and access platforms.',
      'Phased on-site installation to maintain partial station operation throughout the project.',
      'Hydrostatic testing, commissioning, and handover to municipal operations staff.',
    ],
  },
  {
    slug: 'food-processing-cip-skid',
    title: 'CIP Skid Fabrication for Seafood Plant',
    client: 'Ocean Harvest Seafoods',
    industry: 'Food Processing',
    location: 'Yarmouth, NS',
    category: 'Fabrication',
    summary: 'Custom clean-in-place (CIP) skid system fabricated in 316L stainless for a seafood processing facility.',
    image: '/__l5e/assets-v1/d0c0acc5-f409-48c7-a540-a702e3aeeddc/p-geneglace-flake-ice-seafood-processsing.jpg',
    gallery: [
      '/__l5e/assets-v1/df437beb-b7d0-4ff4-95ed-1f0ebc92f249/gen-machine-room.jpg',
      '/__l5e/assets-v1/0969a388-f64b-4022-b98a-fa6bb549ab46/p-fabrication-img.jpg',
      '/__l5e/assets-v1/cd0e4398-b43d-4013-855f-be7ca0c1a0cd/p-custom-refrigeration-packages.jpg',
      '/__l5e/assets-v1/b8f434c7-fd20-41af-b1c1-3c2974e76ea2/p-marine-refrigeration.jpg',
    ],
    challenge: 'The seafood plant needed a sanitary CIP system that could handle high-temperature cleaning cycles and meet CFIA food safety standards.',
    solution: 'We fabricated a modular 316L stainless CIP skid with TIG-welded sanitary piping, polished weld beads, and full pickling and passivation to restore corrosion resistance.',
    result: 'The CIP skid reduced cleaning cycle times by 40% and passed all CFIA inspections on the first audit, improving plant throughput and hygiene compliance.',
    scope: [
      'Design and fabrication of a modular 316L stainless steel CIP skid for a seafood processing facility.',
      'TIG welding with Argon backing on all product contact surfaces for sanitary compliance.',
      'Weld bead polishing, pickling, and passivation to CFIA and FDA standards.',
      'Shop testing, delivery, and on-site commissioning support.',
    ],
  },
  {
    slug: 'ice-plant-installation',
    title: 'Commercial Ice Plant Installation',
    client: 'Bayview Seafood Co.',
    industry: 'Ice Making',
    location: 'Lunenburg, NS',
    category: 'Refrigeration',
    summary: 'Complete design and installation of a 50-ton-per-day commercial ice plant for a seafood processing operation.',
    image: '/__l5e/assets-v1/d0c0acc5-f409-48c7-a540-a702e3aeeddc/p-geneglace-flake-ice-seafood-processsing.jpg',
    gallery: [
      '/__l5e/assets-v1/0969a388-f64b-4022-b98a-fa6bb549ab46/p-fabrication-img.jpg',
      '/__l5e/assets-v1/df437beb-b7d0-4ff4-95ed-1f0ebc92f249/gen-machine-room.jpg',
      '/__l5e/assets-v1/cd0e4398-b43d-4013-855f-be7ca0c1a0cd/p-custom-refrigeration-packages.jpg',
      '/__l5e/assets-v1/b8f434c7-fd20-41af-b1c1-3c2974e76ea2/p-marine-refrigeration.jpg',
    ],
    challenge: 'The seafood company needed a reliable source of commercial ice during peak fishing season, with limited space available at their waterfront facility.',
    solution: 'We engineered a compact ammonia ice plant with Geneglace ice equipment and a custom compressor skid, fabricated in-house to fit the available footprint.',
    result: 'The plant produces 50 tons of ice per day at full capacity, ensuring product quality during peak season and reducing the client\'s reliance on purchased ice.',
    scope: [
      'Design and installation of a 50-ton-per-day ammonia ice plant for a seafood processing facility.',
      'Supply and integration of Geneglace ice equipment and Mycom compressor package.',
      'Custom compressor skid fabrication and in-house pipe spooling to fit the site footprint.',
      'Commissioning, performance testing, and operator training.',
    ],
  },
];

/**
 * Full portfolio. Real client work always sorts ahead of the legacy entries,
 * everywhere projects are rendered.
 */
export const PROJECTS: Project[] = [
  ...REAL_PROJECTS,
  ...LEGACY_PROJECTS.map((p) => ({ ...p, sector: p.sector ?? (p.category as ProjectSector) })),
];

/** Sector filter order used on the portfolio grid. */
export const PROJECT_SECTORS: ProjectSector[] = [
  'Public Infrastructure',
  'Energy & Heavy Industry',
  'Marine & Seafood',
  'Institutional & Healthcare',
  'Fabrication',
  'Refrigeration',
  'Marine',
  'Offshore',
];

/** Returns projects for the given slugs, keeping featured (real) work first. */
export function orderProjects(projects: Project[]): Project[] {
  const index = new Map(PROJECTS.map((p, i) => [p.slug, i]));
  return [...projects].sort(
    (a, b) => Number(!!b.featured) - Number(!!a.featured) || (index.get(a.slug) ?? 0) - (index.get(b.slug) ?? 0),
  );
}

