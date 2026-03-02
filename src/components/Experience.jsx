import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
    {
        role: 'Marketing Lead',
        org: 'Navyug Navachar Foundation',
        period: 'Jan 2023 – Present',
        desc: 'Driving digital marketing strategies, managing social media presence, and building community outreach campaigns across platforms.',
        tags: ['Leadership', 'Strategy', 'Marketing'],
        color: '#06b6d4',
    },
    {
        role: 'PR Lead',
        org: 'E-Cell IET Lucknow',
        period: 'Jul 2023 – Present',
        desc: 'Managing public relations, organizing startup events and hackathons, building industry partnerships for the Entrepreneurship Cell.',
        tags: ['Public Relations', 'Events', 'Networking'],
        color: '#7c3aed',
    },
    {
        role: 'Open Source Contributor',
        org: 'GitHub',
        period: 'May 2022 – Present',
        desc: 'Contributing to React ecosystem projects, developer tools, and web accessibility improvements across multiple repositories.',
        tags: ['Open Source', 'React', 'Git', 'Code Review'],
        color: '#10b981',
    },
]

export default function Experience() {
    const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

    return (
        <section id="experience" className="section">
            <div ref={ref} className="wrap">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
                    <span className="section-label">Experience</span>
                    <h2 className="section-title" data-heading="JOURNEY">
                        Where I've contributed
                    </h2>
                    <div className="divider" style={{ marginBottom: 36 }} />
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.role}
                            className="card"
                            style={{ padding: '24px', position: 'relative', overflow: 'hidden' }}
                            initial={{ opacity: 0, x: -16 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                            {/* Left color border */}
                            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: exp.color, borderRadius: '0 0 0 0' }} />
                            <div style={{ paddingLeft: 16 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 4 }}>
                                    <div>
                                        <h3 className="font-display" style={{ fontSize: 18, fontWeight: 800, color: 'var(--text-1)' }}>{exp.role}</h3>
                                        <span style={{ fontSize: 14, color: exp.color, fontWeight: 500 }}>{exp.org}</span>
                                    </div>
                                    <span style={{ fontSize: 12, color: 'var(--text-3)', fontFamily: 'monospace', whiteSpace: 'nowrap', marginTop: 2 }}>{exp.period}</span>
                                </div>
                                <p style={{ fontSize: 14, color: 'var(--text-3)', lineHeight: 1.7, margin: '10px 0 14px' }}>{exp.desc}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                    {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
