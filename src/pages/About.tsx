import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";

const About = () => (
  <div className="pt-20">
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">About Clean Pro KSA</h1>
          <p className="text-muted-foreground text-lg">Your Trusted Partner in Deep Cleaning and Sanitization</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <h2 className="text-2xl font-heading font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            With over 23 year's experience Clean Pro offers one of the best commercial and non-commercial cleaning and sanitization services. Not only do we offer a wide range of cleaning and sanitization programs using the latest machines backed by American and European technology, but our hand-picked technical personnel are all highly qualified with many years of experience in the field of professional cleaning.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Clean Pro KSA has been serving residential and commercial clients across Saudi Arabia since our founding. We believe in delivering excellence through innovation, quality products, and trained professionals who care about your space as much as you do.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <AnimatedSection>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-xl font-heading font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To provide premium, eco-friendly cleaning and sanitization services that enhance the health, comfort, and beauty of every space we touch, using cutting-edge technology and highly trained professionals.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-xl font-heading font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To be the most trusted and innovative cleaning company in Saudi Arabia and the Middle East, setting new standards for quality, sustainability, and customer satisfaction.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="teal-bg py-14">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        <AnimatedCounter end={940} suffix="+" label="Happy Customers" />
        <AnimatedCounter end={23} suffix="+" label="Years Experience" />
        <AnimatedCounter end={15} suffix="+" label="Services" />
        <AnimatedCounter end={50} suffix="+" label="Team Members" />
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <h2 className="text-2xl font-heading font-bold mb-8 text-center">Why Choose Us</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "23+ Years Experience", desc: "Over two decades of expertise in professional cleaning and sanitization." },
            { title: "Latest Technology", desc: "American and European technology-backed machines for superior results." },
            { title: "Trained Staff", desc: "Hand-picked, highly qualified technical personnel with years of field experience." },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-muted rounded-2xl p-6 text-center h-full">
                <h4 className="font-heading font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
