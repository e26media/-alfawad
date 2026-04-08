import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Clock, BadgeCheck, MapPin } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { heroServices, popularServices } from "@/lib/services";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import HeroToggleBtn from "@/components/ui/HeroToggleBtn";

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

const testimonials = [
  {
    name: "Mohammed Sabra", text: "I usedLamiya Al Khaleej Al Ittehad  for the first time and I would used their service again. The team was quick in responding, punctual and professional. The quality of work they did was super and they made sure the place was super clean when they finished the job.",
  },
  {
    name: "Hoda Zah", text: "I will definitely be requesting my annual ac duct cleaning fromLamiya Al Khaleej Al Ittehad ! They explained each step, showed before and after pictures and left the place spotless. I highly recommend this service especially for new homes!",
  },
  {
    name: "Muhammad Faisal Hussain", text: "Had my sofa and curtains deep cleaned and disinfected fromLamiya Al Khaleej Al Ittehad . Professional staff and the service was top quality. Will definitely recommend others to take their services.",
  },
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="flex flex-col min-h-screen font-muli bg-white overflow-x-hidden">
      <SEO
        title="Lamiya Al Kahleej Company | Cleaning, AC & Pest Control Services in KSA"
        description="Lamiya Al Kahleej Company provides deep cleaning, sanitization, AC cleaning, duct cleaning, pest control, and water tank disinfection services across Saudi Arabia."
      />
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[85vh] flex items-center overflow-hidden mt-5">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-110"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="container mx-auto px-4 pt-32 md:pt-48 pb-[13rem] relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 bg-alfawad-primary/20 text-alfawad-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6 border-l-4 border-alfawad-primary">
                Trusted Excellence Across KSA
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-[0.95] mb-8 text-white uppercase tracking-tighter drop-shadow-2xl">
                Lamiya Al Khaleej Al Ittehad  <br />
                <span className="text-alfawad-primary opacity-90">Professional Care.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl font-medium leading-relaxed">
                Your trusted partner for complete cleaning, sanitization, AC services, pest control, and facility maintenance solutions across the Kingdom of Saudi Arabia.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link
                  to="/booking"
                  className="bg-alfawad-primary hover:bg-white text-white hover:text-black px-12 py-5 font-black uppercase tracking-widest inline-flex items-center justify-center gap-3 transition-all text-sm shadow-[0_20px_50px_rgba(182,138,65,0.3)] hover:-translate-y-1"
                >
                  Book Free Visit <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white/10 backdrop-blur-md hover:bg-white text-white hover:text-black border border-white/20 px-12 py-5 font-black uppercase tracking-widest inline-flex items-center justify-center transition-all text-sm hover:-translate-y-1"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
             <div className="absolute top-20 sm:top-24  left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <HeroToggleBtn />
        </div>
          </div>
        </div>

        {/* Floating Icons for Desktop */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/50 to-transparent pb-10">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto gap-8 no-scrollbar pb-4 md:justify-center">
              {heroServices.slice(0, 7).map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="pt-12"
                >
                  <Link to={service.path} className="flex flex-col items-center group min-w-[100px]">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:bg-alfawad-primary group-hover:border-alfawad-primary transition-all duration-500 mb-3 group-hover:-translate-y-2 group-hover:shadow-[0_15px_30px_rgba(182,138,65,0.4)]">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-[10px] font-black text-white/70 uppercase tracking-widest text-center leading-tight group-hover:text-alfawad-primary transition-colors whitespace-pre-line">
                      {service.title}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="bg-black py-8 border-y border-white/5">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-3 text-white">
            <ShieldCheck className="w-6 h-6 text-alfawad-primary" />
            <span className="text-[12px] font-black uppercase tracking-widest">Certified Technicians</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <Clock className="w-6 h-6 text-alfawad-primary" />
            <span className="text-[12px] font-black uppercase tracking-widest">On-Time Service</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <BadgeCheck className="w-6 h-6 text-alfawad-primary" />
            <span className="text-[12px] font-black uppercase tracking-widest">Guaranteed Quality</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <MapPin className="w-6 h-6 text-alfawad-primary" />
            <span className="text-[12px] font-black uppercase tracking-widest">Coverage Across KSA</span>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8f9fa] -z-10 skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/5] bg-gray-200 overflow-hidden shadow-[30px_30px_0px_0px_#b68a41]">
                  <img src={heroBg} alt="Lamiya Al Kahleej Service" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-black text-white p-10 hidden md:block">
                  <div className="text-5xl font-black text-alfawad-primary mb-2">15+</div>
                  <div className="text-xs font-black uppercase tracking-[0.2em] leading-relaxed">Years of Industry <br /> Excellence in KSA</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <span className="text-alfawad-primary font-black text-[12px] uppercase tracking-[0.4em] mb-6 block">Welcome toLamiya Al Khaleej Al Ittehad </span>
              <h2 className="text-[36px] md:text-[55px] font-black text-black leading-[1.1] uppercase tracking-tighter mb-8">
                Your Trusted Partner for <span className="text-alfawad-primary">Total Hygiene</span> Solutions
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10 font-medium italic border-l-4 border-gray-100 pl-8">
                "We believe that a clean environment is not only about appearance but also about health, safety, comfort, and productivity."
              </p>
              <div className="space-y-6 text-gray-500 font-medium leading-relaxed mb-12">
                <p>Welcome toLamiya Al Khaleej Al Ittehad  Company, your trusted partner for complete cleaning, sanitization, AC services, pest control, and facility maintenance solutions across the Kingdom of Saudi Arabia. We specialize in delivering high-quality hygiene and maintenance services for homes, villas, apartments, offices, shops, restaurants, warehouses, hospitals, and commercial buildings.</p>
                <p>Our company is built on a strong reputation for professionalism, reliability, and premium customer support. We use advanced cleaning methods, professional-grade equipment, eco-friendly chemicals, and trained technicians to deliver exceptional results every time.</p>
              </div>
              <Link to="/about" className="group flex items-center gap-6">
                <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center transition-all group-hover:bg-black group-hover:scale-110">
                  <ArrowRight className="w-6 h-6 group-hover:text-white transition-colors" />
                </div>
                <span className="text-lg font-black uppercase tracking-tighter text-black">Read Our Full Story</span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <AnimatedSection>
              <span className="text-alfawad-primary font-black text-[12px] uppercase tracking-[0.5em] mb-4 block">Our Expertise</span>
              <h2 className="text-[40px] md:text-[60px] font-black uppercase tracking-tighter leading-none">Core Services</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Link to="/services" className="text-alfawad-primary font-black uppercase tracking-widest text-sm flex items-center gap-3 hover:text-white transition-colors group">
                Browse All Services <div className="w-12 h-[2px] bg-alfawad-primary group-hover:w-16 group-hover:bg-white transition-all" />
              </Link>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {popularServices.map((service, i) => (
              <Link
                key={i}
                to={`/services/${service.slug}`}
                className="group relative h-[450px] overflow-hidden"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
                  <span className="text-alfawad-primary text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">Expert Service</span>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">{service.title}</h3>
                  <div className="w-10 h-1 bg-alfawad-primary mb-6 transition-all group-hover:w-full" />
                  <span className="text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-60 transition-opacity">Learn More &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <h2 className="text-[40px] md:text-[60px] font-black text-black leading-[1] uppercase tracking-tighter mb-10">
                Not Just a <br /> Cleaning <br /> <span className="text-alfawad-primary">Company.</span>
              </h2>
              <p className="text-gray-500 text-lg mb-12 font-medium max-w-lg">
                We are a complete hygiene and maintenance solution provider that understands Saudi living standards and customer expectations.
              </p>
              <div className="space-y-6">
                {[
                  "Certified cleaning & AC technicians",
                  "Safe and eco-friendly products",
                  "Professional machines and tools",
                  "Transparent pricing with no hidden charges",
                  "Quick booking and on-time service",
                  "Affordable annual maintenance packages",
                  "Customer satisfaction guaranteed",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center group-hover:bg-alfawad-primary transition-all">
                      <CheckCircle2 className="w-5 h-5 text-alfawad-primary group-hover:text-white" />
                    </div>
                    <span className="text-black font-black uppercase text-xs tracking-widest group-hover:translate-x-2 transition-transform">{item}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="relative">
                <div className="aspect-square bg-cream relative z-10 p-12 overflow-hidden group">
                  <div className="absolute inset-0 bg-alfawad-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                  <div className="relative z-20 h-full flex flex-col justify-center">
                    <Star className="w-16 h-16 text-alfawad-primary mb-10 fill-alfawad-primary" />
                    <h3 className="text-4xl font-black text-black uppercase tracking-tighter mb-10 leading-tight">Professional Standards in Every Step</h3>
                    <p className="text-gray-600 font-bold leading-relaxed mb-10">We focus on professional-grade equipment, eco-friendly chemicals, and highly trained technicians to deliver exceptional results every time across the Kingdom.</p>
                    <div className="flex gap-4">
                      <div className="px-6 py-3 bg-black text-white text-[10px] font-black uppercase tracking-widest">ISO Certified</div>
                      <div className="px-6 py-3 bg-white text-black border border-black/10 text-[10px] font-black uppercase tracking-widest">Premium Quality</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-10 -right-10 w-64 h-64 border-[20px] border-alfawad-primary/10 -z-0" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section with Clear Visibility */}
      <section className="relative py-20 md:py-32 bg-black border-y border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-alfawad-primary/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="grid grid-cols-3 w-full gap-4 md:gap-20">
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-7xl font-black text-alfawad-primary tracking-tighter"><AnimatedCounter end={1200} suffix="+" duration={2} /></div>
              <div className="text-[10px] md:text-sm font-black text-white/50 uppercase tracking-[0.3em] mt-4">Happy Clients</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-7xl font-black text-white tracking-tighter"><AnimatedCounter end={100} suffix="%" duration={2} /></div>
              <div className="text-[10px] md:text-sm font-black text-alfawad-primary uppercase tracking-[0.3em] mt-4 leading-tight text-center">Clean <br className="md:hidden" /> Guarantee</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-7xl font-black text-alfawad-primary tracking-tighter"><AnimatedCounter end={48} suffix="/7" duration={2} /></div>
              <div className="text-[10px] md:text-sm font-black text-white/50 uppercase tracking-[0.3em] mt-4 leading-tight text-center">Fast <br className="md:hidden" /> Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 mb-16 text-center">
          <span className="text-alfawad-primary font-black text-[12px] uppercase tracking-[0.5em] mb-4 block">Official Partners</span>
          <h2 className="text-3xl font-black text-black uppercase tracking-tighter">Trusted By Industry Leaders</h2>
        </div>
        <div className="flex overflow-hidden group">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 items-center justify-center min-w-full"
          >
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Client Logo"
                className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coverage Section */}
      {/* <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-alfawad-primary font-black text-[12px] uppercase tracking-[0.5em] mb-4">Widespread Presence</span>
            <h2 className="text-[40px] md:text-[50px] font-black text-black uppercase tracking-tighter leading-none mb-10">Service Areas Across KSA</h2>
            <div className="w-20 h-2 bg-alfawad-primary" />
          </div>
          <div className="bg-white p-12 md:p-20 shadow-2xl relative">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <MapPin className="w-32 h-32" />
            </div>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {["Riyadh", "Jeddah", "Dammam", "Al Khobar", "Dhahran", "Jubail", "Al Ahsa", "Taif", "Mecca", "Medina", "Tabuk", "Najran", "Hail", "Qassim"].map((city, i) => (
                <div key={i} className="py-3 border-b border-gray-100 font-black text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-colors">{city}</div>
              ))}
            </div>
            <p className="mt-12 text-center text-gray-500 font-bold uppercase tracking-tighter text-sm">
              And all nearby areas across the Kingdom of Saudi Arabia.
            </p>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-20 items-center">
            <div>
              <span className="text-alfawad-primary font-black text-[12px] uppercase tracking-[0.5em] mb-4 block">Feedback</span>
              <h2 className="text-5xl font-black text-black uppercase tracking-tighter mb-8 leading-[1.1]">What Our <br /> Clients <br /> Think.</h2>
              <p className="text-gray-500 font-medium mb-10">Join over 1,200+ satisfied customers across Saudi Arabia who trust our premium cleaning and maintenance services.</p>
              <div className="flex gap-4">
                <button onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))} className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))} className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-[#f8f9fa] p-12 md:p-20 relative min-h-[400px] flex flex-col justify-center border-l-8 border-alfawad-primary">
                <div className="text-alfawad-primary text-8xl font-serif absolute top-10 left-10 opacity-10">"</div>
                <AnimatedSection key={currentTestimonial}>
                  <Star className="w-8 h-8 text-alfawad-primary mb-8 fill-alfawad-primary" />
                  <p className="text-2xl md:text-3xl font-black text-black leading-snug mb-10 tracking-tighter">
                    {testimonials[currentTestimonial].text}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-[2px] bg-alfawad-primary" />
                    <span className="font-black text-black uppercase tracking-[0.2em] text-xs">{testimonials[currentTestimonial].name}</span>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 md:py-40 bg-black text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-r from-alfawad-primary/20 to-transparent blur-[120px] rounded-full opacity-50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[45px] md:text-[80px] font-black uppercase tracking-tighter leading-none mb-10">
              Ready for a <br className="hidden md:block" /> <span className="text-alfawad-primary">Cleaner</span> Space?
            </h2>
            <p className="text-white/60 text-xl font-medium max-w-2xl mx-auto mb-16">
              Book your free inspection visit today and experience the professional difference ofLamiya Al Khaleej Al Ittehad  Company.
            </p>
            <Link
              to="/booking"
              className="bg-alfawad-primary hover:bg-white text-white hover:text-black px-16 py-6 font-black uppercase tracking-widest text-sm shadow-2xl transition-all hover:scale-105"
            >
              Book Your Free Visit Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
