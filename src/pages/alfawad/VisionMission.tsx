import AlfawadPageHeader from "../../components/alfawad/AlfawadPageHeader";
import OverviewSidebar from "../../components/alfawad/OverviewSidebar";

const VisionMission = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <AlfawadPageHeader 
        title="Vision & Mission" 
        breadcrumbs={[
          { label: "Overview", path: "/alfawad/introduction" },
          { label: "Vision & Mission" }
        ]} 
        bgImage="https://images.unsplash.com/photo-1541888082424-eb5467551061?q=80&w=2670&auto=format&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row gap-12">
          
          <OverviewSidebar />

          <div className="w-full lg:w-2/3 xl:w-3/4 flex flex-col gap-10">

            {/* Vision Segment */}
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100 flex flex-col gap-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10 transition-transform group-hover:scale-150 duration-700 ease-out" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-alfawad-primary rounded-lg flex items-center justify-center text-white shrink-0 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <h2 className="text-3xl font-black text-gray-900 uppercase">
                  Our Vision
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg font-medium border-l-4 border-alfawad-primary pl-6 py-2">
                "To emerge as the premier construction and industrial service provider in the Kingdom of Saudi Arabia, driving sustainable infrastructure development while consistently exceeding the highest global standards in safety, quality, and operational excellence."
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {[
                  "Market Leadership in execution",
                  "Unparalleled client satisfaction",
                  "Continuous innovation in engineering",
                  "Zero-incident safety culture"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-alfawad-primary shrink-0" />
                    <span className="font-semibold text-sm uppercase">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission Segment */}
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100 flex flex-col gap-6 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gray-100 rounded-br-full -z-10 transition-transform group-hover:scale-150 duration-700 ease-out" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gray-900 rounded-lg flex items-center justify-center text-alfawad-primary shrink-0 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                </div>
                <h2 className="text-3xl font-black text-gray-900 uppercase">
                  Our Mission
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg font-medium border-l-4 border-gray-900 pl-6 py-2">
                "Our mission is to continually deliver comprehensive, turn-key industrial solutions by mobilizing unparalleled technical expertise, deploying modern heavy equipment, and enforcing rigorous project management frameworks to support robust industrial expansion."
              </p>

              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mt-4">
                <h4 className="font-bold text-gray-900 uppercase mb-4 border-b border-gray-200 pb-2">Key Operational Objectives</h4>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-alfawad-primary font-bold">01.</span>
                    <span className="text-gray-600 text-sm">To attract, retain, and develop highly skilled manpower capable of executing complex technical requirements under strict timelines.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-alfawad-primary font-bold">02.</span>
                    <span className="text-gray-600 text-sm">To maintain an exceptionally maintained fleet of heavy equipment machinery maximizing uptime and productivity.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-alfawad-primary font-bold">03.</span>
                    <span className="text-gray-600 text-sm">To strictly enforce Environment, Health, and Safety protocols protecting our workforce and fulfilling environmental responsibilities.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-alfawad-primary font-bold">04.</span>
                    <span className="text-gray-600 text-sm">To align operations with the Kingdom's strategic Vision 2030 through constant capability upgrades and technological integration.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default VisionMission;
