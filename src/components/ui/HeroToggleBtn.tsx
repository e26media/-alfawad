import { Link, useLocation } from "react-router-dom";
import { HardHat, Droplets, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroToggleBtn() {
  const location = useLocation();
  const isEngineering = location.pathname.startsWith('/industrial');

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
      className="z-40 px-4 w-full max-w-fit"
    >
      <div className="flex items-center backdrop-blur-2xl bg-black/50 p-1.5 rounded-full border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] relative min-w-[280px] sm:min-w-[420px] h-14 sm:h-16 group">
        
        {/* Animated Premium Slider Container */}
        <div className="absolute inset-1.5 w-full h-[calc(100%-12px)] pointer-events-none">
          <motion.div
            layout
            animate={{ x: isEngineering ? "0%" : "103%" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="h-full w-[calc(50%-6px)] rounded-full bg-gradient-to-r from-alfawad-primary to-[#d4af37] shadow-[0_0_30px_rgba(182,138,65,0.4)]"
          />
        </div>

        {/* Engineering Link */}
        <Link
          to="/industrial"
          className={`relative z-10 flex-1 flex items-center justify-center gap-2 sm:gap-3 text-center text-[10px] sm:text-[13px] font-black uppercase tracking-[0.15em] transition-all duration-500 ${
            isEngineering ? "text-white" : "text-white/40 hover:text-white/70"
          }`}
        >
          <div className="relative">
            {/* <HardHat className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-500 ${isEngineering ? 'scale-110' : 'scale-90 opacity-50'}`} /> */}
            {isEngineering && (
              <motion.div 
                layoutId="sparkle"
                className="absolute -top-1.5 -right-1.5"
              >
                {/* <Sparkles className="w-3 h-3 text-yellow-200 animate-pulse" /> */}
              </motion.div>
            )}
          </div>
          <span className={isEngineering ? "inline" : "hidden sm:inline"}>Engineering</span>
          {!isEngineering && <span className="sm:hidden">Engineering</span>}
        </Link>

        {/* Cleaning Link */}
        <Link
          to="/cleaning"
          className={`relative z-10 flex-1 flex items-center justify-center gap-2 sm:gap-3 text-center text-[10px] sm:text-[13px] font-black uppercase tracking-[0.15em] transition-all duration-500 ${
            !isEngineering ? "text-white" : "text-white/40 hover:text-white/70"
          }`}
        >
          <div className="relative">
            {/* <Droplets className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-500 ${!isEngineering ? 'scale-110' : 'scale-90 opacity-50'}`} /> */}
            {!isEngineering && (
               <motion.div 
               layoutId="sparkle"
               className="absolute -top-1.5 -right-1.5"
             >
               {/* <Sparkles className="w-3 h-3 text-blue-200 animate-pulse" /> */}
             </motion.div>
            )}
          </div>
          <span className={!isEngineering ? "inline" : "hidden sm:inline"}>Cleaning Services</span>
          {isEngineering && <span className="sm:hidden">Cleaning Services</span>}
        </Link>
      </div>
    </motion.div>
  );
}
