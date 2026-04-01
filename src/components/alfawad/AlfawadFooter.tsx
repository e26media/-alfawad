import { ArrowRight, Download, ArrowUp } from "lucide-react";

// The logo URLs from the screenshot
const PARTNER_LOGOS = [
  { name: "CTCI", src: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=200&h=200&fit=crop" },
  { name: "DAELIM", src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop" },
  { name: "DAEWOO E&C", src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop" },
  { name: "GS E&C", src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop" },
  { name: "HYUNDAI", src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop" },
  { name: "SABIC", src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop" },
];

const AlfawadFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative font-muli">
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a 
          href="https://wa.me/966500000000" 
          target="_blank" 
          rel="noreferrer"
          className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
        </a>
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 bg-alfawad-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Scroll to top"
        >
          <span className="font-semibold text-sm">up</span>
        </button>
      </div>

      <footer className="bg-[#1c1c1c] text-white pt-20 pb-12 overflow-hidden border-t-4 border-alfawad-primary relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2629&auto=format&fit=crop')", backgroundBlendMode: 'overlay', backgroundColor: 'rgba(28, 28, 28, 0.95)'}}>
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
            
            {/* Left Box: Contact Form */}
            <div className="w-full lg:w-[45%] bg-[#f4f5f6] p-10 md:p-14 rounded shadow-2xl relative z-10 text-gray-800">
              <h2 className="text-[34px] font-semibold text-black mb-4">Get in touch</h2>
              <p className="text-[#777777] text-[18px] font-normal leading-[30px] mb-10 max-w-[400px]">
                Let's talk about what you want to accomplish and how we can make it happen.
              </p>
              
              <form className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-[#777777] uppercase tracking-wide">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-[#cccccc] pb-2 focus:outline-none focus:border-alfawad-primary text-black transition-colors" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-[#777777] uppercase tracking-wide">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-[#cccccc] pb-2 focus:outline-none focus:border-alfawad-primary text-black transition-colors" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-[#777777] uppercase tracking-wide">Enquiry Description</label>
                  <textarea rows={2} className="w-full bg-transparent border-b border-[#cccccc] pb-2 focus:outline-none focus:border-alfawad-primary text-black transition-colors resize-none"></textarea>
                </div>

                <button type="button" className="bg-[#e43b35] hover:bg-black text-white font-semibold flex items-center justify-center gap-2 py-4 rounded transition-colors mt-4">
                  Get in Touch <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Right Box: Partners Grid */}
            <div className="w-full lg:w-[55%] flex flex-col justify-center">
              <h2 className="text-[32px] md:text-[38px] font-semibold text-white leading-tight mb-6">
                Some of the partners we've cooperated with
              </h2>
              <p className="text-[#a5a5a5] text-[17px] leading-[30px] font-normal mb-10 max-w-[650px]">
                We have proved our commitments by providing our clients with quality and timely service. Some of the reputed and renowned companies we deal are.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-[700px]">
                {PARTNER_LOGOS.map((partner, index) => (
                  <div key={index} className="bg-white aspect-[4/3] flex items-center justify-center p-4">
                    {/* Placeholder image representation since actual logos aren't readily available via URLs */}
                    <div className="text-center">
                      <p className="text-gray-400 font-bold uppercase tracking-widest text-xs md:text-sm">{partner.name}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Company Profile Download Banner */}
              <div className="w-full max-w-[700px] h-[80px] bg-red-600 flex items-center justify-between px-8 cursor-pointer hover:bg-red-700 transition-colors group relative overflow-hidden" style={{ backgroundImage: "linear-gradient(90deg, #c02a24 0%, #e8362d 100%)" }}>
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-white text-xl md:text-2xl font-semibold relative z-10">Company Profile</h3>
                <span className="text-white text-sm md:text-base flex items-center gap-2 relative z-10 font-medium tracking-wide">
                  Download <Download className="w-5 h-5" />
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Small Bottom Bar (Copyright usually goes here if applicable) */}
        <div className="border-t border-gray-800 mt-20 pt-6 text-center text-sm text-[#777777]">
          &copy; {new Date().getFullYear()} AL FAWAD Engineering & Construction. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default AlfawadFooter;



