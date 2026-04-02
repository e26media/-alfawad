import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface AlfawadPageHeaderProps {
  title: string;
  breadcrumbs: { label: string; path?: string }[];
  bgImage?: string;
  subtitle?: string;
}

const AlfawadPageHeader = ({ 
  title, 
  breadcrumbs,
  bgImage = "https://alfawad.com/images/1.jpg",
  subtitle
}: AlfawadPageHeaderProps) => {
  return (
    <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-alfawad-primary/75 z-10" />
      <img 
        src={bgImage} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] relative z-20 flex flex-col items-center justify-center text-center pt-20">
         <div className="w-full text-white">
            <h1 className="text-[45px] md:text-[75px] font-black leading-[0.9] mb-6 uppercase tracking-tighter text-white drop-shadow-2xl whitespace-pre-line">
              {title.replace(/ /g, "\n")}
            </h1>
            <div className="w-24 h-2 bg-white mb-8 mx-auto" />
            <div className="flex items-center justify-center gap-3 text-[14px] md:text-[16px] font-black text-white/95 uppercase tracking-[0.2em]">
              <Link to="/alfawad" className="hover:text-alfawad-accent transition-all duration-300">Home</Link>
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center gap-3">
                  <ChevronRight className="w-4 h-4 text-white/50" />
                  {crumb.path ? (
                    <Link to={crumb.path} className="hover:text-alfawad-accent transition-all duration-300">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </div>
              ))}
            </div>
         </div>
      </div>
    </section>
  );
};

export default AlfawadPageHeader;



