import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
    {
        title: 'PhysioGo',
        desc: 'A comprehensive physiotherapy platform connecting patients with physiotherapists. Includes appointment booking, exercise tracking, video consultations, and AI-powered recommendations.',
        tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
        cat: 'fullstack',
        color: '#06b6d4',
        emoji: '🏥',
        github: 'https://github.com/agusto027/physio-go-hackathon.git',
        live: 'https://physio-go-seven.vercel.app/',
    },
    {
        title: 'IET Canteen System',
        desc: 'Real-time food ordering and management for IET Lucknow canteen. Features order tracking, menu management, payment integration, and a live admin dashboard.',
        tags: ['React', 'Express', 'MongoDB', 'Tailwind', 'JWT'],
        cat: 'fullstack',
        color: '#10b981',
        emoji: '🍔',
        github: 'https://github.com/agusto027/iet-canteen',
        live: 'https://iet-canteen.vercel.app',
    },
    {
        title: 'MindMapify',
        desc: 'AI-powered PDF-to-mind-map converter. Uses OpenAI to analyze document content and generate interactive visual knowledge maps.',
        tags: ['React', 'Node.js', 'OpenAI API', 'Firebase', 'Tailwind'],
        cat: 'ai',
        color: '#7c3aed',
        emoji: '🧠',
        github: 'https://github.com/agusto027/mindmapify',
        live: 'https://mindmapify.vercel.app',
    },
]

const filters = ['All', 'Full Stack', 'AI']
const filterMap = { 'All': null, 'Full Stack': 'fullstack', 'AI': 'ai' }

export default function Projects() {
    const [filter, setFilter] = useState('All')
    const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })
    const filtered = filterMap[filter] ? projects.filter(p => p.cat === filterMap[filter]) : projects

    return (
        <section id="projects" className="section">
            <div ref={ref} className="wrap">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
                    <span className="section-label">Projects</span>
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 12 }}>
                        <h2 className="section-title" data-heading="WORK">
                            Things I've built
                        </h2>
                        <div style={{ display: 'flex', gap: 4 }}>
                            {filters.map(f => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f)}
                                    style={{
                                        padding: '6px 14px', borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: 'pointer',
                                        border: filter === f ? '1px solid rgba(124,58,237,0.4)' : '1px solid transparent',
                                        background: filter === f ? 'rgba(124,58,237,0.1)' : 'transparent',
                                        color: filter === f ? 'var(--accent)' : 'var(--text-3)',
                                        transition: 'all 0.2s ease',
                                    }}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="divider" style={{ marginBottom: 36 }} />
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    <AnimatePresence mode="popLayout">
                        {filtered.map((p, i) => (
                            <motion.div
                                layout
                                key={p.title}
                                className="card"
                                style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: i * 0.08 }}
                            >
                                {/* Top color bar */}
                                <div style={{ height: 3, background: `linear-gradient(90deg, ${p.color}bb, transparent)` }} />

                                {/* Card header with emoji */}
                                <div style={{
                                    padding: '20px 20px 16px',
                                    display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12
                                }}>
                                    <div>
                                        <span style={{ fontSize: 28 }}>{p.emoji}</span>
                                        <h3 className="font-display" style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-1)', marginTop: 8 }}>{p.title}</h3>
                                    </div>
                                    <div style={{ display: 'flex', gap: 4, flexShrink: 0, marginTop: 4 }}>
                                        <a href={p.github} target="_blank" rel="noopener noreferrer"
                                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: 8, border: '1px solid var(--border)', color: 'var(--text-3)', textDecoration: 'none', transition: 'all 0.2s ease', background: 'transparent' }}
                                            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-1)' }}
                                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-3)' }}
                                            aria-label="GitHub"
                                        >
                                            <FiGithub size={14} />
                                        </a>
                                        <a href={p.live} target="_blank" rel="noopener noreferrer"
                                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: 8, border: '1px solid var(--border)', color: 'var(--text-3)', textDecoration: 'none', transition: 'all 0.2s ease', background: 'transparent' }}
                                            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-1)' }}
                                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-3)' }}
                                            aria-label="Live Demo"
                                        >
                                            <FiExternalLink size={14} />
                                        </a>
                                    </div>
                                </div>

                                {/* Description */}
                                <p style={{ padding: '0 20px 16px', fontSize: 13.5, color: 'var(--text-3)', lineHeight: 1.7, flex: 1 }}>
                                    {p.desc}
                                </p>

                                {/* Tags */}
                                <div style={{ padding: '12px 20px 20px', display: 'flex', flexWrap: 'wrap', gap: 6, borderTop: '1px solid var(--border)' }}>
                                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
