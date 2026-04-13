import { Link } from "react-router-dom";
import { Download, ChevronRight, Users, Briefcase, Mail, Send, Award, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Brochure = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  return (
  <div className="flex flex-col min-h-screen bg-white font-muli">
    {/* Premium Header Banner Section - Refined for Vision 2030 Design */}
    <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-alfawad-primary/75 z-10" />
      <img
        src="/images/industrial/hero-1.png"
        alt="Brochure Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] relative z-20 flex flex-col items-center justify-center text-center pt-32 md:pt-48">
        <div className="w-full text-white">
          <h1 className="text-[45px] md:text-[75px] font-black leading-[0.9] mb-6 uppercase tracking-tighter text-white drop-shadow-2xl">
            {isAr ? "الكتيب" : "COMPANY"} <br /> {isAr ? "التعريفي" : "BROCHURE"}
          </h1>
          <div className="w-24 h-2 bg-white mb-8 mx-auto" />
          <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
            <Link to="/" className="hover:text-alfawad-accent transition-all duration-300">{isAr ? "الرئيسية" : "Home"}</Link>
            <ChevronRight className="w-4 h-4 text-white/50" />
            <span className="text-white">{isAr ? "الكتيب" : "Brochure"}</span>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-[#f4f5f6]">
      <div className="container mx-auto px-0 lg:px-12 max-w-[1000px]">
        <div className="bg-white p-12 md:p-20 shadow-xl border border-gray-100 flex flex-col items-center text-center gap-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-alfawad-primary/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />
          <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center text-alfawad-primary shadow-2xl">
            <FileText className="w-10 h-10" />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-[32px] md:text-[40px] font-black text-black uppercase tracking-tighter leading-none">{isAr ? "تحميل ملف الشركة" : "Download Corporate Profile"}</h2>
            <p className="text-[#666666] text-lg font-medium leading-relaxed max-w-2xl">
              {isAr ? "احصل على نظرة شاملة على قدراتنا المتعددة وأسطولنا الحديث وفلسفات إدارة المشاريع." : "Get a comprehensive overview of our multi-disciplinary capabilities, modern fleet strength, and specialized project management philosophies in our official corporate brochure."}
            </p>
          </div>
          <a href="/lamiya-profile.pdf" download target="_blank" className="flex items-center justify-center gap-4 bg-black hover:bg-alfawad-primary text-white font-black uppercase tracking-widest py-6 px-8 md:px-12 rounded mt-4 transition-all shadow-2xl hover:-translate-y-1 w-full md:w-auto text-sm md:text-base">
            <Download className="w-8 h-8 md:w-6 md:h-6 shrink-0" /><span>{isAr ? "تحميل الكتيب" : "Lamiya Al Khaleej Al Ittihad  PROFILE 2026 (PDF)"}</span>
          </a>
        </div>
      </div>
    </section>
  </div>
  );
};

export const ClientsGallery = () => {
  const clients = [
    { name: "Alfanar", logo: "https://alfawad.com/images/client-logo/alfanar.jpg" },
    { name: "CTCI", logo: "https://alfawad.com/images/client-logo/CTCI.jpg" },
    { name: "Daeha", logo: "https://alfawad.com/images/client-logo/daeha.jpg" },
    { name: "Daelim", logo: "https://alfawad.com/images/client-logo/daelim.jpg" },
    { name: "Daewoo", logo: "https://alfawad.com/images/client-logo/daewoo.jpg" },
    { name: "GS E&C", logo: "https://alfawad.com/images/client-logo/gs-E&C.jpg" },
    { name: "Hyundai", logo: "https://alfawad.com/images/client-logo/hyundai.jpg" },
    { name: "Meedco", logo: "https://alfawad.com/images/client-logo/meedco.jpg" },
    { name: "Nesma Trading", logo: "https://alfawad.com/images/client-logo/nesma-trading.jpg" },
    { name: "Olayan", logo: "https://alfawad.com/images/client-logo/olayan.jpg" },
    { name: "Petro Rabigh", logo: "https://alfawad.com/images/client-logo/petro-rabigh.jpg" },
    { name: "Power China", logo: "https://alfawad.com/images/client-logo/power%20china.jpg" },
    { name: "SABIC", logo: "https://alfawad.com/images/client-logo/SABIC.jpg" },
    { name: "Saudi Aramco", logo: "https://alfawad.com/images/client-logo/saudi-aramco.jpg" },
    { name: "Saudi Electricity", logo: "https://alfawad.com/images/client-logo/Saudi-electricity.jpg" },
    { name: "Sepco", logo: "https://alfawad.com/images/client-logo/sepco.jpg" },
    { name: "Sungchang", logo: "https://alfawad.com/images/client-logo/sungchang.jpg" },
    { name: "TCC-1", logo: "https://alfawad.com/images/client-logo/TCC-1.jpg" },
    { name: "Akon", logo: "https://alfawad.com/images/client-logo/akon.jpg" },
    { name: "Hadeed", logo: "https://alfawad.com/images/client-logo/hadeed.jpg" },
  ];

  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <div className="flex flex-col min-h-screen bg-white font-muli">
      {/* Premium Header Banner Section - Refined for Vision 2030 Design */}
      <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-alfawad-primary/75 z-10" />
        <img
          src="/images/industrial/hero-1.png"
          alt="Clients Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] relative z-20 flex flex-col items-center justify-center text-center pt-32 md:pt-48">
          <div className="w-full text-white">
            <h1 className="text-[45px] md:text-[75px] font-black leading-[0.9] mb-6 uppercase tracking-tighter text-white drop-shadow-2xl">
              {isAr ? "عملاؤنا" : "OUR"} <br /> {isAr ? "" : "CLIENTS"}
            </h1>
            <div className="w-24 h-2 bg-white mb-8 mx-auto" />
            <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
              <Link to="/" className="hover:text-alfawad-accent transition-all duration-300">{isAr ? "الرئيسية" : "Home"}</Link>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="text-white">{isAr ? "العملاء" : "Clients"}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f4f5f6]">
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">
          <div className="text-center mb-20 flex flex-col items-center">
            <span className="text-alfawad-primary font-black text-[14px] uppercase tracking-[0.4em] mb-4">{isAr ? "شراكة مع القادة" : "Partnering with Leaders"}</span>
            <h2 className="text-[36px] md:text-[55px] font-black text-black uppercase tracking-tighter leading-none mb-6">
              {isAr ? "عملائنا المحترفون" : "Our Professional Clients"}
            </h2>
            <div className="w-24 h-1 bg-gray-300" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {clients.map((client, i) => (
              <div key={i} className="bg-white h-52 shadow-sm border border-gray-100 flex flex-col items-center justify-center p-6 group hover:shadow-2xl hover:border-alfawad-primary transition-all duration-500 cursor-pointer text-center gap-4 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
                <div className="w-full h-24 flex items-center justify-center relative z-10">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col items-center gap-2 relative z-10">
                  <div className="w-8 h-[2px] bg-gray-200 group-hover:w-16 group-hover:bg-alfawad-primary transition-all duration-500" />
                  <span className="font-black text-[#555555] group-hover:text-black text-[13px] tracking-[0.15em] uppercase transition-colors duration-500">{client.name}</span>
                </div>

                {/* Decorative background element */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-alfawad-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const Enquiry = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  return (
  <div className="flex flex-col min-h-screen bg-white font-muli">
    {/* Premium Header Banner Section - Refined for Vision 2030 Design */}
    <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-alfawad-primary/75 z-10" />
      <img
        src="/images/industrial/hero-1.png"
        alt="Enquiry Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] relative z-20 flex flex-col items-center justify-center text-center pt-32 md:pt-48">
        <div className="w-full text-white">
          <h1 className="text-[45px] md:text-[75px] font-black leading-[0.9] mb-6 uppercase tracking-tighter text-white drop-shadow-2xl">
            {isAr ? "تواصل" : "GET IN"} <br /> {isAr ? "معنا" : "TOUCH"}
          </h1>
          <div className="w-24 h-2 bg-white mb-8 mx-auto" />
          <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
            <Link to="/" className="hover:text-alfawad-accent transition-all duration-300">{isAr ? "الرئيسية" : "Home"}</Link>
            <ChevronRight className="w-4 h-4 text-white/50" />
            <span className="text-white">{isAr ? "استفسار" : "Enquiry"}</span>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-[#f4f5f6]">
      <div className="container mx-auto px-4 lg:px-12 max-w-[1000px]">
        <div className="bg-white p-12 md:p-20 shadow-2xl border border-gray-100 relative">
          <div className="flex flex-col border-l-8 border-alfawad-primary pl-8 mb-12">
            <span className="text-alfawad-primary font-black text-[14px] uppercase tracking-[0.4em] mb-2">{isAr ? "كن شريكنا" : "Partner with us"}</span>
            <h2 className="text-[32px] md:text-[45px] font-black text-black leading-tight uppercase tracking-tighter">{isAr ? "إرسال استفسار" : "Submit Enquiry"}</h2>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <label className="text-[12px] font-black text-gray-500 uppercase tracking-widest">{isAr ? "الاسم الكامل" : "Full Name"}</label>
              <input type="text" className="bg-gray-50 border-b-2 border-gray-200 p-4 focus:border-alfawad-primary focus:outline-none font-bold transition-all" placeholder={isAr ? "أدخل اسمك" : "Enter your name"} />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[12px] font-black text-gray-500 uppercase tracking-widest">{isAr ? "اسم الشركة" : "Company Name"}</label>
              <input type="text" className="bg-gray-50 border-b-2 border-gray-200 p-4 focus:border-alfawad-primary focus:outline-none font-bold transition-all" placeholder={isAr ? "مؤسستك" : "Your organization"} />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[12px] font-black text-gray-500 uppercase tracking-widest">{isAr ? "البريد الإلكتروني" : "Email Address"}</label>
              <input type="email" className="bg-gray-50 border-b-2 border-gray-200 p-4 focus:border-alfawad-primary focus:outline-none font-bold transition-all" placeholder="email@example.com" />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[12px] font-black text-gray-500 uppercase tracking-widest">{isAr ? "الخدمة المطلوبة" : "Service Interested"}</label>
              <select className="bg-gray-50 border-b-2 border-gray-200 p-4 focus:border-alfawad-primary focus:outline-none font-bold transition-all appearance-none">
                <option>{isAr ? "مصادر المواد" : "Material Sourcing"}</option>
                <option>{isAr ? "القوى العاملة الفنية" : "Technical Manpower"}</option>
                <option>{isAr ? "المعدات الثقيلة" : "Heavy Equipment"}</option>
                <option>{isAr ? "دعم المشروع" : "Project Support"}</option>
               
              </select>
            </div>
            <div className="flex flex-col gap-3 md:col-span-2">
              <label className="text-[12px] font-black text-gray-500 uppercase tracking-widest">{isAr ? "متطلبات المشروع" : "Project Requirements"}</label>
              <textarea rows={5} className="bg-gray-50 border-b-2 border-gray-200 p-4 focus:border-alfawad-primary focus:outline-none font-bold transition-all resize-none" placeholder={isAr ? "صف احتياجات مشروعك..." : "Describe your project needs..."} />
            </div>
            <div className="md:col-span-2 pt-4">
              <button className="bg-black text-white px-12 py-5 font-black uppercase text-sm tracking-[0.2em] hover:bg-alfawad-primary transition-all shadow-xl flex items-center gap-4 group">
                {isAr ? "إرسال الاستفسار" : "Send Enquiry"} <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
  );
};

export const Career = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  return (
  <div className="flex flex-col min-h-screen bg-white font-muli">
    {/* Premium Header Banner Section - Refined for Vision 2030 Design */}
    <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-alfawad-primary/75 z-10" />
      <img
        src="/images/industrial/hero-1.png"
        alt="Career Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] relative z-20 flex flex-col items-center justify-center text-center pt-32 md:pt-48">
        <div className="w-full text-white">
          <h1 className="text-[45px] md:text-[75px] font-black leading-[0.9] mb-6 uppercase tracking-tighter text-white drop-shadow-2xl">
            {isAr ? "انضم إلى" : "JOIN OUR"} <br /> {isAr ? "فريقنا" : "TEAM"}
          </h1>
          <div className="w-24 h-2 bg-white mb-8 mx-auto" />
          <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
            <Link to="/" className="hover:text-alfawad-accent transition-all duration-300">{isAr ? "الرئيسية" : "Home"}</Link>
            <ChevronRight className="w-4 h-4 text-white/50" />
            <span className="text-white">{isAr ? "الوظائف" : "Careers"}</span>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-[#f4f5f6]">
      <div className="container mx-auto px-4 lg:px-12 max-w-[1200px]">
        <div className="flex flex-col gap-16">
          <div className="text-center flex flex-col items-center">
            <span className="text-alfawad-primary font-black text-[14px] uppercase tracking-[0.4em] mb-4">{isAr ? "بناء المستقبل" : "Building Futures"}</span>
            <h2 className="text-[36px] md:text-[55px] font-black text-black uppercase tracking-tighter leading-none mb-6">{isAr ? "تقدم في حياتك المهنية" : "Drive Your Career Forward"}</h2>
            <p className="text-[#666666] text-xl font-medium max-w-3xl leading-relaxed">{isAr ? "تبحث مؤسسة لمياء الخليج دائمًا عن محترفين يسعون للتميز." : "Lamiya alkhaleej alittihad establishment for general contracting is constantly looking for dedicated professionals who thrive on challenge and operational excellence."}</p>
          </div>

          <div className="bg-black text-white p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border-l-[12px] border-alfawad-primary">
            <div className="flex flex-col gap-2">
              <span className="text-alfawad-primary font-black uppercase tracking-[0.2em] text-sm">{isAr ? "التوظيف الآن" : "Now Hiring"}</span>
              <h3 className="text-2xl font-black uppercase tracking-tighter">{isAr ? "مسؤولو السلامة | مفتشو الجودة | أخصائي التجهيز" : "HSE Officers | QC Inspectors | Rigger Specialists"}</h3>
            </div>
            <Link to="/alfawad/contact" className="bg-white text-black px-10 py-4 font-black uppercase text-xs tracking-widest hover:bg-alfawad-primary hover:text-white transition-all whitespace-nowrap">{isAr ? "قدم اليوم" : "Apply Today"}</Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-12 md:p-20 shadow-xl border border-gray-100 relative overflow-hidden group">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col border-l-8 border-alfawad-primary pl-8">
                <h3 className="text-[28px] font-black text-black uppercase tracking-tighter">{isAr ? "إرسال الطلب" : "Submit Application"}</h3>
              </div>

              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em]">{isAr ? "الاسم الكامل" : "Full Name"}</label>
                    <input type="text" className="bg-gray-50 border-b-2 border-gray-200 p-3 focus:border-alfawad-primary focus:outline-none font-bold" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em]">{isAr ? "رقم الاتصال" : "Contact No."}</label>
                    <input type="text" className="bg-gray-50 border-b-2 border-gray-200 p-3 focus:border-alfawad-primary focus:outline-none font-bold" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em]">{isAr ? "طلب لوظيفة" : "Application For Position"}</label>
                  <input type="text" className="bg-gray-50 border-b-2 border-gray-200 p-3 focus:border-alfawad-primary focus:outline-none font-bold" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em]">{isAr ? "إرفاق السيرة الذاتية" : "Attach CV (PDF Only)"}</label>
                  <input type="file" className="bg-gray-50 border-dashed border-2 border-gray-200 p-8 text-sm font-bold text-gray-400 text-center cursor-pointer hover:border-alfawad-primary transition-all" />
                </div>
                <button className="bg-black text-white px-12 py-5 font-black uppercase text-sm tracking-[0.2em] hover:bg-alfawad-primary transition-all shadow-xl">
                  {isAr ? "إرسال" : "Submit Resume"}
                </button>
              </div>
            </div>

            <div className="bg-gray-900 p-12 text-white flex flex-col justify-center items-center text-center gap-8 relative">
              <div className="w-20 h-20 bg-alfawad-primary rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-[26px] font-black uppercase tracking-tighter">{isAr ? "التقديم المباشر" : "Direct Submission"}</h3>
              <p className="text-white/60 font-bold leading-relaxed">
                {isAr ? "تجنب الانتظار. أرسل سيرتك الذاتية الشاملة مباشرة." : "Avoid the wait. Forward your comprehensive CV packet directly to our strategic human resources mailbox."}
              </p>
              <a href="mailto:info@lamiyaalkhaleej.com" className="text-alfawad-primary font-black text-[14px] sm:text-[20px]  tracking-tight hover:text-white transition-colors border-b-2 border-alfawad-primary pb-1">info@lamiyaalkhaleej.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};




