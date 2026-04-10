import laklogo from "@/assets/laklogo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import SEO from "@/components/SEO";
import { CheckCircle2, Target, Eye, Heart, ShieldCheck, UserCheck, Zap, Sparkles, Building2, Award, Users2, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
  <div className="pt-32 md:pt-40 font-muli bg-white overflow-x-hidden">
    <SEO
      title={isAr ? "من نحن | شركة لمياء الخليج الاتحاد - +5 سنوات من التميز" : "About Us | Lamiya Al Khaleej Al Ittehad  Company - 5+ Years of Excellence"}
      description={isAr ? "تعرف على شركة لمياء الخليج، رائدة النظافة في السعودية." : "Learn about Lamiya Al Khaleej Al Ittehad  Company, a leading professional cleaning and sanitization provider in KSA with 5+ years of experience and international standards."}
    />

    {/* Page Header */}
    <section className="relative py-24 md:py-48 bg-black overflow-hidden group">
      <div className="absolute inset-0 bg-alfawad-primary/10 opacity-30 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 scale-150 transition-transform duration-10000 group-hover:scale-100" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-alfawad-primary font-black text-[12px] uppercase tracking-[0.6em] mb-8 block drop-shadow-lg">{isAr ? "قادة الصناعة لأكثر من 5 سنوات" : "Industry Leaders Since 5+ Years"}</span>
          <h1 className="text-[50px] md:text-[100px] font-black text-white leading-none uppercase tracking-tighter mb-10 italic drop-shadow-2xl">
            {isAr ? "رحلتنا" : "Our"} <span className="text-alfawad-primary">{isAr ? "" : "Journey"}</span>
          </h1>
          <div className="w-32 h-2 bg-alfawad-primary mx-auto mb-12" />
          <p className="text-white/60 text-xl md:text-2xl font-medium max-w-3xl mx-auto uppercase tracking-widest leading-relaxed">
            {isAr ? "تحويل المساحات إلى بيئات صحية ومتألقة ومصانة بشكل جميل." : "Transforming spaces into healthier, sparkling, and beautifully maintained environments."}
          </p>
        </motion.div>
      </div>
    </section>

    {/* Introduction Section */}
    <section className="py-24 md:py-40 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <AnimatedSection>
            <div className="relative group">
              <div className="absolute -inset-4 bg-alfawad-primary/10 border border-alfawad-primary/20 -rotate-3 transition-transform group-hover:rotate-0 duration-700" />
              <div className="relative bg-white p-6 border-2 border-black shadow-[40px_40px_0px_0px_#b68a41]">
                <div className="aspect-[4/5] bg-[#0a0a0a] overflow-hidden relative">
                  {/* <img src={laklogo} alt="Lamiya Al Khaleej Identity" className="w-full h-full object-contain p-24 opacity-30 grayscale brightness-200" /> */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                    <ShieldCheck className="w-20 h-20 text-alfawad-primary mb-8 animate-pulse" />
                    <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-4 italic">{isAr ? "جودة 100%" : "100% QUALITY"}</h3>
                    <p className="text-alfawad-primary text-xs font-black uppercase tracking-[0.3em]">{isAr ? "ضمان خدمة بدون مخاطر" : "NO-RISK SERVICE GUARANTEE"}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-alfawad-primary" />
              <span className="text-alfawad-primary font-black text-[12px] uppercase tracking-[0.5em]">{isAr ? "من نحن" : "Who We Are"}</span>
            </div>
            <h2 className="text-[40px] md:text-[65px] font-black text-black leading-[0.95] uppercase tracking-tighter mb-10">{isAr ? "لمياء الخليج" : "Lamiya Al Khaleej"} <br /> <span className="text-alfawad-primary">{isAr ? "إرث من الثقة" : "A Legacy of Trust"}</span></h2>
            <div className="space-y-8 text-gray-500 text-lg leading-relaxed font-black uppercase tracking-tight mb-12">
              <p>{isAr ? "تجلب شركة لمياء الخليج أكثر من 5 سنوات من الخبرة المتخصصة في صناعة التنظيف والتعقيم. نحن نخدم العملاء في جميع أنحاء المملكة العربية السعودية بتركيز واحد: التميز." : "Lamiya Al Khaleej Company brings 5+ years of specialized experience in the cleaning and sanitization industry. We serve both residential (B2C) and corporate (B2B) clients across Saudi Arabia with a single-minded focus: Excellence."}</p>
              <p className="text-black bg-[#f8f9fa] p-8 border-l-8 border-alfawad-primary italic">{isAr ? "\"اعتقادنا الأساسي بسيط: النظافة هي مفتاح الحياة. نحن لا ننظف فقط؛ نحن نستعيد الصحة والسلامة لبيئتك.\"" : "\"Our core belief is simple: Cleanliness is the key to life. We don't just clean; we restore health and safety to your environment.\""}</p>
              <p>{isAr ? "يتم اختيار موظفينا الفنيين بعناية وهم مؤهلون تأهيلا عاليا ومدربون للتعامل مع تحديات التنظيف الأكثر تطلبا باستخدام أحدث التقنيات." : "Our technical personnel are hand-picked, highly qualified, and professionally trained to handle the most demanding cleaning challenges using latest European and American technology."}</p>
            </div>
            <div className="grid grid-cols-2 gap-1 md:gap-4">
              <div className="p-8 bg-black text-white border-b-8 border-alfawad-primary">
                <div className="text-4xl font-black text-alfawad-primary mb-2 tracking-tighter uppercase"><AnimatedCounter end={5} suffix="+" duration={3} /></div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/40">{isAr ? "سنوات خبرة" : "Years Experience"}</div>
              </div>
              <div className="p-8 bg-[#f8f9fa] border-b-8 border-black">
                <div className="text-4xl font-black text-black mb-2 tracking-tighter uppercase"><AnimatedCounter end={1200} suffix="+" duration={3} /></div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">{isAr ? "عملاء موثوقون" : "Trusted Clients"}</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Philosophy Grid */}
    <section className="py-24 md:py-40 bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-alfawad-primary/5 -skew-x-12 translate-x-1/2" />
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-3 gap-1">
          <AnimatedSection>
            <div className="p-16 h-full bg-white/5 border border-white/5 group hover:bg-alfawad-primary transition-all duration-700">
              <Users2 className="w-16 h-16 text-alfawad-primary mb-12 group-hover:text-black transition-colors" />
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 group-hover:text-black transition-colors">{isAr ? "التركيز على العميل" : "Client Centric"}</h3>
              <p className="text-white/50 group-hover:text-black/70 text-lg font-black uppercase tracking-widest leading-relaxed transition-colors">
                {isAr ? "نحن نستمع حقًا لعملائنا لتقديم حلول مصممة خصيصًا تناسب احتياجاتهم." : "We really listen to our clients to provide tailored solutions that fit their unique lifestyle or business needs."}
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="p-16 h-full bg-white/5 border border-white/5 group hover:bg-white transition-all duration-700">
              <Zap className="w-16 h-16 text-alfawad-primary mb-12" />
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 text-white group-hover:text-black transition-colors">{isAr ? "أحدث التقنيات" : "Latest Tech"}</h3>
              <p className="text-white/50 group-hover:text-black/70 text-lg font-black uppercase tracking-widest leading-relaxed transition-colors">
                {isAr ? "استخدام أحدث الآلات المدعومة بالتكنولوجيا للحصول على نتائج فائقة." : "Utilizing high-end machinery backed by American and European technology for superior results."}
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="p-16 h-full bg-black border border-white/5 group hover:bg-alfawad-primary transition-all duration-700">
              <Shield className="w-16 h-16 text-alfawad-primary mb-12 group-hover:text-black transition-colors" />
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 group-hover:text-black transition-colors">{isAr ? "السلامة الكاملة" : "Full Safety"}</h3>
              <p className="text-white/50 group-hover:text-black/70 text-lg font-black uppercase tracking-widest leading-relaxed transition-colors">
                {isAr ? "موظفينا مؤمنون بالكامل، مما يحافظ على أعلى مستويات السلامة." : "Our staff members are fully insured and vaccinated, maintaining the highest levels of professional safety."}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="py-24 md:py-32 bg-white text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 md:gap-32">
          <AnimatedSection>
            <div className="flex flex-col h-full border-t-8 border-black pt-12">
              <span className="text-alfawad-primary font-black text-[12px] uppercase tracking-[0.5em] mb-8 block text-center md:text-left">{isAr ? "المستقبل" : "The Future"}</span>
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 text-center md:text-left">{isAr ? "رؤيتنا" : "Our"} <br className="hidden md:block" /> {isAr ? "" : "Vision"}</h3>
              <p className="text-gray-500 text-xl font-bold uppercase tracking-widest leading-loose">
                {isAr ? "وضع المعيار الذهبي في خدمات النظافة في جميع أنحاء المملكة وتحويل كل مساحة إلى منارة للصحة والسلامة والكمال." : "To set the gold standard in hygiene services across the Kingdom by transforming every space we touch into a beacon of health, safety, and visual perfection."}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col h-full border-t-8 border-alfawad-primary pt-12">
              <span className="text-black font-black text-[12px] uppercase tracking-[0.5em] mb-8 block text-center md:text-left">{isAr ? "الهدف" : "The Purpose"}</span>
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 text-center md:text-left text-alfawad-primary">{isAr ? "مهمتنا" : "Our"} <br className="hidden md:block" /> {isAr ? "" : "Mission"}</h3>
              <p className="text-black text-xl font-black uppercase tracking-widest leading-loose">
                {isAr ? "توفير خدمات موثوقة وشفافة وعالية التقنية لصيانة المرافق تعيد راحة البال وتخلق بيئات صحية." : "To provide 100% reliable, transparent, and high-tech facility maintenance services that restore peace of mind and create healthier environments for the people of KSA."}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Values / Commitments */}
    <section className="py-24 md:py-40 bg-[#fcfcfc] overflow-hidden border-y border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <AnimatedSection>
            <span className="text-alfawad-primary font-black text-[12px] uppercase tracking-[0.6em] mb-6 block">{isAr ? "حمضنا النووي" : "Our DNA"}</span>
            <h2 className="text-[40px] md:text-[70px] font-black text-black leading-none uppercase tracking-tighter italic">{isAr ? "الالتزامات الأساسية" : "Core Commitments"}</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="w-24 h-24 bg-black text-alfawad-primary flex items-center justify-center -rotate-12 hover:rotate-0 transition-transform">
              <Award className="w-12 h-12" />
            </div>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
          {[
            { title: isAr ? "الشفافية" : "Transparency", icon: Eye, desc: isAr ? "تواصل واضح وأسعار معلنة بدون رسوم خفية." : "Clear communication regarding scope, results, and upfront rates with no hidden charges." },
            { title: isAr ? "الاحترافية" : "Professionalism", icon: UserCheck, desc: isAr ? "كوادر فنية مختارة لمعايير مهارة وأخلاق عالية." : "Hand-picked technical personnel chosen for high skill levels and ethical standards." },
            { title: isAr ? "الموثوقية" : "Reliability", icon: ShieldCheck, desc: isAr ? "توفير جودة 100% بدون مخاطر ومضمونة." : "Providing a 100% no-risk quality service guaranteed by professional accountability." },
            { title: isAr ? "الابتكار" : "Innovation", icon: Zap, desc: isAr ? "دمج أحدث تقنيات التنظيف في عملياتنا اليومية." : "Integrating the latest American and European cleaning technology into our daily operations." },
          ].map((val, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group h-full flex flex-col p-12 bg-white border border-gray-100 hover:border-alfawad-primary transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
                <div className="w-16 h-16 bg-[#f8f9fa] text-black flex items-center justify-center mb-10 group-hover:bg-black group-hover:text-alfawad-primary transition-all">
                  <val.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-black text-black uppercase tracking-tighter mb-8 group-hover:text-alfawad-primary transition-colors">{val.title}</h4>
                <div className="w-8 h-[2px] bg-gray-200 mb-8 group-hover:w-full group-hover:bg-alfawad-primary transition-all" />
                <p className="text-gray-400 font-bold uppercase tracking-widest text-[11px] leading-loose">{val.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="bg-black py-24 md:py-40 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-r from-alfawad-primary/20 to-transparent blur-[150px] rounded-full opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <h2 className="text-[40px] md:text-[80px] font-black text-white uppercase tracking-tighter leading-none mb-12 italic">
            {isAr ? "تجربة" : "Experience"} <span className="text-alfawad-primary underline underline-offset-[20px] decoration-8">{isAr ? "الأفضل" : "The Best"}</span> <br className="hidden md:block" /> {isAr ? "في النظافة بالمملكة" : "Cleaning in KSA"}
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-black uppercase tracking-[0.4em] mb-20 max-w-3xl mx-auto">
            {isAr ? "حلول تنظيف مخصصة لمنزلك أو عملك بأعلى المعايير." : "Tailored cleaning solutions for your home or business with ISO standards."}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/booking" className="bg-alfawad-primary text-white px-20 py-8 font-black uppercase tracking-widest text-sm shadow-[0_20px_50px_rgba(182,138,65,0.4)] hover:bg-white hover:text-black transition-all inline-block">
              {isAr ? "قم بجدولة زيارتك المجانية ←" : "Schedule Your Free Visit \u2192"}
            </Link>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  </div>
  );
};

export default About;
