import AlfawadPageHeader from "../../components/alfawad/AlfawadPageHeader";
import OverviewSidebar from "../../components/alfawad/OverviewSidebar";
import { CheckCircle } from "lucide-react";

const QualityPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <AlfawadPageHeader 
        title="Quality Policy" 
        breadcrumbs={[
          { label: "Overview", path: "/AL FAWAD/introduction" },
          { label: "Quality Policy" }
        ]} 
        bgImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row gap-12">
          
          <OverviewSidebar />

          <div className="w-full lg:w-2/3 xl:w-3/4">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100 flex flex-col gap-6 relative">
              <h2 className="text-3xl font-black text-gray-900 uppercase relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-16 after:h-1.5 after:bg-alfawad-primary mb-4">
                Our Commitment to Quality
              </h2>

              <div className="bg-red-50 border-l-4 border-alfawad-primary p-6 rounded-r-lg">
                <p className="text-gray-800 text-lg font-medium italic">
                  "At AL FAWAD Engineering & Construction, Quality is not merely a benchmark; it is the fundamental fabric of our corporate identity and operational execution."
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                We are steadfastly committed to providing construction, mechanical, electrical, and technical manpower services that consistently meet or exceed the requirements and expectations of our clients. Our dedicated ISO-aligned Quality Management System (QMS) is implemented across all tiers of our organization.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 uppercase">
                Core Quality Objectives
              </h3>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Total Client Satisfaction through Defect-Free Execution",
                  "Strict Compliance with International Engineering Standards",
                  "Continuous Training & Skill Development of Manpower",
                  "Rigorous Preventive Maintenance of Heavy Equipment",
                  "Strategic Vendor & Supplier Quality Controls",
                  "Implementation of Advanced Testing & Inspection Protocols"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <CheckCircle className="w-6 h-6 text-alfawad-primary shrink-0" />
                    <span className="text-sm font-semibold text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col items-center text-center">
                <img src="/assets/iso.png" alt="ISO Certification Badge" className="h-24 w-auto mb-4 grayscale opacity-50 block bg-gray-200 rounded-full w-[96px] object-cover" />
                <h4 className="font-bold text-gray-900 uppercase tracking-widest">ISO 9001:2015 Compliant</h4>
                <p className="text-gray-500 text-sm mt-2 max-w-md">
                  Our quality parameters are continuously audited and upgraded to align with modern industrial benchmarks.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default QualityPolicy;



