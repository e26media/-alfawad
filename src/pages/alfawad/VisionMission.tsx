import { Link } from "react-router-dom";
import { ChevronRight, Target, Shield, Users, Award, Zap, Heart } from "lucide-react";
import OverviewSidebar from "../../components/alfawad/OverviewSidebar";
import { useTranslation } from "react-i18next";

const VisionMission = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

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
                {isAr ? "الرؤية" : "VISION"} <br /> {isAr ? "والرسالة" : "& MISSION"}
              </h1>
              <div className="w-24 h-2 bg-white mb-8 mx-auto" />
              <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
                <Link to="/" className="hover:text-alfawad-accent transition-all duration-300">{isAr ? "الرئيسية" : "Home"}</Link>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <span className="text-white/70">{isAr ? "نظرة عامة" : "Overview"}</span>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <span className="text-white">{isAr ? "الرؤية والرسالة" : "Vision & Mission"}</span>
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
                    <h2 className="text-3xl font-black text-black uppercase tracking-tighter mb-6">{isAr ? "رؤيتنا" : "Our Vision"}</h2>
                    <p className="text-[#666666] leading-relaxed text-lg font-medium italic">
                      {isAr ? `"أن نصبح واحدًا من أهم وأوثق مقدمي خدمات المقاولات والدعم في المملكة العربية السعودية، والمعروفين بالتميز."` : `"To become one of the most respected and reliable contracting and industrial service providers in Saudi Arabia, recognized for excellence in material providing services, manpower services, equipment solutions  and project support with strong safety and quality performance."`}
                    </p>
                 </div>

                 {/* Mission Segment */}
                 <div className="bg-black p-12 shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full transition-transform group-hover:scale-150" />
                    <Award className="w-16 h-16 text-alfawad-primary mb-8" />
                    <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-6">{isAr ? "مهمتنا" : "Our Mission"}</h2>
                    <p className="text-white/70 leading-relaxed text-lg font-medium italic">
                      {isAr ? `"مهمتنا هي توفير حلول دعم مهنية من خلال القوى العاملة ومعداتنا والتنفيذ القائم على الجودة."` : `"Our mission is to provide professional contracting support solutions by delivering qualified manpower, reliable equipment fleet, quality-based service execution, and safe operations."`}
                    </p>
                 </div>
              </div>

              {/* Core Principles */}
              <div className="bg-white p-8 md:p-16 shadow-xl border border-gray-100">
                 <div className="flex flex-col border-l-8 border-alfawad-primary pl-8 mb-12">
                    <span className="text-alfawad-primary font-black text-[14px] uppercase tracking-[0.4em] mb-2">{isAr ? "قيمنا الدافعة" : "Our Driving Values"}</span>
                    <h2 className="text-[32px] md:text-[45px] font-black text-black leading-tight uppercase tracking-tighter">
                      {isAr ? "المبادئ الأساسية" : "Core Principles"}
                    </h2>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                      { title: isAr ? "النزاهة" : "Integrity", icon: <Shield className="w-8 h-8" />, desc: isAr ? "ندير أعمالنا بصدق وشفافية." : "We conduct business with honesty, transparency, and fairness." },
                      { title: isAr ? "الجودة" : "Quality", icon: <Award className="w-8 h-8" />, desc: isAr ? "نتبع معايير جودة منظمة." : "We follow structured quality standards to ensure consistent service performance." },
                      { title: isAr ? "السلامة" : "Safety", icon: <Shield className="w-8 h-8" />, desc: isAr ? "نولي الأولوية للصحة والسلامة." : "We prioritize health and safety above everything." },
                      { title: isAr ? "الالتزام تجاه العملاء" : "Customer Commitment", icon: <Users className="w-8 h-8" />, desc: isAr ? "نركز على تلبية توقعات العملاء." : "We focus on meeting client expectations and ensuring smooth project execution." },
                      { title: isAr ? "العمل الجماعي" : "Teamwork", icon: <Heart className="w-8 h-8" />, desc: isAr ? "نبني فرقًا داخلية قوية." : "We build strong internal teams and collaborative client partnerships." },
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




