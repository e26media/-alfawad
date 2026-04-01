import AlfawadPageHeader from "../../components/alfawad/AlfawadPageHeader";
import ServiceSidebar from "../../components/alfawad/ServiceSidebar";
import { Shield, Sparkles, Droplets, Link2, Plus } from "lucide-react";
import { useState } from "react";

const ProjectManagement = () => {
  const [activeTab, setActiveTab] = useState("Fire Protection");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <AlfawadPageHeader 
        title="Project Management Service" 
        breadcrumbs={[
          { label: "Our Services", path: "/AL FAWAD/services/technical-manpower" },
          { label: "Project Management" }
        ]} 
        bgImage="https://images.unsplash.com/photo-1541888082424-eb5467551061?q=80&w=2670&auto=format&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row gap-12">
          
          <ServiceSidebar />

          <div className="w-full lg:w-2/3 xl:w-3/4">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100 flex flex-col gap-6 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-2">
                <Shield className="w-10 h-10 text-alfawad-primary" />
                <h2 className="text-3xl font-black text-gray-900 uppercase">
                  Advanced Project Interventions
                </h2>
              </div>

              <div className="w-24 h-1.5 bg-alfawad-primary mb-6" />

              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                AL FAWAD delivers specialized project management interventions tailored for critical industrial components. Our highly trained technical teams handle extreme-pressure, high-risk industrial requirements ranging from industrial hydro-blasting to structural fireproofing systems ensuring plant longevity and uncompromising safety.
              </p>

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200">
                {["Fire Protection", "Hydroblasting", "Bolt Integrity"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 px-4 md:px-6 text-[10px] sm:text-sm md:text-base font-bold uppercase transition-colors relative ${
                      activeTab === tab ? "text-alfawad-primary" : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-alfawad-primary rounded-t-lg" />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="mt-8">
                {activeTab === "Fire Protection" && (
                  <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-start gap-4 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                      <Sparkles className="w-8 h-8 text-red-500 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-black text-gray-900 uppercase mb-2">Industrial Fire Protection</h3>
                        <p className="text-gray-700">Providing HC (Hydrocarbon) rated passive fire protection utilizing intumescent and cementitious epoxy coatings (e.g., Pitt-Char, Chartek). Crucial for structural stability during catastrophic thermal events.</p>
                      </div>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {[
                        "Cable Coating & Fire Stopping",
                        "Structural Steel Fireproofing",
                        "Vessel / Skirt Intumescent Application",
                        "Pneumatic Pump Fireproofing"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                          <Plus className="w-5 h-5 text-red-500" />
                          <span className="font-semibold text-gray-800 text-sm uppercase">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "Hydroblasting" && (
                  <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-start gap-4 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                      <Droplets className="w-8 h-8 text-blue-500 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-black text-gray-900 uppercase mb-2">High Pressure Hydroblasting</h3>
                        <p className="text-gray-700">Deploying ultra-high-pressure (UHP) water jetting systems operating from 10,000 PSI to 40,000 PSI to efficiently slice through massive polymer, concrete, or industrial scale foulages.</p>
                      </div>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {[
                        "Heat Exchanger Tube Cleaning",
                        "Automated Vessel Internal Descaling",
                        "Concrete Hydro-Demolition",
                        "Cold Cutting (Pipeline Severing)"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                          <Plus className="w-5 h-5 text-blue-500" />
                          <span className="font-semibold text-gray-800 text-sm uppercase">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "Bolt Integrity" && (
                  <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-start gap-4 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                      <Link2 className="w-8 h-8 text-yellow-600 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-black text-gray-900 uppercase mb-2">Flange & Bolt Integrity</h3>
                        <p className="text-gray-700">Ensuring leak-free startups in critical pipeline systems utilizing precision controlled bolt torquing and tensioning systems across heavy duty flanges.</p>
                      </div>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {[
                        "Hydraulic Flange Bolting & Torquing",
                        "Sub-sea Tensioning Services",
                        "Flange Refacing & Machining",
                        "Nut Splitting & Flange Spreading"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                          <Plus className="w-5 h-5 text-yellow-600" />
                          <span className="font-semibold text-gray-800 text-sm uppercase">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProjectManagement;



