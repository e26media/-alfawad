import AlfawadPageHeader from "../../components/alfawad/AlfawadPageHeader";
import ServiceSidebar from "../../components/alfawad/ServiceSidebar";
import { Wrench, CheckCircle } from "lucide-react";
import { useState } from "react";

const ProjectSupport = () => {
  const [activeTab, setActiveTab] = useState("Civil");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <AlfawadPageHeader 
        title="Project Support Service" 
        breadcrumbs={[
          { label: "Our Services", path: "/AL FAWAD/services/technical-manpower" },
          { label: "Project Support" }
        ]} 
        bgImage="https://images.unsplash.com/photo-1541888082424-eb5467551061?q=80&w=2670&auto=format&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row gap-12">
          
          <ServiceSidebar />

          <div className="w-full lg:w-2/3 xl:w-3/4">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100 flex flex-col gap-6 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-2">
                <Wrench className="w-10 h-10 text-alfawad-primary" />
                <h2 className="text-3xl font-black text-gray-900 uppercase">
                  Comprehensive Project Support
                </h2>
              </div>

              <div className="w-24 h-1.5 bg-alfawad-primary mb-6" />

              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                AL FAWAD operates as a robust multi-disciplinary project support contractor. Our experienced construction management team seamlessly integrates into your existing operational matrix, executing massive technical workloads with extreme precision. We manage Civil, Mechanical, and Electrical support contracts safely and on time.
              </p>

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200">
                {["Civil", "Mechanical", "Electrical"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 px-6 text-sm md:text-base font-bold uppercase transition-colors relative ${
                      activeTab === tab ? "text-alfawad-primary" : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {tab} Works
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-alfawad-primary rounded-t-lg" />
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-8 bg-gray-50 p-8 rounded-lg border border-gray-100 min-h-[300px]">
                {activeTab === "Civil" && (
                  <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-2xl font-black text-gray-900 uppercase mb-4">Civil & Structural Support</h3>
                    <p className="text-gray-700 mb-4">Expertise in heavy concrete pouring, industrial trenching, and complex structural building formations designed for the harshest petrochemical environments.</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-alfawad-primary" /> Earthworks & Excavation</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-alfawad-primary" /> Industrial Foundations</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-alfawad-primary" /> Trenching & Duct-banks</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-alfawad-primary" /> Concrete Paving & Asphalting</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-alfawad-primary" /> Structural Steel Erection</li>
                    </ul>
                  </div>
                )}
                
                {activeTab === "Mechanical" && (
                  <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-2xl font-black text-gray-900 uppercase mb-4">Mechanical Construction</h3>
                    <p className="text-gray-700 mb-4">State-of-the-art piping fabrication, non-destructive testing, and precision rotating equipment installation serving heavy industries.</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-alfawad-primary" /> Piping Spool Fabrication</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-alfawad-primary" /> Plant Modifications & Tie-ins</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-alfawad-primary" /> Equipment Erection & Alignment</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-alfawad-primary" /> Hydro-testing & Pre-commissioning</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-alfawad-primary" /> Painting & Insulation Services</li>
                    </ul>
                  </div>
                )}

                {activeTab === "Electrical" && (
                  <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-2xl font-black text-gray-900 uppercase mb-4">Electrical & Instrumentation</h3>
                    <p className="text-gray-700 mb-4">Highly detailed electrical system implementation spanning thousands of control cables, sophisticated switchgears, and digital networks.</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-alfawad-primary" /> Cable Tray Installation</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-alfawad-primary" /> HV/MV Cable Pulling & Terminations</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-alfawad-primary" /> Switchgear & Transformer Setup</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-alfawad-primary" /> Substation Upgrades</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-alfawad-primary" /> Instrument Calibration & Testing</li>
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

export default ProjectSupport;



