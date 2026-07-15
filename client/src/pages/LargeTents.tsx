/**
 * Large Tents Page — Peak & Pole Tent Co.
 * Design: Structural Elegance
 * Shows large/structure tents with "Request a Quote" form (no pricing)
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, X, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

interface LargeTentOption {
  id: string;
  name: string;
  size: string;
  capacity: string;
  description: string;
  image: string;
}

const LARGE_TENTS: LargeTentOption[] = [
  {
    id: "frame-30x30",
    name: "Frame Tent",
    size: "30' × 30'",
    capacity: "Up to 90 guests",
    description: "No center poles — open floor plan ideal for seated dinners, dance floors, or buffet layouts.",
    image: "/manus-storage/frame-tent-photo_e3cde3b5.jpg",
  },
  {
    id: "frame-30x60",
    name: "Frame Tent",
    size: "30' × 60'",
    capacity: "Up to 180 guests",
    description: "Our most popular large tent. Versatile layout for weddings, corporate events, and community gatherings.",
    image: "/manus-storage/frame-tent-photo_e3cde3b5.jpg",
  },
  {
    id: "structure-40x60",
    name: "Structure Tent",
    size: "40' × 60'",
    capacity: "Up to 240 guests",
    description: "Engineered for scale. High ceilings, dramatic peaks, and room for full event production.",
    image: "/manus-storage/structure-tent-photo_0ffb7259.jpg",
  },
  {
    id: "structure-40x80",
    name: "Structure Tent",
    size: "40' × 80'",
    capacity: "Up to 320 guests",
    description: "Our largest offering. Built for major events — galas, festivals, and large corporate functions.",
    image: "/manus-storage/structure-tent-photo_0ffb7259.jpg",
  },
];

export default function LargeTents() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [selectedTent, setSelectedTent] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [surfaceType, setSurfaceType] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitQuote = trpc.forms.submitQuote.useMutation({
    onSuccess: () => {
      setFormSubmitted(true);
      setIsSubmitting(false);
      toast.success("Quote request submitted! We'll be in touch within 24 hours.");
    },
    onError: (err) => {
      toast.error(err.message || "Something went wrong. Please try again or call us directly.");
      setIsSubmitting(false);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = new FormData(e.currentTarget);
    submitQuote.mutate({
      name: form.get("name") as string,
      phone: form.get("phone") as string,
      email: form.get("email") as string,
      date: form.get("date") as string,
      guests: form.get("guests") as string,
      address: form.get("address") as string,
      tentType: selectedTent || undefined,
      surfaceType: surfaceType || undefined,
      details: (form.get("details") as string) || undefined,
    });
  };

  const openQuoteForm = (tentId?: string) => {
    if (tentId) setSelectedTent(tentId);
    setShowQuoteForm(true);
    setFormSubmitted(false);
    setIsSubmitting(false);
  };

  return (
    <main className="pt-20 md:pt-24">
      {/* Page Header */}
      <section className="bg-[#1a1a1a] text-[#F5F0E8] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C4A882]/[0.04] origin-top-right skew-x-[-12deg]" />
        <div className="container">
          <div className="w-10 h-[2px] bg-[#C4A882] mb-5 origin-left rotate-[-6deg]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#C4A882] font-semibold">Custom Quote</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-4">
            Tell us the event. We'll engineer the tent.
          </h1>
          <p className="text-lg text-[#F5F0E8]/70 max-w-2xl leading-relaxed">
            These tents require a site assessment to ensure proper fit, anchoring, and layout. Tell us about your event and we'll build you a custom quote — usually within 24 hours.
          </p>
        </div>
      </section>

      {/* Tent Grid */}
      <section className="py-20 md:py-28 bg-[#FDFBF7]">
        <div className="container">
          <div className="w-[1px] h-8 bg-[#C4A882] mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LARGE_TENTS.map((tent) => (
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
                  <div className="mb-3">
                    <h3 className="font-serif text-xl font-bold text-[#1a1a1a]">{tent.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-sm text-[#C4A882] font-medium uppercase tracking-wider">{tent.size}</span>
                      <span className="text-xs text-[#2D2D2D]/50">•</span>
                      <span className="text-sm text-[#2D2D2D]/70">{tent.capacity}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#2D2D2D]/70 mb-6">{tent.description}</p>
                  <Button
                    onClick={() => openQuoteForm(tent.id)}
                    className="w-full bg-[#C4A882] text-[#1a1a1a] hover:bg-[#b89970] active:scale-[0.97] transition-all duration-160 uppercase tracking-wider text-sm font-medium py-3"
                  >
                    Request a Quote
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#2D2D2D]/70 mb-4">Not sure what size you need? We can help.</p>
            <Button
              onClick={() => openQuoteForm()}
              className="bg-[#1a1a1a] text-[#F5F0E8] hover:bg-[#2D2D2D] active:scale-[0.97] transition-all uppercase tracking-wider text-sm font-medium px-8 py-3"
            >
              Get a Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setShowQuoteForm(false)}
              className="absolute top-4 right-4 p-2 text-[#2D2D2D] hover:text-[#1a1a1a]"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-bold mb-2">Quote Request Received</h3>
                  <p className="text-[#2D2D2D]/70 mb-6">
                    We'll review your event details and get back to you within 24 hours with a custom quote.
                  </p>
                  <Button
                    onClick={() => setShowQuoteForm(false)}
                    className="bg-[#1a1a1a] text-[#F5F0E8] hover:bg-[#2D2D2D]"
                  >
                    Done
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#C4A882] font-medium">Request a Quote</span>
                    <h3 className="font-serif text-2xl font-bold mt-1">Tell Us About Your Event</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="quote-name" className="text-xs uppercase tracking-wider text-[#2D2D2D]/70">Full Name</Label>
                        <Input id="quote-name" name="name" required className="mt-1 border-[#C4A882]/30 focus:border-[#C4A882]" />
                      </div>
                      <div>
                        <Label htmlFor="quote-phone" className="text-xs uppercase tracking-wider text-[#2D2D2D]/70">Phone</Label>
                        <Input id="quote-phone" name="phone" type="tel" required className="mt-1 border-[#C4A882]/30 focus:border-[#C4A882]" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="quote-email" className="text-xs uppercase tracking-wider text-[#2D2D2D]/70">Email</Label>
                      <Input id="quote-email" name="email" type="email" required className="mt-1 border-[#C4A882]/30 focus:border-[#C4A882]" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="quote-date" className="text-xs uppercase tracking-wider text-[#2D2D2D]/70">Event Date</Label>
                        <Input id="quote-date" name="date" type="date" required className="mt-1 border-[#C4A882]/30 focus:border-[#C4A882]" />
                      </div>
                      <div>
                        <Label htmlFor="quote-guests" className="text-xs uppercase tracking-wider text-[#2D2D2D]/70">Guest Count</Label>
                        <Input id="quote-guests" name="guests" type="number" required placeholder="Approx." className="mt-1 border-[#C4A882]/30 focus:border-[#C4A882]" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="quote-address" className="text-xs uppercase tracking-wider text-[#2D2D2D]/70">Venue / Delivery Address</Label>
                      <Input id="quote-address" name="address" required placeholder="Street address, city, zip" className="mt-1 border-[#C4A882]/30 focus:border-[#C4A882]" />
                    </div>
                    <div>
                      <Label className="text-xs uppercase tracking-wider text-[#2D2D2D]/70">Tent Type of Interest</Label>
                      <Select value={selectedTent} onValueChange={setSelectedTent}>
                        <SelectTrigger className="mt-1 border-[#C4A882]/30 focus:border-[#C4A882]">
                          <SelectValue placeholder="Select a tent (or unsure)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="unsure">Not sure — help me decide</SelectItem>
                          {LARGE_TENTS.map((t) => (
                            <SelectItem key={t.id} value={t.id}>{t.name} — {t.size}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs uppercase tracking-wider text-[#2D2D2D]/70">Surface Type</Label>
                      <Select value={surfaceType} onValueChange={setSurfaceType}>
                        <SelectTrigger className="mt-1 border-[#C4A882]/30 focus:border-[#C4A882]">
                          <SelectValue placeholder="What's the ground like?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="grass">Grass / Lawn</SelectItem>
                          <SelectItem value="concrete">Concrete / Paved</SelectItem>
                          <SelectItem value="gravel">Gravel</SelectItem>
                          <SelectItem value="mixed">Mixed / Not sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="quote-details" className="text-xs uppercase tracking-wider text-[#2D2D2D]/70">Additional Details (optional)</Label>
                      <Textarea id="quote-details" name="details" rows={3} placeholder="Anything else we should know — layout preferences, power needs, etc." className="mt-1 border-[#C4A882]/30 focus:border-[#C4A882]" />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#C4A882] text-[#1a1a1a] hover:bg-[#b89970] active:scale-[0.97] transition-all duration-160 uppercase tracking-wider text-sm font-medium py-3 mt-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin inline" /> Submitting...</> : "Submit Quote Request"}
                    </Button>
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
