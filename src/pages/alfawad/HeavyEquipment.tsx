import AlfawadPageHeader from "../../components/alfawad/AlfawadPageHeader";
import ServiceSidebar from "../../components/alfawad/ServiceSidebar";
import { Truck, CheckCircle } from "lucide-react";

const EQUIPMENT_LIST = [
  "Mobile Cranes (20T to 500T)",
  "Crawler Cranes",
  "Excavators & Wheel Loaders",
  "Dump Trucks & Trailers",
  "Boom Trucks & Manlifts",
  "Forklifts & Telehandlers",
  "Air Compressors & Generators",
  "Tower Lights & Welding Machines",
  "Dozers & Graders",
  "Water Tankers & Vacuum Trucks"
];

const HeavyEquipment = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <AlfawadPageHeader 
        title="Heavy Equipment Service" 
        breadcrumbs={[
          { label: "Our Services", path: "/AL FAWAD/services/technical-manpower" },
          { label: "Heavy Equipment" }
        ]} 
        bgImage="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2670&auto=format&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row gap-12">
          
          <ServiceSidebar />

          <div className="w-full lg:w-2/3 xl:w-3/4">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100 flex flex-col gap-6 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-2">
                <Truck className="w-10 h-10 text-alfawad-primary" />
                <h2 className="text-3xl font-black text-gray-900 uppercase">
                  Heavy Equipment Rental & Logistics
                </h2>
              </div>

              <div className="w-24 h-1.5 bg-alfawad-primary mb-6" />

              <p className="text-gray-700 leading-relaxed text-lg">
                AL FAWAD operates one of the most comprehensive and modern heavy equipment fleets in the Eastern Province. Recognizing that equipment reliability directly corresponds to project timelines, we have heavily invested in late-model machinery backed by an aggressive, uncompromising preventive maintenance protocol.
              </p>

              <div className="my-8">
                <img 
                  src="https://images.unsplash.com/photo-1621245053155-257a77d195ba?q=80&w=1200&auto=format&fit=crop" 
                  alt="Fleet of excavators and trucks" 
                  className="w-full h-[400px] object-cover rounded-lg shadow-md grayscale hover:grayscale-0 transition-all duration-700" 
                />
              </div>

              <div className="bg-gray-900 border border-gray-800 p-8 rounded-lg mt-4 flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800 rounded-bl-full -z-10 opacity-50" />
                
                <h3 className="text-2xl font-black text-white uppercase border-l-4 border-alfawad-primary pl-4 relative z-10">
                  Our Fleet Capabilities
                </h3>
                
                <p className="text-gray-400 font-medium relative z-10">
                  Available for short-term hires, long-term leasing, and fully-managed turnkey logistical operations. All equipment is supplied with highly trained, third-party certified operators.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-2 relative z-10">
                  {EQUIPMENT_LIST.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-alfawad-primary flex-shrink-0" />
                      <span className="text-gray-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col md:flex-row gap-6">
                <div className="flex-1 bg-red-50 border border-red-100 p-6 rounded-lg -mt-2">
                  <h4 className="font-bold text-gray-900 uppercase mb-2">Third-Party Certified</h4>
                  <p className="text-sm text-gray-600">Every machine carries valid TUV / Saudi Aramco safety and operational certifications.</p>
                </div>
                <div className="flex-1 bg-red-50 border border-red-100 p-6 rounded-lg -mt-2">
                  <h4 className="font-bold text-gray-900 uppercase mb-2">24/7 Mobile Maintenance</h4>
                  <p className="text-sm text-gray-600">On-site breakdown resolution handled by dedicated mobile workshops minimizing downtime.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default HeavyEquipment;



