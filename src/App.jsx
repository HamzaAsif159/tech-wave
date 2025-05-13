import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Contact />} />
          <Route exact path="/support" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
