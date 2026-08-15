import { createFileRoute } from"@tanstack/react-router";
import { useState } from 'react';
import { ArrowRight, MapPin, Phone, Mail, Clock, CheckCircle2, Send } from 'lucide-react';
import { COMPANY } from '@/data/site';
import CTABanner from '@/components/CTABanner';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    details: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Trust strip */}
      <div className="bg-navy-900 text-navy-100">
        <div className="container-8xl py-4 text-center text-sm font-semibold tracking-wide">
          35 Years in Business <span className="text-safety-400 mx-2">·</span> ISO-9001-2015 <span className="text-safety-400 mx-2">·</span> Canadian Welding Bureau Certified
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[280px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Contact Young's Industrial"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 to-navy-900/50" />
        <div className="container-8xl relative flex h-full items-end pb-10">
          <div className="max-w-2xl">
            <p className="eyebrow text-safety-400 mb-3">Get in Touch</p>
            <h1 className="text-4xl font-bold text-white md:text-5xl">Request a Quote</h1>
            <p className="mt-3 text-lg text-navy-100">Tell us about your project and our team will get back to you.</p>
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-navy-800">Send Us a Message</h2>
              <p className="mt-2 text-steel-600">Fill out the form below and we'll respond within one business day.</p>

              {submitted ? (
                <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-8 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
                  <h3 className="mt-4 text-xl font-bold text-navy-800">Thank You!</h3>
                  <p className="mt-2 text-steel-600">Your request has been received. A member of our team will contact you shortly.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', service: '', details: '' }); }} className="btn-secondary mt-6">
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-navy-800 mb-1.5">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-md border border-steel-300 px-4 py-2.5 text-steel-800 focus:border-navy-500 focus:ring-2 focus:ring-navy-200 focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-navy-800 mb-1.5">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full rounded-md border border-steel-300 px-4 py-2.5 text-steel-800 focus:border-navy-500 focus:ring-2 focus:ring-navy-200 focus:outline-none transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy-800 mb-1.5">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full rounded-md border border-steel-300 px-4 py-2.5 text-steel-800 focus:border-navy-500 focus:ring-2 focus:ring-navy-200 focus:outline-none transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy-800 mb-1.5">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full rounded-md border border-steel-300 px-4 py-2.5 text-steel-800 focus:border-navy-500 focus:ring-2 focus:ring-navy-200 focus:outline-none transition-colors"
                        placeholder="(902) 555-0142"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-navy-800 mb-1.5">Service Interested In *</label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-md border border-steel-300 px-4 py-2.5 text-steel-800 focus:border-navy-500 focus:ring-2 focus:ring-navy-200 focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option value="Fabrication">Fabrication</option>
                      <option value="Refrigeration & HVAC">Refrigeration &amp; HVAC</option>
                      <option value="Products">Products</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="details" className="block text-sm font-semibold text-navy-800 mb-1.5">Project Details *</label>
                    <textarea
                      id="details"
                      name="details"
                      required
                      rows={5}
                      value={form.details}
                      onChange={handleChange}
                      className="w-full rounded-md border border-steel-300 px-4 py-2.5 text-steel-800 focus:border-navy-500 focus:ring-2 focus:ring-navy-200 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project, timeline, and requirements..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Submit Request
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact info card + map */}
            <div className="space-y-6">
              <div className="rounded-xl border border-steel-200 bg-steel-50 p-8">
                <h2 className="text-2xl font-bold text-navy-800">Contact Information</h2>
                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-800">
                      <MapPin className="h-5 w-5 text-safety-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-800">Address</p>
                      <p className="text-sm text-steel-600 mt-0.5">{COMPANY.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-800">
                      <Phone className="h-5 w-5 text-safety-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-800">Phone</p>
                      <a href={`tel:${COMPANY.phone.replace(/[^+\d]/g, '')}`} className="text-sm text-steel-600 mt-0.5 hover:text-safety-600 transition-colors">{COMPANY.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-800">
                      <Mail className="h-5 w-5 text-safety-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-800">Email</p>
                      <a href={`mailto:${COMPANY.email}`} className="text-sm text-steel-600 mt-0.5 hover:text-safety-600 transition-colors">{COMPANY.email}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-800">
                      <Clock className="h-5 w-5 text-safety-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-800">Business Hours</p>
                      <p className="text-sm text-steel-600 mt-0.5">{COMPANY.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-xl border border-steel-200 bg-steel-100">
                <div className="relative aspect-video">
                  <iframe
                    title="Young's Industrial location map"
                    src="https://www.google.com/maps?q=120+Industrial+Park+Road,+Dartmouth,+NS+B3B+1A5,+Canada&output=embed"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Prefer to Talk Directly?"
        description="Call us during business hours and our team will be happy to help."
      />
    </>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title:"Contact Us \u2014 Request a Quote | Young's Industrial" },
      { name:"description", content:"Talk to our team about fabrication, refrigeration or emergency service. Call, email or send us your project details." },
      { property:"og:title", content:"Contact Us \u2014 Request a Quote | Young's Industrial" },
      { property:"og:description", content:"Talk to our team about fabrication, refrigeration or emergency service. Call, email or send us your project details." },
      { property:"og:type", content:"website" },
      { name:"twitter:card", content:"summary_large_image" },
    ],
  }),
  component: Contact,
});
