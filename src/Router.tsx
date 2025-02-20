import { Route, Routes, useLocation } from "@solidjs/router";
import { createEffect } from "solid-js";
import Nopage from "./pages/404";
import HelpCenter from "./pages/help-center";
import Homepage from "./pages/index";
import License from "./pages/license";
import PrivacyPolicy from "./pages/privacy-policy";
import Termandconditions from "./pages/terms-and-conditions";

export default function Router() {
  const location = useLocation();
  createEffect(() => {
    const currentLocation = location.pathname;
    if (window.gtag) {
      window.gtag("config", import.meta.env.VITE_GOOGLE_ANALYTICS_ID, {
        page_path: currentLocation,
      });
    }
  });


  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/contact" element={<HelpCenter />} />
      <Route path="/help-center" element={<HelpCenter />} />
      <Route path="/license" element={<License />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/term-and-conditions" element={<Termandconditions />} />
      <Route path="/*" element={<Nopage />} />
    </Routes>
  );
}
