import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your pages
import Home from "../pages/HomePage";
// import About from "../pages/";
import ProductsPage from "../pages/ProductsPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import About from "../pages/About";
// import Profile from "../pages/Profile";
// import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      {/* Navbar can be here if you want it visible on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}

        {/* 404 route */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
