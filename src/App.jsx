import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Store from "./pages/Store";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:category" element={<Store />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
