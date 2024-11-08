import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ImplantSupportSystem from './pages/ImplantSupportSystem';
import SmartParkingSystem from './pages/SmartParkingSystem';
import FaceRecognitionAttendance from './pages/FaceRecognitionAttendance';
import LabManagementSystem from './pages/LabManagementSystem';
import ERPSystem from './pages/ERPSystem';
import CMSSystem from './pages/CMSSystem';
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
      <footer className="footer">
        <p>&copy; 2025 Md. Tausif Hossain. All rights reserved.</p>
      </footer>
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
