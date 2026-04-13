import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star, Sparkles, Clock, ShieldCheck, BadgeCheck, Wrench, Bug, Droplets, Fan, Sofa, Smartphone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { serviceDetails } from "@/lib/services";
import { useTranslation } from "react-i18next";

const ServiceDetail = () => {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  // If no slug, check current pathname for direct matches (e.g. /ac-cleaning)
  const currentPath = window.location.pathname.replace(/^\//, '');
  const finalSlug = slug || currentPath;

  const service = serviceDetails.find((s) => s.slug === finalSlug);

  if (!service) {
    return (
      <div className="pt-40 pb-20 font-muli text-center container mx-auto px-4 min-h-screen">
        <h1 className="text-3xl font-black text-black mb-8 uppercase tracking-tighter">{isAr ? "الخدمة غير موجودة" : "Service not found"}</h1>
        <Link
          to="/services"
          className="bg-black text-white px-10 py-4 font-black uppercase tracking-widest text-sm hover:bg-alfawad-primary transition-all inline-block"
        >
          {isAr ? "العودة إلى الخدمات" : "Back to Services"}
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 md:pt-40 font-muli bg-white overflow-x-hidden">
      <SEO
        title={isAr ? (service.targetAr || service.title) : (service.metaTitle || `${service.title} |Lamiya Al Khaleej Al Ittihad  Company`)}
        description={isAr ? (service.descAr || service.longDescription) : (service.metaDescription || service.longDescription)}
      />

      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-10000 hover:scale-110"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-alfawad-primary flex items-center justify-center">
                <service.icon className="w-6 h-6 text-black" />
              </div>
              <span className="text-alfawad-primary font-black text-[12px] md:text-[14px] uppercase tracking-[0.5em] block leading-tight">{isAr ? "حل احترافي" : "Professional Solution"}</span>
            </div>
            <h1 className="text-[40px] md:text-[80px] font-black text-white mb-8 uppercase tracking-tighter leading-[0.95] italic">{isAr ? service.targetAr : service.title}</h1>
            <p className="text-white/80 text-xl font-medium leading-relaxed mb-12 max-w-xl border-l-4 border-alfawad-primary pl-8">{isAr ? service.descAr || service.description : service.description}</p>
            <Link
              to="/booking"
              className="bg-alfawad-primary text-white hover:bg-white hover:text-black px-12 py-5 font-black uppercase tracking-widest text-sm transition-all shadow-[0_20px_50px_rgba(182,138,65,0.3)] inline-block group"
            >
              {isAr ? "احجز فحص مجاني" : "Book Free Inspection"} <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform inline-block ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16 xl:gap-24">
            <div className="lg:col-span-8 space-y-24">
              {/* Description */}
              <AnimatedSection>
                <h2 className="text-[32px] md:text-[45px] font-black text-black uppercase tracking-tighter mb-10 leading-none">{isAr ? "نظرة عامة على الخدمة" : "Service Overview"}</h2>
                <p className="text-gray-500 text-xl font-medium leading-loose mb-12">{isAr ? service.longDescriptionAr || service.longDescription : service.longDescription}</p>

                {service.pests && (
                  <div className="bg-[#f8f9fa] p-10 mt-12 border-l-8 border-alfawad-primary">
                    <h3 className="text-xl font-black uppercase tracking-tighter mb-8 italic">{isAr ? "الآفات التي نكافحها" : "Pests We Control"}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {service.pests.map((pest, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Bug className="w-4 h-4 text-alfawad-primary" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-black">{isAr ? pest.ar || pest : pest.en || pest}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </AnimatedSection>

              {/* Benefits */}
              <div>
                <AnimatedSection>
                  <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <h2 className="text-[32px] md:text-[45px] font-black text-black uppercase tracking-tighter leading-none italic">
                      {isAr ? "الفوائد" : "Key"} <span className="text-alfawad-primary">{isAr ? "الرئيسية" : "Benefits"}</span>
                    </h2>
                    <div className="w-32 h-1 bg-alfawad-primary" />
                  </div>
                </AnimatedSection>
                <div className="grid sm:grid-cols-2 gap-8">
                  {service.benefits.map((b, i) => (
                    <AnimatedSection key={i} delay={i * 0.05}>
                      <div className="group flex flex-col p-8 bg-[#fcfcfc] border border-gray-100 hover:border-alfawad-primary transition-all duration-500 hover:shadow-2xl h-full">
                        <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6 group-hover:bg-alfawad-primary transition-colors">
                          <BadgeCheck className="w-6 h-6" />
                        </div>
                        <span className="font-black text-black uppercase text-xs tracking-widest leading-relaxed">{isAr ? b.ar || b : b.en || b}</span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              {/* Methodology/Process */}
              <div className="bg-black text-white p-12 md:p-24 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-5 -mr-10 -mt-10 group-hover:scale-150 transition-all duration-700">
                  <Sparkles className="w-40 h-40 text-alfawad-primary" />
                </div>
                <AnimatedSection>
                  <h2 className="text-[32px] md:text-[45px] font-black uppercase tracking-tighter mb-16 text-center italic">{isAr ? "منهجية" : "Service"} <span className="text-alfawad-primary">{isAr ? "الخدمة" : "Methodology"}</span></h2>
                </AnimatedSection>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 text-center">
                  {service.process.map((step, i) => (
                    <AnimatedSection key={i} delay={i * 0.1}>
                      <div className="group">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md flex items-center justify-center text-alfawad-primary font-black text-2xl mx-auto mb-8 transition-all group-hover:bg-alfawad-primary group-hover:text-black group-hover:scale-110">
                          {i + 1}
                        </div>
                        <p className="font-black text-white uppercase text-[10px] tracking-[0.2em] leading-loose">{isAr ? step.ar || step : step.en || step}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-12">
              <AnimatedSection>
                <div className="bg-[#fcfcfc] border-t-8 border-black p-10 md:p-12 shadow-2xl sticky top-32">
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-10 italic">{isAr ? "باقات الخدمة" : "Service Packages"}</h3>
                  <div className="space-y-12">
                    {service.packages.map((pkg, i) => (
                      <div key={i} className="relative pl-10 border-l border-gray-100 group">
                        <div className="absolute top-0 left-0 -ml-[1px] w-[2px] h-0 bg-alfawad-primary group-hover:h-full transition-all duration-700" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-alfawad-primary mb-2 block">{isAr ? pkg.nameAr || pkg.name : pkg.name}</span>
                        <div className="text-3xl font-black mb-6 uppercase tracking-tighter text-black italic">{isAr ? pkg.priceAr || pkg.price : pkg.price}</div>
                        <ul className="space-y-4 mb-10">
                          {pkg.features.map((f, j) => (
                            <li key={j} className="flex items-start gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-black transition-colors">
                              <div className="w-1.5 h-1.5 bg-alfawad-primary mt-1 flex-shrink-0" /> {isAr ? f.ar || f : f.en || f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/booking"
                    className="bg-black hover:bg-alfawad-primary text-white px-8 py-5 font-black uppercase tracking-widest text-xs transition-all text-center block mt-12 shadow-xl"
                  >
                    {isAr ? "احجز هذه الخدمة" : "Book This Service"}
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-[#f8f9fa] p-12 border-l-8 border-alfawad-primary group">
                  <div className="flex gap-1 mb-8">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-alfawad-primary fill-alfawad-primary" />)}
                  </div>
                  <p className="text-black font-black uppercase text-xs tracking-widest leading-loose mb-10 italic">
                    {isAr ? `"قدمت شركة لمياء الخليج جودة استثنائية. كان اهتمامهم بالتفاصيل في ${service.targetAr} ملحوظًا. نوصي بهم بشدة."` : `"Lamiya Al Khaleej Company delivered exceptional quality. Their attention to detail in ${service.title} was remarkable. Highly recommended."`}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-1 bg-black group-hover:w-16 transition-all" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{isAr ? "عميل موثوق" : "Trusted Client"}</span>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="bg-black text-white p-12 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-alfawad-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                  <Smartphone className="w-10 h-10 text-alfawad-primary mb-8" />
                  <h4 className="text-xl font-black uppercase tracking-tighter mb-4 italic">{isAr ? "عرض أسعار فوري؟" : "Instant Quote?"}</h4>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-10">{isAr ? "راسلنا على الواتساب الآن للحصول على استجابة سريعة." : "WhatsApp us now for a quick response and expert advice."}</p>
                  <a href="https://wa.me/966501007079" className="text-alfawad-primary font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:text-white transition-colors">
                    {isAr ? "قل مرحباً على الواتساب" : "SAY HELLO ON WHATSAPP"} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-[#f8f9fa] border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-black text-black uppercase tracking-tighter mb-16 italic">{isAr ? "حلول ذات صلة" : "Related Solutions"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceDetails.slice(0, 4).map((s, i) => (
              <Link key={i} to={`/services/${s.slug}`} className="bg-white p-8 border border-gray-100 flex flex-col justify-between hover:border-alfawad-primary transition-all group">
                <h4 className="text-sm font-black uppercase tracking-widest text-black mb-10 group-hover:text-alfawad-primary transition-colors">{isAr ? s.targetAr : s.title}</h4>
                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">
                  <span>{isAr ? "التفاصيل" : "Details"}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
