import { Routes, Route } from "react-router-dom";

import NavCompnents from "./components/NavCompnents";
import FooterComponents from "./components/FooterComponents";

import HomePage from "./Pages/HomePage";
import KelasPage from "./Pages/KelasPage";
import TestimonialPage from "./Pages/TestimonialPage";
import FaqPage from "./Pages/FaqPage";
import SyaratPage from "./Pages/SyaratPage";

function App() {
 return (
  <div>
  <NavCompnents/>
  
  <Routes>
    <Route path="/" Component={HomePage}/>
    <Route path="/kelas" Component={KelasPage}/>
    <Route path="/testimonial" Component={TestimonialPage}/>
    <Route path="/faq" Component={FaqPage}/>
    <Route path="/syarat" Component={SyaratPage}/>
  </Routes>

  <FooterComponents/>
  </div>
 )
  
}

export default App
