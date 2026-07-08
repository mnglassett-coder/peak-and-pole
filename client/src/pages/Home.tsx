import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";

/**
 * Home Page — Peak & Pole Tent Co.
 * Design: Structural Elegance — Architectural Minimalism
 * Signature elements: diagonal peak lines, pole markers, angled dividers, offset compositions
 */
export default function Home() {
  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/manus-storage/hero-tent-evening_f6f83a7f.jpg"
            alt="Elegant tent setup at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container pb-20 md:pb-28 pt-32">
          <div className="max-w-3xl">
            {/* Peak line accent */}
            <div className="w-12 h-[2px] bg-[#C4A882] mb-6 origin-left rotate-[-8deg]" />
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-[#C4A882] font-medium mb-5">
              Louisiana Northshore
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              Your backyard.<br />
              Our structure.<br />
              <span className="text-[#C4A882]">Their jaws on the floor.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed">
              Premium tent rentals for events that deserve more than a tarp and some hope. Serving Covington, Mandeville, Madisonville, Hammond & Ponchatoula.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/small-tents">
                <Button className="bg-[#C4A882] text-[#1a1a1a] hover:bg-[#b89970] active:scale-[0.97] transition-all duration-160 uppercase tracking-[0.15em] text-sm font-semibold px-8 py-3.5 h-auto">
                  Book a Small Tent <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/large-tents">
                <Button className="bg-transparent border-2 border-white/80 text-white hover:bg-white/10 active:scale-[0.97] transition-all duration-160 uppercase tracking-[0.15em] text-sm font-semibold px-8 py-3.5 h-auto">
                  Get a Quote for Large Tents
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Diagonal bottom edge — peak line motif */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#1a1a1a]" style={{ clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)" }} />
      </section>

      {/* ===== SERVICE AREA BAR ===== */}
      <section className="bg-[#1a1a1a] py-5 -mt-[1px]">
        <div className="container flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C4A882] font-semibold">Serving:</span>
          {["Covington", "Mandeville", "Madisonville", "Hammond", "Ponchatoula"].map((city) => (
            <span key={city} className="flex items-center gap-1.5 text-sm text-[#F5F0E8]/80">
              <MapPin className="w-3 h-3 text-[#C4A882]" />
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* ===== TWO-TIER SECTION ===== */}
      <section className="py-24 md:py-32 bg-[#FDFBF7]">
        <div className="container">
          {/* Section header with pole marker */}
          <div className="text-center mb-16 relative">
            <div className="w-[1px] h-10 bg-[#C4A882] mx-auto mb-4" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C4A882] font-semibold">Choose Your Coverage</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
              Two ways to get covered
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0">
            {/* Small Tents — offset left */}
            <div className="group relative bg-[#F5F0E8] overflow-hidden lg:translate-y-6">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="/manus-storage/small-tent-popup_dea8a924.jpg"
                  alt="Pop-up tent for backyard party"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Diagonal tan accent strip */}
              <div className="absolute top-0 right-0 w-2 h-full bg-[#C4A882]" />
              <div className="p-8 md:p-10 relative">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C4A882] font-semibold">Instant Booking</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mt-2 mb-3">Small Tents & Pop-Ups</h3>
                <p className="text-[#2D2D2D]/70 mb-6 leading-relaxed">
                  10×10 to 20×20. Published pricing, simple booking. Pick your size, lock in your date, done.
                </p>
                <Link href="/small-tents">
                  <Button className="bg-[#1a1a1a] text-[#F5F0E8] hover:bg-[#2D2D2D] active:scale-[0.97] transition-all duration-160 uppercase tracking-[0.12em] text-sm font-semibold px-6 py-3 h-auto">
                    View Sizes & Pricing <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Large Tents — offset right */}
            <div className="group relative bg-white border border-[#C4A882]/20 overflow-hidden lg:-translate-y-6">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="/manus-storage/large-tent-structure_0357d2a3.jpg"
                  alt="Large structure tent for formal event"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-0 left-0 w-2 h-full bg-[#C4A882]" />
              <div className="p-8 md:p-10 relative">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C4A882] font-semibold">Custom Quote</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mt-2 mb-3">Large & Structure Tents</h3>
                <p className="text-[#2D2D2D]/70 mb-6 leading-relaxed">
                  30×30 and up. Custom quotes based on your event, site, and layout needs. We'll do a site assessment.
                </p>
                <Link href="/large-tents">
                  <Button className="bg-[#C4A882] text-[#1a1a1a] hover:bg-[#b89970] active:scale-[0.97] transition-all duration-160 uppercase tracking-[0.12em] text-sm font-semibold px-6 py-3 h-auto">
                    Request a Quote <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ANGLED DIVIDER — peak motif ===== */}
      <div className="relative h-20 bg-[#FDFBF7]">
        <div className="absolute inset-0 bg-[#F5F0E8]" style={{ clipPath: "polygon(0 0, 100% 60%, 100% 100%, 0 100%)" }} />
      </div>

      {/* ===== TRUST SIGNALS ===== */}
      <section className="bg-[#F5F0E8] py-20 md:py-24 -mt-[1px]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: "Northshore Owned", desc: "Based right here in St. Tammany Parish. We know the venues, the weather, and the neighbors." },
              { title: "Full Service", desc: "Delivery, professional setup, and teardown included in every single rental. You don't lift a pole." },
              { title: "Fast Response", desc: "Quotes and confirmations within 24 hours — usually same day if you catch us between setups." },
              { title: "Five-Town Coverage", desc: "Covington, Mandeville, Madisonville, Hammond, and Ponchatoula. No delivery surcharge in our zone." },
            ].map((item, i) => (
              <div key={i} className="relative pl-5 border-l-2 border-[#C4A882]">
                <h4 className="font-serif text-lg font-bold text-[#1a1a1a]">{item.title}</h4>
                <p className="text-sm text-[#2D2D2D]/70 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="py-24 md:py-32 bg-[#FDFBF7]">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="w-8 h-[2px] bg-[#C4A882] mb-4 origin-left rotate-[-6deg]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C4A882] font-semibold">Recent Work</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2">Setups across the Northshore</h2>
            </div>
            <Link href="/gallery" className="text-sm uppercase tracking-[0.12em] font-semibold text-[#1a1a1a] hover:text-[#C4A882] transition-colors flex items-center gap-1">
              Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            <div className="aspect-[4/3] overflow-hidden col-span-2 md:col-span-1 md:row-span-2">
              <img
                src="/manus-storage/hero-tent-evening_f6f83a7f.jpg"
                alt="Evening tent setup"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/manus-storage/gallery-tent-setup_c633e58a.jpg"
                alt="Graduation party tent"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/manus-storage/large-tent-structure_0357d2a3.jpg"
                alt="Large tent exterior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/manus-storage/tent-detail-pole_3c1b84d0.jpg"
                alt="Tent peak detail — structural pole junction"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/manus-storage/small-tent-popup_dea8a924.jpg"
                alt="Pop-up canopy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION with diagonal architecture ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#1a1a1a]" />
        {/* Diagonal structural accents */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-2/5 h-full bg-[#C4A882]/[0.04] origin-top-right skew-x-[-12deg]" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 border-l border-[#C4A882]/20 skew-x-[8deg] translate-x-8" />
        </div>

        <div className="relative z-10 container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-[1px] h-8 bg-[#C4A882] mx-auto mb-6" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C4A882] font-semibold">Weekends fill fast</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              Lock in your date
            </h2>
            <p className="text-lg text-[#F5F0E8]/70 max-w-lg mx-auto mb-10">
              Spring and fall book out weeks ahead. Don't wait until your backup plan becomes your only plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/small-tents">
                <Button className="bg-[#C4A882] text-[#1a1a1a] hover:bg-[#b89970] active:scale-[0.97] transition-all duration-160 uppercase tracking-[0.15em] text-sm font-semibold px-8 py-3.5 h-auto">
                  Book a Small Tent
                </Button>
              </Link>
              <Link href="/large-tents">
                <Button className="bg-transparent border-2 border-[#F5F0E8]/60 text-[#F5F0E8] hover:bg-[#F5F0E8]/10 active:scale-[0.97] transition-all duration-160 uppercase tracking-[0.15em] text-sm font-semibold px-8 py-3.5 h-auto">
                  Request a Large Tent Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
