import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import { serviceDetails } from "@/lib/services";

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center bg-muted rounded-2xl p-12 max-w-md mx-4">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-heading font-bold mb-2">Booking Received!</h2>
          <p className="text-muted-foreground">We'll contact you within 24 hours to confirm your free visit.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">Book a Free Visit</h1>
            <p className="text-muted-foreground text-lg">Fill out the form and our team will schedule your free inspection.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-2xl">
          <AnimatedSection>
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-muted rounded-2xl p-8 md:p-10 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
                  <Input placeholder="Your name" required className="bg-background" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Phone *</label>
                  <Input placeholder="05X XXX XXXX" required type="tel" className="bg-background" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Email</label>
                <Input placeholder="your@email.com" type="email" className="bg-background" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Service Type *</label>
                <select required className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <option value="">Select a service</option>
                  {serviceDetails.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Address *</label>
                <Input placeholder="Your address" required className="bg-background" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Preferred Date</label>
                  <Input type="date" className="bg-background" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Preferred Time</label>
                  <Input type="time" className="bg-background" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Message</label>
                <Textarea placeholder="Any additional details..." rows={4} className="bg-background" />
              </div>
              <button type="submit" className="cta-teal px-8 py-3 text-sm w-full flex items-center justify-center gap-2">
                Submit Booking <Send className="w-4 h-4" />
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Booking;
