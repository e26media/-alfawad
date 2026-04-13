import { Link } from "react-router-dom";
import { ChevronRight, Shield, Sparkles, Droplets, Link2, Plus, Briefcase, BarChart } from "lucide-react";
import ServiceSidebar from "../../components/alfawad/ServiceSidebar";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ProjectManagement = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const [activeTab, setActiveTab] = useState("Management");

  return (
    <div className="flex flex-col min-h-screen bg-white font-muli">

      {/* Premium Header Banner Section - Refined for Vision 2030 Design */}
      <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[#b68a41]/75 z-10" />
        <img
          src="/images/industrial/hero-1.png"
          alt="Project Management Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] relative z-20 flex flex-col items-center justify-center text-center pt-20">
          <div className="w-full text-white">
            <h1 className="text-[45px] md:text-[75px] font-black leading-[0.9] mb-6 uppercase tracking-tighter text-white drop-shadow-2xl">
              {isAr ? "إدارة" : "PROJECT"} <br /> {isAr ? "المشاريع" : "MANAGEMENT"}
            </h1>
            <div className="w-24 h-2 bg-white mb-8 mx-auto" />
            <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
              <Link to="/" className="hover:text-alfawad-accent transition-all duration-300">{isAr ? "الرئيسية" : "Home"}</Link>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="text-white/70">{isAr ? "الخدمات" : "Services"}</span>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="text-white">{isAr ? "إدارة المشاريع" : "Project Management"}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f4f5f6]">
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-16">

            <ServiceSidebar />

            <div className="w-full lg:w-3/4 flex flex-col gap-12">
              <div className="bg-white p-8 md:p-16 shadow-xl border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-alfawad-primary/5 rounded-bl-full -mr-16 -mt-16 transition-all duration-700 group-hover:scale-150" />

                <div className="flex flex-col gap-8">
                  <div className="flex flex-col border-l-8 border-alfawad-primary pl-8">
                    <span className="text-alfawad-primary font-black text-[14px] uppercase tracking-[0.4em] mb-2">{isAr ? "التركيز على التسليم" : "Delivery Focused"}</span>
                    <h2 className="text-[32px] md:text-[45px] font-black text-black leading-tight uppercase tracking-tighter">
                      {isAr ? "إدارة المشاريع والإشراف" : "Project Management & Supervision"}
                    </h2>
                  </div>

                  <p className="text-[20px] md:text-[22px] font-bold text-black leading-relaxed italic border-b border-gray-100 pb-8">
                    {isAr ? "نقدم في لمياء الخليج خدمات إدارة المشاريع والإشراف المهني لضمان الانتهاء منها بكفاءة وأمان." : "At Lamiya Al Khaleej Al Ittihad  General Contracting, we offer professional project management and site supervision services to ensure that every project is completed with efficiency, safety, and quality."}
                  </p>

                  <div className="text-[#666666] leading-[36px] text-[18px] font-medium flex flex-col gap-6">
                    <p>
                      {isAr ? "نحن ندرك أن نجاح المشروع يعتمد على التنسيق والتحكم." : "We understand that project success depends on coordination and control. Our management teams work closely with clients and contractors to monitor site activities, track progress, and ensure that work is being executed according to project specifications and timelines."}
                    </p>
                  </div>

                  {/* Quality List */}
                  <div className="mt-4 bg-gray-50 p-10 border border-gray-100">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 text-alfawad-primary">{isAr ? "خدمات الإدارة الأساسية" : "Core Management Services"}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                      {[
                        isAr ? "التخطيط والجدولة" : "Planning & Scheduling",
                        isAr ? "الإشراف على الموقع والمراقبة" : "Site Supervision & Progress Monitoring",
                        isAr ? "مراقبة الجودة والتفتيش" : "Quality Control & Inspection",
                        isAr ? "إدارة الموارد" : "Resource Management",
                        isAr ? "إدارة السلامة" : "Safety Management (HSE Oversight)",
                        isAr ? "الاتصال بالعملاء والإبلاغ" : "Client Liaison & Reporting"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full bg-alfawad-primary/10 flex items-center justify-center shrink-0 mt-1">
                            <div className="w-2 h-2 rounded-full bg-alfawad-primary" />
                          </div>
                          <p className="text-gray-600 font-bold uppercase tracking-tight text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 bg-black p-12 flex flex-col md:flex-row items-center gap-10">
                    <BarChart className="w-20 h-20 text-alfawad-primary" />
                    <div className="text-white flex-1">
                      <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter">{isAr ? "مدفوعة بالكفاءة" : "Efficiency Driven"}</h4>
                      <p className="text-white/60 leading-relaxed font-bold">
                        {isAr ? "نهجنا هو تقليل المخاطر وزيادة المخرجات من خلال إشراف منظم." : "Our approach is to minimize risks and maximize output through structured supervision and efficient project control methods."}
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

export default ProjectManagement;
