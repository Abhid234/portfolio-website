import { useEffect } from 'react'
import './App.css'
import { HomePage } from './Pages/HomePage';
import { AboutPage } from './Pages/AboutPage';
import { ProjectsPage } from './Pages/ProjectsPage';
import { ContactPage } from './Pages/ContactPage';
import MusicPlayer from './components/MusicPlayer';
import { Routes, Route, useLocation } from 'react-router'
import { Footer } from './components/Footer';

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <MusicPlayer />
    </>
  );
}





export default App
