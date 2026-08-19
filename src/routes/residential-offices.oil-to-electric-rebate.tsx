import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@/components/SiteLink";
import heroAsset from "@/assets/hero-heatpump.jpg.asset.json";
import guidanceAsset from "@/assets/g-minisplit.jpg.asset.json";

const TRUST = [
  {
    strong: "35+",
    label: "Years of Experience",
    icon: (
      <>
        <path d="M24 4l17 7v11c0 10.5-7.1 18.9-17 22-9.9-3.1-17-11.5-17-22V11l17-7z" />
        <path d="M16 24l5 5 11-12" />
      </>
    ),
  },
  {
    strong: "Residential",
    label: "Heating Specialists",
    icon: (
      <>
        <path d="M5 22L24 7l19 15" />
        <path d="M10 20v21h28V20" />
        <path d="M19 41V28h10v13" />
        <path d="M30 14V7h6v12" />
      </>
    ),
  },
  {
    strong: "NL",
    label: "Serving Newfoundland & Labrador",
    icon: (
      <>
        <path d="M24 43s14-14.2 14-24A14 14 0 1 0 10 19c0 9.8 14 24 14 24z" />
        <circle cx="24" cy="19" r="4" />
      </>
    ),
  },
  {
    strong: "Start \u2192 Finish",
    label: "Guidance Throughout Your Project",
    icon: (
      <>
        <path d="M18 27l-4 4a6 6 0 0 1-8-9l7-7a6 6 0 0 1 9 8" />
        <path d="M30 21l4-4a6 6 0 0 1 8 9l-7 7a6 6 0 0 1-9-8" />
        <path d="M17 31l14-14" />
      </>
    ),
  },
];

const STEPS: Array<{ title: string; paragraphs: string[]; bullets?: string[] }> = [
  {
    title: "Tell Us About Your Home",
    paragraphs: [
      "Begin by answering a few simple questions about your property, your current heating system and your location.",
    ],
    bullets: ["Property type", "Current heating source", "Approximate home details", "Service area"],
  },
  {
    title: "We Review Your Information",
    paragraphs: [
      "Our team performs a preliminary review to determine whether your project appears suitable for further assessment and identifies any information that may still be required.",
      "This is an initial screening only and is not a guarantee of program eligibility.",
    ],
  },
  {
    title: "We Assess Your Heating Needs",
    paragraphs: [
      "A qualified member of our team evaluates your home's heating requirements, existing equipment and installation considerations before recommending an appropriate solution.",
    ],
    bullets: ["Existing heating system", "Electrical service", "Property layout", "Installation requirements"],
  },
  {
    title: "Receive Your Detailed Quote",
    paragraphs: [
      "Following the assessment, we'll prepare a detailed quote outlining the recommended equipment, installation work and project costs.",
      "Where applicable, we'll also explain how the rebate process fits into your project.",
    ],
  },
  {
    title: "Prepare for Rebate Pre-Approval",
    paragraphs: [
      "If you choose to proceed, we'll help organize the information and supporting documentation required for the official rebate process.",
    ],
    bullets: [
      "Utility information",
      "Oil heating records",
      "Property information",
      "Supporting photographs and documents",
    ],
  },
  {
    title: "Professional Installation",
    paragraphs: [
      "Once your project is ready to proceed, our experienced installation team completes your approved heating upgrade and records the documentation required throughout the installation.",
    ],
  },
  {
    title: "Documentation & Rebate Processing",
    paragraphs: [
      "After installation, we'll organize invoices, equipment information, photographs and commissioning documentation so your project file is complete and ready for the final rebate process.",
    ],
  },
];

const FEATURES = [
  {
    title: "Preliminary Project Screening",
    text: "We'll review the information you provide and identify whether your home appears suitable for further assessment.",
  },
  {
    title: "Professional Equipment Recommendations",
    text: "Our qualified technicians determine the most appropriate heating solution based on your home's individual requirements.",
  },
  {
    title: "Document Collection Made Easier",
    text: "We'll let you know which supporting documents are required and help keep everything organized throughout your project.",
  },
  {
    title: "Clear Communication",
    text: "You'll always know what information is needed, what has been completed and what the next step in your project will be.",
  },
];

