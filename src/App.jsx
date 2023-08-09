import { Flowbite } from "flowbite-react";
import "./App.css";
import Navbar from "./components/Navbar";
import FirstPage from "./components/firstpage/FirstPage";
import ContactPage from "./components/contact/ContactPage";
import ServicesPage from "./components/servicespage/ServicesPage";
import PricingPage from "./components/pricing/PricingPage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";

function App() {
  return (
    <>
      <Router>
        <Flowbite>
          <Navbar />
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/*" element={<FirstPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Flowbite>
        <Footer />
      </Router>
    </>
  );
}

export default App;
