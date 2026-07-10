import React, { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import ContactModal from './components/ContactModal';
import WorkshopModal from './components/WorkshopModal';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AccessibilityStatement from './pages/AccessibilityStatement';
import BlogPost from './pages/BlogPost';
import BlogList from './pages/BlogList';
import QRContact from './pages/QRContact';
import Resources from './pages/Resources';
import Workshop from './pages/Workshop';
import AIVideoAdsMasterclass from './pages/AIVideoAdsMasterclass';
import { ModalContext } from './context/ModalContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function MainLayout({ children }) {
  const { pathname } = useLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [workshopModalOpen, setWorkshopModalOpen] = useState(false);
  const [workshopTitle, setWorkshopTitle] = useState('AI Workshop');
  const isMasterclassPage = pathname.includes('/masterclass');

  const openModal = () => setModalOpen(true);
  const openWorkshopModal = (title = 'AI Workshop') => {
    setWorkshopTitle(title);
    setWorkshopModalOpen(true);
  };

  return (
    <ModalContext.Provider value={{ openModal, openWorkshopModal }}>
      <div className="min-h-screen bg-white text-black flex flex-col font-sans">
        <Navbar />
        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        <WorkshopModal isOpen={workshopModalOpen} onClose={() => setWorkshopModalOpen(false)} workshopTitle={workshopTitle} />
        <main className="flex-grow">
          {children}
        </main>
        {!isMasterclassPage && <CTASection />}
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
                <Route path="/workshop" element={<Workshop />} />
                <Route path="/workshop/:workshopId/masterclass" element={<AIVideoAdsMasterclass />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
