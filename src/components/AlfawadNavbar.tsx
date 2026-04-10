import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const ALFAWAD_LINKS = [
  { nameKey: "industrial.nav.home", path: "/alfawad" },
  {
    nameKey: "industrial.nav.about",
    dropdown: [
      { nameKey: "industrial.nav.overview", path: "/alfawad/overview" },
      { nameKey: "industrial.nav.introduction", path: "/alfawad/introduction" },
      { nameKey: "industrial.nav.chairman", path: "/alfawad/chairman-message" },
      { nameKey: "industrial.nav.vision", path: "/alfawad/vision-mission" },
      { nameKey: "industrial.nav.quality", path: "/alfawad/quality-policy" },
      { nameKey: "industrial.nav.env_safety", path: "/alfawad/environment-safety" },
    ],
  },
  {
    nameKey: "industrial.nav.services",
    path: "/alfawad/services",
    dropdown: [
      { nameKey: "industrial.nav.manpower", path: "/alfawad/services/technical-manpower" },
      { nameKey: "industrial.nav.equipment", path: "/alfawad/services/heavy-equipment" },
      { nameKey: "industrial.nav.support", path: "/alfawad/services/project-support" },
      { nameKey: "industrial.nav.management", path: "/alfawad/services/project-management" },
      { nameKey: "industrial.nav.material", path: "/alfawad/services/material-service" },
    ],
  },
  { nameKey: "industrial.nav.brochure", path: "/alfawad/brochure" },
  { nameKey: "industrial.nav.clients", path: "/alfawad/clients" },
  { nameKey: "industrial.nav.career", path: "/alfawad/career" },
  { nameKey: "industrial.nav.enquiry", path: "/alfawad/enquiry" },
  { nameKey: "industrial.nav.contact", path: "/alfawad/contact" },
];

const AlfawadNavbar = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) setActiveDropdown(null);
    else setActiveDropdown(name);
  };

  return (
    <nav className="bg-white text-black shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo / Brand */}
          <Link to="/alfawad" className="flex items-center gap-3">
            <img 
              src="/src/assets/mainlogo.jpg" 
              alt="LAMIYA AL KHALEEJ AL ITTEHAD" 
              className="h-16 md:h-20 w-auto object-contain brightness-110" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {ALFAWAD_LINKS.map((link) => (
              <div key={link.nameKey} className="relative group">
                {link.dropdown ? (
                  <button className="flex items-center gap-1 px-3 py-2 text-[13px] font-black uppercase tracking-tighter hover:text-alfawad-primary transition-colors">
                    {t(link.nameKey)} <ChevronDown className="w-3 h-3 opacity-50" />
                  </button>
                ) : (
                  <Link
                    to={link.path!}
                    className={`px-3 py-2 text-[13px] font-black uppercase tracking-tighter hover:text-alfawad-primary transition-colors ${
                      location.pathname === link.path ? "text-alfawad-primary" : ""
                    }`}
                  >
                    {t(link.nameKey)}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-0 w-64 bg-white text-gray-800 shadow-2xl rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-2 border-alfawad-primary py-2 z-50">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.path}
                        to={sublink.path}
                        className="block px-6 py-3 text-[12px] font-bold uppercase tracking-wider hover:bg-gray-50 hover:text-alfawad-primary transition-colors border-b border-gray-50 last:border-0"
                      >
                        {t(sublink.nameKey)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Social Icons Right */}
            <div className="flex items-center gap-4 ml-6 pl-6 border-l border-gray-200">
               <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><span className="text-sm font-black">f</span></a>
               <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors"><span className="text-sm font-black">IG</span></a>
               <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors"><span className="text-sm font-black">IN</span></a>
               <a href="#" className="text-gray-400 hover:text-black transition-colors"><span className="text-sm font-black">X</span></a>
            </div>
          </div>

          <div className="hidden lg:flex items-center ml-4">
             <Link to="/" className="text-[10px] font-bold bg-gray-100 text-gray-500 px-3 py-1.5 rounded-full hover:bg-alfawad-primary hover:text-white transition-all uppercase">
               {t('industrial.nav.exit')}
             </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-black hover:bg-gray-100 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-alfawad-dark overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {ALFAWAD_LINKS.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(link.nameKey)}
                        className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium hover:bg-[#a31b17] rounded-lg transition-colors border-b border-alfawad-primary/50"
                      >
                        {t(link.nameKey)}
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.nameKey ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.nameKey && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden bg-[#a31b17]/30 rounded-b-lg"
                          >
                            {link.dropdown.map((sublink) => (
                              <Link
                                key={sublink.path}
                                to={sublink.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-8 py-3 text-sm text-red-100 hover:text-white hover:bg-alfawad-primary/50"
                              >
                                {t(sublink.nameKey)}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path!}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm font-medium hover:bg-[#a31b17] rounded-lg transition-colors border-b border-alfawad-primary/50"
                    >
                      {t(link.nameKey)}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="mt-4 flex gap-2 w-full justify-center">
                <Link to="/" className="px-6 py-2 text-sm font-bold bg-white text-alfawad-primary rounded-lg shadow-md">
                  Back to Clean Pro
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default AlfawadNavbar;

