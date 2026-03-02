import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiZoomIn } from 'react-icons/fi'

// Dynamically import images from the src folder
import img1 from '../photo_2026-03-02_22-13-45.jpg'
import img2 from '../photo_2026-03-02_22-13-51.jpg'
import img3 from '../photo_2026-03-02_22-13-55.jpg'
import img4 from '../photo_2026-03-02_22-14-04.jpg'
import img5 from '../photo_2026-03-02_22-14-08.jpg'
import img6 from '../photo_2026-03-02_22-14-13.jpg'
import img7 from '../photo_2026-03-02_22-14-17.jpg'

const galleryItems = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
    { id: 6, src: img6 },
    { id: 7, src: img7 },
]

// Duplicate for infinite sliding effect
const extendedItems = [...galleryItems, ...galleryItems, ...galleryItems]

export default function Gallery() {
    const [selectedImg, setSelectedImg] = useState(null)

    // Close modal on escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedImg(null)
        }
        if (selectedImg) {
            window.addEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'hidden' // prevent background scrolling
        } else {
            document.body.style.overflow = ''
        }
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedImg])

    return (
        <section id="gallery" className="section" style={{ paddingBottom: 64, paddingTop: 64, overflow: 'hidden' }}>
            <div className="wrap" style={{ marginBottom: 32 }}>
                <span className="section-label">Moments</span>
                <h2 className="section-title" data-heading="GALLERY">
                    Life in <span className="gradient-text">Pictures</span>
                </h2>
                <p style={{ fontSize: 15, color: 'var(--text-3)', maxWidth: 600 }}>
                    Glimpses from hackathons, tech meetups, and community building at IET Lucknow.
                </p>
            </div>

            {/* Sliding Banner Container */}
            <div style={{ position: 'relative', width: '100%', display: 'flex', overflow: 'hidden' }}>

                {/* Left Fade */}
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to right, var(--bg), transparent)', zIndex: 10, pointerEvents: 'none' }} />

                {/* Animated Track */}
                <motion.div
                    animate={{ x: ['0%', '-33.333%'] }}
                    transition={{
                        duration: 35, // Smooth slow scroll
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                    style={{ display: 'flex', gap: 24, paddingLeft: 24 }}
                >
                    {extendedItems.map((item, i) => (
                        <motion.div
                            key={`${item.id}-${i}`}
                            className="card"
                            onClick={() => setSelectedImg(item)}
                            whileHover={{ y: -5, scale: 1.02 }}
                            style={{
                                width: 320, height: 220, flexShrink: 0,
                                position: 'relative', overflow: 'hidden',
                                display: 'flex', alignItems: 'flex-end', padding: 20,
                                cursor: 'zoom-in',
                                borderRadius: 16
                            }}
                        >
                            {/* Background Image */}
                            <img
                                src={item.src}
                                alt="Gallery Image"
                                style={{
                                    position: 'absolute', inset: 0, width: '100%', height: '100%',
                                    objectFit: 'cover', zIndex: 0
                                }}
                            />

                            {/* Hover icon */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                style={{
                                    position: 'absolute', inset: 0, zIndex: 2,
                                    background: 'rgba(96,165,250,0.2)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    backdropFilter: 'blur(2px)'
                                }}
                            >
                                <div style={{ background: 'rgba(0,0,0,0.5)', padding: 12, borderRadius: '50%', color: '#fff' }}>
                                    <FiZoomIn size={24} />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Right Fade */}
                <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to left, var(--bg), transparent)', zIndex: 10, pointerEvents: 'none' }} />
            </div>

            {/* Zoom Modal */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                        style={{
                            position: 'fixed', inset: 0, zIndex: 99999,
                            background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            padding: 24, cursor: 'zoom-out'
                        }}
                    >
                        <button
                            onClick={(e) => { e.stopPropagation(); setSelectedImg(null) }}
                            style={{
                                position: 'absolute', top: 24, right: 24,
                                background: 'rgba(255,255,255,0.1)', border: 'none',
                                color: '#fff', width: 44, height: 44, borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer', zIndex: 10, transition: 'background 0.2s'
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        >
                            <FiX size={24} />
                        </button>

                        <motion.img
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            src={selectedImg.src}
                            alt="Zoomed Gallery Image"
                            onClick={(e) => e.stopPropagation()} // Prevent click from closing immediately when clicking on image
                            style={{
                                maxWidth: '100%', maxHeight: '90vh',
                                objectFit: 'contain', borderRadius: 16,
                                boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
                                cursor: 'default'
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
