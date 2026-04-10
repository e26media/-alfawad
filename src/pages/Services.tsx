import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { serviceDetails } from "@/lib/services";
import { ArrowRight, Home, Wrench, Droplets, Bug } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const serviceCategories = [
    {
      title: isAr ? "الخدمات السكنية" : "Residential Services",
      id: "residential",
      icon: Home,
      description: isAr ? "خدماتنا السكنية تضمن بقاء منزلك منتعشًا وصحيًا. نغطي الفلل والشقق والمباني السكنية." : "Our residential services ensure your home stays fresh and healthy. We cover villas, apartments, and residential buildings.",
      services: [
      "ac-cleaning",
      "deep-cleaning-service",
      "sofa-cleaning-services",
      "carpet-cleaning-sanitation",
      "mattress-cleaning",
      "furniture-cleaning-services",
      "building-cleaning",
      "container-cleaning"
    ]
  },
  {
    title: "Maintenance Services",
    id: "maintenance",
    icon: Wrench,
    description: "Expert maintenance solutions including electrical, plumbing, and carpentry for your property.",
    services: [
      "electrical-services",
      "plumbing-services",
      "carpenter-services",
      "ac-installation-maintenance"
    ]
  },
  {
    title: "Water Tank Services",
    id: "water-tank",
    icon: Droplets,
    description: "Professional water tank cleaning and disinfection to ensure safe water supply for your family.",
    services: [
      "water-tank-cleaning-disinfection"
    ]
  },
  {
    title: "Professional Pest Control & Pesticide Treatments",
    id: "pesticide",
    icon: Bug,
    description: "Advanced pesticide and pest control services with safe and effective treatments for a pest-free environment.",
    services: [
      "annual-pest-control-contract"
    ]
  }
  ];

  return (
  <div className="pt-32 md:pt-40 font-muli bg-white overflow-x-hidden">
    <SEO
      title={isAr ? "خدماتنا | شركة لمياء الخليج الاتحاد" : "Our Services |Lamiya Al Khaleej Al Ittehad  Company - Cleaning & Maintenance in KSA"}
      description={isAr ? "نقدم مجموعة واسعة من الخدمات المهنية السكنية والتجارية في السعودية." : "At Lamiya Al Khaleej Al Ittehad  Company, we offer a wide range of professional services designed for both residential and commercial customers. Complete cleaning & maintenance solutions in KSA."}
    />

    {/* Hero Section */}
    <section className="relative py-24 md:py-40 bg-black overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-alfawad-primary opacity-10 rounded-full blur-[120px] -mr-[400px] -mt-[400px]" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-alfawad-primary font-black text-[12px] uppercase tracking-[0.5em] mb-6 block leading-tight">{isAr ? "حلول تنظيف وصيانة كاملة" : "Complete Cleaning & Maintenance Solutions"}</span>
          <h1 className="text-[40px] md:text-[80px] font-black text-white leading-none uppercase tracking-tighter mb-8 italic">{isAr ? "خدماتنا" : "Our Services"}</h1>
          <div className="w-24 h-2 bg-alfawad-primary mx-auto mb-10" />
          <p className="text-white/60 text-xl font-medium max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
            {isAr ? "حلول عالية الجودة وآمنة وبأسعار معقولة." : "High-quality, safe, and affordable solutions improving the comfort and hygiene of your environment."}
          </p>
        </motion.div>
      </div>
    </section>

    {/* Services Grid By Categories */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="space-y-32">
          {serviceCategories.map((cat, idx) => (
        <div key={idx} className="relative" id={cat.id}>
              <AnimatedSection>
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-black text-white flex items-center justify-center">
                        <cat.icon className="w-6 h-6" />
                      </div>
                      <h2 className="text-[32px] md:text-[45px] font-black text-black uppercase tracking-tighter leading-none">{cat.title}</h2>
                    </div>
                    <p className="text-gray-500 text-lg font-medium leading-relaxed border-l-4 border-alfawad-primary pl-8">{cat.description}</p>
                  </div>
                  <div className="text-[80px] font-black text-black/5 opacity-10 hidden xl:block translate-y-10 select-none uppercase">0{idx + 1}</div>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.services.map((slug, sIdx) => {
                  const service = serviceDetails.find(s => s.slug === slug);
                  if (!service) return null;
                  return (
                    <AnimatedSection key={slug} delay={sIdx * 0.1}>
                      <Link to={`/services/${slug}`} className="group block h-full">
                        <div className="bg-[#fcfcfc] border border-gray-100 h-full p-10 flex flex-col justify-between transition-all duration-500 hover:border-alfawad-primary hover:bg-white hover:shadow-2xl hover:-translate-y-2">
                          <div>
                            <div className="text-alfawad-primary mb-8 opacity-0 group-hover:opacity-100 transition-opacity">
                              <service.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-black text-black uppercase tracking-tighter mb-4 leading-tight group-hover:text-alfawad-primary transition-colors">{isAr ? service.targetAr : service.title}</h3>
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed mb-10">{isAr ? service.descAr || service.description : service.description}</p>
                          </div>
                          <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-black">
                            <span>{isAr ? "عرض التفاصيل" : "View Details"}</span>
                            <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform color-alfawad-primary" />
                          </div>
                        </div>
                      </Link>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-black py-24 md:py-40 text-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <h2 className="text-[32px] md:text-[60px] font-black text-white uppercase tracking-tighter leading-none mb-10">
            {isAr ? "لست متأكداً أي خدمة" : "Not Sure Which Service"} <br /> {isAr ? "تحتاج؟" : "You Need?"}
          </h2>
          <p className="text-white/60 text-lg font-medium max-w-xl mx-auto mb-16 uppercase tracking-widest">
            {isAr ? "احجز زيارة فحص مجانية ودع خبرائنا يقيمون ممتلكاتك." : "Book a free inspection visit and let our experts evaluate your property for accurate pricing and plans."}
          </p>
          <Link to="/booking" className="bg-alfawad-primary hover:bg-white text-white hover:text-black px-16 py-6 font-black uppercase tracking-widest text-sm transition-all inline-block shadow-2xl">
            {isAr ? "احجز فحص مجاني اليوم" : "Book Free Inspection Today"}
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
  );
};

export default Services;
