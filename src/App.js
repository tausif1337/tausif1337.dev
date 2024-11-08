import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImplantSupportSystem from './projects/ImplantSupportSystem';
import SmartParkingSystem from './projects/SmartParkingSystem';
import FaceRecognitionAttendance from './projects/FaceRecognitionAttendance';
import LabManagementSystem from './projects/LabManagementSystem';
import ERPSystem from './projects/ERPSystem';
import CMSSystem from './projects/CMSSystem';
import './styles.css';

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="container">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Page Layout */}
        <Route path="/" element={<HomePage />} />

        {/* Separate Project Pages */}
        <Route path="/implant-support-system" element={<ImplantSupportSystem />} />
        <Route path="/smart-parking-system" element={<SmartParkingSystem />} />
        <Route path="/face-recognition-attendance" element={<FaceRecognitionAttendance />} />
        <Route path="/lab-management-system" element={<LabManagementSystem />} />
        <Route path="/erp-system" element={<ERPSystem />} />
        <Route path="/cms-system" element={<CMSSystem />} />
      </Routes>
    </Router>
  );
}

export default App;