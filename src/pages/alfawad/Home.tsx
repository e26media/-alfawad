import { Link } from "react-router-dom";
import { ChevronRight, Settings, Users, Truck, Wrench, Shield, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function AlfawadHome() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const HERO_SLIDES = [
    { 
      image: "https://alfawad.com/images/slider/1.jpg",
      heading: "UNRESERVED",
      subheading: "INTEGRITY",
      accent: "RED",
      description: "SUPERIOR CUSTOMER SERVICE <br /> A PASSION FOR QUALITY"
    },
    { 
      image: "https://alfawad.com/images/slider/2.jpg",
      heading: "Where Passion",
      subheading: "meets Productivity",
      accent: "BLACK",
    },
    { 
      image: "https://alfawad.com/images/slider/3.jpg",
      heading: "Always dedicated",
      subheading: "& devoted",
      accent: "BLACK",
    },
    { 
      image: "https://alfawad.com/images/slider/4.jpg",
      heading: "Safety is our",
      subheading: "NO.1 Priority",
      accent: "BLACK",
    },
    { 
      image: "https://alfawad.com/images/slider/5.jpg",
      heading: "Everything needed",
      subheading: "to Build",
      accent: "BLACK",
    },
    { 
      image: "https://alfawad.com/images/slider/6.jpg",
      heading: "We're here",
      subheading: "for you Forever",
      accent: "BLACK",
    },
    { 
      image: "https://alfawad.com/images/slider/7.jpg",
      heading: "Guarantee",
      subheading: "Best Quality",
      accent: "BLACK",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [HERO_SLIDES.length]);

  return (
    <div className="flex flex-col min-h-screen font-muli bg-[#f4f5f6] overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full h-[550px] sm:h-[650px] md:h-[90vh] min-h-[500px] bg-white overflow-hidden flex items-center">
        {/* Main Background Images */}
        {HERO_SLIDES.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 z-0 flex items-center justify-center transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img 
              src={slide.image} 
              alt="Hero Background" 
              className="w-full h-full object-cover scale-105 animate-slow-zoom"
              style={{ animationDuration: "20s" }}
            />
            {/* White fade overlay to make text readable on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent w-full md:w-[70%] lg:w-[60%]" />
          </div>
        ))}

        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] relative z-10 flex h-full items-center">
          <div className="flex flex-col gap-2 max-w-2xl mt-12 md:mt-0">
            {HERO_SLIDES.map((slide, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 transform ${index === currentSlide ? "translate-y-0 opacity-100 block" : "translate-y-4 opacity-0 hidden"}`}
              >
                <h1 className="text-[34px] sm:text-[45px] md:text-[75px] font-black text-black leading-[1.0] uppercase tracking-tighter mb-4">
                  {slide.heading} <br />
                  <span className="text-alfawad-primary">{slide.subheading}</span>
                </h1>
                {slide.description && (
                  <p 
                    className="text-[14px] sm:text-[18px] md:text-[24px] font-extrabold text-gray-800 mt-2 tracking-wide uppercase leading-tight max-w-sm md:max-w-none"
                    dangerouslySetInnerHTML={{ __html: slide.description }}
                  />
                )}
                
                <div className="mt-8 md:mt-12 flex items-center">
                  <Link to="/alfawad/contact" className="bg-alfawad-primary hover:bg-black text-white px-10 py-4 font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all text-sm md:text-base w-full sm:w-auto shadow-lg hover:-translate-y-1">
                    GET IN TOUCH <span className="text-xl leading-none">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
            
            <div className="mt-12 md:mt-[80px] flex flex-col border-l-4 border-alfawad-primary pl-4 md:pl-6">
              <span className="text-[13px] md:text-[20px] font-bold text-gray-900 mb-1 leading-tight">مؤسسة أحمد فؤاد باشور بوزيد للمقاولات العامة</span>
              <span className="text-[19px] md:text-[38px] font-black uppercase text-gray-900 leading-none tracking-tighter">
                AHMED FAWAD BAWZID EST.
              </span>
            </div>
          </div>
        </div>

        {/* Floating Right Badges & Social (Hidden on Mobile) */}
        <div className="absolute right-4 md:right-12 top-[15%] z-20 flex flex-col items-center gap-8 hidden lg:flex">
          {/* Accreditation or follow links could go here if needed */}
        </div>

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-30">
          {HERO_SLIDES.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-alfawad-primary w-6 md:w-10" : "bg-gray-400/50 hover:bg-gray-600"}`}
            />
          ))}
        </div>

        {/* Side Controls (Optimized for desktop) */}
        <button 
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 md:w-12 h-10 md:h-12 bg-white/40 md:bg-white/20 hover:bg-white/80 text-black flex items-center justify-center shadow-lg z-20 transition-all rounded hover:scale-110"
        >
          <span className="text-xl md:text-2xl font-bold">&larr;</span>
        </button>
        <button 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 md:w-12 h-10 md:h-12 bg-white/40 md:bg-white/20 hover:bg-white/80 text-black flex items-center justify-center shadow-lg z-20 transition-all rounded hover:scale-110"
        >
          <span className="text-xl md:text-2xl font-bold">&rarr;</span>
        </button>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-[#f4f5f6]">
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            
            <div className="lg:w-[55%] flex flex-col gap-6 justify-center">
              <div className="flex items-start gap-4 md:gap-6 border-b border-gray-300 pb-8 md:pb-10 mb-2 md:mb-6">
                <div className="flex flex-col justify-center pt-1 md:pt-2">
                  <span className="text-[10px] md:text-[12px] font-black text-gray-500 tracking-[0.3em] uppercase mb-1">CONTRACTING EST.</span>
                  <h2 className="text-[20px] md:text-[34px] font-black text-black leading-[1.1] uppercase tracking-tighter">
                    LAMIYA AL KHALEEJ <br/> AL ITTEHAD
                  </h2>
                </div>
              </div>

              <h3 className="text-[18px] md:text-[24px] font-black text-alfawad-primary mt-2 md:mt-4 uppercase tracking-tight">
                ESTABLISHMENT FOR GENERAL CONTRACTING
              </h3>
              <h4 className="text-[18px] md:text-[26px] font-black text-black mt-1 md:mt-2 leading-tight">
                Trusted builders for your dream projects experience, passion & more!
              </h4>
              
              <p className="text-[#666666] leading-[28px] md:leading-[32px] text-[16px] md:text-[18px] font-medium">
                Welcome to the world of AL FAWAD Engineering & Constructions where you aspire and we build!. AL FAWAD is the leading construction establishment with ISO 9001:2015 Quality Management System and ISO 140001:2015 Environmental Management System.
              </p>

              <div className="flex items-center gap-6 mt-4 md:mt-6 border-b border-gray-200 pb-8 md:pb-10 w-full max-w-[450px]">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <img src="https://alfawad.com/images/font.jpg" alt="Signature" className="h-10 md:h-12 object-contain" />
                  <div className="text-alfawad-primary font-black text-[13px] md:text-[15px] uppercase tracking-widest leading-none">
                    Technical Operation Manager
                  </div>
                </div>
              </div>

              <Link to="/alfawad/introduction" className="flex items-center gap-4 mt-2 md:mt-4 group w-max">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-alfawad-primary flex items-center justify-center transition-all group-hover:bg-alfawad-primary">
                  <div className="w-2 h-2 rounded-full bg-alfawad-primary group-hover:bg-white transition-all"></div>
                </div>
                <span className="text-[16px] md:text-[18px] font-black text-black uppercase tracking-tighter group-hover:text-alfawad-primary transition-colors">For More to Read</span>
              </Link>
            </div>

            {/* Right Image */}
            <div className="lg:w-[45%] w-full flex items-center justify-center relative mt-8 lg:mt-0">
              <div className="w-full max-w-[550px] aspect-[4/5] relative overflow-hidden shadow-alfawad md:shadow-alfawad-md">
                 <img 
                  src="https://alfawad.com/images/3.jpg" 
                  alt="Engineer Portrait" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saudi Leadership Banner - Refined for Vision 2030 Design */}
      <section className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-alfawad-primary/80 z-10" />
        <img 
          src="https://alfawad.com/images/1.jpg" 
          alt="Vision 2030 Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] relative z-20 flex flex-col items-center justify-center text-center">
          <div className="w-full text-white">
              <h2 className="text-[32px] sm:text-[45px] md:text-[65px] font-black leading-[1.0] mb-4 md:mb-6 uppercase tracking-tighter text-white drop-shadow-2xl">
                BUILDING THE <br className="hidden sm:block" /> FUTURE OF <br className="hidden sm:block" /> SAUDI ARABIA
              </h2>
              <div className="w-16 md:w-24 h-1 md:h-2 bg-white mb-6 md:mb-8 mx-auto" />
              <p className="text-[15px] sm:text-[18px] md:text-[22px] font-bold text-white/95 max-w-2xl mx-auto leading-tight md:leading-relaxed uppercase tracking-tight">
                Health And Safety Is Primarily Concern For Our People
              </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 md:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">
          <div className="text-center mb-12 md:mb-20 flex flex-col items-center px-4">
             <span className="text-alfawad-primary font-black text-[12px] md:text-[14px] uppercase tracking-[0.4em] mb-3 md:mb-4">Our Services</span>
             <h2 className="text-[28px] sm:text-[36px] md:text-[55px] font-black text-black uppercase tracking-tighter leading-tight mb-4 md:mb-6">
               Where Passion Meets Productivity
             </h2>
             <div className="w-20 md:w-24 h-1 bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {[
              { 
                title: "Technical Manpower", 
                image: "https://alfawad.com/images/services/1.jpg", 
                desc: "We provide highly skilled and technical manpower solutions for all engineering needs." 
              },
              { 
                title: "Heavy Equipment", 
                image: "https://alfawad.com/images/services/2.jpg", 
                desc: "Providing reliable and modern heavy equipment for construction and industrial projects." 
              },
              { 
                title: "Material Service", 
                image: "https://alfawad.com/images/services/3.jpg", 
                desc: "Supplying high-quality construction materials to ensure structural integrity." 
              },
            ].map((service, i) => (
              <div key={i} className="group flex flex-col bg-[#f8f9fa] overflow-hidden hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100">
                <div className="aspect-[16/10] overflow-hidden relative">
                   <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                   <h3 className="text-[20px] md:text-[24px] font-black text-black mb-3 md:mb-4 uppercase tracking-tighter group-hover:text-alfawad-primary transition-colors">
                     {service.title} <br /> Service
                   </h3>
                   <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed mb-6 md:mb-8">
                     {service.desc}
                   </p>
                   <Link to={`/alfawad/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="mt-auto flex items-center gap-2 text-black font-black uppercase text-[12px] md:text-[14px] tracking-widest group-hover:gap-4 transition-all">
                     Read More <ChevronRight className="w-5 h-5 text-alfawad-primary" />
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Support & Management Banner */}
      <section className="bg-alfawad-primary py-16 md:py-24">
         <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-stretch">
               
               <div className="text-white border-r-0 md:border-r md:border-white/20 pr-0 md:pr-12 md:pb-0 pb-12 border-b md:border-b-0 border-white/10">
                  <h3 className="text-[28px] md:text-[36px] font-black uppercase tracking-tighter mb-6 md:mb-8 leading-tight">
                    Project Support <br /> Service
                  </h3>
                  <p className="text-white/90 text-[16px] md:text-[18px] leading-relaxed font-bold mb-8 md:mb-10">
                    Our Project Management team supports you in the execution of your projects from the initial request to the design and delivery...
                  </p>
                  <Link to="/alfawad/services/project-support" className="bg-white text-alfawad-primary px-6 md:px-8 py-3 md:py-4 font-black uppercase tracking-widest text-xs md:text-sm hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 inline-block">
                    Know More
                  </Link>
               </div>

               <div className="text-white pl-0 md:pl-12">
                  <h3 className="text-[28px] md:text-[36px] font-black uppercase tracking-tighter mb-6 md:mb-8 leading-tight">
                    Project Management <br /> Service
                  </h3>
                  <ul className="mb-8 md:mb-10 space-y-3 md:space-y-4">
                     {["Fire Protection Installation", "Hydroblasting", "Bolt Integrity Solutions"].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-[16px] md:text-[18px] font-bold">
                          <CheckCircle className="w-5 h-5 text-white/70" /> {item}
                       </li>
                     ))}
                  </ul>
                  <Link to="/alfawad/services/project-management" className="bg-white text-alfawad-primary px-6 md:px-8 py-3 md:py-4 font-black uppercase tracking-widest text-xs md:text-sm hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 inline-block">
                    Know More
                  </Link>
               </div>

            </div>
         </div>
      </section>

      {/* Unreserved Integrity Video/Banner Section */}
      <section className="relative w-full h-[400px] md:h-[550px] overflow-hidden flex items-center justify-center text-center px-4">
         <img 
           src="https://alfawad.com/images/bg.jpg" 
           alt="Industrial Background" 
           className="absolute inset-0 w-full h-full object-cover scale-110" 
         />
         <div className="absolute inset-0 bg-alfawad-primary/40 z-10" />
         
         <div className="relative z-20 flex flex-col items-center">
            <button className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-alfawad-primary flex items-center justify-center mb-6 md:mb-10 shadow-[0_0_50px_rgba(223,59,54,0.6)] hover:scale-110 transition-transform group">
               <div className="w-0 h-0 border-t-[8px] md:border-t-[12px] border-t-transparent border-l-[14px] md:border-l-[20px] border-l-white border-b-[8px] md:border-b-[12px] border-b-transparent ml-1.5 md:ml-2 group-hover:scale-110 transition-all"></div>
            </button>
            <h2 className="text-[32px] md:text-[70px] font-black text-white uppercase tracking-tighter leading-tight mb-4">
              Unreserved Integrity
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-white/80 font-black tracking-[0.1em] md:tracking-[0.2em] text-[11px] sm:text-sm md:text-lg uppercase">
               <span>Superior Customer Service</span>
               <div className="hidden sm:block w-2 h-2 rounded-full bg-alfawad-primary"></div>
               <span>A Passion for Quality</span>
            </div>
         </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-32 bg-[#f4f5f6]">
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">
          <div className="mb-12 md:mb-20">
            <span className="text-alfawad-primary font-black text-[12px] md:text-[14px] uppercase tracking-[0.4em] mb-3 md:mb-4 block">Why Choose Us</span>
            <h2 className="text-[26px] sm:text-[34px] md:text-[50px] font-black text-black leading-tight max-w-[600px] uppercase tracking-tighter">
              We give utmost importance to Quality and guarantee is on us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
            {[
              { 
                title: "Support Services", 
                icon: <Settings className="w-10 h-10 md:w-12 md:h-12" />,
                desc: "We aim to provide services at reasonable prices & in a timely manner."
              },
              { 
                title: "Team Work", 
                icon: <Users className="w-10 h-10 md:w-12 md:h-12" />,
                desc: "We don't work as one person... we work together as a team."
              },
              { 
                title: "Integrity", 
                icon: <Shield className="w-10 h-10 md:w-12 md:h-12" />,
                desc: "Our actions are consistent with our values and principles."
              },
              { 
                title: "Commitment", 
                icon: <CheckCircle className="w-10 h-10 md:w-12 md:h-12" />,
                desc: "We are proactive in finding the best solutions for our clients to achieve their goals."
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 md:p-12 h-full flex flex-col shadow-sm group relative transition-all duration-500 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-alfawad-primary">
                <div className="text-alfawad-primary mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-[20px] md:text-[24px] font-black text-black mb-4 md:mb-6 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-[#666666] text-[15px] md:text-[16px] leading-relaxed font-medium">
                   {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
             <div className="flex flex-col">
                <span className="text-alfawad-primary font-black text-[14px] uppercase tracking-[0.4em] mb-4">Strategic Partners</span>
                <h2 className="text-[32px] md:text-[45px] font-black text-black uppercase tracking-tighter leading-none">
                  Trusted By Industry Leaders
                </h2>
             </div>
             <Link to="/alfawad/clients" className="text-black font-black uppercase text-[14px] tracking-widest border-b-2 border-alfawad-primary pb-1 hover:text-alfawad-primary transition-all">
                View All Clients
             </Link>
          </div>
        </div>

        {/* Scrolling Logo Marquee */}
        <div className="relative flex overflow-x-hidden group bg-gray-50 py-12 border-y border-gray-100">
          <div className="animate-marquee flex whitespace-nowrap gap-12 md:gap-20 items-center">
            {[...Array(2)].map((_, outerIndex) => (
              <div key={outerIndex} className="flex shrink-0 gap-12 md:gap-20 items-center">
                {[
                  { name: "Saudi Aramco", logo: "https://alfawad.com/images/client-logo/saudi-aramco.jpg" },
                  { name: "SABIC", logo: "https://alfawad.com/images/client-logo/SABIC.jpg" },
                  { name: "Hyundai", logo: "https://alfawad.com/images/client-logo/hyundai.jpg" },
                  { name: "Nesma Trading", logo: "https://alfawad.com/images/client-logo/nesma-trading.jpg" },
                  { name: "Petro Rabigh", logo: "https://alfawad.com/images/client-logo/petro-rabigh.jpg" },
                  { name: "Alfanar", logo: "https://alfawad.com/images/client-logo/alfanar.jpg" },
                  { name: "Saudi Electricity", logo: "https://alfawad.com/images/client-logo/Saudi-electricity.jpg" },
                  { name: "CTCI", logo: "https://alfawad.com/images/client-logo/CTCI.jpg" },
                  { name: "Daelim", logo: "https://alfawad.com/images/client-logo/daelim.jpg" },
                  { name: "Olayan", logo: "https://alfawad.com/images/client-logo/olayan.jpg" },
                ].map((client, i) => (
                  <div key={i} className="w-32 md:w-48 h-20 md:h-28 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                    <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="bg-alfawad-primary text-white py-16 md:py-32 relative overflow-visible">
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">
          <h2 className="text-[32px] md:text-[55px] font-black mb-12 md:mb-20 uppercase tracking-tighter leading-tight">
            News & Updates
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[4/5] bg-white group overflow-hidden shadow-2xl relative z-10 md:translate-y-20">
                <img 
                  src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000}?q=80&w=600&auto=format&fit=crop`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                  alt="News"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 md:p-8">
                   <span className="text-alfawad-primary font-black text-xs tracking-widest uppercase mb-2">Industry Report</span>
                   <h4 className="text-white font-black text-base md:text-lg leading-tight uppercase">Latest Innovations in Industrial Engineering 2024</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Spacer for overlapping news images */}
      <div className="h-24 md:h-48 bg-[#f4f5f6] w-full"></div>

    </div>
  );
}



