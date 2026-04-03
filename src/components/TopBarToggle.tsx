import { Link, useLocation } from "react-router-dom";

export default function TopBarToggle() {
  const location = useLocation();
  const isEngineering = location.pathname.startsWith('/industrial');

  return (
    <div className="fixed top-0 left-0 right-0 h-10 sm:h-12 bg-gray-900 border-b border-gray-800 z-[60] flex items-center justify-center sm:justify-end px-4 shadow-md">
      <div className="flex items-center bg-black/50 p-1 rounded-md border border-gray-700/50 relative w-[180px] sm:w-[220px] h-8 sm:h-9">
        
        <div 
          className={`absolute h-[calc(100%-8px)] w-[calc(50%-4px)] rounded shadow-sm transition-all duration-300 ease-out ${
            isEngineering 
              ? "left-1 bg-alfawad-primary shadow-alfawad-primary/30" 
              : "left-[calc(50%+3px)] bg-alfawad-primary shadow-alfawad-primary/30"
          }`}
        />

        <Link
          to="/industrial"
          className={`relative z-10 flex-1 flex items-center justify-center text-center text-[10px] sm:text-[11px] font-black uppercase tracking-widest transition-colors duration-300 ${
            isEngineering ? "text-black" : "text-gray-400 hover:text-gray-200"
          }`}
        >
          Engineering
        </Link>
        <Link
          to="/"
          className={`relative z-10 flex-1 flex items-center justify-center text-center text-[10px] sm:text-[11px] font-black uppercase tracking-widest transition-colors duration-300 ${
            !isEngineering ? "text-black" : "text-gray-400 hover:text-gray-200"
          }`}
        >
          Cleaning
        </Link>
      </div>
    </div>
  );
}
