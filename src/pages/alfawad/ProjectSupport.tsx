import { Link } from "react-router-dom";
import { ChevronRight, Wrench, CheckCircle, ShieldCheck, Zap, Settings } from "lucide-react";
import ServiceSidebar from "../../components/alfawad/ServiceSidebar";
import { useState } from "react";

const ProjectSupport = () => {
  const [activeTab, setActiveTab] = useState("Civil");

  return (
    <div className="flex flex-col min-h-screen bg-white font-muli">

      {/* Premium Header Banner Section - Refined for Vision 2030 Design */}
      <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[#b68a41]/75 z-10" />
        <img
          src="/images/industrial/hero-1.png"
          alt="Project Support Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] relative z-20 flex flex-col items-center justify-center text-center pt-20">
          <div className="w-full text-white">
            <h1 className="text-[45px] md:text-[75px] font-black leading-[0.9] mb-6 uppercase tracking-tighter text-white drop-shadow-2xl">
              PROJECT <br /> SUPPORT
            </h1>
            <div className="w-24 h-2 bg-white mb-8 mx-auto" />
            <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
              <Link to="/" className="hover:text-alfawad-accent transition-all duration-300">Home</Link>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="text-white/70">Services</span>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="text-white">Project Support</span>
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
                    <span className="text-alfawad-primary font-black text-[14px] uppercase tracking-[0.4em] mb-2">Operational Backbone</span>
                    <h2 className="text-[32px] md:text-[45px] font-black text-black leading-tight uppercase tracking-tighter">
                      Construction Support Services
                    </h2>
                  </div>

                  <p className="text-[20px] md:text-[22px] font-bold text-black leading-relaxed italic border-b border-gray-100 pb-8">
                    We provide comprehensive support across civil, mechanical, and electrical engineering domains to keep your projects on track.
                  </p>

                  <div className="text-[#666666] leading-[36px] text-[18px] font-medium flex flex-col gap-6">
                    <p>
                      Lamiya Al Khaleej Al Ittehad  General Contracting offers multi-disciplinary construction support services. We assist primary contractors and industrial clients by executing specific project scopes with precision and reliability.
                    </p>
                  </div>

                  {/* Tabs Component */}
                  <div className="mt-4">
                    <div className="flex gap-4 border-b border-gray-100 pb-4 mb-8">
                      {["Civil", "Mechanical", "Electrical"].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`text-sm font-black uppercase tracking-widest px-6 py-3 transition-all ${activeTab === tab ? "bg-black text-white" : "bg-gray-100 text-gray-500 hover:bg-alfawad-primary hover:text-white"
                            }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    <div className="bg-gray-50 p-10 border border-gray-100 min-h-[300px]">
                      {activeTab === "Civil" && (
                        <div className="animate-in fade-in duration-500 flex flex-col gap-6">
                          <div className="flex items-center gap-4">
                            <Settings className="w-8 h-8 text-alfawad-primary" />
                            <h3 className="text-2xl font-black uppercase tracking-tighter">Civil & Structural</h3>
                          </div>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {[
                              "Earthworks & Mass Excavation",
                              "Concrete Works & Foundations",
                              "Site Grading & Leveling",
                              "Trenching & Backfilling",
                              "Industrial Flooring & Paving",
                              "Structural Steel Erection Assistance"
                            ].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-black font-bold uppercase text-[13px] tracking-tight border-b border-gray-200 pb-3">
                                <div className="w-2 h-2 rounded-full bg-alfawad-primary" /> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {activeTab === "Mechanical" && (
                        <div className="animate-in fade-in duration-500 flex flex-col gap-6">
                          <div className="flex items-center gap-4">
                            <Wrench className="w-8 h-8 text-alfawad-primary" />
                            <h3 className="text-2xl font-black uppercase tracking-tighter">Mechanical Works</h3>
                          </div>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {[
                              "Piping Fabrication & Installation Support",
                              "Equipment Installation & Alignment",
                              "Industrial Tank Maintenance Assistance",
                              "Steel Structural Work",
                              "Painting & Coating Services",
                              "Firefighting System Installation Support"
                            ].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-black font-bold uppercase text-[13px] tracking-tight border-b border-gray-200 pb-3">
                                <div className="w-2 h-2 rounded-full bg-alfawad-primary" /> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {activeTab === "Electrical" && (
                        <div className="animate-in fade-in duration-500 flex flex-col gap-6">
                          <div className="flex items-center gap-4">
                            <Zap className="w-8 h-8 text-alfawad-primary" />
                            <h3 className="text-2xl font-black uppercase tracking-tighter">Electrical & Instrument</h3>
                          </div>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {[
                              "Cable Pulling & Termination",
                              "Cable Tray Installation",
                              "Lighting & Power System Support",
                              "Instrument & Control Panel Installation",
                              "Earthing & Grounding Systems",
                              "Substation Support Activities"
                            ].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-black font-bold uppercase text-[13px] tracking-tight border-b border-gray-200 pb-3">
                                <div className="w-2 h-2 rounded-full bg-alfawad-primary" /> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 bg-black p-12 flex flex-col md:flex-row items-center gap-10">
                    <ShieldCheck className="w-20 h-20 text-alfawad-primary" />
                    <div className="text-white flex-1">
                      <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter">Reliable Infrastructure Support</h4>
                      <p className="text-white/60 leading-relaxed font-bold">
                        Our team is dedicated to supporting your project vision with quality execution and professional site management.
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

export default ProjectSupport;




