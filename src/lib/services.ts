import {
  Wind, Home, Sofa, Layers, BedDouble, Droplets, Armchair, MoreHorizontal,
  Wrench, Fan, Settings, CalendarClock, Bug, Paintbrush, ShieldCheck, Scissors
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
import sofaChemical from "@/assets/services/sofa-chemical.jpg";
import carpetCleaning from "@/assets/services/carpet-cleaning.jpg";
import curtainCleaning from "@/assets/services/curtain-cleaning.jpg";

export interface HeroService {
  title: string;
  icon: LucideIcon;
  path: string;
}

export const heroServices: HeroService[] = [
  { title: "AC\nCleaning", icon: Wind, path: "/services/ac-cleaning" },
  { title: "Home\nCleaning", icon: Home, path: "/services/deep-cleaning" },
  { title: "Sofa\nCleaning", icon: Sofa, path: "/services/sofa-cleaning" },
  { title: "Carpet\nCleaning", icon: Layers, path: "/services/carpet-cleaning" },
  { title: "Mattress\nCleaning", icon: BedDouble, path: "/services/mattress-cleaning" },
  { title: "Water Tank\nCleaning", icon: Droplets, path: "/services/water-tank-cleaning" },
  { title: "Furniture\nCleaning", icon: Armchair, path: "/services/furniture-cleaning" },
  { title: "More\nServices", icon: MoreHorizontal, path: "/services" },
];

export interface PopularService {
  title: string;
  image: string;
  slug: string;
}

export const popularServices: PopularService[] = [
  { title: "AC Cleaning", image: acCleaning, slug: "ac-cleaning" },
  { title: "AC Duct Cleaning", image: acDuct, slug: "ac-duct-cleaning" },
  { title: "Sofa Cleaning", image: sofaCleaning, slug: "sofa-cleaning" },
  { title: "Mattress Cleaning", image: mattressCleaning, slug: "mattress-cleaning" },
  { title: "Furniture Cleaning", image: furnitureCleaning, slug: "furniture-cleaning" },
  { title: "Mold Cleaning", image: moldCleaning, slug: "mold-cleaning" },
  { title: "Water Tank Cleaning", image: waterTank, slug: "water-tank-cleaning" },
  { title: "Pest Control Service", image: pestControl, slug: "pest-control" },
];

export interface ACService {
  title: string;
  image: string;
  slug: string;
}

export const acServices: ACService[] = [
  { title: "AC Maintenance & Repair", image: acMaintenance, slug: "ac-maintenance" },
  { title: "AC Coil Cleaning", image: acCoil, slug: "ac-coil-cleaning" },
  { title: "AC Installation & Replacement", image: acInstall, slug: "ac-installation" },
  { title: "Annual AC Maintenance", image: acAnnual, slug: "ac-annual" },
  { title: "AC Cleaning", image: acCleaning, slug: "ac-cleaning" },
  { title: "AC Duct Cleaning", image: acDuct, slug: "ac-duct-cleaning" },
];

export interface FurnitureService {
  title: string;
  image: string;
  slug: string;
}

export const furnitureServices: FurnitureService[] = [
  { title: "Mattress Cleaning", image: mattressCleaning, slug: "mattress-cleaning" },
  { title: "Sofa Cleaning", image: sofaChemical, slug: "sofa-cleaning" },
  { title: "Carpet Cleaning", image: carpetCleaning, slug: "carpet-cleaning" },
  { title: "Curtain Cleaning", image: curtainCleaning, slug: "curtain-cleaning" },
  { title: "Furniture Cleaning", image: furnitureCleaning, slug: "furniture-cleaning" },
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
  packages: { name: string; price: string; features: string[] }[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    title: "AC Cleaning", slug: "ac-cleaning", description: "Professional AC unit cleaning and sanitization.", icon: Wind, image: acCleaning,
    longDescription: "Our AC cleaning service removes dust, mold, and bacteria from your air conditioning units, improving air quality and energy efficiency.",
    benefits: ["Improved air quality", "Energy savings up to 30%", "Extended AC lifespan", "Removes allergens & bacteria"],
    process: ["Unit inspection", "Filter removal & cleaning", "Coil deep cleaning", "Sanitization & reassembly"],
    packages: [
      { name: "Single Unit", price: "SAR 99", features: ["1 AC unit", "Filter cleaning", "Basic sanitization"] },
      { name: "Home Package", price: "SAR 349", features: ["Up to 4 units", "Deep coil cleaning", "Anti-bacterial treatment"] },
      { name: "Villa Package", price: "SAR 699", features: ["Up to 8 units", "Duct inspection", "Full sanitization", "Annual plan available"] },
    ],
  },
  {
    title: "Deep Cleaning", slug: "deep-cleaning", description: "Comprehensive top-to-bottom home cleaning.", icon: Home, image: acMaintenance,
    longDescription: "Our deep cleaning service covers every corner of your home. From ceiling fans to baseboards, we ensure a thorough, detailed clean.",
    benefits: ["99.9% bacteria removal", "Eco-friendly products", "Trained professionals", "Satisfaction guaranteed"],
    process: ["Initial inspection", "Surface preparation", "Deep scrubbing & sanitization", "Final quality check"],
    packages: [
      { name: "Studio/1BR", price: "SAR 299", features: ["Full apartment", "Kitchen deep clean", "1 bathroom"] },
      { name: "2-3 BR", price: "SAR 499", features: ["All rooms", "Kitchen & bathrooms", "Balcony"] },
      { name: "Villa", price: "SAR 899", features: ["Full villa", "All rooms & bathrooms", "Outdoor areas"] },
    ],
  },
  {
    title: "Sofa Cleaning", slug: "sofa-cleaning", description: "Professional upholstery cleaning for all fabrics.", icon: Sofa, image: sofaCleaning,
    longDescription: "We use advanced steam cleaning technology to remove stains, allergens, and odors from sofas and upholstery.",
    benefits: ["Deep stain removal", "Odor elimination", "Fabric protection", "Quick drying"],
    process: ["Fabric assessment", "Pre-treatment", "Steam cleaning", "Fabric protection coating"],
    packages: [
      { name: "Single Sofa", price: "SAR 99", features: ["1 sofa (3-seater)", "Stain treatment"] },
      { name: "Full Set", price: "SAR 249", features: ["Full set (up to 7 seats)", "Deodorizing"] },
      { name: "Premium", price: "SAR 399", features: ["Full set + chairs", "Fabric guard", "Carpet spot clean"] },
    ],
  },
  {
    title: "Carpet Cleaning", slug: "carpet-cleaning", description: "Deep carpet cleaning and sanitization.", icon: Layers, image: carpetCleaning,
    longDescription: "Professional carpet cleaning using hot water extraction and steam cleaning methods for deep sanitization.",
    benefits: ["Deep fiber cleaning", "Stain removal", "Allergen elimination", "Fresh scent"],
    process: ["Pre-vacuuming", "Stain pre-treatment", "Hot water extraction", "Speed drying"],
    packages: [
      { name: "Per Room", price: "SAR 79", features: ["1 room carpet", "Stain treatment"] },
      { name: "3 Rooms", price: "SAR 199", features: ["3 room carpets", "Deodorizing"] },
      { name: "Full Home", price: "SAR 449", features: ["All carpets", "Hallways included", "Rug cleaning"] },
    ],
  },
  {
    title: "Mattress Cleaning", slug: "mattress-cleaning", description: "Deep mattress sanitization for healthier sleep.", icon: BedDouble, image: mattressCleaning,
    longDescription: "Our mattress cleaning eliminates dust mites, bacteria, and allergens using UV treatment and steam cleaning.",
    benefits: ["Allergen removal", "UV sanitization", "Dust mite elimination", "Better sleep"],
    process: ["Vacuuming", "UV treatment", "Steam cleaning", "Anti-allergen treatment"],
    packages: [
      { name: "Single", price: "SAR 79", features: ["1 mattress", "UV treatment"] },
      { name: "Double", price: "SAR 139", features: ["2 mattresses", "Steam clean"] },
      { name: "Family", price: "SAR 249", features: ["Up to 4 mattresses", "Pillow cleaning"] },
    ],
  },
  {
    title: "Water Tank Cleaning", slug: "water-tank-cleaning", description: "Safe water tank sanitization.", icon: Droplets, image: waterTank,
    longDescription: "Ensure clean, safe water with professional water tank cleaning. We remove sediment, algae, and bacteria.",
    benefits: ["Safe drinking water", "Bacteria elimination", "Sediment removal", "Health compliance"],
    process: ["Tank draining", "Scrubbing", "Sanitization", "Water quality testing"],
    packages: [
      { name: "Small", price: "SAR 199", features: ["Up to 1000L", "Cleaning & sanitization"] },
      { name: "Medium", price: "SAR 349", features: ["Up to 3000L", "Water test"] },
      { name: "Large", price: "SAR 599", features: ["Up to 10000L", "Certificate"] },
    ],
  },
  {
    title: "Furniture Cleaning", slug: "furniture-cleaning", description: "Professional furniture cleaning and care.", icon: Armchair, image: furnitureCleaning,
    longDescription: "Complete furniture cleaning service for all types of wood, fabric, and leather furniture.",
    benefits: ["All material types", "Stain removal", "Polish & protection", "Like-new results"],
    process: ["Material assessment", "Cleaning solution prep", "Deep cleaning", "Protection coating"],
    packages: [
      { name: "Basic", price: "SAR 149", features: ["Up to 3 pieces", "Surface cleaning"] },
      { name: "Standard", price: "SAR 299", features: ["Up to 6 pieces", "Deep cleaning"] },
      { name: "Premium", price: "SAR 499", features: ["All furniture", "Polish & protection"] },
    ],
  },
  {
    title: "Pest Control", slug: "pest-control", description: "Effective pest elimination and prevention.", icon: Bug, image: pestControl,
    longDescription: "Our pest control experts use safe methods to eliminate cockroaches, ants, termites, and rodents.",
    benefits: ["Safe chemicals", "Long-lasting protection", "All pest types", "Follow-up visits"],
    process: ["Pest identification", "Treatment plan", "Application", "Follow-up"],
    packages: [
      { name: "Basic", price: "SAR 149", features: ["General spray", "1 visit", "30-day warranty"] },
      { name: "Advanced", price: "SAR 299", features: ["Targeted treatment", "2 visits", "90-day warranty"] },
      { name: "Annual", price: "SAR 799", features: ["Quarterly visits", "Year-round protection"] },
    ],
  },
];
