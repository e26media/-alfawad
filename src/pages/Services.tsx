import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { popularServices } from "@/lib/services";

const Services = () => (
  <div className="pt-20">
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">Our Services</h1>
          <p className="text-muted-foreground text-lg">
            Explore our professional cleaning solutions designed to elevate cleanliness, health, and comfort in every space.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {popularServices.map((service, i) => (
            <AnimatedSection key={service.slug} delay={i * 0.08}>
              <Link
                to={`/services/${service.slug}`}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group block bg-background"
              >
                <div className="h-[220px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold">{service.title}</h3>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
