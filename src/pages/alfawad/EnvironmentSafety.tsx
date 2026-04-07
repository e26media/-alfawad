import { Link } from "react-router-dom";
import { ChevronRight, ShieldAlert, ShieldCheck, HardHat, TrendingDown, RefreshCcw, Leaf } from "lucide-react";
import OverviewSidebar from "../../components/alfawad/OverviewSidebar";

const EnvironmentSafety = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-muli">
      
      {/* Premium Header Banner Section - Refined for Vision 2030 Design */}
      <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[#b68a41]/75 z-10" />
        <img 
          src="/images/industrial/hero-1.png" 
          alt="Vision 2030 Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] relative z-20 flex flex-col items-center justify-center text-center pt-32 md:pt-48">
           <div className="w-full text-white">
              <h1 className="text-[45px] md:text-[75px] font-black leading-[0.9] mb-6 uppercase tracking-tighter text-white drop-shadow-2xl">
                ENVIRONMENT <br /> & SAFETY
              </h1>
              <div className="w-24 h-2 bg-white mb-8 mx-auto" />
              <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
                <Link to="/" className="hover:text-alfawad-accent transition-all duration-300">Home</Link>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <span className="text-white/70">Overview</span>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <span className="text-white">Environment & Safety</span>
              </div>
           </div>
        </div>
      </section>

      <section className="py-24 bg-[#f4f5f6]">
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <OverviewSidebar />

            <div className="w-full lg:w-3/4 flex flex-col gap-12">
              <div className="bg-white p-8 md:p-16 shadow-xl border border-gray-100 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-alfawad-primary/5 rounded-bl-full -mr-16 -mt-16 transition-all duration-700 group-hover:scale-150" />
                 
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col border-l-8 border-alfawad-primary pl-8">
                      <span className="text-alfawad-primary font-black text-[14px] uppercase tracking-[0.4em] mb-2">Our Commitment</span>
                      <h2 className="text-[32px] md:text-[45px] font-black text-black leading-tight uppercase tracking-tighter">
                        Health, Safety & Environment (HSE)
                      </h2>
                    </div>

                    <div className="bg-black p-10 flex flex-col md:flex-row items-center gap-10">
                       <ShieldAlert className="w-20 h-20 text-alfawad-primary shrink-0" />
                       <div className="text-white flex-1">
                          <p className="text-[18px] md:text-[22px] font-bold leading-relaxed italic border-b border-white/10 pb-6 mb-6">
                             "Lamiya Al Kahleej General Contracting believes that safety is the foundation of success."
                          </p>
                          <p className="text-white/60 font-bold uppercase tracking-widest text-sm">Our Safety Commitment</p>
                       </div>
                    </div>

                    <div className="text-[#666666] leading-[36px] text-[18px] font-medium flex flex-col gap-6">
                      <p>
                        We are committed to maintaining a safe workplace for our employees, clients, subcontractors, and all stakeholders. We strictly follow the safety guidelines and standards required by Saudi regulations and client HSE policies.
                      </p>
                      <p>
                        We implement a proactive safety approach to reduce risks, prevent accidents, and ensure compliance at every project location. Our objective is to maintain a zero-accident work culture and ensure the environment is protected during all operations.
                      </p>
                    </div>

                    <h3 className="text-2xl font-black text-black uppercase tracking-tighter mt-4">Our Safety Policy</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                      {[
                        { title: "Safe Conditions", icon: <ShieldCheck className="w-8 h-8" />, desc: "Maintaining safe working conditions across all project sites." },
                        { title: "Safety Training", icon: <HardHat className="w-8 h-8" />, desc: "Regular safety training and awareness programs including toolbox meetings." },
                        { title: "PPE Compliance", icon: <ShieldCheck className="w-8 h-8" />, desc: "Strict use of certified Personal Protective Equipment (PPE)." }
                      ].map((item, i) => (
                        <div key={i} className="bg-gray-50 p-8 border-b-4 border-alfawad-primary flex flex-col gap-4 text-center items-center group hover:bg-alfawad-primary transition-all duration-500 h-full">
                           <div className="text-alfawad-primary group-hover:text-white transition-colors">{item.icon}</div>
                           <h3 className="text-xl font-black text-black group-hover:text-white uppercase transition-colors tracking-tighter">{item.title}</h3>
                           <p className="text-gray-500 group-hover:text-white/80 text-sm leading-relaxed transition-colors">{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 border-t border-gray-100 pt-10">
                       <h4 className="text-2xl font-black text-black uppercase tracking-tighter mb-8 text-alfawad-primary">Environmental Responsibility</h4>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                          {[
                            "Reducing waste and promoting proper disposal methods",
                            "Controlling pollution and preventing environmental damage",
                            "Encouraging responsible use of resources",
                            "Supporting sustainable work practices where applicable"
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                               <div className="w-6 h-6 rounded-full bg-alfawad-primary/10 flex items-center justify-center shrink-0 mt-1">
                                  <div className="w-2 h-2 rounded-full bg-alfawad-primary" />
                               </div>
                               <p className="text-gray-600 font-bold uppercase tracking-tight text-sm">{item}</p>
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

export default EnvironmentSafety;




