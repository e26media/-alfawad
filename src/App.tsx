import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import TopBarToggle from "@/components/TopBarToggle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactButton from "@/components/ContactButton";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Clients from "./pages/Clients";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Alfawad from "./pages/Alfawad";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <TopBarToggle />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/industrial" replace />} />
            <Route path="/cleaning" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />

            {/* Package specific routes if needed, otherwise ServiceDetail handles them */}
            <Route path="/full-home-sanitization-package" element={<ServiceDetail />} />
            <Route path="/individual-room-sanitization-packages" element={<ServiceDetail />} />
            <Route path="/ac-cleaning" element={<ServiceDetail />} />
            <Route path="/ac-duct-cleaning" element={<ServiceDetail />} />
            <Route path="/ac-maintenance-and-repair" element={<ServiceDetail />} />
            <Route path="/ac-coil-cleaning-services" element={<ServiceDetail />} />
            <Route path="/ac-installation-and-replacement-services" element={<ServiceDetail />} />
            <Route path="/annual-ac-maintenance-contracts" element={<ServiceDetail />} />
            <Route path="/furniture-cleaning-services" element={<ServiceDetail />} />
            <Route path="/mattress-cleaning" element={<ServiceDetail />} />
            <Route path="/sofa-cleaning-services" element={<ServiceDetail />} />
            <Route path="/carpet-cleaning-sanitation" element={<ServiceDetail />} />
            <Route path="/curtain-cleaning-sanitation" element={<ServiceDetail />} />
            <Route path="/deep-cleaning-service" element={<ServiceDetail />} />
            <Route path="/water-tank-cleaning-disinfection" element={<ServiceDetail />} />
            <Route path="/annual-pest-control-contract" element={<ServiceDetail />} />
            <Route path="/mold-cleaning" element={<ServiceDetail />} />
            <Route path="/painting-service" element={<ServiceDetail />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/our-clients" element={<Clients />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/book-a-free-visit" element={<Booking />} />

            <Route path="/industrial/*" element={<Alfawad />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        {/* <WhatsAppButton /> */}
        {/* <ContactButton /> */}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
