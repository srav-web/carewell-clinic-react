import { useState } from "react";

const PHONE = "+91 00000 00000";
const links = [["Home", "#home"], ["Services", "#services"], ["Doctors", "#doctors"], ["About", "#about"], ["Contact", "#contact"]];
const features = [["+", "Safe & Sterile", "Latest safety protocols"], ["◷", "Flexible Hours", "Evening & weekend"], ["☺", "Expert Team", "Certified professionals"]];
const services = [
  ["General Consultation", "Check-ups, fever, infections and everyday health concerns.", "🩺", "general.jpg"],
  ["Pediatrics", "Child health, vaccinations and growth monitoring.", "👶", "pediatrics.jpg"],
  ["Women's Health", "Routine care, screenings and pregnancy support.", "🌸", "womens-health.jpg"],
  ["Diagnostics & Lab", "Blood tests and scans with quick, clear reports.", "🧪", "lab.jpg"],
  ["Emergency Care", "Round-the-clock help. Call the emergency number above.", "🚑", "emergency.jpg"],
  ["Telehealth", "Talk to a doctor by phone or video from home.", "💻", "telehealth.jpg"],
];
const doctors = [["AS", "Dr. A. Sharma", "General Physician"], ["RK", "Dr. R. Kumar", "Pediatrician"], ["MN", "Dr. M. Nair", "Gynecologist"]];

function Photo({ src, alt, className = "", fallback }) {
  const [failed, setFailed] = useState(false);
  if (failed) return fallback;
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} />;
}

function HeroPanel() {
  const rows = [["🕗", "Open today", "8:00 am - 8:00 pm"], ["🚑", "Emergency", "Call +91 00000 00000"], ["📅", "Appointments", "Book online in a few taps"]];
  return (
    <div className="grid min-h-72 content-center gap-4 rounded-2xl bg-gradient-to-br from-deep to-brand p-6 md:min-h-[440px] md:p-10">
      {rows.map(([i, t, d]) => (
        <div key={t} className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-lg">
          <span aria-hidden="true" className="grid h-12 w-12 flex-none place-items-center rounded-full bg-teal-100 text-2xl">{i}</span>
          <div><b className="block">{t}</b><span className="text-sm text-slate-500">{d}</span></div>
        </div>
      ))}
    </div>
  );
}

