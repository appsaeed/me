import { Route, Routes } from "@solidjs/router";
import Nopage from "./pages/404";
import HelpCenter from "./pages/help-center";
import Homepage from "./pages/index";
import License from "./pages/license";
import PrivacyPolicy from "./pages/privacy-policy";
import Termandconditions from "./pages/terms-and-conditions";

export default function Router() {
  return (
    <Routes base={import.meta.env.VITE_BASENAME}>
      <Route path="/" element={<Homepage />} />
      <Route path="/license" element={<License />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/term-and-conditions" element={<Termandconditions />} />
      <Route path="/help-center" element={<HelpCenter />} />
      <Route path="/*" element={<Nopage />} />
    </Routes>
  );
}
