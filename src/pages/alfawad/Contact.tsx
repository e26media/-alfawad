import AlfawadPageHeader from "../../components/alfawad/AlfawadPageHeader";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <AlfawadPageHeader
        title="Contact Us"
        breadcrumbs={[
          { label: "Contact Us" }
        ]}
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">

          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-alfawad-primary font-bold uppercase tracking-widest text-sm">Get In Touch</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2 uppercase">We're Here To Help</h2>
            <div className="w-24 h-1 bg-alfawad-primary mx-auto mt-6" />
            <p className="text-gray-600 mt-6 text-lg">
              Whether you need strategic project management, emergency project support, or specialized technical manpower. Reach out to Lamiya Al Kahleej General Contracting today.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">

            {/* Contact Details Column */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6">

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex gap-6 items-start group hover:border-alfawad-primary transition-colors">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center text-alfawad-primary group-hover:bg-alfawad-primary group-hover:text-white transition-colors shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-2">Head Office</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                   Al Khobar, KSA
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex gap-6 items-start group hover:border-alfawad-primary transition-colors">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center text-alfawad-primary group-hover:bg-alfawad-primary group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-2">Phones</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    +051 030 4627 
                  </p>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    +058 376 9845  
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex gap-6 items-start group hover:border-alfawad-primary transition-colors">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center text-alfawad-primary group-hover:bg-alfawad-primary group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-2">Emails</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                   lamiyaalkhaleej@gmail.com                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex gap-6 items-start group hover:border-alfawad-primary transition-colors">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center text-alfawad-primary group-hover:bg-alfawad-primary group-hover:text-white transition-colors shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-2">Working Hours</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Sunday - Thursday<br />
                    08:00 AM - 05:00 PM<br />
                    <span className="text-red-500">Friday & Saturday Closed</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Form & Map Column */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">

              <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl shadow-gray-200/40 border border-gray-100 flex flex-col gap-6">
                <h3 className="text-2xl font-black text-gray-900 uppercase tracking-widest border-l-4 border-alfawad-primary pl-4 mb-4">Send Us A Message</h3>

                <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Your Name <span className="text-alfawad-primary">*</span></label>
                      <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-alfawad-primary focus:ring-1 focus:ring-alfawad-primary transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Email Address <span className="text-alfawad-primary">*</span></label>
                      <input type="email" placeholder="john@company.com" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-alfawad-primary focus:ring-1 focus:ring-alfawad-primary transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Phone Number</label>
                      <input type="tel" placeholder=" +966 XXXXXXXX" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-alfawad-primary focus:ring-1 focus:ring-alfawad-primary transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Inquiry Subject</label>
                      <select className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-alfawad-primary focus:ring-1 focus:ring-alfawad-primary transition-colors appearance-none">
                        <option>General Information</option>
                        <option>Request a Quote</option>
                        <option>Job Application</option>
                        <option>Partnership Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Your Message <span className="text-alfawad-primary">*</span></label>
                    <textarea rows={6} placeholder="Write your project details or inquiry here..." className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-alfawad-primary focus:ring-1 focus:ring-alfawad-primary transition-colors resize-none"></textarea>
                  </div>

                  <button type="button" className="bg-alfawad-primary hover:bg-gray-900 text-white font-bold uppercase tracking-widest py-4 px-8 rounded mt-4 transition-colors max-w-xs self-start shadow-lg hover:shadow-xl">
                    Submit Message
                  </button>
                </form>
              </div>

              {/* Google Maps Embed Placeholder via iframe */}
              <div className="w-full h-[400px] rounded-lg overflow-hidden border-4 border-white shadow-xl bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113429.62319047971!2d49.56942475459341!3d26.985652592750346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a12d1b84920b%3A0xe9f359c388efdcd7!2sJubail%20Saudi%20Arabia!5e0!3m2!1sen!2sae!4v1709400000000!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lamiya Al Kahleej General Contracting Headquarters Jubail"
                ></iframe>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;



