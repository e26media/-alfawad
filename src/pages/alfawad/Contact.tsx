import AlfawadPageHeader from "../../components/alfawad/AlfawadPageHeader";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <AlfawadPageHeader
        title={isAr ? "اتصل بنا" : "Contact Us"}
        breadcrumbs={[
          { label: isAr ? "اتصل بنا" : "Contact Us" }
        ]}
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">

          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-alfawad-primary font-bold uppercase tracking-widest text-sm">{isAr ? "ابق على تواصل" : "Get In Touch"}</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2 uppercase">{isAr ? "نحن هنا للمساعدة" : "We're Here To Help"}</h2>
            <div className="w-24 h-1 bg-alfawad-primary mx-auto mt-6" />
            <p className="text-gray-600 mt-6 text-lg">
              {isAr ? "سواء كنت بحاجة إلى إدارة المشاريع أو الدعم أو توفير العمالة الفنية. تواصل مع لمياء الخليج اليوم." : "Whether you need strategic project management, emergency project support, or specialized technical manpower. Reach out to Lamiya Al Khaleej Al Ittehad  General Contracting today."}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">

            {/* Contact Details Column */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6">

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 items-start group hover:border-alfawad-primary transition-colors">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center text-alfawad-primary group-hover:bg-alfawad-primary group-hover:text-white transition-colors shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-2">{isAr ? "المكتب الرئيسي" : "Head Office"}</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                   {isAr ? "الجبيل، المملكة العربية السعودية" : "Al Jubail, KSA"}
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 items-start group hover:border-alfawad-primary transition-colors">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center text-alfawad-primary group-hover:bg-alfawad-primary group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-2">{isAr ? "الهواتف" : "Phones"}</h3>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col">
                      <span className="text-[18px] font-black uppercase tracking-tighter text-gray-900 leading-tight">{isAr ? "أشرف البدن" : "Ashraf Al badan"}</span>
                      <a href="tel:+966507077611" className="text-[12px] font-black uppercase tracking-widest text-alfawad-primary hover:text-black transition-colors">+966 50 707 7611</a>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[18px] font-black uppercase tracking-tighter text-gray-900 leading-tight">{isAr ? "أحمد سهيل" : "Ahamed suhail"}</span>
                      <div className="flex flex-col gap-1">
                        <a href="tel:+966510304627" className="text-[12px] font-black uppercase tracking-widest text-alfawad-primary hover:text-black transition-colors">+966 51 030 4627</a>
                        <a href="tel:+966566567518" className="text-[12px] font-black uppercase tracking-widest text-alfawad-primary hover:text-black transition-colors">+966 56 656 7518</a>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[18px] font-black uppercase tracking-tighter text-gray-900 leading-tight">{isAr ? "صفوان" : "Safwan"}</span>
                      <a href="tel:+966583769845" className="text-[12px] font-black uppercase tracking-widest text-alfawad-primary hover:text-black transition-colors">+966 58 376 9845</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 items-start group hover:border-alfawad-primary transition-colors">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center text-alfawad-primary group-hover:bg-alfawad-primary group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-4">{isAr ? "رسائل البريد الإلكتروني" : "Emails"}</h3>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col">
                      {/* <span className="text-[16px] font-black uppercase tracking-tighter text-gray-900 leading-tight">General Support</span> */}
                      <a href="mailto:info@lamiyaalkhaleej.com" className="text-[11px] font-black uppercase tracking-widest text-alfawad-primary hover:text-black transition-colors break-all">info@lamiyaalkhaleej.com</a>
                                         <a href="mailto:ashrafalbadan@lamiyaalkhaleej.com" className="text-[11px] font-black uppercase tracking-widest text-alfawad-primary hover:text-black transition-colors break-all">ashrafalbadan@lamiyaalkhaleej.com</a>
                      <a href="mailto:ahamedsuhail@lamiyaalkhaleej.com" className="text-[11px] font-black uppercase tracking-widest text-alfawad-primary hover:text-black transition-colors break-all">ahamedsuhail@lamiyaalkhaleej.com</a>

                    </div>
                   
                  
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 items-start group hover:border-alfawad-primary transition-colors">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center text-alfawad-primary group-hover:bg-alfawad-primary group-hover:text-white transition-colors shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-2">{isAr ? "ساعات العمل" : "Working Hours"}</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {isAr ? "الأحد - الخميس" : "Sunday - Thursday"}<br />
                    {isAr ? "08:00 صباحاً - 05:00 مساءً" : "08:00 AM - 05:00 PM"}<br />
                    <span className="text-red-500">{isAr ? "الجمعة والسبت مغلق" : "Friday & Saturday Closed"}</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Form & Map Column */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">

              <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl shadow-gray-200/40 border border-gray-100 flex flex-col gap-6">
                <h3 className="text-2xl font-black text-gray-900 uppercase tracking-widest border-l-4 border-alfawad-primary pl-4 mb-4">{isAr ? "أرسل لنا رسالة" : "Send Us A Message"}</h3>

                <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">{isAr ? "اسمك" : "Your Name"} <span className="text-alfawad-primary">*</span></label>
                      <input type="text" placeholder={isAr ? "الاسم" : "John Doe"} className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-alfawad-primary focus:ring-1 focus:ring-alfawad-primary transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">{isAr ? "البريد الإلكتروني" : "Email Address"} <span className="text-alfawad-primary">*</span></label>
                      <input type="email" placeholder="john@company.com" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-alfawad-primary focus:ring-1 focus:ring-alfawad-primary transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">{isAr ? "رقم الهاتف" : "Phone Number"}</label>
                      <input type="tel" placeholder=" +966 XXXXXXXX" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-alfawad-primary focus:ring-1 focus:ring-alfawad-primary transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">{isAr ? "موضوع الاستفسار" : "Inquiry Subject"}</label>
                      <select className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-alfawad-primary focus:ring-1 focus:ring-alfawad-primary transition-colors appearance-none">
                        <option>{isAr ? "معلومات عامة" : "General Information"}</option>
                        <option>{isAr ? "طلب تسعيرة" : "Request a Quote"}</option>
                        <option>{isAr ? "طلب وظيفة" : "Job Application"}</option>
                        <option>{isAr ? "استفسار شراكة" : "Partnership Inquiry"}</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">{isAr ? "رسالتك" : "Your Message"} <span className="text-alfawad-primary">*</span></label>
                    <textarea rows={6} placeholder={isAr ? "اكتب تفاصيل مشروعك هنا..." : "Write your project details or inquiry here..."} className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-alfawad-primary focus:ring-1 focus:ring-alfawad-primary transition-colors resize-none"></textarea>
                  </div>

                  <button type="button" className="bg-alfawad-primary hover:bg-gray-900 text-white font-bold uppercase tracking-widest py-4 px-8 rounded mt-4 transition-colors max-w-xs self-start shadow-lg hover:shadow-xl">
                    {isAr ? "إرسال الرسالة" : "Submit Message"}
                  </button>
                </form>
              </div>

              {/* Google Maps Embed Placeholder via iframe */}
              <div className="w-full h-[400px] rounded-lg overflow-hidden border-4 border-white shadow-xl bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3554.6438915540575!2d49.65473757544289!3d27.009812476589353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDAwJzM1LjMiTiA0OcKwMzknMjYuMyJF!5e0!3m2!1sen!2sin!4v1775571269405!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lamiya alkhaleej alittihad establishment for general contractingHeadquarters Jubail"
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



