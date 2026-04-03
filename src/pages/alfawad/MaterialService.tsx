import { Link } from "react-router-dom";
import { ChevronRight, Settings, Droplet, Zap, Hammer, Package, ShieldCheck, Truck } from "lucide-react";
import ServiceSidebar from "../../components/alfawad/ServiceSidebar";

const MaterialService = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-muli">
      
      {/* Premium Header Banner Section - Refined for Vision 2030 Design */}
      <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[#b68a41]/75 z-10" />
        <img 
          src="https://alfawad.com/images/1.jpg" 
          alt="Material Service Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] relative z-20 flex flex-col items-center justify-center text-center pt-20">
           <div className="w-full text-white">
              <h1 className="text-[45px] md:text-[75px] font-black leading-[0.9] mb-6 uppercase tracking-tighter text-white drop-shadow-2xl">
                MATERIAL <br /> SERVICE
              </h1>
              <div className="w-24 h-2 bg-white mb-8 mx-auto" />
              <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
                <Link to="/" className="hover:text-alfawad-accent transition-all duration-300">Home</Link>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <span className="text-white/70">Services</span>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <span className="text-white">Material Service</span>
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
                      <span className="text-alfawad-primary font-black text-[14px] uppercase tracking-[0.4em] mb-2">Supply Chain Partner</span>
                      <h2 className="text-[32px] md:text-[45px] font-black text-black leading-tight uppercase tracking-tighter">
                        Material Supply Services
                      </h2>
                    </div>

                    <p className="text-[20px] md:text-[22px] font-bold text-black leading-relaxed italic border-b border-gray-100 pb-8">
                      We specialize in sourcing and providing high-quality construction and industrial materials to support project developers and contractors across the Kingdom.
                    </p>

                    <div className="text-[#666666] leading-[36px] text-[18px] font-medium flex flex-col gap-6">
                      <p>
                        Lamiya Al Kahleej General Contracting provides efficient material supply solutions. We understand that timely material delivery is critical for project success, which is why we maintain a reliable supplier network and logistics support.
                      </p>
                    </div>

                    {/* Categories Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
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
                               <li key={j} className="text-gray-500 group-hover:text-white/70 text-sm font-bold uppercase tracking-tight flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-alfawad-primary" /> {item}
                               </li>
                             ))}
                           </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 bg-black p-12 flex flex-col md:flex-row items-center gap-10">
                       <div className="flex gap-4">
                         <ShieldCheck className="w-16 h-16 text-alfawad-primary" />
                         <Truck className="w-16 h-16 text-alfawad-primary" />
                       </div>
                       <div className="text-white flex-1">
                          <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter">Verified Supply Chain</h4>
                          <p className="text-white/60 leading-relaxed font-bold">
                             We ensure that all materials supplied are as per project standards and delivered within the agreed timelines to prevent any site delays.
                          </p>
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




