import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'

const links = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Gallery', id: 'gallery' },
]

const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState('')
    const [isMd, setIsMd] = useState(window.innerWidth >= 860)

    const [theme, setTheme] = useState(
        () => typeof window !== 'undefined' ? localStorage.getItem('theme') || 'dark' : 'dark'
    )

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 24)
            for (let i = links.length - 1; i >= 0; i--) {
                const el = document.getElementById(links[i].id)
                if (el && el.offsetTop - 100 <= window.scrollY) {
                    setActive(links[i].id); break
                }
            }
        }
        const onResize = () => setIsMd(window.innerWidth >= 860)
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onResize)
        return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize) }
    }, [])

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [open])

    const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

    const handleNav = (id) => { setOpen(false); scrollTo(id) }

    return (
        <>
            <motion.nav
                initial={{ y: -70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                    position: 'fixed', top: 20, left: 0, right: 0, zIndex: 100,
                    display: 'flex', justifyContent: 'center', pointerEvents: 'none'
                }}
            >
                <div style={{
                    pointerEvents: 'auto',
                    display: 'flex', alignItems: 'center', gap: isMd ? 8 : 16,
                    background: scrolled ? 'rgba(12, 12, 16, 0.85)' : 'rgba(20, 20, 25, 0.65)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    padding: isMd ? '8px' : '12px 20px',
                    borderRadius: 100,
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}>
                    {/* Desktop nav */}
                    {isMd && links.map(l => (
                        <button
                            key={l.id}
                            onClick={() => handleNav(l.id)}
                            style={{
                                fontSize: 14, fontWeight: 600, padding: '10px 24px', borderRadius: 100, cursor: 'pointer', border: 'none',
                                color: active === l.id ? '#fff' : 'rgba(255,255,255,0.6)',
                                background: active === l.id ? 'var(--accent)' : 'transparent',
                                boxShadow: active === l.id ? '0 4px 16px var(--accent-glow)' : 'none',
                                transition: 'all 0.2s ease',
                                fontFamily: 'var(--font-sans)',
                                letterSpacing: '0.02em',
                                position: 'relative',
                            }}
                            onMouseEnter={e => { if (active !== l.id) { e.target.style.color = '#fff'; e.target.style.background = 'rgba(255,255,255,0.05)' } }}
                            onMouseLeave={e => { if (active !== l.id) { e.target.style.color = 'rgba(255,255,255,0.6)'; e.target.style.background = 'transparent' } }}
                        >
                            {l.label}
                        </button>
                    ))}

                    {/* Theme Switcher & Socials */}
                    {isMd && (
                        <>
                            <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.1)', margin: '0 8px' }} />

                            {/* Theme Toggle Button */}
                            <button
                                onClick={toggleTheme}
                                style={{
                                    background: 'transparent', border: 'none', cursor: 'pointer',
                                    color: 'rgba(255,255,255,0.6)', padding: '8px', borderRadius: '50%',
                                    display: 'flex', transition: 'all 0.2s', marginRight: 4
                                }}
                                onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
                                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'transparent' }}
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
                            </button>
                        </>
                    )}

                    {/* Mobile menu trigger */}
                    {!isMd && (
                        <>
                            <span style={{ fontSize: 16, fontWeight: 600, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.02em' }}>
                                Navigation
                            </span>
                            <button
                                onClick={() => setOpen(o => !o)}
                                style={{ background: 'var(--surface-2)', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', color: '#fff', width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                aria-label="Toggle menu"
                            >
                                {open ? <FiX size={18} /> : <FiMenu size={18} />}
                            </button>
                        </>
                    )}
                </div>
            </motion.nav>

            {/* Mobile fullscreen menu */}
            <AnimatePresence>
                {open && !isMd && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed', top: 80, left: 16, right: 16, zIndex: 99,
                            background: 'rgba(15, 15, 20, 0.95)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: 24, padding: 24,
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
                            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                        }}
                    >
                        {links.map((l, i) => (
                            <motion.button
                                key={l.id}
                                onClick={() => handleNav(l.id)}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="font-display"
                                style={{
                                    background: active === l.id ? 'var(--surface-2)' : 'none',
                                    border: 'none', cursor: 'pointer', width: '100%',
                                    fontSize: 20, fontWeight: 600, borderRadius: 12,
                                    color: active === l.id ? '#fff' : 'rgba(255,255,255,0.6)',
                                    padding: '16px',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                {l.label}
                            </motion.button>
                        ))}

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ display: 'flex', gap: 16, marginTop: 12, width: '100%', justifyContent: 'center' }}>
                            <button
                                onClick={toggleTheme}
                                style={{ background: 'var(--surface-2)', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.8)', padding: 16, borderRadius: '50%', display: 'flex' }}
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
