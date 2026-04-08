import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { Users, Building, Home, Utensils, HeartPulse, GraduationCap, Hotel, ShoppingBag, Factory, ShieldCheck, Star } from "lucide-react";

const clientTypes = [
  { icon: Home, label: "Villas & Apartments", desc: "Premium cleaning and sanitization for residential properties across KSA." },
  { icon: Building, label: "Corporate Offices", desc: "Professional maintenance for high-traffic business environments." },
  { icon: Utensils, label: "Restaurants & Cafes", desc: "Deep kitchen degreasing and hygiene compliance services." },
  { icon: HeartPulse, label: "Hospitals & Clinics", desc: "Specialized medical-grade sanitization and disinfection." },
  { icon: GraduationCap, label: "Schools & Universities", desc: "Creating safe and clean learning environments for students." },
  { icon: Hotel, label: "Hotels & Resorts", desc: "Upholstery cleaning and facility maintenance for hospitality." },
  { icon: ShoppingBag, label: "Retail & Showrooms", desc: "Maintaining spotless fronts and interiors for retail success." },
  { icon: Factory, label: "Industrial & Warehouses", desc: "Specialized cleaning for large-scale storage and production units." },
];

const clientLogos = [
  "https://cleanproksa.com/wp-content/uploads/2025/02/Image-1.png",
  "https://cleanproksa.com/wp-content/uploads/2025/02/10-01-1-1.png",
  "https://cleanproksa.com/wp-content/uploads/2025/02/19-01-1-1.png",
  "https://cleanproksa.com/wp-content/uploads/2025/02/8-01-1-2.png",
  "https://cleanproksa.com/wp-content/uploads/2025/02/1-01-1-1.png",
  "https://cleanproksa.com/wp-content/uploads/2025/02/3-01-1-1.png",
  "https://cleanproksa.com/wp-content/uploads/2025/02/2-01-1-1.png",
  "https://cleanproksa.com/wp-content/uploads/2025/01/16-01-150x150-1.jpg",
  "https://cleanproksa.com/wp-content/uploads/2025/01/4-01-150x150-1.jpg",
  "https://cleanproksa.com/wp-content/uploads/2025/01/5-01-150x150-1.jpg",
  "https://cleanproksa.com/wp-content/uploads/2025/01/6-01-150x150-1.jpg",
  "https://cleanproksa.com/wp-content/uploads/2025/01/7-01-150x150-1.jpg",
  "https://cleanproksa.com/wp-content/uploads/2025/01/9-01-150x150-1.jpg",
  "https://cleanproksa.com/wp-content/uploads/2025/01/11-01-150x150-1.jpg",
  "https://cleanproksa.com/wp-content/uploads/2025/01/12-01-150x150-1.jpg",
  "https://cleanproksa.com/wp-content/uploads/2025/01/13-01-150x150-1.jpg",
  "https://cleanproksa.com/wp-content/uploads/2025/01/14-01-150x150-1.jpg",
  "https://cleanproksa.com/wp-content/uploads/2025/01/18-01-150x150-1.jpg",
  "https://cleanproksa.com/wp-content/uploads/2025/01/20-01-150x150-1.jpg",
  "https://cleanproksa.com/wp-content/uploads/2025/01/21-01-150x150-1.jpg",
  "https://cleanproksa.com/wp-content/uploads/2025/01/22-01-150x150-1.jpg",
  "https://cleanproksa.com/wp-content/uploads/2025/01/23-01-150x150-1.jpg",
  "https://cleanproksa.com/wp-content/uploads/2025/01/24-01-150x150-1.jpg",
];

