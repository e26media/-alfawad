import { useParams, Link } from "react-router-dom";
import { ChevronRight, Calendar, User, Tag, Share2 } from "lucide-react";
import { newsItems } from "../../data/newsData";
import ServiceSidebar from "../../components/alfawad/ServiceSidebar";
import { useTranslation } from "react-i18next";

const NewsDetail = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const { id } = useParams();
  const news = newsItems.find((item) => item.id === id);

  if (!news) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-black">{isAr ? "لم يتم العثور على الأخبار" : "News Not Found"}</h1>
        <Link to="/industrial" className="mt-4 text-alfawad-primary font-bold uppercase underline">{isAr ? "العودة للرئيسية" : "Back to Home"}</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white font-muli">

      {/* Premium Header Banner Section */}
      <section className="relative w-full h-[350px] md:h-[450px] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[#b68a41]/85 z-10" />
        <img
          src="/images/industrial/hero-1.png"
          alt="News Details Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] relative z-20 flex flex-col items-center justify-center text-center pt-20">
          <div className="w-full text-white">
            <h1 className="text-[32px] md:text-[55px] font-black leading-tight mb-6 uppercase tracking-tighter text-white drop-shadow-2xl max-w-4xl mx-auto">
              {news.title}
            </h1>
            <div className="w-24 h-2 bg-white mb-8 mx-auto" />
            <div className="flex items-center justify-center gap-3 text-[12px] md:text-[14px] font-black text-white/95 uppercase tracking-[0.2em]">
              <Link to="/" className="hover:text-alfawad-accent transition-all duration-300">{isAr ? "الرئيسية" : "Home"}</Link>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="text-white/70">{isAr ? "أخبار" : "News"}</span>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="text-white truncate max-w-[150px] sm:max-w-none">{news.title}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#f4f5f6]">
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* <div className="hidden lg:block w-1/4">
               <ServiceSidebar />
            </div> */}

            <div className="w-full lg:w-full">
              <div className="bg-white p-6 md:p-16 shadow-xl border border-gray-100 relative overflow-hidden group">

                {/* News Metadata */}
                {/* <div className="flex flex-wrap items-center gap-6 mb-10 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-alfawad-primary" />
                    <span className="text-[14px] font-black text-gray-400 uppercase tracking-widest">{news.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-alfawad-primary" />
                    <span className="text-[14px] font-black text-gray-400 uppercase tracking-widest">By Lamiya Admin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-5 h-5 text-alfawad-primary" />
                    <span className="text-[14px] font-black text-gray-400 uppercase tracking-widest">Industrial</span>
                  </div>
                </div> */}

                <div className="flex flex-col gap-10">
                  {/* Related Image */}
                  <div className="w-full aspect-video overflow-hidden rounded-sm shadow-lg mb-4">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover  transition-all duration-700"
                    />
                  </div>

                  {/* News Content */}
                  <div className="flex flex-col border-l-8 border-alfawad-primary pl-8 mb-6">
                    <h2 className="text-[28px] md:text-[40px] font-black text-black leading-tight uppercase tracking-tighter">
                      {isAr ? "رؤى وتحديثات المشروع" : "Project Insights & Updates"}
                    </h2>
                  </div>

                  <div className="text-[#666666] leading-[36px] text-[18px] font-medium flex flex-col gap-8">
                    <p className="text-[22px] font-bold text-gray-900 leading-relaxed italic">
                      {news.description}
                    </p>

                    <p>
                      {news.fullContent}
                    </p>

                    <p>
                      {isAr ? "كجزء من التزامنا بالشفافية والتميز، نشارك هذه التحديثات لإبقاء عملائنا وشركائنا على علم بالتقدم الذي نحرزه في القطاع الصناعي." : "As part of our commitment to transparency and excellence, we share these updates to keep our clients and partners informed about the strategic progress we are making in the industrial sector. Our dedicated teams work tirelessly to ensure that every project phase aligns with the high standards expected from Lamiya Al Khaleej Al Ittihad General Contracting."}
                    </p>
                  </div>

                  {/* Share/Actions */}
                  <div className="mt-12 pt-12 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* <div className="flex items-center gap-4">
                       <span className="font-black uppercase tracking-widest text-sm">Share this post:</span>
                       <div className="flex gap-2">
                          {[1,2,3].map(i => (
                            <button key={i} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-alfawad-primary hover:text-white transition-all">
                               <Share2 className="w-4 h-4" />
                            </button>
                          ))}
                       </div>
                    </div> */}
                    <Link to="/industrial" className="bg-black text-white px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-alfawad-primary transition-all shadow-lg hover:-translate-y-1">
                      {isAr ? "العودة إلى تحديثات الأخبار" : "Back to News Updates"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;
