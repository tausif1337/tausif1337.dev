import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ImplantSupportSystem from './pages/Project/ImplantSupportSystem';
import SmartParkingSystem from './pages/Project/SmartParkingSystem';
import FaceRecognitionAttendance from './pages/Project/FaceRecognitionAttendance';
import LabManagementSystem from './pages/Project/LabManagementSystem';
import ERPSystem from './pages/Project/ERPSystem';
import CMSSystem from './pages/Project/CMSSystem';
import './assets/styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Page Layout */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <div className="container">
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Blog />
                <Contact />
              </div>
              <Footer />
            </>
          }
        />

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
