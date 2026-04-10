import { Link } from "react-router-dom";
import { ChevronRight, CheckCircle, ShieldCheck, Award, Zap } from "lucide-react";
import OverviewSidebar from "../../components/alfawad/OverviewSidebar";
import { useTranslation } from "react-i18next";

const QualityPolicy = () => {
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
              {isAr ? "سياسة" : "QUALITY"} <br /> {isAr ? "الجودة" : "POLICY"}
            </h1>
            <div className="w-24 h-2 bg-white mb-8 mx-auto" />
            <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
              <Link to="/" className="hover:text-alfawad-accent transition-all duration-300">{isAr ? "الرئيسية" : "Home"}</Link>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="text-white/70">{isAr ? "نظرة عامة" : "Overview"}</span>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="text-white">{isAr ? "سياسة الجودة" : "Quality Policy"}</span>
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
                    <span className="text-alfawad-primary font-black text-[14px] uppercase tracking-[0.4em] mb-2">{isAr ? "معاييرنا" : "Our Standard"}</span>
                    <h2 className="text-[32px] md:text-[45px] font-black text-black leading-tight uppercase tracking-tighter">
                      {isAr ? "سياسة الجودة" : "Quality Policy"}
                    </h2>
                  </div>

                  <p className="text-[20px] md:text-[22px] font-bold text-black leading-relaxed italic border-b border-gray-100 pb-8">
                    {isAr ? "في لمياء الخليج الاتحاد، الجودة ليست مجرد قسم، بل هي ثقافة." : "At Lamiya Al Khaleej Al Ittehad  General Contracting, quality is not just a department—it is a culture."}
                  </p>

                  <div className="text-[#666666] leading-[36px] text-[18px] font-medium flex flex-col gap-6">
                    <p>
                      {isAr ? "نحن ملتزمون بتقديم خدمات استثنائية." : "We are committed to providing high-quality contracting services that meet and exceed customer expectations. Our quality policy ensures that all our operations are carried out with efficiency, reliability, and compliance with industry standards."}
                    </p>
                    <p>
                      {isAr ? "نحن نحافظ على ضوابط جودة صارمة طوال دورة حياة المشروع. هدفنا هو ضمان تلقي كل عميل لخدمات احترافية متسقة." : "We maintain strict quality control measures throughout the project lifecycle, from mobilization to execution and final delivery. Our goal is to ensure that every client receives consistent and professional service."}
                    </p>
                  </div>

                  <h3 className="text-2xl font-black text-black uppercase tracking-tighter mt-8">{isAr ? "التزامات الجودة لدينا" : "Our Quality Commitments"}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      isAr ? "تلبية مواصفات العميل" : "Meeting Customer Specifications",
                      isAr ? "التحسين المستمر للعمليات" : "Continuous Process Improvement",
                      isAr ? "الإشراف المناسب على الموقع" : "Proper Site Supervision",
                      isAr ? "عمالة ماهرة ومدربة" : "Skilled & Trained Manpower",
                      isAr ? "صيانة دورية للمعدات" : "Regular Equipment Maintenance",
                      isAr ? "الامتثال للأنظمة السعودية" : "Compliance with Saudi Regulations"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 bg-gray-50 p-6 border-l-4 border-alfawad-primary group hover:bg-alfawad-primary transition-all duration-500">
                        <CheckCircle className="w-6 h-6 text-alfawad-primary group-hover:text-white transition-colors" />
                        <span className="text-black group-hover:text-white font-black uppercase text-sm tracking-tighter transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 bg-black p-12 flex flex-col md:flex-row items-center gap-10">
                    <div className="text-white flex-1">
                      <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter text-alfawad-primary">{isAr ? "جودة مضمونة" : "Quality Guaranteed"}</h4>
                      <p className="text-white/60 leading-relaxed font-bold">
                        {isAr ? "نحن نؤمن بأن تحسين الجودة هو رحلة مستمرة. هدفنا بناء علاقات طويلة المدى." : "We believe quality improvement is a continuous journey. Our objective is to build long-term relationships by delivering superior performance and consistent service reliability."}
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




