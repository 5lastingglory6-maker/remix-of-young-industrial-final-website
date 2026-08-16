import { useState } from 'react';
import { ImageIcon } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import santaAsset from '@/assets/santa-musgravetown.jpg.asset.json';

const STATS = [
  { num: '2020', label: 'Earliest confirmed sponsorship on record' },
  { num: '4', label: 'Different causes supported' },
  { num: '6+', label: 'Community partners & events' },
];

const STORIES: {
  title: string;
  tags: string[];
  badge?: string;
  body: string;
  placeholder: string;
  gradient: string;
}[] = [
  {
    title: 'Turning the Tide Marine Industry Awards',
    tags: ['Marine & Industrial'],
    badge: 'Multi-Year Sponsor',
    body:"Young's Industrial has sponsored the Turning the Tide Marine Industry Awards across multiple years, most recently backing the 9th Annual awards after previously supporting the 7th. The awards recognize the vessels, facilities, and people that keep Atlantic Canada's marine industry moving — the same world Young's Industrial has worked in since 2000, providing industrial refrigeration, fabrication, and equipment servicing for marine and offshore operations. It's a sponsorship that lines up directly with their own trade, rather than a name attached to something unrelated for the sake of visibility.",
    placeholder: 'Photo of: Turning the Tide Awards ceremony, or a team member accepting recognition',
    gradient: 'from-navy-700 to-navy-950',
  },
  {
    title: 'George Martin Memorial Golf Tournament',
    tags: ['Healthcare & Wellness'],
    badge: 'Recurring Hole Sponsor',
    body:"As a Hole Sponsor of the George Martin Memorial Golf Tournament, Young's Industrial helps fund Discovery Health Care Foundation's work supporting local healthcare services through Eastern Health. It's one of the Foundation's biggest annual fundraisers — sponsors and participants together raised $40,000 in one recent year, and the tournament has sold out to full team capacity in the years since. Young's Industrial shows up on that sponsor list alongside other regional businesses like Mercer's Marine, Meridian Engineering, and Clarenville Honda, year after year rather than as a single one-time gesture.",
    placeholder: 'Photo of: hole sponsor signage, tournament group, or course banner',
    gradient: 'from-steel-700 to-navy-900',
  },
  {
    title: 'Port Blandford AppleFest',
    tags: ['Community Festivals'],
    badge: 'Sponsor Since 2020',
    body:"Young's Industrial has been a Macintosh Sponsor of the Port Blandford AppleFest since at least 2020, and returned again as a sponsor of the 2025 festival. AppleFest is a fall harvest weekend featuring an outdoor market, live entertainment, a car show, and activities for all ages — the kind of small-town event that depends on the same local businesses coming back to back it every single year. That it spans a five-year stretch, including a pandemic in between, says more about the relationship than any single donation could.",
    placeholder: 'Photo of: AppleFest market, festival crowd, or sponsor signage at the event',
    gradient: 'from-safety-500 to-safety-700',
  },
  {
    title: 'On The Rocks Music Festival',
    tags: ['Community Events'],
    badge: 'Gold Sponsor',
    body:"Young's Industrial was a Gold Sponsor of the On The Rocks Music Festival, the kickoff event for Clarenville Days Celebration, and the festival gave them their own dedicated Sponsor Spotlight post thanking them for keeping things cool — both in the community and at the festival itself. The night brought touring and local acts to Clarenville, pulling together volunteers, sponsors, and the town's Parks and Recreation staff to make it happen. Getting called out individually, rather than just listed among a wall of sponsor logos, is a decent measure of how visible their support actually was on the ground.",
    placeholder: 'Photo of: festival crowd, stage, or Gold Sponsor signage on-site',
    gradient: 'from-navy-900 to-safety-600',
  },
  {
    title: 'Supporting Critical Infrastructure Work',
    tags: ['Industry Support'],
    body:"When EcoAxis needed support completing a transmission line project across sensitive Newfoundland and Labrador terrain, they publicly credited Young's Industrial for their services on the job. The project used ground protection mats to create safe, stable access across wet and environmentally sensitive ground — the kind of behind-the-scenes infrastructure work that rarely gets public attention, but that other trades notice and remember. It's a reminder that their reputation isn't only built at festivals and fundraisers; it's also built on other businesses trusting them to show up and deliver on working job sites.",
    placeholder: 'Photo of: project site, ground protection mats in use, or crew on location',
    gradient: 'from-steel-600 to-navy-950',
  },
  {
    title: 'Setting Up for a Musgravetown Concert Weekend',
    tags: ['Local Events'],
    badge: 'Hands-On Support',
    body:"Ahead of a summer concert weekend headlined by Moonshine Runners, Rum Ragged, and Atomic Blonde, event organizers gave a public shout-out to Young's Industrial, J-1, and Riverbend for everything needed to get the field set up. It's a smaller, more casual mention than a formal sponsorship announcement, but it points to something real: when a local event needs equipment or hands-on help getting concert-ready, Young's Industrial is one of the names organizers already know to call. That kind of practical, unglamorous support is easy to overlook, but it's exactly what builds a company's reputation in a small community.",
    placeholder: 'Photo of: field setup, equipment staging, or the event site being prepared',
    gradient: 'from-navy-950 to-navy-700',
  },
];

export default function CommunitySection() {
  return (
    <section className="section-pad bg-steel-50">
      <div className="container-8xl">
        <SectionHeading
          eyebrow="Community & Sponsorship"
          title="Showing Up for Newfoundland & Labrador — Year After Year"
          description="Young's Industrial sponsors the causes that matter to the communities we work in — marine industry recognition, local healthcare fundraising, small-town festivals, and hometown events. Not as one-off donations, but as relationships that keep going year after year."
        />

        <div className="mt-8 flex flex-wrap gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-xl border border-steel-200 bg-white px-5 py-4">
              <div className="text-2xl font-bold text-navy-800">{s.num}</div>
              <div className="mt-1 max-w-[16rem] text-sm font-semibold text-steel-600">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-navy-950 px-8 py-12 text-center">
          <h3 className="text-2xl font-bold text-white md:text-3xl">
            This is what"local" actually looks like.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-navy-100">
            Not a slogan on a truck — a name that keeps showing up on sponsor lists, thank-you posts,
            and hole signs across Newfoundland &amp; Labrador, year after year, cause after cause.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((story) => (
            <StoryCard key={story.title} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryCard({ story }: { story: (typeof STORIES)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-steel-200 bg-white">
      <div
        className={`flex aspect-[16/10] flex-col items-center justify-center bg-gradient-to-br p-5 text-center ${story.gradient}`}
      >
        <ImageIcon className="h-7 w-7 text-white/85" />
        <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white">
          Placeholder Image
        </p>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {story.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-navy-50 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-navy-800"
            >
              {t}
            </span>
          ))}
          {story.badge && (
            <span className="rounded-full bg-safety-50 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-safety-700">
              {story.badge}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold leading-snug text-navy-800">{story.title}</h3>
        <p
          className={`mt-3 text-sm leading-relaxed text-steel-600 ${open ? '' : 'line-clamp-2'}`}
        >
          {story.body}
        </p>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-3 self-start text-sm font-semibold text-safety-600 underline decoration-safety-300 underline-offset-4 hover:text-safety-700"
        >
          {open ? 'Show less' : 'Read more'}
        </button>
      </div>
    </article>
  );
}
