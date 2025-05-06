import { lazy, Suspense } from 'react';
import LoadingSpinner from '../components/common/LoadingSpinner';

// Lazy load components
const Hero = lazy(() => import('../components/Hero'));
const About = lazy(() => import('../components/About'));
const Skills = lazy(() => import('../components/Skills/Skills'));
const Experience = lazy(() => import('../components/Experience/Experience'));
const EducationAchievements = lazy(() => import('../components/EducationAchievements/EducationAchievements'));
const Projects = lazy(() => import('../components/Projects/Projects'));
const Blog = lazy(() => import('../components/Blog/Blog'));
const Contact = lazy(() => import('../components/Contact/Contact'));

// Lazy load project pages
const ImplantSupportSystem = lazy(() => import('../pages/Project/ImplantSupportSystem'));
const SmartParkingSystem = lazy(() => import('../pages/Project/SmartParkingSystem'));
const FaceRecognitionAttendance = lazy(() => import('../pages/Project/FaceRecognitionAttendance'));
const LabManagementSystem = lazy(() => import('../pages/Project/LabManagementSystem'));
const ERPSystem = lazy(() => import('../pages/Project/ERPSystem'));
const CMSSystem = lazy(() => import('../pages/Project/CMSSystem'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));

export const routes = [
  {
    path: '/',
    element: {
      main: (
        <>
          <Hero />
          <div className="container">
            <About />
            <Skills />
            <Experience />
            <EducationAchievements />
            <Projects />
            <Contact />
            <Blog />
          </div>
        </>
      ),
    },
  },
  {
    path: '/implant-support-system',
    element: <ImplantSupportSystem />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
  {
    path: '/smart-parking-system',
    element: <SmartParkingSystem />,
  },
  {
    path: '/face-recognition-attendance',
    element: <FaceRecognitionAttendance />,
  },
  {
    path: '/lab-management-system',
    element: <LabManagementSystem />,
  },
  {
    path: '/erp-system',
    element: <ERPSystem />,
  },
  {
    path: '/cms-system',
    element: <CMSSystem />,
  },
];

export const wrapWithSuspense = (Component) => (
  <Suspense fallback={<LoadingSpinner />}>
    {Component}
  </Suspense>
); 