import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "services": "Services",
        "about": "About Us",
        "clients": "Our Clients",
        "contact": "Contact Us",
        "book": "Book a Free Visit",
        "residential": "Residential Services",
        "maintenance": "Maintenance Services",
        "water_tank": "Water Tank Services",
        "pesticide": "Pesticide Services"
      },
      "hero": {
        "title": "Lamiya Al Khaleej Al Ittehad",
        "subtitle": "Professional residential care.",
        "description": "Your trusted partner for complete cleaning, sanitization, AC services, pest control, and facility maintenance solutions across the Kingdom of Saudi Arabia.",
        "book_btn": "Book Free Visit",
        "explore_btn": "Explore Services",
        "badge": "Trusted Excellence Across KSA"
      },
      "cleaning": {
        "badges": {
          "technicians": "Certified Technicians",
          "on_time": "On-Time Service",
          "quality": "Guaranteed Quality",
          "coverage": "Coverage Across KSA"
        },
        "welcome": {
          "title_small": "Welcome to Lamiya Al Khaleej Al Ittehad",
          "title_main": "Your Trusted Partner for <span className=\"text-alfawad-primary\">Total Hygiene</span> Solutions",
          "quote": "\"We believe that a clean environment is not only about appearance but also about health, safety, comfort, and productivity.\"",
          "p1": "Welcome to Lamiya Al Khaleej Al Ittehad Company, your trusted partner for complete cleaning, sanitization, AC services, pest control, and facility maintenance solutions across the Kingdom of Saudi Arabia. We specialize in delivering high-quality hygiene and maintenance services for homes, villas, apartments, offices, shops, restaurants, warehouses, hospitals, and commercial buildings.",
          "p2": "Our company is built on a strong reputation for professionalism, reliability, and premium customer support. We use advanced cleaning methods, professional-grade equipment, eco-friendly chemicals, and trained technicians to deliver exceptional results every time.",
          "read_story": "Read Our Full Story"
        },
        "services": {
          "subtitle": "Our Expertise",
          "title": "Core Services",
          "browse": "Browse All Services",
          "expert": "Expert Service",
          "learn_more": "Learn More \u2192"
        },
        "why_us": {
          "title": "Not Just a <br /> Cleaning <br /> <span className=\"text-alfawad-primary\">Company.</span>",
          "desc": "We are a complete hygiene and maintenance solution provider that understands Saudi living standards and customer expectations.",
          "reasons": [
            "Certified cleaning & AC technicians",
            "Safe and eco-friendly products",
            "Professional machines and tools",
            "Transparent pricing with no hidden charges",
            "Quick booking and on-time service",
            "Affordable annual maintenance packages",
            "Customer satisfaction guaranteed"
          ],
          "standards_title": "Professional Standards in Every Step",
          "standards_desc": "We focus on professional-grade equipment, eco-friendly chemicals, and highly trained technicians to deliver exceptional results every time across the Kingdom.",
          "iso": "ISO Certified",
          "premium": "Premium Quality"
        },
        "stats": {
          "clients": "Happy Clients",
          "clean": "Clean Guarantee",
          "fast": "Fast Response"
        },
        "cta": {
          "title": "Ready for a <br className=\"hidden md:block\" /> <span className=\"text-alfawad-primary\">Cleaner</span> Space?",
          "desc": "Book your free inspection visit today and experience the professional difference of Lamiya Al Khaleej Al Ittehad Company.",
          "btn": "Book Your Free Visit Now"
        }
      },
      "industrial": {
        "nav": {
          "home": "Home",
          "about": "About Us",
          "overview": "Overview",
          "introduction": "Introduction",
          "chairman": "Chairman Message",
          "vision": "Vision & Mission",
          "quality": "Quality Policy",
          "env_safety": "Environment & Safety Policy",
          "services": "Our Services",
          "manpower": "Technical Manpower",
          "equipment": "Heavy Equipment",
          "support": "Project Support",
          "management": "Project Management",
          "material": "Material Service",
          "brochure": "Our Brochure",
          "clients": "Clients",
          "career": "Career",
          "enquiry": "Enquiry",
          "contact": "Contact Us",
          "exit": "Exit Alfawad"
        },
        "hero": {
          "title": "Lamiya Al Khaleej Al Ittehad",
          "subtitle": "General Contracting",
          "description": "Trusted Contracting & Industrial Service Provider in Saudi Arabia",
          "cta": "GET IN TOUCH"
        },
        "intro": {
          "title_main": "Lamiya Al Khaleej Al Ittihad Establishment For General Contracting",
          "title_sub": "LEADING SAUDI-BASED CONTRACTING FIRM",
          "desc": "LAMIYA AL KHALEEJ AL ITTEHAD General Contracting is a leading Saudi-based contracting and industrial support services provider delivering reliable manpower, equipment rental, construction support, material supply, and project management services across the Kingdom of Saudi Arabia.",
          "story": "Know Our Story"
        },
        "leadership": {
          "title": "BUILDING THE FUTURE OF SAUDI ARABIA",
          "desc": "Health And Safety Is Primarily Concern For Our People"
        },
        "services": {
          "subtitle": "Our Services",
          "title": "Where Passion Meets Productivity",
          "read_more": "Read More"
        },
        "project": {
          "support_title": "Project Support Service",
          "support_desc": "Our Project Management team supports you in the execution of your projects from the initial request to the design and delivery...",
          "support_btn": "Know More",
          "mgmt_title": "Project Management Service",
          "mgmt_items": [
            "Fire Protection Installation",
            "Hydroblasting",
            "Bolt Integrity Solutions"
          ],
          "mgmt_btn": "Know More"
        },
        "vision": {
          "subtitle": "Commitment to Excellence",
          "title": "Saudi Vision",
          "title_span": "2030",
          "tagline": "UNRESERVED INTEGRITY",
          "item1": "Superior Customer Service",
          "item2": "A Passion for Quality"
        },
        "why_us": {
          "subtitle": "Why Choose Us",
          "title": "We give utmost importance to Quality and guarantee is on us",
          "features": {
            "fast": "Fast Mobilization",
            "fast_desc": "Quick mobilization of manpower and equipment to site.",
            "skilled": "Skilled Workforce",
            "skilled_desc": "Qualified technical and non-technical workforce categories.",
            "modern": "Modern Fleet",
            "modern_desc": "Up-to-date equipment fleet with regular maintenance.",
            "safety": "Safety First",
            "safety_desc": "Strict adherence to HSE and environmental regulations."
          }
        }
      }
    }
  },
  ar: {
    translation: {
      "nav": {
        "home": "الرئيسية",
        "services": "خدماتنا",
        "about": "من نحن",
        "clients": "عملائنا",
        "contact": "اتصل بنا",
        "book": "احجز زيارة مجانية",
        "residential": "خدمات سكنية",
        "maintenance": "خدمات الصيانة",
        "water_tank": "خدمات خزانات المياه",
        "pesticide": "خدمات مكافحة الحشرات"
      },
      "hero": {
        "title": "مؤسسة لمياء الخليج الاتحاد",
        "subtitle": "رعاية سكنية احترافية",
        "description": "شريكك الموثوق للحلول المتكاملة للتنظيف والتعقيم وخدمات التكييف ومكافحة الحشرات وصيانة المرافق في جميع أنحاء المملكة العربية السعودية.",
        "book_btn": "احجز زيارة مجانية",
        "explore_btn": "استكشف الخدمات",
        "badge": "تميز موثوق في جميع أنحاء المملكة"
      },
      "cleaning": {
        "badges": {
          "technicians": "فنيون معتمدون",
          "on_time": "خدمة في الوقت المحدد",
          "quality": "جودة مضمونة",
          "coverage": "تغطية شاملة في المملكة"
        },
        "welcome": {
          "title_small": "مرحباً بكم في لمياء الخليج الاتحاد",
          "title_main": "شريكك الموثوق لحلول <span className=\"text-alfawad-primary\">النظافة الشاملة</span>",
          "quote": "\"نحن نؤمن بأن البيئة النظيفة ليست فقط للمظهر، بل أيضاً من أجل الصحة والسلامة والراحة والإنتاجية.\"",
          "p1": "مرحباً بكم في شركة لمياء الخليج الاتحاد، شريكك الموثوق في جميع أنحاء المملكة العربية السعودية لحلول التنظيف والتعقيم وخدمات التكييف ومكافحة الحشرات وصيانة المرافق. نتخصص في تقديم خدمات النظافة والصيانة عالية الجودة للمنازل والفلل والشقق والمكاتب والمحلات التجارية والمطاعم والمستودعات والمستشفيات والمباني التجارية.",
          "p2": "تأسست شركتنا على سمعة قوية من الاحترافية والموثوقية ودعم العملاء المتميز. نستخدم أساليب تنظيف متقدمة، ومعدات احترافية، ومواد كيميائية صديقة للبيئة، وفنيين مدربين لتقديم نتائج استثنائية في كل مرة.",
          "read_story": "اقرأ قصتنا الكاملة"
        },
        "services": {
          "subtitle": "خبراتنا",
          "title": "الخدمات الأساسية",
          "browse": "تصفح جميع الخدمات",
          "expert": "خدمة الخبراء",
          "learn_more": "اعرف المزيد \u2190"
        },
        "why_us": {
          "title": "لسنا مجرد <br /> شركة <br /> <span className=\"text-alfawad-primary\">تنظيف.</span>",
          "desc": "نحن مزود متكامل لحلول النظافة والصيانة يتفهم معايير المعيشة السعودية وتوقعات العملاء.",
          "reasons": [
            "فنيون معتمدون للتنظيف والتكييف",
            "منتجات آمنة وصديقة للبيئة",
            "معدات وأدوات احترافية",
            "أسعار شفافة بدون رسوم خفية",
            "حجز سريع وخدمة في الوقت المحدد",
            "باقات صيانة سنوية بأسعار معقولة",
            "ضمان رضا العملاء"
          ],
          "standards_title": "معايير مهنية في كل خطوة",
          "standards_desc": "نركز على المعدات ذات الجودة الاحترافية، والمواد الكيميائية الصديقة للبيئة، والفنيين المدربين تدريباً عالياً لتقديم نتائج استثنائية في كل مرة بجميع أنحاء المملكة.",
          "iso": "معتمد من الآيزو",
          "premium": "جودة فاخرة"
        },
        "stats": {
          "clients": "عميل سعيد",
          "clean": "ضمان Նظافة",
          "fast": "استجابة سريعة"
        },
        "cta": {
          "title": "هل أنت مستعد <br className=\"hidden md:block\" /> <span className=\"text-alfawad-primary\">لمساحة أنظف</span>؟",
          "desc": "احجز زيارة الفحص المجانية اليوم وجرب الفرق الاحترافي لشركة لمياء الخليج الاتحاد.",
          "btn": "احجز زيارتك المجانية الآن"
        }
      },
      "industrial": {
        "nav": {
          "home": "الرئيسية",
          "about": "من نحن",
          "overview": "نظرة عامة",
          "introduction": "مقدمة",
          "chairman": "رسالة رئيس مجلس الإدارة",
          "vision": "الرؤية والرسالة",
          "quality": "سياسة الجودة",
          "env_safety": "سياسة البيئة والسلامة",
          "services": "خدماتنا",
          "manpower": "القوى العاملة الفنية",
          "equipment": "المعدات الثقيلة",
          "support": "دعم المشروع",
          "management": "إدارة المشروعات",
          "material": "خدمات المواد",
          "brochure": "كتيبنا",
          "clients": "العملاء",
          "career": "الوظائف",
          "enquiry": "استفسار",
          "contact": "اتصل بنا",
          "exit": "الخروج من الفواد"
        },
        "hero": {
          "title": "مؤسسة لمياء الخليج الاتحاد",
          "subtitle": "للمقاولات العامة",
          "description": "مزود خدمات المقاولات والصناعة الموثوق به في المملكة العربية السعودية",
          "cta": "تواصل معنا"
        },
        "intro": {
          "title_main": "مؤسسة لمياء الخليج الاتحاد للمقاولات العامة",
          "title_sub": "شركة مقاولات سعودية رائدة",
          "desc": "مؤسسة لمياء الخليج الاتحاد للمقاولات العامة هي مزود رائد في السعودية لخدمات المقاولات والدعم الصناعي، تقدم عمالة موثوقة، وتأجير معدات، ودعم إنشائي، وتوريد مواد، وخدمات إدارة المشاريع في جميع أنحاء المملكة العربية السعودية.",
          "story": "تعرف على قصتنا"
        },
        "leadership": {
          "title": "نبني مستقبل المملكة العربية السعودية",
          "desc": "الصحة والسلامة هي الاهتمام الأساسي لشعبنا"
        },
        "services": {
          "subtitle": "خدماتنا",
          "title": "حيث يلتقي الشغف بالإنتاجية",
          "read_more": "اقرأ المزيد"
        },
        "project": {
          "support_title": "خدمة دعم المشاريع",
          "support_desc": "يدعمك فريق إدارة المشاريع لدينا في تنفيذ مشاريعك بدءاً من الطلب الأولي وحتى التصميم والتسليم...",
          "support_btn": "اعرف المزيد",
          "mgmt_title": "خدمة إدارة المشاريع",
          "mgmt_items": [
            "تركيب الحماية من الحرائق",
            "التنظيف بنفث المياه",
            "حلول سلامة المسامير"
          ],
          "mgmt_btn": "اعرف المزيد"
        },
        "vision": {
          "subtitle": "الالتزام بالتميز",
          "title": "رؤية السعودية",
          "title_span": "2030",
          "tagline": "نزاهة بلا حدود",
          "item1": "خدمة عملاء فائقة",
          "item2": "شغف بالجودة"
        },
        "why_us": {
          "subtitle": "لماذا تختارنا",
          "title": "نولي أقصى درجات الأهمية للجودة والضمان علينا",
          "features": {
            "fast": "تعبئة سريعة",
            "fast_desc": "تعبئة سريعة للعمالة والمعدات إلى الموقع.",
            "skilled": "قوى عاملة ماهرة",
            "skilled_desc": "فئات قوى عاملة فنية وغير فنية مؤهلة.",
            "modern": "أسطول حديث",
            "modern_desc": "أسطول معدات حديث مع صيانة دورية.",
            "safety": "السلامة أولاً",
            "safety_desc": "التزام صارم بلوائح الصحة والسلامة والبيئة."
          }
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'htmlTag', 'cookie', 'path', 'subdomain'],
      caches: ['localStorage'],
    },
  });

// Set initial direction
const handleLanguageChange = (lng: string) => {
  document.body.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
};

i18n.on('languageChanged', handleLanguageChange);
handleLanguageChange(i18n.language);

export default i18n;
