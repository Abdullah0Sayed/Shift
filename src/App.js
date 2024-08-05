// ---- Import React Router ----
import { Routes, Route } from "react-router-dom";

import "./App.css";

// ---- components ----


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import Questions from "./components/Questions";
import Home from "./components/Home";
import Contactus from "./components/Contatcus";
import Complaints from "./components/Complaints";
import OurLocation from "./components/OurLocation";
import OurProducts from "./components/OurProducts";
import WarrantyPolicy from "./components/WarrantyPolicy";
import ProductDetails from "./components/ProductDetails";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Gallery from "./components/Gallery";


function App() {
  


  return (
    
    <>
      
      <Navbar />
      <div className="App">
       
        
          <Routes>
            
            <Route path="/" element={<Home />}></Route>
            <Route path="/about-us" element={<Aboutus />}></Route>
            <Route path="/questions" element={<Questions />}></Route>
            <Route path="/contact-us" element={<Contactus />}></Route>
            <Route path="/complaints" element={<Complaints />}></Route>
            <Route path="/our-loaction" element={<OurLocation />}></Route>
            <Route path="/our-products" element={<OurProducts />}></Route>
            <Route path="/warranty-policy" element={<WarrantyPolicy />}></Route>
            <Route path="/product-details" element={<ProductDetails />}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
            <Route path="/our-works-gallery" element={<Gallery />}></Route>
          </Routes>
        </div>
      
      <Footer />
    </>

  );
}

export default App;
