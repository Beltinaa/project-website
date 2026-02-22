import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import CallNowBar from "./components/layout/CallNowBar";
import WhatsAppFloat from "./components/layout/WhatsAppFloat";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Rendering from "./pages/Rendering";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main className="main-content" role="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rendering" element={<Rendering />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CallNowBar />
      <WhatsAppFloat />
    </div>
  );
};

export default App;
