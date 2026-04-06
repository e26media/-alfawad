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
    <header className="fixed top-10 sm:top-12 left-0 right-0 z-50 transition-all duration-500 font-muli bg-white">
      <div 
        className={`w-full transition-all duration-500 border-b border-alfawad-primary/10 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-xl py-2" 
            : "bg-white/90 backdrop-blur-md shadow-lg py-3"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/industrial" className="flex items-center transition-transform duration-500 hover:scale-105">
              <img 
                src={mainlogo} 
                alt="Lamiya Al Khaleej" 
                className={`transition-all duration-500 ${scrolled ? "h-9 md:h-11" : "h-11 md:h-13"} w-auto object-contain`}
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-x-0.5 xl:gap-x-1.5 px-6">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.children ? (
                  <button className={`flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-[12px] xl:text-[13px] font-bold uppercase tracking-wider transition-all duration-300 ${
                    location.pathname.includes('/services') ? "text-alfawad-primary bg-alfawad-primary/5" : "text-gray-800 hover:text-black hover:bg-gray-50/50"
                  }`}>
                    {link.label} 
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" strokeWidth={2} />
                  </button>
                ) : (
                  <Link
                    to={link.path!}
                    className={`px-5 py-2.5 rounded-xl text-[12px] xl:text-[13px] font-bold uppercase tracking-wider transition-all duration-300 block ${
                      location.pathname === link.path 
                        ? "text-alfawad-primary bg-alfawad-primary/10 shadow-sm" 
                        : "text-gray-800 hover:text-black hover:bg-gray-50/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.children && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.2)] border border-gray-100/50 py-4 min-w-[280px] overflow-hidden">
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

          {/* Action Button Section with Mobile Toggle */}
          <div className="flex items-center gap-3">
             <Link
               to="/industrial/enquiry"
               className="hidden md:flex bg-black text-white hover:bg-alfawad-primary items-center justify-center px-10 py-3 h-[48px] rounded-xl text-[12px] font-bold uppercase tracking-[0.2em] transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-primary/30"
             >
               Enquiry
             </Link>

             <button
               onClick={() => setMobileOpen(!mobileOpen)}
               className="lg:hidden p-2.5 rounded-xl bg-gray-50 hover:bg-black hover:text-white transition-all border border-gray-100"
             >
               {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed right-0 top-0 bottom-0 w-[85%] max-w-[400px] bg-white z-40 shadow-[-10px_0_50px_rgba(0,0,0,0.1)] flex flex-col pt-[80px]"
            >
              <div className="flex flex-col h-full overflow-y-auto px-8 py-10 gap-1">
                {navLinks.map((link) => (
                  <div key={link.label} className="w-full">
                    {link.children ? (
                      <>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                          className="w-full flex items-center justify-between py-5 text-[15px] font-black text-black border-b border-gray-50 uppercase tracking-widest"
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
                              className="overflow-hidden bg-gray-50/50 rounded-2xl my-2 px-2"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  className="block px-6 py-4 text-[13px] font-bold text-gray-500 hover:text-alfawad-primary uppercase tracking-widest border-b border-white last:border-0"
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
                        className={`block py-5 text-[15px] font-black border-b border-gray-50 transition-colors uppercase tracking-widest ${
                          location.pathname === link.path ? "text-alfawad-primary" : "text-black hover:text-alfawad-primary"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="mt-12 flex flex-col gap-8 pb-10">
                  <Link to="/industrial/enquiry" className="bg-black text-white py-5 rounded-full text-center font-black uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all">
                    Request A Quote
                  </Link>
                  
                  <div className="flex flex-col gap-6">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Get in Touch</p>
                    <div className="flex gap-4 items-center justify-center">
                      <a href="tel:+966500000000" className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-900 shadow-sm active:bg-black active:text-white transition-all">📞</a>
                      <a href="mailto:info@lamiya.com" className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-900 shadow-sm active:bg-black active:text-white transition-all">✉️</a>
                      <a href="#" className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-900 shadow-sm active:bg-black active:text-white transition-all">📍</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default AlfawadHeader;
