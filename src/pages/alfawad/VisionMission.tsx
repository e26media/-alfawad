import { Link } from "react-router-dom";
import { ChevronRight, Target, Shield, Users, Award, Zap, Heart } from "lucide-react";
import OverviewSidebar from "../../components/alfawad/OverviewSidebar";

const VisionMission = () => {
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
                VISION <br /> & MISSION
              </h1>
              <div className="w-24 h-2 bg-white mb-8 mx-auto" />
              <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
                <Link to="/alfawad" className="hover:text-alfawad-accent transition-all duration-300">Home</Link>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <span className="text-white/70">Overview</span>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <span className="text-white">Vision & Mission</span>
              </div>
           </div>
        </div>
      </section>

      <section className="py-24 bg-[#f4f5f6]">
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <OverviewSidebar />

            <div className="w-full lg:w-3/4 flex flex-col gap-12">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* Vision Segment */}
                 <div className="bg-white p-12 shadow-xl border border-gray-100 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-alfawad-primary/10 rounded-bl-full transition-transform group-hover:scale-150" />
                    <Target className="w-16 h-16 text-alfawad-primary mb-8" />
                    <h2 className="text-3xl font-black text-black uppercase tracking-tighter mb-6">Our Vision</h2>
                    <p className="text-[#666666] leading-relaxed text-lg font-medium italic">
                      "To be the premier engineering, construction and project management organization by achieving extraordinary results for our customers, building satisfying careers for our people, and earning a fair return on the value we deliver."
                    </p>
                 </div>

                 {/* Mission Segment */}
                 <div className="bg-black p-12 shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full transition-transform group-hover:scale-150" />
                    <Award className="w-16 h-16 text-alfawad-primary mb-8" />
                    <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-6">Our Mission</h2>
                    <p className="text-white/70 leading-relaxed text-lg font-medium italic">
                      "Achieving excellence and high level of efficiency in all our domains through creating high value for our customers based on the highest degree of performance and quality."
                    </p>
                 </div>
              </div>

              {/* Core Principles */}
              <div className="bg-white p-8 md:p-16 shadow-xl border border-gray-100">
                 <div className="flex flex-col border-l-8 border-alfawad-primary pl-8 mb-12">
                    <span className="text-alfawad-primary font-black text-[14px] uppercase tracking-[0.4em] mb-2">Our Driving Values</span>
                    <h2 className="text-[32px] md:text-[45px] font-black text-black leading-tight uppercase tracking-tighter">
                      Core Principles
                    </h2>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                      { title: "Quality", icon: < Shield className="w-8 h-8" />, desc: "Maintaining focus on consistently providing quality products and services." },
                      { title: "Customers", icon: < Users className="w-8 h-8" />, desc: "Establishing strong relationships and tailoring solutions to ensure satisfaction." },
                      { title: "Teamwork", icon: < Heart className="w-8 h-8" />, desc: "We don't work as one person... we work together as a team." },
                      { title: "Integrity", icon: < Award className="w-8 h-8" />, desc: "Our actions are consistent with our values and principles." },
                      { title: "Commitment", icon: < Zap className="w-8 h-8" />, desc: "Proactive in finding the best solutions for our clients to achieve their goals." },
                      { title: "Safety", icon: < Shield className="w-8 h-8" />, desc: "Safety is not an option; it is our top priority for everyone's well-being." },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col gap-4 border-b border-gray-100 pb-8 hover:border-alfawad-primary transition-colors cursor-default group">
                         <div className="text-alfawad-primary group-hover:scale-110 transition-transform">{item.icon}</div>
                         <h3 className="text-xl font-black text-black uppercase">{item.title}</h3>
                         <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;




