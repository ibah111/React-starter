import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registries from "../../pages/Registries/Registries";
import Main from "../../pages/Main/Main";
import Navigation from "./DrawerNavigation";

export default function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/Registries" element={<Registries />} />
      </Routes>
    </BrowserRouter>
  );
}