const btn = "inline-flex min-h-[46px] items-center justify-center rounded-lg px-5 font-semibold border";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#home" className="text-xl font-extrabold">CareWell Clinic</a>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-7">
            {links.map(([l, h]) => (
              <li key={l}><a href={h} className="py-2 font-medium hover:text-brand">{l}</a></li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+910000000000" className="hidden text-slate-500 lg:block">{PHONE}</a>
          <a href="#contact" className={`${btn} border-ink bg-ink text-white hover:bg-slate-800 text-sm md:text-base`}>Book Appointment</a>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}
            className="h-[46px] w-[46px] rounded-lg border border-slate-200 text-2xl md:hidden">☰</button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-slate-200 bg-white px-5 pb-3 md:hidden">
          {links.map(([l, h]) => (
            <a key={l} href={h} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3.5 font-medium">{l}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Section({ id, title, sub, tint, children }) {
  return (
    <section id={id} className={`py-14 md:py-[72px] ${tint ? "bg-tint" : ""}`}>
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        {sub && <p className="mt-2 max-w-xl text-slate-500">{sub}</p>}
        {children}
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section id="home" className="bg-gradient-to-b from-tint to-white py-10 md:py-[72px]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            Your Health is Our <span className="text-brand">Priority</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-500">
            Experience compassionate, comprehensive healthcare with our team of experienced medical professionals. Find a doctor, see our services and book a visit in a few taps.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#contact" className={`${btn} w-full border-ink bg-ink text-white hover:bg-slate-800 sm:w-auto`}>Schedule Consultation</a>
            <a href="#services" className={`${btn} w-full border-slate-200 bg-white hover:bg-tint sm:w-auto`}>Learn More</a>
          </div>
        </div>
        <Photo
          src="/images/hero.jpg"
          alt="Doctor talking with a patient at CareWell Clinic"
          className="h-72 w-full rounded-2xl object-cover md:h-[440px]"
          fallback={<HeroPanel />}
        />
      </div>
      <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-5 md:grid-cols-3 md:text-center">
        {features.map(([i, t, d]) => (
          <div key={t} className="flex items-center gap-4 md:flex-col md:gap-2">
            <span className="grid h-[46px] w-[46px] place-items-center rounded-full bg-teal-100 font-extrabold text-deep">{i}</span>
            <span><b className="block">{t}</b><small className="text-slate-500">{d}</small></span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [msg, setMsg] = useState("");
  const field = "mt-1.5 min-h-[48px] w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3";
  const submit = (e) => {
    e.preventDefault();
    e.target.reset();
    setMsg("Thank you! This is a demo form, so no message was sent.");
  };
  return (
    <Section id="contact" tint title="Book an appointment" sub="Reach out directly or fill in the form and we will confirm your visit.">
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <p><b className="block">Phone</b><a href="tel:+910000000000">{PHONE}</a></p>
          <p><b className="block">Email</b>info@carewell.example</p>
          <p><b className="block">Address</b>Bangalore, Karnataka, India</p>
          <p><b className="block">Office hours</b>Mon-Sat 8:00 am - 8:00 pm, Sun 9:00 am - 2:00 pm</p>
        </div>
        <form onSubmit={submit} className="grid gap-3.5">
          <label className="font-semibold">Full name<input className={field} name="name" autoComplete="name" required /></label>
          <label className="font-semibold">Phone number<input className={field} name="phone" type="tel" autoComplete="tel" required /></label>
          <label className="font-semibold">Preferred date<input className={field} name="date" type="date" required /></label>
          <label className="font-semibold">Message<textarea className={`${field} min-h-[110px]`} name="message" /></label>
          <button type="submit" className={`${btn} border-ink bg-ink text-white hover:bg-slate-800`}>Request appointment</button>
          <p role="status" aria-live="polite" className="min-h-6 font-semibold text-deep">{msg}</p>
        </form>
      </div>
    </Section>
  );
}

export default function App() {
  return (
    <>
      <div className="bg-deep px-4 py-2 text-center text-sm text-white">
        Emergency? Call <a className="font-bold underline" href="tel:+910000000000">{PHONE}</a> (24 hours)
      </div>
      <Header />
      <main>
        <Hero />
        <Section id="services" title="Our services" sub="Everything patients look for most, easy to find.">
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([t, d, icon, img]) => (
              <div key={t} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <Photo
                  src={`/images/${img}`}
                  alt={`${t} at CareWell Clinic`}
                  className="h-44 w-full object-cover"
                  fallback={<div aria-hidden="true" className="grid h-44 place-items-center bg-teal-50 text-5xl">{icon}</div>}
                />
                <div className="p-5">
                  <h3 className="mb-1.5 flex items-center gap-2 text-lg font-semibold"><span aria-hidden="true">{icon}</span>{t}</h3>
                  <p className="text-sm text-slate-500">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
        <Section id="doctors" tint title="Meet our doctors" sub="Sample profiles for this design prototype.">
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map(([i, n, r]) => (
              <div key={n} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <span className="grid h-[52px] w-[52px] place-items-center rounded-full bg-brand font-bold text-white">{i}</span>
                <div><b>{n}</b><small className="block text-slate-500">{r}</small></div>
              </div>
            ))}
          </div>
        </Section>
        <Section id="about" title="About CareWell"
          sub="A neighbourhood clinic built around the patient: clear information, short waiting times and caring professionals. Open evenings and weekends so care fits your schedule." />
        <Contact />
      </main>
      <footer className="bg-ink px-5 py-7 text-center text-sm text-slate-300">
        © CareWell Clinic. Sample content for a design prototype by Dilli Sravani.
      </footer>
    </>
  );
}
