import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PhotosPage from './pages/PhotosPage';
import BlogsPage from './pages/BlogsPage';
import ProjectsPage from './pages/ProjectsPage';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/photos" element={<PhotosPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Background Gradients */}
        <div className="fixed inset-0 -z-20 bg-background" />
        <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -z-10 animate-pulse" />
        <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

        <ScrollToTop />
        <Navbar />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Dashboard Container Style */}
          <div className="relative mt-8 mb-8 glass rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
            <div className="absolute inset-0 bg-linear-to-b from-white/[0.01] to-transparent pointer-events-none" />
            <AnimatedRoutes />
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
