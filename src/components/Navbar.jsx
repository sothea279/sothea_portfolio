import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('theme') || 'dark'
    }
    return 'dark'
  })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  // Automatically close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  const handleScroll = (elementId) => {
    setIsMobileMenuOpen(false)
    if (location.pathname !== '/') {
      return
    }
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const linkClass =
    'rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition-all hover:text-cyan-400 dark:text-slate-200 dark:hover:text-cyan-300'

  const mobileLinkClass =
    'block rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-all hover:bg-slate-100 hover:text-cyan-500 dark:text-slate-200 dark:hover:bg-slate-800/60 dark:hover:text-cyan-300'

  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/20 bg-white/70 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 sm:px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-semibold tracking-[0.2em] text-[#19335c] transition-colors dark:text-white sm:text-2xl"
          >
            &lt;/ <span className="text-[#19335c] dark:text-white">Sothea</span> &gt;
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden  items-center gap-1 md:flex lg:gap-2">
            <Link to="/" className={linkClass }>
             <span className="text-[#19335c] dark:text-white hover:text-[#f8c92d] dark:hover:text-[#f8c92d] font-bold ">Home</span>
            </Link>
            <Link to="/projects" className={linkClass}>
              <span className="text-[#19335c] hover:text-[#f8c92d] font-bold dark:text-white dark:hover:text-[#f8c92d]">Projects</span>
            </Link>
            {/* <a href="/#skills" onClick={() => handleScroll('skills')} className={linkClass}>
              Skills
            </a> */}
        <Link to="/achievements" className={linkClass}>
 <span className="text-[#19335c] dark:text-white hover:text-[#f8c92d] dark:hover:text-[#f8c92d] font-bold">Achievements</span>
</Link>
            <button
              onClick={toggleTheme} 
              className="ml-2 rounded-full border border-slate-200 bg-slate-100/80 p-2 text-slate-700 transition-all hover:bg-slate-200 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Right Controls: Dark Mode Toggle & Hamburger Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="rounded-full border border-slate-200 bg-slate-100/80 p-2 text-slate-700 transition-all hover:bg-slate-200 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full border border-slate-200 bg-slate-100/80 p-2 text-slate-700 transition-all hover:bg-slate-200 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="mt-3 space-y-1 rounded-2xl border border-slate-200/50 bg-white/90 p-3 shadow-xl backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/90 md:hidden">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={mobileLinkClass}
            >
              Home
            </Link>
            <Link
              to="/projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className={mobileLinkClass}
            >
              Projects
            </Link>
            <Link
              to="/achievements"
              onClick={() => setIsMobileMenuOpen(false)}
              className={mobileLinkClass}
            >
              Achievements
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
