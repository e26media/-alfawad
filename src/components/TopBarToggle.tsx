import { Link, useLocation } from "react-router-dom";
import { Clock } from "lucide-react";

export default function TopBarToggle() {
  const location = useLocation();
  const isEngineering = location.pathname.startsWith('/industrial');

  return (
    <div className="fixed top-0 left-0 right-0 h-10 sm:h-12 bg-[#0d0d0d] border-b border-white/5 z-[60] flex items-center justify-between px-4 sm:px-8 shadow-md font-muli">
      <div className="flex items-center gap-6">
        {/* <div className="flex items-center gap-2 sm:gap-3">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-alfawad-primary" />
          <span className="text-[8px] sm:text-[10px] items-center gap-2 flex font-black uppercase tracking-[0.1em] text-white whitespace-nowrap">
            <span className="hidden sm:inline">Active Time:</span>
            <span className="opacity-70 italic">Sat - Thu 08:00 - 18:00</span>
          </span>
        </div> */}
      </div>

      <div className="flex items-center bg-black/50 p-1 rounded-md border border-gray-700/50 relative w-[180px] sm:w-[220px] h-8 sm:h-9 ml-auto sm:ml-0">

        <div
          className={`absolute h-[calc(100%-8px)] w-[calc(50%-4px)] rounded shadow-sm transition-all duration-300 ease-out ${isEngineering
              ? "left-1 bg-alfawad-primary shadow-alfawad-primary/30"
              : "left-[calc(50%+3px)] bg-alfawad-primary shadow-alfawad-primary/30"
            }`}
        />

        <Link
          to="/industrial"
          className={`relative z-10 flex-1 flex items-center justify-center text-center text-[10px] sm:text-[11px] font-black uppercase tracking-widest transition-colors duration-300 ${isEngineering ? "text-white" : "text-gray-400 hover:text-gray-200"
            }`}
        >
          Engineering
        </Link>
        <Link
          to="/cleaning"
          className={`relative z-10 flex-1 flex items-center justify-center text-center text-[10px] sm:text-[11px] font-black uppercase tracking-widest transition-colors duration-300 ${!isEngineering ? "text-white" : "text-gray-400 hover:text-gray-200"
            }`}
        >
          Cleaning
        </Link>
      </div>
    </div>
  );
}
