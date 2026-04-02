import { Link } from "react-router-dom";
import { ChevronRight, CheckCircle, ShieldCheck, Award, Zap } from "lucide-react";
import OverviewSidebar from "../../components/alfawad/OverviewSidebar";

const QualityPolicy = () => {
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
                QUALITY <br /> POLICY
              </h1>
              <div className="w-24 h-2 bg-white mb-8 mx-auto" />
              <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
                <Link to="/alfawad" className="hover:text-alfawad-accent transition-all duration-300">Home</Link>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <span className="text-white/70">Overview</span>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <span className="text-white">Quality Policy</span>
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
                     <span className="text-alfawad-primary font-black text-[14px] uppercase tracking-[0.4em] mb-2">Our Standard</span>
                     <h2 className="text-[32px] md:text-[45px] font-black text-black leading-tight uppercase tracking-tighter">
                       Quality Policy
                     </h2>
                   </div>

                   <p className="text-[20px] md:text-[22px] font-bold text-black leading-relaxed italic border-b border-gray-100 pb-8">
                     Continuous dedication to quality control and customer service are the cornerstones of Al Fawad operations.
                   </p>

                   <div className="text-[#666666] leading-[36px] text-[18px] font-medium flex flex-col gap-6">
                     <p>
                       Management believes that Al Fawad can only succeed by providing products & services that meet the specific requirements of all clients. To this end, all employees have a responsibility to ensure that Al Fawad products & services provided to our customers meet their requirements.
                     </p>
                     <p>
                       We prioritize meeting production deadlines, operating as an extended member of the client's team. Management is committed to upholding this policy throughout all company activities, ensuring Al Fawad maintains its ISO 9001:2015 Quality Management System certification.
                     </p>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                     {[
                       "Defect-Free Service Execution",
                       "International Engineering Standards",
                       "Continuous Training & Development",
                       "Preventive Equipment Maintenance",
                       "Strategic Vendor Quality Control",
                       "Advanced Testing Protocols"
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-4 bg-gray-50 p-6 border-l-4 border-alfawad-primary group hover:bg-alfawad-primary transition-all duration-500">
                          <CheckCircle className="w-6 h-6 text-alfawad-primary group-hover:text-white transition-colors" />
                          <span className="text-black group-hover:text-white font-black uppercase text-sm tracking-tighter transition-colors">{item}</span>
                       </div>
                     ))}
                   </div>

                   <div className="mt-12 bg-black p-12 flex flex-col md:flex-row items-center gap-10">
                      <div className="w-32 h-32 bg-white flex items-center justify-center p-4">
                         <div className="text-black font-black text-center leading-none">
                            <span className="text-4xl">ISO</span><br/>
                            <span className="text-xs tracking-tighter">9001:2015</span>
                         </div>
                      </div>
                      <div className="text-white flex-1">
                         <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter">Quality Guaranteed</h4>
                         <p className="text-white/60 leading-relaxed font-bold">
                            Our quality parameters are continuously audited and upgraded to align with modern industrial benchmarks.
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

export default QualityPolicy;




