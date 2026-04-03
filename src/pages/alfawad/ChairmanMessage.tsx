import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import OverviewSidebar from "../../components/alfawad/OverviewSidebar";

const ChairmanMessage = () => {
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
                CHAIRMAN <br /> MESSAGE
              </h1>
              <div className="w-24 h-2 bg-white mb-8 mx-auto" />
              <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
                <Link to="/" className="hover:text-alfawad-accent transition-all duration-300">Home</Link>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <span className="text-white/70">Overview</span>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <span className="text-white">Chairman Message</span>
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
                
                <div className="flex flex-col gap-12">
                  <div className="flex flex-col border-l-8 border-alfawad-primary pl-8">
                    <span className="text-alfawad-primary font-black text-[14px] uppercase tracking-[0.4em] mb-2">A Word From Leadership</span>
                    <h2 className="text-[32px] md:text-[45px] font-black text-black leading-tight uppercase tracking-tighter">
                      Chairman's Message
                    </h2>
                  </div>

                  <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="w-full md:w-1/3 shrink-0">
                       <div className="relative aspect-[3/4] overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-500">
                          {/* <img 
                            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=987&auto=format&fit=crop" 
                            className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-700" 
                            alt="Chairman"
                          /> */}
                          <div className="absolute bottom-0 left-0 right-0 bg-alfawad-primary p-4 text-center">
                             <span className="text-white font-black uppercase text-sm tracking-widest">AL FAWAD CHAIRMAN</span>
                          </div>
                       </div>
                    </div>

                    <div className="w-full md:w-2/3 flex flex-col gap-8">
                       <div className="text-6xl text-alfawad-primary/20 font-serif -mb-10 leading-none">“</div>
                       <p className="text-[20px] md:text-[22px] font-bold text-black leading-relaxed italic">
                         "Welcome to Lamiya Al Kahleej General Contracting. We are proud to be a growing service provider in Saudi Arabia delivering high-quality contracting and industrial support services."
                       </p>
                       
                       <div className="text-[#666666] leading-[36px] text-[18px] font-medium flex flex-col gap-6">
                         <p>
                           Our company was established with a clear vision: to provide reliable solutions to the construction and industrial sector by combining skilled manpower, modern equipment resources, and professional project support.
                         </p>
                         <p>
                           Over the years, we have gained valuable experience in serving clients across different industries, particularly in the Eastern Province and Riyadh region. Our growth has been possible because of our dedication to customer satisfaction, commitment to safety, and continuous improvement culture.
                         </p>
                         <p>
                           We believe every project is built on trust. Our mission is to strengthen client relationships by delivering timely services, maintaining quality standards, and ensuring safety at every stage of execution. As we continue to expand, we remain committed to innovation, workforce development, and maintaining international standards in all our operations.
                         </p>
                       </div>

                       <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col gap-2">
                          <div className="text-black font-black uppercase tracking-[0.2em] text-lg">Chairman / Managing Director</div>
                          <div className="text-alfawad-primary font-bold uppercase tracking-widest text-sm">Lamiya Al Kahleej General Contracting</div>
                       </div>
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

export default ChairmanMessage;




