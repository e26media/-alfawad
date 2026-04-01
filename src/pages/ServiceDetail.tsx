import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { serviceDetails } from "@/lib/services";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceDetails.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-20 section-padding text-center">
        <h1 className="text-3xl font-heading font-bold mb-4">Service not found</h1>
        <Link to="/services" className="cta-teal px-6 py-3 text-sm">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">{service.title}</h1>
            <p className="text-primary-foreground/80 text-lg">{service.longDescription}</p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-2xl font-heading font-bold mb-6 text-center">Benefits</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.benefits.map((b, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-xl">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-sm">{b}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-2xl font-heading font-bold mb-8 text-center">Our Process</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full teal-bg flex items-center justify-center text-primary-foreground font-heading font-bold mx-auto mb-3">
                    {i + 1}
                  </div>
                  <p className="font-medium text-sm">{step}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-2xl font-heading font-bold mb-8 text-center">Pricing Packages</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {service.packages.map((pkg, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`rounded-2xl p-6 text-center h-full flex flex-col border ${i === 1 ? "border-primary shadow-lg ring-2 ring-primary" : "border-border"} bg-background`}>
                  <h3 className="font-heading font-semibold text-lg mb-1">{pkg.name}</h3>
                  <div className="text-3xl font-heading font-bold text-primary mb-4">{pkg.price}</div>
                  <ul className="space-y-2 mb-6 flex-1 text-left">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/booking" className="cta-teal px-6 py-2.5 text-sm w-full text-center">
                    Book Now
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="teal-bg py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/80 mb-6">Book your free inspection and experience the Clean Pro difference.</p>
          <Link to="/booking" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity">
            Book Free Visit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
