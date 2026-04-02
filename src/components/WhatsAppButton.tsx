import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const WhatsAppButton = () => {
  const location = useLocation();

  return (
    <motion.a
    href="https://wa.me/966501007079"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
    style={{ backgroundColor: "hsl(142, 70%, 45%)" }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring" }}
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6 text-primary-foreground" />
    </motion.a>
  );
};

export default WhatsAppButton;
