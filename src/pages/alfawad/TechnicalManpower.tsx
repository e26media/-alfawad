import { Link } from "react-router-dom";
import { ChevronRight, Users, HardHat, CheckCircle, Award, ShieldCheck } from "lucide-react";
import ServiceSidebar from "../../components/alfawad/ServiceSidebar";
import { useTranslation } from "react-i18next";

const TechnicalManpower = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <div className="flex flex-col min-h-screen bg-white font-muli">

      {/* Premium Header Banner Section - Refined for Vision 2030 Design */}
      <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[#b68a41]/75 z-10" />
        <img
          src="/images/industrial/hero-1.png"
          alt="Technical Manpower Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] relative z-20 flex flex-col items-center justify-center text-center pt-20">
          <div className="w-full text-white">
            <h1 className="text-[45px] md:text-[75px] font-black leading-[0.9] mb-6 uppercase tracking-tighter text-white drop-shadow-2xl">
              {isAr ? "القوى العاملة" : "TECHNICAL"} <br /> {isAr ? "الفنية" : "MANPOWER"}
            </h1>
            <div className="w-24 h-2 bg-white mb-8 mx-auto" />
            <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
              <Link to="/" className="hover:text-alfawad-accent transition-all duration-300">{isAr ? "الرئيسية" : "Home"}</Link>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="text-white/70">{isAr ? "الخدمات" : "Services"}</span>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="text-white">{isAr ? "القوى العاملة الفنية" : "Technical Manpower"}</span>
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
                    <span className="text-alfawad-primary font-black text-[12px] md:text-[14px] uppercase tracking-[0.4em] mb-1 md:mb-2 text-wrap">{isAr ? "قوى عاملة ذات كفاءة" : "Quality Workforce"}</span>
                    <h2 className="text-[26px] sm:text-[32px] md:text-[45px] font-black text-black leading-tight uppercase tracking-tighter">
                      {isAr ? "خدمات القوى العاملة" : "Manpower Services"}
                    </h2>
                  </div>

                  <p className="text-[17px] md:text-[22px] font-bold text-black leading-relaxed italic border-b border-gray-100 pb-6 md:pb-8">
                    {isAr ? "توفير حلول قوى عاملة مؤهلة وموثوقة." : "Providing qualified and reliable manpower solutions for industrial, construction, and engineering projects across Saudi Arabia."}
                  </p>

                  <div className="text-[#666666] leading-[28px] md:leading-[36px] text-[16px] md:text-[18px] font-medium flex flex-col gap-4 md:gap-6">
                    <p>
                      {isAr ? "نحن في لمياء الخليج شريك موثوق للاستعانة بمصادر خارجية للقوى العاملة." : "Lamiya Al Khaleej Al Ittihad  General Contracting is a trusted partner for manpower outsourcing. we provide a wide range of technical and non-technical workforce categories to support large-scale industrial projects, shutdowns, maintenance work, and construction activities."}
                    </p>
                    <p>
                      {isAr ? "ندرك أن نجاح أي مشروع يعتمد على جودة العاملين فيه." : "We understand that the success of any project depends on the quality of its people. That's why we ensure all our personnel are properly vetted, trained, and compliant with site safety requirements. Our flexible mobilization strategy allows us to provide manpower for both short-term and long-term needs."}
                    </p>
                  </div>

                  <div className="mt-12 bg-[#f8f9fa] p-8 md:p-12 border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-alfawad-primary/5 -mr-32 -mt-32 rounded-full" />
                    <h3 className="text-[24px] md:text-[28px] font-black text-black uppercase tracking-tighter mb-8 relative z-10 border-b-4 border-alfawad-primary inline-block">
                      {isAr ? "فئات القوى العاملة" : "Workforce Categories"}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                      {[
                        { en: "Civil Engineer", ar: "مهندس مدني" },
                        { en: "Planning Engineer", ar: "مهندس تخطيط" },
                        { en: "Piping Engineer", ar: "مهندس أنابيب" },
                        { en: "Rotating Equipment Eng", ar: "مهندس معدات دوارة" },
                        { en: "Site Supervisor", ar: "مشرف موقع" },
                        { en: "Officers", ar: "مسؤولين" },
                        { en: "Executive Secretaries", ar: "سكرتارية تنفيذية" },
                        { en: "Documents Controller", ar: "مراقب مستندات" },
                        { en: "Computer Programmers", ar: "مبرمج كمبيوتر" },
                        { en: "Schedulers", ar: "مجدولين" },
                        { en: "Mechanical Engineer", ar: "مهندس ميكانيكي" },
                        { en: "Electrical Engineer", ar: "مهندس كهربائي" },
                        { en: "Inspector", ar: "مفتش" },
                        { en: "Project Superintendent", ar: "مشرف مشروع" },
                        { en: "Safety Engineers", ar: "مهندس سلامة" },
                        { en: "Auto-Cad Operator", ar: "رسام أوتوكاد" },
                        { en: "Accountant", ar: "محاسب" },
                        { en: "Computer Operator", ar: "مشغل كمبيوتر" },
                        { en: "System Administrators", ar: "مسؤول أنظمة" },
                        { en: "Project Controllers", ar: "مراقب مشروع" },
                        { en: "Riggers", ar: "فنيو رفع" },
                        { en: "Operators (Crane, Forklift)", ar: "مشغلين (كرين، فوركليفت)" },
                        { en: "Skilled Labours", ar: "عمالة ماهرة" },
                        { en: "Semi-skilled Labours", ar: "عمالة شبه ماهرة" }
                      ].map((item, i) => (
                        <div key={i} className={`flex items-center gap-3 group ${isAr ? "flex-row-reverse text-right" : ""}`}>
                          <div className="w-2 h-2 rounded-full bg-alfawad-primary group-hover:scale-150 transition-transform duration-300 flex-shrink-0" />
                          <span className="text-gray-700 font-bold uppercase text-[13px] tracking-tight group-hover:text-black transition-colors">
                            {isAr ? item.ar : item.en}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* <div className="mt-8 md:mt-12 bg-[#1c1c1c] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-10 rounded-sm">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-alfawad-primary flex items-center justify-center rotate-45 group hover:rotate-90 transition-transform duration-500">
                      <ShieldCheck className="w-8 h-8 md:w-12 md:h-12 text-white -rotate-45 group-hover:-rotate-90 transition-transform duration-500" />
                    </div>
                    <div className="text-white flex-1 text-center md:text-left">
                      <h4 className="text-xl md:text-2xl font-black uppercase mb-2 md:mb-4 tracking-tighter">Reliable Outsourcing</h4>
                      <p className="text-white/60 leading-relaxed font-bold text-sm md:text-base">
                        We ensure that our manpower solutions are cost-effective, reliable, and perfectly matched to your project’s technical requirements.
                      </p>
                    </div>
                  </div> */}
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
