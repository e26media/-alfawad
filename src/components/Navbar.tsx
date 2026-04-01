import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "Services", path: "/services", children: [
      { label: "AC Cleaning", path: "/services/ac-cleaning" },
      { label: "Deep Cleaning", path: "/services/deep-cleaning" },
      { label: "Sofa Cleaning", path: "/services/sofa-cleaning" },
      { label: "Carpet Cleaning", path: "/services/carpet-cleaning" },
      { label: "Mattress Cleaning", path: "/services/mattress-cleaning" },
      { label: "Water Tank Cleaning", path: "/services/water-tank-cleaning" },
      { label: "Furniture Cleaning", path: "/services/furniture-cleaning" },
      { label: "Pest Control", path: "/services/pest-control" },
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

  if (location.pathname.startsWith('/alfawad')) {
    return null;
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-10 sm:top-12 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-md"
          : "bg-background/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Clean Pro KSA" className="h-8 sm:h-10 md:h-12 max-w-[120px] sm:max-w-none object-contain" />
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.path} className="relative group">
              {link.children ? (
                <button
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                    location.pathname.startsWith("/services")
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              ) : (
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              )}
              {link.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-background rounded-lg shadow-xl border border-border py-2 min-w-[200px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm text-foreground hover:text-primary hover:bg-secondary transition-all"
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

        <div className="flex items-center gap-2">
          <Link
            to="/booking"
            className="hidden lg:flex cta-teal px-6 py-2.5 text-sm gap-2"
          >
            <Calendar className="w-4 h-4" />
            Book Free Visit
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-foreground"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                      {dropdownOpen && link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block pl-8 py-2.5 text-sm text-muted-foreground hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                        location.pathname === link.path ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/booking" className="cta-teal px-6 py-3 text-sm text-center mt-3 gap-2">
                <Calendar className="w-4 h-4" />
                Book Free Visit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
