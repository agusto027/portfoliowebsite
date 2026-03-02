import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiZap, FiTarget, FiGlobe } from 'react-icons/fi'

const stats = [
    { icon: FiCode, value: '3+', label: 'Projects Built' },
    { icon: FiTarget, value: '200+', label: 'DSA Solved' },
    { icon: FiZap, value: '3+', label: 'Years Coding' },
    { icon: FiGlobe, value: '3+', label: 'Hackathons' },
]

export default function About() {
    const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

    return (
        <section id="about" className="section">
            <div ref={ref} className="wrap">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
                    <span className="section-label">About Me</span>
                    <h2 className="section-title" data-heading="ABOUT">
                        Turning ideas into <span className="gradient-text">real products</span>
                    </h2>
                    <div className="divider" style={{ marginBottom: 40 }} />
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'start' }}>
                    {/* Text col */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--text-2)' }}>
                                I'm a Computer Science student at <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>IET Lucknow</strong>, passionate about building full-stack web applications that are fast, scalable, and beautiful.
                            </p>
                            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--text-2)' }}>
                                My core stack is <strong style={{ color: 'var(--accent)', fontWeight: 600 }}>MERN</strong> (MongoDB, Express, React, Node.js). I enjoy every layer — clean REST APIs, performant databases, and polished frontends.
                            </p>
                            <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--text-3)' }}>
                                When I'm not building, I'm leading tech communities, solving competitive programming challenges, or sharing my journey on <a href="https://www.linkedin.com/in/anupamdwivedi027" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>LinkedIn</a>.
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
                                {['🎓 IET Lucknow', '📍 India', '💼 Open to Work', '🚀 MERN Stack'].map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats col */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}
                    >
                        {stats.map(({ icon: Icon, value, label }) => (
                            <div key={label} className="card" style={{ padding: '24px 20px', textAlign: 'center' }}>
                                <Icon style={{ width: 20, height: 20, color: 'var(--accent)', margin: '0 auto 10px' }} />
                                <div className="font-display" style={{ fontSize: 32, fontWeight: 800, color: 'var(--text-1)', lineHeight: 1, marginBottom: 4 }}>{value}</div>
                                <div style={{ fontSize: 12, color: 'var(--text-3)', fontWeight: 500 }}>{label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
