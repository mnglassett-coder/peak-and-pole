/**
 * FAQ Page — Peak & Pole Tent Co.
 * Design: Structural Elegance
 * Accordion-style FAQ with placeholder answers flagged for owner
 */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* TODO: All FAQ answers below are PLACEHOLDER copy. Owner must provide real policy answers before launch. */
const FAQS = [
  {
    question: "What happens if it rains on my event day?",
    answer:
      "[PLACEHOLDER — Owner: describe your rain/weather policy here. Do you set up rain gutters? Do you offer sidewalls? Is there a cancellation/reschedule policy for severe weather?]",
  },
  {
    question: "What areas do you deliver to?",
    answer:
      "We serve the entire Louisiana Northshore including Covington, Mandeville, Madisonville, Hammond, and Ponchatoula. Delivery, setup, and teardown are included in our pricing for these areas. [PLACEHOLDER — Owner: confirm exact radius and any additional delivery fees for locations outside core area.]",
  },
  {
    question: "How does setup and teardown work?",
    answer:
      "[PLACEHOLDER — Owner: describe your setup/teardown process. How early do you arrive? How long does setup take? When do you pick up? Do you need access the day before?]",
  },
  {
    question: "What's your deposit and payment policy?",
    answer:
      "[PLACEHOLDER — Owner: describe deposit amount, payment methods accepted, refund policy, and when final payment is due.]",
  },
  {
    question: "Do I need a permit for a tent on my property?",
    answer:
      "[PLACEHOLDER — Owner: provide guidance on local permit requirements. Do you handle permits or does the customer? Any size thresholds that trigger permit needs?]",
  },
  {
    question: "What surface types can you set up on?",
    answer:
      "We can install tents on grass, concrete, gravel, and most other surfaces. Different surfaces require different anchoring methods — we'll assess this during the site survey for large tents. [PLACEHOLDER — Owner: add any surface limitations or additional costs.]",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "[PLACEHOLDER — Owner: recommend booking timeline. How far out do weekends fill up? Is there a minimum lead time?]",
  },
  {
    question: "Do you offer sidewalls, lighting, or other accessories?",
    answer:
      "[PLACEHOLDER — Owner: list available add-ons — sidewalls, lighting, flooring, fans/heaters, etc. Include pricing if applicable.]",
  },
];

export default function FAQ() {
  return (
    <main className="pt-20 md:pt-24">
      {/* Page Header */}
      <section className="bg-[#1a1a1a] text-[#F5F0E8] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C4A882]/[0.04] origin-top-right skew-x-[-12deg]" />
        <div className="container">
          <div className="w-10 h-[2px] bg-[#C4A882] mb-5 origin-left rotate-[-6deg]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#C4A882] font-semibold">Before You Book</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-4">
            The stuff everyone asks
          </h1>
          <p className="text-lg text-[#F5F0E8]/70 max-w-2xl leading-relaxed">
            Everything you need to know before locking in your date. If your question isn't here, just call — we pick up.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 md:py-28 bg-[#FDFBF7]">
        <div className="container max-w-3xl relative">
          <div className="w-[1px] h-8 bg-[#C4A882] mx-auto mb-8" />
          <Accordion type="single" collapsible className="space-y-2">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-[#F5F0E8] bg-white px-6 data-[state=open]:border-[#C4A882]/40"
              >
                <AccordionTrigger className="text-left font-serif text-lg font-semibold text-[#1a1a1a] hover:text-[#C4A882] py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#2D2D2D]/80 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 bg-[#F5F0E8]">
            <h3 className="font-serif text-xl font-bold mb-2">Still have questions?</h3>
            <p className="text-[#2D2D2D]/70 mb-4">We're happy to help. Give us a call or drop us a line.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* TODO: Replace with real phone/email before launch */}
              <a href="tel:+19853172861" className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-[#F5F0E8] px-6 py-3 text-sm uppercase tracking-wider font-medium hover:bg-[#2D2D2D] transition-colors">
                Call Us
              </a>
              <a href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-[#1a1a1a] text-[#1a1a1a] px-6 py-3 text-sm uppercase tracking-wider font-medium hover:bg-[#1a1a1a] hover:text-[#F5F0E8] transition-colors">
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
