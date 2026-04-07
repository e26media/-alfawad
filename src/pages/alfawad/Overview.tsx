import { Link } from "react-router-dom";
import { ChevronRight, Shield, Award, BarChart, Settings, Users } from "lucide-react";
import OverviewSidebar from "../../components/alfawad/OverviewSidebar";

const Overview = () => {
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
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] relative z-20 flex flex-col items-center justify-center text-center pt-20">
           <div className="w-full text-white">
              <h1 className="text-[45px] md:text-[75px] font-black leading-[0.9] mb-6 uppercase tracking-tighter text-white drop-shadow-2xl">
                CORPORATE <br /> OVERVIEW
              </h1>
              <div className="w-24 h-2 bg-white mb-8 mx-auto" />
              <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
                <Link to="/" className="hover:text-alfawad-accent transition-all duration-300">Home</Link>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <span className="text-white">Overview</span>
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
                     <span className="text-alfawad-primary font-black text-[14px] uppercase tracking-[0.4em] mb-2">Our Heritage</span>
                     <h2 className="text-[32px] md:text-[45px] font-black text-black leading-tight uppercase tracking-tighter">
                       Engineering & Construction
                     </h2>
                   </div>

                   <p className="text-[20px] md:text-[22px] font-bold text-black leading-relaxed italic border-b border-gray-100 pb-8">
                     Al Fawad represents a multi-disciplinary industrial services organization operating extensively throughout the Kingdom of Saudi Arabia.
                   </p>

                   <div className="text-[#666666] leading-[36px] text-[18px] font-medium flex flex-col gap-6">
                     <p>
                       Welcome to the world of AL FAWAD Engineering & Constructions where you aspire and we build! We are a leading construction establishment with ISO 9001:2015 Quality Management and ISO 14001:2015 Environmental Management certifications. 
                     </p>
                     <p>
                       By synergizing highly-skilled technical manpower with a state-of-the-art heavy equipment fleet, we drive unparalleled productivity for our major clients across the construction, oil & gas, and petrochemical sectors.
                     </p>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                     {[
                       { title: "Technical Expertise", icon: <Settings className="w-8 h-8" />, desc: "Turn-key industrial solutions spanning across major technical execution divisions." },
                       { title: "Skilled Workforce", icon: <Users className="w-8 h-8" />, desc: "A robust database of professional, skilled, and semi-skilled personnel mobilization-ready." },
                       { title: "Modern Fleet", icon: <Shield className="w-8 h-8" />, desc: "Late-model heavy construction machinery backed by aggresive preventive maintenance." },
                       { title: "QHSE Excellence", icon: <Award className="w-8 h-8" />, desc: "Uncompromising safety and quality metrics ensuring absolute incident-free execution." }
                     ].map((item, i) => (
                       <div key={i} className="flex flex-col gap-4 bg-gray-50 p-8 border-b-4 border-alfawad-primary hover:bg-black group transition-all duration-500">
                          <div className="text-alfawad-primary group-hover:scale-110 transition-transform">{item.icon}</div>
                          <h3 className="text-xl font-black text-black group-hover:text-alfawad-primary uppercase transition-colors tracking-tighter">{item.title}</h3>
                          <p className="text-gray-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors">{item.desc}</p>
                       </div>
                     ))}
                   </div>

                   <div className="mt-12 bg-black p-12 flex flex-col md:flex-row items-center gap-10">
                      <BarChart className="w-20 h-20 text-alfawad-primary" />
                      <div className="text-white flex-1">
                         <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter">Strategic Impact</h4>
                         <p className="text-white/60 leading-relaxed font-bold">
                            Driven by Vision 2030, we are targeting to become the predominant heavy industry partner supporting robust national growth across the Kingdom.
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

export default Overview;




