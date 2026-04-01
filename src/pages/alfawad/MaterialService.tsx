import AlfawadPageHeader from "../../components/alfawad/AlfawadPageHeader";
import ServiceSidebar from "../../components/alfawad/ServiceSidebar";
import { Settings, Droplet, Zap, Hammer } from "lucide-react";

const MaterialService = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <AlfawadPageHeader 
        title="Material Trading & Supply" 
        breadcrumbs={[
          { label: "Our Services", path: "/alfawad/services/technical-manpower" },
          { label: "Material Service" }
        ]} 
        bgImage="https://images.unsplash.com/photo-1589182332152-4752b04c8f2b?q=80&w=2670&auto=format&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row gap-12">
          
          <ServiceSidebar />

          <div className="w-full lg:w-2/3 xl:w-3/4">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100 flex flex-col gap-6 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-2">
                <Settings className="w-10 h-10 text-alfawad-primary" />
                <h2 className="text-3xl font-black text-gray-900 uppercase">
                  Industrial Material Sourcing
                </h2>
              </div>

              <div className="w-24 h-1.5 bg-alfawad-primary mb-6" />

              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                ALFAWAD operates a dedicated commercial trading division supporting massive Kingdom-wide projects. We hold direct strategic partnerships with major global manufacturers, guaranteeing the direct procurement, immediate stock supply, and logistical delivery of high-grade industrial materials.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                
                {/* Mechanical Box */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:border-alfawad-primary transition-colors flex flex-col gap-4 shadow-sm group">
                  <div className="w-14 h-14 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-2 group-hover:bg-alfawad-primary transition-colors">
                    <Hammer className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">Mechanical & Piping</h3>
                  <ul className="flex flex-col gap-3">
                    <li className="flex gap-3 text-sm text-gray-600"><span className="text-alfawad-primary font-bold">•</span> Seamless & Welded Pipes (CS, SS, Alloy)</li>
                    <li className="flex gap-3 text-sm text-gray-600"><span className="text-alfawad-primary font-bold">•</span> Forged Fittings & Specialized Flanges</li>
                    <li className="flex gap-3 text-sm text-gray-600"><span className="text-alfawad-primary font-bold">•</span> Industrial Valves (Gate, Globe, Check, Ball)</li>
                    <li className="flex gap-3 text-sm text-gray-600"><span className="text-alfawad-primary font-bold">•</span> Structural Steel & Grating Systems</li>
                  </ul>
                </div>

                {/* Electrical Box */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:border-alfawad-primary transition-colors flex flex-col gap-4 shadow-sm group">
                  <div className="w-14 h-14 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-2 group-hover:bg-alfawad-primary transition-colors">
                    <Zap className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">Electrical Division</h3>
                  <ul className="flex flex-col gap-3">
                    <li className="flex gap-3 text-sm text-gray-600"><span className="text-alfawad-primary font-bold">•</span> High/Low Voltage Power Cables</li>
                    <li className="flex gap-3 text-sm text-gray-600"><span className="text-alfawad-primary font-bold">•</span> Heavy Duty Cable Trays & Raceways</li>
                    <li className="flex gap-3 text-sm text-gray-600"><span className="text-alfawad-primary font-bold">•</span> Termination & Splicing Kits</li>
                    <li className="flex gap-3 text-sm text-gray-600"><span className="text-alfawad-primary font-bold">•</span> Explosion-Proof Junction Boxes & Lighting</li>
                  </ul>
                </div>

                {/* Instrumentation Box */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:border-alfawad-primary transition-colors flex flex-col gap-4 shadow-sm group">
                  <div className="w-14 h-14 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-2 group-hover:bg-alfawad-primary transition-colors">
                    <Droplet className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">Instrumentation</h3>
                  <ul className="flex flex-col gap-3">
                    <li className="flex gap-3 text-sm text-gray-600"><span className="text-alfawad-primary font-bold">•</span> Tube Fittings (Parker/Swagelok Eq.)</li>
                    <li className="flex gap-3 text-sm text-gray-600"><span className="text-alfawad-primary font-bold">•</span> Pressure / Temperature Transmitters</li>
                    <li className="flex gap-3 text-sm text-gray-600"><span className="text-alfawad-primary font-bold">•</span> Instrumentation Manifold Valves</li>
                    <li className="flex gap-3 text-sm text-gray-600"><span className="text-alfawad-primary font-bold">•</span> Flow Meters & Control Relays</li>
                  </ul>
                </div>

                {/* Safety PPE Box */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-8 flex flex-col gap-4 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-alfawad-primary rounded-bl-full opacity-10" />
                  <h3 className="text-xl font-bold text-[#c42924] uppercase tracking-wide">HSE & Safety Gear</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Complete portfolio of SABIC/Aramco approved Personal Protective Equipment (PPE), Fire Safety Systems, Gas Detectors, and Fall Protection gear.
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

export default MaterialService;
