import { Link } from "react-router-dom";
import { ChevronRight, Settings, Droplet, Zap, Hammer, Package, ShieldCheck, Truck, ChevronLeft } from "lucide-react";
import ServiceSidebar from "../../components/alfawad/ServiceSidebar";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const MaterialService = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const images = [
    { src: "/images/industrial/material-1.png", title: "Pipes & Fittings" },
    { src: "/images/industrial/material-2.png", title: "Safety PPE" },
    { src: "/images/industrial/material-3.png", title: "Electrical Cables" },
    { src: "/images/industrial/material-4.png", title: "Construction Steel" }
  ];

  const productRanges = [
    "Pipes, Valves & Fittings", "Fin Tubes", "Grinding Balls", "Ceramic balls (Grinding)",
    "Pumps & Vacuum Pumps", "Fasteners", "Process Equipment", "Electrical Cables",
    "Scaffolding Items", "Connectors", "HK Consumables", "Safety Glasses",
    "Hard Hats", "Leather Gloves", "Chemical Resistant Gloves", "Coveralls",
    "Safety Signs and Label", "Hearing Protection"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-muli">

      {/* Premium Header Banner Section - Refined for Vision 2030 Design */}
      <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[#b68a41]/75 z-10" />
        <img
          src="/images/industrial/hero-1.png"
          alt="Material Service Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] relative z-20 flex flex-col items-center justify-center text-center pt-20">
          <div className="w-full text-white">
            <h1 className="text-[45px] md:text-[75px] font-black leading-[0.9] mb-6 uppercase tracking-tighter text-white drop-shadow-2xl">
              {isAr ? "خدمة" : "MATERIAL"} <br /> {isAr ? "المواد" : "SERVICE"}
            </h1>
            <div className="w-24 h-2 bg-white mb-8 mx-auto" />
            <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
              <Link to="/" className="hover:text-alfawad-accent transition-all duration-300">{isAr ? "الرئيسية" : "Home"}</Link>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="text-white/70">{isAr ? "الخدمات" : "Services"}</span>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="text-white">{isAr ? "خدمة المواد" : "Material Service"}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f4f5f6]">
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-16">

            <ServiceSidebar />

            <div className="w-full lg:w-3/4 flex flex-col gap-12">
              <div className="bg-white p-8 md:p-16 shadow-xl border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-alfawad-primary/5 rounded-bl-full -mr-16 -mt-16 transition-all duration-700 group-hover:scale-150" />

                <div className="flex flex-col gap-8">
                  <div className="flex flex-col border-l-8 border-alfawad-primary pl-8">
                    <span className="text-alfawad-primary font-black text-[14px] uppercase tracking-[0.4em] mb-2">{isAr ? "شريك سلسلة التوريد" : "Supply Chain Partner"}</span>
                    <h2 className="text-[32px] md:text-[45px] font-black text-black leading-tight uppercase tracking-tighter">
                      {isAr ? "خدمات توريد المواد" : "Material Supply Services"}
                    </h2>
                  </div>

                  <p className="text-[20px] md:text-[22px] font-bold text-black leading-relaxed italic border-b border-gray-100 pb-8">
                    {isAr ? "نحن متخصصون في توريد وتوفير مواد البناء والصناعية عالية الجودة." : "We specialize in sourcing and providing high-quality construction and industrial materials to support project developers and contractors across the Kingdom."}
                  </p>

                  <div className="text-[#666666] leading-[36px] text-[18px] font-medium flex flex-col gap-6">
                    <p>
                      {isAr ? "توفر شركة لمياء الخليج حلول توريد المواد الفعالة." : "Lamiya Al Khaleej Al Ittihad General Contracting provides efficient material supply solutions. We understand that timely material delivery is critical for project success, which is why we maintain a reliable supplier network and logistics support."}
                    </p>
                  </div>

                  {/* Image Carousel Section */}
                  <div className="relative mt-8 group/carousel">
                    <div className="overflow-hidden bg-gray-100 rounded-none shadow-2xl" ref={emblaRef}>
                      <div className="flex -mx-2">
                        {images.map((img, index) => (
                          <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 relative h-[400px] md:h-[500px] px-2">
                            <img
                              src={img.src}
                              alt={img.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                              {/* <h3 className="text-white text-3xl font-black uppercase tracking-tighter">{img.title}</h3> */}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-alfawad-primary transition-all duration-300 z-20 group-hover/carousel:opacity-100 opacity-0"
                      onClick={scrollPrev}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-alfawad-primary transition-all duration-300 z-20 group-hover/carousel:opacity-100 opacity-0"
                      onClick={scrollNext}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                      {scrollSnaps.map((_, index) => (
                        <button
                          key={index}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === selectedIndex ? "bg-alfawad-primary w-8" : "bg-gray-300 hover:bg-gray-400"
                          }`}
                          onClick={() => scrollTo(index)}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Categories Grid */}
                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {[
                      { title: "Construction Materials", icon: <Hammer className="w-8 h-8" />, items: ["Cement, Aggregate & Sand", "Structural Steel & Rebars", "Bricks & Blocks", "Ready-mix Concrete Support"] },
                      { title: "Electrical Supplies", icon: <Zap className="w-8 h-8" />, items: ["Cables & Wires", "Conduits & Trays", "Switchgear & Components", "Lighting Fixtures"] },
                      { title: "Piping & Mechanical", icon: <Settings className="w-8 h-8" />, items: ["CS / SS / PVC Pipes", "Fittings & Valves", "Gaskets & Fasteners", "Mechanical Tools"] },
                      { title: "Safety & PPE", icon: <ShieldCheck className="w-8 h-8" />, items: ["Safety Helmets", "Coveralls & High-viz Vest", "Safety Shoes & Gloves", "Fire Extinguishers"] }
                    ].map((cat, i) => (
                      <div key={i} className="bg-gray-50 p-10 border-l-4 border-alfawad-primary group hover:bg-black transition-all duration-500 h-full">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="text-alfawad-primary group-hover:scale-110 transition-transform">{cat.icon}</div>
                          <h3 className="text-xl font-black text-black group-hover:text-alfawad-primary uppercase transition-colors tracking-tighter">{cat.title}</h3>
                        </div>
                        <ul className="flex flex-col gap-3">
                          {cat.items.map((item, j) => (
                            <li key={j} className="text-gray-500  text-sm font-bold uppercase tracking-tight flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-alfawad-primary" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div> */}

                  {/* Expanded Product Range Section */}
                  <div className="mt-16 bg-[#f8f9fa] p-12 border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-alfawad-primary/5 -mr-32 -mt-32 rounded-full" />
                    <h3 className="text-[28px] font-black text-black uppercase tracking-tighter mb-8 relative z-10 border-b-4 border-alfawad-primary inline-block">
                      {isAr ? "نطاقات المنتجات الرئيسية" : "Key Product Ranges"}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                      {productRanges.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 group">
                          <div className="w-2 h-2 rounded-full bg-alfawad-primary group-hover:scale-150 transition-transform duration-300" />
                          <span className="text-gray-700 font-bold uppercase text-[13px] tracking-tight group-hover:text-black transition-colors">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

               
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default MaterialService;





