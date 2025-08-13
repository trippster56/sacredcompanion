import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Resources } from './pages/Resources';
import { Gatherings } from './pages/Gatherings';
import { SpiritualDirection } from './pages/SpiritualDirection';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream">
        <ScrollToTop />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/gatherings" element={<Gatherings />} />
            <Route path="/spiritual-direction" element={<SpiritualDirection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;