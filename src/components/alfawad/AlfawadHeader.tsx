import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import mainlogo from "@/assets/logo-alfawad.png";

const navLinks = [
  { label: "Home", path: "/alfawad" },
  {
    label: "Overview", children: [
      { label: "Introduction", path: "/alfawad/introduction" },
      { label: "Chairman Message", path: "/alfawad/chairman-message" },
      { label: "Vision & Mission", path: "/alfawad/vision-mission" },
      { label: "Quality Policy", path: "/alfawad/quality-policy" },
      { label: "Environment & Safety Policy", path: "/alfawad/environment-safety" },
    ]
  },
  {
    label: "Our Services", children: [
      { label: "Technical Manpower Service", path: "/alfawad/services/technical-manpower" },
      { label: "Heavy Equipment Service", path: "/alfawad/services/heavy-equipment" },
      { label: "Project Support Service", path: "/alfawad/services/project-support" },
      { label: "Project Management Service", path: "/alfawad/services/project-management" },
      { label: "Material Service", path: "/alfawad/services/material-service" },
    ]
  },
  { label: "Our Brochure", path: "/alfawad/brochure" },
  { label: "Clients", path: "/alfawad/clients" },
  { label: "Career", path: "/alfawad/career" },
  { label: "Enquiry", path: "/alfawad/enquiry" },
  { label: "Contact Us", path: "/alfawad/contact" },
];

const AlfawadHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header
      className={`font-muli sticky top-12 z-50 transition-all duration-300 w-full bg-white shadow-md ${
        scrolled ? "py-2" : "py-3 md:py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        <div className="flex items-center justify-between lg:justify-start">
          
          {/* Logo Section */}
          <Link to="/alfawad" className="flex-shrink-0 z-50">
            <img 
              src={mainlogo} 
              alt="AL FAWAD" 
              className="h-9 sm:h-11 md:h-12 lg:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation & Top Socials */}
          <div className="hidden lg:flex w-full items-center justify-end">
            
            <nav className="flex items-center gap-x-5 xl:gap-x-7 pr-4">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  {link.children ? (
                    <button className="flex items-center gap-1 text-[14px] xl:text-[15px] font-bold text-black hover:text-alfawad-primary transition-colors py-2 uppercase tracking-tight">
                      {link.label} <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" strokeWidth={3} />
                    </button>
                  ) : (
                    <Link
                      to={link.path!}
                      className={`text-[14px] xl:text-[15px] font-bold hover:text-alfawad-primary transition-colors py-2 block uppercase tracking-tight ${
                        location.pathname === link.path ? "text-alfawad-primary" : "text-black"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {link.children && (
                    <div className="absolute top-[100%] left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 scale-95 group-hover:scale-100 origin-top">
                      <div className="bg-white border-t-4 border-alfawad-primary shadow-2xl py-2 min-w-[260px] flex flex-col">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="px-6 py-3 text-[13px] font-bold text-gray-700 hover:text-alfawad-primary hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0 uppercase tracking-tighter"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Vertical Divider */}
            <div className="h-6 w-[1px] bg-gray-300/60 mx-1"></div>

            {/* Social Icons */}
            <div className="flex items-center gap-1.5 pl-3">
              <a href="#" className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-alfawad-primary hover:text-alfawad-primary transition-all">
                <Facebook className="w-3 h-3" fill="currentColor" strokeWidth={0} />
              </a>
              <a href="#" className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-alfawad-primary hover:text-alfawad-primary transition-all">
                <Linkedin className="w-3 h-3" fill="currentColor" strokeWidth={0} />
              </a>
              <a href="#" className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-alfawad-primary hover:text-alfawad-primary transition-all">
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Mobile Menu Toggle button */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-black hover:text-alfawad-primary focus:outline-none z-50 rounded-lg hover:bg-gray-50"
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.1)] absolute top-full left-0 right-0 z-40"
          >
            <div className="px-5 py-4 flex flex-col gap-0 max-h-[75vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-gray-50 last:border-0">
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between py-3.5 text-[14px] font-black text-black hover:text-alfawad-primary uppercase"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? "rotate-180 text-alfawad-primary" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-gray-50/50 flex flex-col mb-2"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className="px-5 py-3 text-[13px] font-bold text-gray-600 hover:text-alfawad-primary border-l-4 border-transparent hover:border-alfawad-primary transition-all uppercase"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path!}
                      className={`block py-3.5 text-[14px] font-black hover:text-alfawad-primary transition-colors uppercase ${
                        location.pathname === link.path ? "text-alfawad-primary" : "text-black"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Socials */}
              <div className="flex gap-5 items-center justify-center py-6 mt-2 border-t border-gray-50">
                <a href="#" className="text-gray-400 hover:text-alfawad-primary transition-colors"><Facebook className="w-5 h-5" fill="currentColor" strokeWidth={0} /></a>
                <a href="#" className="text-gray-400 hover:text-alfawad-primary transition-colors"><Linkedin className="w-5 h-5" fill="currentColor" strokeWidth={0} /></a>
                <a href="#" className="text-gray-400 hover:text-alfawad-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default AlfawadHeader;

