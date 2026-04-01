import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface AlfawadPageHeaderProps {
  title: string;
  breadcrumbs: { label: string; path?: string }[];
  bgImage?: string;
}

const AlfawadPageHeader = ({ 
  title, 
  breadcrumbs,
  bgImage = "https://images.unsplash.com/photo-1541888082424-eb5467551061?q=80&w=2670&auto=format&fit=crop"
}: AlfawadPageHeaderProps) => {
  return (
    <div className="relative h-64 md:h-80 w-full flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center px-4 w-full">
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider mb-4 drop-shadow-md">
          {title}
        </h1>
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm md:text-base font-semibold text-gray-300">
          <Link to="/AL FAWAD" className="hover:text-alfawad-primary transition-colors">Home</Link>
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-alfawad-primary" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-alfawad-primary transition-colors text-white">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-alfawad-primary">{crumb.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Visual Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-alfawad-primary z-20" />
    </div>
  );
};

export default AlfawadPageHeader;



