import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import ContactModal from './components/ContactModal';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AccessibilityStatement from './pages/AccessibilityStatement';
import BlogPost from './pages/BlogPost';
import BlogList from './pages/BlogList';
import QRContact from './pages/QRContact';
import { ModalContext } from './context/ModalContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function MainLayout({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <ModalContext.Provider value={openModal}>
      <div className="min-h-screen bg-white text-black flex flex-col font-sans">
        <Navbar />
        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        <main className="flex-grow">
          {children}
        </main>
        <CTASection />
        <Contact />
      </div>
    </ModalContext.Provider>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/contact" element={<QRContact />} />
        <Route
          path="*"
          element={
            <MainLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
