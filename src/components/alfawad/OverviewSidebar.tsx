import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const OVERVIEW_LINKS = [
  { label: "Introduction", path: "/AL FAWAD/introduction" },
  { label: "Chairman Message", path: "/AL FAWAD/chairman-message" },
  { label: "Vision & Mission", path: "/AL FAWAD/vision-mission" },
  { label: "Quality Policy", path: "/AL FAWAD/quality-policy" },
  { label: "Environment & Safety Policy", path: "/AL FAWAD/environment-safety" },
];

const OverviewSidebar = () => {
  const location = useLocation();

  return (
    <div className="w-full lg:w-1/3 xl:w-1/4">
      {/* Sidebar Navigation */}
      <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden mb-8">
        <h3 className="bg-gray-900 text-white font-bold uppercase text-lg px-6 py-4 flex items-center justify-between">
          Overview <div className="w-2 h-2 rounded-full bg-alfawad-primary" />
        </h3>
        <ul className="flex flex-col">
          {OVERVIEW_LINKS.map((link) => (
            <li key={link.path} className="border-b border-gray-100 last:border-0">
              <Link
                to={link.path}
                className={`flex items-center justify-between px-6 py-4 transition-all uppercase text-sm font-bold group ${
                  location.pathname === link.path
                    ? "bg-red-50 font-bold text-alfawad-primary border-l-4 border-alfawad-primary"
                    : "text-gray-600 hover:bg-gray-50 hover:text-alfawad-primary border-l-4 border-transparent hover:border-red-200"
                }`}
              >
                {link.label}
                <ChevronRight className={`w-4 h-4 transition-transform ${
                  location.pathname === link.path ? "text-alfawad-primary" : "text-gray-400 group-hover:translate-x-1 group-hover:text-alfawad-primary"
                }`} />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Brochure CTA */}
      <div className="bg-alfawad-primary rounded-lg shadow-lg p-6 text-white text-center flex flex-col items-center gap-4">
        <h4 className="text-xl font-black uppercase">Download Profile</h4>
        <p className="text-sm font-medium text-white/90">Get our complete corporate brochure and service catalog.</p>
        <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md uppercase text-sm font-bold w-full transition-colors">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default OverviewSidebar;



