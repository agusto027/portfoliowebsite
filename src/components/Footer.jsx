import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowUp } from 'react-icons/fi'

export default function Footer() {
    return (
        <footer style={{ borderTop: '1px solid var(--border)', padding: '28px 0', background: 'var(--bg)' }}>
            <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                <div>
                    <span className="font-display" style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-1)' }}>
                        AD<span style={{ color: 'var(--accent)' }}>.</span>
                    </span>
                    <p style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 4 }}>
                        © {new Date().getFullYear()} Anupam Dwivedi
                    </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    {[
                        { Icon: FiGithub, href: 'https://github.com/agusto027' },
                        { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/anupamdwivedi027' },
                        { Icon: FiTwitter, href: 'https://x.com/i_mAugusto' },
                        { Icon: FiInstagram, href: 'https://www.instagram.com/anupam.dwivedi.27' },
                    ].map(({ Icon, href }, i) => (
                        <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: 8, color: 'var(--text-3)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
                        >
                            <Icon size={16} />
                        </a>
                    ))}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            width: 34, height: 34, borderRadius: 8, marginLeft: 4,
                            border: '1px solid var(--border)', background: 'transparent',
                            color: 'var(--text-3)', cursor: 'pointer',
                            transition: 'all 0.2s ease',
                        }}
                        aria-label="Back to top"
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-1)' }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-3)' }}
                    >
                        <FiArrowUp size={15} />
                    </button>
                </div>
            </div>
        </footer>
    )
}
