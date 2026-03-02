import { useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine)
    }, [])

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            className="fixed inset-0 z-0"
            options={{
                fullScreen: false,
                background: { color: { value: 'transparent' } },
                fpsLimit: 60,
                particles: {
                    color: { value: ['#6C63FF', '#00D4FF', '#A855F7'] },
                    links: {
                        color: '#6C63FF',
                        distance: 160,
                        enable: true,
                        opacity: 0.08,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 0.5,
                        direction: 'none',
                        random: true,
                        straight: false,
                        outModes: { default: 'out' },
                    },
                    number: {
                        density: { enable: true, area: 1400 },
                        value: 35,
                    },
                    opacity: {
                        value: { min: 0.08, max: 0.25 },
                    },
                    shape: { type: 'circle' },
                    size: {
                        value: { min: 1, max: 2.5 },
                    },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: 'grab' },
                    },
                    modes: {
                        grab: { distance: 120, links: { opacity: 0.2 } },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}

export default ParticlesBackground
