import AlfawadPageHeader from "../../components/alfawad/AlfawadPageHeader";
import OverviewSidebar from "../../components/alfawad/OverviewSidebar";
import { ShieldAlert, ShieldCheck, HardHat, TrendingDown, RefreshCcw } from "lucide-react";

const EnvironmentSafety = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <AlfawadPageHeader 
        title="Environment & Safety Policy" 
        breadcrumbs={[
          { label: "Overview", path: "/alfawad/introduction" },
          { label: "Environment & Safety Policy" }
        ]} 
        bgImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row gap-12">
          
          <OverviewSidebar />

          <div className="w-full lg:w-2/3 xl:w-3/4">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100 flex flex-col gap-6 relative overflow-hidden">
              <h2 className="text-3xl font-black text-gray-900 uppercase relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-16 after:h-1.5 after:bg-alfawad-primary mb-6">
                Health, Safety, and Environment (HSE)
              </h2>

              <div className="absolute top-10 right-10 opacity-5 rotate-12 pointer-events-none">
                <ShieldCheck className="w-48 h-48 text-alfawad-primary" />
              </div>

              <div className="bg-alfawad-primary text-white p-6 rounded-lg shadow-md mb-4 flex gap-4 items-start">
                <ShieldAlert className="w-8 h-8 shrink-0 mt-1 text-white/80" />
                <p className="text-lg font-bold leading-relaxed">
                  "Safety is NOT just a priority. Safety is our core value. Priorities can change; core values do not. ALFAWAD is committed to achieving ZERO harm to our people, perfectly encapsulated in our 'Safety is our NO.1 Priority' initiative."
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                At ALFAWAD Engineering & Construction, the health and safety of our employees, clients, contractors, and the communities surrounding our strategic operations is paramount. Our operational integrity depends unconditionally on ensuring a safe working environment and maintaining robust ecological preservation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all border-t-4 border-t-alfawad-primary flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                    <TrendingDown className="w-8 h-8 text-alfawad-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 uppercase">Zero Incidents</h3>
                  <p className="text-sm text-gray-600">Proactively working towards absolute injury-free and incident-free operational targets.</p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all border-t-4 border-t-alfawad-primary flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                    <HardHat className="w-8 h-8 text-alfawad-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 uppercase">Mandatory Training</h3>
                  <p className="text-sm text-gray-600">Daily toolbox talks, rigorous hazard identification, and certified safety induction modules.</p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all border-t-4 border-t-alfawad-primary flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                    <RefreshCcw className="w-8 h-8 text-alfawad-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 uppercase">Eco Protection</h3>
                  <p className="text-sm text-gray-600">Stringent waste management, emissions control, and spill-prevention frameworks.</p>
                </div>
              </div>

              <h3 className="text-2xl font-black text-gray-900 border-l-4 border-alfawad-primary pl-4 mt-8 mb-4 uppercase">
                Environmental Compliance Framework
              </h3>

              <div className="flex flex-col gap-4 text-gray-700 leading-relaxed">
                <p>
                  We recognize that large-scale civil, mechanical, and logistical support invariably impacts the local ecosystem. Consequently, we have embedded strict Environmental Management Systems (EMS) into our project delivery mechanisms.
                </p>
                <ul className="list-disc pl-6 marker:text-alfawad-primary flex flex-col gap-2 font-medium">
                  <li>Systematic prevention of environmental pollution during heavy equipment operation.</li>
                  <li>Maximized optimization in resource consumption, particularly water and fuel resources.</li>
                  <li>Mandatory and compliant disposal of hazardous & non-hazardous construction waste materials.</li>
                  <li>Strict adherence to local regulatory requirements set forth by Saudi Aramco, SABIC, and RCJY (Royal Commission for Jubail and Yanbu).</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default EnvironmentSafety;
