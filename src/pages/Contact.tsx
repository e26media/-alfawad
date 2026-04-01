import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "0501007079", href: "tel:0501007079" },
  { icon: Mail, label: "Email", value: "info@cleanproksa.com", href: "mailto:info@cleanproksa.com" },
  { icon: MapPin, label: "Address", value: "8562 Al Tasni, An Nahdah District, Near Hira Street Jeddah 23523, Saudi Arabia" },
  { icon: Clock, label: "Working Hours", value: "Sun–Thu: 8AM–6PM" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-20">
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground text-lg">Have a question or need a quote? We'd love to hear from you.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((info, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-muted rounded-xl p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full teal-bg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{info.label}</div>
                      {info.href ? (
                        <a href={info.href} className="font-medium text-sm hover:text-primary transition-colors">{info.value}</a>
                      ) : (
                        <div className="font-medium text-sm">{info.value}</div>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}

              <AnimatedSection delay={0.4}>
                <div className="rounded-xl overflow-hidden mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.8!2d39.19!3d21.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMyJzI0LjAiTiAzOcKwMTEnMjQuMCJF!5e0!3m2!1sen!2ssa!4v1"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Clean Pro KSA Location"
                  />
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-3">
              <AnimatedSection>
                {submitted ? (
                  <div className="bg-muted rounded-2xl p-12 text-center">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-heading font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-muted rounded-2xl p-8 md:p-10 space-y-5">
                    <h3 className="text-xl font-heading font-bold mb-2">Send us a message</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Name *</label>
                        <Input placeholder="Your name" required className="bg-background" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Phone</label>
                        <Input placeholder="05X XXX XXXX" type="tel" className="bg-background" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email *</label>
                      <Input placeholder="your@email.com" type="email" required className="bg-background" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Subject</label>
                      <Input placeholder="How can we help?" className="bg-background" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Message *</label>
                      <Textarea placeholder="Your message..." rows={5} required className="bg-background" />
                    </div>
                    <button type="submit" className="cta-teal px-8 py-3 text-sm w-full flex items-center justify-center gap-2">
                      Send Message <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
