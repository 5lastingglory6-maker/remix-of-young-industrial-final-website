import { createFileRoute } from"@tanstack/react-router";
import { useEffect } from"react";
import"@/styles/youngs.css";
import heroAsset from"@/assets/hero-heatpump.jpg.asset.json";
import heritageAsset from"@/assets/heritage-plant.jpg.asset.json";
import gColdStorageAsset from"@/assets/g-coldstorage.jpg.asset.json";
import gMiniSplitAsset from"@/assets/g-minisplit.jpg.asset.json";
import gPanelAsset from"@/assets/g-panel.jpg.asset.json";
import gFishPlantAsset from"@/assets/g-fishplant.jpg.asset.json";
import gSolarAsset from"@/assets/g-solar.jpg.asset.json";
import gThermalAsset from"@/assets/g-thermal.jpg.asset.json";

const heroImg = heroAsset.url;
const heritageImg = heritageAsset.url;
const gColdStorage = gColdStorageAsset.url;
const gMiniSplit = gMiniSplitAsset.url;
const gPanel = gPanelAsset.url;
const gFishPlant = gFishPlantAsset.url;
const gSolar = gSolarAsset.url;
const gThermal = gThermalAsset.url;

export const Route = createFileRoute("/residential-offices/")({
  component: ResidentialOffices,
  head: () => ({
    meta: [
      { title:"Residential & Offices | Heat Pumps, Electrical & Solar" },
      { name:"description", content:"Heat pumps, electrical, solar and thermal imaging for Newfoundland & Labrador homes and offices \u2014 from the industrial refrigeration team trusted since 2000. Ask about the $22,000 takeCHARGE rebate." },
      { property:"og:title", content:"Residential & Offices | Young's Industrial" },
      { property:"og:description", content:"Certified NL heat pump, electrical and solar installs for homes and offices, from an industrial refrigeration team since 2000." },
      { property:"og:type", content:"website" },
      { name:"twitter:card", content:"summary_large_image" },
    ],
    links: [
      { rel:"preconnect", href:"https://fonts.googleapis.com" },
      { rel:"preconnect", href:"https://fonts.gstatic.com", crossOrigin:"anonymous" },
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;800;900&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" },
    ],
  }),
});