const Clients = () => (
  <div className="pt-32 md:pt-40 font-muli bg-white overflow-x-hidden">
    <SEO
      title="Our Clients | Trusted by Homes & Businesses Across Saudi Arabia"
      description="Lamiya Al Kahleej Company proudly serves residential and commercial clients across Riyadh, Jeddah, Dammam, and all of KSA."
    />

    <section className="relative py-24 md:py-40 bg-black overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-alfawad-primary/5 blur-[100px] rounded-full" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <span className="text-alfawad-primary font-black text-[12px] uppercase tracking-[0.5em] mb-6 block">Trusted Partners</span>
          <h1 className="text-[40px] md:text-[80px] font-black text-white leading-none uppercase tracking-tighter mb-8 italic">Our Clients</h1>
          <div className="w-24 h-2 bg-alfawad-primary mx-auto mb-10" />
          <p className="text-white/60 text-xl font-medium max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
            Trusted by Homes & Businesses Across Saudi Arabia.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-24">
            <h2 className="text-[36px] md:text-[55px] font-black text-black leading-tight uppercase tracking-tighter mb-8">
              Clients <span className="text-alfawad-primary">We Serve</span>
            </h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-3xl">
              AtLamiya Al Khaleej Al Ittehad  Company, our success is measured by customer satisfaction. We proudly serve a wide range of clients, including residential customers and leading commercial businesses across the Kingdom.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
          {clientTypes.map((type, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="bg-[#fcfcfc] border border-gray-100 p-12 h-full flex flex-col items-center text-center group hover:bg-black transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-20 h-20 bg-alfawad-primary/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-alfawad-primary transition-colors">
                  <type.icon className="w-10 h-10 text-alfawad-primary group-hover:text-black" />
                </div>
                <h4 className="text-xl font-black text-black uppercase tracking-tighter mb-6 group-hover:text-white transition-colors">{type.label}</h4>
                <div className="w-10 h-1 bg-gray-200 mb-6 group-hover:w-full group-hover:bg-alfawad-primary transition-all" />
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed group-hover:text-white/60 transition-colors">{type.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Client Logos Gallery */}
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatedSection>
          <div className="text-center mb-24">
            <span className="text-alfawad-primary font-black text-[12px] uppercase tracking-[0.4em] mb-4 block">Official Partners</span>
            <h2 className="text-[32px] md:text-[50px] font-black text-black uppercase tracking-tighter mb-8">Our Prestigious <span className="text-alfawad-primary">Clients</span></h2>
            <div className="w-20 h-1 bg-alfawad-primary mx-auto" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-10">
          {clientLogos.map((logo, i) => (
            <AnimatedSection key={i} delay={i * 0.02}>
              <div className="group bg-white p-8 border border-gray-50 flex items-center justify-center aspect-square transition-all duration-500 hover:shadow-2xl hover:border-alfawad-primary hover:-translate-y-1">
                <img
                  src={logo}
                  alt={`Client Logo ${i + 1}`}
                  className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32 bg-[#f8f9fa] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <AnimatedSection>
          <div className="bg-white p-12 md:p-24 shadow-2xl relative">
            <div className="absolute top-0 right-0 p-10 opacity-5 -mr-5 -mt-5">
              <ShieldCheck className="w-40 h-40" />
            </div>
            <Users className="w-16 h-16 text-alfawad-primary mx-auto mb-10" />
            <h3 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter mb-10 leading-tight italic">Building Long-Term Trust</h3>
            <p className="text-gray-500 text-xl font-medium leading-loose max-w-4xl mx-auto mb-12">
              Our long-term client relationships are built on trust, service quality, and on-time delivery. We believe in providing services that bring value, safety, and peace of mind to every property we maintain.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-alfawad-primary fill-alfawad-primary" />
                <span className="text-[12px] font-black uppercase tracking-widest text-black">Reliability</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-alfawad-primary fill-alfawad-primary" />
                <span className="text-[12px] font-black uppercase tracking-widest text-black">Service Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-alfawad-primary fill-alfawad-primary" />
                <span className="text-[12px] font-black uppercase tracking-widest text-black">On-Time Delivery</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Final CTA */}
    <section className="bg-alfawad-primary py-24 text-center">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-10">Join Our Professional Client Network</h2>
          <Link to="/booking" className="bg-black text-white px-12 py-5 font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all inline-block shadow-2xl">
            Get Your Customized Quote Today
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Clients;
