import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ParticlesBg from './components/ParticlesBg.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Achievements from './pages/Achievements'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative z-10 overflow-x-hidden">
        {/* Background Canvas Particles */}
        <ParticlesBg />

        {/* Global Navigation */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
             <Route path="/achievements" element={<Achievements />} />
            
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  )
}
