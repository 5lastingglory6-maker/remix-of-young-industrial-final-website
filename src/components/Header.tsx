import { useEffect, useState } from 'react';
import { Link, NavLink } from '@/components/SiteLink';
import { useRouterState } from '@tanstack/react-router';
import { ChevronDown, Menu, Phone, Mail, X } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/data/site';
import logoImg from"@/assets/logo-youngs.png.asset.json";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const toggleGroup = (key: string) =>
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));

  useEffect(() => {
    setMobileOpen(false);
    setOpenGroups({});
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-navy-900 text-navy-100 text-sm">
        <div className="mx-auto flex max-w-none items-center justify-end gap-6 px-3 py-2 lg:px-5">
          <a href={`tel:${COMPANY.phone.replace(/[^+\d]/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="h-3.5 w-3.5" />
            <span>{COMPANY.phone}</span>
          </a>
          <a href={`mailto:${COMPANY.email}`} className="hidden sm:flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="h-3.5 w-3.5" />
            <span>{COMPANY.email}</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className={`bg-white transition-shadow ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="mx-auto flex max-w-none items-center gap-4 px-3 py-4 lg:px-5">
          <Link to="/" className="flex shrink-0 items-center group">
            <img
              src={logoImg.url}
              alt="Young's Industrial"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <Link
                    to={link.to}
                    className="flex items-center gap-1 px-2.5 py-2 text-[13px] font-semibold uppercase tracking-wide text-navy-700 hover:text-safety-600 transition-colors"
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="w-64 rounded-lg border border-steel-200 bg-white p-2 shadow-xl">
                      {link.children.map((child) =>
                        child.children ? (
                          <div key={child.label} className="group/sub relative">
                            <Link
                              to={child.to}
                              className="flex items-center justify-between rounded-md px-4 py-2.5 text-sm font-semibold text-navy-700 hover:bg-steel-50 hover:text-safety-600 transition-colors"
                            >
                              {child.label}
                              <ChevronDown className="h-3.5 w-3.5 -rotate-90 group-hover/sub:rotate-90 transition-transform" />
                            </Link>
                            <div className="absolute left-full top-0 ml-1 hidden w-56 rounded-lg border border-steel-200 bg-white p-2 shadow-xl group-hover/sub:block">
                              {child.children.map((sub) => (
                                <Link
                                  key={sub.to}
                                  to={sub.to}
                                  className="block rounded-md px-4 py-2.5 text-sm font-medium text-steel-700 hover:bg-steel-50 hover:text-navy-700 transition-colors"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="block rounded-md px-4 py-2.5 text-sm font-medium text-steel-700 hover:bg-steel-50 hover:text-navy-700 transition-colors"
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }: { isActive: boolean }) =>
                    `px-2.5 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors ${
                      isActive ? 'text-safety-600' : 'text-navy-700 hover:text-safety-600'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          <Link to="/contact" className="btn-primary ml-auto hidden shrink-0 lg:inline-flex">
            Request a Quote
          </Link>

          {/* Mobile toggle */}
          <button
            className="ml-auto p-2 text-navy-700 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-steel-200 bg-white">
            <div className="container-8xl py-4 space-y-1">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <div className="flex items-center justify-between">
                      <Link
                        to={link.to}
                        className="flex-1 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-navy-700"
                      >
                        {link.label}
                      </Link>
                      <button
                        className="p-3 text-navy-700"
                        aria-label={`Toggle ${link.label} submenu`}
                        onClick={() => toggleGroup(link.label)}
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform ${openGroups[link.label] ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                    {openGroups[link.label] && (
                      <div className="pl-4 space-y-1">
                        {link.children.map((child) =>
                          child.children ? (
                            <div key={child.label}>
                              <div className="flex items-center justify-between">
                                <Link
                                  to={child.to}
                                  className="flex-1 px-4 py-2.5 text-sm font-semibold text-navy-700"
                                >
                                  {child.label}
                                </Link>
                                <button
                                  className="p-3 text-steel-600"
                                  aria-label={`Toggle ${child.label} submenu`}
                                  onClick={() => toggleGroup(child.label)}
                                >
                                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openGroups[child.label] ? 'rotate-180' : ''}`} />
                                </button>
                              </div>
                              {openGroups[child.label] && (
                                <div className="pl-3 space-y-1">
                                  {child.children.map((sub) => (
                                    <Link
                                      key={sub.to}
                                      to={sub.to}
                                      className="block px-4 py-2.5 text-sm font-medium text-steel-700 hover:text-navy-700"
                                    >
                                      {sub.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              key={child.to}
                              to={child.to}
                              className="block px-4 py-2.5 text-sm font-medium text-steel-700 hover:text-navy-700"
                            >
                              {child.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }: { isActive: boolean }) =>
                      `block px-4 py-3 text-sm font-semibold uppercase tracking-wider ${
                        isActive ? 'text-safety-600' : 'text-navy-700'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
              <Link to="/contact" className="btn-primary mt-3 w-full">
                Request a Quote
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
