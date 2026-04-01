import AlfawadPageHeader from "../../components/alfawad/AlfawadPageHeader";
import OverviewSidebar from "../../components/alfawad/OverviewSidebar";

const Overview = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <AlfawadPageHeader 
        title="Overview" 
        breadcrumbs={[
          { label: "Overview", path: "/alfawad/overview" },
        ]} 
        bgImage="https://images.unsplash.com/photo-1541888082424-eb5467551061?q=80&w=2670&auto=format&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row gap-12">
          
          <OverviewSidebar />

          <div className="w-full lg:w-2/3 xl:w-3/4">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100 flex flex-col gap-6 relative overflow-hidden">
              <h2 className="text-3xl font-black text-gray-900 uppercase relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-16 after:h-1.5 after:bg-alfawad-primary mb-6">
                Corporate Overview
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                ALFAWAD Engineering & Construction represents a leading construction and industrial services organization operating extensively throughout the Kingdom of Saudi Arabia. We deliver turn-key industrial solutions spanning across major technical execution divisions. 
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4">
                <div className="bg-gray-50 border-l-4 border-alfawad-primary p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">Strategic Vision</h3>
                  <p className="text-gray-600 text-sm">Targeting to become the predominant heavy industry partner supporting robust national growth driven by Vision 2030.</p>
                </div>
                
                <div className="bg-gray-50 border-l-4 border-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">Safety Priority</h3>
                  <p className="text-gray-600 text-sm">Enforcing uncompromising safety metrics ensuring absolute 100% incident-free execution scenarios.</p>
                </div>
              </div>

              <div className="bg-alfawad-primary text-white rounded-lg p-8 shadow-inner mt-8 relative overflow-hidden flex flex-col gap-4">
                <div className="relative z-10">
                  <h3 className="text-2xl font-black uppercase tracking-widest mb-2">Our Foundation</h3>
                  <p className="font-medium text-red-100 leading-relaxed max-w-xl">
                    By synergizing highly-skilled technical manpower with a state-of-the-art heavy equipment fleet, we drive unparalleled productivity. Our Quality, Health, Safety, and Environment (QHSE) frameworks form the undisputed backbone of every project lifecycle we engage in.
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

export default Overview;
