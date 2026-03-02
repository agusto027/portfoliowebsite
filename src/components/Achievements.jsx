import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiCloud, FiTrendingUp, FiUsers } from 'react-icons/fi'

const items = [
    { icon: FiAward, title: 'Hackathon Winner', desc: 'Multiple wins for innovative full-stack solutions with real-world impact.', accent: '#f59e0b' },
    { icon: FiCloud, title: 'AWS Certified', desc: 'Certified in cloud architecture and services from Amazon Web Services.', accent: '#ff9900' },
    { icon: FiTrendingUp, title: '200+ DSA Solved', desc: 'Consistent problem-solving on LeetCode & competitive platforms.', accent: '#10b981' },
    { icon: FiUsers, title: 'Tech Community Leader', desc: 'Organizing workshops, events & mentoring CS students at IET Lucknow.', accent: '#7c3aed' },
]

export default function Achievements() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

    return (
        <section id="achievements" className="section">
            <div ref={ref} className="wrap">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
                    <span className="section-label">Achievements</span>
                    <h2 className="section-title" data-heading="ACCOLADES">
                        Milestones & recognition
                    </h2>
                    <div className="divider" style={{ marginBottom: 36 }} />
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 14 }}>
                    {items.map(({ icon: Icon, title, desc, accent }, i) => (
                        <motion.div
                            key={title}
                            className="card"
                            style={{ padding: '22px 20px' }}
                            initial={{ opacity: 0, y: 14 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.35, delay: i * 0.08 }}
                        >
                            <div style={{
                                width: 38, height: 38, borderRadius: 10, marginBottom: 14,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                background: `${accent}15`,
                            }}>
                                <Icon style={{ width: 18, height: 18, color: accent }} />
                            </div>
                            <h3 className="font-display" style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-1)', marginBottom: 6 }}>{title}</h3>
                            <p style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.65 }}>{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
