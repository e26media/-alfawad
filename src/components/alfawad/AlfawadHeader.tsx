import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      className={`font-muli sticky top-10 sm:top-12 lg:top-10 z-50 transition-all duration-300 w-full bg-white shadow-md ${
        scrolled ? "py-2" : "py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        <div className="flex items-center justify-between lg:justify-start">
          
          {/* Exact Logo Match */}
          <Link to="/alfawad" className="flex-shrink-0 z-50">
            <img 
              src="https://alfawad.com/images/top-logo.svg" 
              alt="AL FAWAD Engineering & Construction" 
              className="h-10 md:h-12 lg:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation & Top Socials */}
          <div className="hidden lg:flex w-full items-center justify-end">
            
            <nav className="flex items-center gap-x-6 xl:gap-x-8 pr-6">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  {link.children ? (
                    <button className="flex items-center gap-1 text-[15px] font-semibold text-black hover:text-alfawad-primary transition-colors py-2">
                      {link.label} <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" strokeWidth={3} />
                    </button>
                  ) : (
                    <Link
                      to={link.path!}
                      className={`text-[15px] font-semibold hover:text-alfawad-primary transition-colors py-2 block ${
                        location.pathname === link.path ? "text-alfawad-primary" : "text-black"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Red Dropdown Menu Hover */}
                  {link.children && (
                    <div className="absolute top-[100%] left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white border-t-2 border-alfawad-primary shadow-[0_10px_30px_rgba(0,0,0,0.1)] py-2 min-w-[280px] flex flex-col">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="px-6 py-3 text-[14px] font-semibold text-gray-700 hover:text-alfawad-primary hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
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
            <div className="h-8 w-[1px] bg-gray-300/60 mx-2"></div>

            {/* Social Icons matching Alfawad Circular Outline Style */}
            <div className="flex items-center gap-2 pl-4">
              <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-800 hover:border-alfawad-primary hover:text-alfawad-primary hover:bg-red-50 transition-all">
                <Facebook className="w-3.5 h-3.5" fill="currentColor" strokeWidth={0} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-800 hover:border-alfawad-primary hover:text-alfawad-primary hover:bg-red-50 transition-all">
                <Twitter className="w-3.5 h-3.5" fill="currentColor" strokeWidth={0} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-800 hover:border-alfawad-primary hover:text-alfawad-primary hover:bg-red-50 transition-all">
                <Linkedin className="w-3.5 h-3.5" fill="currentColor" strokeWidth={0} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-800 hover:border-alfawad-primary hover:text-alfawad-primary hover:bg-red-50 transition-all">
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Mobile Menu Toggle button */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-black hover:text-alfawad-primary focus:outline-none z-50"
          >
            {mobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
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
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl absolute top-full left-0 right-0 z-40"
          >
            <div className="px-6 py-4 flex flex-col gap-0 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-gray-100 last:border-0">
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between py-4 text-[15px] font-semibold text-black hover:text-alfawad-primary"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? "rotate-180 text-alfawad-primary" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden bg-gray-50 flex flex-col"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className="px-6 py-3 text-[14px] font-semibold text-gray-600 hover:text-alfawad-primary hover:bg-red-50 transition-colors border-l-2 border-transparent hover:border-alfawad-primary"
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
                      className={`block py-4 text-[15px] font-semibold hover:text-alfawad-primary transition-colors ${
                        location.pathname === link.path ? "text-alfawad-primary" : "text-black"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="flex gap-4 items-center justify-center py-6 mt-4 border-t border-gray-100">
                <Facebook className="w-5 h-5 text-gray-500 hover:text-alfawad-primary" fill="currentColor" strokeWidth={0} />
                <Twitter className="w-5 h-5 text-gray-500 hover:text-alfawad-primary" fill="currentColor" strokeWidth={0} />
                <Linkedin className="w-5 h-5 text-gray-500 hover:text-alfawad-primary" fill="currentColor" strokeWidth={0} />
                <Instagram className="w-5 h-5 text-gray-500 hover:text-alfawad-primary" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default AlfawadHeader;
