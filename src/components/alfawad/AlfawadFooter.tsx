import laklogo from "@/assets/laklogo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUp, Phone, Mail, MapPin, ChevronRight, Award, ShieldCheck, Globe, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";



const AlfawadFooter = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative font-muli overflow-hidden border-t border-gray-100">
      {/* Floating Actions */}
      <div className="fixed bottom-24 sm:bottom-8 end-4 sm:end-8 z-[70] flex flex-col gap-4">
        {/* <motion.a
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/966 XXXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="w-16 h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-[0_20px_50px_rgba(37,211,102,0.3)] transition-all cursor-pointer group"
        >
          <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
        </motion.a> */}
        <motion.button
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="w-12 h-12 sm:w-16 sm:h-16 bg-black text-white rounded-2xl flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all group"
        >
          <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest leading-none mb-1">{isAr ? "الأعلى" : "Top"}</span>
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      </div>

      <div className="flex flex-col lg:flex-row min-h-[600px] bg-white">
        
        {/* Left Side: Professional Navigation & Identity */}
        <div className="lg:w-[70%] pt-20 pb-16 px-6 sm:px-12 lg:pl-24 lg:pr-16 relative bg-white border-b lg:border-b-0 lg:border-r border-gray-100">
          <div className="flex flex-col h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
              
              {/* Column 1: Identity */}
              <div className="flex flex-col gap-10">
                <Link to="/industrial" className="block w-full max-w-[240px]">
                  <img src={laklogo} alt="LAMIYA AL KHALEEJ AL ITTEHAD" className="w-full h-auto object-contain" />
                </Link>
                <p className="text-[14px] leading-relaxed text-gray-400 font-medium uppercase tracking-wider">
                  {isAr 
                    ? "الرائدة في تقديم خدمات الدعم الصناعي والإنشائي المتكاملة عبر المملكة العربية السعودية." 
                    : "A leading multi-disciplinary industrial services organization providing turn-key engineering & construction solutions across KSA."}
                </p>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4 group">
                    <ShieldCheck className="w-6 h-6 text-alfawad-primary transition-transform group-hover:scale-110" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-black leading-none mb-1">{isAr ? "أعمال آمنة" : "Secure Business"}</span>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 leading-none">{isAr ? "عمليات آمنة" : "Safe Operations"}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <Globe className="w-6 h-6 text-alfawad-primary transition-transform group-hover:scale-110" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-black leading-none mb-1">{isAr ? "تواجد محلي" : "Local Presence"}</span>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 leading-none">{isAr ? "في جميع أنحاء المملكة" : "Kingdom Wide"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2: Quick Navigation */}
              <div className="flex flex-col">
                <h4 className="text-[12px] font-black uppercase tracking-[0.4em] text-black mb-10 pb-4 border-b-2 border-alfawad-primary w-max">
                  {isAr ? "روابط سريعة" : "Navigation"}
                </h4>
                <div className="flex flex-col gap-4">
                  {[
                    { label: isAr ? "الرئيسية" : "Home", path: "/industrial" },
                    { label: isAr ? "نظرة عامة" : "Corporate Overview", path: "/industrial/overview" },
                    { label: isAr ? "مقدمة الشركة" : "Introduction", path: "/industrial/introduction" },
                    { label: isAr ? "الرؤية والمهمة" : "Vision & Mission", path: "/industrial/vision-mission" },
                    { label: isAr ? "اتصل بنا" : "Contact Us", path: "/industrial/contact" },
                  ].map((link) => (
                    <Link 
                      key={link.path} 
                      to={link.path} 
                      className="text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-alfawad-primary transition-all flex items-center gap-3 group"
                    >
                      <ChevronRight className="w-3 h-3 text-alfawad-primary transition-transform group-hover:translate-x-1" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Column 3: Industrial Divisions */}
              <div className="flex flex-col">
                <h4 className="text-[12px] font-black uppercase tracking-[0.4em] text-black mb-10 pb-4 border-b-2 border-alfawad-primary w-max">
                  {isAr ? "أقسامنا" : "Divisions"}
                </h4>
                <div className="flex flex-col gap-4">
                  {[
                    { label: isAr ? "خدمات المواد" : "Material Services", path: "/industrial/services/material-service" },
                    { label: isAr ? "القوى العاملة الفنية" : "Technical Manpower", path: "/industrial/services/technical-manpower-service" },
                    { label: isAr ? "المعدات الثقيلة" : "Heavy Equipment", path: "/industrial/services/heavy-equipment-service" },
                    { label: isAr ? "دعم المشاريع" : "Project Support", path: "/industrial/services/project-support" },
                    { label: isAr ? "إدارة المشاريع" : "Project Management", path: "/industrial/services/project-management" },
                  ].map((link) => (
                    <Link 
                      key={link.path} 
                      to={link.path} 
                      className="text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-alfawad-primary transition-all flex items-center gap-3 group"
                    >
                      <ChevronRight className="w-3 h-3 text-alfawad-primary transition-transform group-hover:translate-x-1" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            <div className="mt-auto flex flex-wrap items-center gap-10 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all pt-10 border-t border-gray-50">
               <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-alfawad-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black italic">Quality Management Excellence</span>
               </div>
               <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-alfawad-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black italic">HSE Integrated Standards</span>
               </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Hub */}
        <div className="lg:w-[30%] bg-black text-white relative pt-20 pb-16 px-6 sm:px-12 lg:px-12 overflow-hidden">
          {/* Decorative Pattern & Gradients */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-alfawad-primary rounded-full blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[100px] border-white/5 rounded-full" />
          </div>

          <div className="relative z-10 h-full flex flex-col">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-16">
              
              {/* Specialized Solutions */}
        

              {/* Contact Data */}
              <div>
                <h4 className="text-[24px] font-black uppercase tracking-tighter mb-12 italic border-l-8 border-white pl-6">
                  {isAr ? "المركز" : "Corporate"} <span className="text-alfawad-primary">{isAr ? "المشترك" : "Hub"}</span>
                </h4>
                <div className="space-y-10">
                  <div className="group flex flex-col sm:flex-row items-start gap-6">
                    <div className="w-14 h-14 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-alfawad-primary group-hover:text-black transition-all">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-alfawad-primary leading-none block mb-2">{isAr ? "الموقع" : "Location"}</span>
                      <p className="text-[14px] font-bold uppercase tracking-widest leading-relaxed text-white/50">
                        {isAr ? "الجبيل، المملكة العربية السعودية" : "Al Jubail, KSA"}
                      </p>
                    </div>
                  </div>

                  <div className="group flex flex-col sm:flex-row items-start gap-6">
                    <div className="w-14 h-14 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-alfawad-primary group-hover:text-black transition-all">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="space-y-6">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-alfawad-primary leading-none block">{isAr ? "خطوط مباشرة" : "Direct Lines"}</span>
                      
                      <div className="grid gap-8">
                        <div className="flex flex-col">
                          <span className="text-[18px] font-black uppercase tracking-tighter text-white leading-tight">{isAr ? "أشرف البدن" : "Ashraf Al badan"}</span>
                          <a href="tel:+966507077611" className="text-[13px] font-bold uppercase tracking-widest text-alfawad-primary hover:text-white transition-colors break-all" dir="ltr">+966 50 707 7611</a>
                        </div>

                        <div className="flex flex-col">
                          <span className="text-[18px] font-black uppercase tracking-tighter text-white leading-tight">{isAr ? "أحمد سهيل" : "Ahamed suhail"}</span>
                          <div className="flex flex-col gap-1">
                            <a href="tel:+966510304627" className="text-[13px] font-bold uppercase tracking-widest text-alfawad-primary hover:text-white transition-colors break-all" dir="ltr">+966 51 030 4627</a>
                            <a href="tel:+966566567518" className="text-[13px] font-bold uppercase tracking-widest text-alfawad-primary hover:text-white transition-colors break-all" dir="ltr">+966 56 656 7518</a>
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <span className="text-[18px] font-black uppercase tracking-tighter text-white leading-tight">{isAr ? "صفوان" : "Safwan"}</span>
                          <a href="tel:+966583769845" className="text-[13px] font-bold uppercase tracking-widest text-alfawad-primary hover:text-white transition-colors break-all" dir="ltr">+966 58 376 9845</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group flex flex-col sm:flex-row items-start gap-6">
                    <div className="w-14 h-14 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-alfawad-primary group-hover:text-black transition-all">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-alfawad-primary leading-none block">{isAr ? "رسائل البريد الإلكتروني" : "Corporate Emails"}</span>
                      <div className="flex flex-col gap-3">
                        <a href="mailto:ashrafalbadan@lamiyaalkhaleej.com" className="text-[12px] font-bold uppercase tracking-widest text-white/50 hover:text-alfawad-primary transition-colors block break-all">ashrafalbadan@lamiyaalkhaleej.com</a>
                        <a href="mailto:ahamedsuhail@lamiyaalkhaleej.com" className="text-[12px] font-bold uppercase tracking-widest text-white/50 hover:text-alfawad-primary transition-colors block break-all">ahamedsuhail@lamiyaalkhaleej.com</a>
                        <a href="mailto:info@lamiyaalkhaleej.com" className="text-[12px] font-bold uppercase tracking-widest text-white/50 hover:text-alfawad-primary transition-colors block break-all">info@lamiyaalkhaleej.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Info */}
            <div className="mt-auto pt-24">
               <div className="flex flex-col sm:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
                  
                  <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20">
                    &copy; {new Date().getFullYear()} {isAr ? "لمياء الخليج الاتحاد. جميع الحقوق محفوظة." : "LAMIYA AL KHALEEJ AL ITTEHAD. All Rights Reserved."}
                  </p>
                 
               </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AlfawadFooter;
