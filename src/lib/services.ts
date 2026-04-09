import {
  Wind, Home, Sofa, Layers, BedDouble, Droplets, Armchair, MoreHorizontal,
  Wrench, Fan, Settings, CalendarClock, Bug, Paintbrush, ShieldCheck, Scissors,
  Shield, Activity, Layout, Building2, Construction, Sparkles, Coffee, Brush,
  CheckCircle, Zap, ShieldAlert, SprayCan, GlassWater, Thermometer, UserCheck,
  Hammer, Pipette as Pipe, ZapOff, Box, Container
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import acCleaning from "@/assets/services/ac-cleaning.jpg";
import acDuct from "@/assets/services/ac-duct.jpg";
import sofaCleaning from "@/assets/services/sofa-cleaning.jpg";
import mattressCleaning from "@/assets/services/mattress-cleaning.jpg";
import furnitureCleaning from "@/assets/services/furniture-cleaning.jpg";
import moldCleaning from "@/assets/services/mold-cleaning.jpg";
import waterTank from "@/assets/services/water-tank.jpg";
import pestControl from "@/assets/services/pest-control.jpg";
import acMaintenance from "@/assets/services/ac-maintenance.jpg";
import acCoil from "@/assets/services/ac-coil.jpg";
import acInstall from "@/assets/services/ac-install.jpg";
import acAnnual from "@/assets/services/ac-annual.jpg";
import acFilter from "@/assets/services/ac-filter.jpg";
import sofaChemical from "@/assets/services/sofa-chemical.jpg";
import carpetCleaning from "@/assets/services/carpet-cleaning.jpg";
import curtainCleaning from "@/assets/services/curtain-cleaning.jpg";
import residential from "@/assets/services/residential.jpg";
import commercial from "@/assets/services/commercial.jpg";
import postConstruction from "@/assets/services/post-construction.jpg";
import windowCleaning from "@/assets/services/window-cleaning.jpg";
import floorCare from "@/assets/services/floor-care.jpg";
import kitchen from "@/assets/services/kitchen.jpg";
import fridge from "@/assets/services/fridge.jpg";
import outdoor from "@/assets/services/outdoor.jpg";
import painting from "@/assets/services/painting.jpg";
import homeSanitization from "@/assets/packages/home-sanitization.jpg";
import roomSanitization from "@/assets/packages/room-sanitization.jpg";

export interface HeroService {
  title: string;
  icon: LucideIcon;
  path: string;
}

export const heroServices: HeroService[] = [
  { title: "Residential\nCleaning", icon: Home, path: "/services/residential-cleaning" },
  { title: "Commercial\nCleaning", icon: Building2, path: "/services/commercial-cleaning" },
  { title: "Deep\nCleaning", icon: Sparkles, path: "/services/deep-cleaning-service" },
  { title: "Post Construction\nCleaning", icon: Construction, path: "/services/post-construction-cleaning" },
  { title: "Carpet & Upholstery\nCleaning", icon: Layers, path: "/services/carpet-cleaning-sanitation" },
  { title: "Window\nCleaning", icon: Layout, path: "/services/window-cleaning" },
  { title: "Floor\nCare", icon: Brush, path: "/services/floor-care" },
  { title: "All\nServices", icon: MoreHorizontal, path: "/services" },
];

export interface PopularService {
  title: string;
  image: string;
  slug: string;
}

export const popularServices: PopularService[] = [
  { title: "Residential Cleaning", image: residential, slug: "residential-cleaning" },
  { title: "Commercial Cleaning", image: commercial, slug: "commercial-cleaning" },
  { title: "Deep Cleaning", image: acMaintenance, slug: "deep-cleaning-service" },
  { title: "Post Construction", image: postConstruction, slug: "post-construction-cleaning" },
  { title: "Sofa Cleaning", image: sofaCleaning, slug: "sofa-cleaning-services" },
  { title: "Window Cleaning", image: windowCleaning, slug: "window-cleaning" },
  { title: "Pest Control", image: pestControl, slug: "annual-pest-control-contract" },
  { title: "Water Tank Cleaning", image: waterTank, slug: "water-tank-cleaning-disinfection" },
];

export interface ACService {
  title: string;
  image: string;
  slug: string;
}

export const acServices: ACService[] = [
  { title: "AC Cleaning", image: acCleaning, slug: "ac-cleaning" },
  { title: "AC Duct Cleaning", image: acDuct, slug: "ac-duct-cleaning" },
  { title: "AC Maintenance & Repair", image: acMaintenance, slug: "ac-maintenance-and-repair" },
  { title: "AC Coil Cleaning", image: acCoil, slug: "ac-coil-cleaning-services" },
  { title: "AC Installation & Replacement", image: acInstall, slug: "ac-installation-and-replacement-services" },
  { title: "Annual AC Maintenance", image: acAnnual, slug: "annual-ac-maintenance-contracts" },
];

export interface FurnitureService {
  title: string;
  image: string;
  slug: string;
}

export const furnitureServices: FurnitureService[] = [
  { title: "Sofa Cleaning", image: sofaCleaning, slug: "sofa-cleaning-services" },
  { title: "Mattress Cleaning", image: mattressCleaning, slug: "mattress-cleaning" },
  { title: "Carpet Cleaning", image: carpetCleaning, slug: "carpet-cleaning-sanitation" },
  { title: "Curtain Cleaning", image: curtainCleaning, slug: "curtain-cleaning-sanitation" },
  { title: "Furniture Cleaning", image: furnitureCleaning, slug: "furniture-cleaning-services" },
];

// Placeholder for newly generated images
const buildingCleaning = "https://images.unsplash.com/photo-1560067174-c5a3a8f37060?auto=format&fit=crop&q=80&w=800";
const containerCleaning = "https://images.unsplash.com/photo-1589939705384-5185138a04bd?auto=format&fit=crop&q=80&w=800";
const electricalImg = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800";
const plumbingImg = "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=800";
const carpenterImg = "https://images.unsplash.com/photo-1581578731522-a2046a760920?auto=format&fit=crop&q=80&w=800";
const pesticideImg = "https://images.unsplash.com/photo-1583091219600-410a563fc7d4?auto=format&fit=crop&q=80&w=800";
const acCleaningImg = "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800";
const deepCleaningImg = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800";
const sofaCleaningImg = "https://images.unsplash.com/photo-1589131008202-0d130c2626ec?auto=format&fit=crop&q=80&w=800";
const carpetCleaningImg = "https://images.unsplash.com/photo-1558523038-081c70bcd3a5?auto=format&fit=crop&q=80&w=800";
const mattressCleaningImg = "https://images.unsplash.com/photo-1631677461875-1031d2757276?auto=format&fit=crop&q=80&w=800";
const furnitureCleaningImg = "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800";

export interface ServiceDetail {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  image: string;
  longDescription: string;
  benefits: string[];
  process: string[];
  pests?: string[];
  metaTitle?: string;
  metaDescription?: string;
  packages: { name: string; price: string; features: string[] }[];
  category?: "residential" | "maintenance" | "water-tank" | "pesticide";
}

export const serviceDetails: ServiceDetail[] = [
  {
    title: "Residential Cleaning",
    slug: "residential-cleaning",
    category: "residential",
    description: "Regular home cleaning, deep cleaning.",
    icon: Home,
    image: residential,
    longDescription: "Our residential services are designed to ensure your home stays fresh, safe, and healthy. We cover all property types including villas, apartments, flats, and compounds. We provide regular home cleaning and deep cleaning tailored to your needs.",
    benefits: ["Regular maintenance schedule", "Trained professional cleaners", "Eco-friendly cleaning supplies", "Consistent high-quality results"],
    process: ["Living area dusting & mopping", "Kitchen surface cleaning", "Bathroom sanitization", "Trash removal", "Floor vacuuming"],
    packages: [
      { name: "Single Visit", price: "Contact Us", features: ["Full home clean", "Standard cleaning tasks", "Basic sanitization"] },
      { name: "Weekly Plan", price: "Contact Us", features: ["Scheduled visits", "Deep kitchen cleaning", "Priority booking"] },
    ],
  },
  {
    title: "Building Cleaning",
    slug: "building-cleaning",
    category: "residential",
    description: "Professional building exterior and interior cleaning.",
    icon: Building2,
    image: buildingCleaning,
    longDescription: "Complete cleaning solutions for residential and commercial buildings. We handle everything from facade cleaning to common area maintenance, ensuring your building stays in pristine condition.",
    benefits: ["Maintains building value", "Professional facade care", "Safe high-access equipment", "Trained team for large-scale projects"],
    process: ["Exterior pressure washing", "Common area scrubbing", "Glass and window cleaning", "Stairwell maintenance", "Garbage disposal area sanitization"],
    packages: [
      { name: "Single Visit", price: "Contact Us", features: ["Full exterior clean", "Standard common area cleaning"] },
      { name: "Maintenance Contract", price: "Contact Us", features: ["Scheduled visits", "Priority support"] },
    ],
  },
  {
    title: "Container Cleaning",
    slug: "container-cleaning",
    category: "residential",
    description: "Industrial cleaning for shipping and storage containers.",
    icon: Container,
    image: containerCleaning,
    longDescription: "Specialized cleaning services for containers used in shipping, storage, and industrial projects. We use high-pressure water and specialized detergents to remove residue, odors, and contaminants.",
    benefits: ["Removes odors and contaminants", "Prevents corrosion", "Increases container lifespan", "Quick turnaround time"],
    process: ["High-pressure washing", "Internal scrubbing", "Deodorizing", "Final inspection"],
    packages: [
      { name: "Single Container", price: "Contact Us", features: ["Internal and external clean", "Basic deodorizing"] },
      { name: "Batch Cleaning", price: "Contact Us", features: ["Special rates for multiple units"] },
    ],
  },
  {
    title: "Electrical Services",
    slug: "electrical-services",
    category: "maintenance",
    description: "Professional electrical repair and installation.",
    icon: Zap,
    image: electricalImg,
    longDescription: "Safe and reliable electrical services for your home and office. Our certified electricians handle wiring, fixture installation, panel repairs, and troubleshooting with the highest safety standards.",
    benefits: ["Safety first approach", "Certified technicians", "Emergency repair support", "Modern equipment"],
    process: ["Site audit", "Diagnosis", "Repair/Installation", "Safety testing"],
    packages: [
      { name: "Standard Visit", price: "Contact Us", features: ["Inspection", "Minor repairs", "Safety check"] },
    ],
  },
  {
    title: "Plumbing Services",
    slug: "plumbing-services",
    category: "maintenance",
    description: "Expert plumbing solutions for leaks and installations.",
    icon: Pipe,
    image: plumbingImg,
    longDescription: "Complete plumbing solutions including leak detection, pipe repair, fixture installation, and drainage clearing. We ensure your plumbing system works perfectly.",
    benefits: ["Leak detection experts", "Quality spare parts", "Fast response", "Clean and professional"],
    process: ["Problem diagnosis", "Part replacement", "Testing", "Cleanup"],
    packages: [
      { name: "Standard Visit", price: "Contact Us", features: ["Inspection", "Leak fixing", "Basic maintenance"] },
    ],
  },
  {
    title: "Carpenter Services",
    slug: "carpenter-services",
    category: "maintenance",
    description: "Professional woodworking and furniture repair.",
    icon: Hammer,
    image: carpenterImg,
    longDescription: "Expert carpentry for furniture assembly, repair, door fixing, and custom woodworking. We bring craftsmanship and precision to every project.",
    benefits: ["Expert craftsmanship", "Custom solutions", "Durable repairs", "Furniture assembly specialists"],
    process: ["Measurement & Planning", "Material selection", "Execution", "Finishing"],
    packages: [
      { name: "Standard Visit", price: "Contact Us", features: ["Assembly/Repair", "Inspection"] },
    ],
  },
  {
    title: "AC Installation & Maintenance",
    slug: "ac-installation-maintenance",
    category: "maintenance",
    description: "Complete AC solutions including installation and regular care.",
    icon: Settings,
    image: acInstall,
    longDescription: "We provide comprehensive AC installation and maintenance services. From setting up new units to regular checkups, we ensure your cooling systems run efficiently all year round.",
    benefits: ["Professional installation", "Prevents breakdowns", "Improves efficiency", "Qualified technicians"],
    process: ["Installation", "Gas checking", "Performance tuning", "Cleaning"],
    packages: [
      { name: "Installation", price: "Contact Us", features: ["Mounting", "Piping", "Testing"] },
      { name: "Annual Maintenance", price: "Contact Us", features: ["Regular checkups", "Cleaning"] },
    ],
  },
  {
    title: "AC Cleaning",
    slug: "ac-cleaning",
    category: "residential",
    metaTitle: "AC Cleaning Services in KSA |Lamiya Al Khaleej Al Ittehad  Company",
    metaDescription: "Expert AC cleaning, coil cleaning, duct cleaning, and maintenance services in Saudi Arabia. Improve air quality and reduce electricity bills.",
    description: "Professional AC cleaning for all types of units.",
    icon: Fan,
    image: acCleaningImg,
    longDescription: "Air conditioners in Saudi Arabia run almost every day, accumulating dust and bacteria. Our professional AC cleaning services for split, window, cassette, and central AC systems ensure better cooling and air quality.",
    benefits: ["Prevents breathing problems", "Reduces dust circulation", "Improves cooling efficiency", "Saves electricity cost", "Extends AC lifespan", "Removes bad odor and mold"],
    process: ["Cleaning AC filters", "Cleaning indoor unit", "Cleaning outdoor unit", "Dust and debris removal", "Sanitizing air vents", "Performance check"],
    packages: [
      { name: "Split AC", price: "Contact Us", features: ["Indoor/Outdoor cleaning", "Filter wash", "Sanitization"] },
      { name: "Window AC", price: "Contact Us", features: ["Deep wash", "Performance test"] },
    ],
  },
  {
    title: "Deep Cleaning",
    slug: "deep-cleaning-service",
    category: "residential",
    metaTitle: "Deep Cleaning Services in Saudi Arabia |Lamiya Al Khaleej Al Ittehad ",
    metaDescription: "Professional deep cleaning services for homes, villas, apartments, and offices in Riyadh, Jeddah, Dammam, and across KSA.",
    description: "Intensive scrubbing, sanitizing, and detail oriented work.",
    icon: Sparkles,
    image: deepCleaningImg,
    longDescription: "Our deep cleaning service is designed to clean areas that regular cleaning misses. It is perfect for villas, apartments, offices, restaurants, and buildings. We focus on intensive scrubbing, sanitization, and detail-oriented work to restore your property's shine.",
    benefits: ["Floor scrubbing and polishing", "Wall and ceiling dust removal", "Kitchen grease removal", "Bathroom scale removal", "Window and glass cleaning", "Sanitization and deodorizing"],
    process: ["Floor scrubbing", "Dust removal", "Grease removal", "Scale removal", "Glass cleaning", "Final sanitization"],
    packages: [
      { name: "Residential Deep", price: "Contact Us", features: ["Full home scrub", "Appliances cleaning", "Sanitization"] },
      { name: "Commercial Deep", price: "Contact Us", features: ["Deep workspace cleaning", "Carpet vacuuming", "HVAC vent dusting"] },
    ],
  },
  {
    title: "Sofa Cleaning",
    slug: "sofa-cleaning-services",
    category: "residential",
    description: "Professional sofa cleaning and restoration.",
    icon: Sofa,
    image: sofaCleaningImg,
    longDescription: "Sofas are used daily and accumulate stains and dust. Our sofa cleaning service restores freshness and improves indoor hygiene through deep vacuuming and shampoo washing.",
    benefits: ["Stain removal", "Fresh scent", "Safe for all fabrics", "Sanitization included"],
    process: ["Deep vacuuming", "Stain treatment", "Shampoo wash / steam wash", "Fabric protection option", "Sanitization and drying"],
    packages: [
      { name: "3-Seater", price: "Contact Us", features: ["Deep wash", "Sanitization"] },
      { name: "5-Seater", price: "Contact Us", features: ["Full set", "Stain removal", "Extra care"] },
    ],
  },
  {
    title: "Carpet Cleaning",
    slug: "carpet-cleaning-sanitation",
    category: "residential",
    description: "Deep cleaning and sanitization for carpets.",
    icon: Layers,
    image: carpetCleaningImg,
    longDescription: "Carpets trap dust, sand, and bacteria. Our carpet cleaning service ensures deep cleaning and sanitization using dust extraction and steam cleaning for healthier living.",
    benefits: ["Deep dust extraction", "Effective stain removal", "Bacteria elimination", "Restores carpet texture"],
    process: ["Dust extraction", "Stain removal", "Shampoo wash", "Steam cleaning", "Sanitization spray", "Drying and finishing"],
    packages: [
      { name: "Per SQM", price: "Contact Us", features: ["Standard clean", "Sanitization"] },
    ],
  },
  {
    title: "Mattress Cleaning",
    slug: "mattress-cleaning",
    category: "residential",
    description: "Deep vacuuming and sanitization for mattresses.",
    icon: BedDouble,
    image: mattressCleaningImg,
    longDescription: "Mattresses are a major source of dust mites and bacteria. Our mattress cleaning includes deep vacuuming, stain removal, and steam treatment to ensure a healthy sleeping environment.",
    benefits: ["Removes dust mites", "Improves sleep quality", "Eliminates odor", "Safe for kids and allergy patients"],
    process: ["Deep vacuuming", "Stain removal", "Steam treatment", "Sanitization spray", "Drying"],
    packages: [
      { name: "Single Mattress", price: "Contact Us", features: ["Full scrub", "Sanitization"] },
      { name: "King Mattress", price: "Contact Us", features: ["Deep sanitization", "Stain removal"] },
    ],
  },
  {
    title: "Furniture Cleaning",
    slug: "furniture-cleaning-services",
    category: "residential",
    description: "Deep cleaning for all types of furniture.",
    icon: Armchair,
    image: furnitureCleaningImg,
    longDescription: "Furniture collects dust, stains, and bacteria over time. Our professional furniture cleaning service restores your furniture's look and hygiene using safe shampooing and steam cleaning techniques.",
    benefits: ["Restores furniture look", "Safe for fabrics & leather", "Removes deep bacteria", "Eco-friendly shampoo"],
    process: ["Vacuuming", "Shampooing", "Steam extraction", "Detail scrubbing", "Sanitization"],
    packages: [
      { name: "Living Set", price: "Contact Us", features: ["Sofa + Chairs", "Deep clean", "Sanitization"] },
    ],
  },
  {
    title: "Water Tank Services",
    slug: "water-tank-cleaning-disinfection",
    category: "water-tank",
    description: "Ensure safe water for your property with professional cleaning.",
    icon: Droplets,
    image: waterTank,
    longDescription: "Water tanks can develop algae and sediments if not cleaned. Our professional service ensures your water remains safe through sludge removal, scrubbing, and disinfection.",
    benefits: ["Protects family health", "Removes sediments and bacteria", "Prevents bad smell and algae", "Ensures safe water supply"],
    process: ["Tank inspection", "Drainage and sludge removal", "Scrubbing tank walls", "Anti-bacterial disinfection", "Fresh water refill assistance", "Final hygiene inspection"],
    packages: [
      { name: "Standard Tank", price: "Contact Us", features: ["Full scrub", "Disinfection", "Testing"] },
    ],
  },
  {
    title: "Professional Pest Control & Pesticide Treatments",
    slug: "annual-pest-control-contract",
    category: "pesticide",
    metaTitle: "Pesticide Services in KSA | Lamiya Al Khaleej Al Ittehad",
    metaDescription: "Protect your home and business with expert pesticide services. Safe treatment for cockroaches, ants, termites, rodents, and mosquitoes.",
    description: "Year-round protection against common pests with eco-friendly pesticides.",
    icon: Bug,
    image: pesticideImg,
    longDescription: "Pests can damage property and spread disease. Our Professional Pest Control & Pesticide Treatments provide full-year protection with scheduled visits for cockroaches, ants, termites, and more, using safe and effective treatments.",
    benefits: ["Scheduled treatment plans", "Safe chemicals and methods", "Long-term prevention", "Affordable yearly packages", "Suitable for all property types"],
    pests: ["Cockroaches", "Ants", "Termites", "Rodents", "Bed bugs", "Mosquitoes", "Flies and insects"],
    process: ["Site audit", "Treatment application", "Regular monitoring", "Safety check"],
    packages: [
      { name: "Annual Home", price: "Contact Us", features: ["4 visits per year", "Safe chemicals", "Full coverage"] },
    ],
  },
  {
    title: "Mold Cleaning",
    slug: "mold-cleaning",
    description: "Professional mold removal and treatment.",
    icon: ShieldAlert,
    image: moldCleaning,
    longDescription: "Mold is dangerous for health and can damage walls. We provide professional mold cleaning, removal, and anti-fungal treatment solutions to ensure a safe environment.",
    benefits: ["Removes health hazards", "Prevents wall damage", "Stop mold regrowth", "Sanitize surfaces"],
    process: ["Mold inspection and detection", "Cleaning affected areas", "Anti-fungal chemical application", "Moisture prevention guidance", "Final sanitization"],
    packages: [
      { name: "Standard Treatment", price: "Contact Us", features: ["Removal", "Anti-fungal spray", "Prevention tips"] },
    ],
  },
  {
    title: "Painting Service",
    slug: "painting-service",
    description: "Interior and exterior painting services.",
    icon: Paintbrush,
    image: painting,
    longDescription: "We provide high-quality painting services for homes and offices. Our skilled painters ensure smooth finishing and long-lasting results for both interior and exterior surfaces.",
    benefits: ["Skilled painters", "Clean and professional work", "Fast completion", "Premium paint brands", "Interior & exterior options"],
    process: ["Site preparation", "Wall crack filling", "Plastering", "Painting (2 coats)", "Final cleanup"],
    packages: [
      { name: "Per Room", price: "Contact Us", features: ["Wall prep", "2 coats painting", "Cleanup"] },
    ],
  },
  {
    title: "Kitchen Deep Cleaning",
    slug: "kitchen-deep-cleaning",
    description: "Specialized deep cleaning for kitchens.",
    icon: Coffee,
    image: kitchen,
    longDescription: "Kitchens accumulate grease and grime like no other place. Our specialized service focuses on deep degreasing, sanitization, and detailed cleaning of all kitchen surfaces.",
    benefits: ["Deep degreasing", "Cabinet sanitation", "Tile scrubbing", "Appliance cleaning"],
    process: ["De-greasing", "Scrubbing", "Sanitization", "Polishing"],
    packages: [
      { name: "Full Kitchen", price: "Contact Us", features: ["De-greasing hoods", "Appliances external", "Cabinet scrub"] },
    ],
  },
  {
    title: "Fridge/Oven Cleaning",
    slug: "fridge-oven-cleaning",
    description: "Internal sanitization for kitchen appliances.",
    icon: Zap,
    image: fridge,
    longDescription: "Keep your appliances hygienic with our internal cleaning and degreasing for fridges and ovens. We remove food residue, bacteria, and odors.",
    benefits: ["Removes odors", "Eliminates bacteria", "Durable cleanliness", "Food-safe materials"],
    process: ["Internal tray removal", "Deep scrubbing", "Degreasing", "Sanitization"],
    packages: [
      { name: "Appliance Pair", price: "Contact Us", features: ["Fridge deep clean", "Oven deep clean"] },
    ],
  },
  {
    title: "Outdoor Cleaning",
    slug: "outdoor-cleaning",
    description: "Pressure washing for balconies and patios.",
    icon: Wind,
    image: outdoor,
    longDescription: "Outdoor areas collect sand and dust. We provide professional pressure washing and scrubbing for balconies, terraces, and patios to restore their appearance.",
    benefits: ["Sand & dust removal", "Wall wash included", "Clean relaxation space"],
    process: ["Pressure wash", "Floor scrub", "Glass railing clean"],
    packages: [
      { name: "Balcony Scrub", price: "Contact Us", features: ["Full floor clean", "Railing wash"] },
    ],
  },
  {
    title: "AC Filter Cleaning",
    slug: "ac-filter-cleaning",
    description: "Regular filter cleaning to maintain air quality.",
    icon: Fan,
    image: acFilter,
    longDescription: "Regular filter cleaning is essential for health and AC efficiency. We provide quick and effective filter cleaning for all AC types.",
    benefits: ["Better airflow", "Cleaner air", "Lower energy bills"],
    process: ["Filter removal", "Wash & sanitize", "Drying & reinstall"],
    packages: [
      { name: "Per Unit", price: "Contact Us", features: ["Filter wash", "Sanitization"] },
    ],
  }
];