import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Smartphone, Globe, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const contactInfo = [
  { 
    icon: Smartphone, 
    label: "Direct Lines", 
    isMulti: true,
    contacts: [
      { name: "Ashraf Al badan", numbers: ["+966 50 707 7611"] },
      { name: "Ahamed suhail", numbers: ["+966 51 030 4627", "+966 56 656 7518"] },
      { name: "Safwan", numbers: ["+966 58 376 9845"] }
    ]
  },
  { 
    icon: Mail, 
    label: "Email Addresses", 
    isMulti: true,
    contacts: [
      {  numbers: ["info@lamiyaalkhaleej.com"] },
      {numbers: ["ashrafalbadan@lamiyaalkhaleej.com"] },
      {  numbers: ["ahamedsuhail@lamiyaalkhaleej.com"] }
    ]
  },
  { icon: Globe, label: "Head Office", value: "   Al Jubail, KSA" },
  { icon: Clock, label: "Business Hours", value: "Sat–Thu: 8:00 AM – 10:00 PM, Fri: Appointment Based" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-32 md:pt-40 font-muli bg-white overflow-x-hidden">
      <SEO
        title="Contact Us | Lamiya Al Khaleej Al Ittehad Company - Professional Support in KSA"
        description="Get in touch with Lamiya Al Khaleej Al Ittehad Company for fast booking and professional support for cleaning, AC, and pest control services across Saudi Arabia."
      />

      {/* Header */}
      <section className="relative py-24 md:py-40 bg-black overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-alfawad-primary opacity-10 rounded-full blur-[100px] -mr-[250px] -mt-[250px]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <span className="text-alfawad-primary font-black text-[12px] uppercase tracking-[0.4em] mb-6 block">Get In Touch</span>
            <h1 className="text-[40px] md:text-[80px] font-black text-white leading-none uppercase tracking-tighter mb-8 italic">Contact Us</h1>
            <div className="w-24 h-2 bg-alfawad-primary mx-auto mb-10" />
            <p className="text-white/60 text-xl font-medium max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
              Book professional services today and let our experts handle the rest.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-20">
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection>
                <h3 className="text-3xl font-black text-black uppercase tracking-tighter mb-10 italic">Office Details</h3>
              </AnimatedSection>

              {contactInfo.map((info, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-[#fcfcfc] p-10 flex items-start gap-8 border-l-8 border-transparent hover:border-alfawad-primary transition-all duration-500 hover:shadow-2xl group">
                    <div className="w-14 h-14 bg-black text-white flex items-center justify-center flex-shrink-0 group-hover:bg-alfawad-primary transition-colors">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[11px] font-black text-gray-400 uppercase tracking-[0.4em] mb-3">{info.label}</div>
                      {info.isMulti ? (
                        <div className="flex flex-col gap-6 mt-4">
                          {info.contacts?.map((c, idx) => (
                            <div key={idx} className="flex flex-col">
                                <span className="text-[16px] font-black uppercase tracking-tighter text-black leading-tight">{c.name}</span>
                                <div className="flex flex-col gap-0.5">
                                  {c.numbers.map(n => (
                                    <a key={n} href={n.includes('@') ? `mailto:${n}` : `tel:${n.replace(/\s/g, '')}`} className="text-[11px] font-black uppercase tracking-widest text-alfawad-primary hover:text-black transition-colors">{n}</a>
                                  ))}
                                </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                         (info as any).href ? (
                          <a href={(info as any).href} className="text-lg font-black text-black uppercase tracking-tighter hover:text-alfawad-primary transition-colors">{(info as any).value}</a>
                        ) : (
                          <div className="text-lg font-black text-black uppercase tracking-tighter leading-tight">{(info as any).value}</div>
                        )
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}

              {/* <AnimatedSection delay={0.4}>
                <div className="bg-black text-white p-10 mt-12 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-150 transition-all duration-700">
                    <MapPin className="w-20 h-20 text-alfawad-primary" />
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tighter mb-6 italic">Visit Our Headquarters</h4>
                  <p className="text-white/60 font-medium uppercase tracking-widest text-[11px] leading-loose mb-8">
                    8562 Al Tasni, An Nahdah District, <br /> Jeddah 23523, Kingdom of Saudi Arabia.
                  </p>
                  <a href="#" target="_blank" className="text-alfawad-primary font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:text-white transition-colors group/link">
                    Get Directions <ArrowRight className="w-4 h-4 translate-x-0 group-hover/link:translate-x-2 transition-transform" />
                  </a>
                </div>
              </AnimatedSection> */}
            </div>

            <div className="lg:col-span-3">
              <AnimatedSection>
                {submitted ? (
                  <div className="bg-[#f8f9fa] p-16 md:p-32 text-center border-t-[12px] border-alfawad-primary shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-5 -mr-5 -mt-5">
                      <CheckCircle className="w-40 h-40" />
                    </div>
                    <CheckCircle className="w-24 h-24 text-alfawad-primary mx-auto mb-10 scale-125" />
                    <h3 className="text-4xl font-black text-black mb-6 uppercase tracking-tighter italic">Message Transmitted</h3>
                    <p className="text-gray-500 text-lg font-bold uppercase tracking-[0.2em] max-w-sm mx-auto mb-12">Thank you! We will get back to you within 24 hours with a solution.</p>
                    <button onClick={() => setSubmitted(false)} className="bg-black text-white px-12 py-5 font-black uppercase tracking-widest text-sm hover:shadow-2xl transition-all">Back to Contact Form</button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-[#fcfcfc] p-10 md:p-16 space-y-10 shadow-[40px_40px_0px_0px_#f8f9fa] border-t-8 border-black">
                    <h3 className="text-3xl font-black text-black mb-4 uppercase tracking-tighter italic">Send Pro Inquiry</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-400">Your Full Name *</label>
                        <Input placeholder="E.G. ABDULLAH SAUD" required className="bg-white rounded-none border-gray-200 focus:border-alfawad-primary h-14 font-black text-xs uppercase" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-400">Mobile Number *</label>
                        <Input placeholder=" +966 XXXXXXXX" type="tel" required className="bg-white rounded-none border-gray-200 focus:border-alfawad-primary h-14 font-black text-xs" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-400">Email Address</label>
                        <Input placeholder="YOUR@EMAIL.COM" type="email" className="bg-white rounded-none border-gray-200 focus:border-alfawad-primary h-14 font-black text-xs" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-400">Service Required</label>
                        <Input placeholder="E.G. DEEP CLEANING" className="bg-white rounded-none border-gray-200 focus:border-alfawad-primary h-14 font-black text-xs uppercase" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-400">Message / Requirements *</label>
                      <Textarea placeholder="DESCRIBE YOUR REQUEST..." rows={6} required className="bg-white rounded-none border-gray-200 focus:border-alfawad-primary font-black text-xs py-4 uppercase" />
                    </div>
                    <button type="submit" className="bg-black text-white px-10 py-6 text-sm font-black uppercase tracking-widest w-full hover:bg-alfawad-primary transition-all flex items-center justify-center gap-4 shadow-2xl group">
                      Send Secure Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
