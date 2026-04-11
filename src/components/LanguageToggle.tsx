import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageTopBar = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 20, stiffness: 120, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-[200] h-14 flex items-center justify-center bg-[#0a0a0a] border-b border-white/10"
    >
      <div className="flex items-center gap-1 p-3 rounded-full bg-white/5 border border-white/10">

        {/* EN Button */}
        <motion.button
          onClick={() => i18n.changeLanguage('en')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', damping: 15, stiffness: 300 }}
          className="relative px-6 py-0.5 rounded-full text-[12px] font-black uppercase tracking-widest select-none transition-colors duration-200"
          style={{ color: !isAr ? '#0a0a0a' : 'rgba(255,255,255,0.45)' }}
        >
          {/* Active background slide */}
          {!isAr && (
            <motion.span
              layoutId="lang-pill"
              className="absolute  inset-0 rounded-full bg-alfawad-primary shadow-[0_0_12px_rgba(182,138,65,0.5)]"
              transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            />
          )}
          <span className="relative z-10 ">English</span>
        </motion.button>

        {/* AR Button */}
        <motion.button
          onClick={() => i18n.changeLanguage('ar')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', damping: 15, stiffness: 300 }}
          className="relative  px-6 py-0.5 rounded-full text-[12px] font-black uppercase tracking-widest select-none transition-colors duration-200"
          style={{ color: isAr ? '#0a0a0a' : 'rgba(255,255,255,0.45)' }}
        >
          {isAr && (
            <motion.span
              layoutId="lang-pill"
              className="absolute  inset-0 rounded-full bg-alfawad-primary shadow-[0_0_12px_rgba(182,138,65,0.5)]"
              transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            />
          )}
          <span className="relative z-10">العربية</span>
        </motion.button>

      </div>
    </motion.div>
  );
};

// Inline variant for mobile menus
export const LanguageToggleInline = ({ className = '' }: { className?: string }) => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <div className={`flex items-center gap-1 p-2 rounded-full bg-black/5 border border-black/10 ${className}`}>

      <motion.button
        onClick={() => i18n.changeLanguage('en')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative px-3 py-0.5 rounded-full text-[11px] font-black uppercase tracking-widest select-none"
        style={{ color: !isAr ? '#ffffff' : 'rgba(0,0,0,0.4)' }}
      >
        {!isAr && (
          <motion.span
            layoutId="lang-pill-inline"
            className="absolute inset-0 rounded-full bg-alfawad-primary"
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
          />
        )}
        <span className="relative z-10">English</span>
      </motion.button>

      <motion.button
        onClick={() => i18n.changeLanguage('ar')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative px-3 py-0.5 rounded-full text-[11px] font-black uppercase tracking-widest select-none"
        style={{ color: isAr ? '#ffffff' : 'rgba(0,0,0,0.4)' }}
      >
        {isAr && (
          <motion.span
            layoutId="lang-pill-inline"
            className="absolute inset-0 rounded-full bg-alfawad-primary"
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
          />
        )}
        <span className="relative z-10">العربية</span>
      </motion.button>

    </div>
  );
};

export default LanguageTopBar;
