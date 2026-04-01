import { motion } from "framer-motion";
import { Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const reviews = [
  { name: "Mohammed Sabra", text: "I used clean pro for the first time and I would used their service again. The team was quick in responding, punctual and professional. The quality of work they did was super and they made sure the place was super clean when they finished the job." },
  { name: "Hoda Zah", text: "I will definitely be requesting my annual ac duct cleaning from Clean Pro! They explained each step, showed before and after pictures and left the place spotless. I highly recommend this service especially for new homes!" },
  { name: "Muhammad Faisal Hussain", text: "Had my sofa and curtains deep cleaned and disinfected from Clean Pro. Professional staff and the service was top quality. Will definitely recommend others to take their services." },
  { name: "Sara Ahmed", text: "Excellent deep cleaning service. The team was very thorough and left our villa spotless. Will definitely use again!" },
  { name: "Khalid Omar", text: "Best pest control service in Jeddah. Professional, reliable and effective. Highly recommended for any pest issues." },
  { name: "Fatima Al-Harbi", text: "Amazing water tank cleaning service. They were very professional and provided a full sanitization certificate." },
];

const Clients = () => (
  <div className="pt-20">
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">Our Clients</h1>
          <p className="text-muted-foreground text-lg">See what our valued clients have to say about our services.</p>
        </motion.div>
      </div>
    </section>

    {/* Client Logos */}
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-2xl font-heading font-bold mb-8 text-center">Brands We Work With</h2>
        </AnimatedSection>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {Array.from({ length: 18 }).map((_, i) => (
            <AnimatedSection key={i} delay={i * 0.03}>
              <div className="bg-muted rounded-xl p-4 flex items-center justify-center h-20 hover:shadow-md transition-shadow">
                <span className="text-xs font-heading font-semibold text-muted-foreground">Brand {i + 1}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Reviews */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-2xl font-heading font-bold mb-10 text-center">What Our Clients Say</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="bg-background rounded-2xl p-6 h-full shadow-sm">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground mb-4">"{r.text}"</p>
                <p className="font-heading font-bold text-sm">{r.name}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Clients;
