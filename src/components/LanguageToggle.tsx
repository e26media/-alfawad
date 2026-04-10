import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language === 'ar' ? 'En' : 'Ar';

  return (
    <div className="fixed top-24 right-4 z-[100] sm:top-28 sm:right-10">
      <motion.button
        whileHover={{ scale: 1.1, shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleLanguage}
        className="flex items-center gap-3 px-5 py-2.5 bg-black text-white border border-white/10 shadow-2xl rounded-full group transition-all"
      >
        <div className="w-7 h-7 rounded-full bg-alfawad-primary flex items-center justify-center group-hover:rotate-12 transition-transform">
          <Languages className="w-4 h-4 text-white" />
        </div>
        <span className="text-[12px] font-black uppercase tracking-[0.2em]">
          {i18n.language === 'en' ? 'Arabic' : 'English'}
        </span>
        <div className="flex items-center gap-1 ml-1 border-l border-white/20 pl-3">
          <span className={`text-[10px] font-bold ${i18n.language === 'en' ? 'text-alfawad-primary' : 'text-white/40'}`}>EN</span>
          <span className="text-[10px] text-white/20">/</span>
          <span className={`text-[10px] font-bold ${i18n.language === 'ar' ? 'text-alfawad-primary' : 'text-white/40'}`}>AR</span>
        </div>
      </motion.button>
    </div>
  );
};

export default LanguageToggle;
