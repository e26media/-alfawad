import {
  Wind, Home, Sofa, Layers, BedDouble, Droplets, Armchair, MoreHorizontal,
  Wrench, Fan, Settings, CalendarClock, Bug, Paintbrush, ShieldCheck, Scissors,
  Shield, Activity, Layout, Building2, Construction, Sparkles, Coffee, Brush,
  CheckCircle, Zap, ShieldAlert, SprayCan, GlassWater, Thermometer, UserCheck
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
}

export const serviceDetails: ServiceDetail[] = [
  {
    title: "Residential Cleaning",
    slug: "residential-cleaning",
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
    title: "Commercial Cleaning",
    slug: "commercial-cleaning",
    description: "Offices, shops, clinics, schools.",
    icon: Building2,
    image: commercial,
    longDescription: "Businesses require a clean environment for employees and customers. We provide specialized cleaning solutions for offices and commercial properties including retail shops, restaurants, warehouses, and building common areas.",
    benefits: ["Maintains professional image", "Healthier workplace environment", "Flexible after-hours scheduling", "Specialized clinic sanitization"],
    process: ["Office deep cleaning", "Retail shop cleaning", "Restaurant kitchen cleaning", "Warehouse cleaning", "Common area cleaning"],
    packages: [
      { name: "Daily Service", price: "Contact Us", features: ["Morning/Evening shifts", "Full area upkeep", "Supply management"] },
      { name: "Weekly Deep Clean", price: "Contact Us", features: ["Comprehensive scrubbing", "Window cleaning", "High-touch disinfection"] },
    ],
  },
  {
    title: "Deep Cleaning",
    slug: "deep-cleaning-service",
    metaTitle: "Deep Cleaning Services in Saudi Arabia | Lamiya Al Kahleej",
    metaDescription: "Professional deep cleaning services for homes, villas, apartments, and offices in Riyadh, Jeddah, Dammam, and across KSA.",
    description: "Intensive scrubbing, sanitizing, and detail oriented work.",
    icon: Sparkles,
    image: acMaintenance,
    longDescription: "Our deep cleaning service is designed to clean areas that regular cleaning misses. It is perfect for villas, apartments, offices, restaurants, and buildings. We focus on intensive scrubbing, sanitization, and detail-oriented work to restore your property's shine.",
    benefits: ["Floor scrubbing and polishing", "Wall and ceiling dust removal", "Kitchen grease removal", "Bathroom scale removal", "Window and glass cleaning", "Sanitization and deodorizing"],
    process: ["Floor scrubbing", "Dust removal", "Grease removal", "Scale removal", "Glass cleaning", "Final sanitization"],
    packages: [
      { name: "Residential Deep", price: "Contact Us", features: ["Full home scrub", "Appliances cleaning", "Sanitization"] },
      { name: "Commercial Deep", price: "Contact Us", features: ["Deep workspace cleaning", "Carpet vacuuming", "HVAC vent dusting"] },
    ],
  },
  {
    title: "Post Construction Cleaning",
    slug: "post-construction-cleaning",
    description: "Removing dust, debris, and polishing surfaces.",
    icon: Construction,
    image: postConstruction,
    longDescription: "Moving into a new or renovated space shouldn't be a mess. Our post-construction cleaning removes all fine dust, debris, and construcción remains. We polish surfaces to leave your new property ready for immediate occupancy.",
    benefits: ["Eliminates hazardous dust", "Polished finishes on all surfaces", "Ready-to-move-in condition", "Detailed cleanup of debris"],
    process: ["Rough debris removal", "Fine dust extraction", "Window and frame cleaning", "Floor polishing", "Final touch-up sanitization"],
    packages: [
      { name: "Standard", price: "Contact Us", features: ["Full debris clearing", "Dust removal", "Floor wash"] },
      { name: "Premium", price: "Contact Us", features: ["Surface polishing", "Window frames cleaning", "Deep detail work"] },
    ],
  },
  {
    title: "Carpet & Upholstery Cleaning",
    slug: "carpet-upholstery-cleaning",
    description: "Stain removal, steam cleaning.",
    icon: Layers,
    image: carpetCleaning,
    longDescription: "Furniture absorbs dust, stains, sweat, and allergens over time. Our upholstery cleaning service restores your furniture's freshness using stain removal and steam cleaning techniques.",
    benefits: ["Extends fabric lifespan", "Removes deep-seated allergens", "Professional stain treatment", "Restores color and texture"],
    process: ["Pre-treatment of stains", "Deep steam extraction", "Shampooing", "Sanitization", "Fast-drying process"],
    packages: [
      { name: "Item-Based", price: "Contact Us", features: ["Single sofa/rug", "Deep stain removal"] },
      { name: "Full Home", price: "Contact Us", features: ["All carpets & sofas", "Fabric protection"] },
    ],
  },
  {
    title: "Window Cleaning",
    slug: "window-cleaning",
    description: "Interior/exterior glass cleaning.",
    icon: Layout,
    image: windowCleaning,
    longDescription: "Enjoy a clear view with our professional window cleaning services. We handle both interior and exterior glass cleaning, ensuring a streak-free finish for your home or office.",
    benefits: ["Streak-free finish", "Removes hard water stains", "Cleans frames and sills", "Safe high-rise access"],
    process: ["Glass washing/scrubbing", "Squeegee finishing", "Frame cleaning", "Sill wiping", "Quality inspection"],
    packages: [
      { name: "Standard Home", price: "Contact Us", features: ["All interior windows", "Reachable exterior"] },
      { name: "Full Exterior", price: "Contact Us", features: ["Pure water cleaning", "High access", "Screens cleaning"] },
    ],
  },
  {
    title: "Floor Care",
    slug: "floor-care",
    description: "Polishing, waxing, buffing, tile scrubbing.",
    icon: Brush,
    image: floorCare,
    longDescription: "Protect and enhance your floors with our professional floor care services. We provide polishing, waxing, buffing, and tile scrubbing to keep your floors looking brand new.",
    benefits: ["Restores shine and luster", "Protects floor surfaces", "Removes deep scratches", "Slip-resistant finishes"],
    process: ["Intensive scrubbing", "Deep cleaning of grout", "Polishing/Buffing", "Protective waxing", "Final seal application"],
    packages: [
      { name: "Tile Scrubbing", price: "Contact Us", features: ["Deep wash", "Grout cleaning"] },
      { name: "Marble Polishing", price: "Contact Us", features: ["Crystalizing", "Shiny finish", "Sealant"] },
    ],
  },
  {
    title: "Full Home Sanitization Package",
    slug: "full-home-sanitization-package",
    description: "Sanitizing high touch areas and surfaces.",
    icon: ShieldCheck,
    image: homeSanitization,
    longDescription: "Our Full Home Sanitization Package is designed to provide complete protection against viruses, bacteria, mold spores, dust mites, and harmful germs. We use hospital-grade disinfectants to ensure every room is treated thoroughly.",
    benefits: ["Eliminates bacteria and viruses", "Reduces allergy triggers", "Removes odors and germs", "Keeps home safe for children and pets", "Improves indoor air quality", "Prevents mold growth"],
    process: ["Living Room Sanitization", "Bedroom Sanitization", "Kitchen Sanitization", "Bathroom Sanitization", "Common Areas & Touchpoints"],
    packages: [
      { name: "Apartment", price: "Contact Us", features: ["Full sanitization", "All rooms & kitchen", "Bathroom disinfection"] },
      { name: "Villa", price: "Contact Us", features: ["Multi-story coverage", "Deep sanitization", "All touchpoints"] },
    ],
  },
  {
    title: "Individual Room Sanitization",
    slug: "individual-room-sanitization-packages",
    description: "Targeted sanitization for specific rooms.",
    icon: Scissors,
    image: roomSanitization,
    longDescription: "Not every home requires full sanitization. Our Individual Room Sanitization Packages allow you to target specific rooms like living rooms, kitchens, bedrooms, or offices for targeted hygiene.",
    benefits: ["Targeted hygiene", "Affordable pricing", "Fast service", "No damage to furniture"],
    process: ["Dust and dirt removal", "Deep cleaning of surfaces", "Sanitization using approved disinfectants", "Anti-bacterial spray application"],
    packages: [
      { name: "Per Room", price: "Contact Us", features: ["Full room scrub", "Sanitization", "Disinfection spray"] },
    ],
  },
  {
    title: "AC Cleaning",
    slug: "ac-cleaning",
    metaTitle: "AC Cleaning Services in KSA | Lamiya Al Kahleej Company",
    metaDescription: "Expert AC cleaning, coil cleaning, duct cleaning, and maintenance services in Saudi Arabia. Improve air quality and reduce electricity bills.",
    description: "Professional AC cleaning for all types of units.",
    icon: Fan,
    image: acCleaning,
    longDescription: "Air conditioners in Saudi Arabia run almost every day, accumulating dust and bacteria. Our professional AC cleaning services for split, window, cassette, and central AC systems ensure better cooling and air quality.",
    benefits: ["Prevents breathing problems", "Reduces dust circulation", "Improves cooling efficiency", "Saves electricity cost", "Extends AC lifespan", "Removes bad odor and mold"],
    process: ["Cleaning AC filters", "Cleaning indoor unit", "Cleaning outdoor unit", "Dust and debris removal", "Sanitizing air vents", "Performance check"],
    packages: [
      { name: "Split AC", price: "Contact Us", features: ["Indoor/Outdoor cleaning", "Filter wash", "Sanitization"] },
      { name: "Window AC", price: "Contact Us", features: ["Deep wash", "Performance test"] },
    ],
  },
  {
    title: "AC Duct Cleaning",
    slug: "ac-duct-cleaning",
    description: "Improve indoor air quality with duct cleaning.",
    icon: Wind,
    image: acDuct,
    longDescription: "Air ducts collect dust, bacteria, and allergens over time. Our professional AC duct cleaning service ensures clean airflow and healthier indoor environments by removing contaminants from your circulation system.",
    benefits: ["Cleaner indoor air", "Reduces allergies and asthma triggers", "Improves cooling airflow", "Removes bad smell from ducts", "Enhances AC performance"],
    process: ["Inspection of duct condition", "Removal of dust buildup", "High-powered vacuum cleaning", "Sanitization and deodorizing", "Final airflow and system check"],
    packages: [
      { name: "Standard", price: "Contact Us", features: ["Vacuum cleaning", "Sanitization", "Deodorizing"] },
    ],
  },
  {
    title: "AC Maintenance & Repair",
    slug: "ac-maintenance-and-repair",
    description: "Professional maintenance and repair for all AC issues.",
    icon: Wrench,
    image: acMaintenance,
    longDescription: "If your AC is not cooling properly or leaking, you need professional maintenance. We provide complete AC maintenance and repair services with expert technicians to fix common problems like gas leaks, compressor issues, and more.",
    benefits: ["Fast service", "Genuine spare parts", "Experienced AC technicians", "Affordable pricing", "Warranty support available"],
    process: ["System diagnosis", "Gas pressure check", "Electrical inspection", "Part replacement if needed", "Performance testing"],
    packages: [
      { name: "Standard Visit", price: "Contact Us", features: ["Inspection", "Basic diagnostic", "Minor fixes"] },
    ],
  },
  {
    title: "AC Coil Cleaning",
    slug: "ac-coil-cleaning-services",
    description: "Improve cooling performance with coil cleaning.",
    icon: Activity,
    image: acCoil,
    longDescription: "Dirty coils reduce heat transfer and cooling performance. Our coil cleaning service removes heavy dust, grease, and contaminants from evaporator and condenser coils to ensure stronger cooling.",
    benefits: ["Stronger cooling", "Lower electricity cost", "Reduced compressor stress", "Longer AC life", "Improved air quality"],
    process: ["Coil inspection", "Chemical application", "Pressure wash", "Grease removal", "Final performance check"],
    packages: [
      { name: "Deep Coil Clean", price: "Contact Us", features: ["Chemical wash", "Pressure cleaning", "Debris removal"] },
    ],
  },
  {
    title: "AC Installation & Replacement",
    slug: "ac-installation-and-replacement-services",
    description: "Professional AC installation and replacement.",
    icon: Settings,
    image: acInstall,
    longDescription: "Installing an AC unit correctly is essential for long-term performance. We provide professional installation and replacement services for all brands and models, ensuring proper placement and piping.",
    benefits: ["Proper placement planning", "Correct mounting and piping", "Gas filling included", "Testing and final check", "Safe removal of old units"],
    process: ["Site inspection", "Mounting and piping", "Gas filling", "Testing", "Customer walkthrough"],
    packages: [
      { name: "New Install", price: "Contact Us", features: ["Standard brackets", "Piping", "Testing"] },
    ],
  },
  {
    title: "Annual AC Maintenance Contracts",
    slug: "annual-ac-maintenance-contracts",
    description: "Scheduled inspections and preventive maintenance.",
    icon: CalendarClock,
    image: acAnnual,
    longDescription: "Our Annual Maintenance Contracts (AMC) help you avoid sudden breakdowns. We provide regular cleaning, filter replacement, and system checks throughout the year to ensure continuous cooling.",
    benefits: ["Saves money long-term", "Prevents emergency breakdowns", "Ensures continuous cooling", "Priority support during summer"],
    process: ["Regular cleaning", "Filter replacement", "Coil inspection", "Gas pressure check", "Electrical safety check"],
    packages: [
      { name: "Basic AMC", price: "Contact Us", features: ["2 visits per year", "Cleaning included"] },
      { name: "Premium AMC", price: "Contact Us", features: ["4 visits per year", "Priority support", "Full checkup"] },
    ],
  },
  {
    title: "Furniture Cleaning",
    slug: "furniture-cleaning-services",
    description: "Deep cleaning for all types of furniture.",
    icon: Armchair,
    image: furnitureCleaning,
    longDescription: "Furniture collects dust, stains, and bacteria over time. Our professional furniture cleaning service restores your furniture's look and hygiene using safe shampooing and steam cleaning techniques.",
    benefits: ["Restores furniture look", "Safe for fabrics & leather", "Removes deep bacteria", "Eco-friendly shampoo"],
    process: ["Vacuuming", "Shampooing", "Steam extraction", "Detail scrubbing", "Sanitization"],
    packages: [
      { name: "Living Set", price: "Contact Us", features: ["Sofa + Chairs", "Deep clean", "Sanitization"] },
    ],
  },
  {
    title: "Sofa Cleaning",
    slug: "sofa-cleaning-services",
    description: "Professional sofa cleaning and restoration.",
    icon: Sofa,
    image: sofaCleaning,
    longDescription: "Sofas are used daily and accumulate stains and dust. Our sofa cleaning service restores freshness and improves indoor hygiene through deep vacuuming and shampoo washing.",
    benefits: ["Stain removal", "Fresh scent", "Safe for all fabrics", "Sanitization included"],
    process: ["Deep vacuuming", "Stain treatment", "Shampoo wash / steam wash", "Fabric protection option", "Sanitization and drying"],
    packages: [
      { name: "3-Seater", price: "Contact Us", features: ["Deep wash", "Sanitization"] },
      { name: "5-Seater", price: "Contact Us", features: ["Full set", "Stain removal", "Extra care"] },
    ],
  },
  {
    title: "Mattress Cleaning",
    slug: "mattress-cleaning",
    description: "Deep vacuuming and sanitization for mattresses.",
    icon: BedDouble,
    image: mattressCleaning,
    longDescription: "Mattresses are a major source of dust mites and bacteria. Our mattress cleaning includes deep vacuuming, stain removal, and steam treatment to ensure a healthy sleeping environment.",
    benefits: ["Removes dust mites", "Improves sleep quality", "Eliminates odor", "Safe for kids and allergy patients"],
    process: ["Deep vacuuming", "Stain removal", "Steam treatment", "Sanitization spray", "Drying"],
    packages: [
      { name: "Single Mattress", price: "Contact Us", features: ["Full scrub", "Sanitization"] },
      { name: "King Mattress", price: "Contact Us", features: ["Deep sanitization", "Stain removal"] },
    ],
  },
  {
    title: "Carpet Cleaning & Sanitation",
    slug: "carpet-cleaning-sanitation",
    description: "Deep cleaning and sanitization for carpets.",
    icon: Layers,
    image: carpetCleaning,
    longDescription: "Carpets trap dust, sand, and bacteria. Our carpet cleaning service ensures deep cleaning and sanitization using dust extraction and steam cleaning for healthier living.",
    benefits: ["Deep dust extraction", "Effective stain removal", "Bacteria elimination", "Restores carpet texture"],
    process: ["Dust extraction", "Stain removal", "Shampoo wash", "Steam cleaning", "Sanitization spray", "Drying and finishing"],
    packages: [
      { name: "Per SQM", price: "Contact Us", features: ["Standard clean", "Sanitization"] },
    ],
  },
  {
    title: "Curtain Cleaning & Sanitation",
    slug: "curtain-cleaning-sanitation",
    description: "Restore freshness to your curtains.",
    icon: Scissors,
    image: curtainCleaning,
    longDescription: "Curtains collect dust and affect indoor air quality. We provide professional curtain cleaning services for homes and offices to enhance room freshness and hygiene.",
    benefits: ["Removes dust and allergens", "Enhances room freshness", "Improves appearance", "Prevents bacteria growth"],
    process: ["Dust removal", "Steam cleaning", "Sanitization", "Finishing"],
    packages: [
      { name: "Standard Set", price: "Contact Us", features: ["On-site steam", "Sanitization"] },
    ],
  },
  {
    title: "Water Tank Cleaning & Disinfection",
    slug: "water-tank-cleaning-disinfection",
    description: "Ensure safe water for your property.",
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
    title: "Annual Pest Control Contract",
    slug: "annual-pest-control-contract",
    metaTitle: "Annual Pest Control Contract in KSA | Lamiya Al Kahleej",
    metaDescription: "Protect your home and business with annual pest control contracts. Safe treatment for cockroaches, ants, termites, rodents, and mosquitoes.",
    description: "Year-round protection against common pests.",
    icon: Bug,
    image: pestControl,
    longDescription: "Pests can damage property and spread disease. Our Annual Pest Control Contract provides full-year protection with scheduled visits for cockroaches, ants, termites, and more.",
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