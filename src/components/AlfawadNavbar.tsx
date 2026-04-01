import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ALFAWAD_LINKS = [
  { name: "Home", path: "/alfawad" },
  {
    name: "About Us",
    dropdown: [
      { name: "Overview", path: "/alfawad/overview" },
      { name: "Introduction", path: "/alfawad/introduction" },
      { name: "Chairman Message", path: "/alfawad/chairman-message" },
      { name: "Vision & Mission", path: "/alfawad/vision-mission" },
      { name: "Quality Policy", path: "/alfawad/quality-policy" },
      { name: "Environment & Safety Policy", path: "/alfawad/environment-safety" },
    ],
  },
  {
    name: "Our Services",
    path: "/alfawad/services",
    dropdown: [
      { name: "Technical Manpower Service", path: "/alfawad/services/technical-manpower" },
      { name: "Heavy Equipment Service", path: "/alfawad/services/heavy-equipment" },
      { name: "Project Support Service", path: "/alfawad/services/project-support" },
      { name: "Project Management Service", path: "/alfawad/services/project-management" },
      { name: "Material Service", path: "/alfawad/services/material-service" },
    ],
  },
  { name: "Our Brochure", path: "/alfawad/brochure" },
  { name: "Clients", path: "/alfawad/clients" },
  { name: "Career", path: "/alfawad/career" },
  { name: "Enquiry", path: "/alfawad/enquiry" },
  { name: "Contact Us", path: "/alfawad/contact" },
];

const AlfawadNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) setActiveDropdown(null);
    else setActiveDropdown(name);
  };

  return (
    <nav className="bg-alfawad-primary text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Brand */}
          <Link to="/alfawad" className="flex items-center gap-3">
            <div className="bg-white text-alfawad-primary font-bold p-2 px-4 rounded-md tracking-wider">
              ALFAWAD
            </div>
          </Link>

          {/* Clean Pro Return Toggle */}
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 bg-black/20 p-1 rounded-lg">
            <Link to="/" className="px-4 py-1.5 text-xs font-semibold rounded-md text-white/70 hover:text-white transition-colors">
              Clean Pro
            </Link>
            <span className="px-4 py-1.5 text-xs font-semibold rounded-md bg-white text-alfawad-primary shadow-sm">
              Alfawad
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {ALFAWAD_LINKS.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:bg-alfawad-dark rounded-md transition-colors">
                    {link.name} <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
                  </button>
                ) : (
                  <Link
                    to={link.path!}
                    className={`px-3 py-2 text-sm font-medium hover:bg-alfawad-dark rounded-md transition-colors ${
                      location.pathname === link.path ? "bg-alfawad-dark font-bold" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-800 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 py-2">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.path}
                        to={sublink.path}
                        className="block px-4 py-2 text-sm hover:bg-red-50 hover:text-alfawad-primary transition-colors"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:bg-alfawad-dark rounded-md"
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
                        onClick={() => toggleDropdown(link.name)}
                        className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium hover:bg-[#a31b17] rounded-lg transition-colors border-b border-alfawad-primary/50"
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
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
                                {sublink.name}
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
                      {link.name}
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

