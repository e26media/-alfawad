import laklogo from "@/assets/laklogo.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar, ChevronDown } from "lucide-react";
const logo = laklogo;

const navLinks = [
  { label: "Home", path: "/cleaning" },
  {
    label: "Services", path: "/services", children: [
      { label: "AC Cleaning", path: "/ac-cleaning" },
      { label: "Deep Cleaning", path: "/deep-cleaning-service" },
      { label: "Sofa Cleaning", path: "/sofa-cleaning-services" },
      { label: "Carpet Cleaning", path: "/carpet-cleaning-sanitation" },
      { label: "Mattress Cleaning", path: "/mattress-cleaning" },
      { label: "Water Tank Cleaning", path: "/water-tank-cleaning-disinfection" },
      { label: "Furniture Cleaning", path: "/furniture-cleaning-services" },
      { label: "Pest Control", path: "/annual-pest-control-contract" },
    ]
  },
  { label: "About Us", path: "/about" },
  { label: "Our Clients", path: "/clients" },
  { label: "Contact Us", path: "/contact" },
  { label: "Book a Free Visit", path: "/booking" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Only hide navbar if it's explicitly an industrial page
  if (location.pathname.startsWith('/industrial') || location.pathname === '/') return null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed  left-0 right-0 z-50 transition-all duration-500 font-muli bg-[#fff]"
    >
      <div 
        className={`w-full transition-all duration-500 border-b border-gray-100/50 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-xl py-2" 
            : "bg-white/90 backdrop-blur-md shadow-lg py-3"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/cleaning" className="flex-shrink-0 transition-transform hover:scale-105">
              <img src={logo} alt="LAMIYA AL KHALEEJ AL ITTEHAD" className={`transition-all duration-500 ${scrolled ? "h-9 sm:h-11" : "h-11 sm:h-13"} w-auto object-contain px-2`} />
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 items-center justify-center gap-x-1 xl:gap-x-2">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group px-1">
                {link.children ? (
                  <button
                    className={`px-5 py-2.5 rounded-xl text-[12px] xl:text-[13px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                      location.pathname.startsWith("/services")
                        ? "text-alfawad-primary bg-alfawad-primary/5"
                        : "text-gray-800 hover:text-black hover:bg-gray-100/50"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" strokeWidth={2} />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-5 py-2.5 rounded-xl text-[12px] xl:text-[13px] font-bold uppercase tracking-wider transition-all duration-300 ${
                      location.pathname === link.path
                        ? "text-alfawad-primary bg-alfawad-primary/10 shadow-sm"
                        : "text-gray-800 hover:text-black hover:bg-gray-100/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
                {link.children && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden py-3 min-w-[260px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-6 py-3.5 text-[11px] font-black uppercase tracking-widest text-black hover:text-alfawad-primary hover:bg-gray-50 transition-all border-b border-gray-50 last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/booking"
              className="hidden md:flex bg-black text-white hover:bg-alfawad-primary items-center justify-center px-8 xl:px-10 py-3 h-[48px] rounded-xl text-[11px] xl:text-[12px] font-bold uppercase tracking-[0.2em] transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-primary/30 group"
            >
              Book Visit
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
                  <div key={link.path} className="w-full">
                    {link.children ? (
                      <>
                        <button
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className="w-full flex items-center justify-between py-5 text-[15px] font-black uppercase tracking-widest text-black border-b border-gray-50"
                        >
                          {link.label}
                          <ChevronDown className={`w-5 h-5 transition-transform ${dropdownOpen ? "rotate-180 text-alfawad-primary" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {dropdownOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="bg-gray-50/50 rounded-2xl my-2 overflow-hidden px-2"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  className="block px-8 py-4 text-[13px] font-bold uppercase tracking-widest text-gray-500 hover:text-alfawad-primary"
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
                        to={link.path}
                        className={`block py-5 text-[15px] font-black uppercase tracking-widest border-b border-gray-50 ${
                          location.pathname === link.path ? "text-alfawad-primary" : "text-black hover:text-alfawad-primary"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="mt-12 flex flex-col gap-8 pb-10">
                  <Link to="/booking" className="bg-black text-white py-5 rounded-full text-[13px] font-black uppercase tracking-widest text-center shadow-xl active:scale-95 transition-all">
                    Book Free Visit
                  </Link>

                  <div className="flex flex-col gap-8">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Direct Support</p>
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col items-center text-center">
                        <span className="text-[14px] font-black uppercase tracking-tighter text-black leading-tight">Ashraf Al badan</span>
                        <a href="tel:+966507077611" className="text-[11px] font-bold text-alfawad-primary uppercase tracking-widest">+966 50 707 7611</a>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <span className="text-[14px] font-black uppercase tracking-tighter text-black leading-tight">Ahamed suhail</span>
                        <div className="flex flex-col gap-1 items-center">
                          <a href="tel:+966510304627" className="text-[11px] font-bold text-alfawad-primary uppercase tracking-widest">+966 51 030 4627</a>
                          <a href="tel:+966566567518" className="text-[11px] font-bold text-alfawad-primary uppercase tracking-widest">+966 56 656 7518</a>
                        </div>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <span className="text-[14px] font-black uppercase tracking-tighter text-black leading-tight">Safwan</span>
                        <a href="tel:+966583769845" className="text-[11px] font-bold text-alfawad-primary uppercase tracking-widest">+966 58 376 9845</a>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-center mt-6 pt-6 border-t border-gray-100 w-full">
                      <a href="mailto:info@lamiyaalkhaleej.com" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-alfawad-primary transition-colors">info@lamiyaalkhaleej.com</a>
                      <a href="mailto:ashrafalbadan@lamiyaalkhaleej.com" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-alfawad-primary transition-colors">ashrafalbadan@lamiyaalkhaleej.com</a>
                      <a href="mailto:ahamedsuhail@lamiyaalkhaleej.com" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-alfawad-primary transition-colors">ahamedsuhail@lamiyaalkhaleej.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
