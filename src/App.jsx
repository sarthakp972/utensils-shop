import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnnouncementBar from "./Components/AnnouncementBar";
import Navbar1 from "./Components/Navbar1";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import AllProducts from "./Pages/AllProducts";
// import Taste from "./Components/Taste";
import Footer from "./Components/Footer";
import Pital from "./Pages/Pital";
import Kansa from "./Pages/Kansa";
import Copper from "./Pages/Copper";
import Alliuminum from "./Pages/Alliuminum";
import ContactUs from "./Pages/ContactUs";

export default function App() {
  return (
    <Router>
      <>
      {/* <Taste/> */}
        <AnnouncementBar />
        <Navbar1 />
        <Routes>
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/pital" element={<Pital/>} />
        <Route path="/kansa" element={<Kansa/>} />
        <Route path="/copper" element={<Copper/>} />
        <Route path="/alliuminum" element={<Alliuminum/>} />
          <Route path="/" element={<Home />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/all-products" element={<AllProducts />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
        <Footer/>
      </>
    </Router>
  );
}
