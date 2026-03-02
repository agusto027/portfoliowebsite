import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiDownloadCloud, FiCalendar } from 'react-icons/fi'
import profileImg from '../photo_2026-03-02_22-13-45.jpg' // Using one of the provided photos as the heroic profile picture

const socials = [
    { Icon: FiGithub, href: 'https://github.com/agusto027', label: 'GitHub' },
    { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/anupamdwivedi027', label: 'LinkedIn' },
    { Icon: FiTwitter, href: 'https://x.com/i_mAugusto', label: 'Twitter' },
    { Icon: FiInstagram, href: 'https://www.instagram.com/anupam.dwivedi.27', label: 'Instagram' },
]

export default function Hero() {
    return (
        <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 64 }}>
            {/* Glow blobs */}
            <div className="blob" style={{ width: 800, height: 800, background: 'radial-gradient(circle, rgba(124,58,237,0.1), transparent 70%)', top: '-20%', right: '-10%' }} />
            <div className="blob" style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(6,182,212,0.08), transparent 70%)', bottom: '-10%', left: '-10%' }} />

            {/* Subtle grid */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.03,
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
            }} />

            <div className="wrap" style={{ position: 'relative', zIndex: 1, paddingTop: 60, paddingBottom: 100, width: '100%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 64 }}>

                {/* Left Column */}
                <div style={{ flex: '1 1 400px', maxWidth: 540 }}>

                    {/* Intro Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 40 }}
                    >
                        <span style={{
                            display: 'flex', alignItems: 'center', gap: 8, padding: '6px 14px',
                            borderRadius: 100, border: '1px solid rgba(255,255,255,0.06)',
                            background: 'rgba(255,255,255,0.02)', fontSize: 12, color: 'var(--text-3)',
                        }}>
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--emerald)', display: 'inline-block', boxShadow: '0 0 10px var(--emerald)' }} />
                            Available for new opportunities
                        </span>
                    </motion.div>

                    {/* Headline block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        style={{ marginBottom: 32 }}
                    >
                        <h2 className="font-display" style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--text-1)', fontWeight: 700, margin: 0, lineHeight: 1.1 }}>
                            Hello, I am <span style={{ color: 'var(--text-3)', fontWeight: 400 }}>|</span>
                        </h2>
                        <p className="font-display" style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontStyle: 'italic', color: 'var(--text-3)', marginBottom: 20 }}>
                            turning <span style={{ color: 'var(--text-1)' }}>ideas</span> into <span style={{ fontStyle: 'normal', color: 'var(--accent)' }}>reality</span>
                        </p>
                        <h1 className="font-display" style={{
                            fontSize: 'clamp(36px, 5vw, 68px)',
                            fontWeight: 800,
                            lineHeight: 1.05,
                            letterSpacing: '-0.02em',
                            margin: '0 0 24px -4px',
                            color: 'var(--text-1)',
                            whiteSpace: 'nowrap',
                        }}>
                            Anupam <span className="gradient-text" style={{ fontStyle: 'italic', fontWeight: 600, paddingRight: '12px' }}>Dwivedi</span>
                        </h1>
                    </motion.div>

                    {/* Typed Introduction */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ fontSize: 16, color: 'var(--text-3)', marginBottom: 40, maxWidth: 480, lineHeight: 1.6 }}
                    >
                        I build fast, scalable, and human-centered products for the web, specializing in the{' '}
                        <TypeAnimation
                            sequence={[
                                'React Ecosystem.', 2500,
                                'MERN Stack.', 2500,
                                'Modern UI/UX.', 2500,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            style={{ color: 'var(--accent)', fontWeight: 600 }}
                        />
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}
                    >
                        <a
                            href="https://drive.google.com/file/d/1lnS5FMcgSXZR4QzEhrr9R1_NXli1vz47/view?usp=sharing"
                            download="Anupam_Dwivedi_Resume.pdf"
                            style={{ padding: '12px 24px', fontSize: 13, borderRadius: 100, display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', background: '#fff', color: '#000', fontWeight: 600, transition: 'transform 0.2s, background 0.2s', border: '1px solid #fff' }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = '#f3f4f6' }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = '#fff' }}
                        >
                            <FiDownloadCloud size={16} /> Download Resume
                        </a>
                        <a
                            href="https://cal.com/anupam-dwivedi-hvgsid"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ padding: '12px 24px', fontSize: 13, borderRadius: 100, display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', background: 'transparent', color: 'var(--text-2)', fontWeight: 500, transition: 'transform 0.2s, background 0.2s', border: '1px solid rgba(255,255,255,0.1)' }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-1)' }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-2)' }}
                        >
                            <FiCalendar size={16} /> Book a 30 Min Call
                        </a>
                    </motion.div>
                </div>

                {/* Right Column / Image Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: 400 }}
                >
                    {/* Inner glowing card wrapper */}
                    <div style={{
                        width: '100%',
                        aspectRatio: '1 / 1',
                        borderRadius: 20,
                        border: '1px solid rgba(255,255,255,0.15)',
                        padding: 6,
                        background: 'rgba(255,255,255,0.01)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                        marginBottom: 20
                    }}>
                        <div style={{
                            width: '100%', height: '100%', borderRadius: 16, overflow: 'hidden', position: 'relative',
                            background: 'var(--surface-2)'
                        }}>
                            <img
                                src={profileImg}
                                alt="Anupam Dwivedi"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(15%) contrast(105%)' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)' }} />
                        </div>
                    </div>

                    {/* Under-Image Metadata & Socials */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0 12px' }}>
                        <div>
                            <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-1)', marginBottom: 2 }}>Anupam Dwivedi</h3>
                            <p style={{ fontSize: 14, color: 'var(--text-3)', letterSpacing: '0.02em' }}>Software Engineer</p>
                        </div>

                        <div style={{ display: 'flex', gap: 16 }}>
                            {socials.slice(0, 3).map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'var(--text-3)',
                                        transition: 'color 0.2s ease, transform 0.2s ease',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-1)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-3)'; e.currentTarget.style.transform = 'translateY(0)' }}
                                >
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Scroll indicator - Bottom Center */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)' }}
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        style={{
                            width: 26, height: 42, borderRadius: 13,
                            border: '2px solid rgba(255,255,255,0.15)',
                            display: 'flex', justifyContent: 'center', paddingTop: 6,
                        }}
                    >
                        <div style={{ width: 4, height: 10, borderRadius: 99, background: 'var(--text-3)' }} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
