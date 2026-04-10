import React from 'react';
import { Link } from 'react-router-dom';
import { newsItems } from '../../data/newsData';
import { useTranslation } from "react-i18next";

export const AlfawadNews = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <section className="relative py-24 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden bg-[#ffea99]">
      {/* Background Pattern - Wavy fluid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
          <defs>
            <pattern id="wavy-pattern" x="0" y="0" width="400" height="200" patternUnits="userSpaceOnUse">
              <path 
                d="M-400 100 C -300 0, -100 200, 0 100 C 100 0, 300 200, 400 100 C 500 0, 700 200, 800 100" 
                fill="none" 
                stroke="#b68a41" 
                strokeWidth="50" 
                opacity="0.2"
              />
              <path 
                d="M-400 140 C -300 40, -100 240, 0 140 C 100 40, 300 240, 400 140 C 500 40, 700 240, 800 140" 
                fill="none" 
                stroke="#b68a41" 
                strokeWidth="50" 
                opacity="0.2"
              />
              <path 
                d="M-400 60 C -300 -40, -100 160, 0 60 C 100 -40, 300 160, 400 60 C 500 -40, 700 160, 800 60" 
                fill="none" 
                stroke="#b68a41" 
                strokeWidth="50" 
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wavy-pattern)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <h2 className="text-black text-[32px] sm:text-[45px] md:text-[55px] font-black mb-12 sm:mb-16 md:mb-20 uppercase tracking-tighter leading-tight font-muli">
          {isAr ? "الأخبار والتحديثات" : "News & Updates"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {newsItems.map((item, index) => (
            <Link 
              key={index} 
              to={`/industrial/news/${item.id}`}
              className="bg-white flex flex-col group cursor-pointer transition-all duration-500 hover:shadow-2xl"
            >
              <div className="aspect-[16/11] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 sm:p-10 flex flex-col flex-grow">
                <h3 className="text-[20px] sm:text-[23px] md:text-[25px] font-black text-black mb-6 sm:mb-8 leading-[1.2] uppercase tracking-tighter line-clamp-2 min-h-[60px]">
                  {item.title}
                </h3>
                <div className="mt-auto">
                  <span className="text-[12px] sm:text-[14px] font-black text-gray-800 uppercase tracking-widest border-b-2 border-transparent group-hover:border-black transition-all">
                    {isAr ? "اقرأ المزيد" : "Read More"}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
