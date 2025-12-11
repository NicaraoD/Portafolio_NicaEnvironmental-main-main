import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import Education from './pages/Education';
import Experience from './pages/Experience';
import AcademicRoles from './pages/AcademicRoles';
import ResearchProjects from './pages/ResearchProjects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/experience/:itemSlug" element={<Experience />} />
        <Route path="/academic-roles" element={<AcademicRoles />} />
        <Route path="/research-projects" element={<ResearchProjects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/skills/:skillId" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

