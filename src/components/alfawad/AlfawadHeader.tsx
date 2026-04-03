import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const mainlogo = "/lamiya-logo.png";

const navLinks = [
  { label: "Home", path: "/industrial" },
  {
    label: "Overview", children: [
      { label: "Introduction", path: "/industrial/introduction" },
      { label: "Chairman Message", path: "/industrial/chairman-message" },
      { label: "Vision & Mission", path: "/industrial/vision-mission" },
      { label: "Quality Policy", path: "/industrial/quality-policy" },
      { label: "Environment & Safety Policy", path: "/industrial/environment-safety" },
    ]
  },
  {
    label: "Our Services", children: [
      { label: "Technical Manpower Service", path: "/industrial/services/technical-manpower" },
      { label: "Heavy Equipment Service", path: "/industrial/services/heavy-equipment" },
      { label: "Project Support Service", path: "/industrial/services/project-support" },
      { label: "Project Management Service", path: "/industrial/services/project-management" },
      { label: "Material Service", path: "/industrial/services/material-service" },
    ]
  },
  { label: "Our Brochure", path: "/industrial/brochure" },
  { label: "Clients", path: "/industrial/clients" },
  { label: "Career", path: "/industrial/career" },
  { label: "Enquiry", path: "/industrial/enquiry" },
  { label: "Contact Us", path: "/industrial/contact" },
];

const AlfawadHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header className="fixed top-10 left-0 right-0 z-50 transition-all duration-500 font-muli">
      {/* Main Navigation */}
      <div 
        className={`w-full transition-all duration-500 flex justify-center px-4 ${
          scrolled ? "mt-0" : "mt-6"
        }`}
      >
        <div 
          className={`container mx-auto flex items-center justify-between transition-all duration-500 px-6 lg:px-10 ${
            scrolled 
              ? "bg-white/95 backdrop-blur-xl shadow-2xl py-3 w-full rounded-none border-b border-alfawad-primary/20" 
              : "bg-white shadow-[0_15px_50px_-15px_rgba(0,0,0,0.3)] py-4 rounded-full border border-gray-100 max-w-[1400px]"
          }`}
        >
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/industrial" className="flex items-center transition-transform duration-500 hover:scale-105">
              <img 
                src={mainlogo} 
                alt="Lamiya Al Khaleej" 
                className={`transition-all duration-500 ${scrolled ? "h-10 md:h-12" : "h-12 md:h-14"} w-auto object-contain`}
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-x-1 xl:gap-x-2">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group px-1">
                {link.children ? (
                  <button className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] xl:text-[13px] font-black uppercase tracking-widest transition-all duration-300 ${
                    location.pathname.includes('/services') ? "text-alfawad-primary bg-alfawad-primary/5" : "text-black hover:bg-gray-50"
                  }`}>
                    {link.label} 
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" strokeWidth={3} />
                  </button>
                ) : (
                  <Link
                    to={link.path!}
                    className={`px-4 py-2 rounded-full text-[12px] xl:text-[13px] font-black uppercase tracking-widest transition-all duration-300 block ${
                      location.pathname === link.path 
                        ? "text-alfawad-primary bg-alfawad-primary/10 shadow-sm" 
                        : "text-black hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.children && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 py-4 min-w-[280px] overflow-hidden">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="px-8 py-3.5 text-[11px] font-black text-gray-700 hover:text-alfawad-primary hover:bg-gray-50 transition-all border-b border-gray-50 last:border-0 uppercase tracking-widest flex items-center justify-between"
                        >
                          {child.label}
                          <span className="opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">&rarr;</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Button Section */}
          <div className="flex items-center gap-3">
            {/* <Link
              to="/industrial/enquiry"
              className="hidden lg:flex bg-black text-white hover:bg-alfawad-primary items-center justify-center px-10 py-3.5 h-[52px] rounded-full text-[12px] font-black uppercase tracking-[0.2em] transition-all transform hover:-translate-y-1 shadow-2xl hover:shadow-alfawad-primary/30 group"
            >
              <Menu className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Request Quote
            </Link> */}

            {/* Mobile Toggle */}
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 text-black hover:text-alfawad-primary transition-colors rounded-full bg-gray-50 border border-gray-100"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto"
          >
            <div className="p-6 flex flex-col gap-2 pb-32">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-gray-100">
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between py-5 text-[15px] font-black text-black hover:text-alfawad-primary uppercase tracking-widest"
                      >
                        {link.label}
                        <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === link.label ? "rotate-180 text-alfawad-primary" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-gray-50/80 rounded-2xl mb-4 px-2"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className="block px-6 py-4 text-[13px] font-bold text-gray-600 hover:text-alfawad-primary uppercase tracking-widest border-b border-white last:border-0"
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
                      className={`block py-5 text-[15px] font-black hover:text-alfawad-primary transition-colors uppercase tracking-widest ${
                        location.pathname === link.path ? "text-alfawad-primary" : "text-black"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="mt-10 flex flex-col gap-6">
                <Link to="/enquiry" className="bg-black text-white py-5 text-center font-black uppercase tracking-[0.2em] shadow-2xl active:scale-95 transition-all rounded-none">
                  Request A Quote
                </Link>
                
                <div className="flex gap-6 items-center justify-center pt-6 border-t border-gray-100">
                  <a href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-alfawad-primary transition-all"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-alfawad-primary transition-all"><Linkedin className="w-5 h-5" /></a>
                  <a href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-alfawad-primary transition-all"><Instagram className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default AlfawadHeader;

