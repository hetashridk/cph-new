import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import ContactModal from './components/ContactModal';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AccessibilityStatement from './pages/AccessibilityStatement';
import { ModalContext } from './context/ModalContext';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <ModalContext.Provider value={openModal}>
      <Router>
        <div className="min-h-screen bg-white text-black flex flex-col font-sans">
          <Navbar />
          <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
            </Routes>
          </main>
          <Contact />
        </div>
      </Router>
    </ModalContext.Provider>
  );
}

export default App;
