import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const ContactButton = () => {
  const location = useLocation();
  if (!location.pathname.startsWith('/cleaning')) return null;

  return (
    <motion.a
      href="tel:+966507077611"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow bg-primary text-primary-foreground text-sm font-medium"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring" }}
      whileHover={{ scale: 1.05 }}
    >
      <Phone className="w-4 h-4" />
      Contact us
    </motion.a>
  );
};

export default ContactButton;
