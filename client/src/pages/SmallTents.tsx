/**
 * Small Tents Page — Peak & Pole Tent Co.
 * Design: Structural Elegance
 * Shows pop-up and small frame tents with published pricing and "Book Now" form
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, X, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

interface TentOption {
  id: string;
  name: string;
  size: string;
  price: string;
  description: string;
  image: string;
}

const SMALL_TENTS: TentOption[] = [
  {
    id: "popup-10x10",
    name: "Pop-Up Canopy",
    size: "10' × 10'",
    price: "$50",
    description: "Perfect for small gatherings, vendor booths, or backyard shade. Quick setup, clean look.",
    image: "/manus-storage/popup-10x10-square_fe44471f.jpg",
  },
  {
    id: "frame-20x20",
    name: "Frame Tent",
    size: "20' × 20'",
    price: "$415",
    description: "Raised center ridge with canopy sloping to the edges. No center pole, clean interior space. Fits ~40 guests seated or 60 standing.",
    image: "/manus-storage/frame-20x20-square_61901eb7.jpg",
  },
  {
    id: "frame-20x30",
    name: "Frame Tent",
    size: "20' × 30'",
    price: "$635",
    description: "Same raised-ridge frame structure in a larger footprint. Great for seated dinners, receptions, or corporate events up to 60 guests.",
    image: "/manus-storage/frame-20x30-rect_9d4cbbb7.jpg",
  },
  {
    id: "frame-20x40",
    name: "Frame Tent",
    size: "20' × 40'",
    price: "$855",
    description: "Our largest instant-book frame tent. Raised center ridge, no center pole, room for 80+ guests seated or 120 standing.",
    image: "/manus-storage/frame-20x40-long_1775b69c.jpg",
  },
];

export default function SmallTents() {
  const [selectedTent, setSelectedTent] = useState<TentOption | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitBooking = trpc.forms.submitBooking.useMutation({
    onSuccess: () => {
      setFormSubmitted(true);
      setIsSubmitting(false);
      toast.success("Booking request submitted! We'll confirm within 24 hours.");
    },
    onError: (err) => {
      toast.error(err.message || "Something went wrong. Please try again or call us directly.");
      setIsSubmitting(false);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedTent) return;
    setIsSubmitting(true);
    const form = new FormData(e.currentTarget);
    submitBooking.mutate({
      tentName: selectedTent.name,
      tentSize: selectedTent.size,
      tentPrice: selectedTent.price,
      name: form.get("name") as string,
      phone: form.get("phone") as string,
      email: form.get("email") as string,
      date: form.get("date") as string,
      address: form.get("address") as string,
      notes: (form.get("notes") as string) || undefined,
    });
  };

  return (
    <main className="pt-20 md:pt-24">
      {/* Page Header */}
      <section className="bg-[#1a1a1a] text-[#F5F0E8] py-16 md:py-24 relative overflow-hidden">
        {/* Diagonal structural accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C4A882]/[0.04] origin-top-right skew-x-[-12deg]" />
        <div className="container">
          <div className="w-10 h-[2px] bg-[#C4A882] mb-5 origin-left rotate-[-6deg]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#C4A882] font-semibold">Instant Booking</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-4">
            Pick your size. Lock in your date.
          </h1>
          <p className="text-lg text-[#F5F0E8]/70 max-w-2xl leading-relaxed">
            Simple coverage for simple events. Pricing includes delivery, setup, and teardown across our entire Northshore service area. No hidden fees, no site visit required.
          </p>
        </div>
      </section>

      {/* Tent Grid */}
      <section className="py-20 md:py-28 bg-[#FDFBF7]">
        <div className="container">
          {/* Pole marker */}
          <div className="w-[1px] h-8 bg-[#C4A882] mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SMALL_TENTS.map((tent) => (
              <div
                key={tent.id}
                className="group bg-white border border-[#F5F0E8] overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={tent.image}
                    alt={`${tent.name} ${tent.size}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#1a1a1a]">{tent.name}</h3>
                      <span className="text-sm text-[#C4A882] font-medium uppercase tracking-wider">{tent.size}</span>
                    </div>
                    <span className="font-serif text-2xl font-bold text-[#1a1a1a]">{tent.price}</span>
                  </div>
                  <p className="text-sm text-[#2D2D2D]/70 mb-6">{tent.description}</p>
                  <Button
                    onClick={() => { setSelectedTent(tent); setFormSubmitted(false); setIsSubmitting(false); }}
                    className="w-full bg-[#1a1a1a] text-[#F5F0E8] hover:bg-[#2D2D2D] active:scale-[0.97] transition-all duration-160 uppercase tracking-wider text-sm font-medium py-3"
                  >
                    Book Now — {tent.price}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 p-6 bg-[#F5F0E8] border-l-4 border-[#C4A882]">
            <p className="text-sm text-[#2D2D2D]">
              <strong>Need real infrastructure?</strong> Our large structure tents accommodate 50–500+ guests with full site assessment.{" "}
              <a href="/large-tents" className="text-[#C4A882] underline hover:text-[#1a1a1a] transition-colors">
                Tell us about your event →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {selectedTent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setSelectedTent(null)}
              className="absolute top-4 right-4 p-2 text-[#2D2D2D] hover:text-[#1a1a1a]"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-bold mb-2">You're All Set</h3>
                  <p className="text-[#2D2D2D]/70 mb-6">
                    We've received your booking request for the {selectedTent.name} ({selectedTent.size}).
                    Our team will confirm availability and reach out within 24 hours.
                  </p>
                  <Button
                    onClick={() => setSelectedTent(null)}
                    className="bg-[#1a1a1a] text-[#F5F0E8] hover:bg-[#2D2D2D]"
                  >
                    Done
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#C4A882] font-medium">Book Now</span>
                    <h3 className="font-serif text-2xl font-bold mt-1">
                      {selectedTent.name} — {selectedTent.size}
                    </h3>
                    <p className="text-lg font-serif font-bold text-[#C4A882] mt-1">{selectedTent.price}</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="book-name" className="text-xs uppercase tracking-wider text-[#2D2D2D]/70">Full Name</Label>
                        <Input id="book-name" name="name" required className="mt-1 border-[#C4A882]/30 focus:border-[#C4A882]" />
                      </div>
                      <div>
                        <Label htmlFor="book-phone" className="text-xs uppercase tracking-wider text-[#2D2D2D]/70">Phone</Label>
                        <Input id="book-phone" name="phone" type="tel" required className="mt-1 border-[#C4A882]/30 focus:border-[#C4A882]" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="book-email" className="text-xs uppercase tracking-wider text-[#2D2D2D]/70">Email</Label>
                      <Input id="book-email" name="email" type="email" required className="mt-1 border-[#C4A882]/30 focus:border-[#C4A882]" />
                    </div>
                    <div>
                      <Label htmlFor="book-date" className="text-xs uppercase tracking-wider text-[#2D2D2D]/70">Event Date</Label>
                      <Input id="book-date" name="date" type="date" required className="mt-1 border-[#C4A882]/30 focus:border-[#C4A882]" />
                    </div>
                    <div>
                      <Label htmlFor="book-address" className="text-xs uppercase tracking-wider text-[#2D2D2D]/70">Delivery Address</Label>
                      <Input id="book-address" name="address" required placeholder="Street address, city, zip" className="mt-1 border-[#C4A882]/30 focus:border-[#C4A882]" />
                    </div>
                    <div>
                      <Label htmlFor="book-notes" className="text-xs uppercase tracking-wider text-[#2D2D2D]/70">Notes (optional)</Label>
                      <Textarea id="book-notes" name="notes" rows={3} placeholder="Any special requests or setup details..." className="mt-1 border-[#C4A882]/30 focus:border-[#C4A882]" />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#1a1a1a] text-[#F5F0E8] hover:bg-[#2D2D2D] active:scale-[0.97] transition-all duration-160 uppercase tracking-wider text-sm font-medium py-3 mt-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin inline" /> Submitting...</> : "Confirm Booking Request"}
                    </Button>
                    <p className="text-xs text-center text-[#2D2D2D]/50 mt-2">
                      This is a booking request, not a live payment. We'll confirm availability and follow up.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
