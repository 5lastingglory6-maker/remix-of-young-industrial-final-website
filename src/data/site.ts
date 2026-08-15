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
  { label: 'Offices & Residential Services', to: '/residential-offices' },
  { label: 'Industrial & Commercial Services', to: '/industrial-commercial-services', children: [
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
}

export const PROJECTS: Project[] = [
  {
    slug: 'dartmouth-cold-storage',
    title: 'Cold Storage Facility Build-Out',
    client: 'Atlantic Cold Logistics',
    industry: 'Refrigeration',
    location: 'Dartmouth, NS',
    category: 'Refrigeration',
    summary: 'Full industrial refrigeration system installation for a 40,000 sq ft cold storage facility.',
    image: '/__l5e/assets-v1/b59af5ba-ef40-44c3-b977-9a0a171e477d/gen-machine-room.jpg',
    gallery: [
      '/__l5e/assets-v1/b59af5ba-ef40-44c3-b977-9a0a171e477d/gen-machine-room.jpg',
      '/__l5e/assets-v1/88470c64-a6a7-4f8c-b11a-40b9f68ec39e/gen-fab-shop.jpg',
      'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/1108104/pexels-photo-1108104.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/1108104/pexels-photo-1108104.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: '/__l5e/assets-v1/99bc49f5-87d1-4272-926f-703d5b25cb4b/gen-marine-vessel.jpg',
    gallery: [
      '/__l5e/assets-v1/99bc49f5-87d1-4272-926f-703d5b25cb4b/gen-marine-vessel.jpg',
      'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/163696/boat-ship-sea-cloud-163696.jpg?auto=compress&cs=tinysrgb&w=800',
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
    image: '/__l5e/assets-v1/88470c64-a6a7-4f8c-b11a-40b9f68ec39e/gen-fab-shop.jpg',
    gallery: [
      '/__l5e/assets-v1/88470c64-a6a7-4f8c-b11a-40b9f68ec39e/gen-fab-shop.jpg',
      '/__l5e/assets-v1/b59af5ba-ef40-44c3-b977-9a0a171e477d/gen-machine-room.jpg',
      'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/2098605/pexels-photo-2098605.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/2098605/pexels-photo-2098605.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/__l5e/assets-v1/b59af5ba-ef40-44c3-b977-9a0a171e477d/gen-machine-room.jpg',
      '/__l5e/assets-v1/88470c64-a6a7-4f8c-b11a-40b9f68ec39e/gen-fab-shop.jpg',
      'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1108104/pexels-photo-1108104.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/__l5e/assets-v1/88470c64-a6a7-4f8c-b11a-40b9f68ec39e/gen-fab-shop.jpg',
      'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4440227/pexels-photo-4440227.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/__l5e/assets-v1/b59af5ba-ef40-44c3-b977-9a0a171e477d/gen-machine-room.jpg',
      'https://images.pexels.com/photos/33514501/pexels-photo-33514501.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4440227/pexels-photo-4440227.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/__l5e/assets-v1/88470c64-a6a7-4f8c-b11a-40b9f68ec39e/gen-fab-shop.jpg',
      'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: '/__l5e/assets-v1/b59af5ba-ef40-44c3-b977-9a0a171e477d/gen-machine-room.jpg',
    gallery: [
      '/__l5e/assets-v1/b59af5ba-ef40-44c3-b977-9a0a171e477d/gen-machine-room.jpg',
      'https://images.pexels.com/photos/5953714/pexels-photo-5953714.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5321429/pexels-photo-5321429.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/2098605/pexels-photo-2098605.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/2098605/pexels-photo-2098605.jpeg?auto=compress&cs=tinysrgb&w=800',
      '/__l5e/assets-v1/b59af5ba-ef40-44c3-b977-9a0a171e477d/gen-machine-room.jpg',
      'https://images.pexels.com/photos/23503522/pexels-photo-23503522.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/18419622/pexels-photo-18419622.jpeg?auto=compress&cs=tinysrgb&w=800',
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
