import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import Home from './pages/Home';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import Services from './pages/Services';
import ProductAndMarket from './pages/ProductAndMarket';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <PageLayout>
        <div className="noise-overlay"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product-and-market" element={<ProductAndMarket />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
