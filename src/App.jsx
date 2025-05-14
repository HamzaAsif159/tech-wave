import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Contact />} />
          <Route exact path="/support" element={<FAQ />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
