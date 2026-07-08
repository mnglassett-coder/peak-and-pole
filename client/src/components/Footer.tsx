/**
 * Peak & Pole Tent Co. — Footer
 * Design: Structural Elegance — dark footer with warm accents
 */
import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#F5F0E8]">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/manus-storage/logo-icon_135ef59a.png"
                alt="Peak & Pole"
                className="h-8 w-8 invert brightness-200"
              />
              <div>
                <span className="font-serif text-lg font-bold text-white">Peak & Pole</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#C4A882]">Tent Co.</span>
              </div>
            </div>
            <p className="text-sm text-[#F5F0E8]/70 leading-relaxed max-w-xs">
              Premium tent rentals for the Louisiana Northshore. From backyard celebrations to corporate events — we bring the structure, you bring the party.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-[#C4A882] font-medium mb-4">Navigate</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/small-tents" className="text-sm text-[#F5F0E8]/80 hover:text-[#C4A882] transition-colors">Small Tents & Pop-Ups</Link>
              <Link href="/large-tents" className="text-sm text-[#F5F0E8]/80 hover:text-[#C4A882] transition-colors">Large & Structure Tents</Link>
              <Link href="/gallery" className="text-sm text-[#F5F0E8]/80 hover:text-[#C4A882] transition-colors">Gallery</Link>
              <Link href="/faq" className="text-sm text-[#F5F0E8]/80 hover:text-[#C4A882] transition-colors">FAQ</Link>
              <Link href="/contact" className="text-sm text-[#F5F0E8]/80 hover:text-[#C4A882] transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-[#C4A882] font-medium mb-4">Service Area</h4>
            <div className="flex flex-col gap-2 text-sm text-[#F5F0E8]/80">
              <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#C4A882]" /> Covington, LA</span>
              <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#C4A882]" /> Mandeville, LA</span>
              <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#C4A882]" /> Madisonville, LA</span>
              <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#C4A882]" /> Hammond, LA</span>
              <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#C4A882]" /> Ponchatoula, LA</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-[#C4A882] font-medium mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              {/* TODO: Replace with real phone number before launch */}
              <a href="tel:+15551234567" className="flex items-center gap-2 text-sm text-[#F5F0E8]/80 hover:text-[#C4A882] transition-colors">
                <Phone className="w-4 h-4" /> (555) 123-4567
              </a>
              {/* TODO: Replace with real email before launch */}
              <a href="mailto:info@peakandpole.com" className="flex items-center gap-2 text-sm text-[#F5F0E8]/80 hover:text-[#C4A882] transition-colors">
                <Mail className="w-4 h-4" /> info@peakandpole.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#F5F0E8]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#F5F0E8]/50">
            &copy; {new Date().getFullYear()} Peak & Pole Tent Co. All rights reserved.
          </p>
          <p className="text-xs text-[#F5F0E8]/50">
            Serving the Louisiana Northshore with premium tent rentals.
          </p>
        </div>
      </div>
    </footer>
  );
}
