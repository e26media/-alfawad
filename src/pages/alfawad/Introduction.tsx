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
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] relative z-20 flex flex-col items-center justify-center text-center pt-20">
           <div className="w-full text-white">
              <h1 className="text-[45px] md:text-[75px] font-black leading-[0.9] mb-6 uppercase tracking-tighter text-white drop-shadow-2xl">
                OVERVIEW <br /> INTRODUCTION
              </h1>
              <div className="w-24 h-2 bg-white mb-8 mx-auto" />
              <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
                <Link to="/alfawad" className="hover:text-alfawad-accent transition-all duration-300">Home</Link>
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
                    <span className="text-alfawad-primary font-black text-[14px] uppercase tracking-[0.4em] mb-2">Who We Are</span>
                    <h2 className="text-[32px] md:text-[45px] font-black text-black leading-tight uppercase tracking-tighter">
                      Company Introduction
                    </h2>
                  </div>

                  <p className="text-[18px] md:text-[20px] font-bold text-gray-900 leading-relaxed italic border-b border-gray-100 pb-8">
                    "Welcome to the world of AL FAWAD Engineering & Constructions where you aspire and we build!"
                  </p>

                  <div className="text-[#666666] leading-[36px] text-[18px] font-medium flex flex-col gap-6">
                    <p>
                      <strong className="text-black font-black">AL FAWAD Engineering & Construction</strong> (Ahmed Fawad Bawzid Est.) represents one of the premier construction and industrial service organizations in the Kingdom of Saudi Arabia. We have successfully developed a dynamic, fully integrated infrastructure that enables us to handle massive construction and plant maintenance operations with uncompromising efficiency.
                    </p>
                    
                    <p>
                      Since inception, we have meticulously developed our resources to ensure that every massive project phase—from initial material procurement to final execution and commissioning—is managed flawlessly. Our rapid growth is attributed to our highly skilled workforce, experienced management, and a robust fleet of heavy equipment machinery.
                    </p>

                    <p>
                      As a 100% Saudi-owned establishment operating under Commercial Registration, we take immense pride in contributing directly to the Kingdom's industrial expansion. We act as a trusted operational partner for <span className="text-alfawad-primary font-bold uppercase">SABIC, Saudi Aramco, SEC</span>, and myriad multinational corporations executing mammoth projects within the region.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    <div className="bg-gray-50 p-10 border-t-4 border-alfawad-primary flex flex-col gap-4 group hover:bg-alfawad-primary transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                       <h3 className="text-2xl font-black text-black group-hover:text-white uppercase transition-colors">Core Philosophy</h3>
                       <p className="text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors">
                         We believe in proactive execution. Safety is woven directly into our operational methodology, not treated as an afterthought.
                       </p>
                    </div>
                    <div className="bg-gray-50 p-10 border-t-4 border-black flex flex-col gap-4 group hover:bg-black transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                       <h3 className="text-2xl font-black text-black group-hover:text-white uppercase transition-colors">Compliance</h3>
                       <p className="text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors">
                         AL FAWAD maintains <span className="font-bold">ISO 9001:2015</span> Quality Management and <span className="font-bold">ISO 14001:2015</span> Environmental Management certifications.
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




