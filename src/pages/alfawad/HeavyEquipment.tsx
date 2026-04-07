import { Link } from "react-router-dom";
import { ChevronRight, Truck, CheckCircle, ShieldCheck, Zap, Activity } from "lucide-react";
import ServiceSidebar from "../../components/alfawad/ServiceSidebar";

const EQUIPMENT_LIST = [
  "Cranes (Mobile, Crawler, Rough Terrain)",
  "Forklifts & Telehandlers",
  "Boom Trucks & Manlifts / Cherry Pickers",
  "Excavators, Wheel Loaders & Backhoes",
  "Dump Trucks & Water Tankers",
  "Air Compressors & Generators",
  "Welding Machines & Tower Lights",
  "Rollers & Compactors",
  "Skid Steer Loaders (Bobcats)",
  "Vacuum Trucks"
];

const HeavyEquipment = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-muli">
      
      {/* Premium Header Banner Section - Refined for Vision 2030 Design */}
      <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[#b68a41]/75 z-10" />
        <img 
          src="/images/industrial/hero-1.png" 
          alt="Heavy Equipment Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] relative z-20 flex flex-col items-center justify-center text-center pt-20">
           <div className="w-full text-white">
              <h1 className="text-[45px] md:text-[75px] font-black leading-[0.9] mb-6 uppercase tracking-tighter text-white drop-shadow-2xl">
                EQUIPMENT <br /> RENTAL
              </h1>
              <div className="w-24 h-2 bg-white mb-8 mx-auto" />
              <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
                <Link to="/" className="hover:text-alfawad-accent transition-all duration-300">Home</Link>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <span className="text-white/70">Services</span>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <span className="text-white">Equipment Rental</span>
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
                     <span className="text-alfawad-primary font-black text-[14px] uppercase tracking-[0.4em] mb-2">Fleet Solutions</span>
                     <h2 className="text-[32px] md:text-[45px] font-black text-black leading-tight uppercase tracking-tighter">
                       Equipment Rental Services
                     </h2>
                   </div>

                   <p className="text-[20px] md:text-[22px] font-bold text-black leading-relaxed italic border-b border-gray-100 pb-8">
                     We offer a comprehensive fleet of heavy and light equipment to meet the dynamic needs of construction, industrial maintenance, and logistics sectors.
                   </p>

                   <div className="text-[#666666] leading-[36px] text-[18px] font-medium flex flex-col gap-6">
                     <p>
                        Lamiya Al Kahleej General Contracting provides reliable equipment rental solutions with a focus on machine performance and operator safety. All our equipment units are well-maintained and comply with industrial safety standards, ensuring smooth operations on-site.
                     </p>
                     <p>
                        We provide equipment for both short-term rental (daily/weekly) and long-term project leasing. Our experienced operators ensure that the equipment is utilized efficiently and safely while following site-specific HSE guidelines.
                     </p>
                   </div>

                   {/* Fleet Grid */}
                   <div className="bg-black p-12 mt-4 relative overflow-hidden group">
                      <div className="absolute bottom-0 right-0 w-48 h-48 bg-alfawad-primary/10 rounded-tl-full transition-all group-hover:scale-150" />
                      <h3 className="text-2xl font-black text-white uppercase mb-8 border-l-4 border-alfawad-primary pl-6 tracking-tighter">Our Equipment Fleet Include</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                        {EQUIPMENT_LIST.map((item, index) => (
                          <div key={index} className="flex items-center gap-4 text-white/70 group/item hover:text-alfawad-primary transition-colors">
                            <CheckCircle className="w-5 h-5 text-alfawad-primary flex-shrink-0" />
                            <span className="text-sm font-black uppercase tracking-tight">{item}</span>
                          </div>
                        ))}
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                     {[
                       { title: "Operator Services", icon: <Truck className="w-8 h-8" />, desc: "Certified and experienced operators for all equipment categories." },
                       { title: "On-Site Support", icon: <Zap className="w-8 h-8" />, desc: "Fast mobilization and technical support to ensure zero downtime." },
                       { title: "Safety Compliant", icon: <ShieldCheck className="w-8 h-8" />, desc: "All machines carry necessary inspection and valid third-party certificates." }
                     ].map((item, i) => (
                       <div key={i} className="bg-gray-50 p-8 border-b-4 border-alfawad-primary flex flex-col gap-4 text-center items-center group hover:bg-black transition-all duration-500 h-full">
                          <div className="text-alfawad-primary group-hover:scale-110 transition-transform">{item.icon}</div>
                          <h3 className="text-xl font-black text-black group-hover:text-white uppercase transition-colors tracking-tighter">{item.title}</h3>
                          <p className="text-gray-500 group-hover:text-white/80 text-sm leading-relaxed transition-colors">{item.desc}</p>
                       </div>
                     ))}
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

export default HeavyEquipment;