function ResidentialOffices() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    const filterButtons = Array.from(document.querySelectorAll<HTMLButtonElement>(".gallery-filter button"));
    const galleryItems = Array.from(document.querySelectorAll<HTMLElement>(".gallery-grid .gallery-item"));
    filterButtons.forEach((btn) => {
      const onClick = () => {
        filterButtons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        const filter = btn.getAttribute("data-filter");
        galleryItems.forEach((item) => {
          const cat = item.getAttribute("data-category");
          item.style.display = filter ==="all" || filter === cat ?"" :"none";
        });
      };
      btn.addEventListener("click", onClick);
      cleanups.push(() => btn.removeEventListener("click", onClick));
    });

    const form = document.getElementById("quoteForm") as HTMLFormElement | null;
    const success = document.getElementById("quoteSuccess") as HTMLElement | null;
    if (form && success) {
      const onSubmit = (e: Event) => {
        e.preventDefault();
        form.hidden = true;
        success.hidden = false;
        success.setAttribute("tabindex","-1");
        success.focus();
      };
      form.addEventListener("submit", onSubmit);
      cleanups.push(() => form.removeEventListener("submit", onSubmit));
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealEls = Array.from(document.querySelectorAll(".reveal"));
    if (!prefersReduced &&"IntersectionObserver" in window) {
      revealEls.forEach((el) => el.classList.add("reveal-init"));
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      revealEls.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div className="youngs">
      <main id="ro-main">

        <div className="banner">
          <img src={heroImg} alt="Young's Industrial technicians installing a heat pump on a Newfoundland home" width={1200} height={900} />
          <div className="banner__tag">Heat pump installs across Newfoundland &amp; Labrador</div>
        </div>

        {/* TICKER */}
        <div className="ticker" aria-hidden="true">
          <div className="ticker__track">
            <span>Heat Pumps &amp; Mini-Splits<span>Residential &amp; Commercial Electrical<span>Off-Grid Solar<span>Thermal Imaging<span>Building &amp; Automation Controls<span>Industrial Refrigeration &amp; Fabrication</span></span></span></span></span></span>
            <span>Heat Pumps &amp; Mini-Splits<span>Residential &amp; Commercial Electrical<span>Off-Grid Solar<span>Thermal Imaging<span>Building &amp; Automation Controls<span>Industrial Refrigeration &amp; Fabrication</span></span></span></span></span></span>
          </div>
        </div>



        {/* HERO */}
        <section className="hero" id="top">
          <div className="wrap">
            <div>
              <span className="eyebrow">NOW SERVING HOMES &amp; BUSINESSES ACROSS NL</span>
              <h1>The refrigeration engineers behind Newfoundland's fish plants now install your heat pump.</h1>
              <p className="lede">For 25 years, Young's Industrial has kept industrial refrigeration running in some of the toughest conditions in Atlantic Canada. Today that same certified team installs and services heat pumps, electrical systems and solar for homes and businesses — and helps you claim up to $22,000 in provincial rebates along the way.</p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#quote">Get My Free Quote</a>
                <a className="btn btn-outline" href="tel:+17094679712">Call (709) 467-9712</a>
              </div>
              <div className="trust-row">
                <span className="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>Established 2000</span>
                <span className="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>ISO 9001:2015 &amp; CWB Certified</span>
                <span className="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>Family-Owned</span>
                <span className="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>Authorized GE HVAC Dealer</span>
              </div>
            </div>
      
            <div className="nameplate" role="note" aria-label="Current incentive program summary">
              <span className="rivet tl" aria-hidden="true"></span><span className="rivet tr" aria-hidden="true"></span>
              <span className="rivet bl" aria-hidden="true"></span><span className="rivet br" aria-hidden="true"></span>
              <div className="nameplate__label">Incentive Program — Active</div>
              <div className="nameplate__title">Oil → Electric Heat Pump</div>
              <dl>
                <div className="nameplate__row"><dt>PROGRAM</dt><dd>takeCHARGE NL</dd></div>
                <div className="nameplate__row"><dt>MAX REBATE</dt><dd className="big">$22,000 CAD</dd></div>
                <div className="nameplate__row"><dt>COVERS</dt><dd>Mini-Split · Central · Install</dd></div>
                <div className="nameplate__row"><dt>ELIGIBLE</dt><dd>NL Homes Heated w/ Oil</dd></div>
                <div className="nameplate__row"><dt>STATUS</dt><dd className="nameplate__status"><span className="status-dot" aria-hidden="true"></span>Active</dd></div>
              </dl>
              <a className="btn btn-ghost-light" href="#rebate">See If I Qualify →</a>
            </div>
          </div>
        </section>
      

      
        {/* SERVICES */}
        <section className="section" id="services">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">WHAT WE DO NOW</span>
              <h2>One team. Twice the expertise.</h2>
              <p className="lede">Everything below is installed, serviced and stood behind by the same crew that's kept industrial refrigeration systems running across the province since 2000.</p>
            </div>
      
            <div className="services-grid">
              <div className="service-card reveal">
                <div className="icon-badge">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <line x1="24" y1="5" x2="24" y2="43"/><line x1="8" y1="14.5" x2="40" y2="33.5"/><line x1="8" y1="33.5" x2="40" y2="14.5"/>
                  </svg>
                </div>
                <h3>Heat Pumps &amp; Mini-Splits</h3>
                <p className="service-card__desc">Supply and installation of ductless mini-splits and central heat pumps built for Newfoundland winters — plus the maintenance to keep them running.</p>
              </div>
      
              <div className="service-card reveal">
                <div className="icon-badge">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
                    <polygon points="26,4 12,28 22,28 20,44 36,20 25,20"/>
                  </svg>
                </div>
                <h3>Residential &amp; Commercial Electrical</h3>
                <p className="service-card__desc">Wiring, panel upgrades and maintenance for homes and businesses, from the same team behind our industrial electrical work.</p>
              </div>
      
              <div className="service-card reveal">
                <div className="icon-badge">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <circle cx="24" cy="24" r="9"/><line x1="24" y1="2" x2="24" y2="9"/><line x1="24" y1="39" x2="24" y2="46"/>
                    <line x1="2" y1="24" x2="9" y2="24"/><line x1="39" y1="24" x2="46" y2="24"/>
                    <line x1="8" y1="8" x2="13" y2="13"/><line x1="35" y1="35" x2="40" y2="40"/>
                    <line x1="40" y1="8" x2="35" y2="13"/><line x1="13" y1="35" x2="8" y2="40"/>
                  </svg>
                </div>
                <h3>Off-Grid Solar</h3>
                <p className="service-card__desc">Solar power solutions for camps, cabins and properties off the grid, sized and installed by our own crew.</p>
              </div>
      
              <div className="service-card reveal">
                <div className="icon-badge">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M6 16V8h8"/><path d="M42 16V8h-8"/><path d="M6 32v8h8"/><path d="M42 32v8h-8"/><circle cx="24" cy="24" r="7"/>
                  </svg>
                </div>
                <h3>Thermal Imaging</h3>
                <p className="service-card__desc">Infrared scanning to find heat loss, electrical hot spots and hidden problems before they become expensive ones.</p>
              </div>
      
              <div className="service-card reveal">
                <div className="icon-badge">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <circle cx="24" cy="24" r="16"/><line x1="24" y1="24" x2="24" y2="12"/><line x1="24" y1="24" x2="32" y2="29"/>
                    <circle cx="24" cy="24" r="2.4" fill="currentColor" stroke="none"/>
                  </svg>
                </div>
                <h3>Building &amp; Automation Controls</h3>
                <p className="service-card__desc">Smart controls for heating, cooling and refrigeration systems, so your equipment runs efficiently without you thinking about it.</p>
              </div>
      
              <div className="service-card reveal">
                <div className="icon-badge">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M6 20 24 6 42 20"/><path d="M10 20v22h28V20"/><line x1="24" y1="27" x2="24" y2="39"/>
                    <line x1="18.5" y1="30" x2="29.5" y2="36"/><line x1="18.5" y1="36" x2="29.5" y2="30"/>
                  </svg>
                </div>
                <h3>Industrial &amp; Commercial Refrigeration</h3>
                <p className="service-card__desc">Our original trade: ammonia and industrial refrigeration systems for fish plants, cold storage and marine vessels across Atlantic Canada.</p>
              </div>
            </div>
          </div>
        </section>
      
        {/* REBATE */}
        <section className="section rebate" id="rebate">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">OIL TO ELECTRIC</span>
              <h2>Up to $22,000 to switch from oil to a heat pump</h2>
              <p className="lede">Newfoundland and Labrador's takeCHARGE Oil-to-Electric Incentive covers up to $22,000 of the cost to replace oil heat with an electric heat pump, funded through Newfoundland Power, NL Hydro and the federal and provincial governments. As a participating installer, we handle the technical side and help you understand what you qualify for.</p>
      
              <ul className="rebate-list">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>Rebates range up to $22,000, based on household income and system type</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>Covers mini-split, multi-split and central heat pump systems</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>Open to NL homeowners currently heating with oil</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>We help with the eligibility check and paperwork</li>
              </ul>
      
              <div className="cta-row" style={{ marginTop:"28px" }}>
                <a className="btn btn-primary" href="/residential-offices/oil-to-electric-rebate">See If I Qualify</a>
              </div>
              <p className="fine-print">Rebate amounts and eligibility are set by takeCHARGE, Newfoundland Power and NL Hydro and may change. We'll confirm current details when we quote your job.</p>
            </div>
      
            <div className="rebate-figure reveal">
              <div className="amount">$22,000</div>
              <div className="amount-label">Maximum available incentive</div>
              <hr />
              <dl>
                <div className="mini-row"><dt>General stream</dt><dd>Up to $9,000</dd></div>
                <div className="mini-row"><dt>Income-qualified stream</dt><dd>Up to $22,000</dd></div>
                <div className="mini-row"><dt>Delivered through</dt><dd>takeCHARGE NL</dd></div>
                <div className="mini-row"><dt>Installer</dt><dd>Young's Industrial</dd></div>
              </dl>
            </div>
          </div>
        </section>
      
        {/* HERITAGE */}
        <section className="section heritage" id="heritage">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">OUR ROOTS</span>
              <h2>From industrial to in-home</h2>
              <p>Young's Industrial Refrigeration was founded in Come By Chance, Newfoundland, in 2000, fabricating and servicing ammonia refrigeration systems for fish plants, cold storage facilities and marine vessels across Atlantic Canada.</p>
              <p>That's still core to who we are — and it's exactly why we're good at heat pumps. Refrigeration is refrigeration, whether it's a blast freezer at a fish plant or the unit outside your living room. Still family-run, led today by Mike, Trevor and Jonathan Young.</p>
              <img className="heritage-photo" src={heritageImg} alt="Industrial ammonia refrigeration plant room serviced by Young's Industrial" loading="lazy" width={1024} height={768} />
            </div>
      
            <div className="stat-grid reveal">
              <div className="stat-card"><div className="num">2000</div><div className="label">Company founded</div></div>
              <div className="stat-card"><div className="num">25+</div><div className="label">Years of industrial refrigeration</div></div>
              <div className="stat-card"><div className="num">ISO 9001</div><div className="label">+ CWB certified</div></div>
              <div className="stat-card"><div className="num">2</div><div className="label">NL locations</div></div>
            </div>
          </div>
        </section>
      
        {/* BRANDS */}
        <section className="section" style={{ paddingTop:"0" }}>
          <div className="wrap reveal">
            <span className="eyebrow">BRANDS WE INSTALL &amp; SERVICE</span>
            <h2 style={{ fontSize:"var(--fs-h3)", marginTop:"14px", marginBottom:"24px" }}>Trusted equipment, inside and out</h2>
            <div className="brands-row">
              <span className="brand-pill is-featured">GE — General Electric HVAC</span>
              <span className="brand-pill">Mycom</span>
              <span className="brand-pill">Baltimore Aircoil</span>
              <span className="brand-pill">North Star Ice Equipment</span>
              <span className="brand-pill">Geneglace</span>
              <span className="brand-pill">Cornell Pump</span>
            </div>
          </div>
        </section>
      
        {/* WHY US */}
        <section className="section" id="why-us" style={{ background:"var(--frost-dim)" }}>
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">WHY YOUNG'S</span>
              <h2>Built like industrial equipment. Priced like a local contractor.</h2>
            </div>
            <div className="why-grid">
              <div className="why-card reveal">
                <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4z"/></svg></div>
                <h3>Industrial-grade standards</h3>
                <p>The same ISO 9001 and Canadian Welding Bureau standards we hold on industrial jobs apply to the heat pump on your wall.</p>
              </div>
              <div className="why-card reveal">
                <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg></div>
                <h3>Local &amp; family-owned</h3>
                <p>Based in Come By Chance and Lethbridge — not a call centre in another province.</p>
              </div>
              <div className="why-card reveal">
                <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 12h6M9 16h6M9 8h2"/><rect x="5" y="3" width="14" height="18" rx="2"/></svg></div>
                <h3>We handle the paperwork</h3>
                <p>From rebate eligibility to utility invoicing, we walk you through the takeCHARGE process.</p>
              </div>
              <div className="why-card reveal">
                <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
                <h3>One call for everything</h3>
                <p>Heat pump, electrical, solar or industrial refrigeration — it's the same team and the same number.</p>
              </div>
            </div>
          </div>
        </section>
      
        {/* GALLERY */}
        <section className="section" id="gallery">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">OUR WORK</span>
              <h2>Industrial roots, growing home comfort</h2>
            </div>
      
            <div className="gallery-filter reveal" role="group" aria-label="Filter gallery by category">
              <button className="is-active" data-filter="all">All</button>
              <button data-filter="heatpump">Heat Pump Installs</button>
              <button data-filter="electrical">Electrical &amp; Solar</button>
              <button data-filter="industrial">Industrial &amp; Cold Storage</button>
            </div>
      
            <div className="gallery-grid reveal">
              <div className="gallery-item" data-category="industrial">
                <div className="gallery-item__art"><img src={gColdStorage} alt="Cold storage build in Happy Valley-Goose Bay" loading="lazy" width={800} height={600} /></div>
                <div className="gallery-item__cap"><div className="cat">Industrial &amp; Cold Storage</div><div className="name">Cold storage build, Happy Valley-Goose Bay</div></div>
              </div>
              <div className="gallery-item" data-category="heatpump">
                <div className="gallery-item__art"><img src={gMiniSplit} alt="Residential mini-split heat pump install" loading="lazy" width={800} height={600} /></div>
                <div className="gallery-item__cap"><div className="cat">Heat Pump Install</div><div className="name">Residential mini-split, Clarenville area</div></div>
              </div>
              <div className="gallery-item" data-category="electrical">
                <div className="gallery-item__art"><img src={gPanel} alt="Electrical panel upgrade" loading="lazy" width={800} height={600} /></div>
                <div className="gallery-item__cap"><div className="cat">Electrical</div><div className="name">Panel upgrade &amp; residential wiring</div></div>
              </div>
              <div className="gallery-item" data-category="industrial">
                <div className="gallery-item__art"><img src={gFishPlant} alt="Fish plant refrigeration retrofit" loading="lazy" width={800} height={600} /></div>
                <div className="gallery-item__cap"><div className="cat">Industrial &amp; Cold Storage</div><div className="name">Fish plant refrigeration retrofit</div></div>
              </div>
              <div className="gallery-item" data-category="electrical">
                <div className="gallery-item__art"><img src={gSolar} alt="Off-grid solar install at a cabin" loading="lazy" width={800} height={600} /></div>
                <div className="gallery-item__cap"><div className="cat">Solar</div><div className="name">Off-grid solar, cabin property</div></div>
              </div>
              <div className="gallery-item" data-category="heatpump">
                <div className="gallery-item__art"><img src={gThermal} alt="Thermal imaging heat-loss scan" loading="lazy" width={800} height={600} /></div>
                <div className="gallery-item__cap"><div className="cat">Thermal Imaging</div><div className="name">Pre-install heat-loss scan</div></div>
              </div>
            </div>
          </div>
        </section>
      
        {/* TESTIMONIALS */}
        <section className="section" style={{ background:"var(--frost-dim)" }}>
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">WHAT CUSTOMERS SAY</span>
              <h2>Sample of the feedback we're hearing</h2>
              
            </div>
            <div className="testi-grid">
              <div className="testi-card reveal">
                <div className="stars" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <p className="quote">Professional from the first call to the final walkthrough. They explained the rebate paperwork clearly and handled everything.</p>
                <div className="who">Heat pump install — Clarenville area</div>
              </div>
              <div className="testi-card reveal">
                <div className="stars" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <p className="quote">Good to know a crew that does the big industrial jobs is the same one showing up for a home service call. Knew exactly what they were doing.</p>
                <div className="who">Electrical service call</div>
              </div>
              <div className="testi-card reveal">
                <div className="stars" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <p className="quote">Been using them for our cold storage equipment for years. Didn't know they installed heat pumps now — easy decision to call them first.</p>
                <div className="who">Cold storage client, now heat pump customer</div>
              </div>
            </div>
          </div>
        </section>
      
        {/* SERVICE AREA */}
        <section className="section areas" id="areas">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">WHERE WE WORK</span>
              <h2>Serving Newfoundland &amp; Labrador</h2>
              <p className="lede">Based in Come By Chance and Lethbridge, our crews travel across the island and into Labrador for both residential and industrial work.</p>
              <div className="area-chips">
                <span className="area-chip">Come By Chance</span>
                <span className="area-chip">Lethbridge</span>
                <span className="area-chip">Clarenville</span>
                <span className="area-chip">Bonavista Peninsula</span>
                <span className="area-chip">Musgravetown</span>
                <span className="area-chip">Trinity Bay</span>
                <span className="area-chip">Happy Valley–Goose Bay</span>
                <span className="area-chip">Labrador</span>
                <span className="area-chip">+ surrounding NL communities</span>
              </div>
            </div>
            <div className="map-frame reveal">
              <iframe title="Map of Young's Industrial, Come By Chance NL" loading="lazy" src="https://maps.google.com/maps?q=55%20Alexander%20Gilbert%20Road%2C%20Come%20By%20Chance%2C%20NL&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
            </div>
          </div>
        </section>
      
        {/* CAREERS */}
        <section className="careers section" id="careers">
          <div className="wrap">
            <div>
              <h2>We're growing — now hiring</h2>
              <p>Refrigeration mechanics, electricians, HVAC installers and project coordinators. Ammonia experience is an asset; we're willing to train the right person.</p>
            </div>
            <a className="btn btn-primary" href="mailto:reception@youngsice.com?subject=Careers%20Inquiry">Email About Openings</a>
          </div>
        </section>
      
        {/* QUOTE */}
        <section className="section quote" id="quote">
          <div className="wrap">
            <div>
              <span className="eyebrow">GET STARTED</span>
              <h2 style={{ marginTop:"14px" }}>Get your free quote</h2>
              <p className="lede" style={{ marginTop:"14px" }}>Tell us what you need — heat pump, electrical, solar or industrial refrigeration — and we'll get back to you quickly.</p>
      
              <form className="quote-form" id="quoteForm">
                <div className="field-row">
                  <div className="field"><label htmlFor="qName">Name *</label><input id="qName" name="name" type="text" required /></div>
                  <div className="field"><label htmlFor="qPhone">Phone *</label><input id="qPhone" name="phone" type="tel" required /></div>
                </div>
                <div className="field"><label htmlFor="qEmail">Email *</label><input id="qEmail" name="email" type="email" required /></div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="qProperty">Property type</label>
                    <select id="qProperty" name="property">
                      <option>Residential</option><option>Commercial</option><option>Industrial</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="qService">Service interested in</label>
                    <select id="qService" name="service">
                      <option>Heat Pump / Mini-Split</option>
                      <option>Electrical</option>
                      <option>Solar</option>
                      <option>Thermal Imaging</option>
                      <option>Industrial Refrigeration &amp; Fabrication</option>
                      <option>Other / Not sure</option>
                    </select>
                  </div>
                </div>
                <label className="checkbox-row"><input type="checkbox" name="rebate_interest" /> I'd like to know if I qualify for the $22,000 oil-to-electric rebate</label>
                <div className="field"><label htmlFor="qMsg">Message / details</label><textarea id="qMsg" name="message" rows={4}></textarea></div>
                <button className="btn btn-primary" type="submit">Send My Request</button>
              </form>
      
              <div className="quote-success" id="quoteSuccess" hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <h3>Thanks — your request is in.</h3>
                <p>We'll be in touch shortly. For anything urgent, call (709) 467-9712 directly.</p>
              </div>
            </div>
      
            <div className="contact-side reveal">
              <h3>Or reach us directly</h3>
              <p style={{ color:"var(--slate)", fontSize:".92rem" }}>Two locations serving the province.</p>
      
              <div className="contact-card">
                <div className="loc-name">Come By Chance</div>
                <div className="loc-detail">
                  55 Alexander Gilbert Road<br />
                  Come By Chance, NL · A0B 1N0<br />
                  Tel: <a href="tel:+17094632659">(709) 463-2659</a>
                </div>
              </div>
      
              <div className="contact-card">
                <div className="loc-name">Lethbridge</div>
                <div className="loc-detail">
                  P.O. Box 98<br />
                  Lethbridge, NL · A0C 1V0<br />
                  Tel: <a href="tel:+17094679712">(709) 467-9712</a>
                </div>
              </div>
      
              <div className="contact-card">
                <div className="loc-name">Email</div>
                <div className="loc-detail">
                  General: <a href="mailto:reception@youngsice.com">reception@youngsice.com</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      
      </main>
    </div>
  );
}
