/**
 * Contact Page — Peak & Pole Tent Co.
 * Design: Structural Elegance
 * Phone, email, contact form, and service area callout
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitContact = trpc.forms.submitContact.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setIsSubmitting(false);
      toast.success("Message sent! We'll get back to you soon.");
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
    submitContact.mutate({
      name: form.get("name") as string,
      phone: (form.get("phone") as string) || undefined,
      email: form.get("email") as string,
      subject: form.get("subject") as string,
      message: form.get("message") as string,
    });
  };

  return (
    <main className="pt-20 md:pt-24">
      {/* Page Header */}
      <section className="bg-[#1a1a1a] text-[#F5F0E8] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C4A882]/[0.04] origin-top-right skew-x-[-12deg]" />
        <div className="container">
          <div className="w-10 h-[2px] bg-[#C4A882] mb-5 origin-left rotate-[-6deg]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#C4A882] font-semibold">Let's Talk</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-4">
            Tell us the date. We'll tell you what fits.
          </h1>
          <p className="text-lg text-[#F5F0E8]/70 max-w-2xl leading-relaxed">
            Call, email, or fill out the form. We respond fast — usually same day.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28 bg-[#FDFBF7]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="w-8 h-[2px] bg-[#C4A882] mb-4 origin-left rotate-[-6deg]" />
              <h2 className="font-serif text-2xl font-bold mb-6">Direct Line</h2>

              <div className="space-y-6">
                {/* TODO: Replace with real phone number before launch */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F5F0E8] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#C4A882]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#2D2D2D]/60 font-medium mb-1">Phone</h4>
                    <a href="tel:+19853172861" className="text-lg font-medium text-[#1a1a1a] hover:text-[#C4A882] transition-colors">
                      (985) 317-2861
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F5F0E8] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#C4A882]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#2D2D2D]/60 font-medium mb-1">Email</h4>
                    <a href="mailto:info@peakandpole.com" className="text-lg font-medium text-[#1a1a1a] hover:text-[#C4A882] transition-colors">
                      info@peakandpole.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F5F0E8] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#C4A882]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#2D2D2D]/60 font-medium mb-1">Service Area</h4>
                    <p className="text-[#2D2D2D]/80 leading-relaxed">
                      Covington, Mandeville, Madisonville, Hammond & Ponchatoula, Louisiana
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Area Map Callout */}
              <div className="mt-10 p-6 bg-[#F5F0E8] border-l-4 border-[#C4A882]">
                <h4 className="font-serif text-lg font-bold mb-2">Louisiana Northshore Coverage</h4>
                <p className="text-sm text-[#2D2D2D]/70 leading-relaxed">
                  We deliver, set up, and tear down across St. Tammany Parish and surrounding areas. Delivery is included in all pricing within our core service area.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-[#F5F0E8] p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="font-serif text-2xl font-bold mb-2">Message Sent</h3>
                    <p className="text-[#2D2D2D]/70 mb-6">
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => { setSubmitted(false); setIsSubmitting(false); }}
                      className="bg-[#1a1a1a] text-[#F5F0E8] hover:bg-[#2D2D2D]"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-serif text-2xl font-bold mb-6">Drop us a line</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="contact-name" className="text-xs uppercase tracking-wider text-[#2D2D2D]/70">Name</Label>
                          <Input id="contact-name" name="name" required className="mt-1 border-[#C4A882]/30 focus:border-[#C4A882]" />
                        </div>
                        <div>
                          <Label htmlFor="contact-phone" className="text-xs uppercase tracking-wider text-[#2D2D2D]/70">Phone</Label>
                          <Input id="contact-phone" name="phone" type="tel" className="mt-1 border-[#C4A882]/30 focus:border-[#C4A882]" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="contact-email" className="text-xs uppercase tracking-wider text-[#2D2D2D]/70">Email</Label>
                        <Input id="contact-email" name="email" type="email" required className="mt-1 border-[#C4A882]/30 focus:border-[#C4A882]" />
                      </div>
                      <div>
                        <Label htmlFor="contact-subject" className="text-xs uppercase tracking-wider text-[#2D2D2D]/70">Subject</Label>
                        <Input id="contact-subject" name="subject" required placeholder="What's this about?" className="mt-1 border-[#C4A882]/30 focus:border-[#C4A882]" />
                      </div>
                      <div>
                        <Label htmlFor="contact-message" className="text-xs uppercase tracking-wider text-[#2D2D2D]/70">Message</Label>
                        <Textarea id="contact-message" name="message" rows={5} required placeholder="Tell us what you need..." className="mt-1 border-[#C4A882]/30 focus:border-[#C4A882]" />
                      </div>
                     <Button
                       type="submit"
                       className="w-full bg-[#1a1a1a] text-[#F5F0E8] hover:bg-[#2D2D2D] active:scale-[0.97] transition-all duration-160 uppercase tracking-wider text-sm font-medium py-3"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin inline" /> Sending...</> : "Send Message"}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
