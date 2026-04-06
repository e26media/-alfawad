import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Smartphone, Send, Globe, ArrowRight, ShieldCheck, Heart } from "lucide-react";
const logoWhite = "/lamiya-logo.png";

const Footer = () => {
  const location = useLocation();

  // Only hide footer if it's explicitly an industrial page
  if (location.pathname.startsWith('/industrial')) return null;

  return (
    <footer className="bg-black text-white font-muli overflow-hidden border-t-[20px] border-black">
      {/* Need Help Bar */}
      <div className="bg-alfawad-primary py-12 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full -mr-[250px] -mt-[250px] transition-transform duration-5000 hover:scale-150" />
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-16 items-center">
          <div className="relative z-10 text-center md:text-left">
            <h4 className="font-black text-black text-[12px] uppercase tracking-[0.6em] mb-4">Urgent Need?</h4>
            <p className="text-black font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none italic">Need Help <br className="hidden md:block" /> Now?</p>
          </div>
          <div className="text-center relative z-10 transform -rotate-2">
            <a href="tel:+966501007079" className="bg-black text-white px-10 py-6 font-black text-2xl md:text-4xl hover:bg-white hover:text-black transition-all tracking-tighter uppercase inline-block shadow-2xl">
            +966 XXXXXXXX
            </a>
            <div className="mt-6 flex flex-col items-center">
              <a href="mailto:info@lamiyaalkhaleej.com" className="text-black/80 text-xs font-black uppercase tracking-[0.3em] hover:text-white transition-colors border-b-2 border-black/10 hover:border-white">info@lamiyaalkhaleej.com</a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end relative z-10">
            <h4 className="font-black text-black text-[12px] uppercase tracking-[0.5em] mb-6">Service Request</h4>
            <div className="flex w-full max-w-sm group">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="flex-1 px-8 py-6 rounded-none text-xs bg-white text-black outline-none font-black placeholder:text-gray-400 group-hover:shadow-2xl transition-all"
              />
              <button className="px-10 py-6 bg-black text-white rounded-none text-[12px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl group-hover:translate-x-1">
                Go
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 items-start">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <img src={logoWhite} alt="Lamiya Al Khaleej Logo" className="h-24 mb-10 transform grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
            <p className="text-[14px] leading-[28px] opacity-40 font-medium max-w-md uppercase tracking-[0.05em]">
              With over 15 years experience, Lamiya Al Kahleej Company offers premier commercial and residential cleaning, AC, and pest control services across the Kingdom of Saudi Arabia.
            </p>
            <div className="flex gap-4 mt-12">
              <a href="#" className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center hover:bg-alfawad-primary hover:border-alfawad-primary hover:text-black transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center hover:bg-alfawad-primary hover:border-alfawad-primary hover:text-black transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center hover:bg-alfawad-primary hover:border-alfawad-primary hover:text-black transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="text-[12px] font-black uppercase tracking-[0.6em] text-alfawad-primary mb-12">Navigation</h4>
            <ul className="space-y-6">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Our Services", path: "/services" },
                { label: "Our Clients", path: "/clients" },
                { label: "Book Inspection", path: "/booking" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[12px] font-black uppercase tracking-[0.3em] opacity-40 hover:opacity-100 hover:text-alfawad-primary transition-all flex items-center justify-center lg:justify-start gap-4 group">
                    <div className="w-2 h-2 rounded-full border border-alfawad-primary group-hover:bg-alfawad-primary transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="text-[12px] font-black uppercase tracking-[0.6em] text-alfawad-primary mb-12">Key Services</h4>
            <ul className="space-y-6">
              {[
                { label: "Residential Cleaning", path: "/services/residential-cleaning" },
                { label: "AC Duct Cleaning", path: "/services/ac-duct-cleaning" },
                { label: "Deep Specialized Clean", path: "/services/deep-cleaning-service" },
                { label: "Upholstery Care", path: "/services/furniture-cleaning-services" },
                { label: "Annual Pest Control", path: "/services/annual-pest-control-contract" },
                { label: "Water Tank Hygiene", path: "/services/water-tank-cleaning-disinfection" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[12px] font-black uppercase tracking-[0.2em] opacity-40 hover:opacity-100 hover:text-alfawad-primary transition-all flex items-center justify-center lg:justify-start gap-3 group">
                    <ArrowRight className="w-3 h-3 translate-x-0 group-hover:translate-x-2 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="text-[12px] font-black uppercase tracking-[0.6em] text-alfawad-primary mb-12">Headquarters</h4>
            <ul className="space-y-10">
              <li className="flex flex-col lg:flex-row items-center lg:items-start gap-6 group">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-alfawad-primary group-hover:text-black transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-2">Direct Line</span>
                  <a href="tel:+966501007079" className="text-[20px] font-black hover:text-alfawad-primary transition-colors tracking-tighter uppercase">+966 XXXXXXXX</a>
                </div>
              </li>
              <li className="flex flex-col lg:flex-row items-center lg:items-start gap-6 group">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-alfawad-primary group-hover:text-black transition-all">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-2">Coverage</span>
                  <span className="text-[14px] font-black opacity-40 leading-relaxed uppercase tracking-widest italic group-hover:opacity-100 transition-opacity">Kingdom of Saudi Arabia</span>
                </div>
              </li>
              <li className="flex flex-col lg:flex-row items-center lg:items-start gap-6 group">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-alfawad-primary group-hover:text-black transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-2">Office Location</span>
                  <span className="text-[11px] font-bold opacity-30 leading-loose uppercase tracking-[0.1em] group-hover:opacity-100 transition-opacity">8562 Al Tasni, An Nahdah District, <br /> Jeddah 23523, KSA</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final Bottom Bar */}
      <div className="border-t border-white/5 py-12 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-alfawad-primary/50 to-transparent" />
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.6em] text-gray-700">
            © {new Date().getFullYear()} Lamiya Al Khaleej. All Rights Reserved.
          </p>
          {/* <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-700">
              <ShieldCheck className="w-4 h-4 text-alfawad-primary" />
              ISO 9001 Certified
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-700">
              <Heart className="w-4 h-4 text-alfawad-primary" />
              Hygiene Expert
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
