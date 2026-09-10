import { Link } from '@/components/SiteLink';
import { Facebook, Linkedin, MapPin, Phone, Mail, Snowflake, ArrowRight } from 'lucide-react';
import { COMPANY } from '@/data/site';
const logoImg = '/logo-youngs.png';
export default function Footer() {
  const year = new Date().getFullYear();
  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services/fabrication' },
    { label: 'Products', to: '/products' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-8xl py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Company info */}
          <div>
            <div className="mb-5 inline-block rounded-lg bg-white p-3">
              <img
                src={logoImg}
                alt="Young's Industrial"
                className="h-12 w-auto object-contain"
              />
            </div>
            <address className="not-italic space-y-3 text-sm leading-relaxed text-white">
              <p className="!text-white flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-safety-400 shrink-0" />
                <span className="text-white">{COMPANY.address}</span>
              </p>
              <p className="!text-white flex items-center gap-3">
                <Phone className="h-4 w-4 text-safety-400 shrink-0" />
                <a href={`tel:${COMPANY.phone.replace(/[^+\d]/g, '')}`} className="text-white hover:text-safety-400 transition-colors">{COMPANY.phone}</a>
              </p>
              <p className="!text-white flex items-center gap-3">
                <Mail className="h-4 w-4 text-safety-400 shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="text-white hover:text-safety-400 transition-colors">{COMPANY.email}</a>
              </p>
            </address>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white mb-5">Site Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-white hover:text-safety-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + quote */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white mb-5">Connect With Us</h3>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 hover:bg-safety-500 transition-colors text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 hover:bg-safety-500 transition-colors text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <Link to="/contact" className="btn-primary">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-8xl py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/80">
          <p className="!text-white">&copy; {year} {COMPANY.name}. {COMPANY.registration}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/terms" className="text-white hover:text-safety-400 transition-colors">Terms</Link>
            <Link to="/privacy" className="text-white hover:text-safety-400 transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
