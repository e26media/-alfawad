import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import OverviewSidebar from "../../components/alfawad/OverviewSidebar";
import { useTranslation } from "react-i18next";

const ChairmanMessage = () => {
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
              {isAr ? "رسالة" : "CHAIRMAN"} <br /> {isAr ? "رئيس مجلس الإدارة" : "MESSAGE"}
            </h1>
            <div className="w-24 h-2 bg-white mb-8 mx-auto" />
            <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
              <Link to="/" className="hover:text-alfawad-accent transition-all duration-300">{isAr ? "الرئيسية" : "Home"}</Link>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="text-white/70">{isAr ? "نظرة عامة" : "Overview"}</span>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="text-white">{isAr ? "رسالة رئيس مجلس الإدارة" : "Chairman Message"}</span>
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
                    <span className="text-alfawad-primary font-black text-[14px] uppercase tracking-[0.4em] mb-2">{isAr ? "كلمة من القيادة" : "A Word From Leadership"}</span>
                    <h2 className="text-[32px] md:text-[45px] font-black text-black leading-tight uppercase tracking-tighter">
                      {isAr ? "رسالة رئيس مجلس الإدارة" : "Chairman's Message"}
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
                          {isAr ? `"مرحباً بكم في مؤسسة لمياء الخليج الاتحاد للمقاولات العامة. نحن فخورون بأن نكون مزود خدمة متنامٍ في المملكة العربية السعودية يقدم خدمات مقاولات ودعم صناعي عالية الجودة."` : `"Welcome to Lamiya Al Khaleej Al Ittihad General Contracting. We are proud to be a growing service provider in Saudi Arabia delivering high-quality contracting and industrial support services."`}
                        </p>

                        <div className="text-[#666666] leading-[36px] text-[18px] font-medium flex flex-col gap-8 max-w-4xl">
                          <p>
                            {isAr ? "لقد تأسست شركتنا برؤية واضحة: لتقديم حلول موثوقة لقطاع البناء والصناعة من خلال الجمع بين القوى العاملة الماهرة والموارد المعدات الحديثة ودعم المشاريع المهني." : "Our company was established with a clear vision: to provide reliable solutions to the construction and industrial sector by combining skilled manpower, modern equipment resources, and professional project support."}
                          </p>
                          <p>
                            {isAr ? "على مر السنين، اكتسبنا خبرة قيمة في خدمة العملاء في مختلف الصناعات وتحديداً في المنطقة الشرقية ومنطقة الرياض... وتستمر مسيرتنا بدعمكم." : "Over the years, we have gained valuable experience in serving clients across different industries, particularly in the Eastern Province and Riyadh region. Our growth has been possible because of our dedication to customer satisfaction, commitment to safety, and continuous improvement culture."}
                          </p>
                          <p>
                            {isAr ? "نحن نؤمن بأن كل مشروع يُبنى على الثقة. مهمتنا هي تعزيز العلاقات مع العملاء من خلال تقديم خدمات في الوقت المناسب." : "We believe every project is built on trust. Our mission is to strengthen client relationships by delivering timely services, maintaining quality standards, and ensuring safety at every stage of execution. As we continue to expand, we remain committed to innovation, workforce development, and maintaining international standards in all our operations."}
                          </p>
                        </div>
                      </div>

                      <div className="mt-12 pt-12 border-t border-gray-100 w-full flex flex-col md:flex-row justify-between items-end gap-8">
                        <div className="flex flex-col gap-1">
                          <div className="text-[28px] font-black uppercase tracking-tighter text-black leading-none">{isAr ? "أشرف البدن" : "Ashraf Al Badan"}</div>
                          <div className="text-alfawad-primary font-black uppercase tracking-widest text-[12px] mt-2">{isAr ? "رئيس مجلس الإدارة / العضو المنتدب" : "Chairman / Managing Director"}</div>
                          <div className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">{isAr ? "مؤسسة لمياء الخليج الاتحاد للمقاولات العامة" : "Lamiya alkhaleej alittihad establishment for general contracting"}</div>
                        </div>
                        
                        {/* Decorative Signature Placeholder */}
                        <div className="opacity-20 grayscale scale-110">
                           <div className="font-serif text-[22px] italic border-b-2 border-black inline-block px-10 py-2">Ashraf Al Badan</div>
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

export default ChairmanMessage;




