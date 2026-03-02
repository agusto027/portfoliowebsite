import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const update = () => {
            const total = document.body.scrollHeight - window.innerHeight
            setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
        }
        window.addEventListener('scroll', update, { passive: true })
        return () => window.removeEventListener('scroll', update)
    }, [])

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 2, zIndex: 200, background: 'rgba(255,255,255,0.04)' }}>
            <motion.div
                style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, var(--accent), var(--cyan))',
                    width: `${progress}%`,
                    transformOrigin: 'left',
                }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
            />
        </div>
    )
}
