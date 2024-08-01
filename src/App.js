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


function App() {
  


  return (
    
    <>
      
      <Navbar />
      <div className="App container">
        <div className="row">
        
          <Routes>
            
            <Route path="/" element={<Home />}></Route>
            <Route path="/about-us" element={<Aboutus />}></Route>
            <Route path="/questions" element={<Questions />}></Route>
            <Route path="/contact-us" element={<Contactus />}></Route>
            <Route path="/complaints" element={<Complaints />}></Route>
            <Route path="/our-loaction" element={<OurLocation />}></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </>

  );
}

export default App;
