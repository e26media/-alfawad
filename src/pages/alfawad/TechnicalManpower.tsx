import { Link } from "react-router-dom";
import { ChevronRight, Users, HardHat, CheckCircle, Award, ShieldCheck } from "lucide-react";
import ServiceSidebar from "../../components/alfawad/ServiceSidebar";

const TechnicalManpower = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-muli">
      
      {/* Premium Header Banner Section - Refined for Vision 2030 Design */}
      <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[#b68a41]/75 z-10" />
        <img 
          src="https://alfawad.com/images/1.jpg" 
          alt="Technical Manpower Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] relative z-20 flex flex-col items-center justify-center text-center pt-20">
           <div className="w-full text-white">
              <h1 className="text-[45px] md:text-[75px] font-black leading-[0.9] mb-6 uppercase tracking-tighter text-white drop-shadow-2xl">
                TECHNICAL <br /> MANPOWER
              </h1>
              <div className="w-24 h-2 bg-white mb-8 mx-auto" />
              <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
                <Link to="/alfawad" className="hover:text-alfawad-accent transition-all duration-300">Home</Link>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <span className="text-white/70">Services</span>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <span className="text-white">Technical Manpower</span>
              </div>
           </div>
        </div>
      </section>

      <section className="py-24 bg-[#f4f5f6]">
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <ServiceSidebar />

             <div className="w-full lg:w-3/4 flex flex-col gap-8 md:gap-12">
               <div className="bg-white p-6 md:p-16 shadow-xl border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-alfawad-primary/5 rounded-bl-full -mr-16 -mt-16 transition-all duration-700 group-hover:scale-150" />
                  
                  <div className="flex flex-col gap-6 md:gap-8">
                    <div className="flex flex-col border-l-4 md:border-l-8 border-alfawad-primary pl-4 md:pl-8">
                      <span className="text-alfawad-primary font-black text-[12px] md:text-[14px] uppercase tracking-[0.4em] mb-1 md:mb-2 text-wrap">Powering Projects</span>
                      <h2 className="text-[26px] sm:text-[32px] md:text-[45px] font-black text-black leading-tight uppercase tracking-tighter">
                        Technical Manpower Supply
                      </h2>
                    </div>

                    <p className="text-[17px] md:text-[22px] font-bold text-black leading-relaxed italic border-b border-gray-100 pb-6 md:pb-8">
                      AL FAWAD possesses a rich database of professional, skilled, and semi-skilled personnel available for various industrial needs.
                    </p>

                    <div className="text-[#666666] leading-[28px] md:leading-[36px] text-[16px] md:text-[18px] font-medium flex flex-col gap-4 md:gap-6">
                      <p>
                        Our categories of manpower include professional, skilled, and semi-skilled individuals on both temporary and permanent contract bases. We provide pre-vetted specialists who are ready to mobilize across the Kingdom's industrial zones including Jubail, Yanbu, and beyond.
                      </p>
                      <p>
                        Whether it's for long-term project support or short-term emergency shutdowns, our team is trained to adhere to the highest safety and quality standards, specifically those required by Saudi Aramco, SABIC, and other major industrial players.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-4">
                      {[
                        { title: "Project Controllers", desc: "Expert management and scheduling for complex industrial project lifecycles." },
                        { title: "Certified Riggers", desc: "TUV and Aramco certified rigging specialists for safe heavy lifting operations." },
                        { title: "System Administrators", desc: "Technical IT and systems support for industrial infrastructure management." },
                        { title: "Skilled Welders", desc: "6G, TIG, and MIG certified welders for high-precision mechanical piping." },
                        { title: "Safety Officers", desc: "NEBOSH/OSHA certified HSE professionals to ensure zero-incident workplaces." },
                        { title: "Equipment Operators", desc: "Certified operators for cranes, forklifts, and heavy earthmoving machinery." },
                      ].map((item, i) => (
                        <div key={i} className="flex flex-col gap-2 md:gap-3 bg-gray-50/50 p-6 md:p-8 border-l-4 border-alfawad-primary hover:bg-black group transition-all duration-500">
                           <h3 className="text-lg md:text-xl font-black text-black group-hover:text-alfawad-primary uppercase transition-colors">{item.title}</h3>
                           <p className="text-gray-500 group-hover:text-white/70 text-[13px] md:text-sm leading-relaxed transition-colors">{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 md:mt-12 bg-[#1c1c1c] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-10 rounded-sm">
                       <div className="w-16 h-16 md:w-24 md:h-24 bg-alfawad-primary flex items-center justify-center rotate-45 group hover:rotate-90 transition-transform duration-500">
                          <ShieldCheck className="w-8 h-8 md:w-12 md:h-12 text-white -rotate-45 group-hover:-rotate-90 transition-transform duration-500" />
                       </div>
                       <div className="text-white flex-1 text-center md:text-left">
                          <h4 className="text-xl md:text-2xl font-black uppercase mb-2 md:mb-4 tracking-tighter">Mobilization Ready</h4>
                          <p className="text-white/60 leading-relaxed font-bold text-sm md:text-base">
                             All personnel undergo strict capability verification and safety induction programs before reaching your site to ensure immediate productivity.
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

export default TechnicalManpower;




