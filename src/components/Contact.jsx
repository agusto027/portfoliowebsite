import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiSend, FiCheck, FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'

const socials = [
    { Icon: FiGithub, href: 'https://github.com/agusto027', label: 'GitHub' },
    { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/anupamdwivedi027', label: 'LinkedIn' },
    { Icon: FiTwitter, href: 'https://x.com/i_mAugusto', label: 'Twitter' },
    { Icon: FiInstagram, href: 'https://www.instagram.com/anupam.dwivedi.27', label: 'Instagram' },
]

export default function Contact() {
    const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle')

    const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

    const submit = (e) => {
        e.preventDefault()
        setStatus('loading')
        setTimeout(() => {
            setStatus('success')
            setForm({ name: '', email: '', message: '' })
            setTimeout(() => setStatus('idle'), 3000)
        }, 1500)
    }

    const infoCard = (Icon, label, value, href) => (
        <div className="card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(124,58,237,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon style={{ width: 17, height: 17, color: 'var(--accent)' }} />
            </div>
            <div>
                <div style={{ fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>{label}</div>
                {href
                    ? <a href={href} style={{ fontSize: 14, color: 'var(--text-1)', textDecoration: 'none', fontWeight: 500 }}
                        onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                        onMouseLeave={e => e.target.style.color = 'var(--text-1)'}
                    >{value}</a>
                    : <div style={{ fontSize: 14, color: 'var(--text-1)', fontWeight: 500 }}>{value}</div>
                }
            </div>
        </div>
    )

    return (
        <section id="contact" className="section">
            <div ref={ref} className="wrap">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
                    <span className="section-label">Contact</span>
                    <h2 className="section-title" data-heading="CONTACT">
                        Let's build something <span className="gradient-text">together</span>
                    </h2>
                    <p style={{ fontSize: 15, color: 'var(--text-3)', marginBottom: 12 }}>
                        Open for freelance, internships, or full-time opportunities.
                    </p>
                    <div className="divider" style={{ marginBottom: 36 }} />
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, alignItems: 'start' }}>
                    {/* Left: info */}
                    <motion.div
                        style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
                        initial={{ opacity: 0, x: -16 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {infoCard(FiMail, 'Email', 'dwivedi0027@gmail.com', 'mailto:dwivedi0027@gmail.com')}
                        {infoCard(FiMapPin, 'Location', 'Lucknow, India', null)}

                        <div className="card" style={{ padding: '16px 20px' }}>
                            <div style={{ fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Socials</div>
                            <div style={{ display: 'flex', gap: 8 }}>
                                {socials.map(({ Icon, href, label }) => (
                                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                                        style={{
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            width: 36, height: 36, borderRadius: 9,
                                            border: '1px solid var(--border)',
                                            color: 'var(--text-3)', textDecoration: 'none',
                                            transition: 'all 0.2s ease',
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
                                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-3)'; e.currentTarget.style.background = 'transparent' }}
                                    >
                                        <Icon size={15} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: form */}
                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <form onSubmit={submit} className="card" style={{ padding: '28px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Name</label>
                                    <input className="input" type="text" name="name" required value={form.name} onChange={set('name')} placeholder="Your name" />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Email</label>
                                    <input className="input" type="email" name="email" required value={form.email} onChange={set('email')} placeholder="you@email.com" />
                                </div>
                            </div>
                            <div style={{ marginBottom: 18 }}>
                                <label style={{ display: 'block', fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Message</label>
                                <textarea className="input" name="message" required rows={4} value={form.message} onChange={set('message')} placeholder="Tell me about your project or idea..." style={{ resize: 'none' }} />
                            </div>
                            <button type="submit" disabled={status === 'loading'} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: status === 'loading' ? 0.7 : 1 }}>
                                {status === 'loading' ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                                            style={{ width: 16, height: 16, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff' }}
                                        />
                                        Sending...
                                    </>
                                ) : status === 'success' ? (
                                    <><FiCheck size={16} /> Message Sent!</>
                                ) : (
                                    <><FiSend size={16} /> Send Message</>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