const EXPECT = [
  {
    title: "A Simpler Process",
    text: "You shouldn't have to become an expert in rebate requirements just to upgrade your heating system.",
    icon: (
      <>
        <circle cx="18" cy="17" r="6" />
        <circle cx="31" cy="17" r="6" />
        <path d="M6 37c0-7 5-11 12-11s12 4 12 11" />
        <path d="M25 28c2-2 5-3 8-3 6 0 9 4 9 10" />
      </>
    ),
  },
  {
    title: "Guidance From Start to Finish",
    text: "From your initial questions to installation and rebate documentation, we'll help you understand what happens next.",
    icon: (
      <>
        <path d="M16 21h16" />
        <path d="M12 42V17l12-9 12 9v25" />
        <path d="M18 42V30h12v12" />
        <path d="M18 21h12" />
        <path d="M24 8v13" />
      </>
    ),
  },
  {
    title: "Professional Installation",
    text: "Our team handles the technical side of your heating upgrade while keeping the required project documentation organized.",
    icon: (
      <>
        <path d="M19 8l4 4-13 13-4-4L19 8z" />
        <path d="M29 18l4 4-13 13-4-4 13-13z" />
        <path d="M39 28l4 4-13 13-4-4 13-13z" />
        <path d="M6 42h36" />
      </>
    ),
  },
  {
    title: "Clear Communication",
    text: "We'll tell you what information is needed, what has been completed, and what needs to happen next.",
    icon: (
      <>
        <path d="M8 11h32v23H19l-9 8v-8H8V11z" />
        <circle cx="18" cy="22" r="1" />
        <circle cx="24" cy="22" r="1" />
        <circle cx="30" cy="22" r="1" />
      </>
    ),
  },
];

function Icon({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      {children}
    </svg>
  );
}

