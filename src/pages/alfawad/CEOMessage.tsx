import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import OverviewSidebar from "../../components/alfawad/OverviewSidebar";
import { useTranslation } from "react-i18next";

const CEOMessage = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <div className="flex flex-col min-h-screen bg-white font-muli">

      {/* Premium Header Banner Section */}
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
              {isAr ? "رسالة" : "CEO"} <br /> {isAr ? "الرئيس التنفيذي" : "MESSAGE"}
            </h1>
            <div className="w-24 h-2 bg-white mb-8 mx-auto" />
            <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
              <Link to="/industrial" className="hover:text-alfawad-accent transition-all duration-300">{isAr ? "الرئيسية" : "Home"}</Link>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="text-white/70">{isAr ? "نظرة عامة" : "Overview"}</span>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="text-white">{isAr ? "رسالة الرئيس التنفيذي" : "CEO Message"}</span>
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
                    <span className="text-alfawad-primary font-black text-[14px] uppercase tracking-[0.4em] mb-2">{isAr ? "قيادتنا الحكيمة" : "Our Visionary Leadership"}</span>
                    <h2 className="text-[32px] md:text-[45px] font-black text-black leading-tight uppercase tracking-tighter">
                      {isAr ? "رسالة الرئيس التنفيذي" : "CEO's Message"}
                    </h2>
                  </div>

                  <div className="flex flex-col gap-16 items-start">
                    
                    <div className="w-full flex flex-col gap-12 relative">
                      {/* Large Decorative Quote Icon */}
                      <div className="absolute -top-10 -left-6 text-[180px] text-alfawad-primary/5 font-serif select-none pointer-events-none lowercase">
                         “
                      </div>

                      <div className="relative z-10">
                        <p className="text-[24px] md:text-[32px] font-black text-black leading-tight italic mb-12 tracking-tighter">
                          {isAr ? `"في لمياء الخليج، نسعى للتميز التشغيلي والنمو الاستراتيجي، ونضمن أن كل مشروع يلبي أعلى معايير السلامة والجودة."` : `"At Lamiya Al Khaleej, we strive for operational excellence and strategic growth, ensuring every project meets the highest standards of safety and quality."`}
                        </p>

                        <div className="text-[#666666] leading-[36px] text-[18px] font-medium flex flex-col gap-8 max-w-4xl">
                          <p>
                            {isAr ? "إنه لمن دواعي سروري قيادة هذا الفريق المتفاني. تم تحديد رحلتنا من خلال قدرتنا على التكيف مع الاحتياجات المتغيرة للقطاع الصناعي دون المساس بقيمنا." : "It is my privilege to lead such a dedicated team at Lamiya Al Khaleej Al Ittehad. Our journey has been defined by our ability to adapt to the changing needs of the industrial sector while never compromising on our core values."}
                          </p>
                          <p>
                            {isAr ? "نحن نركز على الكفاءة التشغيلية ونشر القوى العاملة التقنية المتقدمة والمعدات. ونهدف إلى أن نكون الشريك الأكثر موثوقية للاعبين الصناعيين الكبار في المملكة." : "We focus on operational efficiency and the deployment of advanced technical manpower and equipment. By prioritizing local talent development and international best practices, we aim to be the most trusted partner for major industrial players in the Kingdom."}
                          </p>
                          <p>
                            {isAr ? "يُقاس نجاحنا برضا عملائنا وسلامة القوى العاملة لدينا. نحن ملتزمون بلعب دور مهم في رؤية المملكة 2030." : "Our success is measured by the satisfaction of our clients and the safety of our workforce. We are committed to playing a significant role in the Kingdom's Vision 2030 by delivering world-class contracting services and fostering sustainable industrial growth."}
                          </p>
                        </div>
                      </div>

                      <div className="mt-12 pt-12 border-t border-gray-100 w-full flex flex-col md:flex-row justify-between items-end gap-8">
                        <div className="flex flex-col gap-1">
                          <div className="text-[28px] font-black uppercase tracking-tighter text-black leading-none">{isAr ? "محمد نعمان حسين" : "Mohammed Nouman Hussain"}</div>
                          <div className="text-alfawad-primary font-black uppercase tracking-widest text-[12px] mt-2">{isAr ? "الرئيس التنفيذي" : "Chief Executive Officer"}</div>
                          <div className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">{isAr ? "مؤسسة لمياء الخليج الاتحاد للمقاولات العامة" : "Lamiya alkhaleej alittihad establishment for general contracting"}</div>
                        </div>
                        
                        {/* Decorative Signature Placeholder */}
                        <div className="opacity-20 grayscale scale-110">
                           <div className="font-serif text-[22px] italic border-b-2 border-black inline-block px-10 py-2">Mohammed Nouman Hussain</div>
                        </div>
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

export default CEOMessage;
