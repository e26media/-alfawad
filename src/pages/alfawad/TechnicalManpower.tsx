import AlfawadPageHeader from "../../components/alfawad/AlfawadPageHeader";
import ServiceSidebar from "../../components/alfawad/ServiceSidebar";
import { Users, HardHat, CheckCircle } from "lucide-react";

const TechnicalManpower = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <AlfawadPageHeader 
        title="Technical Manpower Service" 
        breadcrumbs={[
          { label: "Our Services", path: "/alfawad/services/technical-manpower" },
          { label: "Technical Manpower" }
        ]} 
        bgImage="https://images.unsplash.com/photo-1541888082424-eb5467551061?q=80&w=2670&auto=format&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row gap-12">
          
          <ServiceSidebar />

          <div className="w-full lg:w-2/3 xl:w-3/4">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100 flex flex-col gap-6 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-2">
                <Users className="w-10 h-10 text-alfawad-primary" />
                <h2 className="text-3xl font-black text-gray-900 uppercase">
                  Technical Manpower Supply
                </h2>
              </div>

              <div className="w-24 h-1.5 bg-alfawad-primary mb-6" />

              <p className="text-gray-700 leading-relaxed text-lg">
                ALFAWAD possesses an extensive and dynamic database of highly skilled professionals and craftsmen. We understand that the backbone of any successful industrial project is its workforce. Thus, we provide pre-vetted, certified, and experienced manpower ready to deploy across the Kingdom for both short-term rapid plant shutdowns and long-term mega-construction projects.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 flex flex-col gap-4 group hover:border-alfawad-primary transition-colors">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white mb-2 group-hover:bg-alfawad-primary transition-colors">
                    <span className="font-bold text-xl">01</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 uppercase">Mechanical & Welding</h3>
                  <ul className="flex flex-col gap-2">
                    <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-alfawad-primary" /> TIG/MIG/Arc Welders (Certified)</li>
                    <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-alfawad-primary" /> Pipe Fabricators & Fitters</li>
                    <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-alfawad-primary" /> Mechanical Technicians</li>
                    <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-alfawad-primary" /> Rotating Equipment Specialists</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 flex flex-col gap-4 group hover:border-alfawad-primary transition-colors">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white mb-2 group-hover:bg-alfawad-primary transition-colors">
                    <span className="font-bold text-xl">02</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 uppercase">Electrical & Instrumentation</h3>
                  <ul className="flex flex-col gap-2">
                    <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-alfawad-primary" /> Industrial Electricians</li>
                    <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-alfawad-primary" /> Instrument Technicians</li>
                    <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-alfawad-primary" /> Cable Jointers & Pullers</li>
                    <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-alfawad-primary" /> Automation Engineers</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 flex flex-col gap-4 group hover:border-alfawad-primary transition-colors">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white mb-2 group-hover:bg-alfawad-primary transition-colors">
                    <span className="font-bold text-xl">03</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 uppercase">Civil & Structural</h3>
                  <ul className="flex flex-col gap-2">
                    <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-alfawad-primary" /> Steel Fixers & Carpenters</li>
                    <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-alfawad-primary" /> Masonry & Concrete Workers</li>
                    <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-alfawad-primary" /> Riggers (TUV Certified)</li>
                    <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-alfawad-primary" /> Scaffolders (Aramco Approved)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 flex flex-col gap-4 group hover:border-alfawad-primary transition-colors">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white mb-2 group-hover:bg-alfawad-primary transition-colors">
                    <span className="font-bold text-xl">04</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 uppercase">Management & Safety</h3>
                  <ul className="flex flex-col gap-2">
                    <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-alfawad-primary" /> HSE Engineers & Officers</li>
                    <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-alfawad-primary" /> QA/QC Inspectors</li>
                    <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-alfawad-primary" /> Project Managers</li>
                    <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-alfawad-primary" /> Planners & Estimators</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900 text-white p-8 rounded-lg mt-4 flex flex-col md:flex-row items-center gap-8 justify-between relative overflow-hidden">
                <HardHat className="absolute -right-10 -top-10 w-48 h-48 text-gray-800 opacity-50" />
                <div className="relative z-10">
                  <h4 className="text-2xl font-black uppercase mb-2">Verified & Mobilization-Ready</h4>
                  <p className="text-gray-300">All personnel undergo strict medical testing, technical capability verification, and safety induction programs before reaching your site.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default TechnicalManpower;
