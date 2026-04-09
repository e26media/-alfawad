import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar, Clock, MapPin, CheckCircle, ArrowRight, ShieldCheck, Zap, Star, Search,
  BadgeCheck, Fan, Bug, Sofa, Droplets, Sparkles
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const inspectionPoints = [
  { icon: Search, label: "Property evaluation", desc: "Size and condition assessment for accurate planning." },
  { icon: Fan, label: "AC System Inspection", desc: "Performance check for all heating and cooling units." },
  { icon: Bug, label: "Pest Activity Check", desc: "Detective work on existing pest problems." },
  { icon: Sofa, label: "Furniture Condition", desc: "Fabric and leather analysis for cleaning suitability." },
  { icon: Droplets, label: "Water Tank Status", desc: "Hygiene check for sediments and algae." },
  { icon: Sparkles, icon_comp: <BadgeCheck className="w-6 h-6" />, label: "Mold & Moisture", desc: "Detection of health hazards and wall damage zones." }
];

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-32 md:pt-40 font-muli bg-white overflow-x-hidden">
      <SEO
        title="Book a Free Visit | Free Inspection & Quote in Saudi Arabia"
        description="Schedule your free property inspection and get an accurate, customized quote for cleaning, AC, and pest control services across KSA."
      />

      {/* Header */}
      <section className="relative py-24 md:py-40 bg-black overflow-hidden text-center">
        <div className="absolute inset-0 bg-alfawad-primary/5 opacity-30" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-alfawad-primary font-black text-[12px] uppercase tracking-[0.5em] mb-6 block">Free Inspection & Quote</span>
            <h1 className="text-[40px] md:text-[80px] font-black text-white leading-tight uppercase tracking-tighter mb-8 italic">Book a Free Visit</h1>
            <div className="w-24 h-2 bg-alfawad-primary mx-auto mb-10" />
            <p className="text-white/60 text-xl font-medium max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
              Expert solutions for your property - no hidden costs, accurate pricing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 md:py-32 bg-[#f8f9fa] relative z-20 -mt-10 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <span className="text-alfawad-primary font-black text-[12px] uppercase tracking-[0.4em] mb-6 block">Why Book Today?</span>
              <h2 className="text-[36px] md:text-[50px] font-black text-black leading-tight uppercase tracking-tighter mb-8">Professional <br /> <span className="text-alfawad-primary">Inspection</span> Program</h2>
              <p className="text-gray-500 font-medium text-lg leading-relaxed mb-12">
                At Lamiya Al Khaleej Al Ittehad  Company, we understand that every property is different. That is why we offer a Free Visit & Inspection Service for customers who want accurate pricing and customized service plans.
              </p>
              <div className="space-y-6">
                {[
                  "No hidden costs - what we quote is what you pay.",
                  "Accurate pricing based on actual property size.",
                  "Expert suggestions from certified technicians.",
                  "Custom packages tailored to your specific needs.",
                  "Helps you choose the most effective service type."
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-white shadow-xl flex items-center justify-center flex-shrink-0 group-hover:bg-alfawad-primary transition-all">
                      <Star className="w-4 h-4 text-alfawad-primary group-hover:text-black fill-alfawad-primary group-hover:fill-black" />
                    </div>
                    <span className="text-black font-black uppercase text-xs tracking-widest group-hover:translate-x-2 transition-all">{benefit}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 gap-4">
              {inspectionPoints.map((point, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-white p-8 border border-gray-100 flex flex-col h-full hover:border-alfawad-primary transition-all group shadow-xl">
                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6 group-hover:bg-alfawad-primary transition-colors">
                      <point.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xs font-black text-black uppercase tracking-widest mb-4 group-hover:text-alfawad-primary transition-colors">{point.label}</h4>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed mb-4 group-hover:text-black/60 transition-colors">{point.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="bg-black text-white p-12 md:p-16 border-t-8 border-alfawad-primary relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-5 -mr-10 -mt-10 group-hover:scale-150 transition-all duration-700">
                    <Calendar className="w-40 h-40 text-alfawad-primary" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 italic">Let Our Professionals Handle It</h3>
                  <p className="text-white/60 font-medium leading-relaxed mb-12">
                    "Book your free visit today and experience the professional difference of Lamiya Al Khaleej Al Ittehad  Company facility solutions."
                  </p>
                  <div className="space-y-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-alfawad-primary mb-2">Service Hours</span>
                      <span className="text-sm font-black uppercase tracking-widest leading-relaxed">Sat - Thu: 08:00 AM - 10:00 PM <br /> Fri: Based on Appointment</span>
                    </div>
                    <div className="flex flex-col gap-8">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-alfawad-primary leading-none">Support Lines</span>
                      
                      <div className="flex flex-col gap-6">
                        <div className="flex flex-col">
                          <span className="text-[18px] font-black uppercase tracking-tighter text-white leading-tight">Ashraf Al badan</span>
                          <a href="tel:+966507077611" className="text-[12px] font-bold uppercase tracking-widest text-alfawad-primary/60 hover:text-alfawad-primary transition-colors">+966 50 707 7611</a>
                        </div>

                        <div className="flex flex-col">
                          <span className="text-[18px] font-black uppercase tracking-tighter text-white leading-tight">Ahamed suhail</span>
                          <div className="flex flex-col gap-1">
                            <a href="tel:+966510304627" className="text-[12px] font-bold uppercase tracking-widest text-alfawad-primary/60 hover:text-alfawad-primary transition-colors">+966 51 030 4627</a>
                            <a href="tel:+966566567518" className="text-[12px] font-bold uppercase tracking-widest text-alfawad-primary/60 hover:text-alfawad-primary transition-colors">+966 56 656 7518</a>
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <span className="text-[18px] font-black uppercase tracking-tighter text-white leading-tight">Safwan</span>
                          <a href="tel:+966583769845" className="text-[12px] font-bold uppercase tracking-widest text-alfawad-primary/60 hover:text-alfawad-primary transition-colors">+966 58 376 9845</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-3">
              <AnimatedSection delay={0.2}>
                {submitted ? (
                  <div className="bg-[#f8f9fa] p-16 md:p-24 text-center border-t-8 border-alfawad-primary shadow-2xl">
                    <div className="w-24 h-24 bg-alfawad-primary text-black flex items-center justify-center rounded-none mx-auto mb-10 transform scale-110 shadow-2xl">
                      <ShieldCheck className="w-12 h-12" />
                    </div>
                    <h3 className="text-4xl font-black text-black mb-6 uppercase tracking-tighter italic">Booking Successful!</h3>
                    <p className="text-gray-500 text-lg font-bold uppercase tracking-[0.2em] mb-12">Our coordinator will contact you shortly to confirm the inspection visit.</p>
                    <button onClick={() => setSubmitted(false)} className="bg-black text-white px-12 py-5 font-black uppercase tracking-widest text-sm hover:bg-alfawad-primary transition-all">Make Another Booking</button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-[#fcfcfc] p-10 md:p-16 space-y-10 shadow-2xl border-t-8 border-black">
                    <h3 className="text-3xl font-black text-black mb-8 uppercase tracking-tighter">Schedule Your Free Visit</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name *</label>
                        <Input placeholder="YOUR NAME" required className="bg-white rounded-none border-gray-200 focus:border-alfawad-primary h-14 font-black text-xs placeholder:text-gray-300" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Phone Number *</label>
                        <Input placeholder=" +966 XXXXXXXX" type="tel" required className="bg-white rounded-none border-gray-200 focus:border-alfawad-primary h-14 font-black text-xs placeholder:text-gray-300" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">City *</label>
                        <Select required>
                          <SelectTrigger className="bg-white rounded-none border-gray-200 focus:border-alfawad-primary h-14 font-black text-xs">
                            <SelectValue placeholder="SELECT CITY" />
                          </SelectTrigger>
                          <SelectContent>
                            {["Riyadh", "Jeddah", "Dammam", "Al Khobar", "Dhahran", "Jubail", "Taif", "Mecca", "Medina"].map(city => (
                              <SelectItem key={city} value={city.toLowerCase()}>{city.toUpperCase()}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Service Category *</label>
                        <Select required>
                          <SelectTrigger className="bg-white rounded-none border-gray-200 focus:border-alfawad-primary h-14 font-black text-xs">
                            <SelectValue placeholder="SELECT SERVICE" />
                          </SelectTrigger>
                          <SelectContent>
                            {["Deep Cleaning", "AC Cleaning", "Pest Control", "Upholstery Cleaning", "Sanitization", "Full Package"].map(service => (
                              <SelectItem key={service} value={service.toLowerCase()}>{service.toUpperCase()}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Property Details / Message</label>
                      <Textarea placeholder="PLEASE DESCRIBE YOUR PROPERTY OR SPECIFIC NEEDS..." rows={5} className="bg-white rounded-none border-gray-200 focus:border-alfawad-primary font-black text-xs py-4 placeholder:text-gray-300" />
                    </div>

                    <button type="submit" className="bg-black text-white px-10 py-6 text-sm font-black uppercase tracking-widest w-full hover:bg-alfawad-primary transition-all flex items-center justify-center gap-3 shadow-2xl group">
                      Request Inspection Visit <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
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

export default Booking;
