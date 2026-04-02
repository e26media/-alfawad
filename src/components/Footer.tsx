import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  const location = useLocation();
  if (location.pathname.startsWith('/alfawad')) return null;

  return (
    <footer className="dark-section">
    {/* Need Help Bar */}
    <div className="teal-bg py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6 items-center">
        <div>
          <h4 className="font-heading font-semibold text-primary-foreground text-sm mb-1">Need Help?</h4>
          <p className="text-primary-foreground/80 text-sm">Contact us if you need any kind of help.</p>
        </div>
        <div>
          <a href="tel:0501007079" className="text-primary-foreground font-heading font-bold text-xl hover:underline">0501007079</a>
          <br />
          <a href="mailto:info@cleanproksa.com" className="text-primary-foreground/80 text-sm hover:underline">info@cleanproksa.com</a>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-primary-foreground text-sm mb-2">Newsletter</h4>
          <p className="text-primary-foreground/80 text-xs mb-3">Signup our newsletter to get update information, promotion and insight.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 rounded-l-lg text-sm bg-background text-foreground outline-none"
            />
            <button className="px-5 py-2.5 bg-foreground text-background rounded-r-lg text-sm font-semibold hover:opacity-90 transition-opacity">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Main Footer */}
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img src={logoWhite} alt="Clean Pro KSA" className="h-12 mb-4" />
          <p className="text-sm leading-relaxed opacity-70">
            With over 23 year's experience Clean Pro offers one of the best commercial and non-commercial cleaning and sanitization services.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Company</h4>
          <ul className="space-y-2.5">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "All Services", path: "/services" },
              { label: "Book a Free Visit", path: "/booking" },
              { label: "Contact Us", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-sm opacity-70">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              <a href="tel:0501007079" className="hover:text-primary transition-colors">0501007079</a>
            </li>
            <li className="flex items-center gap-3 text-sm opacity-70">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <a href="mailto:info@cleanproksa.com" className="hover:text-primary transition-colors">info@cleanproksa.com</a>
            </li>
            <li className="flex items-start gap-3 text-sm opacity-70">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>8562 Al Tasni, An Nahdah District, Near Hira Street Jeddah 23523, Saudi Arabia</span>
            </li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a href="https://www.facebook.com/CleanProSA/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://x.com/cleanproksa" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/company/cleanproksa/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-primary/10 py-5">
      <div className="container mx-auto px-4 text-center text-sm opacity-50">
        Copyright © {new Date().getFullYear()} Lamiya Al Khaleej, All Rights Reserved.
      </div>
    </div>
  </footer>
  );
};

export default Footer;