function OilToElectricRebate() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroAsset.url}
          alt="Young's Industrial technicians installing a residential heat pump"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/93 to-navy-950/72" />
        <div className="container-8xl relative py-24 md:py-28">
          <p className="eyebrow mb-5 text-safety-300">Residential Heating Upgrade</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Thinking About Switching From Oil to Electric Heating?
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-navy-100">
            Young's Industrial helps homeowners navigate the journey from your first home assessment through heat pump
            installation and the documentation required for the Newfoundland &amp; Labrador Oil-to-Electric rebate
            process.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/residential-offices#quote" className="btn-primary">
              Check My Home's Eligibility
            </Link>
            <a
              href="#process"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/35 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-navy-900 text-white">
        <div className="container-8xl grid grid-cols-1 gap-5 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map((t) => (
            <div key={t.label} className="flex items-center justify-center gap-3">
              <Icon className="h-10 w-10 shrink-0 text-safety-400">{t.icon}</Icon>
              <div>
                <strong className="block text-xl font-bold leading-tight">{t.strong}</strong>
                <span className="mt-1 block text-[11px] font-bold uppercase leading-tight tracking-wide text-navy-100">
                  {t.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <p className="eyebrow mb-3.5">The Process Made Simple</p>
          <h2 className="max-w-3xl text-3xl font-bold text-navy-800 md:text-4xl">
            Upgrading Your Home Shouldn't Mean Navigating Everything Alone.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-steel-600">
            Replacing an oil heating system with an electric heating solution can involve property information, heating
            assessments, equipment selection, installation planning and rebate documentation. We've designed our process
            to make each step clear, organized and easy to understand.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad bg-steel-50" id="process">
        <div className="container-8xl">
          <p className="eyebrow mb-3.5">Your Journey</p>
          <h2 className="max-w-3xl text-3xl font-bold text-navy-800 md:text-4xl">
            How the Oil-to-Electric Process Works
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-steel-600">
            Every home is different, but most projects follow the same straightforward journey from your first enquiry
            through installation and rebate documentation.
          </p>

          <div className="mt-12 grid gap-6">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="grid gap-5 rounded-xl border border-steel-200 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[70px_1fr]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-xl font-extrabold text-white">
                  {i + 1}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-navy-800">{step.title}</h3>
                  {step.paragraphs.map((p) => (
                    <p key={p} className="mt-2 text-steel-600">
                      {p}
                    </p>
                  ))}
                  {step.bullets && (
                    <ul className="mt-3.5 list-disc space-y-1.5 pl-5 text-steel-700">
                      {step.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDANCE */}
      <section className="section-pad bg-white" id="assessment">
        <div className="container-8xl grid items-center gap-12 lg:grid-cols-2 lg:gap-[70px]">
          <img
            src={guidanceAsset.url}
            alt="Wall-mounted mini-split heat pump installed in a home"
            className="h-[380px] w-full rounded-2xl object-cover lg:h-[520px]"
          />
          <div>
            <p className="eyebrow mb-3.5">Guidance Every Step</p>
            <h2 className="text-3xl font-bold text-navy-800 md:text-4xl">We'll Help Keep Your Project Organized.</h2>
            <p className="mt-5 text-lg leading-relaxed text-steel-600">
              You don't need to become an expert in rebate requirements or heating equipment before contacting us. Our
              process is designed to help you understand what happens next at every stage.
            </p>

            {FEATURES.map((f) => (
              <div key={f.title} className="mt-6 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-safety-100 font-extrabold text-safety-700">
                  ✓
                </div>
                <div>
                  <h4 className="mb-1 font-bold text-navy-800">{f.title}</h4>
                  <p className="text-[15px] text-steel-600">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPECT */}
      <section className="section-pad bg-navy-900 text-white" id="expect">
        <div className="container-8xl">
          <p className="eyebrow mb-3.5 text-safety-300">Why Homeowners Choose Young's</p>
          <h2 className="max-w-3xl text-3xl font-bold text-white md:text-4xl">What You Can Expect From Us</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-navy-100">
            Our goal isn't simply to install heating equipment. It's to provide a well-organized experience from your
            first enquiry until your project is complete.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EXPECT.map((e) => (
              <div key={e.title} className="h-full rounded-xl border border-white/12 bg-white/5 p-7">
                <Icon className="mb-5 h-11 w-11 text-safety-400">{e.icon}</Icon>
                <h3 className="mb-2.5 text-lg font-bold text-white">{e.title}</h3>
                <p className="text-navy-100">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-white text-center" id="contact">
        <div className="container-8xl">
          <p className="eyebrow mb-3.5">Let's Get Started</p>
          <h2 className="text-3xl font-bold text-navy-800 md:text-5xl">
            Find Out Whether Your Home May Be Suitable
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-steel-600">
            Take the first step by answering a few simple questions about your home and your current heating system. It
            only takes a few minutes to begin your preliminary project assessment.
          </p>
          <div className="mt-8 flex justify-center">
            <Link to="/residential-offices#quote" className="btn-primary">
              Check My Home's Eligibility
            </Link>
          </div>
          <p className="mx-auto mt-9 max-w-3xl text-xs leading-relaxed text-steel-500">
            The information provided through this preliminary assessment is used to evaluate your project for further
            review. It does not constitute approval for any rebate or incentive. Final eligibility, eligible equipment,
            documentation requirements, deadlines and incentive amounts are determined by the applicable Newfoundland
            &amp; Labrador program and remain subject to official verification.
          </p>
        </div>
      </section>
    </>
  );
}

export const Route = createFileRoute("/residential-offices/oil-to-electric-rebate")({
  head: () => ({
    meta: [
      { title: "Oil to Electric Rebate Process | Young's Industrial" },
      {
        name: "description",
        content:
          "How the Newfoundland & Labrador oil-to-electric heat pump rebate process works, step by step, with Young's Industrial guiding your home assessment, installation and documentation.",
      },
      { property: "og:title", content: "Oil to Electric Rebate Process | Young's Industrial" },
      {
        property: "og:description",
        content:
          "Step-by-step guidance for NL homeowners switching from oil heat to a heat pump, from first assessment through installation and rebate documentation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OilToElectricRebate,
});
