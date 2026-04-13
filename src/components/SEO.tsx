
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

const SEO = ({ 
  title = "Lamiya Al Khaleej Al Ittihad | General Contracting & Residential Services", 
  description = "Lamiya Al Khaleej Al Ittihad Establishment for General Contracting provides reliable residential care and professional contracting services across Saudi Arabia." 
}: SEOProps) => {
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, [title, description]);

  return null;
};

export default SEO;
