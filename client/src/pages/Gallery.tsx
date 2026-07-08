/**
 * Gallery Page — Peak & Pole Tent Co.
 * Design: Structural Elegance
 * Photo grid of past setups (placeholder images for now)
 */

/* TODO: Replace all placeholder images with real photos of local setups before launch */
const GALLERY_IMAGES = [
  { src: "/manus-storage/hero-tent-evening_f6f83a7f.jpg", alt: "Evening tent setup with string lights" },
  { src: "/manus-storage/large-tent-structure_0357d2a3.jpg", alt: "Large structure tent for formal event" },
  { src: "/manus-storage/gallery-tent-setup_c633e58a.jpg", alt: "Graduation party tent setup" },
  { src: "/manus-storage/small-tent-popup_dea8a924.jpg", alt: "Pop-up canopy for backyard gathering" },
  { src: "/manus-storage/tent-detail-pole_3c1b84d0.jpg", alt: "Tent interior detail — peak and pole junction" },
  { src: "/manus-storage/hero-tent-evening_f6f83a7f.jpg", alt: "Tent with warm lighting at dusk" },
  { src: "/manus-storage/gallery-tent-setup_c633e58a.jpg", alt: "Outdoor event tent with tables" },
  { src: "/manus-storage/large-tent-structure_0357d2a3.jpg", alt: "Large tent exterior view" },
];

export default function Gallery() {
  return (
    <main className="pt-20 md:pt-24">
      {/* Page Header */}
      <section className="bg-[#1a1a1a] text-[#F5F0E8] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C4A882]/[0.04] origin-top-right skew-x-[-12deg]" />
        <div className="container">
          <div className="w-10 h-[2px] bg-[#C4A882] mb-5 origin-left rotate-[-6deg]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#C4A882] font-semibold">Proof of Work</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-4">
            Setups across the Northshore
          </h1>
          <p className="text-lg text-[#F5F0E8]/70 max-w-2xl leading-relaxed">
            Real setups from real events. Backyards, venues, and everything in between.
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-20 md:py-28 bg-[#FDFBF7]">
        <div className="container">
          <div className="w-[1px] h-8 bg-[#C4A882] mx-auto mb-8" />
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid overflow-hidden group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
