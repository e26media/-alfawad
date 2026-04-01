import AlfawadPageHeader from "../../components/alfawad/AlfawadPageHeader";
import OverviewSidebar from "../../components/alfawad/OverviewSidebar";

const Introduction = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <AlfawadPageHeader 
        title="Introduction" 
        breadcrumbs={[
          { label: "Overview", path: "/alfawad/introduction" },
          { label: "Introduction" }
        ]} 
      />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row gap-12">
          
          <OverviewSidebar />

          <div className="w-full lg:w-2/3 xl:w-3/4">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100 flex flex-col gap-6">
              <h2 className="text-3xl font-black text-gray-900 uppercase relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-16 after:h-1.5 after:bg-alfawad-primary mb-6">
                Company Overview
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg">
                <strong className="text-gray-900">ALFAWAD Engineering & Construction</strong> represents one of the premier construction and industrial service organizations in the Kingdom of Saudi Arabia. We have successfully developed a dynamic, fully integrated infrastructure that enables us to handle massive construction and plant maintenance operations with uncompromising efficiency.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
                <img 
                  src="https://images.unsplash.com/photo-1541888082424-eb5467551061?q=80&w=1200&auto=format&fit=crop" 
                  alt="Industrial plant" 
                  className="rounded-lg shadow-md w-full h-64 object-cover object-center grayscale hover:grayscale-0 transition-all duration-500" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop" 
                  alt="Construction workers" 
                  className="rounded-lg shadow-md w-full h-64 object-cover object-center grayscale hover:grayscale-0 transition-all duration-500" 
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 border-l-4 border-alfawad-primary pl-4 uppercase">
                A Legacy of Excellence
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                With extensive industry experience spanning diverse sectors, ALFAWAD offers complete industrial solutions in Civil, Mechanical, and Electrical instrumentation. Our rapid growth is attributed to our highly skilled workforce, experienced management, and a robust fleet of heavy equipment machinery. We have meticulously cultivated our resources to ensure that every project phase—from initial design and material procurement to final execution and commissioning—is managed flawlessly.
              </p>

              <p className="text-gray-600 leading-relaxed mt-2">
                As a 100% Saudi-owned establishment operating under Commercial Registration, we take immense pride in contributing directly to the Kingdom's industrial expansion. We act as a trusted operational partner for Sabic, Saudi Aramco, SEC, and myriad multinational corporations executing mammoth projects within the region.
              </p>

              <div className="bg-red-50/50 border border-red-100 p-6 rounded-lg mt-4 flex items-start gap-4">
                <div className="bg-alfawad-primary text-white p-3 rounded-full shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase">Our Core Philosophy</h4>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    We believe in proactive execution. Safety is woven directly into our operational methodology, not treated as an afterthought. Productivity is measured by the tangible quality delivered, ensuring our clients receive maximum return on their strategic investments.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Introduction;
