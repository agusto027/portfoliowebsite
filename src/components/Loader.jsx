import { motion } from 'framer-motion'

export default function Loader() {
    return (
        <motion.div
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            style={{
                position: 'fixed', inset: 0, zIndex: 9999,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                background: '#030305', gap: '32px',
            }}
        >
            <div style={{ position: 'relative', width: 120, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Outer rotating dashed ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    style={{
                        position: 'absolute', inset: 0,
                        border: '1px dashed rgba(96, 165, 250, 0.3)',
                        borderRadius: '50%',
                    }}
                />

                {/* Middle fast ring */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    style={{
                        position: 'absolute', inset: 16,
                        border: '2px solid transparent',
                        borderTopColor: 'var(--cyan)',
                        borderBottomColor: 'var(--accent)',
                        borderRadius: '50%',
                        opacity: 0.8
                    }}
                />

                {/* Inner glowing core */}
                <motion.div
                    animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        position: 'absolute', inset: 36,
                        background: 'linear-gradient(135deg, var(--accent) 0%, var(--cyan) 100%)',
                        borderRadius: '50%',
                        filter: 'blur(12px)',
                        opacity: 0.6
                    }}
                />

                {/* Logo Text */}
                <span className="font-display" style={{
                    position: 'relative', zIndex: 10,
                    fontSize: 28, fontWeight: 800, color: '#fff',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}>
                    A.
                </span>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
            >
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, color: 'var(--text-1)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                    Initializing
                </span>

                {/* Loading Bar */}
                <div style={{ width: 140, height: 2, background: 'rgba(255,255,255,0.05)', borderRadius: 2, overflow: 'hidden' }}>
                    <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.6, ease: 'circOut' }}
                        style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent), var(--cyan))' }}
                    />
                </div>
            </motion.div>
        </motion.div>
    )
}
