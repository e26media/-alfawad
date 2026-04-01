import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import Carousel from "@/components/Carousel";
import { heroServices, popularServices, acServices, furnitureServices } from "@/lib/services";
import heroBg from "@/assets/hero-bg.jpg";
import homeSanitization from "@/assets/packages/home-sanitization.jpg";
import roomSanitization from "@/assets/packages/room-sanitization.jpg";

const testimonials = [
  {
    name: "Mohammed Sabra", text: "I used clean pro for the first time and I would used their service again. The team was quick in responding, punctual and professional. The quality of work they did was super and they made sure the place was super clean when they finished the job.",
  },
  {
    name: "Hoda Zah", text: "I will definitely be requesting my annual ac duct cleaning from Clean Pro! They explained each step, showed before and after pictures and left the place spotless. I highly recommend this service especially for new homes!",
  },
  {
    name: "Muhammad Faisal Hussain", text: "Had my sofa and curtains deep cleaned and disinfected from Clean Pro. Professional staff and the service was top quality. Will definitely recommend others to take their services.",
  },
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-background/40" />
        </div>
        <div className="container mx-auto px-4 pt-24 pb-32 relative z-10">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm tracking-widest uppercase text-foreground/70 mb-4"
            >
              Continuous Pursuit for Perfection
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-8 text-foreground"
            >
              Our focus is really to{" "}
              <span className="block">listen to our clients.</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to="/contact"
                className="cta-teal px-8 py-3 text-sm"
              >
                Book Now
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Service Icons Row */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-start md:justify-center gap-4 md:gap-6 pb-6 overflow-x-auto w-full px-4"
            >
              {heroServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="flex flex-col items-center gap-2 group flex-shrink-0"
                >
                  <div className="service-icon-circle">
                    <service.icon className="w-6 h-6 md:w-8 md:h-8 text-primary transition-colors" />
                  </div>
                  <span className="text-[10px] md:text-xs text-center text-foreground/80 font-medium whitespace-pre-line leading-tight">
                    {service.title}
                  </span>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar py-10 md:py-14">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 text-center">
          <AnimatedCounter end={940} suffix="+" label="Happy Customers" />
          <AnimatedCounter end={4.9} suffix="" label="Google Rating" duration={1} />
          <AnimatedCounter end={23} suffix="+" label="Years of experience" />
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">About Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 23 year's experience Clean Pro offers one of the best commercial and non-commercial cleaning and sanitization services. Not only do we offer a wide range of cleaning and sanitization programs using the latest machines backed by American and European technology, but our hand-picked technical personnel are all highly qualified with many years of experience in the field of professional cleaning.
              </p>
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Your Trusted Partner</p>
              <p className="text-foreground font-heading font-semibold text-lg">
                Experience Pristine Spaces with Clean Pro KSA: Your Trusted Partner in Deep Cleaning and Sanitization
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Popular Services */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-heading font-bold">Our Popular Services</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-muted-foreground text-sm max-w-md">
                Explore our professional cleaning solutions designed to elevate cleanliness, health, and comfort in every space.
              </p>
              <Link to="/services" className="cta-teal px-6 py-2.5 text-sm mt-3 inline-block">
                Explore All Services
              </Link>
            </AnimatedSection>
          </div>
          {/* Mobile Grid View */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {popularServices.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group"
              >
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-background">
                  <div className="h-[200px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-semibold text-sm">{service.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Desktop Carousel View */}
          <div className="hidden md:block mt-6">
            <Carousel>
              {popularServices.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="flex-shrink-0 md:w-[300px] lg:w-[320px] group"
                >
                  <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-background">
                    <div className="h-[200px] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-semibold text-sm">{service.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">Packages</h2>
            <p className="text-muted-foreground text-sm max-w-2xl mb-10">
              Our skilled professionals ensure every detail is meticulously attended to, transforming your home into a spotless sanctuary. Let Clean Pro KSA create an inviting environment that promotes health and tranquility for you and your loved ones.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Full Home Sanitization Package",
                desc: "Our home and room deep cleaning and sanitization packages are designed to suit the unique needs of apartments and villas across Saudi Arabia.",
                image: homeSanitization,
              },
              {
                title: "Individual Room Sanitization Packages",
                desc: "We offer specialized Individual Room Sanitization Packages designed to cater to single-room treatment needs.",
                image: roomSanitization,
              },
            ].map((pkg, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer bg-background">
                  <div className="h-[250px] overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-lg mb-2">{pkg.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{pkg.desc}</p>
                    <Link to="/services" className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AC Services */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">AC Services</h2>
          </AnimatedSection>
          {/* Mobile Grid View */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {acServices.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group"
              >
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-background">
                  <div className="h-[200px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-semibold text-sm">{service.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Desktop Carousel View */}
          <div className="hidden md:block mt-6">
            <Carousel>
              {acServices.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="flex-shrink-0 md:w-[300px] lg:w-[320px] group"
                >
                  <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-background">
                    <div className="h-[200px] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-semibold text-sm">{service.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Furniture Cleaning Services */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">Furniture Cleaning Services</h2>
          </AnimatedSection>
          {/* Mobile Grid View */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {furnitureServices.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group"
              >
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-background">
                  <div className="h-[200px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-semibold text-sm">{service.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Desktop Carousel View */}
          <div className="hidden md:block mt-6">
            <Carousel>
              {furnitureServices.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="flex-shrink-0 md:w-[300px] lg:w-[320px] group"
                >
                  <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-background">
                    <div className="h-[200px] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-semibold text-sm">{service.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="teal-bg py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Experience the Ultimate Cleaning Excellence Today!
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Discover professional cleaning solutions tailored to meet your needs with unmatched quality and reliability—book your service now and see the difference!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Contact Now
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Second Stats */}
      <section className="dark-section py-12">
        <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center md:text-left">
          {[
            { end: 940, suffix: "+", label: "Happy Customers" },
            { end: 4.9, suffix: "", label: "Google Rating" },
            { end: 23, suffix: "+", label: "Years of experience" },
            { end: 15, suffix: "+", label: "Services" },
          ].map((stat, i) => (
            <AnimatedCounter key={i} end={stat.end} suffix={stat.suffix} label={stat.label} duration={stat.end > 100 ? 2 : 1} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-10 text-center">What Our Client Say About Us</h2>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="bg-muted rounded-2xl p-8 md:p-12 relative">
                <div className="text-center">
                  <p className="text-foreground leading-relaxed text-base md:text-lg mb-6">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <p className="font-heading font-bold text-foreground">{testimonials[currentTestimonial].name}</p>
                </div>
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentTestimonial(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        i === currentTestimonial ? "bg-primary w-6" : "bg-border"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-10 text-center">Brands We Are Working With</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {Array.from({ length: 16 }).map((_, i) => (
              <AnimatedSection key={i} delay={i * 0.03}>
                <div className="bg-background rounded-xl p-4 flex items-center justify-center h-20 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-heading font-semibold text-muted-foreground text-center">
                    Brand {i + 1}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
