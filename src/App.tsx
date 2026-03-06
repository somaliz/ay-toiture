import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import CityPage from "./pages/CityPage";
import MentionsLegales from "./pages/MentionsLegales";
import ServicePage from "./pages/ServicePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/charpente" element={<ServicePage />} />
            <Route path="/couverture" element={<ServicePage />} />
            <Route path="/inspection" element={<ServicePage />} />
            <Route path="/diagnostic" element={<ServicePage />} />
            <Route path="/reparation" element={<ServicePage />} />
            <Route path="/remplacement" element={<ServicePage />} />
            <Route path="/entretien" element={<ServicePage />} />
            <Route path="/devis" element={<ServicePage />} />
            <Route path="/:slug" element={<CityPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
