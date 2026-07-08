/**
 * Peak & Pole Tent Co. — Header / Navigation
 * Design: Structural Elegance — clean, architectural, warm palette
 * - Logo left, nav right on desktop
 * - Mobile hamburger menu
 * - Transitions to solid background on scroll
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/small-tents", label: "Small Tents" },
  { href: "/large-tents", label: "Large Tents" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/manus-storage/logo-icon_135ef59a.png"
            alt="Peak & Pole"
            className="h-9 w-9 md:h-10 md:w-10"
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
              Peak & Pole
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C4A882] font-medium leading-tight hidden sm:block">
              Tent Co.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-[0.1em] font-medium transition-colors duration-200 hover:text-[#C4A882] ${
                location === link.href
                  ? "text-[#C4A882]"
                  : "text-[#2D2D2D]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {/* TODO: Replace with real phone number before launch */}
          <a
            href="tel:+15551234567"
            className="flex items-center gap-2 text-sm font-medium text-[#1a1a1a] hover:text-[#C4A882] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>(555) 123-4567</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-[#1a1a1a]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FDFBF7] border-t border-[#C4A882]/20 shadow-lg">
          <nav className="container py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base uppercase tracking-[0.08em] font-medium py-2 border-b border-[#F5F0E8] last:border-0 ${
                  location === link.href
                    ? "text-[#C4A882]"
                    : "text-[#2D2D2D]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 text-base font-medium text-[#1a1a1a] pt-2"
            >
              <Phone className="w-5 h-5 text-[#C4A882]" />
              <span>(555) 123-4567</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
