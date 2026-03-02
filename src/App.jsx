import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Gallery />
            <Achievements />
            <Contact />
          </main>
          <Footer />

          {/* Floating Contact Button */}
          <motion.a
            href="mailto:dwivedi0027@gmail.com"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 2, type: 'spring', stiffness: 200, damping: 20 }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 24px rgba(96,165,250,0.4)', y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="floating-contact-btn"
            aria-label="Contact via Email"
          >
            <FiMail size={24} />
          </motion.a>
        </>
      )}
    </>
  )
}
