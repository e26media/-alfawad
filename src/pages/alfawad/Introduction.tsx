import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import OverviewSidebar from "../../components/alfawad/OverviewSidebar";

const Introduction = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-muli">
      
      {/* Premium Header Banner Section - Refined for Vision 2030 Design */}
      <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[#b68a41]/75 z-10" />
        <img 
          src="https://alfawad.com/images/1.jpg" 
          alt="Vision 2030 Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] relative z-20 flex flex-col items-center justify-center text-center pt-32 md:pt-48">
           <div className="w-full text-white">
              <h1 className="text-[45px] md:text-[75px] font-black leading-[0.9] mb-6 uppercase tracking-tighter text-white drop-shadow-2xl">
                OVERVIEW <br /> INTRODUCTION
              </h1>
              <div className="w-24 h-2 bg-white mb-8 mx-auto" />
              <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
                <Link to="/" className="hover:text-alfawad-accent transition-all duration-300">Home</Link>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <span className="text-white/70">Overview</span>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <span className="text-white">Introduction</span>
              </div>
           </div>
        </div>
      </section>

      <section className="py-24 bg-[#f4f5f6]">
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <OverviewSidebar />

            <div className="w-full lg:w-3/4">
              <div className="bg-white p-8 md:p-16 shadow-xl border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-alfawad-primary/5 rounded-bl-full -mr-16 -mt-16 transition-all duration-700 group-hover:scale-150" />
                
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col border-l-8 border-alfawad-primary pl-8">
                    <span className="text-alfawad-primary font-black text-[14px] uppercase tracking-[0.4em] mb-2">About Our Company</span>
                    <h2 className="text-[32px] md:text-[45px] font-black text-black leading-tight uppercase tracking-tighter">
                      Company Introduction
                    </h2>
                  </div>

                  <p className="text-[18px] md:text-[20px] font-bold text-gray-900 leading-relaxed italic border-b border-gray-100 pb-8">
                    "Lamiya Al Kahleej General Contracting is a growing and trusted contracting organization in Saudi Arabia specializing in industrial and construction support services."
                  </p>

                  <div className="text-[#666666] leading-[36px] text-[18px] font-medium flex flex-col gap-6">
                    <p>
                      Since our establishment, we have continuously expanded our service capabilities to meet the increasing demand of major industries and contractors across the Kingdom. We are known for delivering manpower outsourcing, equipment rental, project support services, industrial maintenance assistance, and construction material supply.
                    </p>
                    
                    <p>
                      Our operations are structured to handle both short-term and long-term project requirements. We ensure quality output through trained manpower, professional supervision, and strict safety compliance.
                    </p>

                    <p>
                      Our service areas mainly include Eastern Province (Al Khobar, Jubail, Dammam) and Central Region (Riyadh). With a strong operational base and experienced workforce, we support projects in industrial plants, refineries, petrochemical zones, infrastructure developments, and commercial construction sites.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    <div className="bg-gray-50 p-10 border-t-4 border-alfawad-primary flex flex-col gap-4 group hover:bg-alfawad-primary transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full">
                       <h3 className="text-2xl font-black text-black group-hover:text-white uppercase transition-colors">Skilled Workforce</h3>
                       <p className="text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors">
                         We provide a large pool of qualified manpower including engineers, supervisors, technicians, operators, and labor categories to meet project-specific requirements.
                       </p>
                    </div>
                    <div className="bg-gray-50 p-10 border-t-4 border-black flex flex-col gap-4 group hover:bg-black transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full">
                       <h3 className="text-2xl font-black text-black group-hover:text-white uppercase transition-colors">Safety Commitment</h3>
                       <p className="text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors">
                         Safety is a core value. We follow strict HSE guidelines to ensure accident-free and compliant work environments.
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

export default Introduction;





