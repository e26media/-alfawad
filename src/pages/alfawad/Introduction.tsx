import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import OverviewSidebar from "../../components/alfawad/OverviewSidebar";
import { useTranslation } from "react-i18next";

const Introduction = () => {
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
                {isAr ? "نظرة عامة" : "OVERVIEW"} <br /> {isAr ? "مقدمة" : "INTRODUCTION"}
              </h1>
              <div className="w-24 h-2 bg-white mb-8 mx-auto" />
              <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
                <Link to="/" className="hover:text-alfawad-accent transition-all duration-300">{isAr ? "الرئيسية" : "Home"}</Link>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <span className="text-white/70">{isAr ? "نظرة عامة" : "Overview"}</span>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <span className="text-white">{isAr ? "مقدمة" : "Introduction"}</span>
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
                    <span className="text-alfawad-primary font-black text-[14px] uppercase tracking-[0.4em] mb-2">{isAr ? "عن شركتنا" : "About Our Company"}</span>
                    <h2 className="text-[32px] md:text-[45px] font-black text-black leading-tight uppercase tracking-tighter">
                      {isAr ? "مقدمة عن الشركة" : "Company Introduction"}
                    </h2>
                  </div>

                  <p className="text-[18px] md:text-[20px] font-bold text-gray-900 leading-relaxed italic border-b border-gray-100 pb-8">
                    {isAr ? `"مؤسسة لمياء الخليج الاتحاد للمقاولات العامة هي مؤسسة مقاولات متنامية وموثوقة في المملكة العربية السعودية، متخصصة في خدمات الدعم الصناعي والإنشائي."` : `"Lamiya alkhaleej alittihad establishment for general contracting is a growing and trusted contracting organization in Saudi Arabia specializing in industrial and construction support services."`}
                  </p>

                  <div className="text-[#666666] leading-[36px] text-[18px] font-medium flex flex-col gap-6">
                    <p>
                      {isAr ? "منذ تأسيسنا، قمنا بتوسيع قدرات خدماتنا باستمرار لتلبية الطلب المتزايد في الصناعات الكبرى والمقاولين في جميع أنحاء المملكة. نحن معروفون بتقديم مصادر القوى العاملة، وتأجير المعدات، وخدمات دعم المشروع، ومساعدة الصيانة الصناعية والتوريد." : "Since our establishment, we have continuously expanded our service capabilities to meet the increasing demand of major industries and contractors across the Kingdom. We are known for delivering manpower outsourcing, equipment rental, project support services, industrial maintenance assistance, and construction material supply."}
                    </p>
                    
                    <p>
                      {isAr ? "تم تصميم عملياتنا للتعامل مع متطلبات المشاريع قصيرة وطويلة الأجل. نضمن جودة المخرجات من خلال القوى العاملة المدربة والإشراف المهني والامتثال الصارم للسلامة." : "Our operations are structured to handle both short-term and long-term project requirements. We ensure quality output through trained manpower, professional supervision, and strict safety compliance."}
                    </p>

                    <p>
                      {isAr ? "تشمل مناطق خدماتنا بشكل رئيسي المنطقة الشرقية (الخبر، الجبيل، الدمام) والمنطقة الوسطى (الرياض). من خلال قاعدة عمليات قوية وقوى عاملة ذات خبرة، ندعم المشاريع في المصانع الصناعية والمصافي والمنشآت البتروكيماوية وتطوير البنية التحتية." : "Our service areas mainly include Eastern Province (Al Khobar, Jubail, Dammam) and Central Region (Riyadh). With a strong operational base and experienced workforce, we support projects in industrial plants, refineries, petrochemical zones, infrastructure developments, and commercial construction sites."}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    <div className="bg-gray-50 p-10 border-t-4 border-alfawad-primary flex flex-col gap-4 group hover:bg-alfawad-primary transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full">
                       <h3 className="text-2xl font-black text-black  uppercase transition-colors">{isAr ? "قوة عاملة ماهرة" : "Skilled Workforce"}</h3>
                       <p className="text-gray-600  leading-relaxed transition-colors">
                         {isAr ? "نوفر مجموعة كبيرة من القوى العاملة المؤهلة بما في ذلك المهندسين والمشرفين والفنيين والمشغلين لتلبية الاحتياجات." : "We provide a large pool of qualified manpower including engineers, supervisors, technicians, operators, and labor categories to meet project-specific requirements."}
                       </p>
                    </div>
<div className="bg-gray-50 p-10 border-t-4 border-alfawad-primary flex flex-col gap-4 group hover:bg-alfawad-primary transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full">
                       <h3 className="text-2xl font-black text-black  uppercase transition-colors">{isAr ? "الالتزام بالسلامة" : "Safety Commitment"}</h3>
                                    <p className="text-gray-600  leading-relaxed transition-colors">
                         {isAr ? "السلامة هي قيمة أساسية. نحن نتبع إرشادات صارمة لضمان بيئة عمل آمنة وخالية من الحوادث." : "Safety is a core value. We follow strict HSE guidelines to ensure accident-free and compliant work environments."}
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





