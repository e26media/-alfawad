import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const VENDOR_DATA = [
  { name: "Saudi Aramco", code: "4913", src: "https://alfawad.com/images/client-logo/saudi-aramco.jpg" },
  { name: "SABIC", code: "508551", src: "https://alfawad.com/images/client-logo/SABIC.jpg" },
  { name: "Saudi Electricity Company", code: "5017989", src: "https://alfawad.com/images/client-logo/Saudi-electricity.jpg" },
  { name: "SAIPEM", code: "162782", src: "https://alfawad.com/images/client-logo/Saipem.jpg" },
  { name: "Petrofac", code: "3520", src: "https://alfawad.com/images/client-logo/petrofac.jpg" },
  { name: "Royal Commission", code: "3603866", src: "https://alfawad.com/images/client-logo/Royal-commission.jpg" },
  { name: "SGC", code: "100", src: "https://alfawad.com/images/client-logo/hyundai.jpg" }, // Placeholder for SGC if not available
];

const AlfawadFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative font-muli bg-white overflow-hidden">
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3">
        <a
          href="https://wa.me/966501007079"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
        </a>
        <button
          onClick={scrollToTop}
          className="w-14 h-14 bg-alfawad-primary text-white rounded-full flex flex-col items-center justify-center shadow-xl hover:scale-110 transition-transform active:translate-y-1"
        >
          <span className="text-[12px] font-black uppercase leading-none">up</span>
          <ArrowUp className="w-4 h-4 mt-1" />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row w-full min-h-[450px]">

        {/* Left Side: White Background */}
        <div className="lg:w-[55%] bg-[#f8f9fa] pt-16 pb-12 px-6 lg:pl-20 lg:pr-10">
          {/* Top Brand & Certs Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
            <Link to="/alfawad" className="block max-w-[220px]">
              <img
                src="/lamiya-logo.png"
                alt="Lamiya Al Khaleej"
                className="w-full h-auto object-contain max-h-24"
              />
            </Link>

            {/* Certification Slider */}
            <div className="w-full max-w-[300px] overflow-hidden relative group">
              <motion.div
                drag="x"
                dragConstraints={{ left: -100, right: 0 }}
                className="flex items-center gap-6 cursor-grab active:cursor-grabbing"
              >
                <img src="https://alfawad.com/images/q.png" alt="Cert 1" className="h-14 w-auto object-contain shrink-0" />
                <img src="https://alfawad.com/images/w.png" alt="Cert 2" className="h-14 w-auto object-contain shrink-0" />
                <img src="https://alfawad.com/images/e.png" alt="Cert 3" className="h-14 w-auto object-contain shrink-0" />
                <img src="https://alfawad.com/images/q.png" alt="Cert 4" className="h-14 w-auto object-contain shrink-0" />
                <img src="https://alfawad.com/images/w.png" alt="Cert 5" className="h-14 w-auto object-contain shrink-0" />
              </motion.div>
              {/* Visual indicator for drag */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-full bg-gradient-to-l from-[#f8f9fa] to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Vendors Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {VENDOR_DATA.map((vendor, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="bg-white p-3 aspect-square flex items-center justify-center mb-3 shadow-sm border border-gray-100 group-hover:shadow-md transition-all">
                  <img src={vendor.src} alt={vendor.name} className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex flex-col items-center text-[11px] font-bold text-center">
                  <span className="text-gray-500 uppercase tracking-tighter">Vendor</span>
                  <span className="text-gray-500 uppercase tracking-tighter">Code</span>
                  <span className="text-black font-black text-[13px] mt-1">{vendor.code}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Gold/Red Background */}
        <div className="lg:w-[45%] bg-alfawad-primary text-white pt-16 pb-12 px-6 lg:px-20 relative">
          <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-20">

        {/* Contact Us */}
        <div className="flex-1 lg:pl-10">
          <h4 className="text-[20px] sm:text-[22px] font-black uppercase tracking-tighter mb-8 sm:mb-10 border-b border-white/20 pb-4 inline-block">Contact Us</h4>
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="flex items-start gap-4">
              <div className="mt-1"><span className="p-1 border border-white/40 rounded-sm">&bull;</span></div>
              <p className="text-[14px] sm:text-[15px] font-bold leading-relaxed">
                P.O Box: 10778 / Postal Code <br />
                31951 - Jubail, <br />
                Makka Street Jubail
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 flex items-center justify-center border border-white/40 rounded-sm">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.759c-.645.277-1.111.917-1.882.252l-2.83-2.428c-.782-.671-.131-1.113.253-1.883l-6.759-3.522c-.383.771-1.045 1.258-1.815.597l-2.831-2.429c-.771-.661-.253-1.314.131-2.085l3.52-6.759c.771-.383 1.341-.273 2.012.302l2.831 2.429c.671.575.253 1.242-.131 2.013l6.759 3.521c.383-.771 1.045-1.242 1.815-.567l2.83 2.429c.771.661.254 1.314-.13 2.085z" /></svg>
              </div>
              <span className="text-[15px] sm:text-[16px] font-black tracking-tight"> +966 50 100 7079</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 flex items-center justify-center border border-white/40 rounded-sm">
                <span className="text-sm">✉️</span>
              </div>
              <span className="text-[14px] sm:text-[16px] font-black tracking-tighter lowercase"> info@lamiyaalkahleej.com</span>
            </div>
          </div>
        </div>

            {/* Our Services */}
            <div className="flex-1 lg:pl-10">
              <h4 className="text-[22px] font-black uppercase tracking-tighter mb-10 border-b border-white/20 pb-4 inline-block">Our Services</h4>
              <ul className="flex flex-col gap-6">
                {["Technical Manpower Service", "Heavy Equipment Service", "Project Support Services", "Project Management Service", "Material Service"].map((service, i) => (
                  <li key={i}>
                    <Link to="#" className="text-[15px] font-bold hover:translate-x-2 transition-transform inline-block opacity-90 hover:opacity-100">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-24 pt-8 border-t border-white/10 flex flex-col items-center gap-4 text-center">
            <p className="text-[13px] font-bold opacity-80 uppercase tracking-widest">
              &copy;Copyright 2026 <span className="font-black italic">Lamiya Al Khaleej</span> All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlfawadFooter;



