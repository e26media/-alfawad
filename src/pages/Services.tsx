import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { serviceDetails } from "@/lib/services";
import { ArrowRight, Sparkles, Building2, Fan, Sofa, Bug, Droplets, Paintbrush } from "lucide-react";

const serviceCategories = [
  {
    title: "Residential Cleaning & Sanitization",
    icon: Sparkles,
    description: "Our residential services are designed to ensure your home stays fresh, safe, and healthy. We cover all property types including villas, apartments, flats, and compounds.",
    services: [
      "residential-cleaning",
      "full-home-sanitization-package",
      "individual-room-sanitization-packages",
      "deep-cleaning-service"
    ]
  },
  {
    title: "Commercial & Corporate Cleaning",
    icon: Building2,
    description: "Businesses require a clean environment for employees and customers. We provide specialized cleaning solutions for offices and commercial properties.",
    services: [
      "commercial-cleaning",
      "post-construction-cleaning",
      "window-cleaning",
      "floor-care"
    ]
  },
  {
    title: "AC Cleaning & Maintenance",
    icon: Fan,
    description: "Saudi Arabia’s climate makes AC systems extremely important. Our AC services ensure better cooling, improved air quality, and reduced electricity bills.",
    services: [
      "ac-cleaning",
      "ac-duct-cleaning",
      "ac-maintenance-and-repair",
      "ac-coil-cleaning-services",
      "ac-installation-and-replacement-services",
      "annual-ac-maintenance-contracts"
    ]
  },
  {
    title: "Furniture & Upholstery Cleaning",
    icon: Sofa,
    description: "Furniture absorbs dust, stains, sweat, and allergens over time. Our upholstery cleaning service restores your furniture’s freshness.",
    services: [
      "sofa-cleaning-services",
      "mattress-cleaning",
      "carpet-cleaning-sanitation",
      "curtain-cleaning-sanitation",
      "furniture-cleaning-services"
    ]
  },
  {
    title: "Pest Control Services",
    icon: Bug,
    description: "Pests can damage property and create serious health issues. We provide advanced pest control services with safe chemical solutions.",
    services: [
      "annual-pest-control-contract"
    ]
  },
  {
    title: "Water Tank & Painting",
    icon: Droplets,
    description: "Water tanks require regular cleaning to prevent contamination. We also provide professional painting services to enhance your property.",
    services: [
      "water-tank-cleaning-disinfection",
      "painting-service",
      "mold-cleaning"
    ]
  }
];

const Services = () => (
  <div className="pt-32 md:pt-40 font-muli bg-white overflow-x-hidden">
    <SEO
      title="Our Services |Lamiya Al Khaleej Al Ittehad  Company - Cleaning & Maintenance in KSA"
      description="AtLamiya Al Khaleej Al Ittehad  Company, we offer a wide range of professional services designed for both residential and commercial customers. Complete cleaning & maintenance solutions in KSA."
    />

    {/* Hero Section */}
    <section className="relative py-24 md:py-40 bg-black overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-alfawad-primary opacity-10 rounded-full blur-[120px] -mr-[400px] -mt-[400px]" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-alfawad-primary font-black text-[12px] uppercase tracking-[0.5em] mb-6 block leading-tight">Complete Cleaning & Maintenance Solutions</span>
          <h1 className="text-[40px] md:text-[80px] font-black text-white leading-none uppercase tracking-tighter mb-8 italic">Our Services</h1>
          <div className="w-24 h-2 bg-alfawad-primary mx-auto mb-10" />
          <p className="text-white/60 text-xl font-medium max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
            High-quality, safe, and affordable solutions improving the comfort and hygiene of your environment.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Services Grid By Categories */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="space-y-32">
          {serviceCategories.map((cat, idx) => (
            <div key={idx} className="relative">
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
                            <h3 className="text-xl font-black text-black uppercase tracking-tighter mb-4 leading-tight group-hover:text-alfawad-primary transition-colors">{service.title}</h3>
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed mb-10">{service.description}</p>
                          </div>
                          <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-black">
                            <span>View Details</span>
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
            Not Sure Which Service <br /> You Need?
          </h2>
          <p className="text-white/60 text-lg font-medium max-w-xl mx-auto mb-16 uppercase tracking-widest">
            Book a free inspection visit and let our experts evaluate your property for accurate pricing and plans.
          </p>
          <Link to="/booking" className="bg-alfawad-primary hover:bg-white text-white hover:text-black px-16 py-6 font-black uppercase tracking-widest text-sm transition-all inline-block shadow-2xl">
            Book Free Inspection Today
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Services;
