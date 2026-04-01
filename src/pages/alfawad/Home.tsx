import { Link } from "react-router-dom";
import { ChevronRight, Settings, Users, Truck, Wrench, Shield, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function AlfawadHome() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const HERO_SLIDES = [
    { image: "https://alfawad.com/images/slider/1.jpg" },
    { image: "https://alfawad.com/images/slider/2.jpg" },
    { image: "https://alfawad.com/images/slider/3.jpg" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-muli bg-[#f4f5f6]">
      
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[80vh] min-h-[500px] bg-white overflow-hidden flex items-center">
        {/* Main Background Images */}
        {HERO_SLIDES.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 z-0 flex items-center justify-center transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img 
              src={slide.image} 
              alt="Hero Background" 
              className="w-full h-full object-cover"
            />
            {/* White fade overlay to make text readable on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent w-full md:w-2/3" />
          </div>
        ))}

        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10 flex h-full items-center">
          <div className="flex flex-col gap-1 md:gap-2 max-w-2xl">
            <h1 className="text-[40px] md:text-[65px] font-black text-black leading-[1.1] uppercase tracking-tighter">
              UNRESERVED <br />
              <span className="text-alfawad-primary">INTEGRITY"</span>
            </h1>
            <p className="text-[16px] md:text-[22px] font-bold text-black mt-2 tracking-wide">
              SUPERIOR CUSTOMER SERVICE <br /> A PASSION FOR QUALITY
            </p>
            
            <div className="mt-[100px] md:mt-[150px] flex flex-col">
              <span className="text-[18px] md:text-[24px] font-semibold text-gray-800">مؤسسة أحمد فؤاد عاشور بوزيد للمقاولات العامة</span>
              <span className="text-[22px] md:text-[34px] font-black uppercase text-gray-800">
                AHMED FAWAD BAWZID EST.
              </span>
            </div>
          </div>
        </div>

        {/* Floating Right Badges */}
        <div className="absolute right-4 md:right-8 top-[10%] z-20 flex flex-col items-center gap-6 drop-shadow-lg hidden md:flex">
          {/* <div className="w-20 lg:w-28 bg-white rounded-full p-2 overflow-hidden aspect-square flex items-center justify-center shadow-md">
            <span className="font-black text-[12px] lg:text-[14px] text-blue-900 text-center leading-tight">MEMBER OF MULTILATERAL<br/><span className="text-[24px]">IAF</span></span>
          </div> */}
          {/* <div className="w-20 lg:w-28 bg-transparent overflow-hidden aspect-square flex flex-col items-center justify-center shadow-md">
            <div className="bg-[#447238] text-white w-full h-[60%] flex items-center justify-center font-black text-4xl">IAS</div>
            <div className="bg-white w-full h-[40%] text-[8px] text-center font-bold px-1 pt-1 text-black">ACCREDITED Management Systems</div>
          </div> */}
          {/* <div className="w-20 lg:w-28 bg-white rounded-full overflow-hidden aspect-square flex items-center justify-center border-4 border-red-600 relative shadow-md">
            <div className="absolute font-black text-red-600 text-[18px]">SIS CERT</div>
            <div className="absolute text-green-500 font-black text-[60px] opacity-70 -rotate-12">✔</div>
          </div> */}

          {/* <div className="flex flex-col items-center gap-2 mt-auto pb-10">
            <span className="text-[14px] font-bold text-gray-600 uppercase">FOLLOW US ON</span>
            <div className="flex gap-2">
              <span className="w-8 h-8 rounded bg-[#3b5998] text-white flex items-center justify-center font-bold text-xl cursor-pointer">f</span>
              <span className="w-8 h-8 rounded bg-[#d62976] text-white flex items-center justify-center font-bold cursor-pointer">IG</span>
              <span className="w-8 h-8 rounded bg-[#0077b5] text-white flex items-center justify-center font-bold text-sm cursor-pointer">IN</span>
              <span className="w-8 h-8 rounded bg-[#1da1f2] text-white flex items-center justify-center font-bold text-lg cursor-pointer">tw</span>
            </div>
            <span className="font-bold text-lg mt-1 text-black">alfawadksa</span>
          </div> */}
        </div>

        {/* Slider Controls */}
        <button 
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-red-400/80 hover:bg-alfawad-primary rounded-full text-white flex items-center justify-center shadow z-20 transition-colors"
        >
          &larr;
        </button>
        <button 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
          className="absolute right-4 md:right-32 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-red-400/80 hover:bg-alfawad-primary rounded-full text-white flex items-center justify-center shadow z-20 transition-colors"
        >
          &rarr;
        </button>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#f4f5f6]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            
            {/* Left Content */}
            <div className="lg:w-1/2 flex flex-col gap-5 justify-center">
              <div className="flex items-start gap-4 border-b border-gray-300 pb-6 mb-2">
                <div className="text-[60px] md:text-[80px] font-black text-alfawad-primary leading-none flex flex-col relative w-20">
                  <span className="text-blue-500 absolute -left-2 z-0 opacity-50">/</span><span className="relative z-10">A</span><span className="bg-red-500 h-2 w-full absolute bottom-4"></span>
                </div>
                <div className="flex flex-col justify-center mt-2">
                  <span className="text-sm font-bold text-black tracking-widest uppercase">ALFAWAD</span>
                  <h2 className="text-[28px] md:text-[34px] font-semibold text-black leading-none">
                    Engineering & Construction
                  </h2>
                </div>
              </div>

              <h3 className="text-[22px] font-bold text-black mt-2 w-[90%]">
                Trusted builders for your dream projects experience, passion & more!
              </h3>
              
              <p className="text-[#a5a5a5] leading-[30px] text-[17px] font-normal w-[95%]">
                Welcome to the world of ALFAWAD Engineering & Constructions where you aspire and we build!. AL FAWAD is the leading construction establishment with ISO 9001:2015 Quality Management System and ISO 140001:2015 Environmental Management System.
              </p>

              <div className="flex items-center gap-6 mt-4 border-b border-gray-200 pb-8 w-full max-w-[400px]">
                <div className="font-[cursive] text-3xl font-bold tracking-tight text-black italic">
                   Nainar Aseef
                </div>
                <div className="text-alfawad-primary font-semibold text-[15px]">
                  Technical Operation Manager
                </div>
              </div>

              <button className="flex items-center gap-3 mt-4 group w-max">
                <div className="w-8 h-8 rounded-full border border-alfawad-primary flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-alfawad-primary group-hover:scale-150 transition-transform"></div>
                </div>
                <span className="text-[17px] font-bold text-black group-hover:text-alfawad-primary transition-colors">For More to Read</span>
              </button>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex items-center justify-end">
              <div className="w-full max-w-[600px] h-[450px] relative overflow-hidden bg-gray-200 shadow-xl">
                 <img 
                  src="https://alfawad.com/images/slider/2.jpg" 
                  alt="Engineer" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-white/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Banner - Using absolute positioned image block */}
      <div className="w-full h-[120px] md:h-[160px] relative mt-10 overflow-hidden bg-gradient-to-r from-red-900 to-black/80 flex items-center">
        {/* Placeholder banner design */}
        <div className="container mx-auto px-4 max-w-[1400px] flex items-center justify-between z-10 text-white font-bold text-4xl">
           <span>VISION 2030</span>
           <span className="text-green-500 bg-white px-4 py-2 text-2xl">SAUDI ARABIA</span>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#f4f5f6] relative overflow-hidden border-t-2 border-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10">
          <div className="mb-12">
            <h2 className="text-[32px] md:text-[38px] font-semibold text-black leading-tight max-w-[500px]">
              We give utmost importance to <br/> Quality and the guarantee is on us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-10 h-[300px] flex flex-col pt-12 shadow-[0_5px_15px_rgba(0,0,0,0.05)] group relative transition-all duration-300 transform hover:-translate-y-2">
               <div className="absolute right-0 bottom-0 w-full h-full border-r-[6px] border-b-[6px] border-transparent group-hover:border-alfawad-primary transition-colors duration-300 pointer-events-none z-10"></div>
               <div className="w-12 h-12 mb-6 text-alfawad-primary">
                 <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
               </div>
               <h3 className="text-[22px] font-bold text-black mb-4">Support Services</h3>
               <p className="text-[#a5a5a5] text-[15px] leading-relaxed font-normal">
                 We aim to provide services at reasonable prices & in a timely manner.
               </p>
            </div>

            <div className="bg-white p-10 h-[300px] flex flex-col pt-12 shadow-[0_5px_15px_rgba(0,0,0,0.05)] group relative transition-all duration-300 transform hover:-translate-y-2">
               <div className="absolute right-0 bottom-0 w-full h-full border-r-[6px] border-b-[6px] border-transparent group-hover:border-alfawad-primary transition-colors duration-300 pointer-events-none z-10"></div>
               <div className="w-12 h-12 mb-6 text-alfawad-primary">
                 <Users strokeWidth={1.5} className="w-full h-full" />
               </div>
               <h3 className="text-[22px] font-bold text-black mb-4">Team Work</h3>
               <p className="text-[#a5a5a5] text-[15px] leading-relaxed font-normal">
                 We don't work as one person... we work together as a team.
               </p>
            </div>

            <div className="bg-white p-10 h-[300px] flex flex-col pt-12 shadow-[0_5px_15px_rgba(0,0,0,0.05)] group relative transition-all duration-300 transform hover:-translate-y-2">
               <div className="absolute right-0 bottom-0 w-full h-full border-r-[6px] border-b-[6px] border-transparent group-hover:border-alfawad-primary transition-colors duration-300 pointer-events-none z-10"></div>
               <div className="w-12 h-12 mb-6 text-alfawad-primary">
                 <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
               </div>
               <h3 className="text-[22px] font-bold text-black mb-4">Integrity</h3>
               <p className="text-[#a5a5a5] text-[15px] leading-relaxed font-normal">
                 Our actions are consistent with our values and principles.
               </p>
            </div>

            <div className="bg-white p-10 h-[300px] flex flex-col pt-12 shadow-[0_5px_15px_rgba(0,0,0,0.05)] group relative transition-all duration-300 transform hover:-translate-y-2">
               <div className="absolute right-0 bottom-0 w-full h-full border-r-[6px] border-b-[6px] border-transparent group-hover:border-alfawad-primary transition-colors duration-300 pointer-events-none z-10"></div>
               <div className="w-12 h-12 mb-6 text-alfawad-primary">
                 <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
               </div>
               <h3 className="text-[22px] font-bold text-black mb-4">Commitment</h3>
               <p className="text-[#a5a5a5] text-[15px] leading-relaxed font-normal">
                 We are proactive in finding the best solutions for our clients to achieve their goals.
               </p>
            </div>

          </div>
        </div>
      </section>

      {/* News & Updates Section - Full width red background */}
      <section className="bg-alfawad-primary text-white py-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0nZycgeDE9JzAlJyB5MT0nMCUnIHgyPScxMDAlJyB5Mj0nMTAwJSc+PHN0b3Agb2Zmc2V0PScwJicgc3RvcC1jb2xvcj0nI2RmM2IzNicvPjxzdG9wIG9mZnNldD0nMTAwJScgc3RvcC1jb2xvcj0nI2M0MjkxYycvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J3VybCgjZyknLz48L3N2Zz4=')]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <h2 className="text-[32px] md:text-[38px] font-semibold mb-12">
            News & Updates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="aspect-[4/3] bg-gray-200 overflow-hidden shadow-xl -mb-32 relative z-10">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-[4/3] bg-gray-200 overflow-hidden shadow-xl -mb-32 relative z-10">
               <img src="https://images.unsplash.com/photo-1541888082424-eb5467551061?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-[4/3] bg-gray-200 overflow-hidden shadow-xl -mb-32 relative z-10">
               <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-[4/3] bg-gray-200 overflow-hidden shadow-xl -mb-32 relative z-10">
               <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Spacer to account for overlapping news images */}
      <div className="h-40 bg-[#1c1c1c] w-full"></div>

    </div>
  );
}
