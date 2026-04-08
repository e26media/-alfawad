import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const OVERVIEW_LINKS = [
  { label: "INTRODUCTION", path: "/industrial/introduction" },
  { label: "CHAIRMAN MESSAGE", path: "/industrial/chairman-message" },
  { label: "CEO MESSAGE", path: "/industrial/ceo-message" },
  { label: "VISION & MISSION", path: "/industrial/vision-mission" },
  { label: "QUALITY POLICY", path: "/industrial/quality-policy" },
  { label: "ENVIRONMENT & SAFETY POLICY", path: "/industrial/environment-safety" },
];

const OverviewSidebar = () => {
  const location = useLocation();

  return (
    <div className="w-full lg:w-1/3 xl:w-1/4">
      {/* Sidebar Navigation */}
      <div className="bg-white shadow-xl border border-gray-100 overflow-hidden mb-8 ">
        <h3 className="bg-[#1c1c1c] text-white font-black uppercase text-[18px] px-8 py-5 flex items-center justify-between tracking-tighter">
          Overview <div className="w-2.5 h-2.5 rounded-full bg-alfawad-primary" />
        </h3>
        <ul className="flex flex-col">
          {OVERVIEW_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path} className="border-b border-gray-100 last:border-0 ">
                <Link
                  to={link.path}
                  className={`flex items-center justify-between px-8 py-5 transition-all text-[14px] font-black tracking-tight group ${
                    isActive
                      ? "text-alfawad-primary bg-gray-50"
                      : "text-gray-600 hover:bg-gray-50 hover:text-alfawad-primary"
                  }`}
                >
                  {link.label}
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isActive ? "text-alfawad-primary" : "text-gray-300 group-hover:translate-x-1 group-hover:text-alfawad-primary"
                  }`} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Brochure CTA */}
      <div className="bg-alfawad-primary p-8 text-white text-center flex flex-col items-center gap-6 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full transition-transform group-hover:scale-150" />
        <h4 className="text-xl font-black uppercase tracking-tighter relative z-10 leading-none">Download <br/> Corporate Profile</h4>
        <p className="text-white/80 text-sm font-bold relative z-10 leading-relaxed uppercase tracking-wider">Get our complete catalog</p>
        <button className="bg-black text-white px-8 py-4 font-black uppercase text-xs tracking-widest w-full transition-all hover:bg-white hover:text-black relative z-10 shadow-lg hover:-translate-y-1">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default OverviewSidebar;




