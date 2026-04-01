import { Routes, Route } from "react-router-dom";
import AlfawadLayout from "@/components/alfawad/AlfawadLayout";
import AlfawadHome from "./alfawad/Home";
import Overview from "./alfawad/Overview";
import Introduction from "./alfawad/Introduction";
import ChairmanMessage from "./alfawad/ChairmanMessage";
import VisionMission from "./alfawad/VisionMission";
import QualityPolicy from "./alfawad/QualityPolicy";
import EnvironmentSafety from "./alfawad/EnvironmentSafety";

import TechnicalManpower from "./alfawad/TechnicalManpower";
import HeavyEquipment from "./alfawad/HeavyEquipment";
import ProjectSupport from "./alfawad/ProjectSupport";
import ProjectManagement from "./alfawad/ProjectManagement";
import MaterialService from "./alfawad/MaterialService";

import Contact from "./alfawad/Contact";
import { Brochure, ClientsGallery, Career, Enquiry } from "./alfawad/UtilityPages";

const Alfawad = () => {
  return (
    <AlfawadLayout>
      <Routes>
        <Route path="/" element={<AlfawadHome />} />
        
        {/* Overview Pages */}
        <Route path="/overview" element={<Overview />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/chairman-message" element={<ChairmanMessage />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/quality-policy" element={<QualityPolicy />} />
        <Route path="/environment-safety" element={<EnvironmentSafety />} />
        
        {/* Services Pages */}
        <Route path="/services/technical-manpower" element={<TechnicalManpower />} />
        <Route path="/services/heavy-equipment" element={<HeavyEquipment />} />
        <Route path="/services/project-support" element={<ProjectSupport />} />
        <Route path="/services/project-management" element={<ProjectManagement />} />
        <Route path="/services/material-service" element={<MaterialService />} />

        {/* Utility Pages */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/brochure" element={<Brochure />} />
        <Route path="/clients" element={<ClientsGallery />} />
        <Route path="/career" element={<Career />} />
        <Route path="/enquiry" element={<Enquiry />} />
        
        {/* Catch-all */}
        <Route path="*" element={<AlfawadHome />} />
      </Routes>
    </AlfawadLayout>
  );
};

export default Alfawad;
