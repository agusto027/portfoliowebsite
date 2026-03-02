import { useState, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: -100, y: -100 })
    const [hov, setHov] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Smooth spring for the single dot
    const springX = useSpring(pos.x, { stiffness: 500, damping: 28, mass: 0.5 })
    const springY = useSpring(pos.y, { stiffness: 500, damping: 28, mass: 0.5 })

    useEffect(() => {
        if ('ontouchstart' in window) { setIsMobile(true); return }

        const onMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY })
            springX.set(e.clientX)
            springY.set(e.clientY)
        }

        window.addEventListener('mousemove', onMove)

        const addListeners = () => {
            document.querySelectorAll('a, button, input, textarea, select, [data-cursor]').forEach(el => {
                el.addEventListener('mouseenter', () => setHov(true))
                el.addEventListener('mouseleave', () => setHov(false))
            })
        }
        addListeners()
        const obs = new MutationObserver(addListeners)
        obs.observe(document.body, { childList: true, subtree: true })

        return () => { window.removeEventListener('mousemove', onMove); obs.disconnect() }
    }, [springX, springY])

    if (isMobile) return null

    return (
        <motion.div
            style={{
                x: springX, y: springY,
                translateX: '-50%', translateY: '-50%',
                position: 'fixed', zIndex: 9999, pointerEvents: 'none',
                borderRadius: '50%',
                background: hov ? 'rgba(96,165,250,0.4)' : 'var(--accent)',
                mixBlendMode: 'difference'
            }}
            animate={{
                width: hov ? 32 : 12,
                height: hov ? 32 : 12,
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        />
    )
}
