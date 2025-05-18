import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import IndustrySolutions from './components/IndustrySolutions';
import AICapabilities from './components/AICapabilities';
import UseCasesGallery from './components/UseCasesGallery';
import CaseStudies from './components/CaseStudies';
import ProcessSection from './components/ProcessSection';
import Technologies from './components/Technologies';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import GetDemo from './pages/GetDemo';
import Contact from './pages/Contact';
import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div id="hero" data-aos="fade-up"><Hero /></div>
        <div id="value-proposition" data-aos="fade-up" data-aos-delay="100"><ValueProposition /></div>
        <div id="industry-solutions" data-aos="fade-up" data-aos-delay="200"><IndustrySolutions /></div>
        <div id="ai-capabilities" data-aos="fade-up" data-aos-delay="300"><AICapabilities /></div>
        <div id="use-cases" data-aos="fade-up" data-aos-delay="400"><UseCasesGallery /></div>
        <div id="process" data-aos="fade-up" data-aos-delay="600"><ProcessSection /></div>
        <div id="technologies" data-aos="fade-up" data-aos-delay="700"><Technologies /></div>
        <div id="services" data-aos="fade-up" data-aos-delay="800"><Services /></div>
        <div id="testimonials" data-aos="fade-up" data-aos-delay="900"><Testimonials /></div>
        <div id="cta" data-aos="fade-up" data-aos-delay="1000"><CallToAction /></div>
      </main>
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 40 });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-demo" element={<><Navbar /><GetDemo /><Footer /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;
