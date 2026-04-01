import AlfawadPageHeader from "../../components/alfawad/AlfawadPageHeader";
import OverviewSidebar from "../../components/alfawad/OverviewSidebar";

const ChairmanMessage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <AlfawadPageHeader 
        title="Chairman Message" 
        breadcrumbs={[
          { label: "Overview", path: "/alfawad/introduction" },
          { label: "Chairman Message" }
        ]} 
        bgImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row gap-12">
          
          <OverviewSidebar />

          <div className="w-full lg:w-2/3 xl:w-3/4">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100 flex flex-col gap-8 relative">
              <h2 className="text-3xl font-black text-gray-900 uppercase relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-16 after:h-1.5 after:bg-alfawad-primary">
                Message from our Chairman
              </h2>

              <div className="flex flex-col md:flex-row gap-10 items-start mt-6">
                
                {/* Chairman Placeholder */}
                <div className="w-full md:w-1/3 shrink-0 flex flex-col gap-4">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl border-4 border-gray-100 relative grayscale hover:grayscale-0 transition-all duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=987&auto=format&fit=crop" 
                      alt="Chairman" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                      <div className="text-white">
                        <p className="font-black text-lg uppercase tracking-wider">Ahmed Fawad Bawzid</p>
                        <p className="text-[#ff6b66] text-xs font-bold uppercase tracking-widest mt-1">Founder & Chairman</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full justify-center md:w-2/3 flex flex-col gap-6 text-gray-700 leading-relaxed">
                  <span className="text-6xl text-red-200 absolute top-24 right-8 font-serif leading-none italic opacity-30 select-none">
                    "
                  </span>
                  
                  <p className="text-lg text-gray-900 font-medium">
                    "Welcome to ALFAWAD Engineering & Construction. Since our inception, we have dedicated ourselves to becoming a cornerstone in the Kingdom's industrial development sector."
                  </p>

                  <p>
                    It gives me immense pride to look back at our journey. Our continuous expansion is a direct testament to our unflinching commitment to quality, the relentless dedication of our expert teams, and, most importantly, the enduring trust our clients place in our capabilities.
                  </p>
                  
                  <p>
                    Saudi Arabia’s Vision 2030 has catalyzed unprecedented industrial growth. At ALFAWAD, we have proactively aligned our strategic infrastructure to support these monumental national ambitions. Whether it is deploying highly technical manpower or executing complex mechanical infrastructure projects, our objective remains singular: delivering excellence without exception.
                  </p>

                  <p>
                    We recognize that our strength lies entirely in our people. Therefore, maintaining stringent safety standards and fostering a culture of continuous learning and operational efficiency is our highest priority at all times.
                  </p>
                  
                  <p className="italic text-gray-500 border-l-2 border-alfawad-primary pl-4">
                    I invite you to explore our comprehensive range of services and experience the ALFAWAD standard—where your vision meets our passion for execution.
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <img src="#" alt="Signature" className="h-12 opacity-0" /> {/* Placeholder for real signature if applicable */}
                    <p className="text-sm font-bold text-gray-900 uppercase tracking-widest mt-2 border-b-2 border-alfawad-primary inline-block pb-1">Ahmed Fawad Bawzid</p>
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

export default ChairmanMessage;
