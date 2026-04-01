import AlfawadPageHeader from "../../components/alfawad/AlfawadPageHeader";
import { Download } from "lucide-react";

export const Brochure = () => (
  <div className="flex flex-col min-h-screen bg-gray-50">
    <AlfawadPageHeader title="Our Brochure" breadcrumbs={[{ label: "Brochure" }]} />
    <section className="py-20 flex justify-center container mx-auto px-4 max-w-4xl">
      <div className="bg-white p-12 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center gap-6 w-full">
        <h2 className="text-3xl font-black text-gray-900 uppercase">Download Company Profile</h2>
        <p className="text-gray-600 max-w-xl">Get a comprehensive overview of our capabilities, fleet strength, and project management philosophies in our official corporate brochure.</p>
        <button className="flex items-center gap-3 bg-alfawad-primary hover:bg-[#c42924] text-white font-bold uppercase tracking-widest py-4 px-8 rounded mt-4 transition-colors shadow-md">
          <Download className="w-5 h-5" /> ALFAWAD Profile 2026 (PDF)
        </button>
      </div>
    </section>
  </div>
);

export const ClientsGallery = () => (
  <div className="flex flex-col min-h-screen bg-gray-50">
    <AlfawadPageHeader title="Our Clients" breadcrumbs={[{ label: "Clients" }]} bgImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop" />
    <section className="py-20 container mx-auto px-4 max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-gray-900 uppercase">Trusted By Industry Leaders</h2>
        <div className="w-24 h-1 bg-alfawad-primary mx-auto mt-6" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[1,2,3,4,5,6,7,8,9,10,11,12].map((num) => (
          <div key={num} className="bg-white h-32 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:shadow-md cursor-pointer group p-8">
            <span className="font-black text-gray-300 group-hover:text-alfawad-primary text-xl tracking-widest uppercase">LOGO {num}</span>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export const Enquiry = () => (
  <div className="flex flex-col min-h-screen bg-gray-50">
    <AlfawadPageHeader title="Submit Enquiry" breadcrumbs={[{ label: "Enquiry" }]} />
    <section className="py-20 flex justify-center container mx-auto px-4 max-w-4xl">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-100 w-full">
        <h2 className="text-3xl font-black text-gray-900 uppercase mb-8 border-l-4 border-alfawad-primary pl-4">Request a Proposal</h2>
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600 uppercase">Company Name</label>
              <input type="text" className="bg-gray-50 border border-gray-200 rounded p-3 focus:border-alfawad-primary focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600 uppercase">Contact Person</label>
              <input type="text" className="bg-gray-50 border border-gray-200 rounded p-3 focus:border-alfawad-primary focus:outline-none" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600 uppercase">Email Address</label>
              <input type="email" className="bg-gray-50 border border-gray-200 rounded p-3 focus:border-alfawad-primary focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600 uppercase">Service Category</label>
              <select className="bg-gray-50 border border-gray-200 rounded p-3 focus:border-alfawad-primary focus:outline-none">
                <option>Technical Manpower Supply</option>
                <option>Heavy Equipment Rental</option>
                <option>Project Suppport (Civil/Mech)</option>
                <option>Material Sourcing</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600 uppercase">Project Details</label>
            <textarea rows={5} className="bg-gray-50 border border-gray-200 rounded p-3 focus:border-alfawad-primary focus:outline-none resize-none" />
          </div>
          <button className="bg-gray-900 text-white font-bold uppercase px-8 py-4 rounded hover:bg-alfawad-primary transition-colors w-max">
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  </div>
);

export const Career = () => (
  <div className="flex flex-col min-h-screen bg-gray-50">
    <AlfawadPageHeader title="Career Opportunities" breadcrumbs={[{ label: "Career" }]} bgImage="https://images.unsplash.com/photo-1541888082424-eb5467551061?q=80&w=2670&auto=format&fit=crop" />
    <section className="py-20 flex justify-center container mx-auto px-4 max-w-5xl">
      <div className="flex flex-col gap-8 w-full">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-gray-900 uppercase">Join Our Dynamic Team</h2>
          <p className="text-gray-600 mt-4 text-lg">ALFAWAD is constantly looking for skilled professionals to drive our operational excellence across the Kingdom.</p>
        </div>
        
        <div className="bg-red-50 border-l-4 border-alfawad-primary p-6 rounded-r-lg mb-8">
          <p className="text-red-800 font-bold uppercase tracking-wider">Current Priority Openings: <span className="text-gray-900 font-black">HSE Officers</span> | <span className="text-gray-900 font-black">QC Inspectors</span> | <span className="text-gray-900 font-black">Pipe Fabricators</span></p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-100 flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h3 className="text-2xl font-black text-gray-900 uppercase mb-4">Submit Resume</h3>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600 uppercase">Full Name</label>
              <input type="text" className="bg-gray-50 border border-gray-200 rounded p-3 focus:border-alfawad-primary focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600 uppercase">Position Applied For</label>
              <input type="text" className="bg-gray-50 border border-gray-200 rounded p-3 focus:border-alfawad-primary focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600 uppercase">Upload Resume (PDF/Word)</label>
              <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-[#c42924] hover:file:bg-red-100 border border-gray-200 rounded cursor-pointer" />
            </div>
            
            <button className="bg-alfawad-primary text-white font-bold uppercase px-8 py-4 rounded hover:bg-gray-900 transition-colors w-full mt-4">
              Apply Now
            </button>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 bg-gray-900 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-alfawad-primary rounded-bl-full opacity-20" />
            <h3 className="text-2xl font-black text-white uppercase text-center mb-4 relative z-10">Direct Email Application</h3>
            <p className="text-gray-400 text-center mb-6 relative z-10">If you cannot process your application via the robust form, directly forward your CV packet to our Human Resources terminal.</p>
            <a href="mailto:hr@alfawad.com" className="text-alfawad-primary font-black text-xl hover:text-white transition-colors border-b-2 border-alfawad-primary pb-1 relative z-10">hr@alfawad.com</a>
          </div>
        </div>

      </div>
    </section>
  </div>
);
