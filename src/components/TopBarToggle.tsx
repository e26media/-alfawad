import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function TopBarToggle() {
  const location = useLocation();
  const { t } = useTranslation();
  const isEngineering = location.pathname.startsWith('/industrial');

  return (
    <motion.div 
      initial={{ y: 100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
      className="fixed bottom-4 sm:bottom-8 left-1/2 z-[100] px-3 w-full max-w-fit"
      // Force LTR so RTL page direction never flips the slider
      dir="ltr"
    >
      <div className="flex items-center backdrop-blur-2xl bg-black/80 p-1.5 rounded-full border border-white/20 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.8)] relative min-w-[300px] sm:min-w-[420px] h-12 sm:h-16">

        {/* Sliding background pill — uses left offset, immune to RTL */}
        <motion.div
          animate={{ left: isEngineering ? "6px" : "calc(50% + 3px)" }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className="absolute top-1.5 bottom-1.5 w-[calc(50%-9px)] rounded-full bg-gradient-to-r from-alfawad-primary to-[#d4af37] shadow-[0_0_20px_rgba(182,138,65,0.4)] pointer-events-none"
        />

        {/* Engineering Link */}
        <Link
          to="/industrial"
          className={`relative z-10 flex-1 flex items-center justify-center gap-2 sm:gap-3 text-center text-[10px] sm:text-[13px] font-black uppercase tracking-[0.1em] transition-all duration-500 px-2 ${
            isEngineering ? "text-white" : "text-white/40 hover:text-white/70"
          }`}
        >
          <span className="block">{t('nav.engineering', 'Engineering')}</span>
        </Link>

        {/* Cleaning Link */}
        <Link
          to="/cleaning"
          className={`relative z-10 flex-1 flex items-center justify-center gap-2 sm:gap-3 text-center text-[10px] sm:text-[13px] font-black uppercase tracking-[0.1em] transition-all duration-500 px-2 ${
            !isEngineering ? "text-white" : "text-white/40 hover:text-white/70"
          }`}
        >
          <span className="hidden sm:block">{t('nav.cleaning_services', 'Cleaning & Maintenance')}</span>
          <span className="block sm:hidden">{t('nav.cleaning', 'Cleaning & Maintenance')}</span>
        </Link>
      </div>
    </motion.div>
  );
}
